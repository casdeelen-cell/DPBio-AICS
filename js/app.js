/*
  app.js
  ------
  Shared logic used by both index.html and topic.html.
  Progress is saved in the browser's localStorage, per device. That
  means it's each student's own personal tracker, it isn't shared
  between devices or visible to anyone else. See the README if you
  want to explore turning this into something shared later.
*/

const STORAGE_KEY = "bioProgressV1";

const STATUS_ORDER = ["notstarted", "learning", "help", "understood"];
const STATUS_LABELS = {
  notstarted: "Not started",
  learning: "Learning",
  help: "Need help",
  understood: "Understood"
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    // storage unavailable, fail quietly
  }
}

function getStatus(code) {
  const data = loadProgress();
  return data[code] || "notstarted";
}

function setStatus(code, status) {
  const data = loadProgress();
  data[code] = status;
  saveProgress(data);
}

function topicTitle(code) {
  return (typeof TOPIC_TITLES !== "undefined" && TOPIC_TITLES[code]) || code;
}

function isHLTopic(code) {
  return typeof HL_ONLY_TOPICS !== "undefined" && HL_ONLY_TOPICS.includes(code);
}

/* Builds a 4-button progress control inside `container` for the given
   topic code. */
function buildProgressControl(container, code, opts) {
  opts = opts || {};
  container.innerHTML = "";
  container.classList.add("progress-control");
  if (opts.large) container.classList.add("large");

  STATUS_ORDER.forEach(function (status) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "progress-btn";
    btn.dataset.status = status;
    btn.textContent = STATUS_LABELS[status];
    if (getStatus(code) === status) btn.classList.add("active");

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      setStatus(code, status);
      Array.from(container.children).forEach(function (child) {
        child.classList.toggle("active", child.dataset.status === status);
      });
      if (opts.onChange) opts.onChange(status);
    });

    container.appendChild(btn);
  });
}

/* ---------- text rendering: bold markup + wordbank tooltips ---------- */

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* Turns **word** into <strong>, and if the word matches a wordbank
   term for this topic (ignoring case and a trailing s), wraps it as
   a tooltip-bearing term instead of a plain bold word. */
function parseInlineMarkdown(text, code) {
  const bank = (typeof WORDBANK !== "undefined" && WORDBANK[code]) || [];
  const escaped = escapeHtml(text);

  return escaped.replace(/\*\*(.+?)\*\*/g, function (match, word) {
    const normalized = word.toLowerCase().replace(/s$/, "");
    const hit = bank.find(function (entry) {
      const t = entry.term.toLowerCase();
      return t === word.toLowerCase() || t === normalized || t.replace(/s$/, "") === normalized;
    });
    if (hit) {
      return '<strong class="term" data-tooltip="' + escapeHtml(hit.definition) + '">' + word + "</strong>";
    }
    return "<strong>" + word + "</strong>";
  });
}

/* Lets tapping a term on touch devices show the tooltip too (hover alone
   doesn't fire on touch). Tapping elsewhere dismisses it. Call this once
   per page after content is rendered. */
function enableTermTooltipTaps(root) {
  root.addEventListener("click", function (e) {
    const term = e.target.closest(".term");
    document.querySelectorAll(".term.tooltip-active").forEach(function (el) {
      if (el !== term) el.classList.remove("tooltip-active");
    });
    if (term) {
      e.stopPropagation();
      term.classList.toggle("tooltip-active");
    }
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".term.tooltip-active").forEach(function (el) {
      el.classList.remove("tooltip-active");
    });
  });
}

/* Renders the word bank sidebar panel for a topic, with a toggle into
   a simple flip-through flashcard mode. */
function buildWordbankPanel(container, code) {
  const bank = (typeof WORDBANK !== "undefined" && WORDBANK[code]) || [];
  if (!bank.length) {
    container.innerHTML = "";
    return;
  }
  const card = document.createElement("div");
  card.className = "sidebar-card wordbank-card";
  const title = document.createElement("h4");
  title.textContent = "Word bank";
  card.appendChild(title);

  const body = document.createElement("div");
  card.appendChild(body);

  const flashBtn = document.createElement("button");
  flashBtn.type = "button";
  flashBtn.className = "flashcard-toggle";
  flashBtn.textContent = "Practice as flashcards";
  card.appendChild(flashBtn);

  function renderList() {
    flashBtn.textContent = "Practice as flashcards";
    body.innerHTML = "";
    const list = document.createElement("dl");
    list.className = "wordbank-list";
    bank.forEach(function (entry) {
      const dt = document.createElement("dt");
      dt.textContent = entry.term;
      const dd = document.createElement("dd");
      dd.textContent = entry.definition;
      list.appendChild(dt);
      list.appendChild(dd);
    });
    body.appendChild(list);
  }

  function renderFlashcards() {
    flashBtn.textContent = "Back to list";
    body.innerHTML = "";
    let i = 0;
    let flipped = false;

    const wrap = document.createElement("div");
    wrap.className = "flashcard-wrap";

    const counter = document.createElement("div");
    counter.className = "flashcard-counter";
    wrap.appendChild(counter);

    const faceCard = document.createElement("div");
    faceCard.className = "flashcard";
    wrap.appendChild(faceCard);

    const nav = document.createElement("div");
    nav.className = "flashcard-nav";
    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.textContent = "Prev";
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.textContent = "Next";
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    wrap.appendChild(nav);

    function render() {
      const entry = bank[i];
      counter.textContent = (i + 1) + " / " + bank.length;
      faceCard.textContent = flipped ? entry.definition : entry.term;
      faceCard.classList.toggle("flipped", flipped);
    }

    faceCard.addEventListener("click", function () {
      flipped = !flipped;
      render();
    });
    prevBtn.addEventListener("click", function () {
      i = (i - 1 + bank.length) % bank.length;
      flipped = false;
      render();
    });
    nextBtn.addEventListener("click", function () {
      i = (i + 1) % bank.length;
      flipped = false;
      render();
    });

    render();
    body.appendChild(wrap);
  }

  let inFlashcardMode = false;
  flashBtn.addEventListener("click", function () {
    inFlashcardMode = !inFlashcardMode;
    if (inFlashcardMode) renderFlashcards();
    else renderList();
  });

  renderList();
  container.appendChild(card);
}

/* Renders the "did you know" sidebar card, if a fact exists for this topic. */
function buildFunFactPanel(container, code) {
  const fact = (typeof FUN_FACTS !== "undefined" && FUN_FACTS[code]) || null;
  if (!fact) return;
  const card = document.createElement("div");
  card.className = "sidebar-card fact-card";
  card.innerHTML = '<h4>Did you know</h4><p>' + escapeHtml(fact) + "</p>";
  container.appendChild(card);
}

/* ---------- last visited topic ---------- */

const LAST_VISITED_KEY = "bioLastVisitedV1";

function setLastVisited(code) {
  try {
    localStorage.setItem(LAST_VISITED_KEY, code);
  } catch (e) {
    // storage unavailable, fail quietly
  }
}

function getLastVisited() {
  try {
    return localStorage.getItem(LAST_VISITED_KEY);
  } catch (e) {
    return null;
  }
}

/* ---------- streak counter ---------- */

const STREAK_KEY = "bioStreakV1";

/* Call once per page load (index.html only). Returns the current streak
   count and updates it: same day = no change, consecutive day = +1,
   gap of 2+ days = resets to 1. */
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  let data;
  try {
    data = JSON.parse(localStorage.getItem(STREAK_KEY)) || {};
  } catch (e) {
    data = {};
  }
  if (data.lastDate === today) return data.streak || 1;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const streak = data.lastDate === yesterday ? (data.streak || 0) + 1 : 1;
  data = { lastDate: today, streak: streak };
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  } catch (e) {
    // storage unavailable, fail quietly
  }
  return streak;
}

/* ---------- random topic picker ---------- */

/* Picks a random topic code, preferring ones that actually have a quiz
   or question bank so "quiz me" never lands on an empty page if it can
   help it. */
function pickRandomTopic() {
  if (typeof UNITS === "undefined") return null;
  const all = UNITS.flatMap(function (u) { return u.topics; });
  const withQuestions = all.filter(function (code) {
    const hasQuiz = typeof QUIZZES !== "undefined" && QUIZZES[code] && QUIZZES[code].length;
    const hasQB = typeof QUESTIONBANK !== "undefined" && QUESTIONBANK[code] && QUESTIONBANK[code].length;
    return hasQuiz || hasQB;
  });
  const pool = withQuestions.length ? withQuestions : all;
  return pool[Math.floor(Math.random() * pool.length)];
}

function toYouTubeEmbed(url) {
  if (!url) return null;
  let id = null;
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (watchMatch) id = watchMatch[1];
  else if (shortMatch) id = shortMatch[1];
  else if (embedMatch) id = embedMatch[1];
  if (!id) return null;
  return "https://www.youtube.com/embed/" + id;
}

function toSlidesEmbed(url) {
  if (!url) return null;
  if (url.includes("/embed")) return url;
  if (url.includes("/edit")) return url.replace(/\/edit.*$/, "/embed?start=false&loop=false");
  return url.replace(/\/?$/, "/embed?start=false&loop=false");
}

/* ---------- quiz engine ---------- */

/* Renders an interactive multiple choice quiz from a plain array of
   question objects: { q, options, correct, explanation }. Used for
   both the quick quiz (quizzes.js) and the question bank (questionbank.js). */
function buildQuizFromList(container, questions, emptyMessage) {
  if (!questions || !questions.length) {
    container.innerHTML = '<p class="no-resources">' + (emptyMessage || "Nothing here yet.") + "</p>";
    return;
  }

  let index = 0;
  let score = 0;

  function renderQuestion() {
    const q = questions[index];
    const card = document.createElement("div");
    card.className = "quiz-card";

    const progress = document.createElement("div");
    progress.className = "quiz-progress";
    progress.textContent = "Question " + (index + 1) + " of " + questions.length;
    card.appendChild(progress);

    const qText = document.createElement("div");
    qText.className = "quiz-question";
    qText.textContent = q.q;
    card.appendChild(qText);

    let answered = false;

    q.options.forEach(function (opt, i) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        const buttons = card.querySelectorAll(".quiz-option");
        buttons.forEach(function (b, bi) {
          b.disabled = true;
          if (bi === q.correct) b.classList.add("correct");
          else if (bi === i) b.classList.add("incorrect");
        });
        if (i === q.correct) score++;

        const explanation = document.createElement("div");
        explanation.className = "quiz-explanation";
        explanation.textContent = q.explanation || "";
        card.appendChild(explanation);

        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "quiz-next";
        nextBtn.textContent = index === questions.length - 1 ? "See score" : "Next question";
        nextBtn.addEventListener("click", function () {
          index++;
          container.innerHTML = "";
          if (index < questions.length) {
            renderQuestion();
          } else {
            renderScore();
          }
        });
        card.appendChild(nextBtn);
      });
      card.appendChild(btn);
    });

    container.appendChild(card);
  }

  function renderScore() {
    const card = document.createElement("div");
    card.className = "quiz-card";
    const scoreEl = document.createElement("div");
    scoreEl.className = "quiz-score";
    scoreEl.textContent = "You got " + score + " out of " + questions.length + " right.";
    card.appendChild(scoreEl);

    const retry = document.createElement("button");
    retry.type = "button";
    retry.className = "quiz-retry";
    retry.textContent = "Try again";
    retry.addEventListener("click", function () {
      index = 0;
      score = 0;
      container.innerHTML = "";
      renderQuestion();
    });
    card.appendChild(retry);
    container.appendChild(card);
  }

  renderQuestion();
}

/* Quick quiz: your own lightweight questions from quizzes.js */
function buildQuiz(container, code) {
  const questions = (typeof QUIZZES !== "undefined" && QUIZZES[code]) || [];
  buildQuizFromList(container, questions, "No quiz for this topic yet.");
}

/* Question bank: real exam-style questions, adapted from the IB
   Questionbank, from questionbank.js. Renders its own attribution
   line above the quiz so you never need to add it by hand. */
function buildQuestionBank(container, code) {
  const questions = (typeof QUESTIONBANK !== "undefined" && QUESTIONBANK[code]) || [];
  if (!questions.length) {
    container.innerHTML = '<p class="no-resources">No question bank questions for this topic yet.</p>';
    return;
  }
  const attribution = document.createElement("div");
  attribution.className = "qb-attribution";
  attribution.textContent = "Adapted from IB Questionbank";
  container.appendChild(attribution);

  const quizArea = document.createElement("div");
  container.appendChild(quizArea);
  buildQuizFromList(quizArea, questions);
}

/* Paper 2 / extended-response practice: longer, multi-part questions
   adapted from IB Paper 1B and Paper 2 style exams, from paper2.js.
   Unlike the multiple choice sections, these are self-marked: the
   student reads the prompt, works out their own answer, then reveals
   a teaching-style guidance note per part rather than a single
   right/wrong option. Renders its own attribution line, same
   convention as the question bank. */
function buildPaper2(container, code) {
  const sets = (typeof PAPER2 !== "undefined" && PAPER2[code]) || [];
  if (!sets.length) {
    container.innerHTML = '<p class="no-resources">No Paper 2 style questions for this topic yet.</p>';
    return;
  }

  const attribution = document.createElement("div");
  attribution.className = "qb-attribution";
  attribution.textContent = "Adapted from IB Paper 1B / Paper 2 style questions";
  container.appendChild(attribution);

  let index = 0;

  const nav = document.createElement("div");
  nav.className = "p2-nav";
  container.appendChild(nav);

  const setArea = document.createElement("div");
  container.appendChild(setArea);

  function renderNav() {
    nav.innerHTML = "";
    if (sets.length <= 1) return;
    const label = document.createElement("div");
    label.className = "p2-nav-label";
    label.textContent = "Question " + (index + 1) + " of " + sets.length;
    nav.appendChild(label);
    const btnRow = document.createElement("div");
    btnRow.className = "p2-nav-buttons";
    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "p2-nav-btn";
    prevBtn.textContent = "Previous";
    prevBtn.disabled = index === 0;
    prevBtn.addEventListener("click", function () { index--; renderSet(); });
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "p2-nav-btn";
    nextBtn.textContent = "Next";
    nextBtn.disabled = index === sets.length - 1;
    nextBtn.addEventListener("click", function () { index++; renderSet(); });
    btnRow.appendChild(prevBtn);
    btnRow.appendChild(nextBtn);
    nav.appendChild(btnRow);
  }

  function renderSet() {
    renderNav();
    setArea.innerHTML = "";
    const set = sets[index];
    const card = document.createElement("div");
    card.className = "p2-card";

    if (set.context) {
      const context = document.createElement("div");
      context.className = "p2-context";
      context.textContent = set.context;
      card.appendChild(context);
    }

    const totalMarks = set.parts.reduce(function (sum, p) { return sum + (p.marks || 0); }, 0);
    const totalEl = document.createElement("div");
    totalEl.className = "p2-total-marks";
    totalEl.textContent = "[" + totalMarks + " marks total]";
    card.appendChild(totalEl);

    set.parts.forEach(function (part) {
      const partEl = document.createElement("div");
      partEl.className = "p2-part";

      const promptRow = document.createElement("div");
      promptRow.className = "p2-prompt-row";
      const labelEl = document.createElement("span");
      labelEl.className = "p2-part-label";
      labelEl.textContent = "(" + part.label + ")";
      const promptEl = document.createElement("span");
      promptEl.className = "p2-prompt";
      promptEl.textContent = part.prompt;
      const marksEl = document.createElement("span");
      marksEl.className = "p2-marks";
      marksEl.textContent = "[" + part.marks + "]";
      promptRow.appendChild(labelEl);
      promptRow.appendChild(promptEl);
      promptRow.appendChild(marksEl);
      partEl.appendChild(promptRow);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "p2-toggle";
      toggle.textContent = "Show guidance";
      const guidance = document.createElement("div");
      guidance.className = "p2-guidance";
      guidance.textContent = part.guidance;
      guidance.hidden = true;
      toggle.addEventListener("click", function () {
        guidance.hidden = !guidance.hidden;
        toggle.textContent = guidance.hidden ? "Show guidance" : "Hide guidance";
      });
      partEl.appendChild(toggle);
      partEl.appendChild(guidance);

      card.appendChild(partEl);
    });

    setArea.appendChild(card);
  }

  renderSet();
}
