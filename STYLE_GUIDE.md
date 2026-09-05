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

## Reference pages: command terms, search, checklist

Three cross-cutting pages, separate from the per-topic content, added
in the session after the Paper 2 build. Each is linked from a
`.header-nav` row in the header, present on every page (index, topic,
formulas, and the three pages themselves).

**`terms.html` + `js/commandterms.js`** — the full IB command term
glossary (official definitions, sourced from the IB's own command
term list, not paraphrased) plus a plain-English translation for each,
grouped into the three official tiers (knowledge/comprehension,
application/analysis, synthesis/evaluation). Also includes a
"commonly confused pairs" section (describe vs explain, compare vs
contrast vs distinguish, discuss vs evaluate vs to what extent, state
vs outline vs list, draw vs sketch vs label vs annotate) — this content
came directly from the user, not written by Claude, and should be
preserved as-is if this page is ever revised. Has a live filter box
(`COMMAND_TERMS` array, filtered client-side, no backend). If the IB
revises its command term list, update `js/commandterms.js` directly —
same file format note at the top of that file explains the shape.

**`search.html`** — a single search box that flattens `CONTENT`,
`WORDBANK`, `QUESTIONBANK`, `PAPER2`, and `COMMAND_TERMS` into one
client-side index (`buildSearchIndex()`, runs once on page load, no
persistence needed since the underlying data files rarely change size
enough to matter). Results are grouped by type with a highlighted
match snippet. Notes results deep-link to the exact syllabus statement
using the section's `label` as an anchor ID (`topic.html?code=X#A1.1.1`
style) — this only works because `renderContentSections()` in
`topic.html` sets `block.id = section.label`, so if that ever gets
refactored, check the anchor linking still works. Practice question
and Paper 2 results link to the relevant section on the topic page
(`#practice-questions-section` / `#paper2-section`) rather than a
specific question, since both of those render one question at a time
rather than a scrollable list.

**`checklist.html`** — a flat tick-list of all 332 individual syllabus
statements (`CONTENT[code][i].label` + `.heading`) across all four
units, deliberately separate from the existing per-topic
understanding tracker (`STORAGE_KEY = "bioProgressV1"` in `app.js`).
The distinction matters: the existing tracker is about how well a
topic is understood; this one is a basic coverage checklist, "have I
even been through this specific statement". Uses its own localStorage
key (`bioChecklistV1`) so the two never collide. Has filters to hide
already-checked items and/or HL-only content, plus a reset button.
If a topic has no `CONTENT` entry yet, its statements simply don't
appear here (same "not yet written" convention as the rest of the
site) rather than showing a placeholder row.

## Mock exam (`mock.html`)

Built once all planned docx batches were in (see status log below for
the point this happened). Generates a randomised, timed mock exam
modelled on the real IB Biology exam structure, drawing from the now-
complete `questionbank.js` and `paper2.js` pools.

**Structure, matched to the real exam:** SL sits 30 multiple-choice
questions (1 mark each); HL sits 40. Rather than trying to replicate
IB's actual Paper 1 : Paper 2 mark ratio (real IB weights Paper 2 more
heavily than Paper 1), the user explicitly asked for a 50/50 split by
marks, so the Paper 2 portion is sized to match the MCQ portion: 30
marks of Paper 2 content at SL, 40 at HL. `MOCK_CONFIG` in `mock.html`
holds these numbers (`mcqCount`, `p2MarksTarget`, `minutes`) — change
them there if the target ratio or timing should ever be revisited.
Timings (90 min SL, 120 min HL) are original estimates for this
smaller/rebalanced mock, not copied from the real exam's actual
durations.

**Topic selection (the main feature the user wanted):** a checkbox
grid of all 40 topics, grouped by unit like `checklist.html`, with
"Select all" / "Clear all" shortcuts. Selecting SL disables (greys
out, doesn't just hide) the 7 `HL_ONLY_TOPICS`, since those topics
aren't in the SL syllabus at all; switching back to HL re-enables
them. A live availability note shows how many MCQs/Paper 2 marks
exist for the current topic selection, since a narrow selection (e.g.
just "Water" and "Proteins") may not have enough questions to hit the
full 30/40 target — in that case the exam simply uses everything
available rather than erroring or padding with unrelated content.

**Random selection logic:** `pickMCQs()` pools every question from
`QUESTIONBANK` across the selected topics, shuffles, and takes the
first N. `pickP2Sets()` does the same shuffle-and-take approach but
accumulates whole Paper 2 *sets* (never splits a set's parts across
different exams) until the running mark total reaches or just exceeds
the target — this means the Paper 2 section can slightly overshoot the
target mark count (e.g. 36 marks when the target was 30), which is
expected and fine, not a bug, since sets come in different sizes and
can't be split.

**Self-marking flow:** MCQs are graded automatically on "Finish exam"
(straight comparison against `correct`). Paper 2 has no auto-grading,
since these are free-response — instead, each part gets a textarea
during the exam (optional, just for the student's own reference) and,
on the results screen, reveals the same `guidance` text used elsewhere
on the site alongside a 0-to-max-marks slider so the student can
self-score each part; sliders sum live into the Paper 2 total shown in
the results summary at the top of the page.

**History:** every finished mock is saved to `localStorage` under
`bioMockHistoryV1` (separate key from the progress tracker and
checklist, same pattern) — date, level, topic count, and both scores.
The Paper 2 score in a saved entry updates live as the student moves
self-mark sliders after finishing, so the history reflects their final
self-assessment, not just the MCQ score at the moment they clicked
finish. Shown as a simple table on the setup screen when history
exists. No cap beyond keeping the most recent 20 attempts.

Tested end to end with Playwright: topic filtering, SL/HL switching
and the resulting HL-only topic gating, the full answer → finish →
review → self-mark → live score update loop, and a full site
regression sweep (all 40 topic pages plus every reference page) — zero
console errors throughout.

## Progress tracking

Understanding-status tracking (`localStorage`, key `bioProgressV1`) is
per-device, per-browser, genuinely private, and does not sync anywhere.
This is a known, accepted limitation, not a bug to fix unless asked.
The syllabus checklist (`bioChecklistV1`, see above) is a separate,
independent localStorage key with the same per-device limitation.

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

Slides and formatives are still blank across most of Units 2-4, still
waiting on links from the user.

**Session before last (Word docx import, Paper 2 feature build):**
processed three Word docx exports (270 real exam questions total: 210
Paper 1A MCQ, 24 Paper 1B, 36 Paper 2) into the site. Questionbank
(`js/questionbank.js`) is complete and non-empty for **every one of
the 40 topics** — the three that had zero questions before that
session (B4.2, C3.1, D2.2) are now covered — for a total of 252
questions, up from 94. Built a **Paper 2 practice section**
(`js/paper2.js` + `buildPaper2()` in `app.js` + a section in
`topic.html`, styled with the `--moss` accent) for the extended-response
Paper 1B/2 material that doesn't fit the MCQ format: 41 question sets
(106 sub-parts total) across all 40 topics, self-marked with a
"Show guidance" reveal per part rather than multiple-choice options.

**Two sessions ago (reference pages):** built three new cross-cutting
pages — `terms.html` (command term glossary with official IB
definitions + plain-English translations + commonly-confused-pairs
callouts), `search.html` (cross-topic search across notes, word bank,
both practice sections, and the command term glossary), and
`checklist.html` (a flat tick-list of all 332 syllabus statements,
separate from the per-topic understanding tracker). Added a shared
`.header-nav` to every page's header linking between all of these.
Added anchor IDs to each notes section (`block.id = section.label` in
`topic.html`) so search results can deep-link to the exact statement,
with a brief highlight-fade animation on arrival. See "Reference
pages" section above for full details on each.

**This session (docx batch 2 of ~6, everything_7/8/9):** the user is
sending IB Questionbank docx exports in batches, aiming for 18 files
total. This was the second batch: `everything_7.docx` and
`everything_8.docx` processed successfully (90 questions each, 180
total: 125 Paper 1A MCQ, 55 Paper 2). **`everything_9.docx` uploaded
as an empty 0-byte file and could not be read** — flagged to the user,
needs re-uploading in a future session. After deduplicating repeated
questions across SL/HL/timezone variants, got 114 unique MCQs and 21
usable open-ended items from the two working files. Added 111 new MCQs
to `questionbank.js` (one very minor addition, an RNA-vs-DNA codon
question, was written by Claude to fill a gap left by a dropped
duplicate-source item, not sourced from the docx) and 23 new Paper 2
question sets (39 sub-parts) to `paper2.js`, spread across most of the
40 topics to deepen existing coverage rather than filling brand-new
gaps (batch 1 already reached every topic). Running totals after this
session: **363 MCQs** in `questionbank.js`, **64 question sets / 145
sub-parts** in `paper2.js`, both across all 40 topics. Same dedup and
classification approach as documented under "The IB Questionbank
content" and "Paper 2 practice" above: parse docx to markdown with
pandoc, extract questions by their `**N.**  CODE` marker, split by
paper type using the code (`.1A.` = MCQ, `.1B.`/`.2.` = open-ended),
dedupe near-identical repeats, classify by topic using the question's
content, paraphrase into original wording. A handful of MCQs whose
answer options were only shown as an image (rather than text) were
again rewritten as new questions testing the same concept, same
approach as batch 1.

**Long-term plan (stated by user):** once all ~18 docx files have been
processed this way, build a timed mixed mock-exam mode drawing randomly
from the now-large `questionbank.js` and `paper2.js` pools. Don't start
that build until the user confirms all batches are in, since the mock
mode's design (how many questions, how the timer works, whether Paper
2 sets are included) will be easier to get right once the final
question count per topic is known.

**This session (docx batch 3 of ~6, everything_9/10/11):** the
`everything_9` file the user re-sent this time was a **PDF, not a
docx** (the earlier docx upload had come through empty, see above);
processed successfully using `pdftotext` instead of pandoc, since a
PDF needs a different extraction tool, but the same question-marker
and paper-type parsing logic once the text was extracted (90 questions:
51 Paper 1A MCQ, 39 Paper 2). `everything_10.docx` (78 questions: 38
MCQ, 5 Paper 1B, 35 Paper 2) and `everything_11.docx` (90 questions:
83 MCQ, 7 Paper 2) processed normally via pandoc. Combined total this
batch: 258 questions (172 MCQ, 5 Paper 1B, 81 Paper 2), deduplicated
down to 171 unique MCQs, classified across 33 of the 40 topics, and
paraphrased into `questionbank.js`. For Paper 2, selected 28 of the
strongest, least data/image-dependent candidates from the 81 available
open-ended items and paraphrased them into `paper2.js`, again
prioritising depth on already-covered topics over exhaustive use of
every source item (a good number of the remaining unused open-ended
items are heavily graph- or table-dependent and would need image
inspection to adapt faithfully; worth a future pass if the site's
Paper 2 section is felt to need more volume specifically in the topics
that got fewer additions here). Running totals after this session:
**530 MCQs** in `questionbank.js`, **92 question sets / 188 sub-parts**
in `paper2.js`, both across all 40 topics. Full headless-browser
regression test passed across every topic page and all three reference
pages, zero console errors.

**Note on file counts:** as of this session, 9 of the ~18 planned
source files have been processed (everything_4 through everything_11,
skipping the empty everything_9.docx but including its PDF
replacement). Halfway point reached. The user has been told they can
start the mock-exam mode build once all batches are confirmed in, per
the long-term plan noted above.

**This session (docx batch 4 of ~6, everything_12/13/14):** all three
files were valid, non-empty docx and processed normally via pandoc (90
questions each, 270 total: 181 Paper 1A MCQ, 6 Paper 1B, 83 Paper 2).
After deduplicating repeats across SL/HL/timezone variants, got 178
unique MCQs, classified across 34 of the 40 topics, and paraphrased
into `questionbank.js`. For Paper 2, selected 22 of the cleanest
candidates from the 89 available open-ended items (a large share of
this batch's source material was genuinely excellent, plain
command-term prompts like "outline the endosymbiotic theory" or
"explain transcription" with little to no graph/image dependency,
more usable material proportionally than some earlier batches) and
paraphrased them into `paper2.js`, again favouring depth on topics
already covered over forcing coverage of brand-new gaps, since all 40
topics have had at least one Paper 2 set since batch 1. Running totals
after this session: **703 MCQs** in `questionbank.js`, **114 question
sets / 219 sub-parts** in `paper2.js`, both across all 40 topics. Full
headless-browser regression test passed across every topic page and
all three reference pages, zero console errors.

**Updated file count:** 12 of the ~18 planned source files have now
been processed (everything_4 through everything_14, skipping the empty
everything_9.docx but including its PDF replacement). Two-thirds of
the way through the user's planned batches.

**This session (docx batch 5, everything_15/16/17 — final batch):**
the user confirmed this was the last batch of source files. All three
were valid, non-empty docx and processed normally via pandoc (240
questions total: 185 Paper 1A MCQ, 55 Paper 2). After deduplicating
repeats across SL/HL/timezone variants (this batch had heavy overlap
— 185 MCQs collapsed to just 111 unique), classified across 33 of the
40 topics and paraphrased into `questionbank.js`. For Paper 2, drafted
14 new sets from the 55 available open-ended items (again clean,
low-image-dependency source material: hormone action, cardiovascular
disease/ECG, tRNA structure, PCR, meiosis and variation, cellulose
structure, endosymbiosis, natural selection, excretion). Running
totals after this session, **and now final totals for the whole
project**: **812 MCQs** in `questionbank.js`, **128 question sets /
250 sub-parts** in `paper2.js`, both across all 40 topics. Full
headless-browser regression test passed across every topic page and
all three reference pages, zero console errors.

**Project status: all planned source files have now been processed**
(everything_4 through everything_17, 16 files total, skipping the
empty everything_9.docx but including its PDF replacement — the user
confirmed everything_15/16/17 was the final batch). The Questionbank
and Paper 2 sections are now built out to their full planned scope.

**This session (mock exam):** built `mock.html`, the timed mixed
mock-exam mode planned since the docx-import sessions. Full details
under "Mock exam" above. In short: SL/HL toggle (30 vs 40 MCQ, matching
the real exam's Paper 1A question count), a 50/50 MCQ-to-Paper-2 mark
split (the user's explicit request, not a copy of IB's actual Paper 1
: Paper 2 weighting), and — the feature the user was most excited
about — full topic selection, so a student can generate a mock exam
restricted to just a few chosen topics (e.g. "just protein, DNA,
homeostasis and water") rather than always pulling from the whole
syllabus. Self-marked results screen with live score updates, past-
attempt history in localStorage. Tested end to end, zero console
errors. This closes out the "timed mock-exam mode" item that had been
sitting in the ideas list since the docx-import sessions.

**Ideas raised but not yet built, worth considering for a future
session:** a distinct "common mistakes" callout box type on topic
pages (separate from the existing exam-tip box) for well-known IB
gotchas at the content level, not just the command-term level; an
HL/SL filter toggle on the homepage topic list itself (the checklist
page and now the mock exam page both have one, the homepage doesn't).

Open items carried over: the Miller-Urey diagram in Unit 1 is a
German-labelled Wikimedia image (visually clear either way, but worth
swapping for an English version if a cleaner one turns up). A handful
of source MCQs (from the docx import session) presented their answer
options only as an image rather than as text; since the image content
couldn't be reliably transcribed, these were replaced with newly
written questions testing the same concept rather than attempting to
guess the original options — worth a spot check against the original
docx if perfect fidelity to those specific questions matters. The
Paper 2 section currently shows one straight list of parts per
question set with no partial-credit tracking or score total; a future
pass could add a lightweight self-assessment (e.g. "did you get this
part roughly right?" per part) if that would be useful.

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
