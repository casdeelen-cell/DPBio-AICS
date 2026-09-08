/*
  questionbank.js
  ---------------
  All questions in this file are ORIGINAL, written from scratch for
  this site. They are NOT adapted, paraphrased, or derived from any
  IB Questionbank export or other secure exam source material -- an
  earlier version of this file was adapted from such material, but
  that approach was retired for exam-security reasons (the source
  material turned out to be used as a bank for writing official IB
  exams) and every question has since been replaced with original
  content. They're written to match the same syllabus points,
  difficulty, and command-term style as real IB exam questions, but
  every scenario, example, and set of answer options is newly
  written, not drawn from any existing exam or exam-prep source.

  This is a SEPARATE section from your quick quiz in quizzes.js. Keep
  quizzes.js as your own lightweight checks, use this file for the
  bigger, exam-style question bank.

  Same format as quizzes.js:
  QUESTIONBANK["A1.1"] = [
    { q: "...", options: ["...","...","...","..."], correct: 0, explanation: "..." }
  ]
*/

const QUESTIONBANK = {

  "A1.1": [
    {
      q: "Deep-sea hydrothermal vent ecosystems can only exist where water remains liquid despite extreme pressure and heat. Which property of water is most directly responsible for it staying liquid across such a wide range of temperatures and pressures compared with most other small molecules?",
      options: ["Extensive hydrogen bonding between molecules, which raises water's boiling point far above what its small molecular size would otherwise predict", "Water's transparency, which allows light to penetrate to the vent community", "Water's high density as a solid, which prevents ice from forming near vents", "Water's ability to act as a universal solvent for mineral ions"],
      correct: 0,
      explanation: "Water's small size would normally predict a very low boiling point, similar to other molecules of comparable mass, but extensive hydrogen bonding between water molecules requires much more energy to overcome; this is what allows water to remain liquid across such an unusually wide range of temperatures and pressures, including in extreme environments like deep-sea vents."
    },
    {
      q: "A camel can survive for over a week without drinking water in the desert. Part of this ability relies on minimising water loss through a specific physiological adaptation involving the properties of water itself. Which property of water is most relevant to how camels lose comparatively little water through breathing?",
      options: ["Water's high latent heat of vaporization, which means camels can achieve significant cooling from a relatively small amount of evaporative water loss", "Water's cohesive properties, which prevent water from evaporating from the nasal passage at all", "Water's density, which is unrelated to evaporative water loss", "Water's role as a solvent, which prevents water vapour from being exhaled"],
      correct: 0,
      explanation: "Because water requires an unusually large amount of energy to evaporate (high latent heat of vaporization), even a small amount of evaporative water loss (for example, from moisture in exhaled air condensing and being partially reabsorbed in the camel's specialised nasal passages) can achieve significant cooling, allowing the camel to conserve water while still managing its heat balance."
    },
    {
      q: "A biologist studying an aquatic ecosystem in a temperate lake notes that fish continue to survive beneath a frozen surface throughout winter. Which physical property of water directly explains why the lake doesn't freeze solid from the bottom up?",
      options: ["Ice is less dense than liquid water, so it floats and insulates the liquid water beneath it", "Water has a higher density than ice at every temperature", "Water conducts heat extremely well, keeping the whole lake at a uniform temperature", "Water expands equally when freezing and when warming"],
      correct: 0,
      explanation: "Water is unusual in that its solid form (ice) is less dense than its liquid form, because the hydrogen-bonded lattice structure of ice holds molecules further apart than in liquid water; this means ice floats on the surface of a lake, insulating the liquid water below and allowing aquatic organisms to survive even when the surface freezes over."
    },
    {
      q: "A student compares the amount of energy needed to raise the temperature of a beaker of water by 5°C with the amount needed to raise an equal mass of vegetable oil by the same amount, finding the water requires considerably more energy. What does this experiment demonstrate about water?",
      options: ["Water has a relatively high specific heat capacity", "Water has a relatively high boiling point", "Water is a good solvent for polar substances", "Water is denser than oil"],
      correct: 0,
      explanation: "Specific heat capacity describes the amount of energy required to raise the temperature of a given mass of a substance by a set amount; the fact that water requires considerably more energy than oil to achieve the same temperature rise directly demonstrates water's unusually high specific heat capacity, a consequence of the extensive hydrogen bonding between its molecules."
    },
    {
      q: "Termite mounds in some regions are built with narrow chimneys that draw water up from moist soil deep underground through capillary channels in the mound's structure, keeping the interior humid. Which combination of water's properties best explains this capillary movement?",
      options: ["Cohesion between water molecules and adhesion between water and the channel walls", "High specific heat capacity and low density as a solid", "High boiling point and transparency", "Universal solvent properties and high density as a liquid"],
      correct: 0,
      explanation: "Capillary action depends on cohesion (water molecules attracting each other via hydrogen bonds, keeping the water column together) working alongside adhesion (water molecules being attracted to the polar surfaces of the narrow channel walls); together these allow water to be drawn upward through narrow spaces against gravity, the same underlying principle that draws water up through soil pores or plant xylem."
    },
    {
      q: "A pond skater insect is observed resting on the surface of a still pond without breaking through, even though its body is denser than water. What allows this to happen?",
      options: ["Surface tension created by hydrogen bonding between water molecules at the surface", "The insect's low overall density compared with water", "Water's high specific heat capacity keeping the surface warm", "Adhesion between the insect's legs and the water beneath the surface"],
      correct: 0,
      explanation: "At the surface of the water, molecules are pulled inward and sideways by hydrogen bonds more strongly than they are pulled upward by the air, creating a surface tension strong enough to support the light weight of a small insect distributed across its legs, even though the insect's body itself is denser than water."
    },
    {
      q: "A pharmaceutical company is designing a new drug and needs the molecule to dissolve readily in blood plasma, which is mostly water. Which structural feature would make a candidate molecule more likely to dissolve well in this environment?",
      options: ["Possessing polar groups capable of forming hydrogen bonds with water molecules", "Possessing an entirely non-polar, hydrocarbon-based structure", "Having a very large overall molecular size regardless of polarity", "Lacking any oxygen or nitrogen atoms in its structure"],
      correct: 0,
      explanation: "Because water is a polar solvent, molecules with polar groups (able to form hydrogen bonds with surrounding water molecules) tend to dissolve well in it; non-polar, purely hydrocarbon molecules are hydrophobic and tend to be poorly soluble in water, regardless of their size, which is why drug designers pay close attention to a candidate molecule's polarity when aiming for good solubility in blood plasma."
    },
    {
      q: "A greenhouse manager notices that on a hot day, the temperature inside a large water tank used to store irrigation water changes far more slowly than the surrounding air temperature. What property of water best explains this thermal stability?",
      options: ["High specific heat capacity", "Low density as a solid", "High surface tension", "Being a universal solvent"],
      correct: 0,
      explanation: "Water's high specific heat capacity means it takes a relatively large input (or loss) of thermal energy to change its temperature by a given amount; this is why a large body of water changes temperature much more slowly than the surrounding air over the course of a day, providing a buffering, thermally stable environment."
    }
  ],

  "D2.3": [
    {
      q: "A farmer waters two identical potted plants, then leaves one in normal air and places the other inside a sealed, humid plastic bag. After a day, the plant in normal air has wilted slightly, while the bagged plant remains turgid. What does this indicate about the water potential of the air surrounding each plant?",
      options: ["The air inside the sealed bag has a higher water potential (closer to that of the leaf cells) than the surrounding room air, reducing water loss from the plant", "The air inside the sealed bag has a lower water potential than the room air, drawing more water out of the plant", "Water potential of air has no effect on water loss from a plant's leaves", "The plant in the bag lost more water than the one in open air"],
      correct: 0,
      explanation: "A humid, enclosed environment has a higher water potential (closer to saturation) than typical room air, reducing the water potential gradient between the leaf's internal air spaces and the surrounding atmosphere; this slows transpiration and water loss, explaining why the bagged plant stayed turgid while the one in open, drier air wilted."
    },
    {
      q: "A biologist places two identical strips of potato tissue into two beakers: one containing distilled water, and one containing a concentrated salt solution. After an hour, the strip in the salt solution has become noticeably limp and reduced in mass, while the one in distilled water has become firmer and increased in mass. What can be concluded about the water potential of the salt solution relative to the potato tissue?",
      options: ["The salt solution has a lower (more negative) water potential than the potato tissue, so water moved out of the cells", "The salt solution has a higher water potential than the potato tissue, so water moved into the cells", "The salt solution and the potato tissue have identical water potential", "Water potential cannot be determined from a mass change alone"],
      correct: 0,
      explanation: "A loss of mass and firmness in the potato strip indicates that water left the tissue by osmosis, which only happens when the surrounding solution has a lower (more negative) water potential than the tissue itself; the strip placed in distilled water instead gained mass, consistent with distilled water having a higher water potential than the potato cells, drawing water in."
    },
    {
      q: "A plant cell with a water potential of -500 kPa is placed into a solution with a water potential of -200 kPa. What would be expected to happen to the cell?",
      options: ["Water will move into the cell by osmosis, since the surrounding solution has a higher (less negative) water potential", "Water will move out of the cell by osmosis, since the surrounding solution has a higher water potential", "No net water movement will occur, since the two water potentials are similar", "The cell will lose solutes to the surrounding solution"],
      correct: 0,
      explanation: "Water moves by osmosis from a region of higher (less negative) water potential to a region of lower (more negative) water potential; since the surrounding solution (-200 kPa) has a higher water potential than the cell (-500 kPa), water will move into the cell down this gradient, and if the cell has a wall, it will become more turgid rather than bursting."
    },
    {
      q: "A researcher compares the water potential of red blood cells with the water potential of a saline solution used for intravenous drips, finding they are approximately equal. What does this equal water potential mean for the red blood cells placed in this solution?",
      options: ["There will be no net movement of water into or out of the cells, since the solution is isotonic to the cells", "Water will move rapidly into the cells, causing them to swell and burst", "Water will move rapidly out of the cells, causing them to shrink", "The cells will actively pump water out to equalise pressure"],
      correct: 0,
      explanation: "When the water potential of a solution matches that of the cells placed within it (an isotonic solution), there is no net movement of water into or out of the cells by osmosis; this is precisely why intravenous saline solutions are carefully formulated to match the water potential of blood cells, avoiding the swelling or shrinking that would occur in a hypotonic or hypertonic solution."
    }
  ],

  "B1.1": [
    {
      q: "A food scientist analyses a sample of honey and finds it consists almost entirely of two monosaccharides, glucose and fructose, in roughly equal amounts, with very little sucrose present. What does this suggest has happened to the sucrose originally present in the nectar bees collected?",
      options: ["It has been hydrolysed into its two constituent monosaccharides, likely by an enzyme added during honey production", "It has been polymerised into a larger polysaccharide", "It has undergone a condensation reaction to form a different disaccharide", "It has been chemically converted into a lipid"],
      correct: 0,
      explanation: "Bees add an enzyme (invertase) to nectar that catalyses the hydrolysis of sucrose into its two monosaccharide components, glucose and fructose; this hydrolysis reaction, which uses a water molecule to break the glycosidic bond, explains why mature honey is dominated by free glucose and fructose rather than the sucrose originally present in flower nectar."
    },
    {
      q: "Chitin, the structural polysaccharide found in the exoskeletons of insects and the cell walls of fungi, is built from a modified glucose derivative rather than plain glucose. Based on its structural role, which property would chitin be expected to share with cellulose?",
      options: ["Long, unbranched chains cross-linked by hydrogen bonds, providing tensile strength", "High solubility in water, allowing rapid transport around the organism", "A highly branched structure suited to compact energy storage", "Complete absence of any covalent bonding between monomers"],
      correct: 0,
      explanation: "Like cellulose, chitin is built from long, straight, unbranched chains of its monomer, held together by hydrogen bonds into strong fibres; this structural similarity (despite chitin's monomer being chemically modified compared with cellulose's beta-glucose) is what gives both molecules their considerable strength, suited to a structural rather than storage role."
    },
    {
      q: "A student examines two different plant storage tissues under a microscope: potato tuber tissue and sunflower seed tissue. Chemical tests reveal the potato tissue is rich in starch, while the sunflower seed tissue is rich in lipid droplets instead. What is the most likely advantage of storing energy as lipid rather than starch specifically in a seed?",
      options: ["Lipids store more energy per unit mass, reducing the overall weight the seed needs to carry for dispersal", "Lipids are more soluble in water, making them easier to mobilise quickly", "Lipids can be built directly from amino acids without using any glucose", "Starch cannot be broken down by any known plant enzyme"],
      correct: 0,
      explanation: "Because lipids contain more energy per gram than carbohydrates like starch, storing energy reserves as lipid allows a seed to pack more available energy into a smaller, lighter mass; this is a significant advantage for a seed that needs to be dispersed (for example, by wind or animals) and later fuel germination before the seedling can photosynthesise for itself."
    },
    {
      q: "A biochemist heats a small sample of egg white, causing it to turn from a clear, runny liquid into an opaque, firm solid. Which type of molecule is primarily responsible for this visible change, and what has happened to it?",
      options: ["Protein, which has denatured as heat disrupted the bonds maintaining its tertiary structure", "Carbohydrate, which has undergone hydrolysis due to the heat", "Lipid, which has melted and then re-solidified upon cooling", "Nucleic acid, which has been replicated by the heat"],
      correct: 0,
      explanation: "Egg white is largely composed of proteins (such as albumin); heating disrupts the hydrogen bonds and other interactions holding these proteins' tertiary structure together, causing them to unfold (denature) and then aggregate into a solid, opaque mass, which is the visible change observed when an egg is cooked."
    },
    {
      q: "A comparison of the fatty acids in olive oil (mostly liquid at room temperature) and butter (mostly solid at room temperature) reveals a key structural difference. Which difference would best explain why olive oil remains liquid while butter solidifies at the same temperature?",
      options: ["Olive oil contains a higher proportion of unsaturated fatty acids, whose kinked chains pack together less tightly", "Olive oil contains a higher proportion of saturated fatty acids, whose straight chains pack together more tightly", "Butter contains no fatty acids at all, only carbohydrates", "Olive oil molecules are much smaller than butter molecules"],
      correct: 0,
      explanation: "Unsaturated fatty acids contain one or more carbon-carbon double bonds, which typically introduce a kink into the hydrocarbon chain; this kink prevents the molecules from packing together as tightly as the straight chains of saturated fatty acids do, lowering the melting point and explaining why oils rich in unsaturated fats (like olive oil) tend to remain liquid at room temperature, while more saturated fats (like butter) solidify."
    },
    {
      q: "A metabolic disorder prevents a patient's cells from properly breaking down glycogen stored in the liver. Which immediate consequence would be expected during a period of fasting?",
      options: ["Difficulty maintaining normal blood glucose levels, since glycogen cannot be converted back into glucose as needed", "An inability to store any excess glucose after a meal", "A build-up of excess lipid in the liver instead of glycogen", "No noticeable effect, since glycogen plays no role in blood glucose regulation"],
      correct: 0,
      explanation: "Liver glycogen serves as a reserve that can be broken down (via glycogenolysis) to release glucose into the blood between meals or during fasting; if this breakdown pathway is impaired, blood glucose levels would be expected to fall more readily during fasting, since the liver cannot mobilise its stored glycogen to compensate as it normally would."
    }
  ],

  "C1.1": [
    {
      q: "A biotechnology company immobilises an enzyme by embedding it in small alginate beads, then passes a substrate solution through a column packed with these beads to produce a continuous stream of product. What is the main practical advantage of immobilising the enzyme this way, compared with using free enzyme dissolved in solution?",
      options: ["The enzyme can be reused repeatedly and easily separated from the product stream, since it remains trapped within the beads", "Immobilisation increases the enzyme's maximum possible reaction rate beyond what free enzyme could achieve", "Immobilisation removes the enzyme's dependence on an optimal temperature and pH", "Immobilised enzymes no longer require a substrate to function"],
      correct: 0,
      explanation: "Immobilising an enzyme within beads allows it to remain physically separate from the flowing product stream, meaning it doesn't need to be purified out of the final product and can continue to be reused for further batches of substrate; this is a major practical and economic advantage in industrial processes, even though immobilisation doesn't inherently increase the enzyme's maximum reaction rate or remove its normal temperature/pH sensitivity."
    },
    {
      q: "Two samples of the same enzyme are tested at the same substrate concentration and temperature, but sample A has been left in a strongly acidic solution for an hour beforehand while sample B has not. Sample A shows almost no catalytic activity. What is the most likely explanation?",
      options: ["The acidic conditions denatured the enzyme, disrupting the ionic and hydrogen bonds maintaining its tertiary structure and active site shape", "The acidic conditions removed the enzyme's substrate before the reaction could begin", "The acidic conditions converted the enzyme into an inhibitor of itself", "Enzymes are not affected by pH under any circumstances"],
      correct: 0,
      explanation: "Extremes of pH can disrupt the ionic and hydrogen bonds that hold an enzyme's tertiary structure in its correct, functional shape; prolonged exposure to strongly acidic conditions can permanently denature the enzyme, distorting its active site so that it can no longer bind and catalyse the breakdown of its substrate, even once returned to more favourable conditions."
    },
    {
      q: "A graph compares the rate of an enzyme-catalysed reaction at two different, fixed enzyme concentrations, plotted against a range of substrate concentrations. At low substrate concentrations, the two curves show very similar reaction rates, but they diverge substantially at higher substrate concentrations, with the higher enzyme concentration reaching a higher maximum rate. What does this pattern indicate?",
      options: ["At high substrate concentrations, the number of available active sites (determined by enzyme concentration) becomes the limiting factor on reaction rate", "Enzyme concentration has no effect on reaction rate under any conditions", "Substrate concentration is irrelevant to reaction rate once a certain enzyme concentration is reached", "The two enzyme samples must have different optimum temperatures"],
      correct: 0,
      explanation: "At low substrate concentrations, there are enough active sites available regardless of exact enzyme concentration, so rates are similar; but as substrate concentration rises, a higher enzyme concentration (with proportionally more active sites available) can continue converting substrate to product faster, explaining why the curves diverge and why the sample with more enzyme reaches a higher maximum rate before substrate saturation limits it too."
    },
    {
      q: "Papain, an enzyme extracted from papaya fruit, is added to raw meat to make it more tender before cooking. Which molecule is papain most likely acting on, and what type of reaction is it catalysing?",
      options: ["Muscle proteins, via hydrolysis of peptide bonds", "Muscle proteins, via condensation of peptide bonds", "Fat within the meat, via hydrolysis of ester bonds", "Glycogen within the meat, via hydrolysis of glycosidic bonds"],
      correct: 0,
      explanation: "Papain is a protease, an enzyme that catalyses the hydrolysis of peptide bonds within proteins; by breaking down the tough muscle and connective tissue proteins in raw meat into shorter fragments, papain makes the meat noticeably more tender before it is cooked."
    },
    {
      q: "An experiment measures the rate of a catalase-catalysed reaction (breaking down hydrogen peroxide into water and oxygen) at a range of hydrogen peroxide concentrations, using a fixed, small amount of enzyme extracted from potato tissue. Beyond a certain hydrogen peroxide concentration, the measured reaction rate stops increasing. What is the best explanation for this plateau?",
      options: ["The fixed quantity of catalase's active sites are all continuously occupied with substrate, so adding more substrate cannot increase the rate further", "Hydrogen peroxide becomes chemically unstable above this concentration and stops reacting", "The potato tissue itself becomes saturated with water and can absorb no more hydrogen peroxide", "Oxygen produced by the reaction begins acting as a substrate itself, slowing the reaction"],
      correct: 0,
      explanation: "Once substrate (hydrogen peroxide) concentration is high enough that all of the fixed amount of catalase's active sites are continuously occupied, adding still more substrate cannot increase the reaction rate any further, since enzyme availability (not substrate) has become the limiting factor; this produces the characteristic plateau seen on a rate-versus-substrate-concentration graph."
    }
  ],

  "A1.2": [
    {
      q: "A forensic laboratory extracts DNA from a small tissue sample and needs enough material to run several tests. Which laboratory technique would allow them to make millions of copies of a specific DNA region from this small starting sample?",
      options: ["Polymerase chain reaction (PCR)", "Gel electrophoresis", "Chromatography", "Centrifugation"],
      correct: 0,
      explanation: "PCR is specifically designed to amplify a chosen region of DNA exponentially, using repeated cycles of heating and cooling alongside a heat-stable polymerase enzyme and primers; starting from even a tiny original sample, PCR can generate millions of copies of the target sequence, providing enough material for further analysis, unlike gel electrophoresis (which separates DNA rather than amplifying it) or chromatography and centrifugation (which are separation techniques unrelated to DNA copying)."
    },
    {
      q: "A molecular biologist is comparing the total number of possible three-base codons in the genetic code (64) with the number of amino acids actually used to build proteins (20). What term describes the fact that most amino acids are specified by more than one possible codon?",
      options: ["Degeneracy (redundancy) of the genetic code", "Universality of the genetic code", "Mutation of the genetic code", "Complementarity of the genetic code"],
      correct: 0,
      explanation: "Because there are more possible codons (64) than amino acids that need to be specified (20), most amino acids can be coded for by more than one different codon; this property is called degeneracy (or redundancy), and it means that certain single-base changes in DNA don't necessarily change the amino acid produced, since the new codon may still specify the same amino acid."
    },
    {
      q: "A sample of double-stranded DNA is analysed and found to be 30% adenine. Based on the rule of complementary base pairing, what percentage of the DNA would be expected to be cytosine?",
      options: ["20%", "30%", "35%", "70%"],
      correct: 0,
      explanation: "In double-stranded DNA, the amount of adenine equals the amount of thymine, and the amount of guanine equals the amount of cytosine (Chargaff's rule); if adenine makes up 30% of the bases, thymine must also be 30% (totalling 60% for these two bases), leaving 40% split evenly between guanine and cytosine, meaning cytosine makes up 20% of the total."
    },
    {
      q: "A student examines images of DNA extracted from three very different organisms: a bacterium, a virus, and a human cell, noting differences in overall genome size and structure. What feature would nonetheless be expected to be identical across all three DNA samples?",
      options: ["The set of four nitrogenous bases (or their base-pairing rules) used to encode information", "The total length of the DNA molecule", "Whether the DNA is circular or linear in shape", "The presence or absence of associated histone proteins"],
      correct: 0,
      explanation: "Despite dramatic differences in genome size, shape (circular versus linear), and association with proteins like histones between different organisms, the fundamental chemical alphabet of DNA, the four nitrogenous bases and their complementary base-pairing rules, is essentially universal across all known life and even most viruses, reflecting the shared, ancient chemical basis of genetic information storage."
    }
  ],

  "D1.1": [
    {
      q: "A researcher blocks the activity of DNA helicase in a population of dividing cells. What would be the most immediate consequence for DNA replication in these cells?",
      options: ["The two strands of the double helix could not be separated, preventing replication from proceeding", "New DNA nucleotides could not be joined together even on an already-separated template", "RNA primers could not be removed from the newly synthesised strands", "Okazaki fragments could not be joined together on the lagging strand"],
      correct: 0,
      explanation: "Helicase's specific role is to unwind and separate the two strands of the DNA double helix by breaking the hydrogen bonds between them, exposing single-stranded template for the rest of the replication machinery to use; without this initial unwinding, DNA polymerase would have no accessible single-stranded template to copy, halting replication at its earliest stage."
    },
    {
      q: "A student examines a diagram of a replication fork and needs to correctly label the leading and lagging strands. Which statement correctly distinguishes how these two strands are synthesised?",
      options: ["The leading strand is synthesised continuously in the same direction as the replication fork opens, while the lagging strand is synthesised discontinuously in short fragments", "The leading strand is synthesised discontinuously in short fragments, while the lagging strand is synthesised continuously", "Both strands are synthesised continuously in the same direction", "Both strands are synthesised discontinuously, but in opposite directions"],
      correct: 0,
      explanation: "Because DNA polymerase can only add nucleotides in a 5' to 3' direction, and the two template strands run antiparallel to each other, one new strand (the leading strand) can be synthesised continuously as the fork opens, while the other (the lagging strand) must be synthesised discontinuously as a series of short Okazaki fragments, each requiring its own primer, later joined together by DNA ligase."
    },
    {
      q: "In an experiment using radioactively labelled nucleotides, a growing bacterial culture is allowed to replicate its DNA once in the presence of the label, then the DNA is analysed for the distribution of labelled and unlabelled strands. If every resulting DNA molecule contains exactly one labelled (new) strand and one unlabelled (original) strand, what does this demonstrate about the mechanism of DNA replication?",
      options: ["DNA replication is semi-conservative", "DNA replication is fully conservative", "DNA replication is fully dispersive", "DNA replication does not involve any template strand"],
      correct: 0,
      explanation: "Finding that every new DNA molecule contains exactly one original strand and one newly synthesised strand is the defining signature of semi-conservative replication; a fully conservative model would instead produce one entirely original molecule and one entirely new molecule, while a dispersive model would produce strands that are a patchwork mixture of old and new segments, neither of which matches this result."
    },
    {
      q: "A student proposes that DNA replication in prokaryotes and eukaryotes must be entirely different processes, since eukaryotic chromosomes are linear while prokaryotic chromosomes are typically circular. Which statement correctly evaluates this claim?",
      options: ["The claim is largely incorrect; both use fundamentally similar semi-conservative replication mechanisms, though eukaryotic replication involves multiple origins and additional complexity due to chromosome linearity", "The claim is entirely correct; the two processes share no common features at all", "The claim is correct only because prokaryotes lack DNA polymerase entirely", "The claim is incorrect because eukaryotic DNA is not actually replicated at all before cell division"],
      correct: 0,
      explanation: "Despite differences in chromosome shape and the number of replication origins used (eukaryotic chromosomes use multiple origins to replicate their much longer linear DNA in a reasonable time, while a typical bacterial circular chromosome may use just one), both prokaryotes and eukaryotes rely on the same fundamental semi-conservative mechanism, involving helicase, DNA polymerase, primers, and complementary base pairing, so the underlying process is fundamentally shared rather than entirely different."
    },
    {
      q: "A mutation in the gene coding for DNA polymerase III in a bacterium reduces the enzyme's proofreading ability, without affecting its ability to add new nucleotides. What would be the most likely consequence for this bacterium's offspring over several generations?",
      options: ["An increased mutation rate, as replication errors are less likely to be detected and corrected", "Complete inability to replicate DNA at all", "An increased rate of DNA repair unrelated to replication", "No consequence, since proofreading has no effect on mutation rate"],
      correct: 0,
      explanation: "DNA polymerase III's proofreading function detects and corrects mismatched bases as they are added during replication; if this function is impaired while the enzyme can still add new nucleotides, more replication errors would be expected to persist uncorrected, increasing the overall mutation rate in this bacterium's DNA and, over generations, in its descendants."
    }
  ],

  "D2.1": [
    {
      q: "A pathologist examines a biopsy sample and counts the proportion of cells actively undergoing division at any given moment, comparing a sample of healthy skin tissue with a sample from a fast-growing tumour. The tumour sample shows a much higher proportion of dividing cells. What term describes this measured proportion, and what does a higher value generally indicate?",
      options: ["Mitotic index; a higher value indicates a greater rate of cell division within the tissue", "Meiotic index; a higher value indicates a greater rate of gamete formation", "Haploid index; a higher value indicates more haploid cells are present", "Chromosomal index; a higher value indicates more chromosomes per cell"],
      correct: 0,
      explanation: "The mitotic index is the proportion of cells within a tissue sample that are actively undergoing mitosis at the moment of sampling; a notably higher mitotic index in tumour tissue compared with healthy tissue reflects the characteristic uncontrolled, rapid cell division seen in cancer."
    },
    {
      q: "A diagram shows a dividing animal cell with chromosomes lined up individually along the equator, each still consisting of two visibly joined sister chromatids. Which stage of mitosis is being shown?",
      options: ["Metaphase", "Anaphase", "Telophase", "Prophase"],
      correct: 0,
      explanation: "Metaphase is defined by chromosomes (each still made of two sister chromatids joined at a centromere) aligning individually along the equator of the cell, held in place by spindle fibres from both poles; this alignment precedes anaphase, when the chromatids are pulled apart, so an image showing chromosomes still joined and aligned centrally is metaphase, not the later stages."
    },
    {
      q: "In a species of salamander, the diploid chromosome number is 24. How many chromosomes would be present in a single gamete produced by this species?",
      options: ["12", "24", "48", "6"],
      correct: 0,
      explanation: "Gametes are haploid, containing exactly half the diploid chromosome number of the species that produced them; for a species with a diploid number of 24, each gamete produced by meiosis would contain 12 chromosomes, one from each original homologous pair."
    },
    {
      q: "A biology class examines slides of onion root tip cells and is asked to identify which stage of the cell cycle each cell is in. One student identifies a cell where the nuclear envelope has reformed around two separate sets of chromosomes at opposite ends of the cell, and the cytoplasm has begun to pinch inward. Which stage does this describe?",
      options: ["Telophase, with cytokinesis beginning", "Prophase, before nuclear envelope breakdown", "Metaphase, with chromosomes aligned centrally", "Anaphase, with chromatids still separating"],
      correct: 0,
      explanation: "The reformation of the nuclear envelope around two separate sets of chromosomes at opposite poles, along with the onset of cytoplasmic division, is characteristic of telophase transitioning into cytokinesis; by this stage, chromatid separation (anaphase) has already been completed, and the cell is in the final stages of producing two separate daughter cells."
    },
    {
      q: "Which of the following correctly distinguishes a process that occurs during meiosis but not during mitosis?",
      options: ["Pairing of homologous chromosomes and subsequent crossing over", "Condensation of chromosomes into a visible form", "Attachment of spindle fibres to chromosome centromeres", "Separation of sister chromatids during a division"],
      correct: 0,
      explanation: "Homologous chromosome pairing, and the resulting opportunity for crossing over between non-sister chromatids, is a defining feature specific to meiosis I; mitosis involves no such pairing step, since it deals with individual chromosomes independently, while chromosome condensation, spindle attachment, and (at the appropriate stage) sister chromatid separation are all shared features of both types of division."
    },
    {
      q: "A researcher treats a culture of dividing cells with a chemical known to prevent spindle fibres from forming. What would be the most likely immediate effect on cells attempting to undergo mitosis?",
      options: ["Chromosomes would be unable to align at the equator or be separated to opposite poles", "DNA replication would be completely blocked", "Cells would divide normally, since spindle fibres are not required for mitosis", "The nuclear envelope would fail to break down at the start of mitosis"],
      correct: 0,
      explanation: "Spindle fibres are essential for correctly aligning chromosomes at the cell's equator during metaphase and then pulling sister chromatids apart to opposite poles during anaphase; without functional spindle fibres, chromosomes cannot be properly organised or separated, halting mitosis at this stage even though earlier steps like DNA replication and nuclear envelope breakdown are unaffected."
    }
  ],

  "B1.2": [
    {
      q: "A researcher denatures a purified enzyme by heating it, then allows it to cool slowly back to room temperature. In some cases, the enzyme regains some of its original catalytic activity upon cooling. What does this observation suggest about the information needed to determine a protein's tertiary structure?",
      options: ["The tertiary structure can, in some cases, be determined entirely by the primary sequence (amino acid order) of the protein, without needing additional external information", "Tertiary structure is entirely random and cannot be predicted or recovered", "Only the enzyme's quaternary structure determines its function, not its tertiary structure", "Denaturation always causes permanent, irreversible loss of protein structure"],
      correct: 0,
      explanation: "The fact that some proteins can refold into their correct, functional shape after being unfolded (as long as the primary sequence itself remains intact) suggests that the information needed to specify a protein's tertiary structure is largely encoded within its amino acid sequence itself, since no other information source is available to guide refolding under these experimental conditions."
    },
    {
      q: "Insulin is a small protein made of two separate polypeptide chains connected by disulfide bridges. Which term correctly describes this level of structural organisation?",
      options: ["Quaternary structure", "Primary structure", "Secondary structure", "Tertiary structure"],
      correct: 0,
      explanation: "Quaternary structure specifically describes the arrangement of two or more separate polypeptide chains coming together (often via bonds such as disulfide bridges) to form one functional protein; insulin's two connected chains are a classic, commonly cited example of quaternary structure, distinguishing it from tertiary structure, which describes the folding of a single chain."
    },
    {
      q: "A biochemist compares the amino acid sequences of a particular enzyme across three closely related species, finding they are nearly identical, with only minor differences in a few positions. What is the most likely functional consequence of this high degree of sequence conservation?",
      options: ["The enzyme's overall structure and function are likely well conserved across the three species, since sequence changes can disrupt structure and function", "The three species must have completely different versions of this enzyme", "Sequence conservation indicates the enzyme no longer has any function in any of the species", "Only the primary structure matters, and tertiary structure is unaffected by sequence in any organism"],
      correct: 0,
      explanation: "Because a protein's amino acid sequence (primary structure) determines how it folds and functions, strong conservation of that sequence across related species usually indicates the protein's structure and function are also well conserved, likely because the protein plays an essential role that natural selection has acted to preserve, tolerating only minor changes that don't disrupt its function."
    },
    {
      q: "Which of the following best explains why changing a single amino acid in a critical region of an enzyme's active site can cause a complete loss of catalytic function, even though 99% of the protein's sequence remains unchanged?",
      options: ["The precise three-dimensional shape of the active site depends on specific interactions from key amino acids, and disrupting even one of these can distort the site's shape or chemistry enough to prevent substrate binding", "All amino acids in a protein contribute equally to its function, so any single change is expected to be catastrophic", "Enzymes have no fixed active site shape, so amino acid changes are irrelevant to function", "A single amino acid change always increases, rather than decreases, an enzyme's activity"],
      correct: 0,
      explanation: "An enzyme's active site depends on a precise three-dimensional arrangement of particular amino acid side chains, often from residues that are far apart in the primary sequence but brought close together by tertiary folding; changing even one of these critical residues can distort the site's shape or chemical properties enough to prevent the substrate from binding correctly, disproportionately affecting function despite the rest of the sequence being unchanged."
    },
    {
      q: "Silk fibroin, a structural protein produced by spiders, consists of long stretches of repetitive amino acid sequence forming extensive beta-pleated sheets, giving silk fibres remarkable tensile strength. What level of protein structure is most directly responsible for this strength?",
      options: ["Secondary structure (the beta-pleated sheet arrangement)", "Primary structure alone, regardless of any folding", "Quaternary structure, requiring multiple polypeptide chains", "The presence of a prosthetic group unrelated to amino acid folding"],
      correct: 0,
      explanation: "The beta-pleated sheet is a type of secondary structure, formed by hydrogen bonding between sections of the polypeptide backbone; the extensive, repetitive beta-sheet structure in silk fibroin is what gives silk fibres their considerable tensile strength, illustrating how a particular secondary structure can be directly responsible for a protein's mechanical properties."
    }
  ],

  "A2.1": [
    {
      q: "Deep-sea hydrothermal vents host communities of extremophile bacteria that some scientists propose resemble conditions where life could have first originated on early Earth. Which feature of these vent environments makes them a plausible site for the origin of life, independent of sunlight?",
      options: ["They provide a steady source of chemical energy (from mineral-rich, heated water) that could have powered early metabolic reactions without needing sunlight", "They are the only known environment on Earth capable of supporting any bacterial life", "They contain no water at all, avoiding the need for a water-based origin of life", "They provide constant exposure to ultraviolet radiation, which is essential for abiogenesis"],
      correct: 0,
      explanation: "Hydrothermal vents release chemically energy-rich, mineral-laden water from within the Earth, providing a potential energy source for early chemical reactions independent of sunlight; this has led some scientists to propose that vent-like environments could have supported the origin of the earliest metabolic pathways, in contrast to hypotheses that emphasise a surface, sunlight-driven origin instead."
    },
    {
      q: "A student examines a diagram illustrating the proposed sequence of events leading to the first cells, including the formation of simple organic molecules, self-replicating molecules, and finally membrane-bound structures. Which sequence correctly reflects the generally proposed order of these events?",
      options: ["Formation of simple organic monomers, followed by self-replicating molecules, followed by enclosure within a membrane to form protocells", "Formation of a membrane first, followed by simple organic monomers, followed by self-replicating molecules", "Self-replicating molecules forming first, with no requirement for any organic monomers", "Protocells forming first, followed later by the appearance of any organic molecules at all"],
      correct: 0,
      explanation: "Most current hypotheses for the origin of life propose that simple organic monomers formed first (from inorganic starting materials, as demonstrated by experiments like Miller-Urey), providing the building blocks from which self-replicating molecules such as early RNA could later form; enclosure of these self-replicating systems within a simple membrane, forming the first protocells, is generally considered a later step, since a boundary was needed to concentrate and protect the necessary molecules."
    },
    {
      q: "Mitochondria are unusual among cellular organelles in having their own separate genome, distinct from the main nuclear genome of the cell. What is the most widely accepted explanation for the origin of this separate mitochondrial genome?",
      options: ["Mitochondria were once independent, free-living prokaryotes that were engulfed by an ancestral host cell and retained their own genetic material", "Mitochondrial DNA was inserted into cells relatively recently through a viral infection", "All organelles, including mitochondria, originally budded off directly from the nucleus, carrying a copy of nuclear DNA with them", "Mitochondrial DNA is a laboratory artefact and is not actually present in real cells"],
      correct: 0,
      explanation: "The endosymbiotic theory proposes that mitochondria descend from free-living aerobic bacteria that were engulfed by an ancestral eukaryotic host cell; rather than being fully digested, these bacteria survived and became permanent, energy-producing organelles, retaining a much-reduced version of their own original genome as one of the strongest pieces of evidence for this evolutionary origin."
    }
  ],

  "D1.2": [
    {
      q: "A geneticist is studying a rare inherited disorder and discovers that affected patients produce a protein that is one amino acid shorter than the normal version, with all remaining amino acids in the correct order. Which type of mutation would most directly explain this specific outcome?",
      options: ["A deletion of exactly three consecutive DNA bases (one full codon), without disturbing the surrounding reading frame", "A substitution of a single DNA base", "An insertion of three DNA bases at a random point in the gene", "A deletion of a single DNA base"],
      correct: 0,
      explanation: "Deleting exactly three consecutive bases removes precisely one codon (and therefore one amino acid) without shifting the reading frame for any of the remaining codons, which stay correctly grouped in sets of three; this produces a protein that is shorter by exactly one amino acid but otherwise has an unchanged sequence, unlike a single-base deletion or insertion, which would shift the frame and scramble every subsequent codon."
    },
    {
      q: "During translation, a ribosome reaches a codon on the mRNA that does not correspond to any tRNA anticodon, since it functions purely as a signal to terminate protein synthesis. What is this type of codon called?",
      options: ["A stop codon", "A start codon", "An anticodon", "A silent codon"],
      correct: 0,
      explanation: "Stop codons (there are three: UAA, UAG, and UGA) do not code for any amino acid and have no corresponding tRNA; instead, they are recognised by release factors that terminate translation and release the completed polypeptide chain from the ribosome, distinguishing them from the start codon (AUG), which initiates translation and does code for an amino acid (methionine)."
    },
    {
      q: "A section of coding DNA has the sequence 3'-TACGGCATT-5' on its template strand. What would be the corresponding sequence of the mRNA transcribed from this template, written in the conventional 5' to 3' direction?",
      options: ["5'-AUGCCGUAA-3'", "5'-ATGCCGTAA-3'", "3'-AUGCCGUAA-5'", "5'-UACGGCAUU-3'"],
      correct: 0,
      explanation: "mRNA is synthesised complementary and antiparallel to its DNA template strand, using RNA bases (uracil replacing thymine); reading the template 3'-TACGGCATT-5' and pairing each base (T-A, A-U, C-G, G-C, G-C, C-G, A-U, T-A, T-A) while reversing orientation to the conventional 5' to 3' direction gives an mRNA sequence of 5'-AUGCCGUAA-3', a useful exercise in applying both complementary pairing and correct strand orientation."
    },
    {
      q: "Which of the following correctly describes a key difference between how transcription proceeds in prokaryotic cells compared with eukaryotic cells?",
      options: ["In prokaryotes, translation of an mRNA molecule can begin before transcription of that same molecule is even finished, whereas in eukaryotes, transcription must be completed and the mRNA processed before translation begins", "Only eukaryotic cells actually use RNA polymerase to transcribe genes", "Only prokaryotic mRNA requires the addition of a poly-A tail before translation", "Eukaryotic transcription always produces multiple identical copies of mRNA per gene simultaneously"],
      correct: 0,
      explanation: "Because prokaryotic cells lack a nuclear envelope separating transcription from translation, ribosomes can begin translating an mRNA molecule while RNA polymerase is still transcribing further down the same gene; in eukaryotes, transcription occurs in the nucleus and the mRNA must be processed (including splicing and addition of a cap and poly-A tail) and exported before translation can begin in the cytoplasm, a key structural difference between the two types of cell."
    },
    {
      q: "A biotechnology company wants to produce human insulin using genetically modified bacteria. Which fundamental property of the genetic code makes it possible for a bacterial cell to correctly translate a human gene it has never encountered before?",
      options: ["The near-universality of the genetic code, meaning the same codons specify the same amino acids across virtually all organisms", "The fact that bacterial ribosomes are identical in size to human ribosomes", "The fact that bacteria and humans share exactly the same total number of genes", "The fact that all bacterial genes are naturally identical in sequence to human genes"],
      correct: 0,
      explanation: "Because the genetic code is (with rare exceptions) universal across nearly all living organisms, the same codons specify the same amino acids whether they're being read by a human ribosome or a bacterial one; this universality is what allows a bacterial cell to correctly transcribe and translate an inserted human gene, such as the gene for insulin, producing a correctly-sequenced human protein despite the huge evolutionary distance between the two organisms."
    }
  ],

  "A2.2": [
    {
      q: "A researcher examines two cell samples under an electron microscope: one from a mushroom cap and one from a human cheek swab. Both samples show a nucleus and mitochondria, but only one shows a rigid outer wall surrounding the plasma membrane. Which sample is most likely which, and why?",
      options: ["The mushroom cap cells have a cell wall (made of chitin, characteristic of fungi), while the human cheek cells lack one", "The human cheek cells have a cell wall, while the mushroom cap cells lack one", "Both samples would be expected to lack a cell wall, since only plants have cell walls", "Both samples would be expected to have an identical cell wall composition"],
      correct: 0,
      explanation: "Fungal cells, including those making up a mushroom, have a rigid cell wall (built mainly from chitin) surrounding their plasma membrane, a feature animal cells (including human cheek cells) entirely lack; both cell types do have a nucleus and mitochondria, since both are eukaryotic, but the presence or absence of a cell wall is a key distinguishing structural feature between fungal and animal cells."
    },
    {
      q: "A cell biologist wants to determine whether a particular organelle observed in an electron micrograph is a mitochondrion or a chloroplast. Which single feature would most reliably distinguish the two, if only a black-and-white electron micrograph (with no colour information) is available?",
      options: ["The presence of thylakoid membranes stacked into grana, found in chloroplasts but not mitochondria", "The presence of a double membrane, found in chloroplasts but not mitochondria", "The presence of DNA, found in chloroplasts but not mitochondria", "The presence of ribosomes, found in chloroplasts but not mitochondria"],
      correct: 0,
      explanation: "Both mitochondria and chloroplasts share several features (a double membrane, their own DNA, and their own ribosomes), since both are believed to have originated through endosymbiosis; the clearest distinguishing structural feature visible even in a black-and-white micrograph is the internal thylakoid membrane system stacked into grana, a structure unique to chloroplasts and entirely absent from mitochondria."
    },
    {
      q: "A student examines a prepared slide of a bacterium under a light microscope at the school's maximum available magnification and still cannot make out any clear internal structures, only a small, blurry dot. What is the most likely explanation for this limitation?",
      options: ["The resolution of a standard light microscope is insufficient to distinguish the fine internal structures of a bacterial cell, regardless of how much the image is magnified", "Bacteria have no internal structures at all to observe", "The student's microscope must be faulty, since light microscopes can normally resolve bacterial internal structures easily", "Magnification and resolution are the same property and cannot be separated"],
      correct: 0,
      explanation: "Resolution (the ability to distinguish two close points as separate) is limited by the wavelength of light used, and a standard light microscope's resolution is insufficient to reveal fine internal detail within the already-small volume of a bacterial cell, regardless of how much further the image is magnified; magnification and resolution are related but distinct properties, and increasing magnification alone cannot overcome a fundamental resolution limit."
    },
    {
      q: "An electron micrograph of a plant root cell shows a large, membrane-bound structure occupying most of the cell's volume, containing a watery fluid and helping maintain the cell's rigidity through internal pressure. What is this structure, and what is its primary role?",
      options: ["The vacuole, which helps maintain turgor pressure and cell rigidity", "The nucleus, which stores the cell's genetic material", "The Golgi apparatus, which processes and packages proteins", "The rough endoplasmic reticulum, which is the site of protein synthesis"],
      correct: 0,
      explanation: "The large, fluid-filled vacuole found in many plant cells is bounded by a membrane (the tonoplast) and plays a central role in maintaining turgor pressure, the internal pressure that pushes the cell membrane against the cell wall and helps keep plant tissue rigid; this is distinct from the roles of the nucleus, Golgi apparatus, or rough ER, which are involved in genetic storage, protein processing, and protein synthesis respectively."
    },
    {
      q: "A researcher compares two types of microscope: one uses visible light and glass lenses, while the other uses a beam of electrons and electromagnetic lenses. Which statement correctly compares the two?",
      options: ["The electron microscope achieves much higher resolution, allowing much finer detail to be observed, but cannot be used to view living specimens", "The light microscope achieves higher resolution than the electron microscope in all cases", "Both types of microscope achieve identical resolution, differing only in magnification", "Only the light microscope requires the sample to be placed in a vacuum"],
      correct: 0,
      explanation: "Because electrons have a much shorter wavelength than visible light, electron microscopes can achieve far higher resolution, revealing much finer structural detail than a light microscope; however, electron microscopy typically requires the sample to be placed in a vacuum and often chemically fixed or coated, meaning living specimens cannot usually be observed this way, unlike with a light microscope."
    }
  ],

  "B2.2": [
    {
      q: "A pancreatic cell that secretes large quantities of digestive enzymes is examined under an electron microscope and shows an unusually extensive network of ribosome-studded membranes throughout its cytoplasm. Which organelle is most likely so extensive in this particular cell type, and why?",
      options: ["Rough endoplasmic reticulum, since it is the site of synthesis for proteins destined for secretion, such as digestive enzymes", "Smooth endoplasmic reticulum, since it is the site of lipid synthesis unrelated to protein secretion", "The Golgi apparatus, since it is the primary site of protein synthesis in all cells", "Lysosomes, since they are responsible for synthesising new digestive enzymes from scratch"],
      correct: 0,
      explanation: "Cells that secrete large amounts of protein, such as pancreatic cells producing digestive enzymes, typically have an extensive rough endoplasmic reticulum, since ribosomes bound to this membrane are the site where secreted proteins are synthesised and begin initial folding and modification before being sent onward through the secretory pathway."
    },
    {
      q: "A cell biologist tracks a newly synthesised protein destined for secretion as it moves through several organelles before leaving the cell. Which sequence correctly describes the order these organelles are typically visited?",
      options: ["Rough endoplasmic reticulum, then Golgi apparatus, then a secretory vesicle that fuses with the plasma membrane", "Golgi apparatus, then rough endoplasmic reticulum, then the nucleus", "Lysosome, then rough endoplasmic reticulum, then Golgi apparatus", "Smooth endoplasmic reticulum, then nucleus, then Golgi apparatus"],
      correct: 0,
      explanation: "A secreted protein is first synthesised and folded within the rough endoplasmic reticulum, then transported (often via vesicles) to the Golgi apparatus for further processing, modification, and sorting; finally, it is packaged into a secretory vesicle that travels to and fuses with the plasma membrane, releasing the protein outside the cell, a well-established sequence describing the eukaryotic secretory pathway."
    },
    {
      q: "A cell that has recently engulfed a bacterium by phagocytosis relies on a specific organelle to break down the ingested material. Which organelle carries out this digestive role, and what does it contain that makes this possible?",
      options: ["The lysosome, which contains digestive enzymes that break down engulfed material", "The Golgi apparatus, which contains enzymes for building rather than breaking down molecules", "The mitochondrion, which contains enzymes for aerobic respiration rather than digestion", "The nucleus, which contains DNA rather than digestive enzymes"],
      correct: 0,
      explanation: "Lysosomes contain a range of hydrolytic (digestive) enzymes capable of breaking down proteins, lipids, carbohydrates, and nucleic acids; when a cell engulfs foreign material such as a bacterium by phagocytosis, the resulting vesicle typically fuses with a lysosome, allowing its enzymes to digest the ingested material within a contained, membrane-bound compartment, protecting the rest of the cell from potentially damaging digestive activity."
    }
  ],

  "C1.2": [
    {
      q: "A sprinter's leg muscles rely heavily on anaerobic respiration during a 100-metre race, since oxygen cannot be delivered fast enough to meet the sudden demand. Which molecule accumulates in the muscle as a direct result, contributing to the burning sensation felt afterward?",
      options: ["Lactate", "Ethanol", "Carbon dioxide", "Acetyl CoA"],
      correct: 0,
      explanation: "Human muscle cells respiring anaerobically convert pyruvate into lactate, regenerating the NAD+ needed to keep glycolysis running without oxygen; this lactate accumulation, along with the resulting drop in local pH, contributes to the burning sensation and fatigue experienced during intense, short bursts of exercise, unlike ethanol, which is instead produced during anaerobic respiration in yeast."
    },
    {
      q: "A student compares the total ATP yield from the complete aerobic respiration of one glucose molecule with the ATP yield from anaerobic respiration of the same molecule. Which statement correctly explains why aerobic respiration produces so much more ATP?",
      options: ["Aerobic respiration fully oxidises glucose through the Krebs cycle and electron transport chain, extracting far more energy than the partial breakdown achieved by glycolysis alone in anaerobic respiration", "Anaerobic respiration uses a different starting molecule than glucose entirely", "Aerobic respiration does not require oxygen and is therefore always more efficient than any process that does", "Anaerobic respiration produces more carbon dioxide, which accounts for its lower ATP yield"],
      correct: 0,
      explanation: "Anaerobic respiration only completes glycolysis, extracting a small net yield of ATP directly, before regenerating NAD+ via a pathway like lactate or ethanol fermentation; aerobic respiration continues on to fully oxidise the products of glycolysis through the Krebs cycle and electron transport chain, extracting vastly more energy overall and producing a much larger total ATP yield per glucose molecule."
    },
    {
      q: "A biochemist adds a poison known to block the final step of the electron transport chain, preventing oxygen from accepting electrons. What would be the most immediate consequence for the cell's ability to produce ATP via aerobic respiration?",
      options: ["ATP production via the electron transport chain would stop almost immediately, since electrons could no longer flow through the chain", "ATP production would actually increase, since blocking oxygen forces the cell to rely entirely on the more efficient Krebs cycle instead", "Glycolysis would be permanently and immediately halted as a direct result", "No effect would be expected, since oxygen plays no role in ATP production"],
      correct: 0,
      explanation: "If oxygen cannot accept electrons at the end of the electron transport chain, the entire chain quickly backs up and stops functioning, since each carrier protein needs to pass its electrons onward to keep operating; this halts the proton gradient that drives ATP synthase, rapidly and severely reducing the cell's ability to produce ATP via aerobic respiration, even though glycolysis (occurring separately in the cytoplasm) could continue for a short time."
    },
    {
      q: "Which of the following molecules is produced during glycolysis and later used directly by the electron transport chain to help generate ATP?",
      options: ["Reduced NAD (NADH)", "Oxygen", "Glucose", "Acetyl CoA"],
      correct: 0,
      explanation: "Glycolysis produces reduced NAD (NADH) as glucose is partially broken down; this NADH carries high-energy electrons to the electron transport chain, where they are used to help pump hydrogen ions and ultimately drive ATP synthase, making NADH (produced during glycolysis, as well as later stages of respiration) a crucial link between the earlier and later stages of aerobic respiration."
    }
  ],

  "C1.3": [
    {
      q: "A greenhouse manager increases the concentration of carbon dioxide inside a sealed greenhouse to boost crop growth. At a fixed, moderate light intensity, plant growth rate initially increases substantially as CO2 rises, but eventually levels off despite further CO2 increases. What does this levelling off indicate?",
      options: ["Light intensity, not CO2 concentration, has become the limiting factor at this point", "CO2 concentration will always remain the limiting factor no matter how much light is available", "The plants have stopped photosynthesising entirely at this point", "Water availability must be the limiting factor, since CO2 has no effect on photosynthesis"],
      correct: 0,
      explanation: "The limiting factor at any point on such a graph is whichever variable would actually increase the rate of photosynthesis if increased further; once growth rate stops responding to more CO2, this indicates that light intensity (a separate variable held constant in this scenario) has instead become the current bottleneck limiting further increases in photosynthetic rate."
    },
    {
      q: "A biology class extracts pigments from spinach leaves and separates them using paper chromatography, observing several distinct coloured bands travel different distances up the paper. What causes different pigments to travel different distances in this technique?",
      options: ["Differences in each pigment's solubility in the solvent relative to how strongly it adsorbs to the paper", "Differences in each pigment's molecular mass alone, regardless of solubility", "Differences in the exact colour of each pigment as perceived by the human eye", "Differences in the temperature at which each pigment was extracted from the leaf"],
      correct: 0,
      explanation: "In paper chromatography, how far a pigment travels relative to the solvent front depends on the balance between its solubility in the mobile solvent (which carries it up the paper) and how strongly it adheres to the stationary paper itself; different pigments have different combinations of these properties, producing the distinct pattern of separated bands observed in the classic spinach leaf pigment extraction."
    },
    {
      q: "During the light-dependent reactions of photosynthesis, water molecules are split in a process called photolysis. What are the products of this splitting, and what is one of them used for?",
      options: ["Oxygen, hydrogen ions, and electrons; the electrons are used to replace those lost from photosystem II", "Only oxygen, which is used directly to power the Calvin cycle", "Only glucose, which is used directly for cellular respiration", "Carbon dioxide and water, which are used to power the Calvin cycle"],
      correct: 0,
      explanation: "Photolysis splits water into oxygen (released as a by-product), hydrogen ions (which contribute to the proton gradient used for ATP synthesis), and electrons, which are used to replace the electrons lost from photosystem II after it absorbs light energy, keeping the light-dependent reactions supplied with electrons to continue functioning."
    },
    {
      q: "A researcher compares the rate of photosynthesis in a plant kept at a constant, high light intensity and CO2 concentration, but varies the surrounding temperature. At very low temperatures, the rate of photosynthesis is much slower than at a moderate temperature, even though light and CO2 remain plentiful. What is the most likely explanation?",
      options: ["Enzymes involved in the light-independent reactions (such as RuBisCO) work more slowly at low temperatures, since molecular motion and reaction rates generally decrease with cooling", "Chlorophyll cannot absorb light at all below a certain temperature", "Water cannot be split by photolysis at low temperatures under any circumstances", "Carbon dioxide becomes chemically unreactive at low temperatures"],
      correct: 0,
      explanation: "Like other enzyme-catalysed reactions, the enzymes involved in the Calvin cycle (such as RuBisCO) generally work more slowly at low temperatures, since reduced molecular motion means fewer successful collisions between enzyme and substrate; this slows the light-independent reactions and, in turn, the overall rate of photosynthesis, even when light and CO2 (inputs for the light-dependent reactions and initial carbon fixation respectively) remain abundant."
    },
    {
      q: "A student sets up an experiment using an aquatic plant to measure the volume of gas bubbles produced under different light intensities, assuming the bubbles are pure oxygen released by photosynthesis. Which limitation should the student consider when interpreting the results using this assumption?",
      options: ["The bubbles may contain a mixture of gases, including some released by the plant's own respiration, not purely oxygen from photosynthesis", "Oxygen bubbles cannot be produced by aquatic plants under any circumstances", "Photosynthesis in aquatic plants does not release any gas at all", "Only terrestrial plants are capable of producing gas bubbles during photosynthesis"],
      correct: 0,
      explanation: "While a rapidly photosynthesising aquatic plant does release oxygen as bubbles, the plant is also simultaneously respiring, and dissolved gases in the water may be released alongside the photosynthetic oxygen; a careful experimenter should recognise that the measured bubble volume reflects a mixture of gas exchange processes, not a pure and exact measurement of oxygen produced by photosynthesis alone."
    }
  ],

  "B2.3": [
    {
      q: "A researcher takes skin cells from an adult mouse and successfully reprograms them in the laboratory into induced pluripotent stem cells (iPSCs), capable of forming a wide range of cell types. What does this reprogramming reveal about differentiated cells like skin cells?",
      options: ["Differentiated cells retain their full original genome and can, under the right conditions, have their gene expression pattern reset to a less specialised state", "Differentiated cells have permanently lost the genes needed to become other cell types", "Only cells from very early embryos can ever be induced to become pluripotent", "Skin cells naturally lack a nucleus and therefore cannot be reprogrammed"],
      correct: 0,
      explanation: "The successful creation of induced pluripotent stem cells from adult skin cells demonstrates that differentiated cells still retain a complete copy of the organism's genome; differentiation results from selective gene expression rather than the permanent loss of genetic material, and this expression pattern can, with the right combination of reprogramming factors, be reset to a much less specialised, pluripotent state."
    },
    {
      q: "A muscle cell and a nerve cell in the same organism have developed very different shapes and functions despite arising from the same fertilised egg. Which explanation correctly accounts for this difference?",
      options: ["Different combinations of genes have been switched on or off during the differentiation of each cell type", "The muscle cell has gained additional genes not present in the nerve cell", "The two cell types must have arisen from genetically distinct zygotes", "Differentiation only affects the cell's appearance, not any underlying gene expression"],
      correct: 0,
      explanation: "Because all cells in an organism descend from the same original zygote, they share an identical genome; the dramatic differences between specialised cell types like muscle and nerve cells arise entirely from differential gene expression during development, with different genes being switched on in each lineage to produce their distinct structures and functions."
    },
    {
      q: "A biotechnology company is developing a treatment using stem cells harvested from umbilical cord blood to treat a blood disorder. Which category of stem cell potential would these cord blood cells most likely have?",
      options: ["Multipotent, capable of forming a limited range of related cell types such as different blood cells", "Totipotent, capable of forming any cell type including extra-embryonic tissue", "Unipotent, capable of forming only one single cell type", "Pluripotent, capable of forming virtually any cell type in the body"],
      correct: 0,
      explanation: "Stem cells found in umbilical cord blood are generally multipotent, capable of differentiating into a limited range of related cell types, primarily various blood cell lineages, rather than the much broader potential of totipotent or pluripotent stem cells, or the single-cell-type restriction of unipotent stem cells."
    },
    {
      q: "A plant cutting taken from a mature geranium stem, when placed in rooting hormone and soil, can regenerate an entirely new root system and eventually grow into a complete new plant. What does this demonstrate about differentiated plant cells, compared with most differentiated animal cells?",
      options: ["Many differentiated plant cells retain a greater degree of totipotency than differentiated animal cells typically do", "Plant cells cannot differentiate at all, unlike animal cells", "Plant cells contain more DNA than animal cells, explaining their regenerative ability", "Animal cells are always more totipotent than plant cells"],
      correct: 0,
      explanation: "The ability of a differentiated plant stem cutting to regenerate an entire new plant illustrates that many plant cells retain a much higher degree of totipotency than most differentiated animal cells, which typically cannot revert to an unspecialised state and regenerate a whole new organism under normal conditions."
    }
  ],

  "D2.2": [
    {
      q: "A study compares gene expression in liver cells and muscle cells taken from the same individual, finding that a gene coding for a liver-specific enzyme is highly methylated in muscle cell DNA but largely unmethylated in liver cell DNA. What does this pattern suggest?",
      options: ["DNA methylation is being used to silence the liver-specific gene in muscle cells, where its product isn't needed", "Methylation always activates a gene rather than silencing it", "The gene must have a completely different base sequence in each cell type", "Muscle cells and liver cells must have different genomes entirely"],
      correct: 0,
      explanation: "Increased methylation of a gene's regulatory region is generally associated with reduced expression of that gene; finding this liver-specific gene heavily methylated in muscle cells (where its product isn't needed) but not in liver cells (where it is needed) is consistent with methylation being used as a mechanism to silence genes in cell types where their expression would serve no purpose, despite both cell types sharing an identical genome."
    },
    {
      q: "Identical twins raised in very different environments sometimes show measurable differences in gene expression later in life, despite having started with identical DNA sequences. What is the most likely explanation for these differences?",
      options: ["Epigenetic modifications, such as differential DNA methylation, have accumulated differently in each twin in response to their different environments", "Their DNA sequences must have changed to become different from one another", "Identical twins never actually share identical DNA to begin with", "Gene expression cannot be influenced by environmental factors"],
      correct: 0,
      explanation: "Because identical twins share the same DNA sequence, differences in gene expression that emerge later in life are best explained by epigenetic changes, modifications like DNA methylation that can be influenced by environmental factors (such as diet, stress, or toxin exposure) and can differ between the twins without any change to the underlying genetic code itself."
    },
    {
      q: "A transcription factor is discovered that, when active, binds to a specific DNA sequence near a target gene and increases the rate at which that gene is transcribed. What is the general term for a DNA sequence that transcription factors bind to in order to influence transcription this way?",
      options: ["A regulatory sequence (such as a promoter or enhancer)", "An intron", "A stop codon", "A telomere"],
      correct: 0,
      explanation: "Regulatory DNA sequences, including promoters (located near the start of a gene) and enhancers (which can be located further away), are the binding sites for transcription factors that influence how much, or whether, a gene is transcribed; introns are non-coding regions removed during RNA processing, stop codons terminate translation, and telomeres protect the ends of chromosomes, none of which serve this regulatory binding function."
    }
  ],

  "D1.3": [
    {
      q: "A patient is diagnosed with a rare inherited disorder caused by a single base substitution that changes a codon coding for glutamic acid into a stop codon partway through the gene. What type of mutation is this, and what is its likely effect on the protein produced?",
      options: ["A nonsense mutation, which would produce a shortened, likely non-functional protein", "A silent mutation, with no effect on the resulting protein", "A missense mutation, changing only one amino acid in an otherwise full-length protein", "A frameshift mutation, altering every subsequent codon in the gene"],
      correct: 0,
      explanation: "A mutation that converts an amino-acid-coding codon into a stop codon is called a nonsense mutation; because translation would terminate prematurely at this point, the resulting protein would be shortened compared with normal, and in many cases would lack essential structural or functional regions, often rendering it non-functional."
    },
    {
      q: "Researchers use CRISPR-Cas9 to disable a specific gene in laboratory mice, then observe the resulting mice for physical or behavioural changes compared with normal mice. What is the main purpose of this kind of gene knockout experiment?",
      options: ["To investigate the normal function of the targeted gene, by observing what changes when it is no longer expressed", "To increase the mouse's total genome size", "To permanently cure the mice of all genetic disorders", "To produce mice that are genetically identical to humans"],
      correct: 0,
      explanation: "By disabling ('knocking out') a specific gene and comparing the resulting phenotype with normal mice, researchers can infer what that gene's product normally does in the organism; this is one of the standard techniques used to investigate gene function, rather than being intended to treat disease or alter the overall similarity between species."
    },
    {
      q: "A skin cancer is found to have arisen from cells that accumulated multiple mutations in genes controlling the cell cycle after years of sun exposure. Which type of mutagen is most likely responsible for this pattern of mutation?",
      options: ["Ultraviolet radiation from sunlight", "A chemical mutagen ingested in food", "A viral infection unrelated to sun exposure", "Random errors during meiosis in gamete-producing cells"],
      correct: 0,
      explanation: "Ultraviolet radiation from sunlight is a well-established mutagen that can directly damage DNA in skin cells, particularly by causing abnormal bonds between adjacent thymine bases; repeated UV exposure over years increases the chance that mutations accumulate in genes controlling cell division, which can eventually lead to skin cancer if enough of these mutations disrupt normal cell cycle control."
    },
    {
      q: "A gene-editing technique successfully corrects a disease-causing mutation in the DNA of a patient's bone marrow stem cells, which are then reintroduced into the patient's body. Why would this specific approach (editing bone marrow stem cells rather than, for example, skin cells) be particularly effective for treating a blood disorder?",
      options: ["Bone marrow stem cells continuously divide to produce new blood cells, so correcting the mutation there allows the corrected gene to be passed on to all future blood cells produced", "Skin cells are incapable of being genetically modified using any known technique", "Blood disorders can only ever be treated by editing genes in gamete cells", "Bone marrow stem cells are easier to physically access than any other cell type in the body"],
      correct: 0,
      explanation: "Bone marrow stem cells continuously divide throughout a person's life to replenish the blood supply; correcting a disease-causing mutation specifically in these self-renewing stem cells means that all of the blood cells subsequently produced from them will also carry the corrected gene, providing a long-lasting treatment effect rather than needing repeated correction of mature, non-dividing blood cells."
    }
  ],

  "D3.1": [
    {
      q: "A woman undergoing fertility treatment is given a hormone that mimics the action of luteinizing hormone (LH), timed to trigger the release of a mature egg for later collection. What natural process is this treatment designed to induce?",
      options: ["Ovulation", "Menstruation", "Implantation", "Spermatogenesis"],
      correct: 0,
      explanation: "A surge in luteinizing hormone (LH) is the natural trigger for ovulation, the release of a mature egg from the ovary; fertility treatments often use a hormone that mimics this LH surge at a precisely timed moment, allowing doctors to predict exactly when ovulation will occur so the egg can be collected shortly afterward for procedures like IVF."
    },
    {
      q: "A biology student examines a diagram of the human testis and needs to identify the site where sperm cells acquire the ability to swim and further mature after leaving the site of their initial production. Which structure is this?",
      options: ["The epididymis", "The seminiferous tubules", "The vas deferens", "The prostate gland"],
      correct: 0,
      explanation: "Sperm cells are initially produced within the seminiferous tubules, but they are not yet fully mature or motile at this point; they travel to the epididymis, where they undergo further maturation and gain the ability to swim, before eventually being transported through the vas deferens during ejaculation."
    },
    {
      q: "A couple trying to conceive is told that timing intercourse around the middle of the woman's menstrual cycle gives the best chance of success. What biological event makes this specific timing most favourable?",
      options: ["Ovulation typically occurs around this point in the cycle, and the egg is only viable for fertilization for a short window afterward", "Menstruation typically occurs around this point in the cycle, releasing the egg", "The uterine lining is at its thinnest around this point, aiding implantation", "Progesterone levels are at their lowest around this point, favouring fertilization"],
      correct: 0,
      explanation: "Ovulation typically occurs roughly midway through a standard menstrual cycle, releasing an egg that remains viable for fertilization for only about 24 hours afterward; because sperm can survive somewhat longer in the female reproductive tract, timing intercourse around this midpoint maximises the chance that viable sperm and a viable egg are present together."
    },
    {
      q: "A pregnant woman's blood is tested at eight weeks of gestation and shows a high concentration of a hormone not normally present in a non-pregnant woman's blood. Which hormone is most likely being detected, and what is its main early role?",
      options: ["Human chorionic gonadotropin (hCG), which maintains the corpus luteum's progesterone production during early pregnancy", "Follicle stimulating hormone (FSH), which stimulates the development of a new egg follicle", "Testosterone, which has no established role in pregnancy", "Thyroxin, which is unrelated to reproductive hormone signalling"],
      correct: 0,
      explanation: "Human chorionic gonadotropin (hCG) is produced specifically by the developing embryo shortly after implantation and is not present in a non-pregnant woman; its main early role is to signal the corpus luteum to continue producing progesterone, maintaining the uterine lining and supporting the pregnancy before the placenta is developed enough to take over hormone production."
    }
  ],

  "D3.2": [
    {
      q: "A breeder crosses a black-feathered chicken with a white-feathered chicken, and all of the resulting offspring have feathers that are a mixture of both black and white patches on the same bird, rather than being grey or one uniform colour. What type of inheritance does this pattern best illustrate?",
      options: ["Codominance, since both alleles are fully and separately expressed in the offspring's phenotype", "Incomplete dominance, since the offspring show a blended, intermediate colour", "Simple dominance, since one colour completely masks the other", "Sex-linked inheritance, since feather colour depends on the sex of the offspring"],
      correct: 0,
      explanation: "When heterozygous offspring display both parental traits fully and separately, rather than blending into a single intermediate phenotype, this is codominance; the patchy black-and-white pattern (rather than a uniform grey) indicates both alleles are being expressed independently in different areas, distinguishing this from incomplete dominance, which would typically produce a blended, uniform intermediate colour."
    },
    {
      q: "A genetic counsellor is analysing a family pedigree for a rare disorder and finds that only males are affected, and every affected male has an unaffected mother who is a carrier. What pattern of inheritance is most consistent with this pedigree?",
      options: ["X-linked recessive inheritance", "Autosomal dominant inheritance", "Autosomal recessive inheritance", "Y-linked inheritance"],
      correct: 0,
      explanation: "A condition affecting only males, where each affected male has an unaffected carrier mother, is a classic pattern for X-linked recessive inheritance; because males have only one X chromosome, a single copy of the recessive allele (inherited from a carrier mother) is enough to cause the condition, while females would need two copies (extremely rare) to be affected."
    },
    {
      q: "Two pea plants, both heterozygous for seed shape (round dominant to wrinkled) and seed colour (yellow dominant to green), are crossed together. Assuming the two genes assort independently, what proportion of the offspring would be expected to show the round, yellow phenotype?",
      options: ["9/16", "3/16", "1/16", "1/4"],
      correct: 0,
      explanation: "A dihybrid cross between two individuals heterozygous for two independently assorting genes produces offspring in the classic 9:3:3:1 ratio; the dominant phenotype for both traits (round and yellow, in this case) makes up 9 out of the 16 possible combinations, giving an expected proportion of 9/16 for offspring showing both dominant traits together."
    },
    {
      q: "A student calculates a chi-squared value of 2.1 for a genetic cross, with a critical value of 5.99 at the appropriate degrees of freedom and the 5% significance level. What conclusion should the student draw?",
      options: ["There is no significant difference between the observed and expected results, so the null hypothesis should not be rejected", "There is a significant difference between the observed and expected results, so the null hypothesis should be rejected", "The experiment must be repeated before any conclusion can be drawn", "The calculated value proves the null hypothesis is definitely true"],
      correct: 0,
      explanation: "Because the calculated chi-squared value (2.1) is lower than the critical value (5.99), there is insufficient evidence to reject the null hypothesis; this means the observed results are considered consistent with (not significantly different from) the expected ratio, though this doesn't definitively prove the null hypothesis is true, only that the data doesn't provide strong evidence against it."
    }
  ],

  "A3.1": [
    {
      q: "A newly discovered marine organism is found to be multicellular, lacks a nervous system, and feeds by filtering tiny particles from water pumped through pores in its body wall. Which phylum does this organism most likely belong to?",
      options: ["Porifera", "Cnidaria", "Mollusca", "Annelida"],
      correct: 0,
      explanation: "Sponges (phylum Porifera) are unique among animal phyla in lacking a nervous system entirely and feeding through a system of water-filtering pores and internal chambers; this combination of features distinguishes them from cnidarians (which have simple nerve nets and stinging cells), molluscs, and annelids, all of which have more complex body organisation."
    },
    {
      q: "A fungus is observed growing on a fallen log, secreting digestive enzymes onto the surrounding wood before absorbing the resulting nutrients. Which term correctly describes this mode of nutrition?",
      options: ["Saprotrophic", "Autotrophic", "Mixotrophic", "Holozoic"],
      correct: 0,
      explanation: "Saprotrophic nutrition, characteristic of fungi and some bacteria, involves secreting digestive enzymes externally onto dead organic material and then absorbing the digested products; this is distinct from holozoic nutrition (ingesting and digesting food internally, as animals do) and autotrophic nutrition (producing organic molecules directly using an external energy source such as light)."
    },
    {
      q: "Two populations of frogs, geographically separated by a large river, are brought together in a laboratory setting and successfully produce fertile offspring when mated. According to the biological species concept, what does this result suggest?",
      options: ["The two populations likely belong to the same species, since they can interbreed and produce fertile offspring", "The two populations must belong to different species, since they were geographically separated", "Interbreeding ability has no bearing on species classification under the biological species concept", "The two populations must have identical genomes"],
      correct: 0,
      explanation: "The biological species concept defines a species as a group capable of interbreeding under natural conditions to produce fertile offspring; successfully producing fertile offspring in this experiment, despite the populations' previous geographic separation, suggests they have not yet diverged enough to be considered separate species under this definition, even though they were physically isolated from one another."
    },
    {
      q: "A taxonomist examines a newly discovered plant species and needs to place it within the existing classification hierarchy. Which of the following correctly lists the major taxonomic ranks from broadest to most specific?",
      options: ["Kingdom, phylum, class, order, family, genus, species", "Species, genus, family, order, class, phylum, kingdom", "Kingdom, class, phylum, family, order, genus, species", "Phylum, kingdom, order, class, family, species, genus"],
      correct: 0,
      explanation: "The standard taxonomic hierarchy, from the broadest, most inclusive rank down to the most specific, is kingdom, phylum, class, order, family, genus, and finally species; each rank down this hierarchy groups together organisms that share progressively more specific characteristics and a more recent common ancestor."
    }
  ],

  "B4.1": [
    {
      q: "The Arctic fox has noticeably shorter ears and legs compared with the fennec fox, which lives in the hot Sahara desert. What is the most likely adaptive explanation for this difference in body proportions?",
      options: ["Shorter extremities in the Arctic fox reduce surface area relative to body volume, minimising heat loss in a cold climate, while the fennec fox's larger ears increase surface area to help lose excess heat", "Longer extremities always evolve in colder climates to increase heat loss", "Body proportions have no relationship to climate and are due to genetic drift alone", "Ear size is determined entirely by diet rather than by climate adaptation"],
      correct: 0,
      explanation: "This pattern reflects a well-documented adaptation (Allen's rule): animals in colder climates tend to have shorter extremities, reducing their surface area to volume ratio and minimising heat loss, while animals in hot climates, like the fennec fox, tend to have larger extremities such as ears, increasing surface area to help dissipate excess body heat."
    },
    {
      q: "A cactus growing in a hot, arid desert has a thick, waxy cuticle covering its stem and has leaves reduced to small spines. What is the primary adaptive advantage of these features?",
      options: ["They reduce water loss through transpiration, an important adaptation in a water-scarce environment", "They increase the rate of photosynthesis compared with a typical broad-leaved plant", "They allow the plant to absorb more sunlight than a plant with larger leaves", "They increase the surface area available for gas exchange"],
      correct: 0,
      explanation: "A thick, waxy cuticle reduces water loss through the stem's surface, and reducing leaves to small spines dramatically decreases the surface area available for transpiration (with photosynthesis instead often occurring in the fleshy stem); both adaptations help the cactus conserve scarce water in its arid desert habitat, at some cost to overall photosynthetic surface area."
    },
    {
      q: "Fish living in the deep ocean, far below the reach of sunlight, often have greatly reduced eyes or lack eyes entirely, while some possess bioluminescent organs instead. What is the most likely explanation for the reduction of eyes in these species?",
      options: ["In the near-total absence of light, functional eyes provide little to no survival advantage, so there is reduced selective pressure to maintain them", "Eyes are never useful to any fish species regardless of habitat", "Bioluminescence makes eyes completely unnecessary in every marine environment", "Deep-sea fish evolved from a common ancestor that never possessed eyes at all"],
      correct: 0,
      explanation: "In the near-total darkness of the deep ocean, functional eyes provide little to no advantage for finding food or avoiding predators, so there is little selective pressure maintaining well-developed eyes in these populations over evolutionary time; some deep-sea species instead rely on bioluminescence (or other senses) as alternative adaptations suited to their extreme, low-light environment."
    }
  ],

  "D4.1": [
    {
      q: "A population of insecticide-resistant mosquitoes is found to have a higher frequency of a particular resistance allele in areas where insecticide use has been heaviest, compared with areas where insecticide has rarely been used. What evolutionary process best explains this geographic pattern?",
      options: ["Natural selection has favoured resistant mosquitoes specifically in areas with heavy insecticide exposure, increasing the resistance allele's frequency there", "The resistance allele arose independently and simultaneously in every mosquito population regardless of insecticide exposure", "Insecticide exposure directly causes the resistance allele to form within an individual mosquito's lifetime", "Genetic drift alone, unrelated to insecticide use, fully explains this geographic pattern"],
      correct: 0,
      explanation: "This pattern is a clear example of natural selection: in areas with heavy insecticide use, mosquitoes carrying the pre-existing resistance allele survive and reproduce at a higher rate than susceptible mosquitoes, increasing the allele's frequency there over generations, while in areas with little insecticide pressure, there is less selective advantage to being resistant, so the allele remains comparatively rare."
    },
    {
      q: "Two closely related bird species have diverged in the shape of their beaks, one adapted to cracking hard seeds and the other adapted to probing flowers for nectar. Over many generations, individuals with beak shapes poorly suited to either extreme became less common in each population. What type of natural selection does this best illustrate?",
      options: ["Disruptive selection, favouring both extreme phenotypes over the intermediate", "Stabilizing selection, favouring the intermediate phenotype over both extremes", "Directional selection, favouring only one extreme phenotype", "No selection, since the population showed no change over time"],
      correct: 0,
      explanation: "Disruptive selection favours individuals at both extremes of a phenotypic range (in this case, beak shapes suited to either seed-cracking or nectar-probing) while selecting against the intermediate; this can, over enough generations, contribute to the divergence of a single population into two distinct forms, potentially setting the stage for eventual speciation."
    },
    {
      q: "A study of a wild bird population finds that individuals with average-sized beaks have the highest survival rate, while individuals with unusually large or unusually small beaks have lower survival rates. What type of selection does this data best illustrate?",
      options: ["Stabilizing selection", "Directional selection", "Disruptive selection", "Sexual selection"],
      correct: 0,
      explanation: "Stabilizing selection favours individuals with an intermediate, average phenotype over those at either extreme, reducing overall variation in the population over time; finding that average-beaked birds have the highest survival rate, with both larger and smaller beak sizes disadvantaged, is a textbook example of this type of selection."
    },
    {
      q: "For a population to remain in Hardy-Weinberg equilibrium across generations, several specific conditions must be met simultaneously. Which of the following would violate this equilibrium if present in a real population?",
      options: ["Non-random mating, where individuals preferentially choose mates with certain genotypes", "A very large population size", "The complete absence of mutation", "The complete absence of migration into or out of the population"],
      correct: 0,
      explanation: "The Hardy-Weinberg model assumes random mating among individuals in the population; if mating instead occurs non-randomly (for example, if individuals preferentially select mates with a particular genotype), this violates one of the model's core assumptions and can shift genotype frequencies away from Hardy-Weinberg predictions, unlike a large population size or the absence of mutation/migration, which are consistent with the model's assumptions rather than violations of them."
    }
  ],

  "A4.1": [
    {
      q: "Two populations of a fish species become separated when a new sandbar forms, blocking the connecting channel between two coastal lagoons. Over the following several thousand years, the populations diverge until they can no longer produce fertile offspring, even after the sandbar erodes away and they are reunited. What type of speciation does this scenario describe?",
      options: ["Allopatric speciation, driven by geographic isolation", "Sympatric speciation, occurring without any geographic barrier", "Artificial selection, driven by deliberate human intervention", "Convergent evolution, resulting in similar traits from different ancestors"],
      correct: 0,
      explanation: "Allopatric speciation occurs when populations become geographically separated (in this case, by the formation of a sandbar) and, isolated from gene flow with each other, accumulate enough genetic differences over time that they can no longer interbreed successfully even if the geographic barrier is later removed, exactly as described in this fish population scenario."
    },
    {
      q: "The forelimb bones of a bat's wing, a whale's flipper, and a human arm all share a strikingly similar underlying bone arrangement, despite being used for very different functions (flight, swimming, and grasping respectively). What best explains this shared underlying structure?",
      options: ["The three structures are homologous, having evolved from the same basic limb structure present in a shared common ancestor", "The three structures are analogous, having evolved independently to serve similar functions", "The similarity is due to convergent evolution, unrelated to any shared ancestry", "The three species must have a very recent common ancestor, having diverged only a few generations ago"],
      correct: 0,
      explanation: "Homologous structures share the same underlying anatomical origin, inherited from a shared common ancestor, even when they have since been adapted to very different functions; the shared bone arrangement across bat wings, whale flippers, and human arms reflects descent from a common ancestral vertebrate limb structure, not convergent evolution (which would instead describe similar-looking structures with entirely different origins)."
    },
    {
      q: "A species of moth shows two distinct colour forms, light and dark, within the same population living in a forest with patches of both light and dark tree bark. Researchers find that birds preferentially prey on whichever moth colour form stands out more against the bark it happens to be resting on. What evolutionary outcome would be predicted from this selective predation over many generations?",
      options: ["Both colour forms would be maintained in the population, since each has a survival advantage on its matching background", "Only the light colour form would eventually persist in the population", "Only the dark colour form would eventually persist in the population", "Colour would have no effect on moth survival in this scenario"],
      correct: 0,
      explanation: "Because each colour form has a camouflage advantage specifically on its matching bark type, and birds preferentially target whichever form stands out on a given background, both forms would be expected to persist within the population, each favoured in the microhabitat where it is best camouflaged, an example of how varying selective pressures across a habitat can maintain more than one phenotype simultaneously."
    }
  ],

  "B4.2": [
    {
      q: "Two species of barnacle live on the same rocky shore, but one is consistently found higher up the shore (exposed to air for longer) while the other dominates the lower shore. Laboratory experiments show both species could survive across the whole range of tidal heights if the other species were absent. What does this suggest about the barnacles' niches?",
      options: ["Interspecific competition has restricted each species to a narrower realized niche than its fundamental niche would allow", "The two species share an identical fundamental niche and an identical realized niche", "Competition has expanded each species' realized niche beyond its fundamental niche", "The two species have no ecological interaction with one another at all"],
      correct: 0,
      explanation: "A fundamental niche describes the full range of conditions a species could occupy without competitors present, while the realized niche is the narrower range it actually occupies once competition is factored in; the fact that each barnacle species could survive across the full tidal range alone, but is restricted to only part of it when the other species is present, indicates that competitive exclusion has squeezed each species into a smaller realized niche than its fundamental niche."
    },
    {
      q: "A species of clownfish lives among the stinging tentacles of a sea anemone, gaining protection from predators, while the anemone benefits from nutrients in the clownfish's waste and improved water circulation caused by the fish's movement. What type of interspecific relationship does this describe?",
      options: ["Mutualism", "Parasitism", "Commensalism", "Competition"],
      correct: 0,
      explanation: "Mutualism describes a relationship in which both participating species benefit; the clownfish gains protection from predators by sheltering among the anemone's stinging tentacles (to which it has some immunity), while the anemone benefits from nutrients and improved water flow, making this a clear example of a mutually beneficial interspecific relationship."
    },
    {
      q: "A parasitic wasp lays its eggs inside a living caterpillar; the wasp larvae then develop by feeding on the caterpillar's internal tissues, ultimately killing it as they emerge. What term best describes this specific type of parasitic relationship, given that it inevitably results in the host's death?",
      options: ["Parasitoidism", "Mutualism", "Commensalism", "Predation, since the caterpillar is killed immediately upon contact"],
      correct: 0,
      explanation: "This relationship is specifically described as parasitoidism, a form of parasitism in which the host is inevitably killed as the parasite's offspring complete their development; this distinguishes it from typical parasitism, where the host usually survives (at least in the short term), and from predation, where the prey is killed immediately rather than gradually over the course of the parasite's development."
    }
  ],

  "A3.2": [
    {
      q: "A cladogram of vertebrates shows amphibians branching off before reptiles, birds, and mammals share a more recent common ancestor with one another. Based on this cladogram, which statement is correct?",
      options: ["Reptiles, birds, and mammals share a more recent common ancestor with each other than any of them share with amphibians", "Amphibians are more closely related to mammals than reptiles are", "Birds evolved directly from modern reptiles present today", "All four groups shown share an equally recent common ancestor"],
      correct: 0,
      explanation: "A cladogram's branching pattern reflects relative recency of common ancestry; if amphibians branch off earlier (closer to the root) than the split separating reptiles, birds, and mammals, this indicates that reptiles, birds, and mammals share a more recent common ancestor with each other than any of them do with amphibians, which diverged from the lineage earlier."
    },
    {
      q: "Two species of beetle look almost identical in external appearance, but DNA sequencing reveals they are only distantly related, having converged on similar body shapes independently. Which type of classification approach would be more likely to correctly reflect their true evolutionary relationship?",
      options: ["Molecular classification based on DNA or protein sequence comparison, since physical appearance can be misleading due to convergent evolution", "Classification based purely on external body shape, since appearance is always a reliable indicator of relatedness", "Classification based purely on geographic location where each species was found", "Classification based purely on which species was formally described and named first"],
      correct: 0,
      explanation: "Because convergent evolution can produce superficially similar structures in distantly related species, molecular classification (comparing DNA or protein sequences) generally provides a more reliable indication of true evolutionary relationships than classification based on physical appearance alone, which can be misled by analogous structures that resemble each other without reflecting shared ancestry."
    },
    {
      q: "A researcher building a cladogram for several species of primate needs to decide which type of characteristic to use as data. Which type of characteristic would be most appropriate for constructing a cladogram that accurately reflects evolutionary relationships?",
      options: ["Homologous characteristics, since these reflect shared ancestry rather than independent evolution", "Any observable characteristic, regardless of its evolutionary origin", "Characteristics related only to an organism's current geographic range", "Analogous characteristics, since these are the easiest to measure and compare"],
      correct: 0,
      explanation: "Homologous characteristics, structures inherited from a shared common ancestor, are the appropriate basis for constructing a cladogram meant to reflect true evolutionary relationships; analogous characteristics, which arise independently through convergent evolution rather than shared ancestry, can mislead cladogram construction if used instead, since they don't reflect genuine relatedness."
    }
  ],

  "D4.2": [
    {
      q: "A forest that was completely destroyed by a volcanic eruption is recolonised over subsequent decades, starting with lichens and mosses, followed by grasses, shrubs, and eventually trees. What term describes this gradual, sequential process of ecological recovery on newly exposed, lifeless substrate?",
      options: ["Primary succession", "Secondary succession", "Adaptive radiation", "Genetic drift"],
      correct: 0,
      explanation: "Primary succession describes the gradual colonisation and development of an ecological community starting from bare, lifeless substrate with no pre-existing soil, such as newly cooled volcanic rock; this is distinct from secondary succession, which begins from a disturbed but already-existing ecosystem where soil and some organisms typically remain."
    },
    {
      q: "Two forest ecosystems are compared after a major disturbance such as a wildfire: one recovers its original species composition within a decade, while the other remains altered for much longer. What term describes an ecosystem's capacity to recover its original state relatively quickly after a disturbance?",
      options: ["Resilience", "Resistance", "Succession", "Carrying capacity"],
      correct: 0,
      explanation: "Resilience describes how quickly and effectively an ecosystem can recover and return to something like its original state after being disrupted; this is distinct from resistance, which describes an ecosystem's ability to withstand a disturbance without changing much in the first place, so a highly resilient ecosystem can still have low resistance if it changes substantially but recovers quickly afterward."
    }
  ],

  "D4.3": [
    {
      q: "Measurements of atmospheric methane concentration show it has more than doubled since pre-industrial times, with a significant contribution from livestock farming. Why is methane considered such a potent contributor to global warming despite being present in much lower concentrations than carbon dioxide?",
      options: ["Methane absorbs long-wave radiation much more effectively per molecule than carbon dioxide does", "Methane reflects short-wave solar radiation more effectively than carbon dioxide", "Methane directly destroys the ozone layer, unlike carbon dioxide", "Methane has no actual greenhouse effect and is incorrectly classified as a greenhouse gas"],
      correct: 0,
      explanation: "Although methane is present in much lower atmospheric concentrations than carbon dioxide, each methane molecule is considerably more effective at absorbing and re-radiating long-wave radiation, giving it a disproportionately large warming effect per molecule; this high potency, even at relatively low concentration, is why reducing methane emissions (such as from livestock) is often highlighted as an impactful climate change mitigation strategy."
    },
    {
      q: "Coral reefs around the world have experienced repeated mass bleaching events as ocean temperatures have risen. What is the underlying biological cause of coral bleaching?",
      options: ["Corals expel their symbiotic algae under heat stress, losing both their colour and a major source of nutrition", "Rising ocean temperature directly bleaches the coral's own pigment molecules through a chemical reaction", "Corals absorb excess carbon dioxide, which turns their tissue white through a direct chemical process", "Bleaching occurs when corals reproduce sexually rather than asexually"],
      correct: 0,
      explanation: "Coral bleaching occurs when heat-stressed coral polyps expel their symbiotic photosynthetic algae (zooxanthellae), which normally provide the coral with both its colour and a substantial portion of its nutritional needs through photosynthesis; without these algae, the coral appears white (bleached) and, if the stress persists and the algae aren't recolonised, the coral may eventually starve and die."
    },
    {
      q: "A climate scientist explains that melting Arctic sea ice creates a feedback loop that accelerates further warming, beyond what would be expected from rising greenhouse gas concentrations alone. What is the mechanism behind this specific feedback loop?",
      options: ["Ice reflects sunlight more effectively than the darker ocean water it exposes, so melting ice reduces the amount of solar energy reflected back to space, accelerating further warming and melting", "Melting ice releases stored carbon dioxide directly into the atmosphere, independent of any albedo effect", "Melting ice increases the ocean's capacity to absorb additional greenhouse gases, slowing warming", "Melting ice has no measurable effect on how much solar energy the Earth absorbs"],
      correct: 0,
      explanation: "This is a positive feedback loop driven by changes in albedo (reflectivity): sea ice reflects a large proportion of incoming sunlight back to space, but as it melts and exposes the much darker ocean surface beneath, more solar energy is absorbed rather than reflected, accelerating local warming and driving further ice melt, compounding beyond the warming caused by rising greenhouse gas concentrations alone."
    }
  ],

  "C4.1": [
    {
      q: "Ecologists studying a population of otters along a coastline use a mark-release-recapture method: they catch and mark 40 otters, release them, and later catch 60 otters, of which 15 are already marked. Using the Lincoln index, what is the estimated total population size?",
      options: ["160", "40", "60", "15"],
      correct: 0,
      explanation: "The Lincoln index estimates population size as (number marked in first sample multiplied by total number in second sample) divided by number of marked individuals recaptured; calculating (40 x 60) / 15 gives an estimated total population size of 160 otters, assuming the marked individuals mixed randomly and marking didn't affect survival or capture probability."
    },
    {
      q: "A population of deer in a forest grows rapidly for several years before levelling off at a relatively stable size, even though food supply remains generally consistent. What term describes the population size at which this levelling off occurs, reflecting the maximum size the environment can sustainably support?",
      options: ["Carrying capacity", "Population density", "Biotic potential", "Ecological niche"],
      correct: 0,
      explanation: "Carrying capacity refers to the maximum population size that a given environment can sustainably support long-term, limited by factors such as food availability, space, and other resources; a population that grows rapidly and then levels off is typically approaching its environment's carrying capacity, where births and deaths (or immigration and emigration) roughly balance out."
    },
    {
      q: "A study finds that as the population density of a species of vole increases, the average number of offspring produced per female decreases, and the rate of disease transmission increases. What term describes this kind of factor, whose effect on population growth depends on how crowded the population already is?",
      options: ["A density-dependent factor", "A density-independent factor", "An abiotic factor unrelated to population size", "A factor with no effect on population growth"],
      correct: 0,
      explanation: "Density-dependent factors are those whose effect on a population's growth rate becomes stronger as population density increases; both reduced reproduction and increased disease transmission at higher density are classic examples, since their impact scales with how crowded the population has become, unlike density-independent factors (such as a sudden extreme weather event), which affect a population regardless of its current density."
    }
  ],

  "C4.2": [
    {
      q: "A food web diagram shows arrows connecting producers, several types of consumer, and decomposers. If a disease dramatically reduces the population of one particular herbivore species, what would generally be expected in a food web with multiple alternative prey species available to predators?",
      options: ["The impact might be buffered somewhat, since predators could shift toward consuming alternative available prey species instead", "The entire food web would immediately and completely collapse regardless of any alternative prey available", "No other species in the food web would be affected in any way", "All producer populations would immediately go extinct as a direct result"],
      correct: 0,
      explanation: "In a complex food web with multiple potential prey species available, the loss or decline of one herbivore species may be partially buffered, since predators that previously fed on it can shift toward other available prey; this kind of redundancy tends to make more complex food webs somewhat more resilient to the loss of a single species compared with a simpler food chain, where such a loss could have more severe, direct consequences."
    },
    {
      q: "An ecologist studying a lake ecosystem measures the total dry mass of all organisms at each trophic level and constructs a pyramid of biomass. If the pyramid shows a much smaller biomass of primary consumers compared with producers, but this pattern reverses when a pyramid of numbers is constructed instead (showing more individual primary consumers than producers), what could explain this apparent discrepancy?",
      options: ["The producers may consist of very few, very large individuals (or organisms with large individual biomass), while consumers are individually much smaller but more numerous", "Pyramids of biomass and pyramids of numbers must always show identical patterns", "This pattern can never occur in a real ecosystem and indicates a measurement error", "Energy is being created within the ecosystem, violating the laws of thermodynamics"],
      correct: 0,
      explanation: "A pyramid of numbers counts individual organisms regardless of size, while a pyramid of biomass measures total mass; if producers consist of a small number of very large organisms (such as large trees) while consumers are numerous but individually much smaller (such as insects), a pyramid of numbers could show more consumers than producers even though the reverse is true for total biomass, illustrating why the choice of pyramid type matters for interpreting ecological data."
    },
    {
      q: "In a stable, long-established forest ecosystem, decomposers play an essential ongoing role even though they aren't the most visible organisms present. What would be the most likely long-term consequence if all decomposers were suddenly removed from this ecosystem?",
      options: ["Nutrients would become increasingly locked up in dead organic matter, reducing their availability for new plant growth", "Energy flow through the ecosystem would immediately reverse direction", "Producers would immediately increase their rate of photosynthesis to compensate", "No noticeable effect would be expected, since decomposers play only a minor ecological role"],
      correct: 0,
      explanation: "Decomposers play an essential role in breaking down dead organic matter and waste products, releasing locked-up nutrients back into a form producers can use again; without decomposers, nutrients would become increasingly trapped within accumulating dead material, reducing their availability for new plant growth and disrupting the normal cycling of matter through the ecosystem."
    }
  ],

  "A4.2": [
    {
      q: "A conservation organisation is deciding which of two endangered species to prioritise for a limited-budget breeding programme: one is a distinctive species with no close living relatives, while the other belongs to a large group of very similar, closely related species. Based on the concept of evolutionary distinctiveness, which species would generally be considered a higher conservation priority, and why?",
      options: ["The distinctive species with no close relatives, since its extinction would represent a greater, irreplaceable loss of unique evolutionary history", "The species with many close relatives, since its extinction would have no impact on overall biodiversity", "Neither species should be prioritised over the other under any circumstances", "The species with many close relatives, since it is inherently more valuable due to its abundance of relatives"],
      correct: 0,
      explanation: "Conservation approaches that consider evolutionary distinctiveness prioritise species with few or no close living relatives, since their extinction would represent the loss of a larger, irreplaceable share of unique evolutionary history; a species with many close relatives, by contrast, represents less unique evolutionary information, since much of its genetic and evolutionary heritage would still be represented by its surviving relatives even if that particular species were lost."
    },
    {
      q: "A rewilding project reintroduces a top predator to an ecosystem after decades of absence, aiming to restore natural population control over herbivore species and, indirectly, allow degraded vegetation to recover. What term describes a species like this predator, whose presence has a disproportionately large effect on the wider ecosystem relative to its own abundance?",
      options: ["A keystone species", "An invasive species", "An indicator species", "A pioneer species"],
      correct: 0,
      explanation: "A keystone species has an ecological impact disproportionately large compared with its own numbers, often by regulating the population of other species (such as herbivores) or by shaping habitat structure; reintroducing a keystone predator can trigger cascading effects throughout an ecosystem, as seen in rewilding projects aiming to restore natural predator-prey dynamics and, indirectly, vegetation health."
    },
    {
      q: "Which of the following human activities is generally considered to contribute most significantly to the current global loss of biodiversity?",
      options: ["Habitat destruction, driven by activities such as deforestation and urban expansion", "Establishing new protected wildlife reserves", "Reducing global fossil fuel consumption", "Reforestation of previously cleared land"],
      correct: 0,
      explanation: "Habitat destruction, whether through deforestation, agricultural expansion, or urban development, is widely considered one of the most significant direct drivers of global biodiversity loss, since it removes or fragments the habitats that species depend on for survival; establishing protected reserves, reducing fossil fuel use, and reforestation are instead conservation-positive actions that work to counteract biodiversity loss, not contribute to it."
    }
  ],

  "B2.1": [
    {
      q: "A pharmaceutical researcher is designing a new drug that needs to cross the blood-brain barrier, a tightly packed layer of cells with a plasma membrane rich in phospholipids. Which property would help a drug molecule cross this barrier by diffusing directly through the phospholipid bilayer?",
      options: ["Being relatively small and non-polar, or otherwise lipid-soluble", "Being large and highly polar", "Carrying a strong positive or negative charge", "Being a large protein molecule"],
      correct: 0,
      explanation: "Molecules that are small and non-polar (or otherwise lipid-soluble) can diffuse directly through the hydrophobic core of a phospholipid bilayer without requiring a channel or carrier protein; large, polar, or charged molecules, by contrast, cannot cross the bilayer this way and would require a specific transport protein, which may not be present for a given drug at the blood-brain barrier."
    },
    {
      q: "A red blood cell is placed into a solution and observed to swell steadily until it eventually bursts. What does this observation indicate about the tonicity of the surrounding solution relative to the cell's cytoplasm?",
      options: ["The solution is hypotonic relative to the cytoplasm, so water moves into the cell by osmosis", "The solution is hypertonic relative to the cytoplasm, so water moves out of the cell", "The solution is isotonic relative to the cytoplasm, so no net water movement should occur", "The solution's tonicity cannot be determined from this observation"],
      correct: 0,
      explanation: "A cell swelling and eventually bursting indicates a net movement of water into the cell by osmosis, which occurs when the surrounding solution has a higher water potential (lower solute concentration) than the cell's cytoplasm; this makes the solution hypotonic relative to the cell, the opposite situation to a hypertonic solution, which would instead cause the cell to shrink."
    },
    {
      q: "A membrane transport protein moves glucose into a cell down its concentration gradient, without requiring any input of ATP. What type of transport does this describe?",
      options: ["Facilitated diffusion", "Active transport", "Osmosis", "Simple diffusion"],
      correct: 0,
      explanation: "Movement of a substance down its concentration gradient using a specific transport protein, without requiring ATP, is facilitated diffusion; this differs from active transport (which moves substances against their gradient using ATP), osmosis (which specifically refers to water movement), and simple diffusion (which requires no protein at all, relying on direct movement through the lipid bilayer)."
    },
    {
      q: "A researcher exposes a cell membrane to a chemical that specifically disrupts the sodium-potassium pump's ability to function. What would be the most immediate consequence for the cell's ion concentrations?",
      options: ["The cell would gradually lose its characteristic ion gradients, as sodium and potassium diffuse toward equilibrium concentrations across the membrane", "The cell's ion gradients would immediately become more extreme than before", "There would be no effect, since ion gradients are maintained entirely by passive diffusion", "The cell would immediately die, with no gradual change in ion concentration"],
      correct: 0,
      explanation: "The sodium-potassium pump actively maintains the cell's characteristic ion gradients (high potassium and low sodium inside the cell, relative to outside) by continuously working against the natural tendency of these ions to diffuse toward equilibrium; disrupting this pump would allow sodium and potassium to gradually diffuse down their concentration gradients, eroding these carefully maintained gradients over time rather than causing an instant, catastrophic change."
    },
    {
      q: "Cholesterol molecules are found interspersed among the phospholipids of many animal cell membranes. Which statement correctly describes cholesterol's effect on membrane properties across a range of temperatures?",
      options: ["At high temperatures, cholesterol restrains excessive membrane fluidity, while at low temperatures, it helps prevent the membrane from becoming too rigid", "Cholesterol only affects membrane fluidity at high temperatures, with no effect at low temperatures", "Cholesterol makes the membrane completely rigid and immobile at all temperatures", "Cholesterol has no measurable effect on membrane fluidity at any temperature"],
      correct: 0,
      explanation: "Cholesterol plays a dual role in regulating membrane fluidity: at higher temperatures, it helps restrain excessive fluidity by limiting the movement of phospholipid tails, while at lower temperatures, it prevents the membrane from becoming too rigid by disrupting the tight packing of phospholipids, together helping the membrane maintain suitable physical properties across a range of temperatures."
    }
  ],

  "D3.3": [
    {
      q: "A marathon runner becomes severely dehydrated during a long race, and their blood plasma osmolarity rises noticeably above normal. Which hormone would be expected to increase in response, and what effect would it have on the kidneys?",
      options: ["Antidiuretic hormone (ADH), increasing water reabsorption from the collecting duct", "Insulin, increasing glucose reabsorption from the proximal convoluted tubule", "Glucagon, decreasing water reabsorption from the collecting duct", "Adrenaline, decreasing overall kidney blood flow"],
      correct: 0,
      explanation: "Rising blood plasma osmolarity (indicating dehydration) is detected by osmoreceptors in the hypothalamus, triggering increased secretion of ADH from the posterior pituitary gland; ADH increases the permeability of the collecting duct to water, increasing water reabsorption back into the blood and producing a smaller volume of more concentrated urine, helping to restore normal blood water balance."
    },
    {
      q: "A patient with a rare disorder affecting their hypothalamus is unable to properly regulate body temperature during exercise, showing a dangerously high core temperature despite otherwise normal sweating ability. Which structure's malfunction is most directly implicated?",
      options: ["The hypothalamus's thermoregulatory centre, responsible for coordinating the overall response to changing body temperature", "The sweat glands themselves, since sweating is described as otherwise normal", "The skin's blood vessels alone, independent of any central coordination", "The kidneys, which play no direct role in temperature regulation"],
      correct: 0,
      explanation: "The hypothalamus contains the body's central thermoregulatory centre, which detects changes in body temperature and coordinates the appropriate physiological responses (such as sweating, vasodilation, or shivering); if this coordinating centre malfunctions, the overall thermoregulatory response can become impaired even if individual effectors, like the sweat glands, are still capable of functioning normally on their own."
    },
    {
      q: "A person's blood glucose level begins to fall during a period of prolonged fasting. Which hormonal response would be expected, and what effect would it have on liver cells?",
      options: ["Increased glucagon secretion, stimulating the breakdown of stored glycogen into glucose", "Increased insulin secretion, stimulating glucose uptake and glycogen synthesis", "Decreased glucagon secretion, stimulating glycogen synthesis", "Increased ADH secretion, stimulating glucose release into the blood"],
      correct: 0,
      explanation: "Falling blood glucose during fasting triggers increased glucagon secretion from the pancreas; glucagon acts on liver cells to stimulate the breakdown of stored glycogen into glucose (glycogenolysis), releasing glucose into the blood and helping to restore blood glucose back toward its normal range, the opposite hormonal response to what occurs after a glucose-rich meal."
    },
    {
      q: "A person moves from a cold room into a hot sauna, and within minutes their skin becomes visibly flushed as blood vessels near the surface widen. What is the functional significance of this response?",
      options: ["Vasodilation increases blood flow near the skin surface, increasing heat loss to the surrounding environment", "Vasoconstriction increases blood flow near the skin surface, increasing heat loss", "Vasodilation decreases blood flow near the skin surface, conserving heat", "This response has no role in thermoregulation and is purely coincidental"],
      correct: 0,
      explanation: "As the body detects rising temperature (in this case, from the hot sauna), blood vessels near the skin surface widen (vasodilation), increasing blood flow to the skin; this brings more warm blood close to the body's surface, where heat can be lost to the environment more effectively by radiation, helping to counteract the temperature increase, a classic example of negative feedback in thermoregulation."
    }
  ],

  "C3.1": [
    {
      q: "During a stressful public speaking event, a person's heart rate rises, their pupils dilate, and their digestive activity slows, all within seconds. Which combination of body systems is coordinating this rapid, simultaneous response?",
      options: ["The nervous and endocrine systems acting together, allowing both rapid electrical signalling and sustained hormonal effects", "Only the digestive system, acting entirely independently of any nervous or hormonal control", "Only the skeletal system, since it is responsible for producing physical movement", "Only the excretory system, since stress affects urine production most directly"],
      correct: 0,
      explanation: "A stress response of this kind requires the integration of both the nervous system (providing an immediate, rapid electrical signal to trigger effects like pupil dilation) and the endocrine system (releasing hormones such as adrenaline that produce a related but somewhat slower and more sustained set of effects, such as increased heart rate and altered digestive activity); this kind of coordinated, multi-system integration is necessary for the body to mount a rapid yet whole-body response to a sudden stressor."
    },
    {
      q: "A patient with damage to the hypothalamus shows a range of symptoms including difficulty regulating body temperature, disrupted sleep patterns, and abnormal hunger signals. What does this pattern of symptoms suggest about the hypothalamus's overall role in the body?",
      options: ["The hypothalamus acts as a central integrating and coordinating centre linking the nervous and endocrine systems across a range of homeostatic functions", "The hypothalamus is responsible only for controlling voluntary movement, unrelated to any of these symptoms", "The hypothalamus has no connection to the endocrine system whatsoever", "Each of these symptoms must be caused by a completely separate, unrelated malfunction"],
      correct: 0,
      explanation: "The wide-ranging nature of these symptoms, spanning temperature regulation, sleep, and hunger, reflects the hypothalamus's central role in integrating nervous and endocrine signals across multiple homeostatic systems; damage to this single structure can disrupt several seemingly unrelated functions simultaneously, since it acts as a coordinating hub linking the nervous system to hormonal control via the pituitary gland."
    },
    {
      q: "During intense exercise, blood flow to the digestive system decreases while blood flow to skeletal muscle increases substantially. What best explains this redistribution of blood flow?",
      options: ["The body prioritises blood flow to the tissues with the greatest immediate metabolic demand, coordinated by integrated nervous and hormonal signals", "Blood flow redistribution during exercise occurs randomly with no underlying coordination", "The digestive system requires more blood flow during exercise than skeletal muscle does", "Blood flow to all organs remains constant regardless of activity level"],
      correct: 0,
      explanation: "During exercise, integrated nervous and hormonal signals (including increased sympathetic nervous activity and adrenaline release) cause blood vessels supplying less immediately essential organs, such as the digestive system, to constrict, while vessels supplying actively working skeletal muscle dilate; this coordinated redistribution ensures blood flow, and the oxygen and nutrients it carries, is prioritised for the tissues with the greatest immediate metabolic demand."
    }
  ],

  "B3.3": [
    {
      q: "A patient with a rare muscle disorder is found to have a mutation affecting the protein troponin, preventing it from properly responding to calcium ions. What would be the most likely direct consequence for this patient's muscle contraction?",
      options: ["Impaired ability to expose the myosin-binding sites on actin, disrupting the normal cross-bridge cycle", "Complete inability to synthesise ATP within muscle cells", "An inability to relax skeletal muscles once contraction has begun", "No effect on muscle contraction, since troponin plays no role in this process"],
      correct: 0,
      explanation: "Troponin's normal role is to bind calcium ions and, in response, shift the position of tropomyosin, exposing the myosin-binding sites on actin; if troponin cannot properly respond to calcium, this exposure would be impaired, disrupting the ability of myosin heads to bind actin and preventing the normal cross-bridge cycle needed for muscle contraction."
    },
    {
      q: "A physiotherapist examines a patient's elbow joint and identifies the biceps and triceps as an antagonistic muscle pair. What does this term mean in the context of how these two muscles work together?",
      options: ["The two muscles produce opposite movements at the joint, with one contracting as the other relaxes", "The two muscles always contract simultaneously to produce the same movement", "The two muscles are located in completely unrelated parts of the body", "The two muscles are both attached to the same single bone at both ends"],
      correct: 0,
      explanation: "Antagonistic muscle pairs work in opposition to each other around a joint: when one muscle contracts to produce a movement (such as the biceps contracting to flex the elbow), the other muscle in the pair relaxes, and vice versa for the opposite movement (the triceps contracting to extend the elbow while the biceps relaxes), allowing coordinated, reversible movement at the joint."
    },
    {
      q: "An electron micrograph of a skeletal muscle fibre shows a repeating pattern of alternating light and dark bands along its length. What structural feature is responsible for this striped (striated) appearance?",
      options: ["The regular, repeating arrangement of overlapping actin and myosin filaments within sarcomeres", "Random, disorganised distribution of protein filaments throughout the cell", "The presence of multiple nuclei distributed along the fibre's length", "Large deposits of stored glycogen granules distributed periodically along the fibre"],
      correct: 0,
      explanation: "The characteristic striped appearance of skeletal (and cardiac) muscle arises from the highly regular, repeating arrangement of actin and myosin filaments within sarcomeres, with regions of filament overlap (appearing darker) alternating with regions containing only thin filaments (appearing lighter); this organised arrangement is what gives striated muscle its name and its distinctive banded appearance under a microscope."
    }
  ],

  "B3.1": [
    {
      q: "A patient with chronic bronchitis has excessive mucus production narrowing their airways, making breathing noticeably more difficult. Which specific stage of gas exchange would be most directly affected by this narrowing?",
      options: ["Bulk flow of air into and out of the alveoli, since narrowed airways increase resistance to airflow", "Diffusion of gases directly across the alveolar wall, which depends on wall thickness rather than airway diameter", "The binding of oxygen to haemoglobin within red blood cells", "The active transport of oxygen across the alveolar membrane"],
      correct: 0,
      explanation: "Narrowed airways due to excess mucus primarily increase resistance to the bulk flow of air moving into and out of the lungs, making it physically harder to move air in and out; this is distinct from the actual gas exchange process at the alveoli (diffusion across the thin alveolar wall), which depends more on factors like wall thickness and surface area rather than the diameter of the airways leading to the alveoli."
    },
    {
      q: "At high altitude, where atmospheric oxygen partial pressure is significantly lower than at sea level, the human body gradually acclimatises over several weeks. Which physiological change would be expected as part of this acclimatisation?",
      options: ["An increase in the number of red blood cells, improving the blood's oxygen-carrying capacity", "A decrease in ventilation rate, reducing the amount of air breathed per minute", "A decrease in the number of red blood cells, reducing blood viscosity", "No physiological changes occur in response to altitude, since the body cannot acclimatise"],
      correct: 0,
      explanation: "In response to the lower atmospheric oxygen availability at high altitude, the body typically increases red blood cell production over several weeks, improving the blood's overall capacity to carry oxygen despite its lower partial pressure in the air; ventilation rate typically increases (not decreases) as part of this acclimatisation as well, helping to maximise oxygen uptake given the reduced availability."
    },
    {
      q: "A diagram compares the oxygen-haemoglobin dissociation curves of a human fetus and an adult human, showing the fetal curve shifted to the left of the adult curve. What does this leftward shift indicate about fetal haemoglobin?",
      options: ["Fetal haemoglobin has a higher affinity for oxygen than adult haemoglobin, allowing it to bind oxygen more readily at a given partial pressure", "Fetal haemoglobin has a lower affinity for oxygen than adult haemoglobin", "The leftward shift indicates fetal haemoglobin cannot bind oxygen at all", "The shift is unrelated to oxygen affinity and reflects a difference in fetal blood pH only"],
      correct: 0,
      explanation: "A dissociation curve shifted to the left indicates higher oxygen affinity, meaning the haemoglobin binds oxygen more readily (and releases it less readily) at any given oxygen partial pressure; this higher affinity in fetal haemoglobin allows the fetus to effectively draw oxygen away from the mother's haemoglobin across the placenta, since the fetal haemoglobin binds oxygen more strongly at the partial pressures typically present there."
    }
  ],

  "B3.2": [
    {
      q: "A gardener notices that a large tree continues to draw water from the soil even on a still, humid morning with almost no measurable transpiration occurring from its leaves. What could explain this continued water uptake?",
      options: ["Root pressure, generated by active mineral ion uptake into the root's xylem, can drive some water movement independently of transpiration", "Water uptake can only occur as a direct result of transpiration, so this observation would be impossible", "Osmosis cannot occur in root cells under humid conditions", "The tree must be actively pumping water using ATP throughout its entire height"],
      correct: 0,
      explanation: "Even without significant transpiration pull, roots can actively transport mineral ions into the xylem, lowering its water potential relative to the surrounding soil and root tissue; this draws water into the xylem by osmosis, generating a modest positive root pressure that can push water partway up the plant independently of the much stronger tension normally generated by transpiration."
    },
    {
      q: "A section through a healthy artery shows a thick, muscular wall containing substantial elastic tissue, unlike the corresponding vein running alongside it. What is the primary functional reason for this structural difference?",
      options: ["Arteries must withstand and smooth out the high, pulsing pressure of blood pumped directly from the heart, unlike the much lower, steadier pressure in veins", "Veins carry blood at a higher pressure than arteries, requiring a thicker wall in the vein instead", "Arteries transport a different, more viscous type of blood than veins", "The structural difference has no functional significance and is simply due to developmental chance"],
      correct: 0,
      explanation: "Arteries carry blood at high, pulsing pressure directly from the heart, so their thick, muscular, and elastic walls are needed to withstand this pressure and smooth out the pulsing flow into a steadier pressure by the time blood reaches smaller vessels; veins, carrying blood at much lower pressure on the return journey to the heart, don't require this same structural reinforcement."
    },
    {
      q: "A researcher uses radioactively labelled carbon dioxide to trace the path of newly fixed carbon through a plant during a controlled photosynthesis experiment. Shortly after exposure, radioactive labelling is detected in the phloem of the stem, moving away from a actively photosynthesising leaf. What does this demonstrate about phloem transport?",
      options: ["Phloem transports the sugars produced by photosynthesis away from a source (a photosynthesising leaf) toward other parts of the plant", "Phloem transports water and minerals from the roots toward the leaves", "The radioactive label indicates phloem transport occurs exclusively at night", "Phloem transport can only occur when a plant is not actively photosynthesising"],
      correct: 0,
      explanation: "Detecting newly fixed radioactive carbon moving through the phloem away from an actively photosynthesising leaf directly demonstrates that phloem transports the sugars produced by photosynthesis from source tissues (like leaves) to sink tissues elsewhere in the plant, distinct from the separate, one-directional root-to-leaf transport of water and minerals carried out by the xylem."
    },
    {
      q: "A doctor examining a patient's ECG (electrocardiogram) trace identifies a distinct electrical signal corresponding to the depolarisation of the ventricles just before they contract. What is the functional significance of this electrical signal occurring before the mechanical contraction itself?",
      options: ["Electrical depolarisation of cardiac muscle cells triggers the release of calcium ions needed to initiate the mechanical contraction that follows shortly afterward", "The electrical signal has no functional connection to the mechanical contraction that follows", "Mechanical contraction always occurs before, rather than after, the corresponding electrical signal", "ECG traces measure mechanical contraction directly, not any electrical activity"],
      correct: 0,
      explanation: "In cardiac muscle, as in skeletal muscle, electrical depolarisation of the muscle cell membrane triggers the release of calcium ions, which then initiate the mechanical contraction of the muscle fibres; this is why the electrical signal recorded by an ECG (reflecting depolarisation) reliably precedes the corresponding mechanical contraction of the heart chambers by a fraction of a second."
    },
    {
      q: "A cross-section through a root shows xylem vessels arranged in a distinctive star-shaped pattern at the very centre, surrounded by other tissue types. What is one functional advantage of this centrally-positioned arrangement of xylem within a root?",
      options: ["A central position can provide mechanical resistance against the pulling and twisting forces a root experiences within the soil", "Central xylem placement is required for water to move by osmosis at all", "Central xylem placement prevents any mineral ions from ever entering the xylem", "Central xylem placement has no functional significance in root anatomy"],
      correct: 0,
      explanation: "In addition to its role in water transport, the lignified xylem tissue contributes to a root's mechanical strength; a centrally positioned xylem arrangement can help the root resist pulling and twisting forces from the surrounding soil, providing structural support in addition to the tissue's primary transport function."
    }
  ],

  "C2.2": [
    {
      q: "A local anaesthetic used by dentists works by blocking voltage-gated sodium channels in nearby sensory neurons. What would be the most direct consequence of this blockage for pain signal transmission?",
      options: ["Action potentials could not be generated in the affected neurons, since sodium influx is required for depolarisation", "Action potentials would be generated more frequently than normal in the affected neurons", "The resting membrane potential of the affected neurons would immediately become more negative than normal", "Pain signals would be transmitted faster than normal due to the blockage"],
      correct: 0,
      explanation: "Voltage-gated sodium channels are essential for the rapid depolarisation phase of an action potential, allowing sodium ions to rush into the neuron; blocking these channels prevents this depolarisation from occurring, meaning no action potential can be generated or propagated along the affected sensory neuron, which is exactly why local anaesthetics are effective at blocking pain signal transmission from the treated area."
    },
    {
      q: "A researcher measures the speed of nerve impulse conduction along two axons of similar diameter, one wrapped in a myelin sheath and one without. The myelinated axon conducts impulses considerably faster. What mechanism explains this difference?",
      options: ["Saltatory conduction, in which the impulse effectively jumps between exposed nodes of Ranvier along the myelinated axon", "The myelin sheath directly increases the axon's diameter, which alone accounts for the entire speed difference", "Unmyelinated axons cannot conduct nerve impulses at all", "Myelin sheaths increase the number of voltage-gated channels along the entire length of the axon"],
      correct: 0,
      explanation: "Myelin electrically insulates sections of the axon between exposed gaps called nodes of Ranvier, where voltage-gated channels are concentrated; because depolarisation only needs to occur at these nodes rather than continuously along the whole membrane, the nerve impulse can effectively jump from node to node (saltatory conduction), considerably increasing conduction speed compared with an unmyelinated axon of similar diameter."
    },
    {
      q: "A drug is found to prevent the enzyme acetylcholinesterase from breaking down acetylcholine within the synaptic cleft. What would be the most likely effect of this drug on synaptic transmission at a cholinergic synapse?",
      options: ["Prolonged and repeated stimulation of the postsynaptic membrane, since acetylcholine would remain in the cleft for longer than normal", "Complete prevention of any synaptic transmission at the affected synapse", "Faster than normal clearance of acetylcholine from the synaptic cleft", "No effect on synaptic transmission, since acetylcholinesterase plays no functional role"],
      correct: 0,
      explanation: "Acetylcholinesterase normally breaks down acetylcholine shortly after it binds its receptor, ensuring each nerve impulse produces only a brief, discrete signal; blocking this enzyme would allow acetylcholine to remain in the synaptic cleft for much longer than normal, causing prolonged, repeated stimulation of the postsynaptic membrane rather than the brief signal that would normally occur."
    }
  ],

  "C2.1": [
    {
      q: "A gardener notices that a potted plant kept on a windowsill grows with its stem bending noticeably toward the light source over several days. Which hormone is primarily responsible for this bending growth response, and what causes the uneven growth?",
      options: ["Auxin, which accumulates unevenly on the shaded side of the stem, promoting greater cell elongation there", "Auxin, which accumulates evenly throughout the stem regardless of light direction", "Ethylene, which is entirely unrelated to directional light responses", "Cytokinin, which inhibits cell elongation on the illuminated side only"],
      correct: 0,
      explanation: "Uneven distribution of auxin, redistributed toward the shaded side of the shoot in response to a directional light source, causes greater cell elongation on that shaded side compared with the illuminated side; this differential growth causes the shoot to bend toward the light, the basis of the phototropic response, mediated by auxin rather than other plant hormones like ethylene or cytokinin."
    },
    {
      q: "A patient's blood glucose remains persistently elevated after meals because their liver and muscle cells fail to respond normally to insulin, despite the pancreas producing insulin in normal amounts. What term describes this condition, and what does it indicate about the target cells?",
      options: ["Insulin resistance, indicating the target cells' response to insulin binding is impaired despite normal hormone levels", "Type 1 diabetes, indicating the pancreas has stopped producing insulin altogether", "Hypoglycaemia, indicating blood glucose levels are abnormally low rather than high", "Hyperthyroidism, indicating a problem with thyroid hormone rather than insulin"],
      correct: 0,
      explanation: "Insulin resistance describes a condition in which target cells (such as liver and muscle cells) respond less effectively to insulin than normal, even when the hormone is present in adequate or even elevated amounts; this is distinct from type 1 diabetes, where the underlying problem is a lack of insulin production rather than an impaired cellular response to it."
    },
    {
      q: "A steroid hormone such as testosterone is able to diffuse directly through the plasma membrane of its target cells, unlike a peptide hormone such as insulin. What property of testosterone allows it to cross the membrane this way?",
      options: ["Testosterone is lipid-soluble, allowing it to pass directly through the hydrophobic core of the phospholipid bilayer", "Testosterone is water-soluble, allowing it to dissolve directly into the aqueous cytoplasm on contact", "Testosterone is much smaller than any peptide hormone, which is the sole reason it can cross the membrane", "Testosterone binds a membrane receptor first, then is actively transported across using ATP"],
      correct: 0,
      explanation: "As a steroid hormone, testosterone is lipid-soluble, meaning it can diffuse directly through the hydrophobic core of the phospholipid bilayer without needing a membrane receptor or active transport; once inside the cell, it can bind to an intracellular receptor and directly influence gene expression, a different mechanism from peptide hormones like insulin, which bind receptors on the outside of the cell membrane instead."
    }
  ],

  "C3.2": [
    {
      q: "A patient recovering from a viral infection is found to have high levels of a specific antibody in their blood several months later, even though the virus itself is no longer detectable. What is the most likely source of this ongoing antibody production?",
      options: ["Memory B-cells, generated during the initial infection, that can persist long-term and continue producing antibodies at a lower background level", "Phagocytes, which are responsible for antibody production during any immune response", "The virus itself, which must still be present somewhere in the body to explain the antibodies", "Helper T-cells, which directly produce antibodies rather than coordinating other immune cells"],
      correct: 0,
      explanation: "Memory B-cells generated during an initial infection can persist for months or years afterward, providing lasting immunity and, in some cases, continuing to produce a background level of antibody long after the pathogen itself has been cleared; phagocytes engulf pathogens directly rather than producing antibodies, and helper T-cells coordinate rather than directly produce antibodies themselves."
    },
    {
      q: "A newly developed vaccine uses a small fragment of a viral protein, rather than the whole virus, to stimulate immunity. What is the main advantage of this approach compared with using a whole, weakened virus?",
      options: ["It eliminates the small risk associated with using a live, even if weakened, pathogen, since no complete virus is present in the vaccine at all", "It guarantees a stronger immune response than any whole-virus vaccine could produce", "It removes the need for the immune system to produce any memory cells", "It allows the vaccine to provide immunity against every possible pathogen simultaneously"],
      correct: 0,
      explanation: "Because a fragment-based vaccine contains only an isolated piece of a viral protein rather than the complete virus, there is no risk of the vaccine itself causing an infection, even a mild one, unlike vaccines using a live, weakened whole virus; this makes fragment-based vaccines a safer option in some contexts, even though the immune response and level of protection produced can vary depending on the specific vaccine design."
    },
    {
      q: "A person exposed to a particular bacterial toxin for the first time shows a delayed immune response, taking several days to produce a significant amount of specific antibody. What best explains this initial delay?",
      options: ["Time is needed for the small number of matching B-lymphocytes to be identified, activated, and proliferate into a large population of antibody-secreting plasma cells", "Antibodies are always present in the blood from birth and require no time to be produced", "The delay indicates the innate immune system has completely failed to respond", "T-lymphocytes must first be entirely eliminated before any antibody response can begin"],
      correct: 0,
      explanation: "On a first exposure to a new antigen, only a small number of B-lymphocytes happen to have a matching receptor; time is needed for these specific cells to be identified, activated (often with help from helper T-cells), and to proliferate into a large clone of antibody-secreting plasma cells, explaining the several-day delay before a substantial antibody response develops on a first (primary) exposure."
    }
  ],

  "A2.3": [
    {
      q: "A virus infects a bacterial cell and immediately begins directing the host cell's machinery to produce new viral particles, eventually causing the cell to burst and release hundreds of new viruses. What is this reproductive strategy called?",
      options: ["The lytic cycle", "The lysogenic cycle", "Binary fission", "Conjugation"],
      correct: 0,
      explanation: "The lytic cycle describes a viral reproductive strategy in which the virus immediately hijacks the host cell's machinery to rapidly produce many new viral particles, ultimately causing the host cell to lyse (burst) and release these new viruses to infect further cells; this contrasts with the lysogenic cycle, in which the viral genome instead integrates into the host's chromosome and remains dormant for a period before eventually triggering lysis."
    }
  ],

};
