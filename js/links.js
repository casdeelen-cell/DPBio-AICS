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
    slides: [
      { label: "Slides (Part 1)", url: "https://docs.google.com/presentation/d/1rJwpWMz0osN3kKGvAEzGcGFMESI4s6_S/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" },
      { label: "Slides (Part 2)", url: "https://docs.google.com/presentation/d/1YQy9aqe7YV3tvhZdxuk3gDrje0JVS7Rs/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
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
  },

  "D2.3": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1t2MrZcEWCG1jOaY9zCmDGYRFRkspV-9K/edit?usp=drive_link&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "D2.3 Water Movement", url: "https://www.youtube.com/watch?v=gmhw4Bkaif4" }
    ],
    formative: ""
  },

  "B1.1": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1BwfizuZz9_-dxXRt0Z6T-2XSsvMuVqgg/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "B1.1 Carbohydrates", url: "https://www.youtube.com/watch?v=eV--VWunHUU" },
      { label: "B1.1 Lipids", url: "https://www.youtube.com/watch?v=-fzIaXjSrNo" }
    ],
    formative: ""
  },

  "C1.1": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1RdwvwwcxQ9EtuliIdVWVuzeB69WZCHVb/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "C1.1 Enzymes and Metabolism", url: "https://www.youtube.com/watch?v=fSuwI9bjgJs" }
    ],
    formative: ""
  },

  "A1.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1mzkYZD-DTOGpv9u9hZqYCfnq-CZVKJk0/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "A1.2 Structure of DNA and RNA", url: "https://www.youtube.com/watch?v=knN9csn2wC8" }
    ],
    formative: ""
  },

  "D1.1": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1Gku54JojbX_bzZ75jE7dictCYrYYDOF-/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "D1.1 DNA Replication", url: "https://www.youtube.com/watch?v=CSisaIHxAPk" }
    ],
    formative: ""
  },

  "D2.1": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1eSo5XonXbOAiSwPjXzEmY7OIee6Q2JkW/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "D2.1 Cell Division and Mitosis", url: "https://www.youtube.com/watch?v=i9XPl4ePyxU" }
    ],
    formative: ""
  },

  "B1.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1T9kTB9JXCdVVDhF2Q6WIlZkZk3scSJXN/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "B1.2 Proteins", url: "https://www.youtube.com/watch?v=7-i-VDkZuQs" }
    ],
    formative: ""
  },

  "A2.1": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1uvuorjJ9_zvbzjf6PxOgYa_XZ5u_QwP5/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [],
    formative: ""
  },

  "A2.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1nUnYmtAXcLhjfROBMDUTmAtu5JMVPoYN/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "A2.2 Cell Structures and Processes", url: "https://www.youtube.com/watch?v=E1rGTop1gg0" },
      { label: "A2.2 Organelles and Drawing Cells", url: "https://www.youtube.com/watch?v=60Tcywmyr_s" }
    ],
    formative: ""
  },

  "B2.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1cTW6pt-g8iIZYq_R75b4Q-Vc2nB2JxHr/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "B2.2 Organelles and Compartmentalisation", url: "https://www.youtube.com/watch?v=xnEplUF0xO0" }
    ],
    formative: ""
  },

  "C1.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1kmyroyz_RIEghnMFz7xC8hIX84n-sFoL/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "C1.2 Cell Respiration", url: "https://www.youtube.com/watch?v=P8qMsVmrg-k" }
    ],
    formative: ""
  },

  "D1.2": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1gpl1gRT95VjphoXwLyb-jgiUhVvqaYkS/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "D1.2 Protein Synthesis", url: "https://www.youtube.com/watch?v=ybso-VivjF8" }
    ],
    formative: ""
  },

  "C1.3": {
    slides: [
      { label: "Slides", url: "https://docs.google.com/presentation/d/1QKmWHg0pBBrxPiAL4V0_drSMsgX0B6c0/edit?usp=sharing&ouid=108232791391393418876&rtpof=true&sd=true" }
    ],
    videos: [
      { label: "C1.3 Photosynthesis", url: "https://www.youtube.com/watch?v=I6hn6eiF5bI" }
    ],
    formative: ""
  },

  "B2.3": {
    slides: "",
    videos: [
      { label: "B2.3 Cell Specialisation", url: "https://www.youtube.com/watch?v=86EDjDREYbk" }
    ],
    formative: ""
  },

  "D2.2": {
    slides: "",
    videos: [
      { label: "D2.2 HL Genetic Expression", url: "https://www.youtube.com/watch?v=0mHb3Y5Z4A4" }
    ],
    formative: ""
  },

  "D1.3": {
    slides: "",
    videos: [
      { label: "D1.3 Mutations", url: "https://www.youtube.com/watch?v=HdM5tXf7M-E" }
    ],
    formative: ""
  },

  "D3.1": {
    slides: "",
    videos: [
      { label: "D3.1 Plant Reproduction (Part 1)", url: "https://www.youtube.com/watch?v=s7fbzKjr7aM" },
      { label: "D3.1 Human and Animal Reproduction (Part 2)", url: "https://www.youtube.com/watch?v=nnPd6FVpPvE" }
    ],
    formative: ""
  },

  "D3.2": {
    slides: "",
    videos: [
      { label: "D3.2 Principles of Inheritance (Part 1)", url: "https://www.youtube.com/watch?v=YRCCuPvOA0s" },
      { label: "D3.2 Analysis of Inheritance Patterns (Part 2)", url: "https://www.youtube.com/watch?v=63zX_oDU_P8" },
      { label: "D3.2 Applications in Inheritance (Part 3)", url: "https://www.youtube.com/watch?v=TJgbnxKXvEk" }
    ],
    formative: ""
  },

  "A3.1": {
    slides: "",
    videos: [
      { label: "A3.1 Genetic Diversity", url: "https://www.youtube.com/watch?v=zzDl_6eKg2c" }
    ],
    formative: ""
  },

  "B4.1": {
    slides: "",
    videos: [
      { label: "B4.1 Adaptations to the Environment", url: "https://www.youtube.com/watch?v=dcr6HKLvRiM" }
    ],
    formative: ""
  },

  "D4.1": {
    slides: "",
    videos: [
      { label: "D4.1 Natural Selection", url: "https://www.youtube.com/watch?v=Rg8TwlaJZFI" }
    ],
    formative: ""
  },

  "A4.1": {
    slides: "",
    videos: [
      { label: "A4.1 Evolution and Speciation", url: "https://www.youtube.com/watch?v=lxVWFERge-I" }
    ],
    formative: ""
  }

  // Add the rest of your 40 topics down here the same way, e.g.:
  // "B4.2": { slides: "", videos: [{ label: "B4.2 Ecological Niches", url: "" }], formative: "" },

};
