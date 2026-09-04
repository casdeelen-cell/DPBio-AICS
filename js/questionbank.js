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
    }
  ],

  "A1.2": [
    {
      q: "Which combination of features correctly describes the molecular structure of DNA?",
      options: ["Complementary base pairing only", "Complementary base pairing and deoxyribose only", "Deoxyribose and thymine only", "Complementary base pairing, deoxyribose, and thymine"],
      correct: 3,
      explanation: "DNA is defined by all three features together: internal complementary base pairing, the sugar deoxyribose, and the base thymine (rather than uracil)."
    }
  ],

  "A2.1": [
    {
      q: "Which description correctly matches an organism that carries out holozoic nutrition?",
      options: ["Chemoautotrophic with no digestion", "Photoautotrophic with no digestion", "Saprotrophic with external digestion", "Heterotrophic with internal digestion"],
      correct: 3,
      explanation: "Holozoic nutrition means taking in whole or bulk food and digesting it internally, which makes it a heterotrophic strategy with internal digestion."
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
    }
  ],

  "A3.1": [
    {
      q: "Four organisms have the following genus and species names: W is Felis catus, X is Conus catus, Y is Ameiurus catus, and Z is Felis silvestris. Based only on binomial naming, which pair is most closely related?",
      options: ["W, X and Y together", "X and Y", "W and Z", "W is equally related to all the others"],
      correct: 2,
      explanation: "Sharing a genus name (Felis) is a much stronger indicator of relatedness than sharing a species epithet (catus), which can appear independently across unrelated genera."
    }
  ],

  "A3.2": [
    {
      q: "Scientists reclassified life into three domains rather than relying only on kingdoms. What kind of evidence mainly supported this domain-level classification?",
      options: ["Ribosomal RNA base sequences", "Mitochondrial DNA base sequences", "Cell wall structure", "Amino acid sequence of ATP synthase"],
      correct: 0,
      explanation: "Comparing rRNA sequences, present in every living cell, gave a molecular basis for splitting life into Archaea, Bacteria, and Eukarya."
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
    }
  ],

  "B1.1": [
    {
      q: "A molecular diagram shows a glycerol backbone attached to a phosphate group on one side and two fatty acid tails on the other. What kind of molecule is this?",
      options: ["A polysaccharide", "A phospholipid", "A triglyceride", "A polypeptide"],
      correct: 1,
      explanation: "A glycerol backbone with a phosphate group and two (rather than three) fatty acid tails is the defining structure of a phospholipid, not a triglyceride, which has three fatty acid tails and no phosphate."
    }
  ],

  "B1.2": [
    {
      q: "A table lists valine and lysine as essential amino acids, and alanine and glycine as non-essential. Which conclusion is actually valid from this?",
      options: ["Lysine is synthesised by the human body", "Alanine can only be obtained from food", "Glycine is not used anywhere in the human body", "Valine must be supplied through the diet"],
      correct: 3,
      explanation: "'Essential' amino acid specifically means the body cannot synthesise it, so it must come from food; valine being essential means exactly that."
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
    }
  ],

  "B2.2": [
    {
      q: "Which statement correctly describes a functional property of a membrane-bound organelle?",
      options: ["Rough ER synthesises lipids for use outside the cell", "The nucleus has a double membrane to allow vesicle formation for transport", "The mitochondrion keeps Krebs cycle enzymes and substrates compartmentalised in its matrix", "The Golgi apparatus uses ribosomes to make proteins for export"],
      correct: 2,
      explanation: "The mitochondrial matrix physically concentrates the enzymes and substrates of the Krebs cycle in one compartment, which is exactly what compartmentalisation is for, efficient, localised reactions."
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
    }
  ],

  "B3.3": [
    {
      q: "A titinopathy is a muscle disorder caused by an abnormal version of the protein titin. Titin normally limits how far a muscle sarcomere can stretch. What would you predict happens if titin is abnormal?",
      options: ["Muscles detach from their tendons", "Muscles stretch too far during relaxation", "Muscles have less ATP available for contraction", "Antagonistic muscle pairs contract at the same time"],
      correct: 1,
      explanation: "Since titin's normal job is to act like a spring limiting overstretching, a faulty titin would most directly cause the sarcomere (and so the muscle) to stretch further than it should during relaxation."
    }
  ],

  "B4.1": [
    {
      q: "A mangrove tree species has salt-secreting glands visible in its leaf tissue. How does this adaptation benefit the plant?",
      options: ["The glands provide nitrates since mangrove soil is nitrogen-poor", "The salt attracts predators to eat the leaves", "A high salt concentration in the glands draws water into leaf cells", "The glands remove excess salt to keep cytoplasmic solute concentration workable"],
      correct: 3,
      explanation: "Mangroves take up salty water, so they need a way to excrete the excess salt, keeping their cytoplasm at a solute concentration their metabolism can actually function at."
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
    }
  ],

  "D1.1": [
    {
      q: "DNA fragments of different sizes are separated using gel electrophoresis, with the wells at the negative electrode end. Which fragments would be expected to travel the furthest across the gel?",
      options: ["4 kb, negatively charged", "10 kb, negatively charged", "10 kb, positively charged", "2 kb, positively charged"],
      correct: 0,
      explanation: "DNA is negatively charged and moves toward the positive electrode, and smaller fragments move through the gel matrix faster, so the smallest negatively-charged fragment travels furthest."
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
    }
  ],

  "D2.3": [
    {
      q: "A plant cell has a water potential of -0.24 kPa and a pressure potential of 0.46 kPa. Using the equation water potential = solute potential + pressure potential, what is the solute potential of the cell?",
      options: ["0.22 kPa", "-0.22 kPa", "0.70 kPa", "-0.70 kPa"],
      correct: 3,
      explanation: "Rearranging the equation: solute potential = water potential minus pressure potential = -0.24 - 0.46 = -0.70 kPa."
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
    }
  ],

  "D4.2": [
    {
      q: "Surtsey is a volcanic island off Iceland formed by eruptions between 1963 and 1967, and has been legally protected from human interference ever since. What kind of ecological changes would you expect scientists to have observed there since its formation?",
      options: ["Cyclical succession as the climax community repeatedly changes", "Secondary succession, beginning once the first animals arrived", "Arrested succession caused by drainage of wetland areas", "Primary succession, including increasingly larger plants colonising over time"],
      correct: 3,
      explanation: "Surtsey started as bare volcanic rock with no existing soil or organisms, which is the defining condition for primary succession, and larger, more complex plants would be expected to establish as that succession proceeds."
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
    }
  ]

};
