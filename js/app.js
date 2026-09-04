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
   topic code. Call refreshCallback (optional) whenever status changes,
   useful for updating a summary count elsewhere on the page. */
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

/* ---------- link helpers ---------- */

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
  return url.replace(/\/edit.*$/, "/embed?start=false&loop=false");
}

/* ---------- quiz engine ---------- */

function buildQuiz(container, code) {
  const questions = (typeof QUIZZES !== "undefined" && QUIZZES[code]) || [];
  if (!questions.length) {
    container.innerHTML = '<p class="no-resources">No quiz for this topic yet.</p>';
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
