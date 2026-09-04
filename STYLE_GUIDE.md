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
fit this format, extended-response Paper 1B/2 questions need a
different, not-yet-built feature, don't force them into the MCQ format.

Send PDFs in small batches (2-3 at a time, or fewer if large) to avoid
hitting the chat's image limit, since the web UI converts PDF pages to
images internally.

## Design and tone

- Visual style: warm paper background, forest green as primary accent,
  rust/ochre for HL badges and the Questionbank section, Fraunces
  (serif) for headings, Inter (sans) for body text. Lab-notebook feel,
  not generic SaaS.
- **No emoji anywhere on the site.** This was explicitly requested,
  don't reintroduce them (streak counter, buttons, anything).
- Quick quiz (`quizzes.js`) and Practice questions (`questionbank.js`)
  are two separate, visually distinct sections. Don't merge them.

## Progress tracking

Understanding-status tracking (`localStorage`) is per-device, per-
browser, genuinely private, and does not sync anywhere. This is a known,
accepted limitation, not a bug to fix unless asked.

## Current status (update this section as you go)

As of the last session: **Unit 1 and Unit 2 fully complete** (notes,
wordbank, quiz, videos, images, syllabus statements verified).

Unit 1 (14 topics): A1.1, D2.3, B1.1, C1.1, A1.2, D1.1, D2.1, B1.2,
A2.1, D1.2, A2.2, B2.2, C1.2, C1.3.

Unit 2 (9 topics): B2.3, D2.2, D1.3, D3.1, D3.2, A3.1, B4.1, D4.1, A4.1.
Notes/wordbank/quiz/videos/images done and syllabus statements verified
against real IB sources. D2.2 (Gene expression) is entirely HL-only, so
it's been added to `HL_ONLY_TOPICS` in `data.js`. Slides and formatives
for all 9 Unit 2 topics are still blank, waiting on links from the user.
Questionbank entries for Unit 2 also not yet added, waiting on PDF
exports from the user's Questionbank subscription.

Units 3 and 4 still need the same full treatment.

Open items carried over: A2.1 has no verified Sirius video (couldn't
confirm one exists), and the induced-fit and Miller-Urey diagrams are
German-labelled Wikimedia images (visually clear either way, but worth
swapping for English versions if a cleaner one turns up).
