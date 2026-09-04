/*
  quizzes.js
  ----------
  Short quizzes per topic. One entry per topic code, each an array of
  questions.

  Format for a question:
  {
    q: "The question text",
    options: ["choice A", "choice B", "choice C", "choice D"],
    correct: 2,          // index into options, starting at 0
    explanation: "Why that answer is right, shown after they answer."
  }

  Topics with no quiz here yet just show "no quiz yet" on the site.
*/

const QUIZZES = {

  "A1.1": [
    {
      q: "Why is a water molecule described as polar?",
      options: [
        "It has an equal charge across the whole molecule",
        "Oxygen pulls the shared electrons more strongly than hydrogen does, giving an uneven charge distribution",
        "It contains a full positive and a full negative ion",
        "It has no covalent bonds"
      ],
      correct: 1,
      explanation: "Oxygen is more electronegative than hydrogen, so it pulls the shared electrons closer, leaving oxygen slightly negative and the hydrogens slightly positive."
    },
    {
      q: "A plant is transpiring from its leaves. Which property of water is most directly responsible for pulling the water column up through the xylem?",
      options: ["Adhesion only", "Cohesion, through hydrogen bonding between water molecules", "High solvent capacity", "Low density of ice"],
      correct: 1,
      explanation: "Cohesion lets the water molecules hold onto each other, so as water evaporates from the top, it drags the rest of the column up behind it."
    },
    {
      q: "Which of these would you predict dissolves poorly in water?",
      options: ["Glucose", "Sodium chloride", "A triglyceride (fat)", "An amino acid"],
      correct: 2,
      explanation: "Triglycerides are non-polar, so they don't interact well with polar water molecules. Glucose, salt, and amino acids all have polar or charged regions and dissolve well."
    },
    {
      q: "Why does a lake not freeze solid from the bottom up in winter?",
      options: [
        "Ice is denser than liquid water",
        "Water has a low specific heat capacity",
        "Ice is less dense than liquid water, so it floats and insulates the water below",
        "Water molecules stop forming hydrogen bonds when cold"
      ],
      correct: 2,
      explanation: "Ice floats because hydrogen bonding holds the molecules in a more open lattice in solid form, which is less dense than liquid water. The floating ice layer insulates the water underneath."
    }
  ],

  "B2.1": [
    {
      q: "In the fluid mosaic model, why do phospholipid heads face outward on both sides of the membrane?",
      options: [
        "Because they are non-polar and repel water",
        "Because they are polar and interact favourably with the watery environment on both sides",
        "Because proteins push them outward",
        "It's random, there's no consistent orientation"
      ],
      correct: 1,
      explanation: "Phospholipid heads are polar, so they orient towards the water on either side of the membrane, while the non-polar tails face each other, away from water."
    },
    {
      q: "Glucose needs a carrier protein to cross a cell membrane, moving down its concentration gradient. What is this process called?",
      options: ["Simple diffusion", "Osmosis", "Facilitated diffusion", "Active transport"],
      correct: 2,
      explanation: "Facilitated diffusion is passive (down the gradient, no ATP needed) but still requires a protein because glucose is polar and can't cross the bilayer directly."
    },
    {
      q: "The sodium potassium pump moves sodium out of a cell and potassium in, both against their concentration gradients. What does this require?",
      options: ["Nothing extra, it happens passively", "ATP", "A concentration gradient in the same direction as the movement", "Only a channel protein"],
      correct: 1,
      explanation: "Moving substances against their gradient is active transport, and active transport always needs an energy source, normally ATP."
    },
    {
      q: "A cell releases a hormone by having a vesicle fuse with the cell membrane and release its contents outside. What is this called?",
      options: ["Endocytosis", "Exocytosis", "Facilitated diffusion", "Osmosis"],
      correct: 1,
      explanation: "Exocytosis is when a vesicle inside the cell fuses with the membrane and releases its contents to the outside, commonly used for secretion."
    }
  ],

  "D3.2": [
    {
      q: "An organism is heterozygous for a gene. What does that mean?",
      options: [
        "It has two identical alleles for that gene",
        "It has two different alleles for that gene",
        "It has no alleles for that gene",
        "It only has one copy of that chromosome"
      ],
      correct: 1,
      explanation: "Heterozygous means the two alleles at that locus are different from each other, one from each parent."
    },
    {
      q: "Why is a test cross useful?",
      options: [
        "It reveals the phenotype of an organism showing a recessive trait",
        "It lets you tell whether an organism showing the dominant phenotype is homozygous or heterozygous",
        "It only works on plants",
        "It changes an organism's genotype"
      ],
      correct: 1,
      explanation: "Crossing with a homozygous recessive individual reveals whether the test subject can pass on a recessive allele, which tells you if it was heterozygous."
    },
    {
      q: "In the ABO blood group system, why can a person have genotype IAi and still show blood type A rather than some blend?",
      options: [
        "Because IA is dominant over i",
        "Because i is dominant over IA",
        "Because the two alleles blend together",
        "Because blood type is not genetically controlled"
      ],
      correct: 0,
      explanation: "IA and IB are both dominant over i. So an IAi genotype still produces the type A phenotype, since the i allele is masked."
    },
    {
      q: "Why do recessive X-linked conditions like red-green colour blindness show up more often in males?",
      options: [
        "Males have two X chromosomes",
        "The Y chromosome carries a dominant allele that overrides the X",
        "Males only have one X chromosome, so a single recessive allele on it is not masked by a second X",
        "Colour blindness cannot be inherited by females at all"
      ],
      correct: 2,
      explanation: "With only one X chromosome, males need just one copy of a recessive X-linked allele to show the phenotype, unlike females who would need two copies."
    }
  ],

  "C4.1": [
    {
      q: "A population grows quickly at first, then levels off as it approaches the environment's carrying capacity. What shape does this growth curve have?",
      options: ["A straight line", "Exponential all the way through", "Sigmoid (S-shaped)", "It decreases steadily"],
      correct: 2,
      explanation: "This is the classic sigmoid growth curve, fast growth early on followed by levelling off as limiting factors like food and space start to bite."
    },
    {
      q: "Two species of bird both rely heavily on the same limited nesting sites, and both do worse when the other is present. What kind of interspecific relationship is this?",
      options: ["Mutualism", "Parasitism", "Competition", "Predation"],
      correct: 2,
      explanation: "Both species are harmed by needing the same limited resource, which is competition."
    },
    {
      q: "Which best describes a species' niche?",
      options: [
        "Just the physical place it lives",
        "Its role in the community, including what it eats, where it lives, and how it interacts with other species",
        "Only its position in a food chain",
        "The number of individuals in its population"
      ],
      correct: 1,
      explanation: "A niche is broader than habitat, it covers the full role a species plays, including its interactions with other species and its resource use."
    }
  ]

};
