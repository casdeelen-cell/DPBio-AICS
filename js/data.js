/*
  data.js
  -------
  This file defines the four units and which topics sit in each one,
  plus the full name for every topic code. You basically never need to
  touch this file unless your teacher reshuffles the unit order.

  If you ever add a topic code that isn't in TOPIC_TITLES, the site
  will just show the raw code as the title instead of crashing.
*/

const UNITS = [
  {
    id: "unit1",
    name: "Unit 1: Building Life",
    topics: ["A1.1", "D2.3", "B1.1", "C1.1", "A1.2", "D1.1", "D2.1", "B1.2", "A2.1", "D1.2", "A2.2", "B2.2", "C1.2", "C1.3"]
  },
  {
    id: "unit2",
    name: "Unit 2: Passing on Traits",
    topics: ["B2.3", "D2.2", "D1.3", "D3.1", "D3.2", "A3.1", "B4.1", "D4.1", "A4.1"]
  },
  {
    id: "unit3",
    name: "Unit 3: Living Together",
    topics: ["B4.2", "A3.2", "D4.2", "D4.3", "C4.1", "C4.2", "A4.2"]
  },
  {
    id: "unit4",
    name: "Unit 4: Systems and Signals",
    topics: ["B2.1", "D3.3", "C3.1", "B3.3", "B3.1", "B3.2", "C2.2", "C2.1", "C3.2", "A2.3"]
  }
];

const TOPIC_TITLES = {
  "A1.1": "Water",
  "A1.2": "Nucleic acids",
  "A2.1": "Origins of cells",
  "A2.2": "Cell structure",
  "A2.3": "Viruses",
  "A3.1": "Diversity of organisms",
  "A3.2": "Classification and cladistics",
  "A4.1": "Evolution and speciation",
  "A4.2": "Conservation of biodiversity",
  "B1.1": "Carbohydrates and lipids",
  "B1.2": "Proteins",
  "B2.1": "Membranes and membrane transport",
  "B2.2": "Organelles and compartmentalisation",
  "B2.3": "Cell specialisation",
  "B3.1": "Gas exchange",
  "B3.2": "Transport",
  "B3.3": "Muscle and motility",
  "B4.1": "Adaptation to environment",
  "B4.2": "Ecological niches",
  "C1.1": "Enzymes and metabolism",
  "C1.2": "Cell respiration",
  "C1.3": "Photosynthesis",
  "C2.1": "Chemical signalling",
  "C2.2": "Neural signalling",
  "C3.1": "Integration of body systems",
  "C3.2": "Defence against disease",
  "C4.1": "Populations and communities",
  "C4.2": "Transfers of energy and matter",
  "D1.1": "DNA replication",
  "D1.2": "Protein synthesis",
  "D1.3": "Mutation and gene editing",
  "D2.1": "Cell and nuclear division",
  "D2.2": "Gene expression",
  "D2.3": "Water potential",
  "D3.1": "Reproduction",
  "D3.2": "Inheritance",
  "D3.3": "Homeostasis",
  "D4.1": "Natural selection",
  "D4.2": "Stability and change",
  "D4.3": "Climate change"
};

// Topic codes that are HL-only in the guide (whole topic, not just parts of it).
// This just adds a small "HL" badge next to the topic name, it doesn't hide anything.
const HL_ONLY_TOPICS = ["A2.3", "B3.3", "C3.1"];
