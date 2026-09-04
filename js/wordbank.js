/*
  wordbank.js
  -----------
  Key terms and definitions per topic, shown in the "Word bank" panel
  on the topic page. These are also what power the tooltips on bolded
  terms in your notes, if the bolded word matches a term here (case
  insensitive), it gets a dotted underline and shows the definition
  on hover/tap.

  Format:
  WORDBANK["A1.1"] = [
    { term: "Polarity", definition: "..." },
    ...
  ];
*/

const WORDBANK = {

  "A1.1": [
    { term: "Polar molecule", definition: "A molecule with an uneven distribution of charge, giving it a slightly negative end and a slightly positive end." },
    { term: "Electronegativity", definition: "How strongly an atom attracts the shared electrons in a covalent bond towards itself." },
    { term: "Hydrogen bond", definition: "A weak, temporary attraction between a slightly positive hydrogen on one molecule and a slightly negative atom on another." },
    { term: "Cohesion", definition: "The attraction between molecules of the same substance, in water this comes from hydrogen bonding." },
    { term: "Adhesion", definition: "The attraction between water molecules and a different polar or charged surface." },
    { term: "Transpiration", definition: "The loss of water vapour from a plant, mainly through the stomata of the leaves." },
    { term: "Specific heat capacity", definition: "The amount of energy needed to raise the temperature of a given mass of a substance by one degree." },
    { term: "Solute", definition: "A substance that is dissolved in a solvent to form a solution." }
  ],

  "B2.1": [
    { term: "Phospholipid", definition: "A lipid with a polar phosphate head and two non-polar fatty acid tails, the main building block of membranes." },
    { term: "Fluid mosaic model", definition: "The model describing a membrane as a flexible bilayer with proteins scattered through it, able to move." },
    { term: "Integral protein", definition: "A membrane protein embedded within the bilayer, often spanning it completely." },
    { term: "Peripheral protein", definition: "A protein attached loosely to just one surface of the membrane, not embedded within it." },
    { term: "Concentration gradient", definition: "A difference in the concentration of a substance between two regions." },
    { term: "Passive transport", definition: "Movement of a substance down its concentration gradient, needing no energy input from the cell." },
    { term: "Active transport", definition: "Movement of a substance against its concentration gradient, requiring energy, usually from ATP." },
    { term: "Osmosis", definition: "The diffusion of water across a partially permeable membrane, from a region of lower solute concentration to higher solute concentration." }
  ],

  "D3.2": [
    { term: "Locus", definition: "The specific position of a gene on a chromosome." },
    { term: "Allele", definition: "One version of a gene, arising from mutation, that can occupy a given locus." },
    { term: "Homozygous", definition: "Having two identical alleles for a gene." },
    { term: "Heterozygous", definition: "Having two different alleles for a gene." },
    { term: "Dominant allele", definition: "An allele that produces its phenotype whenever it is present, masking a recessive allele." },
    { term: "Recessive allele", definition: "An allele that only produces its phenotype when no dominant allele is present." },
    { term: "Test cross", definition: "A cross with a homozygous recessive individual, used to reveal an unknown genotype." },
    { term: "Codominance", definition: "A pattern of inheritance where both alleles in a heterozygote are fully expressed in the phenotype." },
    { term: "Sex linkage", definition: "A pattern of inheritance for genes carried on the X chromosome, which affects males and females differently." }
  ],

  "C4.1": [
    { term: "Population", definition: "All the organisms of one species living in the same area at the same time, able to interbreed." },
    { term: "Community", definition: "All the populations of different species living and interacting in the same area." },
    { term: "Carrying capacity", definition: "The maximum population size an environment can sustain long term, given its available resources." },
    { term: "Sigmoid growth curve", definition: "The S-shaped curve produced when a population grows quickly and then levels off near carrying capacity." },
    { term: "Limiting factor", definition: "A factor, such as food or space, that restricts the growth of a population." },
    { term: "Niche", definition: "The role a species plays within its community, including its resource use and interactions with other species." },
    { term: "Competition", definition: "An interaction where two species (or individuals) both need the same limited resource and both are harmed by it." },
    { term: "Mutualism", definition: "An interaction between two species where both benefit." }
  ]

};

/* Short "did you know" style facts shown in the topic page sidebar.
   One per topic, purely for a bit of colour, not examinable content. */
const FUN_FACTS = {
  "A1.1": "A single drop of water contains roughly 1.7 sextillion (1.7 x 10^21) molecules, and each one is, on average, hydrogen bonded to about 3.4 neighbours at any instant.",
  "B2.1": "A red blood cell membrane recycles its entire protein content roughly every two to three weeks, membranes are constantly being rebuilt, not fixed structures.",
  "D3.2": "Gregor Mendel's original pea plant data was, statistically, almost suspiciously close to perfect ratios. Some statisticians have argued the results were too good to be true.",
  "C4.1": "The snowshoe hare and Canada lynx population cycle, tracked from over a century of fur trapping records, is one of the most famous predator-prey datasets in ecology."
};
