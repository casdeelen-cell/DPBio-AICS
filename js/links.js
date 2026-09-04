/*
  links.js
  --------
  THIS is the file you'll update most often. One entry per topic code.
  Add or change a link here, save, push to GitHub, and the site updates
  itself. You don't need to touch any other file to update links.

  slides:    paste your Google Slides link, but change /edit at the end
             to /embed so it displays inline. The site does this
             conversion for you automatically even if you just paste
             the normal /edit link.
             Example: https://docs.google.com/presentation/d/XXXXXXX/edit

  videos:    an ARRAY, because Sirius Revision often splits one topic
             into two or three shorter videos. Each entry needs a
             short label and a normal YouTube link (watch?v=... or
             youtu.be/... both work fine).
             If a topic only has one video, just use an array with one
             item in it.

  formative: paste the link to your Formative assignment for this topic.
             Leave it as "" if you don't have one yet, the site will
             show "Formative not available yet" instead of a broken
             button, it won't just disappear.
*/

const LINKS = {

  "A1.1": {
    slides: "",
    videos: [
      { label: "A1.1 Properties of Water", url: "https://www.youtube.com/watch?v=1e8mbEeaIGU" }
    ],
    formative: ""
  },

  "B2.1": {
    slides: "",
    videos: [
      { label: "B2.1 Membranes and Transport", url: "https://www.youtube.com/watch?v=ooDOkq8w3NU" }
    ],
    formative: ""
  },

  "D3.2": {
    slides: "",
    videos: [
      { label: "D3.2 Principles of Inheritance", url: "https://www.youtube.com/watch?v=YRCCuPvOA0s" },
      { label: "D3.2 Analysis of Inheritance Patterns", url: "https://www.youtube.com/watch?v=63zX_oDU_P8" },
      { label: "D3.2 Applications in Inheritance", url: "https://www.youtube.com/watch?v=TJgbnxKXvEk" }
    ],
    formative: ""
  },

  "C4.1": {
    slides: "",
    videos: [
      { label: "C4.1 Populations", url: "https://www.youtube.com/watch?v=0TGYkZLfi9w" },
      { label: "C4.1 Communities", url: "https://www.youtube.com/watch?v=4eMUCjxJOuI" }
    ],
    formative: ""
  }

  // Add the rest of your 40 topics down here the same way, e.g.:
  // "A1.2": { slides: "", videos: [{ label: "A1.2 Nucleic Acids", url: "" }], formative: "" },

};
