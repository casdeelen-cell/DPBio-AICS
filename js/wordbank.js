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
  ],

  "D2.3": [
    { term: "Water potential", definition: "A measure of the tendency of water to move from one place to another; water moves from higher to lower water potential." },
    { term: "Solute potential", definition: "The component of water potential due to dissolved solute; always zero or negative." },
    { term: "Pressure potential", definition: "The component of water potential due to physical pressure, usually positive in a walled plant cell." },
    { term: "Turgor pressure", definition: "The outward pressure of the cell contents against the cell wall in a turgid (swollen) plant cell." },
    { term: "Plasmolysis", definition: "The shrinking of a plant cell's protoplast away from its cell wall after water loss by osmosis." }
  ],

  "B1.1": [
    { term: "Monosaccharide", definition: "A single sugar unit, such as glucose, fructose, or galactose." },
    { term: "Condensation reaction", definition: "A reaction joining two molecules together while releasing a water molecule." },
    { term: "Hydrolysis", definition: "A reaction that breaks a bond by adding a water molecule." },
    { term: "Glycosidic bond", definition: "The covalent bond linking two monosaccharides together." },
    { term: "Polysaccharide", definition: "A long chain of many monosaccharides joined by glycosidic bonds." },
    { term: "Triglyceride", definition: "A lipid made of glycerol bonded to three fatty acid chains." },
    { term: "Saturated fatty acid", definition: "A fatty acid with no carbon-carbon double bonds, allowing tight packing and a solid state at room temperature." },
    { term: "Unsaturated fatty acid", definition: "A fatty acid with one or more carbon-carbon double bonds, which kink the chain and usually keep it liquid at room temperature." }
  ],

  "C1.1": [
    { term: "Metabolism", definition: "The sum of all chemical reactions occurring inside an organism." },
    { term: "Anabolic reaction", definition: "A reaction that builds larger molecules from smaller ones, using energy." },
    { term: "Catabolic reaction", definition: "A reaction that breaks larger molecules into smaller ones, typically releasing energy." },
    { term: "Active site", definition: "The region of an enzyme, shaped to bind a specific substrate, where the reaction is catalysed." },
    { term: "Substrate", definition: "The molecule an enzyme acts on." },
    { term: "Denaturation", definition: "The breaking of bonds maintaining a protein's shape, usually caused by heat or extreme pH, which destroys its function." },
    { term: "Activation energy", definition: "The minimum energy needed for a reaction to proceed; enzymes lower this." }
  ],

  "A1.2": [
    { term: "Nucleotide", definition: "The basic building block of nucleic acids: a phosphate group, a sugar, and a nitrogenous base." },
    { term: "Phosphodiester bond", definition: "The bond linking the sugar of one nucleotide to the phosphate of the next." },
    { term: "Complementary base pairing", definition: "The specific pairing of bases across the two DNA strands: A with T, C with G." },
    { term: "Double helix", definition: "The twisted, ladder-like shape of the two-stranded DNA molecule." },
    { term: "Antiparallel", definition: "Describes the two DNA strands running in opposite directions to each other." }
  ],

  "D1.1": [
    { term: "Semi-conservative replication", definition: "DNA replication in which each new molecule has one original strand and one newly made strand." },
    { term: "Helicase", definition: "The enzyme that unwinds the DNA double helix by breaking hydrogen bonds between bases." },
    { term: "DNA polymerase", definition: "The enzyme that builds a new DNA strand by adding complementary nucleotides." },
    { term: "Replication fork", definition: "The Y-shaped region where the DNA double helix is being unwound and copied." },
    { term: "Primer", definition: "A short sequence that DNA polymerase needs before it can begin adding nucleotides." }
  ],

  "D2.1": [
    { term: "Interphase", definition: "The longest phase of the cell cycle, during which the cell grows and replicates its DNA." },
    { term: "Mitosis", definition: "Nuclear division producing two genetically identical nuclei." },
    { term: "Cytokinesis", definition: "Division of the cytoplasm into two separate cells." },
    { term: "Chromatid", definition: "One of two identical copies of a chromosome, joined at the centromere after DNA replication." },
    { term: "Centromere", definition: "The region joining two sister chromatids together." },
    { term: "Spindle fibres", definition: "Protein structures that pull chromatids apart during cell division." }
  ],

  "B1.2": [
    { term: "Amino acid", definition: "The monomer of a protein, with an amino group, a carboxyl group, and a variable R group." },
    { term: "Peptide bond", definition: "The covalent bond linking two amino acids together in a polypeptide chain." },
    { term: "Primary structure", definition: "The specific sequence of amino acids in a polypeptide chain." },
    { term: "Secondary structure", definition: "Local folding patterns, such as alpha helices and beta sheets, held by hydrogen bonds." },
    { term: "Tertiary structure", definition: "The overall three-dimensional shape of a single folded polypeptide." },
    { term: "Quaternary structure", definition: "The structure formed when two or more polypeptide chains combine into one functional protein." }
  ],

  "A2.1": [
    { term: "Abiogenesis", definition: "The idea that life arose from non-living chemical matter." },
    { term: "Protobiont", definition: "A simple, self-assembled structure with some cell-like properties, considered a step toward the first living cells." },
    { term: "Endosymbiotic theory", definition: "The theory that mitochondria and chloroplasts originated as free-living prokaryotes engulfed by a host cell." },
    { term: "Prokaryote", definition: "A cell with no nucleus and no membrane-bound organelles." },
    { term: "Eukaryote", definition: "A cell with a true nucleus and membrane-bound organelles." }
  ],

  "D1.2": [
    { term: "Transcription", definition: "The process of copying a gene's DNA sequence into a complementary mRNA molecule." },
    { term: "Translation", definition: "The process of building a polypeptide based on the codon sequence of an mRNA molecule." },
    { term: "Codon", definition: "A group of three mRNA bases specifying a particular amino acid or a stop signal." },
    { term: "Anticodon", definition: "The three-base sequence on a tRNA molecule that pairs with a complementary codon on mRNA." },
    { term: "tRNA", definition: "A small RNA molecule that carries a specific amino acid to the ribosome during translation." },
    { term: "Ribosome", definition: "The organelle where translation takes place." },
    { term: "Genetic code", definition: "The set of rules by which codons specify amino acids; degenerate and near-universal." }
  ],

  "A2.2": [
    { term: "Prokaryote", definition: "A cell with no nucleus and no membrane-bound organelles." },
    { term: "Eukaryote", definition: "A cell with a true nucleus and membrane-bound organelles." },
    { term: "Organelle", definition: "A specialised, usually membrane-bound structure within a cell with a distinct function." },
    { term: "Surface area to volume ratio", definition: "The ratio of a cell's surface area to its volume, which falls as cells get larger, limiting cell size." },
    { term: "Resolution", definition: "The ability to distinguish two close points as separate; electron microscopes have far higher resolution than light microscopes." }
  ],

  "B2.2": [
    { term: "Compartmentalisation", definition: "The division of a cell into separate membrane-bound regions, each with its own internal environment." },
    { term: "Endomembrane system", definition: "The interconnected system of organelles (ER, Golgi, vesicles) that make, modify, and transport proteins and lipids." },
    { term: "Vesicle", definition: "A small membrane-bound sac used to transport material between organelles or to the cell surface." },
    { term: "Lysosome", definition: "A vesicle containing digestive enzymes, used to break down waste, worn organelles, or engulfed material." },
    { term: "Cristae", definition: "The folds of a mitochondrion's inner membrane, which increase surface area for respiration." }
  ],

  "C1.2": [
    { term: "Glycolysis", definition: "The first stage of respiration, breaking glucose down in the cytoplasm; does not require oxygen." },
    { term: "Krebs cycle", definition: "A cycle of reactions in the mitochondrial matrix that extracts energy from the products of glycolysis." },
    { term: "Electron transport chain", definition: "A series of proteins in the inner mitochondrial membrane that generates most of the ATP made in aerobic respiration." },
    { term: "ATP", definition: "Adenosine triphosphate, the molecule cells use as their immediate, usable energy currency." },
    { term: "Aerobic respiration", definition: "Respiration that requires oxygen and releases a large amount of ATP per glucose molecule." },
    { term: "Anaerobic respiration", definition: "Respiration that occurs without oxygen, releasing much less ATP per glucose molecule." }
  ],

  "C1.3": [
    { term: "Photolysis", definition: "The light-driven splitting of water molecules into oxygen, hydrogen ions, and electrons." },
    { term: "Light-dependent reactions", definition: "The stage of photosynthesis that captures light energy and produces ATP and reduced NADP." },
    { term: "Calvin cycle", definition: "The light-independent reactions, which use ATP and reduced NADP to build organic molecules from CO2." },
    { term: "Carbon fixation", definition: "The incorporation of carbon dioxide into an organic molecule, catalysed by Rubisco." },
    { term: "Limiting factor", definition: "Whichever factor (light, CO2, or temperature) is currently holding back the rate of photosynthesis." },
    { term: "Chlorophyll", definition: "The main pigment that absorbs light energy for photosynthesis." }
  ]

};

/* Short "did you know" style facts shown in the topic page sidebar.
   One per topic, purely for a bit of colour, not examinable content. */
const FUN_FACTS = {
  "A1.1": "A single drop of water contains roughly 1.7 sextillion (1.7 x 10^21) molecules, and each one is, on average, hydrogen bonded to about 3.4 neighbours at any instant.",
  "B2.1": "A red blood cell membrane recycles its entire protein content roughly every two to three weeks, membranes are constantly being rebuilt, not fixed structures.",
  "D3.2": "Gregor Mendel's original pea plant data was, statistically, almost suspiciously close to perfect ratios. Some statisticians have argued the results were too good to be true.",
  "C4.1": "The snowshoe hare and Canada lynx population cycle, tracked from over a century of fur trapping records, is one of the most famous predator-prey datasets in ecology.",
  "D2.3": "A fully turgid plant cell can withstand internal pressure of several atmospheres, roughly comparable to a car tyre, all held in check by the cell wall.",
  "B1.1": "Cellulose is the most abundant organic molecule on Earth, yet humans can't digest it at all, we lack the enzyme to break its particular glycosidic bonds.",
  "C1.1": "A single enzyme molecule can catalyse thousands of reactions every second without being used up itself.",
  "A1.2": "If you stretched out all the DNA in one human cell end to end, it would measure about two metres, coiled into a nucleus roughly a hundredth of a millimetre wide.",
  "D1.1": "DNA polymerase makes roughly one error per billion bases copied, largely thanks to its own built-in proofreading.",
  "D2.1": "An adult human replaces roughly one to two million cells every second through mitosis, just to keep up with normal wear and tear.",
  "B1.2": "There are more possible arrangements of a 100-amino-acid protein than there are atoms in the observable universe.",
  "A2.1": "Mitochondria still carry their own small, circular DNA, a genetic leftover from their days as free-living bacteria over a billion years ago.",
  "D1.2": "The genetic code is shared by nearly every living thing, which is why bacteria can be engineered to read human genes and produce human insulin.",
  "A2.2": "If a typical animal cell were scaled up to the size of a football stadium, a mitochondrion inside it would be roughly the size of a car.",
  "B2.2": "Lysosomes were nicknamed 'suicide bags' by their discoverer, since a ruptured lysosome can trigger the breakdown of the entire cell.",
  "C1.2": "Your body recycles its own body weight in ATP every single day, constantly making and breaking it down rather than storing large reserves.",
  "C1.3": "The oxygen you're breathing right now was, at some point, released by photolysis in a photosynthesising organism."
};
