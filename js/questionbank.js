/*
  questionbank.js
  ---------------
  Questions in this file are ADAPTED from the real IB Questionbank:
  same underlying concept, same difficulty, same correct answer, but
  rewritten in original wording so it's safe to publish on a public
  site. The site automatically shows "Adapted from IB Questionbank"
  above this section, you don't need to add that yourself.

  This is a SEPARATE section from your quick quiz in quizzes.js. Keep
  quizzes.js as your own lightweight checks, use this file for the
  bigger, exam-style question bank as you send over more PDFs.

  Same format as quizzes.js:
  QUESTIONBANK["A1.1"] = [
    { q: "...", options: ["...","...","...","..."], correct: 0, explanation: "..." }
  ]
*/

const QUESTIONBANK = {

  "A1.1": [
    {
      q: "A ringed seal (Pusa hispida) spends long periods in near-freezing Arctic water. Which adaptation is a direct response to how efficiently water conducts heat away from the body?",
      options: ["A streamlined body shape", "Sharp teeth for gripping prey", "A thick layer of blubber", "Lungs adapted for diving"],
      correct: 2,
      explanation: "Water conducts heat away from a body far faster than air does, so a thick fat layer (blubber) is the adaptation that directly counters that heat loss."
    },
    {
      q: "Asteroid impacts are hypothesised to be an early source of Earth's water. What allowed that water to be retained on the planet rather than escaping back into space?",
      options: ["Early atmospheric gases absorbed the water vapour", "High atmospheric pressure trapped the vapour", "Earth's temperature allowed the vapour to condense into liquid", "Water became trapped inside newly formed rock"],
      correct: 2,
      explanation: "Once Earth's surface cooled enough, water vapour could condense into liquid water, which is what allowed it to stay on the surface rather than escape."
    },
    {
      q: "Which of these is a consequence of water's adhesive properties specifically, rather than its cohesive properties?",
      options: ["Aquatic environments stay thermally stable", "Water climbs upward through narrow soil spaces by capillary action", "Blood plasma can transport dissolved nutrients", "Sweating has a cooling effect"],
      correct: 1,
      explanation: "Capillary action depends on water adhering to the surface of a different material (like soil particles), which is adhesion, not cohesion."
    },
    {
      q: "A Wikipedia-style planet comparison table lists surface temperature, atmosphere, and orbital distance for four exoplanets. Which planet is most likely to support life based on the presence of liquid water?",
      options: ["A planet close enough to its star that all water exists as vapour", "A planet far enough from its star that all water is frozen solid", "A planet at a distance where surface temperatures allow water to stay liquid", "A planet with no atmosphere at all"],
      correct: 2,
      explanation: "The 'habitable zone' (sometimes called the Goldilocks zone) is defined by the orbital distance at which a planet's temperature allows water to exist as a liquid rather than permanently as ice or vapour, since liquid water is considered essential for life as we know it."
    },
    {
      q: "Phospholipids are described as amphipathic molecules. Which feature of their structure makes this true?",
      options: ["Both ends of the molecule are hydrophilic", "Both ends of the molecule are hydrophobic", "One end is hydrophilic and the other is hydrophobic", "The molecule has no charge anywhere"],
      correct: 2,
      explanation: "Amphipathic means a molecule has both a hydrophilic region (the phosphate head, which interacts with water) and a hydrophobic region (the fatty acid tails, which avoid water), which is exactly why phospholipids spontaneously form bilayers in water."
    },
    {
      q: "Aquatic ecosystems tend to show much smaller day-to-day temperature swings than the air above them. Which property of water is directly responsible for this?",
      options: ["Water's high specific heat capacity, because hydrogen bonds absorb a large amount of energy before the temperature rises", "Water's low specific heat capacity, because covalent bonds absorb energy easily", "Water's high density, which prevents heat from entering the water", "Water's transparency, which reflects heat away from the surface"],
      correct: 0,
      explanation: "A large amount of thermal energy must be absorbed to break/weaken hydrogen bonds between water molecules before the average kinetic energy (and therefore temperature) rises, giving water an unusually high specific heat capacity and making aquatic environments thermally stable."
    },
    {
      q: "Pond skaters and other small insects can rest on the surface of still water without breaking through. Which property of water explains this?",
      options: ["Adhesion between water and the insect's legs", "Capillary action pulling the insect upward", "Surface tension created by cohesive hydrogen bonds at the surface", "The high transparency of water"],
      correct: 2,
      explanation: "Hydrogen bonds between water molecules at the surface pull inward more strongly than they are pulled by the air above, creating a 'skin'-like surface tension strong enough to support very light, water-repellent objects like an insect's legs."
    },
    {
      q: "Which statement correctly describes the type of bond between two hydrogen atoms and the oxygen atom within a single water molecule?",
      options: ["A polar covalent bond, because the shared electrons are pulled unevenly towards oxygen", "A non-polar covalent bond, because the electrons are shared equally", "An ionic bond, because electrons are fully transferred to oxygen", "A hydrogen bond, because it forms between adjacent molecules"],
      correct: 0,
      explanation: "Oxygen is more electronegative than hydrogen, so the shared electrons in the O–H covalent bonds spend more time near the oxygen atom, giving oxygen a partial negative charge and each hydrogen a partial positive charge — a polar covalent bond, not a hydrogen bond (hydrogen bonds occur between separate molecules)."
    },
    {
      q: "Two water molecules are attracted to each other because a slightly positive hydrogen on one molecule is drawn to a slightly negative oxygen on the neighbouring molecule. What is this intermolecular attraction called, and why does it arise?",
      options: ["A hydrogen bond, arising from the polarity of the O–H bonds", "A covalent bond, arising from shared electron pairs", "An ionic bond, arising from full charge transfer", "A dispersion force, arising from random electron movement"],
      correct: 0,
      explanation: "This weak electrostatic attraction between the partial positive charge on a hydrogen atom of one water molecule and the partial negative charge on the oxygen of a neighbouring molecule is a hydrogen bond, and it underlies almost every unusual property of water, from cohesion to its high boiling point."
    }
  ],

  "D2.3": [
    {
      q: "A plant cell has a water potential of -0.24 kPa and a pressure potential of 0.46 kPa. Using the equation water potential = solute potential + pressure potential, what is the solute potential of the cell?",
      options: ["0.22 kPa", "-0.22 kPa", "0.70 kPa", "-0.70 kPa"],
      correct: 3,
      explanation: "Rearranging the equation: solute potential = water potential minus pressure potential = -0.24 - 0.46 = -0.70 kPa."
    },
    {
      q: "A plant cell is moved from a dilute (low solute concentration) solution into a more concentrated one. What happens to the cell's water potential and pressure potential as a result?",
      options: ["Water potential inside the cell decreases as water leaves, and pressure (turgor) potential also decreases as the cell membrane pulls away from the wall", "Water potential inside the cell increases as water enters, and pressure potential increases as turgor builds", "Neither water potential nor pressure potential changes", "Water potential decreases but pressure potential increases"],
      correct: 0,
      explanation: "Moving a cell into a more concentrated external solution lowers the water potential outside relative to inside, so water leaves the cell by osmosis; as the cytoplasm shrinks away from the cell wall (plasmolysis), turgor (pressure potential) is lost as well, since pressure potential depends on the cell contents pushing against the wall."
    }
  ],

  "B1.1": [
    {
      q: "A molecular diagram shows a glycerol backbone attached to a phosphate group on one side and two fatty acid tails on the other. What kind of molecule is this?",
      options: ["A polysaccharide", "A phospholipid", "A triglyceride", "A polypeptide"],
      correct: 1,
      explanation: "A glycerol backbone with a phosphate group and two (rather than three) fatty acid tails is the defining structure of a phospholipid, not a triglyceride, which has three fatty acid tails and no phosphate."
    },
    {
      q: "Plant cell walls need to resist bursting from the internal pressure created by osmotic water uptake. Which structural feature of cellulose makes it suited to this role?",
      options: ["Its long, unbranched chains of beta-glucose cross-linked into strong fibres", "Its highly branched structure, which traps water inside the cell", "Its solubility in water, which allows it to form a flexible gel", "Its role as an immediate energy source broken down during respiration"],
      correct: 0,
      explanation: "Cellulose is made of long, straight chains of beta-glucose molecules held together by hydrogen bonds into bundles of microfibrils; this fibrous arrangement gives cellulose great tensile strength, allowing the cell wall to resist the internal turgor pressure that builds up as water enters the cell by osmosis."
    },
    {
      q: "Starch, glycogen, and cellulose are all polysaccharides built entirely from glucose monomers, yet they behave very differently in living organisms. What is the main structural reason for this difference?",
      options: ["They differ in whether the glucose monomers are joined as alpha- or beta-glucose, and in how branched the resulting chains are", "They are made from different types of monosaccharide entirely", "Only cellulose contains any covalent bonds", "Starch and glycogen are proteins, not carbohydrates"],
      correct: 0,
      explanation: "Starch and glycogen are built from alpha-glucose in branched or coiled arrangements that pack compactly for storage, while cellulose is built from beta-glucose in long straight, hydrogen-bonded chains; this small difference in monomer type and chain shape explains why one group stores energy efficiently and the other provides structural strength."
    },
    {
      q: "A simplified diagram shows a molecule with a glycerol backbone, two fatty acid tails, and a phosphate-containing head group. What kind of molecule is this most likely to be, and what is one of its key roles?",
      options: ["A phospholipid, which forms the bilayer structure of cell membranes", "A triglyceride, used exclusively for long-term energy storage in fat cells", "A polysaccharide, used for structural support in plant cell walls", "A steroid, used for cell signalling"],
      correct: 0,
      explanation: "The combination of a glycerol backbone, two fatty acid tails, and a phosphate head group is characteristic of a phospholipid; its amphipathic nature (hydrophilic head, hydrophobic tails) is exactly why phospholipids spontaneously arrange into the bilayer that forms the basis of every cell membrane."
    }
  ],

  "C1.1": [
    {
      q: "Enzyme-containing laundry detergent was used to remove blood stains at different temperatures. Stain removal was best around 40°C and got noticeably worse at 50°C. What best explains the result at 50°C?",
      options: ["The enzymes denature at 50°C", "The active site shape of some enzymes changes at 50°C", "Enzyme and substrate molecules have maximum kinetic energy at 50°C", "At 50°C, successful binding between enzyme and substrate becomes unlikely"],
      correct: 3,
      explanation: "At temperatures pushing toward denaturation, the enzyme's active site starts losing its precise shape, making successful substrate binding increasingly unlikely, which explains reduced stain breakdown."
    },
    {
      q: "Which pairing correctly matches an example of an anabolic reaction with an example of a catabolic reaction?",
      options: ["Anabolic: hydrolysis of macromolecules into monomers. Catabolic: oxidation of substrates in respiration", "Anabolic: glycogen formation. Catabolic: hydrolysis of macromolecules into monomers", "Anabolic: oxidation of substrates in respiration. Catabolic: protein synthesis", "Anabolic: protein synthesis. Catabolic: glycogen formation"],
      correct: 1,
      explanation: "Glycogen formation builds a larger molecule from smaller units (anabolic), while hydrolysing macromolecules into monomers breaks bonds down (catabolic)."
    },
    {
      q: "A graph plots enzyme activity against increasing temperature. Activity rises to a peak and then falls sharply at higher temperatures. What causes the sharp decline beyond the optimum temperature?",
      options: ["The enzyme denatures as its active site changes shape, so it can no longer bind substrate effectively", "Substrate molecules stop moving at high temperature", "Product concentration builds up and speeds up the reverse reaction", "An inhibitor is automatically released at high temperature"],
      correct: 0,
      explanation: "Beyond the optimum temperature, the extra thermal energy disrupts the hydrogen bonds and other interactions holding the enzyme's tertiary structure together; the active site loses its precise shape (denaturation), so it can no longer bind its substrate efficiently, causing the sharp fall in activity."
    },
    {
      q: "Which of the following is an example of an intracellular enzyme-catalysed reaction, as opposed to an extracellular one?",
      options: ["Glycolysis occurring in the cytoplasm during cellular respiration", "Chemical digestion of food in the stomach and intestine", "Blood clotting occurring in a wound", "Digestive enzymes breaking down food outside a fungal cell"],
      correct: 0,
      explanation: "Glycolysis takes place entirely within the cytoplasm of the cell that needs the ATP it produces, making it intracellular; digestion in the gut, blood clotting, and extracellular fungal digestion all involve enzymes acting outside the cells that produced them."
    },
    {
      q: "Statins are drugs that lower cholesterol levels by reducing the activity of an enzyme involved in cholesterol synthesis, without permanently altering the enzyme's structure. Which type of inhibition best fits this description?",
      options: ["Competitive inhibition, where the drug competes with the natural substrate for the active site", "Irreversible inhibition, where the drug permanently destroys the enzyme", "No inhibition at all, since the enzyme's structure is unchanged", "Allosteric activation, which increases the enzyme's activity"],
      correct: 0,
      explanation: "Statins work as competitive inhibitors: they resemble the enzyme's natural substrate closely enough to bind the active site and block it temporarily, reducing the rate of cholesterol synthesis without permanently damaging the enzyme, which is why their effect can be reversed if the drug is removed."
    },
    {
      q: "A reaction pathway diagram shows the energy levels of substrate, transition state, and products, both with and without an enzyme present. Which change does the enzyme cause on this diagram?",
      options: ["It lowers the activation energy needed to reach the transition state, without changing the overall energy released by the reaction", "It increases the activation energy, making the reaction slower", "It changes the net energy released by the reaction", "It has no effect on any part of the energy diagram"],
      correct: 0,
      explanation: "Enzymes speed up reactions by providing an alternative pathway with a lower activation energy, making it easier for substrate molecules to reach the transition state; crucially, they do not change the overall energy difference between reactants and products, only the height of the energy barrier in between."
    },
    {
      q: "The general term for reactions that break down larger molecules into smaller ones, usually releasing energy, is 'catabolism'. Which of the following is an example of a catabolic process?",
      options: ["Oxidation of glucose during cellular respiration", "Formation of a polypeptide from amino acids", "Photosynthesis converting carbon dioxide into glucose", "Formation of glycogen from glucose monomers"],
      correct: 0,
      explanation: "Catabolism refers to breakdown reactions that release energy, such as the oxidation of glucose during respiration; building larger molecules from smaller ones (protein synthesis, glycogen formation, or photosynthesis) is instead classed as anabolism, which requires an input of energy."
    },
    {
      q: "An experiment places an aquatic plant and a snail together in water containing a CO2-sensitive indicator that is blue when CO2 is low and turns yellow as CO2 rises. Under which condition would the water most likely stay blue after several hours?",
      options: ["The plant is kept in bright light without a snail present, so photosynthesis removes more CO2 than respiration produces", "The plant and snail are both kept in complete darkness", "Only a snail is present, with no plant", "The plant is kept in darkness together with a snail"],
      correct: 0,
      explanation: "In bright light with only a plant present, photosynthesis (which uses CO2) proceeds much faster than the plant's own respiration (which releases CO2), so net CO2 in the water falls and the indicator stays blue; without light, or with a respiring snail also present, CO2 tends to build up instead, turning the indicator yellow."
    }
  ],

  "A1.2": [
    {
      q: "Which combination of features correctly describes the molecular structure of DNA?",
      options: ["Complementary base pairing only", "Complementary base pairing and deoxyribose only", "Deoxyribose and thymine only", "Complementary base pairing, deoxyribose, and thymine"],
      correct: 3,
      explanation: "DNA is defined by all three features together: internal complementary base pairing, the sugar deoxyribose, and the base thymine (rather than uracil)."
    },
    {
      q: "The human genome contains around three billion base pairs, yet this information fits inside a nucleus just a few micrometres across. What property of DNA makes it possible to store such a large amount of information so compactly?",
      options: ["The double helix shape alone", "The specific sequence of the four bases along each strand", "The sugar-phosphate backbone", "The presence of complementary base pairing"],
      correct: 1,
      explanation: "Although the double helix, backbone, and base pairing are all structural features of DNA, the actual information is encoded in the linear order (sequence) of the four bases — it's the sequence itself, not the shape, that acts like a four-letter code capable of specifying huge amounts of information in a small physical space."
    }
  ],

  "D1.1": [
    {
      q: "DNA fragments of different sizes are separated using gel electrophoresis, with the wells at the negative electrode end. Which fragments would be expected to travel the furthest across the gel?",
      options: ["4 kb, negatively charged", "10 kb, negatively charged", "10 kb, positively charged", "2 kb, positively charged"],
      correct: 0,
      explanation: "DNA is negatively charged and moves toward the positive electrode, and smaller fragments move through the gel matrix faster, so the smallest negatively-charged fragment travels furthest."
    },
    {
      q: "One of the enzymes involved in DNA replication has a 'proofreading' function, checking each newly added nucleotide and removing incorrect ones before continuing. Which enzyme carries out this role in bacteria?",
      options: ["DNA polymerase III", "DNA primase", "DNA helicase", "DNA ligase"],
      correct: 0,
      explanation: "DNA polymerase III not only adds new nucleotides to the growing strand but also proofreads its own work, detecting and correcting mismatched bases as it goes; helicase unwinds the double helix, primase lays down RNA primers, and ligase joins Okazaki fragments together, but none of these have a proofreading function."
    },
    {
      q: "Meselson and Stahl's classic experiment used density-labelled DNA to distinguish between three possible models of DNA replication. Which pattern of results supported the semi-conservative model specifically?",
      options: ["After one round of replication, all DNA showed an intermediate density, consistent with each new molecule containing one old and one new strand", "After one round of replication, DNA showed only the heaviest density, consistent with entirely new molecules made of only old strands", "After one round of replication, DNA showed only the lightest density, consistent with entirely new strands in every molecule", "The density of DNA never changed across generations, ruling out replication entirely"],
      correct: 0,
      explanation: "The semi-conservative model predicts that each new DNA double helix contains one original (old) strand and one newly synthesised strand; this produces an intermediate density after one round of replication, which is exactly the result Meselson and Stahl observed, ruling out the conservative and dispersive models."
    }
  ],

  "D2.1": [
    {
      q: "A micrograph shows onion root tip cells undergoing mitosis. At one labelled point, new membrane and cell wall material is being assembled by vesicles between the two forming daughter cells. What process is happening there?",
      options: ["Unequal cytokinesis by budding", "Assembly of the new cell membrane and wall from vesicles", "Contraction of an actin-myosin ring", "Movement of chromosomes by microtubules"],
      correct: 1,
      explanation: "Plant cells lack the actin-myosin contractile ring used by animal cells; instead, they build a new cell plate from vesicles fusing together between the two daughter cells."
    },
    {
      q: "Which sequence correctly places these meiosis events in order?\n1. Separation of homologous chromosomes\n2. DNA replication\n3. Crossing over\n4. Pairing of homologous chromosomes",
      options: ["DNA replication, pairing, crossing over, separation", "DNA replication, crossing over, pairing, separation", "Pairing, crossing over, DNA replication, separation", "Pairing, DNA replication, crossing over, separation"],
      correct: 0,
      explanation: "DNA must be replicated before meiosis begins, then homologous chromosomes pair up, crossing over happens between the paired chromatids, and only then are the homologues separated."
    },
    {
      q: "A student examines a slide of onion root tip cells and needs to identify a cell in anaphase. Which feature would confirm this stage rather than metaphase?",
      options: ["Sister chromatids are visibly separating and moving toward opposite poles of the cell", "Chromosomes are aligned in a single row along the equator", "The nuclear envelope has just reformed around two new nuclei", "Chromosomes are just beginning to condense and become visible"],
      correct: 0,
      explanation: "Anaphase is defined by the separation of sister chromatids, which are then pulled towards opposite poles by shortening spindle microtubules; alignment along the equator is characteristic of metaphase, while nuclear envelope reformation and decondensation of chromosomes belong to telophase."
    },
    {
      q: "Both mitosis and meiosis involve the movement of chromosomes to opposite poles of the cell using spindle fibres. Which specific event during anaphase is common to both types of division?",
      options: ["Microtubules shortening to pull chromatids apart towards opposite poles", "Pairing of homologous chromosomes along the equator", "Crossing over between non-sister chromatids", "Formation of four genetically distinct haploid cells"],
      correct: 0,
      explanation: "In both mitosis and (the second division of) meiosis, spindle microtubules attach to chromatids and shorten during anaphase, pulling them apart towards opposite poles; homologous pairing and crossing over, by contrast, are unique to meiosis I and don't occur in mitosis."
    },
    {
      q: "A karyogram is prepared from a cell sample and shows 46 chromosomes, including one X and one Y sex chromosome. What can be concluded from this karyogram?",
      options: ["The sample came from a genetically male individual, since XY is the typical human male sex chromosome combination", "The sample came from a genetically female individual", "The sample must have come from a cell undergoing meiosis", "No conclusion about sex can be drawn from a karyogram"],
      correct: 0,
      explanation: "A karyogram displays an organism's full chromosome set arranged in matching pairs; in humans, the presence of one X and one Y chromosome (rather than two X chromosomes) indicates a genetically male individual, since sex is determined by this specific pair."
    },
    {
      q: "Embryonic stem cells from a very early mouse embryo can be cultured in the laboratory and induced to become almost any specialised cell type. Which term correctly describes cells with this very broad developmental potential?",
      options: ["Totipotent", "Multipotent", "Unipotent", "Fully differentiated"],
      correct: 0,
      explanation: "Totipotent cells, found only in the very earliest stages of embryonic development, can give rise to every cell type in the body plus extra-embryonic structures like the placenta; this is a broader potential than pluripotent, multipotent, or unipotent cells, which have progressively more restricted developmental options."
    }
  ],

  "B1.2": [
    {
      q: "A table lists valine and lysine as essential amino acids, and alanine and glycine as non-essential. Which conclusion is actually valid from this?",
      options: ["Lysine is synthesised by the human body", "Alanine can only be obtained from food", "Glycine is not used anywhere in the human body", "Valine must be supplied through the diet"],
      correct: 3,
      explanation: "'Essential' amino acid specifically means the body cannot synthesise it, so it must come from food; valine being essential means exactly that."
    },
    {
      q: "A table lists the four levels of protein structure alongside the type of bonding responsible for each. Which pairing correctly matches structural level with stabilizing bond type?",
      options: ["Primary structure is held together by peptide bonds between amino acids", "Primary structure is held together by hydrogen bonds along the backbone", "Secondary structure is held together entirely by disulfide bridges", "Quaternary structure never involves more than one polypeptide chain"],
      correct: 0,
      explanation: "Primary structure is the linear sequence of amino acids joined by covalent peptide bonds; secondary structure (alpha helices and beta sheets) is stabilized by hydrogen bonds along the backbone, tertiary structure involves a wider range of bonds including disulfide bridges, and quaternary structure specifically involves more than one polypeptide chain interacting."
    },
    {
      q: "Myoglobin is a globular protein whose non-polar amino acid side chains are folded towards the molecule's interior, while its polar side chains face outward. What does this arrangement suggest about how myoglobin interacts with its watery surroundings?",
      options: ["The outward-facing polar groups form hydrogen bonds with surrounding water molecules, keeping the protein soluble", "The outward-facing polar groups repel water, making the protein insoluble", "The inward-facing non-polar groups form ionic bonds with water", "The folding pattern has no relationship to solubility"],
      correct: 0,
      explanation: "Globular proteins that function in an aqueous environment typically fold so hydrophilic (polar) side chains face outward, forming hydrogen bonds with surrounding water and keeping the protein in solution, while hydrophobic side chains cluster in the interior away from water — exactly the pattern seen in myoglobin."
    },
    {
      q: "Two amino acids are joined together, releasing a water molecule in the process, to form a short chain. What is this reaction called, and what type of bond does it form?",
      options: ["A condensation reaction, forming a peptide bond", "A hydrolysis reaction, forming a peptide bond", "A condensation reaction, forming a glycosidic bond", "A hydrolysis reaction, forming an ester bond"],
      correct: 0,
      explanation: "Joining two amino acids while releasing water is a condensation reaction, and the covalent bond formed between the amine group of one amino acid and the carboxyl group of the next is specifically called a peptide bond, the basic linkage of every polypeptide chain."
    },
    {
      q: "Someone following a plant-based diet needs to plan their meals carefully to avoid a deficiency that meat-eaters rarely worry about. What is the specific nutritional concern, and why does it arise?",
      options: ["Getting enough of all the essential amino acids, since no single common plant source contains them all in sufficient amounts", "Getting enough total protein, since plant foods contain almost no protein at all", "Avoiding excess protein, since plant proteins are more concentrated than animal proteins", "Getting enough fat, since plant-based diets contain no lipids"],
      correct: 0,
      explanation: "Essential amino acids cannot be made by the body and must come from the diet; most single plant protein sources are missing one or more of them, so a vegan diet needs to combine different plant proteins (like grains and legumes) across the day to supply the full set."
    },
    {
      q: "Which single feature distinguishes a fibrous, structural protein like collagen from a globular protein like an enzyme?",
      options: ["Fibrous proteins form long, repetitive strands adapted for strength, while globular proteins fold into compact, specific shapes adapted for functions like catalysis or transport", "Fibrous proteins are always soluble in water, while globular proteins never are", "Only globular proteins contain peptide bonds", "Fibrous proteins never contain more than one polypeptide chain"],
      correct: 0,
      explanation: "Structural proteins like collagen form long, often cross-linked fibres suited to providing mechanical strength (and are typically insoluble), while globular proteins like enzymes and antibodies fold compactly into a precise 3D shape, exposing functional sites needed for binding, catalysis or signalling."
    }
  ],

  "A2.1": [
    {
      q: "Which description correctly matches an organism that carries out holozoic nutrition?",
      options: ["Chemoautotrophic with no digestion", "Photoautotrophic with no digestion", "Saprotrophic with external digestion", "Heterotrophic with internal digestion"],
      correct: 3,
      explanation: "Holozoic nutrition means taking in whole or bulk food and digesting it internally, which makes it a heterotrophic strategy with internal digestion."
    },
    {
      q: "In 1952, Stanley Miller and Harold Urey sparked an electric discharge through a mixture of gases meant to simulate early Earth's atmosphere. What did their results actually demonstrate?",
      options: ["That living cells can self-assemble from simple chemicals", "That complex organic molecules, including amino acids, can form under early-Earth-like conditions", "That DNA can spontaneously replicate without enzymes", "That life can arise instantly given the right chemical mixture"],
      correct: 1,
      explanation: "The Miller-Urey experiment showed that amino acids and other organic building blocks could be generated abiotically from simple inorganic gases and an energy source, supporting one step of the chemical origin-of-life hypothesis — but it did not create a living cell or demonstrate self-replication."
    }
  ],

  "D1.2": [
    {
      q: "A table shows four different mRNA sequences and the amino acids they code for. Which sequence demonstrates degeneracy in the genetic code?",
      options: ["Three different codons coding for three different amino acids", "Different codons coding for the same amino acid at more than one position", "A start codon followed by two other codons for different amino acids", "Three codons for three chemically similar amino acids"],
      correct: 1,
      explanation: "Degeneracy specifically means multiple different codons can code for the same amino acid, so a sequence showing that repetition is the one demonstrating degeneracy."
    },
    {
      q: "An mRNA molecule gets bound and broken down by a nuclease enzyme partway through the translation process. What happens to that particular mRNA molecule as a result?",
      options: ["Transcription of the gene stops", "The mRNA binds more readily to ribosomes", "More copies of this mRNA get synthesised", "That mRNA molecule can no longer be translated"],
      correct: 3,
      explanation: "Once a nuclease has broken down an mRNA molecule, that specific molecule is destroyed and simply can't be used as a template for translation again."
    },
    {
      q: "During translation, ribosomes have three distinct binding sites for tRNA molecules as the growing polypeptide chain moves through. If the leftmost of these three sites (which normally allows a spent tRNA to leave) is experimentally blocked, what would be the most likely immediate effect on translation?",
      options: ["The ribosome would be unable to release the tRNA that has already delivered its amino acid, stalling further progress along the mRNA", "A new tRNA would be unable to enter the ribosome's rightmost binding site", "Translation would proceed at a faster rate than normal", "The mRNA would immediately detach from the ribosome"],
      correct: 0,
      explanation: "The ribosome cycles tRNAs through three sites in sequence; blocking the exit site prevents a tRNA that has already transferred its amino acid from leaving, which would back up the whole translation process even though incoming tRNAs could, in principle, still enter the other sites."
    },
    {
      q: "A section of DNA is transcribed and then translated. If a substitution mutation changes just one DNA base, what determines whether the resulting amino acid sequence actually changes?",
      options: ["Whether the altered codon still codes for the same amino acid, due to the degeneracy of the genetic code", "Whether the mutation occurs during translation rather than transcription", "Whether more than one base has changed", "Whether the mutation occurs in a non-coding region only"],
      correct: 0,
      explanation: "Because the genetic code is degenerate (several codons can specify the same amino acid), a single base substitution doesn't always change the amino acid produced; a 'silent' mutation changes the codon but not the amino acid, while a 'missense' mutation changes both, depending on exactly which codon results."
    },
    {
      q: "Using a table of mRNA codons, a specific sequence of four amino acids (for example Ser-Leu-Arg-Phe) needs to be encoded. Given that several different mRNA codons can specify the same amino acid, what does this illustrate about the genetic code?",
      options: ["The genetic code is degenerate, meaning more than one codon can code for the same amino acid", "The genetic code is ambiguous, meaning one codon can code for more than one amino acid", "Each amino acid has only one possible codon", "The genetic code varies between different species of organism"],
      correct: 0,
      explanation: "The genetic code is described as degenerate (or redundant) because most amino acids can be specified by more than one codon (for example, several codons all code for leucine); it is not ambiguous, however, since each individual codon still only ever specifies one particular amino acid."
    },
    {
      q: "A person following a vegan diet needs to combine different plant protein sources across their meals rather than relying on just one. What is the biochemical reason careful combination matters here?",
      options: ["No single common plant protein source supplies all the essential amino acids in adequate amounts, so combining sources fills in the gaps", "Plant proteins contain no amino acids at all", "The body can synthesise all amino acids itself, making dietary source irrelevant", "Combining sources is only a cultural preference with no biological basis"],
      correct: 0,
      explanation: "Essential amino acids must come from the diet because the body cannot synthesise them; because different plant foods are often deficient in different essential amino acids, deliberately combining complementary sources (such as grains and legumes) ensures that, across a day's meals, the body receives a complete set."
    }
  ],

  "A2.2": [
    {
      q: "An electron micrograph shows an organelle made of extensive folded membrane with no ribosomes attached to its surface. What is this organelle, and what is it most associated with?",
      options: ["Mitochondrion, associated with ATP production", "Smooth endoplasmic reticulum, associated with lipid synthesis", "Rough endoplasmic reticulum, associated with protein synthesis", "Golgi apparatus, associated with protein modification"],
      correct: 1,
      explanation: "Smooth ER lacks ribosomes (unlike rough ER) and its extensive folded membrane is where lipids, including phospholipids and steroids, are synthesised."
    },
    {
      q: "What is one benefit of the nuclear envelope being a double membrane rather than a single one?",
      options: ["It reduces the total surface area of the nucleus", "It allows the envelope to break down into vesicles during mitosis", "It keeps hydrophilic phospholipid tails away from the cytoplasm", "It creates pores for DNA to move into the cytoplasm"],
      correct: 1,
      explanation: "Because it's built from two membranes rather than one continuous barrier, the nuclear envelope can disassemble into small vesicles at mitosis and reassemble afterwards."
    },
    {
      q: "A research group wants to visualise a delicate membrane protein at a single frozen instant, without the chemical fixation methods that can distort protein shape. Which imaging technique is best suited to this?",
      options: ["Standard light microscopy", "Immunofluorescence", "Cryogenic electron microscopy", "Gel electrophoresis"],
      correct: 2,
      explanation: "Cryo-electron microscopy rapidly freezes a sample so that proteins are captured in a near-native, stable conformation without the distortion caused by traditional chemical fixatives, making it especially useful for resolving fine structural detail in delicate molecules."
    },
    {
      q: "A cell biologist wants to know exactly where a specific protein is located within a cell, using a light microscope. Which technique directly achieves this?",
      options: ["Attaching a fluorescent tag to an antibody that binds specifically to the protein", "Staining all proteins in the cell with the same general dye", "Increasing the magnification of a standard bright-field microscope", "Freezing the sample before viewing"],
      correct: 0,
      explanation: "Immunofluorescence uses an antibody linked to a fluorescent marker; because antibodies bind highly specifically to one target protein, the glowing signal reveals precisely where that protein sits within the cell, unlike a general stain or simple magnification increase."
    },
    {
      q: "Ribosomes are the only organelle found in essentially every type of cell, from bacteria to complex eukaryotic cells. Why is this consistent with the role ribosomes play?",
      options: ["Every living cell must be able to synthesise proteins from its genetic information", "Every living cell must be able to divide by mitosis", "Every living cell must photosynthesise", "Every living cell needs a nucleus"],
      correct: 0,
      explanation: "Protein synthesis is a universal requirement of life, since proteins carry out almost every cellular function; ribosomes are the structures that translate mRNA into protein, which is why they appear in prokaryotic and eukaryotic cells alike, even though bacteria lack nuclei and other membrane-bound organelles."
    }
  ],

  "B2.2": [
    {
      q: "Which statement correctly describes a functional property of a membrane-bound organelle?",
      options: ["Rough ER synthesises lipids for use outside the cell", "The nucleus has a double membrane to allow vesicle formation for transport", "The mitochondrion keeps Krebs cycle enzymes and substrates compartmentalised in its matrix", "The Golgi apparatus uses ribosomes to make proteins for export"],
      correct: 2,
      explanation: "The mitochondrial matrix physically concentrates the enzymes and substrates of the Krebs cycle in one compartment, which is exactly what compartmentalisation is for, efficient, localised reactions."
    },
    {
      q: "A protein destined for secretion out of the cell is synthesised on ribosomes attached to a membranous organelle, then modified and packaged before release. Which sequence of organelles correctly describes this protein's journey?",
      options: ["Rough endoplasmic reticulum, then Golgi apparatus, then a secretory vesicle", "Smooth endoplasmic reticulum, then mitochondrion, then nucleus", "Golgi apparatus, then rough endoplasmic reticulum, then lysosome", "Nucleus, then ribosome, then smooth endoplasmic reticulum"],
      correct: 0,
      explanation: "Proteins for secretion are synthesised on ribosomes bound to the rough endoplasmic reticulum, which folds and adds initial modifications; they are then transported to the Golgi apparatus for further processing and sorting, before being packaged into vesicles that fuse with the plasma membrane to release their contents outside the cell."
    },
    {
      q: "Compartmentalising a eukaryotic cell into membrane-bound organelles allows very different chemical reactions to occur at the same time without interfering with each other. Which example best illustrates this advantage?",
      options: ["Digestive enzymes are kept inside lysosomes, separated from the rest of the cytoplasm they would otherwise damage", "All enzymes in a eukaryotic cell are found freely dissolved in the cytoplasm", "Compartmentalisation only matters in prokaryotic cells", "Mitochondria and lysosomes always share the exact same internal environment"],
      correct: 0,
      explanation: "Lysosomes contain powerful digestive enzymes that would break down important cellular components if released freely into the cytoplasm; keeping them isolated inside a membrane-bound compartment allows the cell to safely digest material (like worn-out organelles or engulfed particles) only when and where needed."
    }
  ],

  "C1.2": [
    {
      q: "In the last step of anaerobic respiration in human muscle cells, pyruvate is converted to lactate using reduced NAD. What is the purpose of this reaction?",
      options: ["To let energy release from glucose breakdown continue", "To build a hydrogen ion gradient for ATP synthesis", "To provide electrons for the electron transport chain", "To reduce carbon compounds in the absence of oxygen"],
      correct: 0,
      explanation: "This reaction regenerates NAD from reduced NAD, and since glycolysis needs a fresh supply of NAD to keep running, this is what allows energy release to continue without oxygen."
    },
    {
      q: "Two respirometers containing germinating seeds were set up, one with soda lime (which absorbs CO2) and one without. After 30 minutes, what result would you expect?",
      options: ["Neither oil drop moves", "Both oil drops move the same amount", "The oil drop moves toward the seeds in both respirometers", "The oil drop moves in the respirometer with soda lime, but not in the one without it"],
      correct: 3,
      explanation: "With soda lime absorbing the CO2 produced, only the oxygen consumption by respiring seeds changes the gas volume and pulls the oil drop; without soda lime, CO2 released roughly replaces the O2 used, so the drop doesn't move."
    },
    {
      q: "Human muscle cells generate ATP without oxygen during intense, short bursts of activity. Which statement correctly identifies where this process occurs and what it produces?",
      options: ["It occurs in the cytoplasm and produces lactate as the end product", "It occurs in the mitochondrial matrix and produces carbon dioxide", "It occurs in the cytoplasm and produces ethanol and carbon dioxide", "It occurs in the mitochondria and produces ATP without producing any additional end product"],
      correct: 0,
      explanation: "Anaerobic respiration in human cells takes place in the cytoplasm (the same location as glycolysis); because oxygen isn't available to accept electrons in the mitochondria, pyruvate is instead converted to lactate, regenerating the NAD+ needed to keep glycolysis running."
    }
  ],

  "C1.3": [
    {
      q: "A photosynthesis experiment measured the relative concentrations of GP, TP, and RuBP in both light and dark conditions. In the dark, GP concentration rose while TP and RuBP concentrations fell. What explains this?",
      options: ["TP and RuBP from the light reactions are used to make GP", "Less ATP and reduced NADP are available to convert GP into TP", "There's a low CO2 supply for carbon fixation in the dark", "The enzyme Rubisco is only active in the presence of light"],
      correct: 1,
      explanation: "Without light, the light-dependent reactions stop producing ATP and reduced NADP, so GP (made via carbon fixation) can't be converted onward into TP, causing GP to build up while TP and RuBP are used up."
    },
    {
      q: "A graph shows the rate of photosynthesis rising with light intensity, then eventually plateauing, at two different CO2 concentrations. At low light intensity, both curves overlap; at high light intensity, the higher-CO2 curve reaches a higher plateau. What limits the rate at each of those two regions?",
      options: ["Low light region: CO2 concentration. High light region: light intensity", "Low light region: temperature. High light region: light intensity", "Low light region: light intensity. High light region: CO2 concentration", "Low light region: light intensity. High light region: temperature"],
      correct: 2,
      explanation: "When the two curves overlap, light must be the shared limiting factor; once they diverge and the higher-CO2 curve pulls ahead, CO2 concentration has become the limiting factor instead."
    },
    {
      q: "An experiment tested photosynthesis rate across a temperature range up to 70°C. What pattern would you expect between 25°C and 70°C?",
      options: ["A decrease from 25-35°C, then an increase from 35-70°C", "A continuous increase all the way to 70°C", "An increase to a maximum around 30-40°C, then a decrease", "A peak just above 25°C followed by a constant rate"],
      correct: 2,
      explanation: "Photosynthesis rate depends on enzyme activity, which rises with temperature up to an optimum (typically 30-40°C for many plants) before enzymes begin to denature and the rate falls."
    },
    {
      q: "A chromatography experiment separates leaf pigments; each pigment travels a different distance up the paper relative to the solvent front, giving it a characteristic Rf value. What does a pigment's Rf value depend on?",
      options: ["The pigment's solubility in the solvent relative to how strongly it binds to the paper", "The pigment's molecular mass alone", "The colour of the pigment as seen by eye", "The temperature of the room during the experiment only"],
      correct: 0,
      explanation: "Rf value reflects the balance between how soluble a pigment is in the mobile solvent (which carries it up the paper) and how strongly it adsorbs to the stationary paper (which holds it back); different pigments have different combinations of these properties, producing distinct, reproducible Rf values that can be used to identify them."
    },
    {
      q: "Diagrams of a chloroplast show distinct regions: the stroma and the stacked thylakoid membranes (grana). In which of these regions does the Calvin cycle take place?",
      options: ["The stroma, the fluid-filled space surrounding the thylakoids", "The thylakoid membrane itself", "The intermembrane space between the outer and inner chloroplast membranes", "Outside the chloroplast, in the cytoplasm"],
      correct: 0,
      explanation: "The light-dependent reactions occur across the thylakoid membranes, but the Calvin cycle (light-independent reactions) takes place in the stroma, the fluid matrix surrounding the thylakoids, where the enzymes and intermediates needed to fix carbon dioxide into sugars are located."
    },
    {
      q: "During the light-dependent reactions of photosynthesis, electrons ultimately reduce a molecule that will later be used to power carbon fixation in the Calvin cycle. Which molecule is reduced, and where do the electrons that reduce it come from?",
      options: ["NADP is reduced by accepting electrons that originated from photosystem I", "NAD is reduced by accepting electrons from ATP", "Water is reduced by releasing electrons to NADPH", "Glycerate-3-phosphate is reduced by oxidizing NADPH"],
      correct: 0,
      explanation: "At the end of the electron transport chain in the light-dependent reactions, electrons from photosystem I are used to reduce NADP+ to NADPH; this NADPH then supplies the reducing power needed in the Calvin cycle to convert glycerate-3-phosphate into triose phosphate."
    },
    {
      q: "In each full turn of the Calvin cycle needed to eventually produce one molecule of glucose, several molecules of RuBP must be regenerated to keep the cycle running. How many RuBP molecules are regenerated overall in the production of one glucose molecule?",
      options: ["6", "2", "10", "14"],
      correct: 0,
      explanation: "Producing one glucose molecule requires two turns of the Calvin cycle's output being combined, but to keep the cycle continuously running, six RuBP molecules must be regenerated using six CO2 molecules fixed across six turns of the cycle — a detail worth learning precisely, since it's a common point of confusion."
    },
    {
      q: "A graph plots the rate of photosynthesis against light intensity at several different, fixed CO2 concentrations, with temperature held constant. At a point on the graph where increasing light intensity no longer increases the rate of photosynthesis, but increasing CO2 concentration does, what is the limiting factor at that point?",
      options: ["Carbon dioxide concentration", "Light intensity", "Temperature", "Chlorophyll content"],
      correct: 0,
      explanation: "The limiting factor at any point on such a graph is whichever variable, if increased, would raise the rate of photosynthesis; since increasing CO2 (not light) raises the rate at that point, CO2 concentration — not light intensity — must be the factor currently holding photosynthesis back."
    },
    {
      q: "Which group(s) of organisms release oxygen as a by-product of their photosynthesis?",
      options: ["Algae and cyanobacteria, but not fungi", "Fungi only", "Algae and fungi, but not cyanobacteria", "Cyanobacteria and fungi, but not algae"],
      correct: 0,
      explanation: "Oxygen is released as a by-product specifically by oxygenic photosynthesis, which uses water as an electron donor; algae and cyanobacteria both carry out this type of photosynthesis, but fungi are heterotrophic and do not photosynthesise at all."
    },
    {
      q: "Free-air carbon dioxide enrichment (FACE) experiments raise CO2 concentration around plants growing in their natural outdoor environment, rather than in a sealed laboratory chamber. What is the main advantage of this experimental design?",
      options: ["The results more realistically reflect how photosynthesis rates might respond to rising atmospheric CO2 in the field", "It allows scientists to control temperature more precisely than in a lab", "It removes the need to measure CO2 concentration at all", "It eliminates natural variation between individual plants"],
      correct: 0,
      explanation: "Because FACE experiments expose plants to elevated CO2 under otherwise natural, uncontrolled field conditions (natural weather, soil, competition, pests), the resulting data on photosynthesis and growth are considered more representative of how real ecosystems will respond to future atmospheric change than results from an artificial, fully controlled chamber."
    },
    {
      q: "A photosynthesis-linked indicator experiment tests the growth of a plant supplied with different wavelengths of light. Data show a much higher rate of photosynthesis under red and blue light than under green light. What does this pattern reflect?",
      options: ["Chlorophyll absorbs red and blue light strongly but reflects most green light", "Chlorophyll absorbs green light most strongly of all wavelengths", "All wavelengths of light are absorbed equally by chlorophyll", "Photosynthesis does not depend on wavelength, only on total light intensity"],
      correct: 0,
      explanation: "Chlorophyll's absorption spectrum shows strong absorption in the red and blue regions of visible light, with relatively little absorption (and lots of reflection) in the green region, which is exactly why leaves appear green and why photosynthetic rate tends to be lower under green light."
    }
  ],

  "B2.3": [
    {
      q: "A stem cell diagram shows one cell type giving rise to red blood cells, lymphocytes, platelets, and phagocytes, but nothing outside the blood system. What type of stem cell is this, and where is it typically found?",
      options: ["Totipotent, found in bone marrow", "Multipotent, found in bone marrow", "Totipotent, found in blood", "Multipotent, found in blood"],
      correct: 1,
      explanation: "A stem cell that can only produce a limited range of related cell types (here, blood cell types) is multipotent, and this description matches haematopoietic stem cells found in bone marrow."
    },
    {
      q: "Which of these specialised human cells has by far the largest cell volume?",
      options: ["Egg cell", "Sperm cell", "Red blood cell", "White blood cell"],
      correct: 0,
      explanation: "The egg cell is packed with cytoplasm, organelles, and nutrient stores to support early development, making it enormously larger by volume than the other cell types listed."
    },
    {
      q: "Phloem sieve tube elements and human red blood cells are both described as atypical cells. What do they have in common that makes them unusual?",
      options: ["They have no cytoplasm at all", "Their DNA sits loose in the cytoplasm", "They lack a nucleus", "They lack every membrane-bound organelle"],
      correct: 2,
      explanation: "Both cell types lose their nucleus as part of their specialisation, sieve tube elements to maximise space for transport, and red blood cells to maximise space for haemoglobin."
    },
    {
      q: "Cells taken from a very early mouse embryo, before any tissue types have formed, can be coaxed in a lab to become almost any cell type in the body. What term describes this level of developmental potential?",
      options: ["Totipotent", "Pluripotent", "Multipotent", "Unipotent"],
      correct: 0,
      explanation: "The very earliest embryonic cells, capable of forming every cell type in the body plus extra-embryonic tissues like the placenta, are described as totipotent; slightly later embryonic stem cells that can form any body cell type (but not extra-embryonic tissue) are called pluripotent instead."
    },
    {
      q: "Stem cells found in adult bone marrow can develop into several types of blood cell, but not into unrelated cell types like neurons or muscle. What term describes this more limited developmental potential?",
      options: ["Totipotent", "Pluripotent", "Multipotent", "Unipotent"],
      correct: 2,
      explanation: "Multipotent stem cells, such as those found in bone marrow, can differentiate into a limited range of related cell types (in this case, various blood cell lineages), unlike totipotent or pluripotent cells, which retain the ability to form essentially any cell type in the body."
    },
    {
      q: "As an embryo develops, initially identical cells become exposed to different concentrations of signalling molecules depending on their position. What is the result of this exposure?",
      options: ["Cell differentiation, as different concentrations of signal switch different genes on or off", "Uncontrolled cell division with no change in cell identity", "Meiosis, producing haploid gametes", "Apoptosis of all exposed cells"],
      correct: 0,
      explanation: "Gradients of signalling molecules (morphogens) across a developing embryo cause cells in different positions to experience different concentrations, switching on different combinations of genes and steering otherwise identical cells down different developmental pathways — the basis of cell differentiation."
    }
  ],

  "D2.2": [
    {
      q: "DNA in a eukaryotic cell is wound tightly around clusters of histone proteins, forming repeating bead-like units along the chromosome. What is each of these units called?",
      options: ["A nucleosome", "A ribosome", "A centromere", "A chromatid"],
      correct: 0,
      explanation: "A nucleosome consists of a length of DNA wrapped around a core of eight histone proteins; nucleosomes are the basic packaging unit that allows enormous lengths of DNA to be condensed and organised within the small space of a eukaryotic nucleus, and their structure also plays a role in regulating gene expression."
    },
    {
      q: "A twin study measures methylation levels at a particular gene region on chromosome 2 and finds that one identical twin shows consistently higher methylation than the other, despite having an essentially identical DNA sequence. What could explain this difference?",
      options: ["An epigenetic modification, such as increased methylation of cytosines in the promoter region of one twin", "A difference in the underlying DNA base sequence between the twins", "Complete loss of the gene in one twin", "A difference in the number of chromosomes between the twins"],
      correct: 0,
      explanation: "Since identical twins share essentially the same DNA sequence, a difference in gene expression between them is best explained by an epigenetic change, such as differential DNA methylation, which can switch gene expression up or down without altering the underlying base sequence — often influenced by different environmental exposures over a lifetime."
    },
    {
      q: "Increased methylation of cytosine bases in the promoter region of a gene is generally associated with what effect on that gene's expression?",
      options: ["A decrease in gene expression, since methylation typically prevents transcription factors from binding effectively", "An increase in gene expression, since methylation activates the promoter", "No effect on gene expression at all", "A permanent, irreversible change in the DNA base sequence itself"],
      correct: 0,
      explanation: "Methylation of cytosines in a promoter region typically blocks transcription factors and RNA polymerase from binding effectively, silencing or reducing expression of the associated gene; because this modification changes gene activity without altering the DNA sequence, it is classed as an epigenetic (rather than genetic) change, and it can potentially be reversed."
    }
  ],

  "D1.3": [
    {
      q: "Two DNA sequences are compared: one reads ...GGACTGAGGACTCCTC... and the other reads ...GGACTGAGGACACCTC..., with a single base swapped partway along. What type of mutation is this?",
      options: ["Substitution", "Polyploidy", "Insertion", "Deletion"],
      correct: 0,
      explanation: "Since the sequences stay the same length and only one base has been swapped for another, this is a substitution mutation, not an insertion, deletion, or a whole-genome-level change like polyploidy."
    },
    {
      q: "In the polymerase chain reaction (PCR), what is the main function of the primers?",
      options: ["Forming hydrogen bonds between complementary bases across the whole strand", "Proofreading the newly made DNA copies", "Keeping the two DNA strands separated", "Marking out the specific region of DNA that needs to be copied"],
      correct: 3,
      explanation: "Primers bind to specific complementary sequences and mark the start point for DNA polymerase, defining exactly which stretch of DNA gets amplified."
    },
    {
      q: "The p53 gene codes for a protein that normally suppresses tumour growth. Researchers created 'knockout' mice that lack a working copy of p53. How would this model most usefully be applied in cancer research?",
      options: ["Extracting tumour-suppressor protein from the mice for use as a cancer treatment", "Using the mice's p53 gene copies in gene replacement therapy", "Testing how new anti-cancer drugs affect tumours that develop in these mice", "Studying how mutations affect expression of a gene the mice don't even have"],
      correct: 2,
      explanation: "Because these mice reliably develop tumours (lacking the tumour suppressor), they're a useful model for testing whether new anti-cancer drugs can shrink or slow those tumours."
    },
    {
      q: "What is always guaranteed to be true about two individuals of the same species who differ by a single-nucleotide polymorphism (SNP)?",
      options: ["They will have different proteomes", "They will have different genomes", "They will each carry a deletion mutation", "They will each carry an insertion mutation"],
      correct: 1,
      explanation: "A SNP is by definition a single base difference in the DNA sequence, so the genomes are automatically different, even though that single change won't necessarily affect the resulting protein."
    },
    {
      q: "A mutation could potentially be passed on to the next generation if it occurs in which of these cells?",
      options: ["A beta cell in the pancreas", "A T-cell in the lymphatic system", "A sperm cell in the testis", "A skeletal muscle cell in the diaphragm"],
      correct: 2,
      explanation: "Only mutations in germline cells (like sperm or egg cells) can be passed to offspring; mutations in body (somatic) cells like pancreas, immune, or muscle cells die with the individual."
    },
    {
      q: "A DNA sequence coding for part of a polypeptide has a single base deleted partway along the sequence. What is the most likely consequence for the amino acids coded for downstream of the deletion?",
      options: ["A frameshift, changing the grouping of all subsequent codons and likely altering many downstream amino acids", "No effect at all, since deleting one base cannot change a reading frame", "Only the amino acid at the deletion site changes, with no effect further along", "The deletion would stop transcription immediately"],
      correct: 0,
      explanation: "Because the genetic code is read in non-overlapping groups of three bases, deleting (or inserting) a single base shifts the reading frame from that point onward, changing how every subsequent triplet is grouped and typically scrambling the amino acid sequence for the rest of the polypeptide — a much more disruptive outcome than a substitution mutation."
    },
    {
      q: "Gel electrophoresis is used to separate DNA fragments of different sizes by applying an electric current across a gel. Which statement correctly describes what can be deduced from the resulting pattern of bands?",
      options: ["Smaller fragments travel further through the gel towards the positive electrode, since DNA is negatively charged", "Larger fragments travel further than smaller fragments", "All fragments move at the same rate regardless of size", "Fragments move towards the negative electrode because DNA carries a positive charge"],
      correct: 0,
      explanation: "DNA's phosphate backbone gives it an overall negative charge, so in an electric field it migrates towards the positive electrode; smaller fragments move through the gel matrix more easily and therefore travel further in a given time than larger fragments, which is how electrophoresis separates DNA by size."
    },
    {
      q: "Gene knockout is a laboratory technique that disables a specific gene within an organism's genome. What is this technique typically used to investigate?",
      options: ["The normal function of a gene, by observing what changes when it is no longer expressed", "The physical location of a gene on a chromosome", "Whether a gene is dominant or recessive", "The exact base sequence of a gene"],
      correct: 0,
      explanation: "By deliberately disabling ('knocking out') a specific gene and comparing the resulting phenotype to a normal organism, researchers can infer what that gene's protein product normally does, making gene knockout one of the standard tools for investigating gene function."
    },
    {
      q: "Tumours vary enormously in their appearance, growth rate, and whether they spread to other tissues, yet all tumours share one underlying cause. What do all tumours have in common?",
      options: ["They all result from mutations that disrupt normal control of cell division", "They are all malignant and capable of metastasis", "They are all spherical in shape", "They are all caused by viral infection"],
      correct: 0,
      explanation: "Every tumour, whether benign or malignant, arises from mutations in genes that normally control the cell cycle (such as proto-oncogenes or tumour suppressor genes), leading to uncontrolled cell division; only malignant tumours, however, go on to invade surrounding tissue and metastasize to distant sites."
    },
    {
      q: "Mutations are said to occur randomly with respect to their effect on the organism. What does this statement mean?",
      options: ["Mutations arise independently of whether they will be useful, harmful, or neutral to the organism", "Mutations only ever occur in reproductive (germ line) cells", "The rate of mutation can never be increased by external factors like radiation", "Mutations only occur in genes that are actively being transcribed"],
      correct: 0,
      explanation: "Mutations occur due to errors in DNA replication or exposure to mutagens, and they arise without any regard to whether the resulting change would help, harm, or have no effect on the organism; natural selection then acts afterwards on whichever mutations happen to exist, rather than mutations being directed towards useful outcomes."
    },
    {
      q: "A parent has a DNA profile constructed from several genetic markers, and a paternity test compares a child's profile against several possible fathers' profiles to identify a match. What underlying principle makes DNA profiling useful for this purpose?",
      options: ["A child inherits half of their genetic markers from each biological parent, so a true biological father's profile will share a matching pattern with the child's", "All humans have essentially identical DNA profiles", "DNA profiles are identical between any two related individuals, however distantly related", "DNA profiling can only be used to identify a mother, not a father"],
      correct: 0,
      explanation: "Because a child inherits one set of alleles at each marker locus from their mother and one from their father, comparing a child's DNA profile against a candidate father's profile can reveal whether the expected matching pattern is present, which is the genetic principle underlying paternity testing."
    },
    {
      q: "A second course of an antibiotic fails to treat the same bacterial infection that responded well the first time. Rather than the patient developing immunity to the drug, what has more likely happened at the population level of the bacteria?",
      options: ["Natural selection has favoured resistant bacteria that survived the first treatment and multiplied", "The bacteria have permanently lost the ability to cause disease", "The antibiotic has chemically changed and stopped working", "The patient's cells have started producing the antibiotic themselves"],
      correct: 0,
      explanation: "Random mutations occasionally confer antibiotic resistance on individual bacteria; if any resistant bacteria survived the first round of treatment, they can multiply and pass resistance on, so a subsequent infection may be dominated by resistant bacteria even though the antibiotic worked perfectly well the first time."
    }
  ],

  "D3.1": [
    {
      q: "Oogenesis and spermatogenesis both produce gametes, but through slightly different processes. What is the correct general sequence of events in gamete formation?",
      options: ["Mitosis, then differentiation, then meiosis, then cell growth", "Meiosis, then differentiation, then mitosis, then cell growth", "Mitosis, then cell growth, then meiosis, then differentiation", "Meiosis, then cell growth, then mitosis, then differentiation"],
      correct: 2,
      explanation: "Germline cells first divide by mitosis to build up numbers, grow, then undergo meiosis to become haploid, and finally differentiate into their mature gamete form."
    },
    {
      q: "Which type of flowering plant is most likely to rely on cross-pollination rather than self-pollination?",
      options: ["A hermaphrodite plant", "A plant whose anthers and stigma mature at the same time", "A plant with flowers where stamens are much longer than the stigma", "A plant that produces separate male and female individuals"],
      correct: 3,
      explanation: "If a species has entirely separate male and female plants (dioecious), an individual physically cannot self-pollinate, it has no choice but to cross-pollinate with a different plant."
    },
    {
      q: "What is a key difference between oogenesis and spermatogenesis in humans?",
      options: ["The first meiotic division only starts at puberty in oogenesis", "Mitosis produces many cells during gametogenesis in both processes equally", "Cytokinesis divides the cytoplasm unequally in oogenesis but not in spermatogenesis", "Haploid gametes are only produced at the end of meiosis II in oogenesis"],
      correct: 2,
      explanation: "In oogenesis, cytokinesis is deliberately unequal, most cytoplasm stays with the egg cell (with the rest discarded as polar bodies), while spermatogenesis divides cytoplasm evenly between four sperm cells."
    },
    {
      q: "A cross-section diagram of a flower shows a structure at the tip of the male reproductive organ where pollen grains are produced. What is this structure called, and which part of the flower does it belong to?",
      options: ["The anther, part of the stamen", "The stigma, part of the stamen", "The anther, part of the carpel", "The stigma, part of the carpel"],
      correct: 0,
      explanation: "The anther is the pollen-producing structure at the tip of the stamen (the flower's male reproductive part); the stigma, by contrast, is part of the carpel (the female reproductive part) and functions to receive pollen rather than produce it."
    },
    {
      q: "Some flowering plants, including certain cherry trees, carry self-incompatibility alleles that prevent their own pollen from successfully fertilizing their own ovules. What is the main evolutionary benefit of this system?",
      options: ["It prevents inbreeding, increasing genetic variation in the resulting offspring", "It increases the total number of seeds produced per flower", "It prevents mutations from occurring in the plant's gametes", "It stops the plant from releasing pollen at inappropriate times of year"],
      correct: 0,
      explanation: "Self-incompatibility alleles prevent self-fertilization, which forces cross-pollination with genetically different individuals; this promotes outbreeding and maintains greater genetic diversity in the population, reducing the harmful effects that can come from inbreeding (such as increased expression of recessive, often harmful, alleles)."
    },
    {
      q: "During spermatogenesis, a diploid cell with 46 chromosomes undergoes meiosis to eventually produce mature gametes. What is the final outcome of this process, and how many functional gametes are produced from one starting cell?",
      options: ["Four haploid sperm cells, each with 23 chromosomes", "One haploid sperm cell with 23 chromosomes plus three polar bodies", "Four diploid sperm cells, each with 46 chromosomes", "One diploid sperm cell with 46 chromosomes"],
      correct: 0,
      explanation: "Unlike oogenesis (which produces one functional egg plus polar bodies), spermatogenesis divides the cytoplasm evenly at each division, so all four haploid products of meiosis develop into functional sperm cells, each carrying half the original chromosome number (23 in humans)."
    },
    {
      q: "At the moment a human sperm cell fuses with an egg cell during fertilization, several critical events happen almost simultaneously. Which of the following correctly describes one part of this process?",
      options: ["The nuclear membranes of the sperm and egg break down, allowing the two haploid nuclei to combine", "The sperm and egg both undergo a further round of meiosis after fusing", "Mitochondria from both the sperm and the egg contribute equally to the zygote", "The chromosomes from sperm and egg pair up and undergo crossing over before combining"],
      correct: 0,
      explanation: "As the sperm nucleus enters the egg, both nuclear membranes break down, allowing the two haploid sets of chromosomes to come together and form the diploid nucleus of the zygote; notably, mitochondria are inherited almost entirely from the egg, not equally from both gametes, since sperm mitochondria are typically destroyed after fertilization."
    },
    {
      q: "A diagram of the male reproductive system labels several structures along the pathway sperm travel before ejaculation. Which sequence correctly places these structures in the order sperm would pass through, from production to release?",
      options: ["Testis, then epididymis, then vas deferens, then urethra", "Urethra, then testis, then epididymis, then vas deferens", "Vas deferens, then testis, then urethra, then epididymis", "Epididymis, then urethra, then testis, then vas deferens"],
      correct: 0,
      explanation: "Sperm are produced in the testis, mature and are stored in the epididymis, travel along the vas deferens during ejaculation, and are finally expelled through the urethra; getting this sequence right is a common point of confusion worth memorising carefully."
    },
    {
      q: "The onset of puberty depends on a hormonal cascade that begins in the hypothalamus, well before any visible physical changes appear. Which sequence correctly describes this initiating cascade?",
      options: ["Increased hypothalamic GnRH release stimulates the pituitary to secrete more LH, which then increases sex hormone output from the gonads", "Increased sex hormone production by the gonads happens first and triggers GnRH release afterwards", "The pituitary releases GnRH directly, bypassing the hypothalamus entirely", "LH is secreted directly by the hypothalamus without pituitary involvement"],
      correct: 0,
      explanation: "Puberty begins with the hypothalamus increasing its output of gonadotropin-releasing hormone (GnRH); this stimulates the anterior pituitary to release more luteinizing hormone (LH), which acts on the testes or ovaries to boost sex hormone production, ultimately driving the physical and reproductive changes of puberty."
    }
  ],

  "D3.2": [
    {
      q: "A pedigree chart tracks colour blindness (a recessive, X-linked condition) across three generations. An unaffected daughter, Z, has an unaffected mother and an affected brother. What could Z's genotype be?",
      options: ["Homozygous unaffected only", "Heterozygous (carrier) only", "Either homozygous unaffected or heterozygous", "Either homozygous affected or heterozygous"],
      correct: 2,
      explanation: "Since Z shows no symptoms, she isn't homozygous affected, but because her brother is affected, her father or mother could have passed on a recessive allele, so she could be a carrier or not, both remain genuinely possible from the pedigree alone."
    },
    {
      q: "A heterozygous fruit fly with straight wings and red eyes was crossed with a curly-winged, sepia-eyed fly, and the offspring showed all four possible phenotype combinations in roughly equal numbers. What does this indicate?",
      options: ["The wing shape and eye colour genes are on the same chromosome", "The alleles for both genes show codominance", "Straight-winged, sepia-eyed offspring must result from crossing over", "The genes for wing shape and eye colour are not linked"],
      correct: 3,
      explanation: "Roughly equal numbers across all four phenotype combinations is exactly what independent assortment predicts, which only happens if the two genes are unlinked (on different chromosomes, or far apart on the same one)."
    },
    {
      q: "A red-flowered four o'clock plant (Mirabilis jalapa) is crossed with a white-flowered plant, and all F1 offspring have pink flowers. If two of these pink F1 plants are then crossed, what phenotype ratio is expected among the F2 offspring?",
      options: ["1 red : 2 pink : 1 white", "3 red : 1 white, with no pink offspring", "All offspring pink", "1 red : 1 white, with no pink offspring"],
      correct: 0,
      explanation: "Flower colour in Mirabilis jalapa shows incomplete dominance, so heterozygotes (F1) are pink rather than one colour masking the other; crossing two heterozygous pink F1 plants gives a 1:2:1 ratio of homozygous red : heterozygous pink : homozygous white in the F2 generation, following standard Mendelian segregation but with a distinct intermediate phenotype."
    },
    {
      q: "When white-flowered Mirabilis jalapa plants are fertilized using pollen from red-flowered plants, all the resulting offspring have pink flowers rather than red or white. What pattern of inheritance does this demonstrate, and why?",
      options: ["Incomplete dominance, because neither allele is fully dominant, so the heterozygote shows an intermediate phenotype", "Codominance, because both alleles are fully expressed as distinct, separately visible traits", "Simple dominance, because the red allele fully masks the white allele", "Sex linkage, because flower colour is inherited only through pollen"],
      correct: 0,
      explanation: "Incomplete dominance occurs when heterozygous offspring display a phenotype that blends the two homozygous phenotypes (here, pink as a blend of red and white pigment production), rather than one allele completely masking the other as in simple dominance, or both being separately visible as in codominance."
    },
    {
      q: "Phenylketonuria (PKU) is caused by a mutation in a single gene and is inherited in an autosomal recessive pattern. If both parents are heterozygous carriers, what proportion of their children would be expected to be affected by PKU?",
      options: ["One quarter, since only children who inherit the recessive allele from both parents are affected", "Half, since PKU is dominant in this scenario", "None, since both parents are unaffected carriers", "All of the children, since both parents carry the allele"],
      correct: 0,
      explanation: "For an autosomal recessive condition, a cross between two heterozygous carriers (Aa × Aa) produces offspring in a 1:2:1 genotype ratio (AA : Aa : aa); since only the homozygous recessive (aa) genotype is affected, this predicts that one quarter of the children would develop PKU."
    },
    {
      q: "A pedigree chart shows an affected child born to two unaffected parents, with the condition appearing more often in males than females across several generations. What pattern of inheritance is most consistent with this pedigree?",
      options: ["Sex-linked recessive", "Autosomal dominant", "Autosomal recessive", "Sex-linked dominant"],
      correct: 0,
      explanation: "A condition that skips generations (appearing in unaffected parents' children) and shows up disproportionately in males is characteristic of sex-linked recessive inheritance, since males need only one copy of the recessive allele on their single X chromosome to be affected, while females need two copies."
    },
    {
      q: "A student examines a pedigree in which an affected father has all affected daughters but no affected sons, and this pattern repeats across generations. Which mode of inheritance is most consistent with this pattern?",
      options: ["Sex-linked dominant, where the allele is carried on the X chromosome and passed from an affected father to all his daughters", "Autosomal recessive, unrelated to the sex of the offspring", "Sex-linked recessive, where the allele passes to sons rather than daughters", "Autosomal dominant, unrelated to the sex of the offspring"],
      correct: 0,
      explanation: "An affected father passes his X chromosome to every daughter (since sons receive his Y chromosome instead), so if the causal allele is dominant and X-linked, all daughters will inherit it and be affected while sons are unaffected — a distinctive pattern that helps distinguish sex-linked dominant inheritance from other modes."
    }
  ],

  "A3.1": [
    {
      q: "Four organisms have the following genus and species names: W is Felis catus, X is Conus catus, Y is Ameiurus catus, and Z is Felis silvestris. Based only on binomial naming, which pair is most closely related?",
      options: ["W, X and Y together", "X and Y", "W and Z", "W is equally related to all the others"],
      correct: 2,
      explanation: "Sharing a genus name (Felis) is a much stronger indicator of relatedness than sharing a species epithet (catus), which can appear independently across unrelated genera."
    },
    {
      q: "Deep-sea vent bacteria obtain energy by oxidizing inorganic hydrogen sulfide rather than using sunlight or feeding on other organisms. What term describes this mode of nutrition?",
      options: ["Photoautotrophic", "Heterotrophic", "Chemoautotrophic", "Saprotrophic"],
      correct: 2,
      explanation: "Chemoautotrophs build their own organic molecules (like photoautotrophs do) but use energy released from oxidizing inorganic substances instead of light, which is exactly how vent bacteria and other chemosynthetic organisms thrive in permanently dark environments."
    },
    {
      q: "A dinoflagellate species is observed both photosynthesising in sunlight and engulfing smaller prey cells. What best describes this organism's mode of nutrition?",
      options: ["Mixotrophic, since it combines autotrophic and heterotrophic strategies", "Purely autotrophic, since photosynthesis is occurring", "Purely holozoic, since prey is being consumed", "Saprotrophic, since it breaks down organic matter externally"],
      correct: 0,
      explanation: "An organism that can both photosynthesise and ingest other organisms for nutrition is described as mixotrophic, a strategy seen in several dinoflagellates that lets them survive when light or prey availability fluctuates."
    },
    {
      q: "A fungus growing on a dead log releases enzymes onto the wood and then absorbs the digested products. What type of nutrition is this?",
      options: ["Holozoic", "Saprotrophic", "Mixotrophic", "Autotrophic"],
      correct: 1,
      explanation: "Saprotrophic nutrition involves secreting digestive enzymes onto dead organic material and then absorbing the resulting small molecules, external digestion followed by absorption, which is the defining feature that separates fungi and similar decomposers from animals that digest internally (holozoic nutrition)."
    },
    {
      q: "A short section of unknown DNA is sequenced from a tissue sample and compared against a reference database to determine which species it came from. What technique is being used, and what is one common application of it?",
      options: ["DNA barcoding, used to identify species from environmental or unknown samples", "Gel electrophoresis, used to separate proteins by charge", "PCR, used to amplify an entire genome", "Karyotyping, used to count chromosome number"],
      correct: 0,
      explanation: "DNA barcoding compares a short, standardised region of DNA against a reference library to assign an unknown sample to a species, which makes it useful for tasks like identifying species from environmental DNA, mislabelled food products, or degraded biological material."
    },
    {
      q: "Two populations that were once considered separate species are found to produce fertile offspring when crossed under natural conditions. According to the biological species concept, what does this tell us?",
      options: ["They are hybrids and therefore cannot be classified", "They likely belong to the same species, since successful interbreeding and fertile offspring indicate they are not reproductively isolated", "They must belong to different genera", "They cannot be compared using the biological species concept"],
      correct: 1,
      explanation: "The biological species concept defines a species as a group capable of interbreeding to produce fertile offspring in natural conditions; producing fertile offspring is strong evidence the two populations are not reproductively isolated and so should be classified as the same species."
    },
    {
      q: "A liger is produced by crossing a lion and a tiger in captivity. What term describes this kind of cross, and what does it typically require?",
      options: ["An interspecific hybrid, formed by cross-breeding members of two different species", "An intraspecific hybrid, formed within a single species", "A clone, formed without fertilization", "A polyploid, formed by chromosome doubling"],
      correct: 0,
      explanation: "Crossing individuals from two different species produces an interspecific hybrid; such hybrids can sometimes develop successfully but are usually sterile or rare in nature because reproductive isolating mechanisms normally prevent this kind of cross from happening."
    },
    {
      q: "Scientists reclassified all living organisms into three domains rather than the traditional five kingdoms. Which type of evidence was central to establishing this three-domain system?",
      options: ["Differences in cell wall composition alone", "Comparisons of rRNA sequences", "Differences in observable body shape", "Fossil record dating"],
      correct: 1,
      explanation: "Carl Woese's comparison of ribosomal RNA sequences, a molecule present and highly conserved in all cellular life, revealed that Archaea are as distinct from Bacteria as both are from Eukarya, which is the molecular evidence that led to today's three-domain classification system."
    }
  ],

  "B4.1": [
    {
      q: "A mangrove tree species has salt-secreting glands visible in its leaf tissue. How does this adaptation benefit the plant?",
      options: ["The glands provide nitrates since mangrove soil is nitrogen-poor", "The salt attracts predators to eat the leaves", "A high salt concentration in the glands draws water into leaf cells", "The glands remove excess salt to keep cytoplasmic solute concentration workable"],
      correct: 3,
      explanation: "Mangroves take up salty water, so they need a way to excrete the excess salt, keeping their cytoplasm at a solute concentration their metabolism can actually function at."
    },
    {
      q: "Coral polyps host photosynthetic zooxanthellae within their tissues in a close symbiotic relationship. What is the main benefit the coral receives from this partnership?",
      options: ["A supply of glucose and other organic compounds produced by the zooxanthellae's photosynthesis", "Protection from predators provided by the zooxanthellae", "A supply of carbon dioxide for the coral's own respiration", "Increased structural strength of the coral skeleton"],
      correct: 0,
      explanation: "Zooxanthellae photosynthesise using sunlight and pass on a large share of the glucose and other organic products to their coral host, which in turn provides the algae with shelter, carbon dioxide, and nutrients — a mutualistic relationship that allows reef-building corals to thrive in nutrient-poor tropical waters."
    },
    {
      q: "A biome comparison chart plots typical annual precipitation against typical temperature range for several biome types. Which combination of low precipitation and low temperature would place an ecosystem in the tundra category on such a chart?",
      options: ["Low annual precipitation combined with consistently low temperatures", "High annual precipitation combined with high temperatures", "Moderate precipitation with a wide seasonal temperature range", "High precipitation with consistently low temperatures"],
      correct: 0,
      explanation: "Biome classification charts typically plot temperature against precipitation; tundra sits at the low end of both axes, since its cold, dry conditions restrict plant growth to hardy, low-lying vegetation adapted to short growing seasons and permafrost soils."
    },
    {
      q: "Marram grass grows on sand dunes where salinity, water availability, and exposure to wind vary considerably. Which of these factors would be classed as abiotic in an ecological study of the dune ecosystem?",
      options: ["The salinity of the soil surrounding the marram grass", "Competition between neighbouring marram grass plants", "A fungal infection spreading through the marram grass population", "Grazing of marram grass by rabbits"],
      correct: 0,
      explanation: "Abiotic factors are non-living components of the environment — soil salinity, water availability, wind, and temperature are all abiotic, whereas competition, disease, and grazing all involve interactions between living organisms and are therefore biotic factors."
    }
  ],

  "D4.1": [
    {
      q: "Which combination of observations counts as genuine, direct evidence supporting evolution by natural selection?\nI. Homologous structures shared across related species\nII. Domestic dogs having descended from wolves through selective breeding\nIII. An organism passing on characteristics it acquired during its own lifetime",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 0,
      explanation: "Homology and artificial selection both provide genuine evidence for evolutionary change; passing on acquired traits (III) is the disproven Lamarckian idea and isn't how inheritance actually works."
    },
    {
      q: "A population experiences disruptive selection for a particular trait. What outcome would you expect?",
      options: ["An increase in the size of the gene pool overall", "An increase in the frequency of the most extreme phenotypes, at the expense of the middle", "A general reduction in genetic variance across the population", "Faster convergence toward a single average phenotype"],
      correct: 1,
      explanation: "Disruptive selection favours both extremes of a trait over intermediate phenotypes, which increases the frequency of the extremes and the overall genetic variance in the population."
    },
    {
      q: "Wing shapes in bats and insects look and function similarly but evolved through entirely separate evolutionary paths. What describes the evolutionary origin and function of structures like these?",
      options: ["Different origin, generally similar function", "Different origin, unrelated function", "Same origin, same function", "Same origin, different function"],
      correct: 0,
      explanation: "This describes analogous structures: independent evolutionary origins that happen to converge on a similar function, as opposed to homologous structures, which share a common ancestral origin."
    },
    {
      q: "Moth larvae reared at a cooler temperature developed noticeably different wing colouration as adults compared to larvae reared at a warmer temperature, despite being genetically similar. What best explains this?",
      options: ["The cooler temperature directly mutated the wing-colour genes", "Temperature is affecting how the wing-colour genes are expressed", "A mutation happened to occur that helps moths blend into cold environments", "Wing colour is controlled by many genes acting together (polygenic inheritance)"],
      correct: 1,
      explanation: "This is a textbook case of phenotypic plasticity, where the environment (temperature) changes gene expression and therefore the phenotype, without changing the underlying DNA sequence at all."
    },
    {
      q: "An insect population has an allele frequency of 0.72 for the dominant, long-mouthpart allele. Assuming Hardy-Weinberg equilibrium, what fraction of the population is expected to show the recessive, short-mouthpart phenotype?",
      options: ["0.52", "0.40", "0.28", "0.08"],
      correct: 3,
      explanation: "With p = 0.72, q must be 0.28, and the recessive phenotype frequency equals q squared, which works out to approximately 0.08."
    },
    {
      q: "Field experiments manipulating predator numbers in guppy populations showed that where predators were common, males evolved duller colouration, while where predators were rare, brighter males became more common. What does this demonstrate about the two selection pressures acting on male colouration?",
      options: ["Natural selection (avoiding predation) and sexual selection (attracting mates) can pull the same trait in opposite directions, with the balance depending on local conditions", "Only natural selection affects guppy colouration; sexual selection plays no role", "Only sexual selection affects guppy colouration; predation plays no role", "Colouration in guppies is not heritable and cannot evolve"],
      correct: 0,
      explanation: "Bright colouration helps males attract mates (favoured by sexual selection) but also makes them more visible to predators (opposed by natural selection); Endler's guppy experiments elegantly showed how the balance between these two pressures shifts the population's average colouration depending on how much predation risk is present."
    },
    {
      q: "Mutation and sexual reproduction are both described as sources of variation that natural selection can act upon, but they generate variation in different ways. Which statement correctly distinguishes their roles?",
      options: ["Mutation is the only process that creates entirely new alleles; sexual reproduction reshuffles existing alleles into new combinations", "Sexual reproduction creates new alleles, while mutation only reshuffles existing ones", "Both processes create new alleles in the same way", "Neither mutation nor sexual reproduction contributes to variation upon which selection can act"],
      correct: 0,
      explanation: "Mutation is the ultimate source of new genetic variation, since it is the only process capable of creating alleles that didn't exist before; sexual reproduction (through independent assortment and crossing over) doesn't create new alleles but reshuffles existing ones into new combinations, adding further variation for selection to act on."
    },
    {
      q: "For a population's genotype frequencies to remain stable and fit the Hardy-Weinberg equation from one generation to the next, several conditions must be met. Which of the following conditions is required?",
      options: ["Mating within the population must be random", "The population must be very small", "Individuals with the homozygous recessive phenotype must have reduced survival", "Migration into or out of the population must be occurring"],
      correct: 0,
      explanation: "The Hardy-Weinberg model assumes a large population with random mating, no migration, no mutation, and no natural selection acting on any genotype; a small population size, differential survival based on phenotype, or non-random mating would all cause genotype frequencies to drift away from the Hardy-Weinberg prediction."
    },
    {
      q: "A previously rare allele becomes much more common in a population of insects over just a few generations, following the widespread use of a particular pesticide. What evolutionary process best explains this rapid change?",
      options: ["Natural selection favouring individuals carrying the resistance allele, since they survive pesticide exposure and reproduce more successfully", "Genetic drift causing a random increase in allele frequency, unrelated to the pesticide", "A new mutation appearing simultaneously in every individual", "The Hardy-Weinberg equation predicting no change should occur"],
      correct: 0,
      explanation: "When a resistance allele already exists at low frequency in a population, exposure to a strong selective pressure like a pesticide kills susceptible individuals disproportionately, allowing resistant individuals to survive and reproduce at a much higher rate — a clear, fast-acting example of natural selection increasing an allele's frequency."
    }
  ],

  "A4.1": [
    {
      q: "Which combination of observations counts as genuine evidence for evolution?\nI. Homologous structures, such as the pentadactyl limb, across different species\nII. Domestic dogs having been bred from wolves\nIII. Characteristics acquired during an organism's lifetime being passed to offspring",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 0,
      explanation: "Homologous structures and artificial selection (dog breeding) are genuine evidence for evolution; inheritance of acquired characteristics (III) is a discredited, Lamarckian idea."
    },
    {
      q: "Bonobos and chimpanzees are closely related primates that became separated by the Congo River. What did that geographic separation directly cause?",
      options: ["Natural selection", "Reproductive isolation", "Selective breeding", "Analogous structures"],
      correct: 1,
      explanation: "Physically separating two populations prevents interbreeding, that reproductive isolation is what let the two populations diverge into separate species over time."
    },
    {
      q: "Which statement correctly describes an outcome of a particular type of selection?",
      options: ["Directional selection increases the size of the gene pool", "Stabilizing selection increases the frequency of extreme phenotypes", "Disruptive selection increases genetic variance in a population", "Sexual selection always leads to allopatric speciation"],
      correct: 2,
      explanation: "Disruptive selection favours both extremes of a trait over the middle, which increases the spread (variance) of phenotypes in the population."
    },
    {
      q: "In an insect population, the allele for long mouthparts (dominant) has a frequency of 0.72. Using the Hardy-Weinberg equation, what proportion of the population is expected to have short mouthparts?",
      options: ["0.52", "0.40", "0.28", "0.08"],
      correct: 3,
      explanation: "If p = 0.72, then q = 0.28, and the recessive (short mouthparts) genotype frequency is q squared, which is 0.28 squared, approximately 0.08."
    },
    {
      q: "Two structures in different species look and function similarly but evolved completely separately. What term describes their evolutionary origin and function?",
      options: ["Different origin, similar function", "Different origin, same or different function", "Same or different origin, same function", "Same origin, different function"],
      correct: 0,
      explanation: "This describes analogous structures: they arise independently (different evolutionary origin) but converge on a similar function, unlike homologous structures which share an origin."
    },
    {
      q: "Larvae of a moth species were reared at either a cooler or a warmer temperature, and the resulting adult moths showed different wing colour patterns. What best explains this?",
      options: ["The colder temperature directly caused mutations in the wing-colour genes", "Temperature affected how the wing-colour genes were expressed", "A mutation happened to make moths less visible to predators in the cold", "Wing colour is controlled by many genes acting together"],
      correct: 1,
      explanation: "This is phenotypic plasticity: the same genotype produces a different phenotype depending on the environment, because temperature is affecting gene expression, not the DNA sequence itself."
    },
    {
      q: "Ichthyosaurs (extinct marine reptiles) and dolphins (mammals) both evolved streamlined, fish-like bodies despite having completely different ancestors. What term describes this pattern, and what does it demonstrate?",
      options: ["Convergent evolution, showing that similar environments can select for similar body shapes in unrelated lineages", "Divergent evolution, showing that a shared ancestor gave rise to different body plans", "Analogous inheritance, showing a genetic link between the two groups", "Coevolution, showing that the two species evolved in response to each other"],
      correct: 0,
      explanation: "When unrelated lineages independently evolve similar features because they face similar selection pressures (here, moving efficiently through water), this is convergent evolution, and the resulting structures are called analogous — similar in function and appearance but not derived from a shared ancestor."
    },
    {
      q: "The eyes of vertebrates and octopuses are strikingly similar in overall structure and function, yet the two lineages diverged before complex eyes existed in either. What best explains this similarity?",
      options: ["Convergent evolution acting on both lineages under similar selective pressures for vision", "Both eyes are homologous structures inherited from a shared ancestor", "Octopus eyes evolved directly from vertebrate eyes", "The similarity is coincidental and has no evolutionary explanation"],
      correct: 0,
      explanation: "Because vertebrates and octopuses do not share a recent common ancestor with a complex eye, their remarkably similar camera-type eyes are best explained by convergent evolution: similar selection pressures (the need for sharp image-forming vision) independently producing similar solutions."
    },
    {
      q: "Over many generations, a single ancestral population becomes divided into two populations that can no longer interbreed successfully. What term describes this process, and what is typically required for it to occur?",
      options: ["Speciation, which usually requires some form of reproductive isolation between the diverging populations", "Convergence, which requires the populations to remain in constant contact", "Succession, which requires colonization of bare habitat", "Mutation, which requires exposure to a mutagen"],
      correct: 0,
      explanation: "Speciation is the formation of new species from an existing one, and it generally depends on reproductive isolation (geographic, behavioural, or genetic) building up between diverging populations until they can no longer produce fertile offspring together, even if they later come back into contact."
    },
    {
      q: "A ring of salamander populations wraps around a valley; neighbouring populations can interbreed, but the two populations at the ends of the ring, which come into contact, cannot produce fertile offspring. What does this 'ring species' pattern illustrate about the species concept?",
      options: ["That reproductive isolation can build up gradually across a geographic gradient, blurring the line between what counts as one species or two", "That all populations in a ring must be considered separate species", "That geographic distance has no effect on interbreeding ability", "That ring species always represent a single, uniform species"],
      correct: 0,
      explanation: "Ring species show that speciation is often a gradual process rather than a single event: genetic differences accumulate steadily around the ring until the two ends are different enough to be reproductively isolated, even though every neighbouring pair along the ring can still interbreed."
    },
    {
      q: "In a series of controlled field experiments, researchers manipulated the number of predators in different guppy populations and tracked how bright the males' colouration became over several generations. What did these experiments demonstrate?",
      options: ["That predation pressure can drive natural selection on a trait, in this case male colouration", "That guppies are unaffected by predator presence", "That colouration is entirely determined by diet and has no genetic basis", "That male guppies always evolve towards being duller regardless of predation"],
      correct: 0,
      explanation: "John Endler's classic guppy experiments showed that where predators were more common, males evolved duller colouration (favouring survival over conspicuous mating displays), while where predators were rare, brighter, more attractive males were favoured — a clear demonstration of natural selection acting in real time."
    }
  ],

  "B4.2": [
    {
      q: "Two species of Paramecium grow well when cultured separately, but when grown together in the same flask, one species consistently outcompetes and eliminates the other over time. What ecological principle does this result demonstrate?",
      options: ["The competitive exclusion principle: two species with sufficiently overlapping niches cannot coexist indefinitely", "Mutualism, since both species benefit from being grown together", "Predation, since one species is consuming the other directly", "Allelopathy, since one species is releasing a toxin"],
      correct: 0,
      explanation: "This classic result (based on Gause's experiments) illustrates the competitive exclusion principle: when two species compete for the same limited resources within an overlapping niche, one will eventually outcompete and displace the other, so they cannot coexist indefinitely unless their niches diverge."
    },
    {
      q: "One species of tree releases chemicals into the soil that inhibit the germination and growth of nearby competing plant species. What is this interaction called?",
      options: ["Allelopathy", "Endemism", "Mutualism", "Parasitism"],
      correct: 0,
      explanation: "Allelopathy is a form of interspecific competition in which a plant releases chemical compounds that suppress the growth of neighbouring plants, reducing competition for light, water, and nutrients in favour of the chemical-producing species."
    },
    {
      q: "Bacteria naturally living in the human gut synthesise certain B vitamins that their host cannot make on its own, while the bacteria in turn receive a stable, nutrient-rich habitat. What type of interspecific relationship is this?",
      options: ["Mutualism, since both species benefit", "Parasitism, since only the bacteria benefit", "Predation, since the bacteria are being consumed", "Commensalism, since only the human benefits"],
      correct: 0,
      explanation: "When two different species both gain a benefit from their association, the relationship is mutualistic; here the bacteria receive shelter and nutrients from the gut environment while the human host gains vitamins it cannot otherwise synthesise, a benefit that flows both ways."
    },
    {
      q: "Two competing species share a fundamental niche that overlaps considerably, but in nature they are only ever observed living in slightly different parts of the habitat where they don't directly compete. What does this suggest about their realized niches?",
      options: ["Interspecific competition has restricted each species to a narrower realized niche within its broader fundamental niche", "Their fundamental and realized niches are identical", "The species have no niche overlap of any kind", "Competition has expanded both species' realized niches beyond their fundamental niche"],
      correct: 0,
      explanation: "A fundamental niche describes the full range of conditions a species could occupy in the absence of competitors, while the realized niche is the narrower range it actually occupies once competition is taken into account; observing two competitors partitioning the habitat is a sign that competitive exclusion has squeezed each species into a smaller realized niche."
    }
  ],

  "A3.2": [
    {
      q: "Scientists reclassified life into three domains rather than relying only on kingdoms. What kind of evidence mainly supported this domain-level classification?",
      options: ["Ribosomal RNA base sequences", "Mitochondrial DNA base sequences", "Cell wall structure", "Amino acid sequence of ATP synthase"],
      correct: 0,
      explanation: "Comparing rRNA sequences, present in every living cell, gave a molecular basis for splitting life into Archaea, Bacteria, and Eukarya."
    },
    {
      q: "A cladogram shows that species P and Q share a more recent common ancestor with each other than either does with species R, even though R looks superficially more similar to P. What can correctly be concluded from this cladogram?",
      options: ["P and Q are more closely related to each other than either is to R", "P and R must be more closely related because they look alike", "The cladogram cannot be used to infer relationships", "Physical similarity always indicates a recent common ancestor"],
      correct: 0,
      explanation: "A cladogram represents evolutionary relationships based on shared derived characteristics (often supported by molecular data), not superficial resemblance, so the branching pattern — not how alike two organisms look — is what tells us which species share the most recent common ancestor."
    },
    {
      q: "A cladogram shows that domain Eukarya splits into a branch leading to fungi and animals, and a separate branch leading to plants. Which conclusion is best supported by this branching pattern?",
      options: ["Fungi and animals share a more recent common ancestor than either does with plants", "Plants and animals are the same kingdom", "Fungi evolved directly from plants", "All eukaryotes are equally related to one another"],
      correct: 0,
      explanation: "In a cladogram, organisms that branch off from a shared point closer to the tips (rather than closer to the root) share a more recent common ancestor, so a shared branch for fungi and animals, separate from plants, indicates fungi are more closely related to animals than to plants."
    }
  ],

  "D4.2": [
    {
      q: "Surtsey is a volcanic island off Iceland formed by eruptions between 1963 and 1967, and has been legally protected from human interference ever since. What kind of ecological changes would you expect scientists to have observed there since its formation?",
      options: ["Cyclical succession as the climax community repeatedly changes", "Secondary succession, beginning once the first animals arrived", "Arrested succession caused by drainage of wetland areas", "Primary succession, including increasingly larger plants colonising over time"],
      correct: 3,
      explanation: "Surtsey started as bare volcanic rock with no existing soil or organisms, which is the defining condition for primary succession, and larger, more complex plants would be expected to establish as that succession proceeds."
    },
    {
      q: "A volcanic island newly formed from cooled lava is gradually colonised over decades by lichens, then mosses, then small plants, and eventually shrubs and trees. Which of the following correctly describes what happens to species diversity and food web complexity as this succession proceeds?",
      options: ["Both species diversity and the complexity of food webs tend to increase as succession proceeds", "Species diversity decreases while food web complexity increases", "Both species diversity and food web complexity remain constant throughout succession", "Species diversity increases while food web complexity decreases"],
      correct: 0,
      explanation: "As primary succession proceeds from bare rock through pioneer species to a more established community, soil develops, more niches become available, and species diversity generally increases; with more species present, feeding relationships also become more numerous and complex, increasing the intricacy of the resulting food web."
    }
  ],

  "D4.3": [
    {
      q: "Climate models predict that hardiness zones (regions defined by minimum winter temperature) in parts of North America will shift over the next 25 years. What's a likely consequence of that shift for tree species in the region?",
      options: ["Tree species will spread further north as the climate changes", "Cold-resistant tree species will decline", "There will be no real change in where tree species grow", "Tree species currently found in the north will outcompete species further south"],
      correct: 0,
      explanation: "As hardiness zones shift northward with warming, the areas suitable for a given tree species also shift northward, so species distributions are expected to move north over time."
    },
    {
      q: "A researcher records the exact date of budburst in a tree species every spring for twenty years to see if it's shifting earlier. What field of study does this best represent?",
      options: ["Phenology, the timing of seasonal biological events", "Population genetics, changes in allele frequency over time", "Biogeochemistry, the relationship between ocean acidification and CO2", "Speciation, the emergence of new species through divergent evolution"],
      correct: 0,
      explanation: "Phenology is specifically the study of the timing of recurring biological events, like flowering, migration, or budburst, and how that timing shifts, often in response to climate change."
    },
    {
      q: "Which of the following could contribute to a positive feedback cycle that accelerates global warming?",
      options: ["Methane being released as previously frozen ground thaws", "A newly reforested area absorbing more carbon dioxide", "Higher temperatures increasing plant photosynthesis rates", "Peat gradually accumulating in undisturbed swamps"],
      correct: 0,
      explanation: "Thawing permafrost releasing methane (a potent greenhouse gas) causes further warming, which thaws more permafrost, releasing more methane, that self-reinforcing loop is a positive feedback cycle."
    },
    {
      q: "Since the mid-20th century, atmospheric carbon dioxide concentration has risen sharply, closely tracking the growth of global fossil fuel use. What is considered the main driver of this rise, and of contemporary climate change more broadly?",
      options: ["The combustion of fossil fuels, releasing large quantities of greenhouse gases into the atmosphere", "Natural variability in the sun's output, following a predictable long-term cycle", "Ocean currents redistributing existing heat rather than adding any new heat", "Volcanic eruptions releasing heat directly into the atmosphere"],
      correct: 0,
      explanation: "While natural factors like solar variability and volcanic activity do influence climate over long timescales, the overwhelming scientific consensus is that the rapid rise in atmospheric CO2 (and the associated enhanced greenhouse effect) since industrialisation is primarily driven by human combustion of fossil fuels."
    },
    {
      q: "Continuous measurements of atmospheric CO2 concentration at a monitoring station show a clear yearly zig-zag pattern superimposed on a long-term upward trend: concentration falls each year during one part of the year and rises during the other. What best explains this seasonal dip?",
      options: ["Increased photosynthesis by land plants during their growing season absorbs more CO2 than is being released", "A seasonal decrease in the rate of global fossil fuel combustion", "Increased volcanic activity during certain months of the year", "A seasonal increase in the rate of respiration by all organisms"],
      correct: 0,
      explanation: "During the Northern Hemisphere's growing season, the much larger land area (and plant biomass) there means photosynthesis temporarily draws down atmospheric CO2 faster than it's being released, producing an annual dip that is reversed in autumn and winter as plant growth slows and respiration/decomposition dominate again — the well-known 'Keeling curve' pattern."
    },
    {
      q: "Adding iron to nutrient-poor ocean surface waters has been proposed as a way to trigger blooms of phytoplankton, in the hope of increasing carbon dioxide removal from the atmosphere. What would be a plausible short-term consequence of a successful iron-fertilization bloom?",
      options: ["An increase in the rate of photosynthesis by phytoplankton, increasing uptake of atmospheric CO2 into the ocean", "A decrease in the rate of photosynthesis by phytoplankton", "An immediate decrease in atmospheric CO2 with no involvement of phytoplankton", "No change in CO2 exchange between the ocean and atmosphere"],
      correct: 0,
      explanation: "Iron often limits phytoplankton growth in certain ocean regions; adding it can trigger a bloom that increases photosynthetic uptake of dissolved CO2, which in turn increases the rate at which atmospheric CO2 diffuses into the ocean to replace it — though the long-term effectiveness and ecological side effects of this geoengineering approach remain debated."
    },
    {
      q: "Actions such as afforestation and rewetting drained peatlands are often promoted as climate change mitigation strategies, while deforestation has the opposite effect. What do afforestation and peatland rewetting have in common in terms of carbon?",
      options: ["Both increase carbon sequestration, storing more carbon in biomass or soil than before", "Both decrease carbon sequestration compared to leaving the land as it was", "Neither has any measurable effect on atmospheric carbon dioxide", "Only afforestation affects carbon storage; peatland rewetting does not"],
      correct: 0,
      explanation: "Afforestation increases the amount of carbon stored in growing tree biomass, while rewetting a drained peatland stops the rapid oxidation (and CO2 release) that occurs when peat is exposed to air, instead allowing new peat and stored carbon to build up again; deforestation does the reverse of both, releasing stored carbon rather than sequestering it."
    },
    {
      q: "Rising ocean temperatures are linked to several ecological consequences, including coral bleaching events. Why does elevated water temperature typically reduce nutrient upwelling to the ocean surface as well?",
      options: ["Warmer surface water increases ocean stratification, making it harder for cooler, nutrient-rich deep water to mix upward", "Warmer water always increases mixing between surface and deep layers", "Nutrient upwelling is completely unrelated to ocean temperature", "Warmer surface water sinks below cooler water, forcing nutrients upward"],
      correct: 0,
      explanation: "Warm water is less dense than cold water, so as surface layers warm, the ocean becomes more strongly stratified (layered), which resists the vertical mixing that would normally bring nutrient-rich deep water up to the surface; reduced upwelling in turn limits nutrient availability for phytoplankton, with knock-on effects throughout the marine food web."
    },
    {
      q: "One proposed short-term consequence of a large phytoplankton bloom triggered by ocean iron fertilization is a temporary shift in the ocean's role in the carbon cycle. Which statement best describes this shift?",
      options: ["The area of ocean temporarily becomes a stronger carbon sink, absorbing more CO2 from the atmosphere than it releases", "The area of ocean becomes a permanent, unlimited carbon source", "The bloom has no effect on the balance between the ocean and atmosphere", "The bloom immediately releases stored carbon back into the atmosphere"],
      correct: 0,
      explanation: "A phytoplankton bloom increases the rate of photosynthetic carbon fixation in that patch of ocean, temporarily strengthening it as a carbon sink (absorbing more CO2 from the atmosphere); whether this effect is significant or lasting at a global scale is a major point of scientific debate around ocean iron fertilization as a climate strategy."
    },
    {
      q: "Melting Arctic permafrost is releasing methane and carbon dioxide that had been trapped in frozen soil for thousands of years. What kind of climate mechanism does this represent?",
      options: ["A positive feedback loop, since warming causes permafrost to melt, which releases more greenhouse gases, causing further warming", "A negative feedback loop, since permafrost melting removes greenhouse gases from the atmosphere", "An unrelated, one-off event with no ongoing consequences for climate", "A mechanism that only affects local Arctic temperatures, not the global climate"],
      correct: 0,
      explanation: "Permafrost melting releases greenhouse gases that had been locked away in frozen ground; these gases contribute to further atmospheric warming, which in turn causes more permafrost to melt and release more gas, making this a positive feedback loop that can accelerate climate change beyond what direct human emissions alone would cause."
    }
  ],

  "C4.1": [
    {
      q: "Which interspecific relationship results in a negative impact for both species involved?",
      options: ["Competition", "Mutualism", "Parasitism", "Commensalism"],
      correct: 0,
      explanation: "In competition, both species are trying to use the same limited resource, and both are worse off for it, unlike parasitism, where only the host is harmed."
    },
    {
      q: "Legume plants (like soybeans) form root nodules containing Rhizobium bacteria. What best explains the relationship between the two species?",
      options: ["Mutualistic: bacteria get oxygen for respiration, the plant gets carbon dioxide", "Mutualistic: the plant supplies sugars, and gets ammonium for protein synthesis in return", "Parasitic: bacteria drain nutrients from the plant, stunting its growth", "Parasitic: bacteria take water from the roots, reducing photosynthesis"],
      correct: 1,
      explanation: "This is a classic mutualism: the plant provides sugars from photosynthesis, and the nitrogen-fixing bacteria provide the plant with usable ammonium for making amino acids and proteins."
    },
    {
      q: "In the mutualistic relationship between mycorrhizal fungi and orchids, what role does the fungus mainly play?",
      options: ["Nutrient absorption for the orchid", "Photosynthesis on the orchid's behalf", "Producing carbon dioxide for the orchid", "Providing physical shelter for the orchid"],
      correct: 0,
      explanation: "Mycorrhizal fungi vastly increase the surface area available for absorbing water and nutrients from the soil, which they share with the orchid in exchange for sugars."
    },
    {
      q: "Which scenario is an example of a population control mechanism operating within a community?",
      options: ["Bottom-up control of herbivores by a top predator", "Top-down control of grasses by the consumers that eat them", "Top-down control of a plant species by how much nutrient is in the soil", "Bottom-up control of dissolved oxygen levels by corals"],
      correct: 1,
      explanation: "Top-down control means a higher trophic level (consumers) limits a lower one (the grasses they eat); resource availability limiting a population, by contrast, is bottom-up control, not top-down."
    },
    {
      q: "Researchers use a capture-mark-release-recapture method, together with the Lincoln index (population estimate = M × N ÷ R), to estimate a mollusc population on a rocky shore. In the first sample, 40 individuals are marked and released; in a second sample, 100 individuals are caught, of which 8 are marked. What does this method assume in order for the estimate to be accurate?",
      options: ["Marked individuals mix randomly back into the population and marking does not affect survival or capture probability", "All individuals in the population are captured in the first sample", "Marked individuals are more likely to be recaptured than unmarked ones", "The population size changes substantially between the two sampling events"],
      correct: 0,
      explanation: "The Lincoln index only gives an accurate estimate if marked individuals redistribute randomly and are neither more nor less likely to be recaptured than unmarked ones, and if the population stays roughly closed (no major births, deaths, immigration or emigration) between the two sampling events."
    },
    {
      q: "Salinity, temperature, and available light are all measured as part of a study on marram grass growing on a coastal sand dune. Which category do these measurements belong to?",
      options: ["Abiotic factors, since they are non-living components of the environment", "Biotic factors, since they involve interactions with other organisms", "Neither abiotic nor biotic, since they don't affect the ecosystem", "Population density measures, since they describe organism numbers"],
      correct: 0,
      explanation: "Abiotic factors are the non-living physical and chemical components of an ecosystem, such as salinity, temperature, and light availability; these contrast with biotic factors, which describe interactions between organisms such as competition, predation, or disease."
    },
    {
      q: "A study rears mosquito larvae at two different pH levels and tracks the proportion still at the larval stage (versus already pupated) over 15 days. Larvae at the lower pH reach the pupal stage noticeably sooner than those at the higher pH. What can be concluded from this data?",
      options: ["Lower pH is associated with faster larval development in this species", "pH has no measurable effect on larval development", "Higher pH always speeds up insect development in general", "All larvae pupate at exactly the same rate regardless of pH"],
      correct: 0,
      explanation: "If larvae reared at the lower pH reach the pupal stage earlier than those at the higher pH, the data support a link between lower pH and faster development in this specific experiment; care is needed not to overgeneralise this single result to insect development as a whole, since other species or conditions might respond differently."
    },
    {
      q: "A population growth curve for yeast in a closed flask shows rapid growth followed by a much slower, eventually flattened phase. Which factor would be most likely to explain the point where growth begins to slow sharply?",
      options: ["Increasing competition for limited resources such as nutrients and space as the population approaches carrying capacity", "A sudden decrease in predation pressure", "An increase in food supply part-way through the experiment", "A decrease in the size of the population that has already occurred"],
      correct: 0,
      explanation: "As a population in a closed environment grows, resources like nutrients and space become increasingly limited and waste products accumulate, increasing competition and death rate while slowing birth rate; this density-dependent effect is what causes growth to slow and eventually plateau near the environment's carrying capacity."
    }
  ],

  "C4.2": [
    {
      q: "In a food web from Chesapeake Bay, small planktivorous fish are eaten by wading birds, which are eaten by bald eagles. Considering the whole web, which organisms act as tertiary consumers in at least one food chain?",
      options: ["Small planktivorous fish and tundra swans", "Herbivorous ducks and bald eagles", "Wading birds and geese", "Ospreys and benthic invertebrates"],
      correct: 1,
      explanation: "A tertiary consumer sits three levels above producers, in different chains through this web, both herbivorous ducks (via a longer chain elsewhere) and bald eagles occupy that third-consumer position."
    },
    {
      q: "In an Arctic marine food web, bacteria, nanoflagellates, and diatoms are all shown consuming sunlight-derived energy as well as feeding on other organisms. Which organism in this kind of web is best described as a mixotroph?",
      options: ["Bacteria", "Nanoflagellates", "An organism like Micromonas that both photosynthesises and consumes other cells", "Copepods"],
      correct: 2,
      explanation: "A mixotroph combines both photosynthesis and heterotrophic feeding, which is exactly what distinguishes an organism like Micromonas from strict autotrophs or strict consumers in the same food web."
    },
    {
      q: "An energy pyramid shows 20,010 units of energy available to producers, 4,006 units reaching primary consumers, 408 reaching secondary consumers, and 21 reaching tertiary consumers (all in kJ per square metre per year). What's a valid conclusion from this data?",
      options: ["Producers lose almost all their energy by reflecting sunlight", "4,006 kJ per m2 per year is gained by primary consumers", "Tertiary consumers use 408 kJ per m2 per year in life processes", "21 kJ per m2 per year is used by detritivores"],
      correct: 1,
      explanation: "Each level in the pyramid represents the energy actually gained by that trophic level, so the 4,006 figure directly represents what primary consumers gained, not what was lost or used elsewhere."
    },
    {
      q: "Nitrogen fertiliser increasingly leaches into a nearby lake over several years. What change would you expect to see in the lake as a result?",
      options: ["Wilting of surface plants", "An increase in biochemical oxygen demand (BOD)", "Weakened shells in molluscs", "Bioaccumulation of pollutants at higher trophic levels"],
      correct: 1,
      explanation: "Excess nitrogen drives algal blooms; when that extra algae dies and decomposes, decomposer activity spikes and consumes more dissolved oxygen, raising the biochemical oxygen demand of the water."
    },
    {
      q: "A terrestrial food web diagram shows several species linked by feeding relationships, some of which feed only on producers while others feed on both producers and other consumers. Which group in the food web is correctly described as 'primary consumers'?",
      options: ["Species that feed directly and only on producers", "Species that feed on primary consumers only", "Species that photosynthesise to produce their own food", "Species that decompose dead organic matter"],
      correct: 0,
      explanation: "Primary consumers occupy the second trophic level, feeding directly on producers (autotrophs); species that additionally or exclusively feed on other consumers occupy higher trophic levels (secondary or tertiary consumers), so correctly identifying 'primary' consumers in a food web means tracing exactly which species feed only on the producer level."
    },
    {
      q: "In a eutrophic lake, an excess of nutrients from agricultural runoff triggers a large algal bloom, which is followed some time later by a sharp drop in dissolved oxygen and a fish die-off. What is the underlying chain of events connecting these observations?",
      options: ["Excess nutrients cause algae to overgrow; when the algae die, decomposing bacteria multiply and consume large amounts of dissolved oxygen through respiration", "Excess nutrients directly poison the fish, unrelated to the algae", "The algal bloom itself directly increases dissolved oxygen so much that fish cannot survive", "Fish die first, which then causes the algal bloom afterwards"],
      correct: 0,
      explanation: "Eutrophication follows a predictable chain: excess nutrients (often nitrates or phosphates) cause explosive algal growth; when the short-lived algae die, decomposer bacteria break down the dead material and, in doing so, consume large amounts of dissolved oxygen through aerobic respiration, leaving too little oxygen for fish and other aerobic organisms to survive."
    }
  ],

  "A4.2": [
    {
      q: "Which action would most directly help reduce ongoing biodiversity loss?",
      options: ["Increasing the rate of deforestation", "Introducing new species to control predator numbers", "Cutting back on renewable energy use", "Rewilding ecosystems that have been degraded"],
      correct: 3,
      explanation: "Rewilding restores natural habitat and species interactions in a degraded area, directly working against biodiversity loss, unlike the other options which would worsen it."
    },
    {
      q: "Satellite images of Borneo show a large loss of forest cover between 1973 and 2010. Which pair of human activities most plausibly explains this?",
      options: ["Logging and palm oil plantation development", "Logging and ecosystem rewilding", "Mining and afforestation", "Afforestation and palm oil plantation development"],
      correct: 0,
      explanation: "Logging and converting land to palm oil plantations are the two dominant, well-documented drivers of large-scale forest loss in Borneo over that period."
    },
    {
      q: "Some conservation programmes prioritise species based on being 'evolutionarily distinct and globally endangered.' Why would a species be included on this kind of priority list?",
      options: ["It shares a niche with an invasive species", "It lives at the physical edge of its ecosystem", "Its population is shrinking and it has few or no close living relatives", "It is a keystone species holding its ecosystem together"],
      correct: 2,
      explanation: "This kind of programme specifically targets species that are both declining and evolutionarily isolated, meaning their extinction would represent a disproportionate loss of unique evolutionary history."
    },
    {
      q: "The North Island giant moa, a large flightless bird, went extinct in New Zealand not long after humans first arrived on the islands. What is considered the most likely cause of this extinction?",
      options: ["Overhunting by the newly arrived human population", "A sudden change in global climate", "Competition with other native megafauna", "Introduction of a new plant disease"],
      correct: 0,
      explanation: "The timing of the moa's extinction closely tracks the arrival and spread of humans across New Zealand, and evidence of large-scale hunting supports overhunting (rather than climate change or competition) as the primary driver, a pattern repeated with megafauna extinctions on several other islands and continents."
    },
    {
      q: "A conservation project reintroduces wolves to a national park decades after they were locally eliminated, aiming to restore natural predator-prey dynamics across the whole ecosystem. What is this strategy called?",
      options: ["Rewilding, through reintroduction of a keystone species", "Afforestation", "Captive breeding only, with no release planned", "Eutrophication management"],
      correct: 0,
      explanation: "Rewilding aims to restore natural ecological processes, often by reintroducing keystone species like large predators, whose presence can cascade through an ecosystem (for example, changing herbivore grazing patterns and allowing vegetation and other species to recover)."
    },
    {
      q: "Global biodiversity has declined significantly over the past century. Which combination of human activities is most directly responsible for this decline?",
      options: ["Urban expansion and clearing land for agriculture", "Restoring degraded habitats and reducing urban sprawl", "Establishing more protected wildlife reserves", "Reducing the human population size"],
      correct: 0,
      explanation: "Habitat loss from expanding cities and converting natural land to farmland is one of the largest direct drivers of global biodiversity loss, since it destroys or fragments the habitats that species depend on, unlike restoration or protection efforts, which work in the opposite direction."
    }
  ],

  "B2.1": [
    {
      q: "Oestradiol is a small, non-polar steroid hormone. How is it able to cross the plasma membrane of a target cell?",
      options: ["It passes directly between the phospholipids because it is non-polar", "It passes either between phospholipids or through channel proteins because it is amphipathic", "It can only pass through hydrophilic pores using hydrogen bonding", "It must pass through channel proteins because of its large size"],
      correct: 0,
      explanation: "Because it's small and non-polar, oestradiol can simply diffuse straight through the hydrophobic core of the bilayer without needing any transport protein."
    },
    {
      q: "At very low temperatures, membranes risk becoming too rigid to function properly. Which change in membrane composition helps maintain fluidity in the cold?",
      options: ["An increase in unsaturated fatty acids and a decrease in saturated ones, proteins unchanged", "No change to unsaturated fatty acids, an increase in saturated ones, proteins decrease", "An increase in unsaturated fatty acids and a decrease in saturated ones, proteins unchanged (kinked tails prevent tight packing)", "A decrease in unsaturated fatty acids, no change to saturated ones, proteins increase"],
      correct: 2,
      explanation: "Unsaturated fatty acid tails have kinks that stop phospholipids packing too tightly together, so increasing their proportion (relative to saturated ones) keeps the membrane fluid even in the cold."
    },
    {
      q: "Red blood cells were placed into four different solutions. In solution 2 they crenated (shrivelled with a spiky outline), and in solution 4 they burst. What can be concluded about the two solutions?",
      options: ["Solution 1 is hypotonic to solution 4", "Solution 2 is hypotonic to solution 1", "Solution 3 is hypertonic to solution 4", "Solution 4 is hypertonic to solution 2"],
      correct: 2,
      explanation: "A cell that stays normal in solution 3 but bursts in solution 4 shows solution 4 has a lower solute concentration than solution 3, meaning solution 3 is hypertonic relative to solution 4."
    },
    {
      q: "Which molecule is correctly paired with the membrane component that lets it cross the membrane?",
      options: ["Insulin paired with aquaporin", "Glycogen paired with a channel protein", "Oestradiol paired with the phospholipid bilayer directly", "Carbon dioxide paired with a pump protein"],
      correct: 2,
      explanation: "Oestradiol is small and non-polar, so it passes straight through the phospholipid bilayer itself rather than needing a transport protein."
    },
    {
      q: "Human cells maintain a much higher concentration of potassium ions inside the cell than outside, and a much higher concentration of sodium ions outside than inside. Since both ions would naturally diffuse down their gradients, what process must be maintaining this arrangement?",
      options: ["Active transport using a membrane protein pump, using ATP to move ions against their gradients", "Facilitated diffusion using a channel protein, which requires no energy", "Simple diffusion directly across the phospholipid bilayer", "Osmosis through aquaporins"],
      correct: 0,
      explanation: "Because both ions are being kept away from equilibrium, energy must be spent to move them against their concentration gradients; this is exactly what the sodium-potassium pump does, using ATP to actively transport sodium out and potassium in, maintaining the gradients that resting and action potentials depend on."
    },
    {
      q: "Certain glycoproteins embedded in the cell membrane allow the immune system to distinguish 'self' cells from foreign ones. Which part of the membrane's structure is responsible for this cell-recognition function?",
      options: ["Carbohydrate chains attached to membrane proteins, projecting from the outer surface", "The hydrophobic tails of the phospholipids", "Cholesterol molecules embedded within the bilayer", "The hydrophilic phosphate heads alone"],
      correct: 0,
      explanation: "Glycoproteins (and glycolipids) have carbohydrate chains that project outward from the membrane surface; the specific pattern of these chains acts like a molecular identity tag, which is how immune cells recognise a cell as belonging to the body rather than being foreign."
    },
    {
      q: "During receptor-mediated endocytosis, a coat protein assembles on the inner surface of the plasma membrane, causing it to curve inward and pinch off as a vesicle. What is the role of this coat protein?",
      options: ["Clathrin, which self-assembles into a lattice that pulls the membrane into a curved shape", "A sodium-potassium pump, which creates the force needed to bend the membrane", "An aquaporin, which allows water to flow in and push the membrane inward", "A glycoprotein, which marks the vesicle for recognition by the Golgi apparatus"],
      correct: 0,
      explanation: "Clathrin molecules bind to the cytoplasmic side of the membrane and assemble into a basket-like lattice; as more clathrin molecules join, the lattice curves and eventually pinches the membrane inward to form a clathrin-coated vesicle, a key mechanism in receptor-mediated endocytosis."
    },
    {
      q: "A diagram of the fluid mosaic model shows a bilayer with embedded proteins that can drift laterally within the membrane. Why is the membrane described as a 'mosaic' as well as 'fluid'?",
      options: ["Because it is made of a patchwork of different components (phospholipids, proteins, cholesterol, glycolipids) that can move relative to one another within the bilayer", "Because the membrane is a rigid, static structure", "Because only phospholipids are present in the membrane", "Because every component of the membrane is fixed permanently in one location"],
      correct: 0,
      explanation: "'Fluid' refers to the ability of phospholipids and proteins to move sideways within the layer; 'mosaic' refers to the variety of different components — proteins, cholesterol, glycolipids, glycoproteins — scattered throughout the phospholipid bilayer like tiles in a mosaic pattern, together giving the membrane its dynamic, patchwork structure."
    },
    {
      q: "Red blood cells placed in a particular solution shrink and develop a spiky, shrivelled appearance under the microscope. What can be concluded about the solution, and why does this happen?",
      options: ["The solution is hypertonic to the cell, so water leaves the cell by osmosis, causing it to shrink (crenate)", "The solution is hypotonic to the cell, so water enters and the cell swells", "The solution is isotonic, so there is no net water movement", "The solution has no effect on water movement across the membrane"],
      correct: 0,
      explanation: "If a cell shrinks and shrivels (crenates), water must be leaving the cell down its concentration gradient, which only happens when the surrounding solution has a lower water potential (higher solute concentration) than the cytoplasm — meaning the solution is hypertonic relative to the cell."
    }
  ],

  "D3.3": [
    {
      q: "People exercising on a hot, humid day show rising body temperature during exercise, which then drops slightly during a rest period before rising again with more exercise. What mechanism explains the temperature drop during rest?",
      options: ["Shivering", "Uncoupled respiration in brown adipose tissue", "Vasodilation in the skin", "Hair erection (piloerection)"],
      correct: 2,
      explanation: "During rest in the heat, blood vessels in the skin widen (vasodilation), increasing blood flow to the skin surface so more heat can radiate away, cooling the body slightly."
    },
    {
      q: "PET scans show much higher brown adipose tissue activity in a person at 2°C compared to at room temperature. How does brown adipose tissue help regulate body temperature in the cold?",
      options: ["It provides ATP for muscles to shiver", "It insulates the body so heat isn't lost", "It converts into thick white fat to prevent hypothermia", "It breaks down fat to release heat directly, without producing ATP"],
      correct: 3,
      explanation: "Brown fat contains a protein that uncouples respiration from ATP production, meaning the energy from breaking down fat is released as heat instead, which is a very direct way to warm the body."
    },
    {
      q: "When the body's core temperature rises above its normal set point, several physiological responses act to bring it back down. Which of the following is a correct example of one such response?",
      options: ["Vasodilation of blood vessels near the skin surface, increasing heat loss to the environment", "Vasoconstriction of blood vessels near the skin surface", "Shivering of skeletal muscle to generate heat", "Increased secretion of thyroxine to raise metabolic rate"],
      correct: 0,
      explanation: "As body temperature rises, vasodilation widens blood vessels close to the skin's surface, increasing blood flow there and allowing more heat to be lost to the surrounding environment by radiation, while vasoconstriction, shivering, and increased thyroxine secretion are all responses used to conserve or generate heat when the body is too cold."
    },
    {
      q: "If a person's core body temperature drops below its normal set point, several homeostatic mechanisms are triggered to restore it. Which response would be expected under these conditions?",
      options: ["Increased shivering, generating heat through rapid, repeated muscle contraction", "Increased sweating to cool the body further", "Vasodilation of skin blood vessels to lose more heat", "Decreased thyroxine secretion, slowing metabolic heat production"],
      correct: 0,
      explanation: "A drop in core temperature triggers heat-generating and heat-conserving responses, including shivering (rapid involuntary muscle contractions that release heat as a byproduct) and vasoconstriction; sweating, vasodilation, and reduced thyroxine would all make the situation worse by losing or failing to generate additional heat."
    }
  ],

  "C3.1": [
    {
      q: "During moderate-intensity exercise, blood flow is redirected away from some organs and towards working muscles and the skin. Which change correctly explains one part of this redistribution?",
      options: ["Blood flow to the skin increases so that excess metabolic heat can be lost to the environment", "Blood flow to the brain decreases to divert more blood to digestion", "Blood flow to the digestive system increases to speed up nutrient absorption during exercise", "Blood flow to the kidneys increases specifically to remove lactate"],
      correct: 0,
      explanation: "As muscles generate heat during exercise, blood flow to the skin increases to help dissipate that heat by radiation and sweating, while blood flow to less immediately essential organs (such as the digestive system) is reduced, illustrating how the body coordinates multiple systems to maintain internal balance during physical activity."
    },
    {
      q: "The rhythmic, coordinated contractions that move food through the digestive tract (peristalsis) continue even in people who are unconscious or asleep. What does this indicate about the nervous control of peristalsis?",
      options: ["It is controlled involuntarily by the enteric nervous system, independent of conscious control", "It is controlled voluntarily by the central nervous system", "It requires continuous conscious effort to maintain", "It is controlled entirely by the endocrine system with no nervous involvement"],
      correct: 0,
      explanation: "Peristalsis is coordinated by the enteric nervous system, a largely self-contained network of neurons embedded in the wall of the digestive tract that operates automatically and involuntarily, which is why digestion continues smoothly even during sleep or unconsciousness."
    },
    {
      q: "Multiple organ systems, including the nervous, endocrine, and cardiovascular systems, must work together during a stress response such as the 'fight or flight' reaction. What best describes why this level of integration is necessary?",
      options: ["A coordinated response requires rapid nervous signalling alongside slower, longer-lasting hormonal signalling and altered blood distribution, all acting toward the same goal", "Each system responds completely independently with no need for coordination", "Only the nervous system needs to respond; other systems remain unaffected", "Integration only matters during sleep, not during a stress response"],
      correct: 0,
      explanation: "A stress response needs both the speed of nervous signalling (for immediate reflexes) and the sustained action of hormones like adrenaline (for effects that last longer, like increased heart rate and redirected blood flow), so the nervous, endocrine, and cardiovascular systems must act together in an integrated way rather than independently."
    }
  ],

  "B3.3": [
    {
      q: "A titinopathy is a muscle disorder caused by an abnormal version of the protein titin. Titin normally limits how far a muscle sarcomere can stretch. What would you predict happens if titin is abnormal?",
      options: ["Muscles detach from their tendons", "Muscles stretch too far during relaxation", "Muscles have less ATP available for contraction", "Antagonistic muscle pairs contract at the same time"],
      correct: 1,
      explanation: "Since titin's normal job is to act like a spring limiting overstretching, a faulty titin would most directly cause the sarcomere (and so the muscle) to stretch further than it should during relaxation."
    },
    {
      q: "In a sarcomere diagram, the distance between two Z-lines shortens during contraction as thick and thin filaments slide past each other. Which part of the sarcomere changes length as a muscle relaxes back to its resting state?",
      options: ["The I-band, which lengthens again as the filaments slide apart", "The A-band, which changes length as thick filaments shorten", "The individual thick filaments themselves, which physically shorten", "The individual thin filaments themselves, which physically shorten"],
      correct: 0,
      explanation: "The sliding filament model explains contraction as thick and thin filaments overlapping more, not shortening themselves; as a muscle relaxes, the filaments slide back apart, so the I-band (which contains only thin filaments) lengthens again, while the A-band (defined by the length of the thick filaments) stays constant."
    },
    {
      q: "Cardiac muscle and skeletal (striated) muscle look different overall, but they share some underlying structural features. Which of the following is found in both types of muscle?",
      options: ["Sarcomeres and a large number of mitochondria", "Branched fibres in both tissue types", "A single nucleus per fibre in both tissue types", "Involuntary control in both tissue types"],
      correct: 0,
      explanation: "Both cardiac and skeletal muscle are striated, meaning both contain sarcomeres as their basic contractile units, and both have a high density of mitochondria to supply the ATP needed for repeated contraction — even though cardiac fibres are branched and involuntary while skeletal fibres are unbranched and voluntary."
    },
    {
      q: "At a synovial joint such as the hip, several distinct connective tissues each perform a different mechanical role. Which statement correctly matches a structure to its function?",
      options: ["Tendons transmit the force generated by muscle contraction to the bone", "Ligaments attach muscle to bone", "Cartilage connects one bone directly to another", "Synovial fluid holds the bones of the joint rigidly in place"],
      correct: 0,
      explanation: "Tendons connect muscle to bone and transmit the pulling force of contraction so the bone actually moves; ligaments, by contrast, connect bone to bone and stabilise the joint, while cartilage cushions the bone ends and synovial fluid lubricates the joint to reduce friction during movement."
    }
  ],

  "B3.1": [
    {
      q: "A transverse section of a leaf shows a layer of tall, tightly packed, column-shaped cells just beneath the upper epidermis, densely packed with chloroplasts. What tissue is this?",
      options: ["Upper epidermis", "Palisade mesophyll", "Spongy mesophyll", "Lower epidermis"],
      correct: 1,
      explanation: "Palisade mesophyll cells are the tall, column-shaped, chloroplast-rich cells positioned near the upper surface of a leaf to capture the most light."
    },
    {
      q: "As atmospheric carbon dioxide concentration rises, a mammal's ventilation rate also rises sharply. What mechanism explains this response?",
      options: ["The brainstem increases diaphragm and intercostal muscle contraction after chemoreceptors detect a drop in blood pH", "Stretch receptors in the brainstem directly signal the lungs to increase ventilation rate", "Baroreceptors detect the CO2 build-up and signal the diaphragm directly", "The pituitary gland stimulates the brainstem when blood plasma becomes more acidic"],
      correct: 0,
      explanation: "Rising CO2 lowers blood pH, which chemoreceptors detect; they signal the brainstem, which then increases the rate and depth of breathing via the diaphragm and intercostal muscles."
    },
    {
      q: "A lung biopsy shows thin, flattened cells lining tiny air sacs, each surrounded by a dense network of capillaries. Which feature of these cells is most directly responsible for efficient gas exchange?",
      options: ["Their extreme thinness, which minimises the diffusion distance between air and blood", "Their thick, multilayered structure, which increases surface area", "Their ability to actively pump oxygen across the membrane", "Their location far away from any blood supply"],
      correct: 0,
      explanation: "Type I pneumocytes lining the alveoli are extremely thin (often just one cell thick), which minimises the diffusion distance between the air in the alveolus and the blood in the surrounding capillaries, allowing oxygen and carbon dioxide to diffuse rapidly across the exchange surface."
    },
    {
      q: "A graph of lung volume during normal breathing and then a forced deep breath in and out is used to calculate a person's vital capacity. What does 'vital capacity' actually represent?",
      options: ["The maximum volume of air that can be exhaled after the deepest possible inhalation", "The volume of air left in the lungs after a normal exhalation", "The total volume of the lungs including air that can never be exhaled", "The volume of one normal, resting breath"],
      correct: 0,
      explanation: "Vital capacity is the maximum amount of air a person can forcibly exhale after taking the deepest possible breath in; it excludes the residual volume of air that always remains in the lungs (since the lungs can never be completely emptied), which is why it's smaller than total lung capacity."
    },
    {
      q: "Emphysema causes progressive destruction of the walls between alveoli, merging many small air sacs into fewer, larger ones. What is the most direct physiological consequence of this change?",
      options: ["A decrease in the total surface area available for gas exchange", "An increase in the surface area available for gas exchange", "An increase in pulmonary surfactant production", "A decrease in the rate of blood flow to the lungs"],
      correct: 0,
      explanation: "Destroying the thin walls between alveoli merges many small sacs into fewer large ones, which dramatically reduces the total internal surface area of the lungs; since gas exchange rate depends heavily on surface area, this directly explains the breathlessness experienced by people with emphysema."
    },
    {
      q: "During inhalation in humans, the diaphragm contracts and moves downward. What effect does this have on the thoracic cavity, and why does air then flow into the lungs?",
      options: ["Thoracic volume increases, decreasing pressure inside the lungs below atmospheric pressure, so air flows in", "Thoracic volume decreases, increasing pressure inside the lungs, so air flows in", "Thoracic volume stays constant, but pressure decreases anyway", "The diaphragm's movement has no effect on lung pressure"],
      correct: 0,
      explanation: "When the diaphragm contracts and flattens, it increases the volume of the thoracic cavity; by Boyle's law, increasing the volume of a gas-filled space decreases its pressure, so the pressure inside the lungs drops below atmospheric pressure and air flows in down the pressure gradient."
    },
    {
      q: "Chemoreceptors in the blood vessels and brainstem detect a fall in blood pH (caused by rising carbon dioxide) and trigger an increase in breathing rate. What is the functional significance of this response?",
      options: ["It increases carbon dioxide removal from the blood, helping to restore blood pH back towards normal", "It decreases oxygen delivery to the tissues", "It has no effect on blood chemistry", "It only responds to changes in blood glucose, not CO2"],
      correct: 0,
      explanation: "Rising CO2 lowers blood pH (via carbonic acid formation); chemoreceptors detect this change and increase ventilation rate, which expels more CO2 from the lungs, reducing the amount of carbonic acid in the blood and helping to bring pH back towards its normal, tightly regulated range."
    },
    {
      q: "A trained athlete and a beginner are compared using an oxygen-haemoglobin dissociation curve. If the athlete's curve is shifted to the right relative to the beginner's, what does this indicate about their haemoglobin's behaviour at the tissues?",
      options: ["Haemoglobin releases oxygen more readily at a given partial pressure of oxygen, delivering more oxygen to respiring tissue", "Haemoglobin binds oxygen more tightly and releases less to the tissues", "Oxygen affinity of haemoglobin is unaffected by the shift", "The shift only affects oxygen uptake in the lungs, not release in tissues"],
      correct: 0,
      explanation: "A rightward shift of the dissociation curve (often caused by higher CO2, lower pH, or higher temperature, all common during exercise) means haemoglobin holds onto oxygen less tightly at any given oxygen partial pressure, so more oxygen is unloaded into actively respiring tissues that need it most."
    }
  ],

  "B3.2": [
    {
      q: "A graph of haemoglobin oxygen saturation against oxygen partial pressure shifts to the right at higher carbon dioxide concentrations and lower pH. What causes this rightward (Bohr) shift?",
      options: ["A decrease in CO2 concentration and a higher pH", "A decrease in CO2 concentration and a lower pH", "An increase in CO2 concentration and a higher pH", "An increase in CO2 concentration and a lower pH"],
      correct: 3,
      explanation: "More CO2 lowers blood pH, and both changes together reduce haemoglobin's affinity for oxygen, shifting the dissociation curve to the right, this is the Bohr shift."
    },
    {
      q: "In a cross section of a sunflower stem, one vascular tissue is positioned toward the outside of the vascular bundle and is responsible for moving sugars around the plant. What is it, and what does it transport?",
      options: ["Xylem, transports water", "Phloem, transports water", "Xylem, transports sugars", "Phloem, transports sugars"],
      correct: 3,
      explanation: "Phloem sits toward the outside of the vascular bundle (with xylem toward the inside) and its role is transporting dissolved sugars, not water."
    },
    {
      q: "Which feature best explains how phloem is adapted for transporting sugars?",
      options: ["Sieve tube elements are packed with mitochondria for active transport", "Plasmodesmata connect companion cells to sieve tube elements, aiding transport between them", "Phloem unloads sugars at the source end using pressure flow", "Companion cells have a reduced cytoplasm to help load sugars"],
      correct: 1,
      explanation: "Companion cells do the metabolic work of loading and supporting sieve tube elements, and plasmodesmata (cytoplasmic connections) between the two cell types are what make that close cooperation possible."
    },
    {
      q: "Which property of veins is essential for their role in the circulatory system?",
      options: ["They're flexible enough to be compressed by surrounding muscle", "They're rigid to resist high blood pressure", "They have fenestrations for rapid exchange with tissue", "They have a very narrow lumen to carry oxygenated blood"],
      correct: 0,
      explanation: "Veins carry blood at low pressure and rely partly on being compressed by surrounding skeletal muscle contractions to help push blood back toward the heart."
    },
    {
      q: "A micrograph shows a large vein running through leg muscle tissue. What mainly drives blood movement along that vein?",
      options: ["The smooth surface of the vein's inner lining", "Stretching and recoiling of the vessel wall itself", "Differences in plasma solute concentration", "Contraction of the surrounding skeletal muscle"],
      correct: 3,
      explanation: "Unlike arteries, veins rely heavily on nearby skeletal muscle contraction (the skeletal muscle pump) to push blood along, since vein walls themselves generate little pressure."
    },
    {
      q: "After a red blood cell releases oxygen in the brain, which sequence correctly describes its path through the heart before it reaches the aorta?",
      options: ["Right atrium then right ventricle then pulmonary artery then vena cava", "Vena cava then right atrium then pulmonary artery then right ventricle", "Vena cava then right atrium then right ventricle then pulmonary artery", "Pulmonary artery then right ventricle then vena cava then right atrium"],
      correct: 2,
      explanation: "Deoxygenated blood from the brain returns via the vena cava into the right atrium, moves into the right ventricle, and is pumped out through the pulmonary artery to the lungs (before later returning oxygenated to reach the aorta)."
    },
    {
      q: "A cross-section of a buttercup root shows the stele (central vascular tissue) and surrounding cortex. In which tissue would you expect to find lignin?",
      options: ["The xylem vessels in the stele", "The cortex cells", "The root epidermis", "The phloem sieve tubes"],
      correct: 0,
      explanation: "Lignin is deposited in xylem vessel walls to provide rigidity and waterproofing, which is why it's concentrated in the xylem tissue at the centre of the root's stele."
    },
    {
      q: "Which environmental change would be expected to increase a plant's rate of transpiration?",
      options: ["An increase in wind speed, which removes water vapour from around the stomata more quickly", "An increase in humidity around the leaf", "A decrease in temperature", "A decrease in light intensity"],
      correct: 0,
      explanation: "Higher wind speed sweeps away the layer of humid air that would otherwise build up around the stomata, maintaining a steeper water potential gradient between the leaf's air spaces and the outside air, which increases the rate of water vapour loss (transpiration)."
    },
    {
      q: "A sphygmomanometer reading shows blood pressure varying between a higher peak value and a lower baseline value as the heart cycles through contraction and relaxation. What do these two values represent?",
      options: ["The higher value is systolic pressure (during ventricular contraction) and the lower is diastolic pressure (during ventricular relaxation)", "The higher value is diastolic pressure and the lower is systolic pressure", "Both values represent the same phase of the cardiac cycle", "The values reflect venous pressure only, not arterial pressure"],
      correct: 0,
      explanation: "Systolic pressure is the higher reading, produced when the ventricles contract and forcefully eject blood into the arteries; diastolic pressure is the lower reading, measured when the ventricles are relaxed and refilling between beats — this is exactly what a sphygmomanometer trace over one cardiac cycle shows."
    },
    {
      q: "Compared with arteries, veins have relatively thin walls with little muscle or elastic tissue. Which of the following best explains why this doesn't cause a problem for blood flow?",
      options: ["Skeletal muscle contraction around veins helps push blood along, compensating for the lack of a strong muscular wall", "Veins carry blood at much higher pressure than arteries, so thick walls aren't needed", "Veins have no need to transport blood at all", "Thin walls allow veins to withstand higher pressure than arteries"],
      correct: 0,
      explanation: "Blood in veins is at much lower pressure than in arteries, so thick elastic walls aren't required to withstand pressure surges; instead, blood is helped along mainly by the squeezing action of surrounding skeletal muscles during movement, together with one-way valves that prevent backflow."
    },
    {
      q: "A diagram compares blood circulation in a fish (single circulation) and a mammal (double circulation). Which statement correctly distinguishes the pressure of blood as it returns to the heart in each system?",
      options: ["In a fish, blood loses considerable pressure passing through the gill capillaries before continuing to the body; in a mammal, blood returns to the heart to be re-pressurised before travelling to the body", "Fish and mammals both re-pressurise blood at the same point in the circuit", "Mammals lose all their blood pressure in a single pass through the capillaries", "Fish have no capillary network at all"],
      correct: 0,
      explanation: "In single circulation (fish), blood passes through one capillary bed (the gills) and loses pressure there before flowing on to the rest of the body at low pressure; in double circulation (mammals), blood returns to the heart after the lungs and is re-pressurised before being pumped out to the rest of the body, allowing faster, more efficient delivery."
    },
    {
      q: "During moderate exercise, blood flow to the skin increases noticeably. What is the main functional reason for this redistribution of blood flow?",
      options: ["Increased blood flow to the skin helps dissipate excess heat generated by working muscles", "Increased blood flow to the skin increases oxygen delivery to the muscles directly", "Increased blood flow to the skin reduces heart rate", "Increased blood flow to the skin has no thermoregulatory role"],
      correct: 0,
      explanation: "Muscle contraction during exercise generates a large amount of metabolic heat; redirecting blood flow to the skin brings this heat close to the body surface, where it can be lost to the environment by radiation and evaporation of sweat, helping to prevent the body from overheating."
    },
    {
      q: "A cross-section of a lily leaf shows a layer of tightly packed, water-conducting vessels alongside a separate layer of living, sieve-tube cells that transport sugars. What are these two tissue types called?",
      options: ["Xylem and phloem", "Epidermis and cortex", "Cortex and pith", "Cuticle and stomata"],
      correct: 0,
      explanation: "Xylem is made of dead, lignified vessels that transport water and mineral ions upward from the roots, while phloem consists of living sieve-tube elements (with companion cells) that transport sugars produced by photosynthesis to other parts of the plant; both are visible as distinct tissue types in a cross-section of a leaf or stem."
    }
  ],

  "C2.2": [
    {
      q: "A table compares two types of gated ion channel in neurons: one at a synapse, one along the axon involved in the action potential. How would these two channel types typically be gated?",
      options: ["The synaptic channel by voltage, the axon channel by neurotransmitter", "The synaptic channel by neurotransmitter, the axon channel by voltage", "Both gated by voltage", "Both gated by neurotransmitter"],
      correct: 1,
      explanation: "Channels at a synapse open in response to neurotransmitter binding, while channels along the axon (driving the action potential itself) open in response to changes in membrane voltage."
    },
    {
      q: "In a pain reflex arc, which structure acts as the effector?",
      options: ["A skeletal muscle", "A sensory nerve ending", "The pituitary gland", "Grey matter of the spinal cord"],
      correct: 0,
      explanation: "The effector is whatever carries out the response, in a pain reflex that's the skeletal muscle that contracts to pull the body part away."
    },
    {
      q: "In the same pain reflex arc, which structure acts as the receptor?",
      options: ["A skeletal muscle", "Grey matter of the spinal cord", "The pituitary gland", "A sensory nerve ending"],
      correct: 3,
      explanation: "The receptor is what detects the stimulus in the first place, a sensory nerve ending detecting a painful stimulus is exactly that."
    },
    {
      q: "Where in the spinal cord would you expect to find the synapse between a sensory neuron and an interneuron in a pain reflex arc?",
      options: ["In the white matter, at the outer edge of the cord", "In the grey matter, toward the centre of the cord", "Outside the spinal cord entirely, in the peripheral nerve", "In the cerebrospinal fluid surrounding the cord"],
      correct: 1,
      explanation: "Synapses between neurons in the spinal cord are found in the grey matter (the H-shaped region toward the centre), which is where the cell bodies and synaptic connections are concentrated."
    },
    {
      q: "The conduction velocity of electrical impulses was compared across three myelinated nerve fibre types. Fibre R conducted impulses much faster than fibres P and Q. What's the most likely explanation?",
      options: ["Fibre R is the longest of the three", "Fibre R has the thinnest myelin sheath", "Fibre R has the largest diameter", "Fibre R has the most mitochondria"],
      correct: 2,
      explanation: "A larger axon diameter reduces internal resistance to the electrical current, which is a major factor in why some myelinated fibres conduct impulses faster than others."
    },
    {
      q: "A graph of membrane potential during an action potential shows a rapid upward spike (depolarisation) followed by a fall back down (repolarisation). At which point on this graph do voltage-gated sodium channels open?",
      options: ["Just before and during the rapid rising (depolarising) phase", "Only after the peak, during repolarisation", "Only at resting potential, before any stimulus arrives", "Sodium channels never open during an action potential"],
      correct: 0,
      explanation: "Once a stimulus depolarises the membrane past threshold, voltage-gated sodium channels open, allowing a rapid influx of sodium ions that drives the sharp rising phase of the action potential; they then inactivate as potassium channels open to repolarise the membrane back towards resting potential."
    },
    {
      q: "Cocaine interferes with normal synaptic transmission at dopamine synapses in the brain. Which of the following correctly describes its mechanism of action?",
      options: ["It blocks the reuptake of neurotransmitter from the synaptic cleft back into the presynaptic neuron", "It opens ion channels that trigger an action potential directly", "It acts as a non-competitive inhibitor of the sodium-potassium pump", "It speeds up saltatory conduction along myelinated axons"],
      correct: 0,
      explanation: "Cocaine blocks the transporter proteins responsible for reuptake of neurotransmitter (such as dopamine) back into the presynaptic neuron; this leaves more neurotransmitter in the synaptic cleft for longer, prolonging and intensifying its stimulatory effect on the postsynaptic neuron."
    },
    {
      q: "Diagrams of several different axons show varying degrees of myelination. Which axon would be expected to conduct impulses the most slowly?",
      options: ["A thin, unmyelinated axon", "A thick, heavily myelinated axon", "A thin, heavily myelinated axon", "A thick, unmyelinated axon (compared to a thinner myelinated one)"],
      correct: 0,
      explanation: "Impulse speed increases with both axon diameter and the presence of a myelin sheath (which enables fast saltatory conduction by jumping between nodes of Ranvier); a thin, unmyelinated axon combines the two features that most slow conduction, making it the slowest of the options."
    },
    {
      q: "Two diagrams illustrate the possible synaptic action of cocaine and of a neonicotinoid insecticide. One diagram shows a molecule blocking the transporter that would normally remove neurotransmitter from the cleft; the other shows a molecule binding directly and permanently to the postsynaptic receptor. Which description matches cocaine's mode of action?",
      options: ["The diagram showing a blocked reuptake transporter, since cocaine prevents removal of the neurotransmitter from the synaptic cleft", "The diagram showing permanent receptor binding, since that is how cocaine works", "Neither diagram represents cocaine, which works by inhibiting a presynaptic pump instead", "Both diagrams equally represent cocaine's mechanism"],
      correct: 0,
      explanation: "Cocaine's mechanism is reuptake inhibition: it blocks the transporter protein that would normally clear neurotransmitter from the synaptic cleft back into the presynaptic neuron, prolonging neurotransmitter action — a different mechanism from neonicotinoids, which act by binding directly and persistently to the postsynaptic receptor itself."
    },
    {
      q: "In the reflex arc, sensory information travels from a receptor to the central nervous system, is processed, and a response is generated by an effector, often without conscious awareness. If the reflex being tested is a withdrawal reflex from a painful stimulus, which structure most likely acts as the effector?",
      options: ["A skeletal muscle that contracts to withdraw the limb", "The grey matter of the spinal cord", "A sensory neuron carrying the initial signal", "The pineal gland"],
      correct: 0,
      explanation: "The effector in a reflex arc is the structure that carries out the response, in this case a skeletal muscle that contracts to pull the limb away from the painful stimulus; the grey matter of the spinal cord is where the signal is processed (via a relay neuron), not the structure producing the physical response."
    }
  ],

  "C2.1": [
    {
      q: "The bacterium Vibrio fischeri only produces bioluminescence once its population inside a squid's light organ reaches a high density. What is the mechanism behind this?",
      options: ["At high density, bacteria secrete ligands that bind receptors in the squid's light organ", "Above a critical bacterial density, signalling molecules activate the bacteria's own bioluminescence genes", "A high concentration of bacterial signalling molecules directly switches on bioluminescence genes in the squid's DNA", "The squid's light organ sends a signal telling the bacteria to glow when the squid is at risk"],
      correct: 1,
      explanation: "This is quorum sensing: bacteria constantly release a signalling molecule, and once its concentration crosses a threshold (indicating high bacterial density), it switches on the bacteria's own bioluminescence genes."
    },
    {
      q: "A plant shoot bends toward a light source. Which combination of statements explains how this response happens?\nI. Auxin efflux carriers are positioned unevenly on one side of the cell\nII. Auxin promotes secretion of hydrogen ions\nIII. Cell walls become acidified and cellulose cross-links loosen",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 3,
      explanation: "All three steps work together: auxin gets redistributed unevenly (I), which triggers acid secretion (II), which loosens the cell wall on that side (III), letting those cells elongate faster and bend the shoot toward the light."
    },
    {
      q: "What environmental cue most directly triggers hormone secretion from the pineal gland?",
      options: ["Glucose intake", "The sound of music", "The onset of darkness", "A drop in body temperature"],
      correct: 2,
      explanation: "The pineal gland releases melatonin in response to darkness, which is why it plays such a central role in regulating the sleep-wake cycle."
    },
    {
      q: "A ripe banana placed next to unripe ones causes them to ripen faster too, and each ripening fruit produces even more of the same signalling chemical. What best describes this chemical, and the type of feedback involved?",
      options: ["Ethylene, a gas that triggers positive feedback, accelerating ripening in nearby fruit", "Auxin, which triggers negative feedback to slow ripening", "Cytokinin, which has no effect on ripening", "Abscisic acid, which prevents any further ripening"],
      correct: 0,
      explanation: "Ethylene is a gaseous plant hormone that triggers ripening, and its production is self-amplifying: as fruit begins to ripen, it produces more ethylene, which diffuses to nearby fruit and speeds up their ripening too, an example of positive feedback rather than the more common negative feedback seen in homeostasis."
    },
    {
      q: "After a meal, blood glucose concentration rises, triggering the release of a hormone from the pancreas that lowers it back towards a set point. Which hormone is released, and what effect does it have on liver cells?",
      options: ["Insulin, which stimulates liver and muscle cells to take up glucose and convert it to glycogen", "Glucagon, which stimulates the breakdown of glycogen into glucose", "Adrenaline, which raises blood glucose further", "Thyroxin, which has no direct effect on blood glucose"],
      correct: 0,
      explanation: "Insulin is released when blood glucose rises above the normal range; it promotes glucose uptake by liver and muscle cells and stimulates the conversion of excess glucose into glycogen for storage, lowering blood glucose back towards its homeostatic set point."
    },
    {
      q: "The onset of puberty involves a cascade of hormonal signals, starting in the hypothalamus. Which sequence correctly describes how this cascade unfolds?",
      options: ["The hypothalamus releases more GnRH, which increases pituitary release of LH, which then increases production of sex hormones by the gonads", "The pituitary releases GnRH directly to the gonads with no hypothalamic involvement", "Sex hormones are released first, triggering GnRH release afterwards", "LH is released directly by the hypothalamus, bypassing the pituitary"],
      correct: 0,
      explanation: "Puberty begins when the hypothalamus increases its output of gonadotropin-releasing hormone (GnRH), which stimulates the pituitary gland to secrete more luteinizing hormone (LH); LH then acts on the gonads to increase production of sex hormones like oestrogen and testosterone, driving the physical changes of puberty."
    },
    {
      q: "Epinephrine (adrenaline) causes a rapid rise in blood glucose during exercise by acting on liver cells through a second-messenger system. Which sequence of events correctly describes how this signal is transmitted inside the cell?",
      options: ["Epinephrine activates a G protein, which triggers production of cyclic AMP as a second messenger, ultimately activating enzymes that break down glycogen", "Epinephrine directly enters the cell and binds DNA to switch on glycogen breakdown", "Epinephrine deactivates the second messenger, reducing glycogen breakdown", "Epinephrine has no receptor and diffuses passively through the membrane"],
      correct: 0,
      explanation: "Epinephrine binds a membrane receptor and activates an associated G protein, which in turn activates the enzyme that produces cyclic AMP (cAMP); this second messenger amplifies the signal inside the cell, ultimately switching on enzymes that break down stored glycogen into glucose, quickly raising blood glucose during a stress response."
    },
    {
      q: "People who fly across several time zones often struggle to fall asleep at the local bedtime, even though they feel exhausted. Which hormonal explanation best accounts for this?",
      options: ["Their pineal gland hasn't yet adjusted its melatonin release to match local darkness, so melatonin isn't rising when it should", "Their hypothalamus is releasing too much melanin, a skin pigment unrelated to sleep", "Their pituitary gland is releasing too much oxytocin", "Lack of sunlight is preventing vitamin D synthesis, which directly disrupts sleep"],
      correct: 0,
      explanation: "Melatonin, secreted by the pineal gland in response to darkness, helps regulate the sleep-wake cycle; after crossing time zones, the body's internal clock and its melatonin release are still synced to the old time zone, so melatonin isn't rising at the new local bedtime, making it hard to fall asleep on schedule."
    },
    {
      q: "Auxin accumulates on the shaded side of a growing shoot tip, causing that side to elongate faster and bend the shoot towards a light source. What transports auxin specifically to one side of the shoot in this way?",
      options: ["Auxin efflux carrier proteins positioned asymmetrically in the plasma membrane, directing auxin transport to one side of the shoot", "Random diffusion of auxin with no directional control", "Direct light-triggered synthesis of auxin only on the shaded side", "Xylem vessels actively pumping auxin toward the shaded side"],
      correct: 0,
      explanation: "Auxin efflux carrier proteins become unevenly distributed in the plasma membrane in response to a light gradient, actively transporting auxin towards the shaded side of the shoot; the resulting higher auxin concentration there stimulates greater cell elongation, bending the shoot towards the light (phototropism)."
    },
    {
      q: "A person's blood glucose level rises steadily through the evening, from around 20:00 until bedtime, without any food intake during this window. Which hormonal change would best explain this trend?",
      options: ["A rise in glucagon and fall in insulin, converting stored glycogen back into glucose", "A rise in insulin, converting glucose into glycogen", "A fall in glucagon with no change in insulin", "No hormonal involvement, since glucose levels don't change overnight"],
      correct: 0,
      explanation: "In the absence of food, insulin levels fall and glucagon levels rise, stimulating the liver to break down stored glycogen into glucose and release it into the blood to maintain blood glucose within its normal range between meals — the opposite hormonal pattern to what happens right after eating."
    },
    {
      q: "An insecticide called a neonicotinoid binds tightly and permanently to receptors normally used by the neurotransmitter acetylcholine at an insect's synapses. What is the direct consequence of this binding for the postsynaptic neuron?",
      options: ["The receptor is continuously activated, causing prolonged, uncontrolled stimulation of the postsynaptic neuron", "Acetylcholine release from the presynaptic neuron is completely blocked", "The postsynaptic membrane becomes permanently hyperpolarized and unresponsive", "Acetylcholinesterase activity increases dramatically, rapidly clearing the synapse"],
      correct: 0,
      explanation: "Neonicotinoids act as agonists that bind acetylcholine receptors on the postsynaptic membrane, but unlike natural acetylcholine they aren't broken down by acetylcholinesterase, so they keep the receptor continuously activated, leading to prolonged overstimulation of the nervous system, which is fatal to insects in sufficient doses."
    }
  ],

  "C3.2": [
    {
      q: "Which function is primarily associated with helper T-cells during an immune response?",
      options: ["Directly engulfing pathogens by phagocytosis", "Activating other cells of the immune system", "Producing antibodies", "Persisting long-term as memory cells"],
      correct: 1,
      explanation: "Helper T-cells act as coordinators, activating B-cells and other immune cells, rather than directly attacking pathogens or producing antibodies themselves."
    },
    {
      q: "During an infection, which process specifically leads to antibody production?",
      options: ["Fibrinogen being converted to fibrin by thrombin", "B-cells being activated by helper T-cells and antigen", "Plasma cells being activated by platelets", "Phagocytes being activated by infected body cells"],
      correct: 1,
      explanation: "B-cells need both antigen recognition and a signal from an activated helper T-cell before they proliferate into antibody-producing plasma cells."
    },
    {
      q: "Diseases such as Japanese encephalitis are classified as zoonoses. What does that classification actually mean?",
      options: ["They can be transferred directly from an animal to humans", "They only spread from human to human", "They're only found in animals kept in captivity", "They transfer antigens directly into animal cells"],
      correct: 0,
      explanation: "A zoonosis is specifically a disease that can jump from an animal host directly to humans, which is the defining feature of this disease category."
    },
    {
      q: "Phagocytes are able to respond to a wide range of pathogens immediately, without needing to have encountered that specific pathogen before. Which part of the immune system does this place them in?",
      options: ["The innate immune system", "The adaptive immune system, alongside B-lymphocytes", "The adaptive immune system, alongside helper T-cells", "Neither the innate nor adaptive immune system"],
      correct: 0,
      explanation: "Phagocytes recognise and engulf a broad range of pathogens using generic, non-specific mechanisms and respond immediately without prior exposure, which is the defining feature of the innate immune system, unlike B- and T-lymphocytes, which mount a slower but highly specific adaptive response."
    },
    {
      q: "A diagram of an immune response shows a pathogen being engulfed, antigens being displayed, and specific lymphocytes being activated in sequence. Which labels would correctly describe this general sequence of events?",
      options: ["A phagocyte engulfing the pathogen, presenting antigen fragments, then activating a helper T-cell", "A helper T-cell engulfing the pathogen directly with no antigen presentation", "An antibody engulfing the pathogen before any cell is involved", "A B-lymphocyte engulfing the pathogen and then presenting it to a phagocyte"],
      correct: 0,
      explanation: "A typical immune response sequence involves a phagocyte engulfing and breaking down a pathogen, displaying fragments of its antigens on its own surface (antigen presentation), and then activating a helper T-cell that recognises that specific antigen, coordinating the wider adaptive immune response."
    },
    {
      q: "Rabies, tuberculosis, and Japanese encephalitis are three very different diseases caused by different pathogens, yet they share one important epidemiological feature. What do all three have in common?",
      options: ["They are all zoonoses, meaning they can be transmitted from animals to humans", "They are all caused by the same type of pathogen", "They all only infect the respiratory system", "None of them can be prevented by vaccination"],
      correct: 0,
      explanation: "Despite differing in the type of pathogen involved (a virus, a bacterium, and another virus respectively) and in symptoms, all three diseases are zoonoses, originating in animal populations and capable of being transmitted to humans, which is why controlling animal reservoirs is often part of managing them."
    },
    {
      q: "A patient treated successfully with an antibiotic for a bacterial infection develops the same infection again months later, but this time the same antibiotic has no effect. What is the most likely biological explanation?",
      options: ["The bacterial population has evolved resistance through mutation and natural selection", "The patient's body has become permanently immune to the antibiotic itself", "The bacteria have started producing antibodies against the drug", "Leftover antibiotic from the earlier treatment is interfering with the new dose"],
      correct: 0,
      explanation: "Random mutations occasionally give individual bacteria resistance to an antibiotic; if that antibiotic is used again, resistant bacteria survive and reproduce while susceptible ones are killed, so natural selection can shift the population toward resistance, explaining why the same drug may later fail against a similar-looking infection."
    },
    {
      q: "Which of the following best explains why antibiotics, which are highly effective against many bacterial infections, are completely ineffective against viral infections such as the common cold?",
      options: ["Antibiotics target bacterial structures and metabolic pathways that viruses simply don't have, since viruses rely on host-cell machinery instead", "Viruses are naturally resistant because they carry antibiotic-resistance genes", "Antibiotics can only be used against organisms with a cell membrane", "Viruses have thicker cell walls than bacteria, blocking antibiotic entry"],
      correct: 0,
      explanation: "Antibiotics work by disrupting processes specific to bacterial cells, such as cell wall synthesis or bacterial-type ribosomes; because viruses have no independent metabolism and hijack the host cell's own machinery to replicate, there is no bacterial-style target for antibiotics to act on."
    },
    {
      q: "Vaccination against a disease sometimes needs a booster dose years later to maintain strong protection. What immunological process is the booster dose designed to reinforce?",
      options: ["The activity of memory B- and T-cells, which allow a faster and stronger secondary immune response upon renewed exposure to the antigen", "The innate immune response, which does not usually need boosting", "The production of the pathogen's own antigens inside the body", "The action of phagocytes only, without any lymphocyte involvement"],
      correct: 0,
      explanation: "The adaptive immune system retains memory B- and T-cells after first exposure to an antigen, which allow a much faster and larger secondary response if the same pathogen is encountered again; a booster dose re-exposes the immune system to the antigen, refreshing and strengthening this memory-cell population."
    }
  ],

  "A2.3": [
    {
      q: "Which feature is shared by every virus, regardless of type?",
      options: ["A protein capsid", "RNA as its genetic material", "Cytoplasm", "An envelope made from host cell membrane"],
      correct: 0,
      explanation: "All viruses have a protein coat (capsid) around their genetic material; not all have an envelope, and genetic material can be DNA or RNA depending on the virus."
    },
    {
      q: "How would you best describe the mode of existence of a virus?",
      options: ["An obligate parasite", "A facultative parasite", "An obligate heterotroph", "A predator"],
      correct: 0,
      explanation: "Viruses cannot replicate independently, they must use a host cell's machinery every time, making them obligate (not optional) parasites."
    },
    {
      q: "A patient with a viral infection is prescribed an antibiotic, but their symptoms do not improve. What is the most likely biological reason antibiotics fail against viruses?",
      options: ["Viruses carry genes that specifically inactivate antibiotics", "Antibiotics target bacterial metabolic processes and structures that viruses do not have", "Antibiotics only work on organisms without a capsid", "Viruses are naturally immune to all chemicals"],
      correct: 1,
      explanation: "Antibiotics work by disrupting bacterial structures and metabolic pathways (such as cell wall synthesis or bacterial ribosomes) that viruses simply don't possess, since viruses rely entirely on the host cell's own machinery to replicate rather than having independent metabolism of their own."
    }
  ],

};
