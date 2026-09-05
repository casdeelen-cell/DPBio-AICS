# DP Biology Site — Style Guide & Conventions

Paste this whole file into the first message of a new chat (along with the
current site zip) and Claude should pick up right where the last chat left
off, without needing to rediscover any of this.

## What this project is

A personal DP Biology revision site, hosted on GitHub Pages, built as a
plain HTML/CSS/JS static site (no build step, no framework). One page per
topic (`topic.html?code=X`), driven by data files in `/js`.

## Content rules — read this before writing any topic's notes

1. **Never write notes from general knowledge alone.** Before writing a
   topic, search for and confirm the real, official IB Biology (2025
   syllabus) statement list for that subtopic, e.g. search
   `"B1.1.1" "B1.1.2" IB biology syllabus statement carbohydrates lipids`.
   Good sources: mrgscience.com, biologyforlife.com, TES/TPT resource
   listings that quote the statement list, revisiondojo.com.
2. Each syllabus statement becomes its own section (or a tight group of
   2-3 closely related statements). The section's `label` field is the
   real statement number (e.g. `"B1.1.5"`), not a generic "1, 2, 3".
3. Mark each section's `level` as `"SL"` or `"HL"` based on the real
   guide, not a guess. Some whole topics are HL-only (check
   `HL_ONLY_TOPICS` in `data.js`, currently A2.1, A2.3, B3.3, C3.1).
4. Write the actual explanatory text yourself, in plain, natural
   language, DP-textbook depth, not IB's copyrighted wording and not a
   generic surface-level summary. Go deep enough to state things
   explicitly rather than leaving them implied (this was explicitly
   flagged as a problem once, don't regress on it).
5. Bold key terms with `**term**`. If a bolded word matches a term in
   that topic's `wordbank.js` entry (case-insensitive), the site
   automatically adds a hover/tap tooltip, no extra linking needed, just
   make sure the word bank actually has the term.
6. Add a `tip` field (Exam tip / Common mistake) sparingly, only where
   there's a genuine, well-known gotcha.
7. Add real images where they clearly help. Source from Wikimedia
   Commons: search `commons.wikimedia.org file [topic] diagram svg`,
   confirm the exact filename on its Commons file page, then use
   `https://commons.wikimedia.org/wiki/Special:FilePath/File_Name.svg`
   as the `image` URL. Never hotlink from Getty/istock/other paid
   stock sites.

## Videos

Source: **Sirius Revision** YouTube channel (channel handle
`@siriusrevision`, IB Biology videos recorded by Cheryl Hickman).
Titles follow the pattern `"[Code] [Topic Name] [IB Biology SL/HL]"`.
To find one: search `"[code]" [topic name] "IB Biology SL/HL" youtube`
and confirm it's really Sirius (2024 upload date, description mentions
"intensive IB revision courses" or credits Cheryl Hickman). Some topics
are split into 2-3 part videos, use the `videos` array in `links.js`
for those (see D3.2, C4.1 for the pattern). If no Sirius video can be
verified, leave it blank rather than guessing, and say so.

## Slides

The user (not Claude) owns and provides Google Slides links, one per
topic, sometimes more than one deck per topic. Add them to the `slides`
field in `links.js` as an array: `[{ label: "Slides", url: "..." }]`,
or with part labels if there's more than one deck. Never fabricate a
slides link.

## Formatives

Formative links also come from the user. Field is `formative` in
`links.js`, a single URL string. Leave `""` if not provided yet, the
site shows "Formative not available yet" rather than hiding the button.

## The IB Questionbank content ("Practice questions" section)

The user has a paid Questionbank subscription and sends PDF exports.
**Never publish official Questionbank text verbatim** on the public
site, that's a real copyright/licensing risk. Instead: rewrite each
question in original wording, same concept/difficulty/correct answer,
into `questionbank.js`, sorted into the correct topic. The site
automatically labels this section "Adapted from IB Questionbank", don't
add that label manually. Only Paper 1 (multiple choice) style questions
fit this format. Extended-response Paper 1B/2 questions have their own
section now (see "Paper 2 practice" below) — don't force them into the
MCQ format.

Send PDFs/docx in small batches (2-3 at a time, or fewer if large) to
avoid hitting the chat's image limit, since the web UI converts PDF
pages to images internally.

## Paper 2 practice ("extended response" section, `js/paper2.js`)

As of this session, the site has a second, separate practice section
alongside the multiple-choice Questionbank: longer, multi-part
extended-response questions adapted from real IB Paper 1B (data-based
short answer) and Paper 2 (extended response) papers. Same copyright
principle as the Questionbank: rewritten in original wording, never
verbatim IB text.

**File:** `js/paper2.js`, keyed by topic code, same as the other
content files:
```js
PAPER2["A1.1"] = [
  {
    context: "short scenario shared by all parts, or \"\" if none",
    parts: [
      { label: "a", prompt: "command-term question text", marks: 4,
        guidance: "teaching-style explanation of what a strong answer covers" }
    ]
  }
]
```
A topic can have more than one question set; the site adds
previous/next navigation automatically when it does.

**Rendering:** `buildPaper2()` in `app.js`, called from `topic.html`
alongside `buildQuiz()` and `buildQuestionBank()`. Unlike the MCQ
sections, these are self-marked — the student reads the prompt, works
out their own answer, then clicks "Show guidance" per part to reveal
the model answer rather than picking from options. Styled with the
site's `--moss` accent (previously only used for tip boxes) to keep it
visually distinct from the green Quick quiz and the rust Practice
questions sections. Section heading: "Paper 2 & extended response".

**Source material used this session:** three Word docx exports from
the user's IB Questionbank subscription (`everything_4.docx`,
`everything_5.docx`, `Everything_6.docx`), containing 270 real exam
questions in total (210 Paper 1A multiple choice, 24 Paper 1B, 36
Paper 2). After deduplicating near-identical questions repeated across
different SL/HL/timezone variants of the same exam sitting, this gave
158 unique MCQs (added to `questionbank.js`, now 252 questions across
all 40 topics, up from 94 across 37) and enough Paper 1B/2 material for
41 extended-response sets (106 sub-parts) across all 40 topics in the
new `paper2.js`. A few MCQs relied on an image for the answer options
that couldn't be reliably transcribed; those were rewritten as new
original questions testing the same underlying concept rather than
skipped, consistent with the "adapted, not reproduced" approach used
throughout this project. Three Paper 2 sets (A2.1, D3.1, D4.2) are
original questions written in the same style, since the source docx
didn't cover those topics in extended-response format.

## Design and tone

- Visual style: warm paper background, forest green as primary accent,
  rust/ochre for HL badges and the Questionbank section, moss green for
  the Paper 2 practice section, Fraunces (serif) for headings, Inter
  (sans) for body text. Lab-notebook feel, not generic SaaS.
- **No emoji anywhere on the site.** This was explicitly requested,
  don't reintroduce them (streak counter, buttons, anything).
- Quick quiz (`quizzes.js`), Practice questions (`questionbank.js`),
  and Paper 2 practice (`paper2.js`)
  are three separate, visually distinct sections. Don't merge them.

## Progress tracking

Understanding-status tracking (`localStorage`) is per-device, per-
browser, genuinely private, and does not sync anywhere. This is a known,
accepted limitation, not a bug to fix unless asked.

## Current status (update this section as you go)

As of the last session: **all 40 topics across Units 1-4 are complete**
to the same standard — real syllabus statement numbers, deep notes,
word bank, a verified Sirius video, and a quick quiz, every single one.

Unit 1 (14 topics): A1.1, D2.3, B1.1, C1.1, A1.2, D1.1, D2.1, B1.2,
A2.1, D1.2, A2.2, B2.2, C1.2, C1.3.

Unit 2 (9 topics): B2.3, D2.2, D1.3, D3.1, D3.2, A3.1, B4.1, D4.1, A4.1.

Unit 3 (7 topics): B4.2, A3.2, D4.2, D4.3, C4.1, C4.2, A4.2.

Unit 4 (10 topics): B2.1, D3.3, C3.1, B3.3, B3.1, B3.2, C2.2, C2.1,
C3.2, A2.3.

This session: did Unit 4 from scratch, **rewrote B2.1 and C4.1** (both
had survived from an older, pre-statement-numbering style with generic
"1, 2, 3" labels — now B2.1.1-B2.1.11 and C4.1.1-C4.1.22, matching the
real IB guide), added C2.1 to `HL_ONLY_TOPICS` (it's entirely HL-only,
like D2.2 and A3.2), found and added the previously-missing A2.1 video,
and **filled in every remaining quick quiz gap across the whole site**
(13 Unit 1 topics had none, plus all of Units 3-4's new topics).

Slides and formatives are still blank across most of Units 2-4, still
waiting on links from the user.

**This session (Word docx import, Paper 2 feature build):** processed
three Word docx exports (270 real exam questions total: 210 Paper 1A
MCQ, 24 Paper 1B, 36 Paper 2) into the site. Questionbank (`js/
questionbank.js`) is now complete and non-empty for **every one of the
40 topics** — the three that had zero questions before this session
(B4.2, C3.1, D2.2) are now covered — for a total of 252 questions, up
from 94. Built a brand-new **Paper 2 practice section**
(`js/paper2.js` + `buildPaper2()` in `app.js` + a new section in
`topic.html`, styled with the `--moss` accent) for the extended-response
Paper 1B/2 material that doesn't fit the MCQ format: 41 question sets
(106 sub-parts total) across all 40 topics, self-marked with a
"Show guidance" reveal per part rather than multiple-choice options.
See the "Paper 2 practice" section above for the full file format and
rendering details.

Open items carried over: the Miller-Urey diagram in Unit 1 is a
German-labelled Wikimedia image (visually clear either way, but worth
swapping for an English version if a cleaner one turns up). The
induced-fit enzyme diagram was fixed this session (now English).

Open items from this session: a handful of source MCQs presented their
answer options only as an image (a table or diagram) rather than as
text; since the image content couldn't be reliably transcribed, these
were replaced with newly written questions testing the same concept
rather than attempting to guess the original options — worth a spot
check against the original PDFs if perfect fidelity to those specific
questions matters. The Paper 2 section currently shows one straight
list of parts per question set with no partial-credit tracking or
score total; a future pass could add a lightweight self-assessment
(e.g. "did you get this part roughly right?" per part) if that would
be useful.

## Images and diagrams

As of the last two sessions, added targeted diagrams for the most
complex, multi-step pathways and structures across the site:
cross-bridge cycling in muscle contraction (B3.3), glycolysis, the
Krebs cycle, and chemiosmosis/ATP synthase (C1.2), meiosis stages
(D2.1), the action potential, synaptic transmission, and saltatory
conduction (C2.2), phagocytosis and antibody structure (C3.2), the
lytic/lysogenic cycle and virus structure (A2.3), the sodium-potassium
pump (B2.1), alveolus gas exchange (B3.1), the heart (B3.2), insulin
signal transduction (C2.1), the reflex arc (C3.1), endosymbiosis
(A2.2), a dihybrid cross Punnett square (D3.2), the nephron (D3.3),
primary succession (D4.2), the greenhouse effect (D4.3), a cladogram
example (A3.2), and a predator-prey population cycle graph (C4.1).
Also fixed the known German-labelled induced-fit enzyme diagram in
C1.1 (now English).

Image coverage went from 27 to 50 of ~332 total sections across these
two sessions. Every "hard pathway" topic flagged by the user has now
been illustrated. Remaining gaps are mostly definitional/comparison
sections that don't need a diagram, plus a handful of lower-priority
structural images (e.g. blood clotting cascade — the real coagulation
cascade is more complex than IB requires and no clean simple diagram
was found; a future pass could look for or build a simplified
platelet → fibrin version instead).
