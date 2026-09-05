# DP Biology Notes

A personal revision site for DP Biology (2025 syllabus), organised into
your four units. Plain HTML/CSS/JS, no build step, hosted free on GitHub
Pages.

## How the site is organised

```
biosite/
  index.html       the homepage, lists every unit and topic
  topic.html        the page template for a single topic (code comes from the URL)
  css/style.css      all the styling
  js/data.js         units, topic order, topic titles (rarely needs editing)
  js/content.js       YOUR NOTES, one entry per topic, broken into sections
  js/links.js         slides / video / formative links per topic
  js/quizzes.js       quiz questions per topic
  js/questionbank.js  multiple choice practice questions per topic
  js/paper2.js        Paper 2 / extended-response practice per topic
  js/app.js           shared logic (progress tracker, quiz engine, embeds)
```

## The files you'll actually edit

**`js/links.js`** is the one you'll touch most. Add a Google Slides link,
one or more YouTube links, and a Formative link for a topic and save the
file. Push to GitHub and the live site updates itself, no other file
needs to change.

Videos are stored as a list, not a single link, because Sirius Revision
often splits one topic into two or three shorter videos (D3.2 and C4.1
are set up this way already as examples). Just add one object per video
part. If a link is missing, the site doesn't hide the button, it shows
it greyed out with "not available yet" so it's obvious what's still
missing.

**`js/content.js`** is where you write up each topic. Copy the pattern
from an existing topic (A1.1, B2.1, D3.2 and C4.1 are fully filled in)
and add a new entry keyed by the topic code. Each topic is a list of
sections, one per syllabus statement, with:
- a heading and your notes (wrap a word in `**like this**` to bold it)
- an optional `level: "HL"` tag, shown as a small badge
- an optional `image` and `imageCaption`
- an optional `tip`, shown as a highlighted "Exam tip" or "Common
  mistake" box next to that section

**`js/wordbank.js`** holds the key term glossary shown in the sidebar of
each topic page. If a bolded word in your notes matches a term here
(case-insensitive), it automatically gets a dotted underline and shows
the definition on hover or tap, no extra linking needed on your end.
This file also holds `FUN_FACTS`, one short "did you know" line per
topic for the sidebar.

**`js/quizzes.js`** holds short multiple choice quizzes per topic, same
pattern, copy an existing one.

Topics you haven't written up yet don't need placeholder entries, the
site just shows "notes coming soon" until you add them.

## Adding images

The site expects a plain image URL in the `image` field of a content
section. Wikimedia Commons is the easiest source since almost everything
there is free to use, and their file pages give you a direct link if you
right-click the image and "copy image address". A handful of demo images
are already wired up in `content.js` so you can see the pattern.

## The progress tracker (understood / learning / need help / not started)

This is stored in each student's own browser using localStorage. That
means:
- it's private to that device, nobody else can see it
- it does NOT sync across devices, or reset for a new visitor
- clearing browser data will wipe it

This is the honest tradeoff of a free static site with no backend. If
you want progress that's actually visible to you as the teacher, or
synced across a student's phone and laptop, the cleanest upgrade later
is a small free backend like Google Sheets via Apps Script, or a service
like Firebase. That's a genuinely separate project though, worth doing
once the content itself is in good shape.

## Running it locally before you publish

You don't need anything installed except a browser, but if you want to
preview it properly (some browsers restrict local file loading), run
this from inside the `biosite` folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Publishing on GitHub Pages

1. Create a new repository on GitHub, e.g. `dp-biology-notes`.
2. Push everything in this folder to that repository (the contents of
   `biosite/`, not the folder itself, should sit at the repo root).
3. In the repo, go to **Settings -> Pages**.
4. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch **main**, folder **/ (root)**. Save.
5. GitHub gives you a URL like `https://yourusername.github.io/dp-biology-notes/`
   after a minute or two. That's your live site.

From then on, any time you edit a file and push to `main`, the site
rebuilds automatically within a minute or so.

## A note on the content that's already written

Four topics are fully written up as working examples, one from each
unit: A1.1 (Water), B2.1 (Membranes and membrane transport), D3.2
(Inheritance), and C4.1 (Populations and communities). Each one has
DP-level notes with bolded key terms, a wordbank, exam tip boxes,
images, and Sirius Revision videos linked (verified real links, matched
to Sirius Revision's own video titles for each topic). Everything else
is on the site with correct titles and navigation, just waiting for you
to fill in `content.js`, `links.js`, `wordbank.js` and `quizzes.js`. The
topic titles in `data.js` are reconstructed from the general 2025 IB
Biology guide structure, worth a quick double check against your own
syllabus outline in case your teacher phrases any of them slightly
differently.

## The school logo

`images/aics-logo.png` is used in the header on both pages. If you ever
need to swap it, just replace that file with the same filename and
everything keeps working, or update the `src` in `index.html` and
`topic.html` if you rename it.
