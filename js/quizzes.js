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
,  "B2.3": [
    {
      q: "Every cell in a human embryo carries the same DNA. What actually makes a liver cell different from a neuron?",
      options: ["They have different genomes", "They express different genes", "They have different numbers of chromosomes", "Only neurons contain mitochondria"],
      correct: 1,
      explanation: "Differentiation is about which genes are switched on, not any difference in the DNA sequence itself."
    },
    {
      q: "A pluripotent stem cell can differentiate into...",
      options: ["Any cell type, including the placenta", "Any of the body's cell types, but not extra-embryonic tissue", "Only a limited range of related cell types", "No cell types, it must remain a stem cell"],
      correct: 1,
      explanation: "Pluripotent cells can form any body cell type but, unlike totipotent cells, cannot form extra-embryonic tissue such as the placenta."
    },
    {
      q: "Why does an increase in cell size reduce the surface area to volume ratio?",
      options: ["Volume increases faster than surface area as a cell grows", "Surface area increases faster than volume", "They always increase at the same rate", "Cell size has no effect on this ratio"],
      correct: 0,
      explanation: "Volume scales with the cube of a linear dimension while surface area only scales with the square, so larger cells have proportionally less surface for their volume."
    },
    {
      q: "What is the main functional difference between type I and type II pneumocytes?",
      options: ["Type I secrete surfactant, type II are thin for gas exchange", "Type I are thin for gas exchange, type II secrete surfactant", "Both secrete surfactant equally", "Neither is involved in gas exchange"],
      correct: 1,
      explanation: "Type I pneumocytes are flattened to minimise diffusion distance, while type II pneumocytes are specialised to produce surfactant."
    }
  ],

  "D2.2": [
    {
      q: "Which best distinguishes the transcriptome from the proteome?",
      options: [
        "The transcriptome is the full genome, the proteome is a subset",
        "The transcriptome is the set of transcribed genes (mRNA), the proteome is the set of proteins actually produced",
        "They are two names for the same thing",
        "The proteome is always larger than the transcriptome"
      ],
      correct: 1,
      explanation: "Not every mRNA transcript is translated, so the proteome is generally a smaller, further-filtered subset compared to the transcriptome."
    },
    {
      q: "How does heavy methylation of a gene's promoter typically affect gene expression?",
      options: ["It has no effect", "It increases expression", "It silences the gene by compacting the surrounding chromatin", "It doubles the gene's copy number"],
      correct: 2,
      explanation: "Methylated promoters tend to bind proteins that compact chromatin, making the gene inaccessible to the transcription machinery."
    },
    {
      q: "What happens to most epigenetic tags during the formation of gametes?",
      options: ["They are all permanently retained", "Most are erased and reset through reprogramming", "They double in number", "They are converted into new mutations"],
      correct: 1,
      explanation: "Reprogramming erases most epigenetic tags in developing gametes, though a small number of imprinted genes escape this process."
    }
  ],

  "D1.3": [
    {
      q: "A mutation changes a codon for one amino acid into a codon for a different amino acid. What type of mutation is this?",
      options: ["Silent", "Missense", "Nonsense", "Frameshift"],
      correct: 1,
      explanation: "A missense mutation changes the specified amino acid; a nonsense mutation would change it to a stop codon instead."
    },
    {
      q: "Why do insertions or deletions of 1 or 2 nucleotides tend to be more disruptive than insertions or deletions of exactly 3?",
      options: [
        "They are always in non-coding DNA",
        "They shift the reading frame for every codon downstream",
        "They only affect introns",
        "They can't occur in somatic cells"
      ],
      correct: 1,
      explanation: "Since mRNA is read in triplets, changes not divisible by three shift the reading frame, scrambling everything downstream."
    },
    {
      q: "What is the original, natural biological role of the CRISPR-Cas9 system in bacteria?",
      options: ["DNA replication", "A defence mechanism against viral infection", "Producing ATP", "Cell division"],
      correct: 1,
      explanation: "Bacteria naturally use CRISPR-Cas9 to store and recognise fragments of viral DNA from past infections, destroying the virus's DNA if it appears again."
    }
  ],

  "D3.1": [
    {
      q: "What is the main advantage sexual reproduction offers over asexual reproduction?",
      options: ["It's faster", "It requires no mate", "It generates genetic variation among offspring", "Offspring are genetically identical to the parent"],
      correct: 2,
      explanation: "Sexual reproduction combines alleles from two parents and reshuffles them via meiosis, producing genetically varied offspring."
    },
    {
      q: "What triggers ovulation during the menstrual cycle?",
      options: ["A surge in luteinising hormone (LH)", "A drop in oestrogen", "A surge in progesterone alone", "The breakdown of the endometrium"],
      correct: 0,
      explanation: "Rising oestrogen from the maturing follicle triggers a sharp LH surge, which causes ovulation."
    },
    {
      q: "In IVF, why are hormone injections given at levels well above a natural cycle?",
      options: ["To stop ovulation completely", "To induce superovulation, maturing multiple follicles at once", "To trigger menstruation early", "To reduce the number of eggs produced"],
      correct: 1,
      explanation: "High-dose FSH and LH cause multiple follicles to mature simultaneously (superovulation), giving more eggs to collect for fertilisation."
    }
  ],

  "D3.2": [
    {
      q: "A red-flowered and a white-flowered four o'clock plant are crossed, producing all pink-flowered offspring. What does this demonstrate?",
      options: ["Codominance", "Incomplete dominance", "Simple recessive inheritance", "Sex linkage"],
      correct: 1,
      explanation: "The heterozygote shows a blended, intermediate phenotype (pink), which is the signature of incomplete dominance rather than codominance."
    },
    {
      q: "Why is haemophilia much more common in males than in females?",
      options: [
        "The allele is on the Y chromosome",
        "The allele is recessive and X-linked, so males need only one copy to be affected",
        "Females cannot inherit the allele at all",
        "The condition is caused by an autosomal dominant allele"
      ],
      correct: 1,
      explanation: "Because it's X-linked recessive, males (with only one X) show the condition with just one copy of the allele, while females need two."
    },
    {
      q: "A cross between two double heterozygotes for two unlinked genes produces which classic phenotypic ratio?",
      options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
      correct: 2,
      explanation: "Independent assortment of two unlinked genes in a dihybrid cross produces the characteristic 9:3:3:1 ratio."
    },
    {
      q: "Height in humans shows continuous rather than discrete variation mainly because it is...",
      options: ["Controlled by a single gene with two alleles", "Polygenic, influenced by many genes and often the environment", "Entirely determined by environment with no genetic component", "Sex-linked"],
      correct: 1,
      explanation: "Polygenic traits, shaped by the combined effect of many genes plus environmental factors, tend to show a smooth, continuous range of values."
    }
  ],

  "A3.1": [
    {
      q: "Under the biological species concept, what defines a species?",
      options: [
        "Organisms that share a genus name",
        "Organisms that can interbreed and produce fertile offspring, and are reproductively isolated from other groups",
        "Organisms with the same number of chromosomes",
        "Organisms found in the same habitat"
      ],
      correct: 1,
      explanation: "The biological species concept centres on interbreeding capability and reproductive isolation from other groups."
    },
    {
      q: "Why is it difficult to apply the biological species concept to many bacteria?",
      options: [
        "Bacteria don't have DNA",
        "Bacteria reproduce asexually and can exchange genes via horizontal gene transfer",
        "Bacteria only reproduce sexually",
        "Bacteria have no chromosomes"
      ],
      correct: 1,
      explanation: "Since bacteria don't interbreed in the way the concept requires, and can also swap genes across what would be considered species via horizontal gene transfer, the concept doesn't map cleanly onto them."
    },
    {
      q: "What does karyotyping classify chromosomes by?",
      options: ["Colour only", "Number, length, banding pattern, and centromere position", "DNA base sequence only", "Cell type"],
      correct: 1,
      explanation: "Karyotyping arranges and classifies chromosomes using these physical, visually identifiable features."
    }
  ],

  "B4.1": [
    {
      q: "Marram grass has rolled leaves and an extensive, deep root system. What environment is it adapted to?",
      options: ["Deep ocean", "Sand dunes", "Rainforest canopy", "Arctic tundra"],
      correct: 1,
      explanation: "Rolled leaves reduce water loss and extensive roots draw water and stabilise sand, both classic sand dune adaptations."
    },
    {
      q: "What two abiotic factors are the main determinants of terrestrial biome distribution?",
      options: ["Altitude and latitude", "Soil pH and salinity", "Temperature and rainfall", "Wind speed and daylight hours"],
      correct: 2,
      explanation: "Mean annual temperature and rainfall together are the strongest predictors of which terrestrial biome occurs in a given location."
    },
    {
      q: "Cacti (Americas) and euphorbias (Africa) look strikingly similar despite no close common ancestry. This is an example of...",
      options: ["Homology", "Convergent evolution", "Sexual selection", "Genetic drift"],
      correct: 1,
      explanation: "Similar desert selection pressures independently produced similar adaptations in these unrelated plant lineages, a case of convergent evolution."
    }
  ],

  "D4.1": [
    {
      q: "Why can't natural selection operate in a population with no genetic variation?",
      options: [
        "There would be nothing for selection to favour, since all individuals would have equal fitness",
        "Natural selection doesn't require variation",
        "Variation only matters for sexual selection",
        "Mutation would immediately restore variation"
      ],
      correct: 0,
      explanation: "Without variation, no individual has a survival or reproductive edge over another, so selection has nothing to act on."
    },
    {
      q: "A trait acquired purely through exercise during an individual's lifetime is NOT subject to natural selection because...",
      options: ["It's always harmful", "It isn't heritable, since it doesn't involve a change to the DNA sequence", "It only appears in females", "Natural selection ignores physical traits"],
      correct: 1,
      explanation: "Only heritable (DNA-encoded) traits can be acted on by natural selection across generations."
    },
    {
      q: "A peacock's large, bright tail reduces its ability to evade predators, yet persists in the population. This is best explained by...",
      options: ["Natural selection for camouflage", "Sexual selection favouring mating success over survival", "Random genetic drift", "Mutation pressure"],
      correct: 1,
      explanation: "Sexual selection can favour traits, like an elaborate tail, that increase mating success even at some cost to survival."
    }
  ],

  "A4.1": [
    {
      q: "How does evolution, as defined in IB Biology, differ from Lamarck's theory of inheritance of acquired characteristics?",
      options: [
        "They are the same theory",
        "Evolution requires heritable, DNA-based change; Lamarckism proposed non-genetic traits acquired in life could be inherited",
        "Lamarck's theory has been fully confirmed by modern genetics",
        "Evolution only applies to plants"
      ],
      correct: 1,
      explanation: "Evolution is specifically change in heritable (genetic) characteristics; Lamarck's mechanism, inheriting acquired traits, is not supported by modern genetics."
    },
    {
      q: "The human arm, bird wing, and bat wing share the same underlying bone arrangement despite different functions. This is an example of...",
      options: ["Analogous structures", "Homologous structures", "Convergent evolution", "Sympatric speciation"],
      correct: 1,
      explanation: "Homologous structures share a common underlying anatomy inherited from a shared ancestor, even when used for different functions."
    },
    {
      q: "Bonobos and common chimpanzees diverged into separate species after being separated by the Congo River. This illustrates...",
      options: ["Sympatric speciation", "Allopatric speciation via geographic isolation", "Hybridisation and polyploidy", "Sexual selection"],
      correct: 1,
      explanation: "A physical geographic barrier (the river) separated the populations, allowing them to diverge independently, the hallmark of allopatric speciation."
    },
    {
      q: "Darwin's finches on the Galápagos, radiating into many species with different beak shapes from one ancestor, is a classic example of...",
      options: ["Adaptive radiation", "Sexual selection", "Horizontal gene transfer", "Incomplete dominance"],
      correct: 0,
      explanation: "Rapid diversification from a single ancestral species into many species, each adapted to a different niche, defines adaptive radiation."
    }
  ],

};
