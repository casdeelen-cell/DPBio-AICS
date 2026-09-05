/*
  paper2.js
  ---------
  Extended-response practice questions ("Paper 2 style"), as distinct
  from the multiple-choice practice in questionbank.js. These are
  ADAPTED from real IB exam papers (Paper 1B and Paper 2 style
  questions), rewritten in original wording, same concept and
  difficulty. The site labels this section automatically, so no need
  to add a label yourself.

  Each topic maps to an array of question SETS. A set has:
  - context: a short scenario/intro shared by all parts (can be "")
  - parts: an array of { label, prompt, marks, guidance }
    - label: "a", "b", "c"... matching typical exam sub-part lettering
    - prompt: the command-term question text for that part
    - marks: the mark allocation for that part
    - guidance: a teaching-style explanation of what a strong answer
      covers (not a verbatim mark scheme, written in the site's voice)

  PAPER2["A1.1"] = [
    { context: "...", parts: [ { label: "a", prompt: "...", marks: 4, guidance: "..." } ] }
  ]
*/

const PAPER2 = {

  "A1.1": [
    {
      context: "The biochemist Albert Szent-Györgyi once remarked that life cannot exist without water. This question explores why that's true, from the molecular level up to whole-plant transport.",
      parts: [
        {
          label: "a",
          prompt: "Sketch and label a small group of water molecules to show how they interact with one another.",
          marks: 4,
          guidance: "A strong answer draws at least two water molecules, each showing the V-shaped arrangement of two hydrogen atoms bonded to one oxygen, with the O–H bonds drawn as covalent (solid lines). It marks a hydrogen bond as a dashed or dotted line connecting a hydrogen on one molecule to the oxygen on a neighbouring molecule, and labels partial charges (δ+ on the hydrogens, δ− on the oxygen) to show why the attraction occurs."
        },
        {
          label: "b",
          prompt: "Outline what happens when animal cells and plant cells are placed in pure water.",
          marks: 4,
          guidance: "Pure water is hypotonic to the cell's cytoplasm, so water enters both cell types by osmosis (via aquaporins and directly across the membrane). In an animal cell this uncontrolled influx causes swelling and potentially lysis, since there's no wall to resist the pressure. In a plant cell, water entry increases turgor pressure, but the cell wall pushes back and prevents bursting, so the cell becomes turgid rather than lysing."
        },
        {
          label: "c",
          prompt: "Explain the process of transpiration and describe how the structure of xylem vessels supports the movement of water from roots to leaves.",
          marks: 7,
          guidance: "Transpiration is the evaporative loss of water vapour from the leaf, mainly through the stomata; this evaporation from the walls of mesophyll cells draws water from neighbouring cells, which in turn pulls water out of the xylem, creating tension that draws a column of water up the stem. This works because of cohesion (hydrogen bonding between water molecules, keeping the water column continuous and unbroken under tension) and adhesion (hydrogen bonding between water and the polar walls of the xylem, assisting capillary movement). Xylem vessels are adapted for this role by lacking living contents (allowing unimpeded flow), having lignified walls (able to withstand the tension without collapsing), and having little or no end walls and occasional pits (allowing continuous, efficient flow along and between vessels)."
        }
      ]
    },
    {
      context: "Water's unusual properties, especially compared with air, shape how living things cope with their surroundings.",
      parts: [
        {
          label: "a",
          prompt: "Compare a physical property of water with the equivalent property of air.",
          marks: 2,
          guidance: "Choose one property and compare directly: for example, water has a much higher specific heat capacity than air (due to hydrogen bonding), or water has a much higher viscosity and density than air. The comparison must be explicitly relative — stating a property is simply 'high' or 'low' isn't enough; it needs to be compared against the other medium."
        },
        {
          label: "b",
          prompt: "Describe two physical adaptations that help a diving mammal, such as a seal, survive in cold water.",
          marks: 2,
          guidance: "Suitable adaptations include a thick blubber layer for insulation (and buoyancy), streamlined body shape and flipper-like limbs for efficient movement through the denser medium, and physiological adaptations like the ability to hold their breath for extended periods while diving."
        },
        {
          label: "c",
          prompt: "State which trophic level zooplankton typically occupy in an aquatic food chain.",
          marks: 1,
          guidance: "Zooplankton are usually primary consumers, since they feed directly on phytoplankton (the producers)."
        }
      ]
    },
    {
      context: "The chemical and physical properties of water make it an essential medium for life, underpinning everything from body temperature regulation to long-distance transport within plants.",
      parts: [
        {
          label: "a",
          prompt: "Outline how water acts as a coolant when sweating.",
          marks: 3,
          guidance: "Sweat evaporates from the skin's surface, changing from liquid to vapour; this requires breaking the hydrogen bonds between water molecules, which takes a large amount of thermal energy. Because this energy is drawn from the surrounding skin, evaporation removes heat from the body; water's unusually high latent heat of vaporization makes it especially efficient at removing heat this way (distinct from specific heat capacity, which describes a different property)."
        },
        {
          label: "b",
          prompt: "Describe how the kidney regulates water content when the body is dehydrated.",
          marks: 5,
          guidance: "When the body is dehydrated (blood is hypertonic, with too high a solute concentration), the posterior pituitary gland secretes ADH; ADH increases the number of aquaporin channels in the collecting duct, making it more permeable to water. This allows more water to be reabsorbed from the filtrate back into the blood by osmosis, since the surrounding medulla tissue is hypertonic relative to the filtrate; the reabsorbed water passes into the surrounding capillaries, producing a smaller volume of more concentrated urine and helping restore the blood's water balance."
        },
        {
          label: "c",
          prompt: "Explain how water is transported from the soil to the atmosphere in flowering plants.",
          marks: 7,
          guidance: "Water first enters root hair cells by osmosis, their large surface area aiding uptake; active transport of mineral ions into the root increases the concentration gradient driving further water uptake. Water then enters the xylem and is transported upward through the plant. In the leaves, water evaporates from the walls of mesophyll cells into internal air spaces and is lost through open stomata (transpiration); this evaporation generates a negative pressure (tension) that pulls more water up through the xylem to replace what's lost, a continuous process relying on the cohesive and adhesive properties of water to maintain an unbroken column all the way from soil to atmosphere."
        }
      ]
    }
  ],

  "D2.3": [
    {
      context: "In a classic experiment, frog egg cells injected with mRNA coding for aquaporin (a water channel protein) were compared with uninjected control cells to investigate osmotic water movement.",
      parts: [
        {
          label: "a",
          prompt: "When both aquaporin-injected and control frog egg cells were placed into a hypotonic solution, water moved into all the cells. State the direction of the water potential gradient that drives this movement.",
          marks: 1,
          guidance: "Water moves from the hypotonic solution (higher/less negative water potential, since it has fewer solutes) into the cell's cytoplasm (lower/more negative water potential), down the water potential gradient."
        },
        {
          label: "b",
          prompt: "Explain why cells injected with aquaporin mRNA would be expected to take up water faster than uninjected control cells in the same hypotonic solution.",
          marks: 2,
          guidance: "Cells injected with aquaporin mRNA translate it into functional aquaporin channel proteins, which are inserted into the plasma membrane; these channels dramatically increase the membrane's permeability to water, facilitating a much faster rate of osmotic water movement compared with control cells relying only on the much slower diffusion of water directly through the phospholipid bilayer."
        },
        {
          label: "c",
          prompt: "Suggest why there is typically a short delay between injecting a cell with mRNA and observing the resulting effect on the cell's behaviour.",
          marks: 2,
          guidance: "Time is needed for the injected mRNA to be translated by ribosomes into a functional protein, and further time may be required for any post-translational modification and for the finished protein to be transported to and correctly inserted into the plasma membrane before it can begin to function — all of which introduces a lag between introducing the mRNA and seeing its physiological effect."
        }
      ]
    }
  ],

  "B1.1": [
    {
      context: "Sucrose, a disaccharide made of glucose and fructose, must be broken down and its products transported before the body can use them.",
      parts: [
        {
          label: "a",
          prompt: "State the type of reaction that breaks a disaccharide like sucrose down into its component monosaccharides.",
          marks: 1,
          guidance: "Hydrolysis (a reaction that uses a water molecule to break the glycosidic bond)."
        },
        {
          label: "b",
          prompt: "Describe how capillaries are adapted for the efficient exchange of monosaccharides with surrounding tissue.",
          marks: 2,
          guidance: "Capillaries branch extensively, giving a very large total surface area for exchange, and their walls are only one cell thick, minimising the diffusion distance between the blood and surrounding cells; together these features allow rapid exchange of small molecules like glucose and fructose."
        },
        {
          label: "c",
          prompt: "Outline how fructose could cross a cell membrane by facilitated diffusion.",
          marks: 2,
          guidance: "Facilitated diffusion moves a substance passively, down its concentration gradient, without requiring ATP; fructose (a relatively large, polar molecule) cannot cross the hydrophobic core of the membrane unaided, so it passes through specific channel or carrier proteins embedded in the membrane, which provide a pathway across."
        }
      ]
    },
    {
      context: "All living organisms require a reliable, efficient way to store chemical energy, and different classes of biological molecule handle this job in different ways.",
      parts: [
        {
          label: "a",
          prompt: "Outline three characteristics of polysaccharides that make them efficient molecules for energy storage.",
          marks: 3,
          guidance: "Polysaccharides such as starch and glycogen coil or branch into compact shapes, taking up relatively little storage space for the amount of energy they contain; their large size makes them poorly soluble in water, so they don't disturb a cell's water potential the way a high concentration of free glucose would; and their monomers (glucose units) can be added relatively easily by condensation reactions to build up storage, or removed by hydrolysis to quickly release energy when needed."
        }
      ]
    },
    {
      context: "Triglycerides are the main form of long-term energy storage in animals, and their chemical structure directly explains why they are so well suited to this role.",
      parts: [
        {
          label: "a",
          prompt: "Identify the type of reaction used to join a fatty acid to the glycerol backbone of a triglyceride.",
          marks: 1,
          guidance: "Condensation (a reaction that joins two molecules together while releasing a water molecule)."
        },
        {
          label: "b",
          prompt: "State the type of fatty acid that would produce a distinct kink in its hydrocarbon chain due to a double bond.",
          marks: 1,
          guidance: "A cis-unsaturated (monounsaturated or polyunsaturated) fatty acid, since a cis configuration around a double bond forces a bend into the chain, unlike the straighter shape of a saturated or trans-unsaturated chain."
        },
        {
          label: "c",
          prompt: "Explain why more energy is released from one gram of triglyceride than from one gram of glucose during respiration.",
          marks: 2,
          guidance: "Energy in respiration is released through oxidation reactions, and triglycerides contain proportionally more carbon-carbon and carbon-hydrogen bonds per gram than carbohydrates like glucose, meaning they are in a more reduced (less oxidised) state to begin with; because more oxidation can occur per gram of triglyceride, more energy is released per gram compared with the same mass of glucose."
        }
      ]
    },
    {
      context: "Carbon is an essential component of living matter, forming around half of all dry biomass and appearing in an enormous variety of biological compounds, from structural polysaccharides to the sugars fixed during photosynthesis.",
      parts: [
        {
          label: "a",
          prompt: "Describe how cellulose is formed from monosaccharides.",
          marks: 3,
          guidance: "Cellulose is built from beta-glucose monomers, linked together by glycosidic bonds formed through condensation reactions (removing a water molecule at each linkage). Because only 1-4 glycosidic bonds form between consecutive beta-glucose units, the resulting molecule is unbranched; alternating orientations of the glucose units keep the resulting chain straight, and cross-linking (via hydrogen bonds) between neighbouring cellulose chains bundles them into strong microfibrils, giving cellulose its considerable tensile strength."
        }
      ]
    },
    {
      context: "All life is built on carbon compounds, and carbon moves continuously between the atmosphere, living organisms, and back again.",
      parts: [
        {
          label: "b",
          prompt: "Outline how carbon compounds are produced in cells using light energy.",
          marks: 5,
          guidance: "Carbon compounds are produced in cells through photosynthesis, occurring in the chloroplasts of plant cells using chlorophyll; chlorophyll strongly absorbs red and blue light while reflecting green light. Using carbon dioxide and water as starting materials, light energy drives the light-dependent reactions, producing ATP and NADPH; these products then power the light-independent (Calvin cycle) reactions, which fix carbon dioxide and use the energy from ATP and NADPH to build organic carbon compounds such as glucose."
        },
        {
          label: "c",
          prompt: "Explain the transformations of carbon compounds within the carbon cycle.",
          marks: 7,
          guidance: "Autotrophs (producers) convert atmospheric or dissolved carbon dioxide into carbohydrates and other carbon compounds through photosynthesis; this carbon is then transferred through food chains as consumers feed on producers and on each other. Cellular respiration, carried out by producers, consumers, and decomposers alike, releases carbon dioxide back into the atmosphere or water as organic compounds are broken down; some carbon is stored for long periods in fossil fuels, limestone, or forest biomass, while combustion of fossil fuels and decomposition of dead organic matter both return stored carbon back into circulation, completing the cycle."
        }
      ]
    },
    {
      context: "Mammals store fat while plants store oil, and both are types of triglyceride, yet they differ in one important physical property: their solubility in water.",
      parts: [
        {
          label: "a",
          prompt: "Outline how plants make oils using carbon originally obtained from the atmosphere.",
          marks: 4,
          guidance: "Photosynthesis uses atmospheric carbon dioxide as a raw material, ultimately producing glucose and other carbon compounds; fatty acids (and the oils built from them) are derived from these carbon compounds. Oils are formed by linking three fatty acid molecules to a single glycerol molecule through condensation reactions, with the carboxyl group of each fatty acid bonding to a hydroxyl group on the glycerol, building up the triglyceride structure using carbon that ultimately originated from atmospheric CO2."
        },
        {
          label: "b",
          prompt: "Explain why oils are insoluble in water, while sugars such as glucose are soluble.",
          marks: 4,
          guidance: "Glucose is a polar molecule and readily forms hydrogen bonds with surrounding water molecules, making it hydrophilic and therefore soluble; oil molecules, by contrast, are largely made of non-polar hydrocarbon chains that cannot form hydrogen bonds with water, making them hydrophobic. Because oil molecules are more strongly attracted to each other than to water molecules, they tend to clump together and separate out from water rather than dissolving into it."
        },
        {
          label: "c",
          prompt: "Explain how a diet rich in fat might contribute to the development of poor cardiovascular health.",
          marks: 7,
          guidance: "A fat-rich diet, particularly one high in saturated or trans fats and cholesterol, can lead to excess fat being deposited within the walls of arteries, forming atheroma (fatty plaque); this plaque narrows the artery and creates a rough surface, which can trigger the formation of a blood clot (thrombus) at that site. If such a clot forms in a coronary artery supplying the heart, it can block blood flow and cause a heart attack; narrowed, less elastic arteries generally also increase blood pressure over time, further raising the risk of cardiovascular disease."
        }
      ]
    }
  ],

  "C1.1": [
    {
      context: "Cyanide is a naturally occurring compound known to inhibit cellular respiration, but paradoxically it also stimulates seed germination in some plant species — a pattern worth thinking through mechanistically even without the original experimental graph in front of you.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in general terms, how an inhibitor like cyanide can interfere with an enzyme-catalysed reaction such as a step in cellular respiration.",
          marks: 3,
          guidance: "Cyanide acts as a non-competitive-style inhibitor of a key respiratory enzyme, binding to a site on the enzyme and altering its shape so it can no longer catalyse the reaction efficiently; because this particular enzyme is critical to the electron transport chain, blocking it disrupts ATP production via aerobic respiration."
        },
        {
          label: "c",
          prompt: "Suggest why a hypothesis about the 'optimum' concentration or exposure time for a chemical's effect can rarely be confirmed from a single experiment with only a few tested conditions.",
          marks: 2,
          guidance: "If only a limited number of discrete concentrations or exposure times were tested, it's possible that an even more effective condition exists somewhere between the tested values that simply wasn't measured; a hypothesis about a true optimum can only be properly supported by testing a much finer range of conditions around the apparent best-performing one."
        }
      ]
    },
    {
      context: "Enzyme inhibitors can act in different ways depending on where and how they bind to their target enzyme, with important consequences for how their effect can (or cannot) be reversed.",
      parts: [
        {
          label: "c",
          prompt: "Distinguish between competitive and non-competitive enzyme inhibition.",
          marks: 4,
          guidance: "A competitive inhibitor closely resembles the enzyme's natural substrate and binds directly to the active site, physically blocking the substrate from binding; because it's competing for the same site, its inhibitory effect can be reduced or overcome by increasing substrate concentration. A non-competitive inhibitor, by contrast, binds to a different site on the enzyme (not the active site itself), causing a change in the enzyme's overall shape that distorts the active site indirectly; because it doesn't compete directly with the substrate for the same site, increasing substrate concentration cannot overcome a non-competitive inhibitor's effect in the same way."
        }
      ]
    }
  ],

  "A1.2": [
    {
      context: "Watson and Crick's discovery of the DNA double helix underpins our modern understanding of genes and inheritance.",
      parts: [
        {
          label: "a",
          prompt: "State the name given to the repeating monomer units that make up a DNA strand.",
          marks: 1,
          guidance: "Nucleotides."
        },
        {
          label: "b",
          prompt: "Distinguish between the structure of DNA and RNA.",
          marks: 2,
          guidance: "A good answer draws clear contrasts on at least two points: DNA is double-stranded while RNA is typically single-stranded; DNA contains deoxyribose while RNA contains ribose; and DNA uses thymine as a base while RNA uses uracil in its place. Each point needs both sides of the comparison stated, not just a description of DNA alone."
        },
        {
          label: "c",
          prompt: "Pea plants can carry a recessive allele for short stems that isn't visible in a heterozygous plant's phenotype. Explain why a recessive allele isn't always expressed.",
          marks: 3,
          guidance: "Phenotype is the observable expression of an organism's genotype. A diploid organism carries two alleles for each gene, and can be homozygous (two identical alleles) or heterozygous (two different alleles). When a dominant and a recessive allele are both present (heterozygous), the dominant allele's product masks the effect of the recessive one, so the recessive phenotype only appears in the homozygous recessive genotype."
        }
      ]
    }
  ],

  "D1.1": [
    {
      context: "In 1952, Hershey and Chase used radioactively labelled viruses to help settle a long-running debate over whether genes were made of DNA or protein.",
      parts: [
        {
          label: "a",
          prompt: "Hershey and Chase infected bacteria with viruses labelled with radioactive sulfur (35S, found in protein) or radioactive phosphorus (32P, found in DNA), then measured how much of each isotope remained outside the bacterial cells after infection. Suggest what a much lower percentage of 32P (compared with 35S) remaining outside the cells would indicate.",
          marks: 1,
          guidance: "A low percentage of 32P remaining outside the cells suggests that most of the phosphorus-labelled material (DNA) had entered the bacteria, while most of the sulfur-labelled material (protein) had stayed outside."
        },
        {
          label: "b",
          prompt: "Explain how this kind of result provides evidence that DNA, rather than protein, is the genetic material of the cell.",
          marks: 3,
          guidance: "Since phosphorus is a component of DNA but not protein, and sulfur is found in some amino acids but not DNA, tracking each isotope separately reveals which molecule actually entered the bacterial cell during infection. If DNA (32P) enters the cell while the protein coat (35S) remains outside, this supports DNA as the molecule responsible for directing the production of new virus particles inside the host — that is, the genetic material — while the protein capsid plays no role once its (DNA) contents have been delivered."
        }
      ]
    },
    {
      context: "The confirmation of DNA as the genetic material, together with Watson and Crick's elucidation of its structure, had a profound effect on modern biology, informing our understanding of how genetic variation arises and how species diverge.",
      parts: [
        {
          label: "a",
          prompt: "Outline the reason that DNA replication is described as semi-conservative.",
          marks: 3,
          guidance: "Replication produces new DNA strands using the two original strands as templates; free nucleotides pair with exposed bases on each template strand through complementary base pairing. Because both original strands act as templates, each of the two resulting double helices ends up with one original (old) strand and one newly synthesised strand, rather than either strand being entirely new or entirely conserved, which is exactly what 'semi-conservative' describes."
        }
      ]
    },
    {
      context: "DNA's structure and the enzymes responsible for copying it accurately are central to how genetic information is preserved and passed on.",
      parts: [
        {
          label: "a",
          prompt: "Describe the structure of the DNA molecule.",
          marks: 5,
          guidance: "DNA is a double helix made of two strands running antiparallel to one another (one strand runs 5' to 3', the other 3' to 5'); each strand has a sugar-phosphate backbone formed from a chain of nucleotides, and each nucleotide consists of a phosphate group, a deoxyribose sugar, and one of four nitrogenous bases. The two strands are held together by hydrogen bonds between complementary base pairs (adenine with thymine, guanine with cytosine)."
        },
        {
          label: "b",
          prompt: "Outline the role of three named enzymes involved in DNA replication.",
          marks: 3,
          guidance: "Helicase unwinds and separates the two DNA strands ahead of the replication fork by breaking the hydrogen bonds between them; DNA gyrase (topoisomerase) relieves the tension and prevents supercoiling that builds up ahead of the unwinding helix. Primase synthesises short RNA primers to provide a starting point for DNA polymerase; DNA polymerase III then adds new DNA nucleotides in a 5' to 3' direction, while DNA polymerase I later removes the RNA primers and replaces them with DNA."
        }
      ]
    }
  ],

  "D2.1": [
    {
      context: "Every member of a species typically has the same characteristic chromosome number, which must be carefully maintained across both sexual and asexual reproduction.",
      parts: [
        {
          label: "a",
          prompt: "Explain why both meiosis and fertilization (fusion of gametes) are necessary parts of a sexual life cycle.",
          marks: 4,
          guidance: "Meiosis halves the chromosome number, producing haploid gametes from diploid parent cells; without this halving step, fertilization (which combines two gametes) would double the chromosome number every generation. Fusion of gametes at fertilization restores the diploid number in the resulting zygote, so together, meiosis and fertilization keep the chromosome number stable and constant across generations, rather than doubling indefinitely."
        },
        {
          label: "b",
          prompt: "Describe the events during interphase and mitosis that ensure the chromosome number remains constant during asexual reproduction.",
          marks: 7,
          guidance: "During the S phase of interphase, the cell's entire DNA content is replicated, so each chromosome consists of two identical sister chromatids joined at a centromere by the start of mitosis. During mitosis, the chromosomes condense and align at the cell's equator (metaphase), and the sister chromatids are then separated and pulled to opposite poles by shortening spindle microtubules (anaphase), so each resulting daughter cell receives one complete, identical copy of every chromosome. This ensures both daughter cells end up with the same chromosome number as the original parent cell, rather than differing amounts."
        },
        {
          label: "c",
          prompt: "Discuss the reproductive barriers that normally prevent hybridization between different species, and explain how polyploidy can sometimes overcome them.",
          marks: 4,
          guidance: "Reproductive barriers can be behavioural (different courtship rituals preventing mating), temporal (different breeding seasons), or geographic (physical separation preventing contact); even where mating does occur between species, resulting hybrids are often sterile because their mismatched chromosome sets cannot pair properly during meiosis. Polyploidy — an increase in the number of complete chromosome sets — can sometimes restore fertility in a hybrid by providing each chromosome with a matching homologous partner for pairing during meiosis, allowing a new, reproductively isolated polyploid species to form, a mechanism especially important in plant evolution."
        }
      ]
    },
    {
      context: "Hereditary information stored in DNA must be faithfully copied and distributed every time a cell divides, so that new cells receive a complete, accurate set of genetic instructions.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the behaviour of chromosomes during mitosis ensures that genetically identical daughter cells are produced.",
          marks: 4,
          guidance: "DNA replication during interphase (S phase) produces two genetically identical DNA molecules for each chromosome, held together as sister chromatids at a shared centromere; during prophase, these replicated chromosomes condense and become visible, and by metaphase they align individually along the equator of the cell. During anaphase, the sister chromatids of each chromosome are pulled apart to opposite poles by shortening spindle fibres, so that each pole receives one complete, identical copy of every chromosome; after the nuclear envelope reforms and the cell divides, both resulting daughter cells therefore contain an identical set of chromosomes to the original parent cell."
        }
      ]
    },
    {
      context: "Down syndrome, caused by an extra copy of chromosome 21, arises from a specific type of error during the production of gametes.",
      parts: [
        {
          label: "b",
          prompt: "Describe how non-disjunction can cause Down syndrome.",
          marks: 4,
          guidance: "Down syndrome results from trisomy 21, an extra copy of chromosome 21; this arises from non-disjunction, the failure of chromosomes to separate correctly during meiosis. If a pair of homologous chromosome 21s fails to separate during anaphase I (or if sister chromatids fail to separate during anaphase II), one resulting gamete ends up with an extra copy of chromosome 21 while the other lacks one entirely. If the gamete with the extra copy is fertilized by a normal gamete, the resulting zygote has three copies of chromosome 21 instead of the usual two, a chromosomal abnormality that most often arises during egg (rather than sperm) formation, and whose likelihood increases with maternal age."
        }
      ]
    },
    {
      context: "Sexual reproduction depends on a specific reduction in chromosome number occurring at a precise point in the life cycle, without which chromosome numbers would double indefinitely across generations.",
      parts: [
        {
          label: "b",
          prompt: "Explain the need for halving the chromosome number during a sexual life cycle, and how this is achieved.",
          marks: 7,
          guidance: "If gametes were diploid like ordinary body cells, fertilization would double the chromosome number every generation; halving the chromosome number in gametes ensures the resulting zygote has the same chromosome number as each parent, rather than double. This halving is achieved through meiosis: DNA first replicates so each chromosome consists of two sister chromatids, then homologous chromosomes pair up during prophase I and separate during anaphase I, halving the chromosome number; a second division (meiosis II), mechanically similar to mitosis, then separates the sister chromatids, ultimately producing four haploid cells from one original diploid cell."
        }
      ]
    },
    {
      context: "The nucleus of a eukaryotic cell undergoes a series of carefully ordered events during both interphase and mitosis, ensuring genetic material is accurately copied and then distributed to daughter cells.",
      parts: [
        {
          label: "a",
          prompt: "Outline the sequence of events that occurs during mitosis.",
          marks: 5,
          guidance: "Mitosis begins with the supercoiling (condensation) of chromosomes, making them visible under a microscope, followed by breakdown of the nuclear membrane; spindle fibres (microtubules) then grow and attach to the centromere of each chromosome. Chromosomes line up along the equator of the cell (metaphase), after which each chromosome's centromere divides and sister chromatids separate, pulled to opposite poles by the shortening spindle fibres (anaphase); finally, the chromosomes decondense, nuclear membranes reform around each set of chromosomes, and the cytoplasm divides (cytokinesis), producing two genetically identical daughter cells."
        },
        {
          label: "b",
          prompt: "Describe the processes that occur in the nucleus of a cell during interphase.",
          marks: 7,
          guidance: "During interphase, DNA is replicated ahead of the coming division: the double helix is unwound (by helicase, with gyrase relaxing supercoiling ahead of it), hydrogen bonds between the two strands are broken, and new complementary strands are synthesised by DNA polymerase using each original strand as a template, a semi-conservative process producing two identical DNA molecules from each original chromosome. Alongside DNA replication, interphase also involves transcription of genes into mRNA, translation of that mRNA into proteins, and general growth of the cell along with replication of organelles such as mitochondria, all in preparation for eventual cell division."
        },
        {
          label: "c",
          prompt: "Explain how the presence of a Y chromosome in the cells of a human embryo causes it to develop as male.",
          marks: 3,
          guidance: "A gene located on the Y chromosome (the SRY gene) triggers the developing embryonic gonads to become testes rather than ovaries; once formed, these developing testes begin secreting testosterone, and this testosterone is what drives the development of male genitalia and other male reproductive structures in the embryo, a cascade of events triggered by the initial presence of the Y chromosome and its SRY gene."
        }
      ]
    },
    {
      context: "Genetic information ultimately directs the production of every protein a body needs, and the process by which this genetic information is reshuffled between generations is central to explaining biological variation.",
      parts: [
        {
          label: "c",
          prompt: "Explain the stages and processes of meiosis that lead to genetic variation.",
          marks: 7,
          guidance: "Meiosis divides one diploid nucleus to produce four haploid nuclei, halving the chromosome number in the process; at the start of meiosis, each chromosome consists of two sister chromatids, produced by earlier DNA replication. During prophase I, homologous chromosomes pair up, and crossing over occurs between non-sister chromatids of these paired homologues, exchanging genetic material and producing new combinations of alleles not present in either original chromosome. During metaphase I, homologous pairs align randomly along the equator (independent assortment), meaning the specific combination of maternal and paternal chromosomes distributed to each resulting cell varies randomly between different meiotic divisions; together, crossing over and independent assortment generate substantial genetic variation among the haploid gametes ultimately produced."
        }
      ]
    }
  ],

  "B1.2": [
    {
      context: "The properties of the twenty different amino acids, and the ways they can bond together, give rise to an enormous range of protein shapes and functions.",
      parts: [
        {
          label: "a",
          prompt: "State the products formed when two amino acids join together in a condensation reaction.",
          marks: 1,
          guidance: "A dipeptide and a water molecule."
        },
        {
          label: "b",
          prompt: "Describe how the variety among amino acid R-groups allows proteins to take on such a broad range of forms.",
          marks: 2,
          guidance: "Different R-groups vary in their properties (some hydrophobic, some hydrophilic; some acidic, some basic), which allows them to form different types of interactions and bonds with each other (such as hydrogen bonds, ionic bonds, or disulfide bridges); these differing interactions determine how a polypeptide chain folds and how soluble the resulting protein is, producing enormous structural diversity from just twenty building blocks."
        },
        {
          label: "c",
          prompt: "Titin, the longest protein in the human body, contains regions where sections of the polypeptide run alongside each other, linked by hydrogen bonds between their backbones. Identify this type of secondary structure and describe how it is held together.",
          marks: 2,
          guidance: "This describes a beta-pleated sheet, in which sections of the polypeptide chain (running parallel or antiparallel to each other) are held in a folded, sheet-like arrangement by hydrogen bonds forming between the N–H and C=O groups of amino acids on adjacent strands."
        }
      ]
    },
    {
      context: "Proteins are essential molecules found in every living organism, built from amino acids and broken down again through digestion when consumed as food.",
      parts: [
        {
          label: "a",
          prompt: "Sketch a labelled diagram showing the formation of a peptide bond between two amino acids.",
          marks: 3,
          guidance: "A strong answer draws two amino acids, each with an amino group, carboxyl group, and R-group, positioned so the carboxyl group of one is adjacent to the amino group of the other; a water molecule is shown being released as the bond forms (a condensation reaction), and the resulting peptide bond is labelled specifically between the carbon of the C=O group on one amino acid and the nitrogen of the N-H group on the other."
        },
        {
          label: "b",
          prompt: "Outline how proteins are digested and how the resulting products are absorbed in humans.",
          marks: 4,
          guidance: "Proteins are broken down by peptidase (protease) enzymes; pepsin, secreted by the stomach lining, begins digesting proteins into shorter chains in the acidic stomach environment. The pancreas then secretes further peptidases (such as trypsin) into the small intestine, breaking polypeptides down into progressively shorter chains and eventually individual amino acids; these amino acids are absorbed across the wall of the small intestine (largely via active transport) into the bloodstream, to be used elsewhere in the body."
        },
        {
          label: "c",
          prompt: "Explain how polypeptides are produced by the process of translation.",
          marks: 8,
          guidance: "Translation begins when mRNA binds to a ribosome; tRNA-activating enzymes (aminoacyl-tRNA synthetases) attach each specific amino acid to its corresponding tRNA molecule beforehand, using ATP. Each tRNA has a three-base anticodon complementary to a specific mRNA codon; translation starts at the start codon (AUG), where a tRNA carrying methionine binds. The ribosome then moves along the mRNA in a repeated cycle: a new tRNA carrying its amino acid binds to the next codon, a peptide bond forms between the new amino acid and the growing chain, and the ribosome shifts along by one codon, ejecting the now-empty tRNA; this cycle repeats until a stop codon is reached, at which point the completed polypeptide is released."
        }
      ]
    },
    {
      context: "Proteins are built from a common set of building blocks, yet gene expression allows cells to produce an enormous variety of different proteins, each suited to a very different function.",
      parts: [
        {
          label: "a",
          prompt: "Outline the general structure of proteins.",
          marks: 3,
          guidance: "Proteins are built from twenty different amino acids, linked together by peptide bonds into one or more polypeptide chains; a protein may consist of a single polypeptide or several polypeptides joined together (quaternary structure). Each protein folds into a specific three-dimensional shape (conformation), and this shape is what ultimately determines the protein's function."
        },
        {
          label: "b",
          prompt: "Cells produce a large variety of proteins with different amino acid sequences. Explain how this variety is generated.",
          marks: 7,
          guidance: "A specific protein is produced when the gene coding for it is expressed (switched on); the genetic code, made up of codons (triplets of three DNA/mRNA bases), specifies the sequence of amino acids for that protein. The gene's DNA sequence is transcribed into mRNA in the nucleus, and this mRNA then exits the nucleus and is translated at a ribosome into a specific polypeptide chain. Because different genes have different base sequences, and therefore code for different sequences of codons, translating different genes produces polypeptides with entirely different amino acid sequences, explaining the vast diversity of proteins a cell is capable of producing from the same twenty amino acid building blocks."
        },
        {
          label: "c",
          prompt: "Outline the range of functions carried out by proteins within cells.",
          marks: 5,
          guidance: "Proteins function as enzymes, catalysing and controlling the rate of metabolic reactions; some act as hormones, serving as chemical messengers between cells. Membrane transport proteins (channels, carriers, and pumps) regulate what substances enter or leave a cell, while structural proteins (such as collagen) provide mechanical support to tissues. Other proteins, like haemoglobin, are specialised for transport (in this case, of oxygen in the blood), and antibodies are proteins with a defence role, illustrating just how broad a range of cellular functions proteins are capable of performing."
        }
      ]
    },
    {
      context: "Proteins carry out an enormous range of essential functions in cells and organisms, but their function depends entirely on maintaining a precise three-dimensional shape.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of protein denaturation.",
          marks: 4,
          guidance: "Denaturation involves a change to a protein's conformation (its overall three-dimensional shape, specifically its tertiary structure), caused by the breaking or disruption of the intramolecular bonds holding that shape together. This typically occurs when a protein is exposed to conditions outside its tolerated range, such as extreme pH or high temperature; excessive heat causes molecular vibrations that break these bonds, while extreme pH disrupts the ionic and hydrogen bonds that depend on a stable balance of charge, in both cases irreversibly distorting the protein's shape and, usually, destroying its normal function."
        }
      ]
    },
    {
      context: "Cellulose gives plant cell walls their characteristic strength, and this strength must be temporarily and precisely relaxed whenever a plant cell needs to grow.",
      parts: [
        {
          label: "a",
          prompt: "Describe the structure of cellulose molecules.",
          marks: 3,
          guidance: "Cellulose is built from beta-glucose monomers, linked together by glycosidic bonds forming specifically between carbon 1 of one glucose and carbon 4 of the next, through condensation reactions; because of the particular orientation of beta-glucose subunits, the resulting chain is unbranched and straight (rather than helical or branched, as seen in starch or glycogen). Many of these straight cellulose chains bundle together, cross-linked by hydrogen bonds, forming strong microfibrils responsible for cellulose's structural strength."
        },
        {
          label: "c",
          prompt: "When a plant cell grows, its cell wall must expand to accommodate the increase in size. Explain the role of auxin in this process.",
          marks: 2,
          guidance: "Auxin stimulates the transcription and expression of specific genes within the target cell; among its effects, it stimulates proton pumps in the plasma membrane, actively moving hydrogen ions out into the cell wall. This lowers the pH within the cell wall, which loosens the connections between cellulose microfibrils (partly by activating enzymes that break some of the cross-linking bonds), allowing the wall to expand and stretch as the cell grows, before new cellulose is laid down to reinforce the enlarged wall."
        }
      ]
    }
  ],

  "A2.1": [
    {
      context: "Several competing hypotheses attempt to explain how the first living cells arose on early Earth, each supported by different kinds of evidence.",
      parts: [
        {
          label: "a",
          prompt: "Outline what the Miller-Urey experiment tested, and state one limitation of using its results as evidence for the origin of life.",
          marks: 3,
          guidance: "Miller and Urey sparked an electric discharge through a mixture of gases meant to represent early Earth's atmosphere, to test whether organic molecules could form abiotically. It demonstrated that amino acids and other small organic molecules could form under these conditions, but a key limitation is that it did not demonstrate how those molecules could assemble into a self-replicating, membrane-bound cell — a considerably larger and still unresolved step."
        },
        {
          label: "b",
          prompt: "Describe the endosymbiotic theory as an explanation for the origin of mitochondria and chloroplasts.",
          marks: 4,
          guidance: "The endosymbiotic theory proposes that mitochondria and chloroplasts were once free-living prokaryotes that were engulfed by a larger host cell and, rather than being digested, survived and formed a mutually beneficial relationship with the host. Evidence supporting this includes the fact that both organelles have their own circular DNA (like bacteria), their own ribosomes (of a similar, smaller size to bacterial ribosomes), and are surrounded by a double membrane, consistent with an origin as an engulfed cell."
        },
        {
          label: "c",
          prompt: "Suggest why the accumulation of oxygen in Earth's early atmosphere, produced by photosynthetic prokaryotes, was significant for the subsequent evolution of life.",
          marks: 3,
          guidance: "Rising atmospheric oxygen allowed the evolution of aerobic respiration, a far more efficient way of releasing energy from organic molecules than anaerobic pathways, which could have supported the evolution of larger, more complex, energy-demanding organisms. It also led to the formation of the ozone layer, which absorbs harmful ultraviolet radiation and made it possible for life to survive on land rather than being confined to water."
        }
      ]
    },
    {
      context: "Organisms have evolved a remarkable diversity of cell types, and one influential theory explains how the complex, compartmentalised eukaryotic cell itself first arose.",
      parts: [
        {
          label: "a",
          prompt: "Describe the endosymbiotic theory.",
          marks: 4,
          guidance: "The endosymbiotic theory proposes that eukaryotic cells evolved from prokaryotes, specifically that a larger prokaryotic cell engulfed a smaller prokaryote (such as an aerobic bacterium or a photosynthetic cyanobacterium) without digesting it. Rather than being destroyed, the engulfed cell survived and formed a stable, mutually beneficial relationship with its host, eventually becoming a permanent organelle, mitochondria in the case of an engulfed aerobic bacterium, or chloroplasts in the case of an engulfed photosynthetic bacterium. Evidence supporting this theory includes both organelles having their own circular DNA, their own smaller 70S ribosomes (matching bacteria rather than the surrounding 80S eukaryotic ribosomes), and being bounded by a double membrane, consistent with an origin as an engulfed cell."
        }
      ]
    },
    {
      context: "Chloroplasts, the organelles responsible for photosynthesis in plant cells, are believed to have originated through a specific evolutionary process involving one cell engulfing another.",
      parts: [
        {
          label: "b",
          prompt: "Explain how plant cells' chloroplasts are thought to have originated by endosymbiosis.",
          marks: 5,
          guidance: "According to the endosymbiotic theory, a larger host cell (an early eukaryotic or eukaryote-like cell) engulfed a smaller, free-living photosynthetic prokaryote, likely through a process resembling endocytosis or phagocytosis, taking it into an internal vesicle rather than fully digesting it. Rather than being destroyed, this engulfed cell survived and the two cells developed a mutualistic relationship, with the host providing protection and raw materials while the engulfed photosynthetic cell provided organic compounds produced by its own photosynthesis; over evolutionary time, this partnership became permanent, with the engulfed cell becoming the modern chloroplast, still carrying its own circular DNA and double membrane as a legacy of this origin."
        }
      ]
    }
  ],

  "D1.2": [
    {
      context: "There is a close relationship between the molecular structure of the genetic code, its expression, and the physical structures it ultimately produces.",
      parts: [
        {
          label: "a",
          prompt: "Describe the relationship between mRNA codons and the amino acid sequence of a polypeptide.",
          marks: 4,
          guidance: "A codon is a group of three consecutive mRNA bases, and each codon specifies one particular amino acid (or signals a stop); one specific codon (AUG) both codes for methionine and typically marks the start of translation, while three specific codons act as stop codons, ending translation. Each codon on the mRNA base-pairs with a complementary anticodon on a tRNA molecule carrying the corresponding amino acid, so the order of codons along the mRNA directly determines the order in which amino acids are joined together to build the polypeptide."
        }
      ]
    },
    {
      context: "Producing mRNA is only the first step in gene expression; the resulting sequence must then be read and translated into a functioning polypeptide chain.",
      parts: [
        {
          label: "b",
          prompt: "Describe how mRNA is produced in the nucleus.",
          marks: 4,
          guidance: "RNA polymerase binds to DNA and unwinds the double helix by breaking the hydrogen bonds between the two strands, exposing the template (antisense) strand; free RNA nucleotides pair with their complementary bases along this template strand (following A-U and G-C pairing rules), and RNA polymerase joins these nucleotides together into a continuous mRNA strand as it moves along the template. Once transcription of the gene is complete, the finished mRNA strand and RNA polymerase detach from the DNA, and the DNA double helix re-forms behind them."
        }
      ]
    },
    {
      context: "Gene expression begins with transcription, the process by which the genetic information in DNA is copied into a mobile mRNA molecule that can then be translated into protein.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of transcription.",
          marks: 4,
          guidance: "Transcription is the synthesis of mRNA copied from a DNA template, using complementary base pairing against the antisense (template) strand; mRNA is built from the bases A, U, C, and G, with uracil replacing DNA's thymine. RNA polymerase catalyses the formation of covalent (phosphodiester) bonds between adjacent RNA nucleotides as it moves along the template strand, synthesising the new mRNA strand in a 5' to 3' direction."
        }
      ]
    },
    {
      context: "RNA molecules take on several different roles within the cell, from carrying genetic information as mRNA to helping build the amino acid sequence of a protein.",
      parts: [
        {
          label: "b",
          prompt: "Explain the process of transcription.",
          marks: 7,
          guidance: "Transcription is the synthesis of an mRNA molecule using a DNA template. RNA polymerase binds to DNA and unwinds a section of the double helix, exposing the template (antisense) strand; free RNA nucleotides then pair with their complementary bases on this template strand (following A-U and G-C pairing rules), and RNA polymerase joins these nucleotides together to form a continuous mRNA strand as it moves along the template in a 5' to 3' direction. Once the relevant gene has been fully transcribed, the newly formed mRNA strand detaches, and the original DNA double helix reforms behind the moving RNA polymerase."
        }
      ]
    },
    {
      context: "A tRNA molecule carrying the amino acid aspartic acid must reliably deliver that specific amino acid to the ribosome during translation, a process that depends on molecular recognition at several stages.",
      parts: [
        {
          label: "a",
          prompt: "A tRNA molecule has an anticodon reading CUG. Deduce the function of this base triplet.",
          marks: 1,
          guidance: "CUG is the anticodon; it functions to bind, through complementary base pairing, to the matching codon on an mRNA molecule during translation."
        },
        {
          label: "b",
          prompt: "Explain how living organisms ensure that the amino acid attached to a particular tRNA molecule is always the correct one, in this case aspartic acid.",
          marks: 2,
          guidance: "A specific enzyme, an aminoacyl-tRNA synthetase (tRNA-activating enzyme), recognises the particular shape of a given tRNA molecule and ensures that only the correct, matching amino acid (in this case aspartic acid) is attached to it; there is a different, specific activating enzyme for each of the different tRNA molecules, which is what guarantees the reliable, correct pairing between tRNA and amino acid every time."
        },
        {
          label: "c",
          prompt: "During translation, three binding sites for tRNA molecules are used on the ribosome. Outline the role of each of these three sites.",
          marks: 3,
          guidance: "The A site (aminoacyl site) is where a new tRNA carrying its amino acid first binds, matching its anticodon to the current mRNA codon; the P site (peptidyl site) is where a peptide bond is formed, linking the new amino acid to the growing polypeptide chain held by the tRNA there; and the E site (exit site) is where the now-empty tRNA, having already delivered its amino acid, is released from the ribosome after the ribosome shifts along the mRNA by one codon."
        }
      ]
    }
  ],

  "A2.2": [
    {
      context: "A student examines a cast of the lower surface of a plant leaf under a light microscope and needs to relate the image to a real measurement.",
      parts: [
        {
          label: "a",
          prompt: "Identify a guard cell in a microscope image of leaf epidermis, and explain what feature helps you recognise it.",
          marks: 1,
          guidance: "Guard cells are the pair of specialised, bean- or sausage-shaped cells that surround and control the opening of a stoma (pore); they're recognisable by their curved shape flanking a central gap."
        },
        {
          label: "b",
          prompt: "State how the total magnification of a compound light microscope image is calculated.",
          marks: 1,
          guidance: "Total magnification is found by multiplying the magnification of the eyepiece (ocular) lens by the magnification of the objective lens being used."
        },
        {
          label: "c",
          prompt: "Outline a method for estimating stomatal density from a microscope image, and suggest one way to make the estimate more reliable.",
          marks: 2,
          guidance: "Stomatal density can be estimated by counting the number of stomata visible within a known field of view (calculated from the microscope's magnification) and dividing by that area. Reliability can be improved by repeating the count across several different fields of view (or several leaf samples) and calculating a mean, rather than relying on a single count."
        }
      ]
    },
    {
      context: "Eukaryotic cells share several structural features in common, including a range of membrane-bound organelles that divide labour within the cell, and a set of processes that allow molecules to cross the plasma membrane.",
      parts: [
        {
          label: "b",
          prompt: "Describe three different processes that allow molecules to cross the lipid bilayer of a cell membrane.",
          marks: 3,
          guidance: "Simple diffusion allows small, non-polar molecules to move directly through the phospholipid bilayer, down their concentration gradient, with no protein or energy required. Osmosis is the diffusion of water specifically, moving from a region of lower solute concentration (higher water potential) to higher solute concentration (lower water potential) across a partially permeable membrane. Facilitated diffusion allows larger or polar molecules and ions to move down their concentration gradient through specific channel or carrier proteins, still without requiring energy; active transport, by contrast, uses ATP to move substances against their concentration gradient via specific pump proteins."
        },
        {
          label: "c",
          prompt: "Outline one difference between the structure of prokaryotic and eukaryotic cells.",
          marks: 1,
          guidance: "Prokaryotic cells lack a membrane-bound nucleus and other membrane-bound organelles, so their contents are not compartmentalised, while eukaryotic cells possess a true nucleus and internal membrane-bound organelles; relatedly, prokaryotes typically have a single, circular loop of DNA free in the cytoplasm, whereas eukaryotic DNA is linear and organised into chromosomes contained within the nucleus."
        }
      ]
    },
    {
      context: "Bacterial and human cells differ fundamentally in their internal organisation, a distinction that is directly relevant to how the immune system distinguishes pathogens from the body's own cells.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structures present in a bacterium such as Mycobacterium tuberculosis that are not present in a human cell.",
          marks: 3,
          guidance: "Bacterial cells like M. tuberculosis have a cell wall (of a very different composition to any structure in human cells), a single circular chromosome of naked DNA in a nucleoid region rather than a membrane-bound nucleus, and smaller 70S ribosomes rather than the 80S ribosomes found in human cells; many bacteria also carry small circular plasmids and surface structures such as pili, none of which have an equivalent in human cells."
        }
      ]
    }
  ],

  "B2.2": [
    {
      context: "The cell's various organelles must work together, not in isolation, to carry out even a routine task like producing and releasing a protein.",
      parts: [
        {
          label: "a",
          prompt: "Outline how different organelles interact to produce and secrete a protein from a cell.",
          marks: 4,
          guidance: "The nucleus transcribes the gene into mRNA, which travels to a ribosome (often bound to the rough endoplasmic reticulum) where it is translated into a polypeptide. The rough ER folds and makes initial modifications to the protein, which is then transported (usually via vesicles) to the Golgi apparatus for further processing and sorting, before being packaged into a secretory vesicle that moves to and fuses with the plasma membrane, releasing the protein outside the cell — each organelle performing a specialised, coordinated step in the overall pathway."
        }
      ]
    }
  ],

  "C1.2": [
    {
      context: "Glycolysis is the first, universal stage of cellular respiration, converting glucose into pyruvate in the cytoplasm.",
      parts: [
        {
          label: "a",
          prompt: "State where in the cell glycolysis takes place.",
          marks: 1,
          guidance: "The cytoplasm (cytosol)."
        },
        {
          label: "b",
          prompt: "Outline how NAD is regenerated so that glycolysis can continue during anaerobic respiration in animal cells.",
          marks: 2,
          guidance: "During anaerobic respiration, pyruvate accepts electrons from the reduced NADH produced during glycolysis and is converted into lactate; this reaction oxidises NADH back into NAD+, regenerating the supply of NAD+ needed for glycolysis to continue, even though oxygen isn't available to reoxidise NADH via the electron transport chain."
        }
      ]
    },
    {
      context: "All living organisms require energy to survive, and this energy must ultimately be released from stored organic molecules through cellular respiration.",
      parts: [
        {
          label: "b",
          prompt: "Describe how energy passes through a food chain.",
          marks: 4,
          guidance: "Photosynthesis in producers converts light energy into chemical energy stored in carbon compounds such as glucose; primary consumers (herbivores) obtain this energy by feeding on producers, and energy continues to pass along the food chain as each consumer feeds on the trophic level below it. At every stage, a substantial portion of the energy an organism has absorbed is lost as heat through cellular respiration, movement, and other life processes, rather than being passed on to the next trophic level, which is why less and less energy is available at each successive stage of a food chain."
        },
        {
          label: "c",
          prompt: "Explain why cells need a continual supply of energy, and how that energy is released through cellular respiration.",
          marks: 8,
          guidance: "Cells require energy for essentially all life processes, including active transport, metabolism, and movement, and this energy is most directly supplied in a usable form by ATP; energy is needed to synthesise ATP from ADP and inorganic phosphate, and this stored energy is released again whenever ATP is hydrolysed back to ADP. Cellular respiration releases this energy by breaking down organic substrates such as glucose through a sequence of oxidation reactions: glycolysis in the cytoplasm partially breaks down glucose to pyruvate; if oxygen is available, the Krebs cycle and the electron transport chain in the mitochondria (aerobic respiration) release far more energy by fully oxidising the substrate and using the resulting proton gradient to drive ATP synthase; without oxygen, anaerobic respiration can regenerate a limited supply of ATP but produces far less of it overall and generates lactate or ethanol as a by-product instead."
        }
      ]
    },
    {
      context: "Cells rely on cellular respiration to release usable energy from organic molecules, using different pathways depending on whether oxygen is available.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of anaerobic cell respiration.",
          marks: 4,
          guidance: "Cellular respiration is the controlled release of energy from organic compounds (such as glucose) to produce ATP; anaerobic respiration specifically does not require oxygen and occurs entirely in the cytoplasm rather than the mitochondrion, via glycolysis. Glucose is converted to pyruvate through a series of enzyme-catalysed steps, producing a small net yield of ATP (2 ATP per glucose) directly from glycolysis; without oxygen to continue the process further, pyruvate is instead converted into lactate (in animal cells) or ethanol and CO2 (in yeast and plant cells), regenerating the NAD+ needed to keep glycolysis running."
        }
      ]
    },
    {
      context: "The electron transport chain is the final stage of aerobic respiration, and it is where the vast majority of ATP produced during cellular respiration is actually generated.",
      parts: [
        {
          label: "c",
          prompt: "Explain the role of the electron transport chain in the generation of ATP by cell respiration.",
          marks: 7,
          guidance: "The electron transport chain carries out chemiosmosis, the process that generates ATP using energy released as electrons pass along a series of carrier proteins; these electrons are supplied by reduced NAD and FAD, produced earlier by glycolysis and the Krebs cycle. As electrons pass from one carrier to the next, energy is released and used to actively pump hydrogen ions from the mitochondrial matrix into the intermembrane space, building up a steep proton concentration gradient. These hydrogen ions then flow back into the matrix through ATP synthase, and this flow provides the energy that drives ATP synthase to phosphorylate ADP into ATP; oxygen acts as the final electron acceptor at the end of the chain, combining with electrons and hydrogen ions to form water, which is why oxygen is essential for this final, ATP-generating stage of aerobic respiration to continue."
        }
      ]
    }
  ],

  "C1.3": [
    {
      context: "A cross-section of a leaf reveals several distinct layers of cells, each contributing to photosynthesis and gas exchange in a different way.",
      parts: [
        {
          label: "a",
          prompt: "Suggest the functions of the upper epidermis and the palisade mesophyll layers of a leaf.",
          marks: 2,
          guidance: "The upper epidermis is typically transparent and covered by a waxy cuticle, allowing light through to the layers below while reducing water loss. The palisade mesophyll, positioned just below it, contains densely packed, chloroplast-rich cells specialised for absorbing light and carrying out the bulk of the leaf's photosynthesis."
        },
        {
          label: "b",
          prompt: "Explain the roles of two different leaf structures in gas exchange.",
          marks: 2,
          guidance: "The spongy mesophyll layer has numerous interconnected air spaces, providing a large, moist internal surface area for gases to diffuse into and out of cells. Guard cells control the opening and closing of stomata, the pores through the epidermis that allow carbon dioxide to enter and oxygen to leave the leaf (and vice versa) as needed."
        },
        {
          label: "c",
          prompt: "State the function of xylem and of phloem tissue within a leaf.",
          marks: 2,
          guidance: "Xylem transports water (and dissolved minerals) into the leaf to replace water lost through transpiration and to supply the raw material for photosynthesis; phloem transports the sugars produced by photosynthesis out of the leaf to other parts of the plant that need them."
        }
      ]
    },
    {
      context: "The Calvin cycle produces sugar that a plant then needs to move from where it is made in the leaves to where it is needed elsewhere in the plant.",
      parts: [
        {
          label: "a",
          prompt: "Identify the five-carbon molecule that combines with carbon dioxide at the start of the Calvin cycle, and the three-carbon sugar produced later in the cycle.",
          marks: 2,
          guidance: "Ribulose bisphosphate (RuBP) is the five-carbon acceptor molecule that combines with incoming CO2 to begin the Calvin cycle; triose phosphate (glyceraldehyde 3-phosphate) is the three-carbon sugar produced later in the cycle, some of which is used to regenerate RuBP and some of which is exported to build larger sugars."
        },
        {
          label: "b",
          prompt: "A product of the Calvin cycle is transported away from the leaf in the phloem. Identify this molecule, and explain how it is transported from the leaves to the roots.",
          marks: 4,
          guidance: "Sucrose is the sugar typically transported in the phloem. It is actively loaded into the phloem sieve tubes at the leaf (often using a proton gradient and co-transport mechanism supported by companion cells), which lowers the water potential inside the phloem at that point and draws water in from the xylem by osmosis; this raises the hydrostatic pressure at the 'source' end. At the 'sink' end (such as the roots), sucrose is unloaded and used or stored, raising the water potential there and lowering the pressure, so a pressure gradient forms along the phloem that drives the mass flow of sucrose solution from source to sink."
        }
      ]
    },
    {
      context: "The Calvin cycle converts atmospheric carbon dioxide into organic molecules using energy captured during the light-dependent reactions of photosynthesis.",
      parts: [
        {
          label: "c",
          prompt: "Explain how carbon dioxide is converted into organic molecules during the light-independent reactions of photosynthesis.",
          marks: 7,
          guidance: "The light-independent reactions (Calvin cycle) take place in the stroma of the chloroplast, using ATP and NADPH supplied by the light-dependent reactions. The cycle begins with a five-carbon compound, ribulose bisphosphate (RuBP); atmospheric CO2 is fixed by combining with RuBP in a reaction catalysed by the enzyme RuBisCO, forming an unstable six-carbon intermediate that immediately splits into two molecules of a three-carbon compound (glycerate 3-phosphate). ATP and NADPH are then used to reduce this three-carbon compound into triose phosphate (G3P); most of the triose phosphate is used to regenerate RuBP (using more ATP), keeping the cycle running, while some is exported to build glucose and other organic molecules the plant needs."
        }
      ]
    },
    {
      context: "The two stages of photosynthesis, the light-dependent and light-independent reactions, are physically separate but chemically interdependent, with one stage supplying essential products the other cannot function without.",
      parts: [
        {
          label: "c",
          prompt: "Explain how the light-independent reactions of photosynthesis rely on the light-dependent reactions.",
          marks: 7,
          guidance: "The light-dependent reactions produce ATP (via chemiosmosis/photophosphorylation) and reduced NADP (using electrons ultimately derived from photosystem I); both products are essential inputs for the Calvin cycle. In the light-independent reactions, carbon dioxide combines with RuBP to form glycerate 3-phosphate; this glycerate 3-phosphate is then reduced to triose phosphate specifically using the ATP and reduced NADP supplied by the light-dependent reactions. Without a continuous supply of these two products, the Calvin cycle cannot proceed, since RuBP could not be regenerated (using ATP) and glycerate 3-phosphate could not be reduced (using NADPH), illustrating why the light-independent reactions cannot occur in true darkness, despite not directly requiring light themselves."
        }
      ]
    }
  ],

  "B2.3": [
    {
      context: "Stem cells at different developmental stages have very different amounts of potential, and this affects how useful they are for research and medical applications.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between totipotent, pluripotent, and multipotent stem cells.",
          marks: 3,
          guidance: "Totipotent stem cells (found only in the earliest embryonic stages) can form every cell type in the body, plus extra-embryonic tissue like the placenta. Pluripotent stem cells can form any of the body's cell types but not extra-embryonic tissue. Multipotent stem cells (found in some adult tissues, like bone marrow) can only differentiate into a limited range of related cell types."
        },
        {
          label: "b",
          prompt: "A gene therapy approach for a genetic muscle disorder proposes editing a patient's stem cells before they differentiate. Suggest why pluripotent stem cells might be preferred over multipotent stem cells for this purpose.",
          marks: 2,
          guidance: "Pluripotent stem cells can differentiate into a much wider range of cell types than multipotent stem cells, which are more limited (committed) in what they can become; if the corrected cells need to develop into a specific tissue type not accessible from a readily available multipotent source, starting from pluripotent cells gives more flexibility to produce exactly the required cell type."
        }
      ]
    },
    {
      context: "Stem cells hold considerable promise in medicine because of a specific property that distinguishes them from most other cells in the body.",
      parts: [
        {
          label: "a",
          prompt: "Outline reasons for the therapeutic use of stem cells.",
          marks: 3,
          guidance: "Stem cells are unspecialised (undifferentiated) and retain the ability to divide and differentiate along different developmental pathways into a variety of specialised cell types; they can be obtained from several accessible sources, including embryos, umbilical cord blood, bone marrow, and some adult tissues. Because of their capacity to develop into needed cell types, stem cells can potentially be used to regenerate, repair, or replace diseased or damaged tissue in patients, offering therapeutic potential for a range of conditions that currently have limited treatment options."
        }
      ]
    }
  ],

  "D2.2": [
    {
      context: "A cell's genome contains far more genetic information than is actively used at any one time; controlling which genes are expressed, and when, is central to how genes shape phenotype.",
      parts: [
        {
          label: "a",
          prompt: "A section of DNA is wound tightly around a cluster of histone proteins. Identify this repeating structural unit.",
          marks: 1,
          guidance: "A nucleosome."
        },
        {
          label: "b",
          prompt: "Explain how gene expression can be regulated at the level of transcription to influence an organism's phenotype.",
          marks: 7,
          guidance: "Regulatory proteins called transcription factors can bind to specific DNA sequences and either activate or repress transcription. An activator can bind near a gene's promoter and help recruit RNA polymerase, increasing the rate of transcription, while a repressor can block RNA polymerase from binding or prevent it from proceeding, decreasing transcription. Epigenetic modifications, such as the methylation of DNA or acetylation of the histone proteins DNA is wrapped around, can also make a region of chromatin more or less accessible to transcription machinery, further tuning how much (or whether) a gene is transcribed — and because these effects can differ between cells that share identical DNA, this kind of regulation is central to producing different phenotypes (and different cell types) from the same genome."
        }
      ]
    },
    {
      context: "Insulin is produced specifically by beta cells of the pancreas, and nowhere else in the human body, even though every cell in the body carries the same gene for insulin.",
      parts: [
        {
          label: "c",
          prompt: "Explain how cell differentiation and the regulation of gene expression allow a protein such as insulin to be produced only in specific cells.",
          marks: 7,
          guidance: "Insulin production is determined by a specific gene, present in every cell of the body since all cells (with rare exceptions) contain a full copy of the genome; however, this gene is only switched on (expressed) in the beta cells of the pancreas. This selectivity arises through cell differentiation: stem cells develop into specialised cell types, and during this process, different genes are switched on or off in different cell lineages depending on which transcription factors and regulatory signals are present. In pancreatic beta cells specifically, the regulatory conditions allow the insulin gene to be transcribed and translated, while in other cell types the same gene remains switched off, illustrating how differential gene expression rather than differences in DNA content explains why only certain cells produce certain proteins."
        }
      ]
    },
    {
      context: "Nucleosomes package DNA tightly around histone proteins, and this packaging can itself be used by the cell to regulate whether particular genes are transcribed, alongside more direct forms of regulation involving specific proteins that respond to the presence of a signalling molecule.",
      parts: [
        {
          label: "b",
          prompt: "Outline how nucleosomes can affect the transcription of DNA.",
          marks: 1,
          guidance: "Nucleosomes can both promote and inhibit gene transcription depending on how tightly they are packed: tight condensation (supercoiling) of DNA around histones can physically block RNA polymerase and transcription factors from accessing a gene's promoter, preventing transcription, while a more loosely packed, open chromatin structure allows these proteins to bind and transcription to proceed."
        },
        {
          label: "d",
          prompt: "Explain the role of lactose in regulating expression of the gene for lactase production.",
          marks: 3,
          guidance: "In the absence of lactose, a repressor protein binds to the promoter region of the lactase gene, physically blocking RNA polymerase from transcribing it. When lactose is present, it binds to this repressor protein, changing its shape so that it can no longer bind the promoter; with the repressor removed, RNA polymerase is free to bind the promoter and transcribe the gene, producing lactase, so lactase is only produced when its substrate, lactose, is actually present, an efficient example of gene expression regulated by an environmental signal."
        },
        {
          label: "e",
          prompt: "State one reason that identical twins might show different DNA methylation patterns as they grow older, despite having identical DNA sequences.",
          marks: 1,
          guidance: "Differences in environment, diet, or illness experienced separately by each twin over their lifetime can lead to different epigenetic (methylation) changes accumulating in each twin's DNA, even though their underlying base sequence remains identical."
        }
      ]
    }
  ],

  "D1.3": [
    {
      context: "A gene therapy proposal aims to correct a mutation in the dystrophin gene responsible for Duchenne muscular dystrophy, a sex-linked recessive disorder.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between deletion and insertion mutations, and outline the general consequence each type can have on a reading frame.",
          marks: 2,
          guidance: "A deletion mutation removes one or more bases from a DNA sequence, while an insertion mutation adds one or more bases; because the genetic code is read in non-overlapping groups of three, both types can shift the reading frame from the point of mutation onward (a frameshift), typically scrambling the amino acid sequence for the rest of the polypeptide, unless the number of bases added or removed is a multiple of three."
        },
        {
          label: "b",
          prompt: "Explain how CRISPR-Cas9 gene editing could, in principle, be used to correct a mutation responsible for producing a faulty protein.",
          marks: 3,
          guidance: "CRISPR-Cas9 uses a guide RNA to direct the Cas9 enzyme to a specific target sequence in the genome, where Cas9 cuts the DNA at that precise location; the cell's own repair machinery can then be directed (using a supplied DNA template) to correct the faulty sequence, for example changing a codon that had introduced a premature stop codon back to one that allows a full-length, functional protein to be produced."
        }
      ]
    },
    {
      context: "The polymerase chain reaction (PCR) allows scientists to make many copies of a specific DNA sequence starting from only a tiny original sample, using a heat-stable enzyme.",
      parts: [
        {
          label: "b",
          prompt: "Describe the polymerase chain reaction (PCR).",
          marks: 4,
          guidance: "A DNA sample is first heated to a high temperature, which breaks the hydrogen bonds between the two strands of the double helix and separates them (denaturation); the mixture is then cooled to allow short, specific primers to bind to the target sequence on each separated strand. A heat-stable DNA polymerase, commonly Taq polymerase (which, unlike most enzymes, doesn't denature at the high temperatures used earlier in the cycle), then extends new complementary strands from each primer, doubling the amount of the target DNA sequence with each full cycle; repeating this heat-cool-extend cycle many times rapidly amplifies even a tiny initial sample into millions of copies."
        }
      ]
    },
    {
      context: "Some genetic changes affect not just a single gene but an organism's entire set of chromosomes, occasionally producing effects significant enough to influence the process of speciation.",
      parts: [
        {
          label: "b",
          prompt: "Describe polyploidy and explain how it can lead to speciation.",
          marks: 5,
          guidance: "Polyploidy is the condition of having more than the usual two complete sets of chromosomes (such as three or four sets, rather than the normal diploid two); it can arise through errors in meiosis producing diploid gametes, or through DNA replication occurring without a following mitotic division. A polyploid individual often cannot successfully interbreed with the original diploid population, since their differing chromosome numbers prevent normal pairing during meiosis in any hybrid offspring; this reproductive isolation can allow a polyploid population to become a new, separate species relatively quickly, a mechanism particularly important in the evolutionary history of many plant species."
        }
      ]
    },
    {
      context: "The polymerase chain reaction (PCR) amplifies a small starting quantity of DNA into millions of copies through repeated temperature cycles, each step of the cycle serving a distinct chemical purpose.",
      parts: [
        {
          label: "b",
          prompt: "In a PCR reaction, would the primers used be smaller or larger than the DNA fragment being amplified? Deduce your answer with a reason.",
          marks: 1,
          guidance: "Primers are smaller than the amplified DNA fragment; on a gel, this is reflected in primers migrating further from the loading well than the larger, amplified DNA product, since smaller fragments move more easily through the gel matrix."
        },
        {
          label: "c",
          prompt: "Explain the reason for changing the temperature at each stage of a PCR cycle.",
          marks: 2,
          guidance: "A high temperature (around 94°C) separates (denatures) the two DNA strands by breaking the hydrogen bonds between them; a lower temperature (around 55°C) then allows the short primers to bind (anneal) to their complementary sequences on each separated strand. A subsequent increase in temperature (around 72°C) allows the heat-stable Taq polymerase to synthesise new complementary DNA strands, extending from each primer; repeating this three-temperature cycle doubles the amount of target DNA with each cycle."
        },
        {
          label: "d",
          prompt: "Predict the result that would be obtained if fewer PCR cycles were used than intended.",
          marks: 1,
          guidance: "Using fewer cycles would produce far fewer copies of the target DNA overall, resulting in a much fainter or thinner band (or no visible band at all) when the product is run on a gel, since each cycle is what doubles the quantity of amplified DNA."
        }
      ]
    }
  ],

  "D3.1": [
    {
      context: "The onset of puberty and the timing of ovulation both depend on a carefully coordinated sequence of hormonal signals passing between the brain and the gonads.",
      parts: [
        {
          label: "a",
          prompt: "Outline the sequence of hormonal events that initiates puberty, starting with the hypothalamus.",
          marks: 3,
          guidance: "The hypothalamus increases its secretion of gonadotropin-releasing hormone (GnRH), which stimulates the anterior pituitary gland to increase secretion of luteinizing hormone (LH) and follicle-stimulating hormone (FSH); these in turn stimulate the gonads (testes or ovaries) to increase production of sex hormones (testosterone or oestrogen), which drive the physical and reproductive changes associated with puberty."
        },
        {
          label: "b",
          prompt: "Explain how a surge in luteinizing hormone (LH) mid-cycle triggers ovulation.",
          marks: 3,
          guidance: "Rising oestrogen from the developing follicle, once it reaches a sufficiently high and sustained level, switches from having a negative feedback effect on the pituitary to a positive feedback effect, triggering a sharp surge in LH secretion; this LH surge causes the mature follicle to rupture, releasing the egg cell from the ovary — the event known as ovulation."
        },
        {
          label: "c",
          prompt: "Some plant species carry self-incompatibility alleles that prevent successful fertilization by their own pollen. Suggest one reproductive advantage this provides.",
          marks: 2,
          guidance: "By preventing self-fertilization, self-incompatibility alleles force cross-pollination with genetically different individuals, promoting genetic variation in the offspring and reducing the risks associated with inbreeding, such as an increased chance of harmful recessive alleles being expressed."
        }
      ]
    },
    {
      context: "Hormone levels rise and fall in a carefully coordinated pattern throughout the menstrual cycle, with each hormone influencing the release or suppression of others.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of progesterone in the menstrual cycle.",
          marks: 4,
          guidance: "Following ovulation, luteinizing hormone (LH) stimulates the remnant of the ruptured follicle, the corpus luteum, to secrete progesterone. Rising progesterone (along with oestrogen) inhibits further secretion of FSH and LH from the pituitary gland, which prevents new follicles from developing and stops another egg from being released while the current cycle is still underway. Progesterone also maintains and increases the thickness of the endometrium (uterine lining), keeping it ready to support a possible pregnancy; if fertilization does not occur, progesterone levels eventually fall, allowing the endometrium to break down and menstruation to occur."
        }
      ]
    },
    {
      context: "Sexual reproduction in both males and females is directed by specific hormones that control the development and ongoing function of the reproductive system.",
      parts: [
        {
          label: "c",
          prompt: "Explain the roles of named hormones in the development and function of the male and female reproductive systems.",
          marks: 7,
          guidance: "In males, testosterone directs the prenatal development of male genitalia, controls the development of secondary sexual characteristics during puberty, and regulates ongoing sperm production. In females, estrogen and progesterone direct the prenatal development of female reproductive organs; estrogen (alongside FSH and LH) controls the menstrual cycle, promoting follicle development, triggering the LH surge that causes ovulation, and stimulating growth of the endometrium, while progesterone (secreted by the corpus luteum after ovulation) maintains the endometrium and, if pregnancy occurs, helps sustain it in its early stages."
        }
      ]
    },
    {
      context: "The genetic and hormonal pathways controlling male sexual development in humans begin at the level of a single gene on the Y chromosome, and unfold through several stages before and during puberty.",
      parts: [
        {
          label: "a",
          prompt: "Describe the genetic and hormonal control of the development of male sexual characteristics in a human.",
          marks: 3,
          guidance: "An individual is genetically male if they carry both an X and a Y chromosome; a gene on the Y chromosome (SRY) promotes the development of testes from the embryonic gonads. Once formed, the testes secrete testosterone, which stimulates the prenatal development of male genitalia and, later at puberty, stimulates sperm production (spermatogenesis) and the development of male secondary sexual characteristics."
        }
      ]
    }
  ],

  "D3.2": [
    {
      context: "Duchenne muscular dystrophy (DMD) is a sex-linked recessive condition caused by mutations in the X-linked dystrophin gene, which mainly affects males.",
      parts: [
        {
          label: "a",
          prompt: "Using a Punnett grid, deduce the probability that an unaffected male will have a child with DMD if his partner is an unaffected carrier of the condition.",
          marks: 3,
          guidance: "Representing the affected allele as Xd and the unaffected allele as XD, the father's genotype is XDY and the mother's is XDXd. The Punnett grid gives offspring genotypes XDXD, XDXd, XDY, and XdY, each with equal probability; only the XdY genotype (an affected son) shows DMD, so overall probability across all children is 1 in 4 (25%), which corresponds to a 1 in 2 (50%) chance specifically among any sons produced."
        },
        {
          label: "b",
          prompt: "State why male offspring, rather than female offspring, are almost exclusively affected by a sex-linked recessive condition like DMD.",
          marks: 1,
          guidance: "Because males have only one X chromosome, a single copy of a recessive X-linked allele is enough to cause the condition; females have two X chromosomes, so a female carrier's unaffected dominant allele on her other X chromosome usually masks the effect of the recessive allele, meaning she would typically need to inherit the recessive allele from both parents to be affected herself."
        }
      ]
    },
    {
      context: "Polycystic kidney disease (PKD) is an inherited disorder that causes the kidneys to become enlarged and progressively lose function. It is caused by a dominant allele that is not sex-linked, and a family pedigree chart can be used to trace its inheritance.",
      parts: [
        {
          label: "a",
          prompt: "Define the term genotype.",
          marks: 1,
          guidance: "A genotype is the specific combination of alleles that an organism carries (and can pass on) for a particular gene or set of genes."
        },
        {
          label: "b",
          prompt: "Using a pedigree chart showing two unaffected parents whose child develops PKD, explain how the pattern of inheritance shown demonstrates that the dominant allele responsible is not located on the X chromosome.",
          marks: 2,
          guidance: "If the dominant PKD allele were carried on the X chromosome, an affected father would be expected to pass the condition to all of his daughters (since they must inherit his only X chromosome), and unaffected sons would not carry the allele at all; a pedigree showing a pattern inconsistent with this (for example, an affected individual whose father is unaffected, which could only happen if the allele is instead carried on an autosome inherited from either parent) demonstrates that the gene is autosomal rather than X-linked."
        }
      ]
    },
    {
      context: "The ABO blood group system in humans is controlled by a single gene with three possible alleles, illustrating both simple dominance and codominance in the same gene.",
      parts: [
        {
          label: "a",
          prompt: "Outline the inheritance of blood types in the ABO blood group system.",
          marks: 4,
          guidance: "The ABO blood group gene has three alleles: IA, IB, and i. Both IA and IB are dominant to i, so genotype ii produces blood group O, while IAi or IAIA produces group A, and IBi or IBIB produces group B. IA and IB are codominant with each other, meaning a person with genotype IAIB expresses both simultaneously, producing blood group AB rather than a blended phenotype."
        }
      ]
    },
    {
      context: "Human characteristics vary in very different patterns, some falling into a small number of sharply distinct categories, and others varying smoothly and continuously across a population.",
      parts: [
        {
          label: "c",
          prompt: "Distinguish between continuous and discrete (discontinuous) variation, using examples.",
          marks: 4,
          guidance: "Discrete variation describes characteristics that fall into a small number of distinct, non-overlapping categories, typically controlled by one or two genes, such as human ABO blood group (only four possible phenotypes: A, B, AB, or O). Continuous variation, by contrast, describes characteristics that vary smoothly across a wide, overlapping range with no sharp category boundaries, typically because they are polygenic (influenced by many genes each with a small additive effect) and often also affected by environmental factors; human height is a classic example, showing a smooth, bell-shaped distribution rather than a small number of distinct height categories."
        }
      ]
    }
  ],

  "A3.1": [
    {
      context: "Comparing a specific protein's sequence across related species can offer clues about evolutionary relationships, though such comparisons have real limits.",
      parts: [
        {
          label: "a",
          prompt: "A table compares the number of amino acid differences in the FOXP2 protein between humans and several other primate species. State how many different genera are represented if the species listed are chimpanzee, bonobo, gorilla, and orangutan.",
          marks: 1,
          guidance: "Three genera: chimpanzee and bonobo both belong to the genus Pan, while gorilla and orangutan belong to their own separate genera (Gorilla and Pongo)."
        },
        {
          label: "b",
          prompt: "Explain why comparing amino acid differences in a single protein is not sufficient evidence to conclude which two species are most closely related.",
          marks: 2,
          guidance: "A single protein comparison only reflects the evolutionary history of that one gene, and different genes can evolve at different rates; two species might appear closely related based on one protein but show a very different pattern in another. A comprehensive assessment of relatedness needs to draw on comparisons across many genes (or ideally whole-genome data), not just one protein."
        },
        {
          label: "c",
          prompt: "Some human diseases are caused by viruses that originated in other primate species. State one structural feature all viruses share, and define the term used for a disease that can transfer from animals to humans.",
          marks: 2,
          guidance: "All viruses share a nucleic acid genome (DNA or RNA) enclosed within a protein capsid; a disease capable of transferring from an animal host to humans is called a zoonosis (or zoonotic disease)."
        }
      ]
    },
    {
      context: "Dogs show enormous physical variation between breeds, from Chihuahuas to Great Danes, yet all domestic dogs are considered a single species.",
      parts: [
        {
          label: "a",
          prompt: "Define the term species.",
          marks: 1,
          guidance: "A species is a group of organisms that share similar traits and are capable of interbreeding (sexually reproducing) with one another to produce fertile offspring under natural conditions."
        },
        {
          label: "b",
          prompt: "Describe how karyotyping could be used to help decide whether two visually different populations of dogs belong to the same species.",
          marks: 2,
          guidance: "Karyotyping allows the number, size, and banding pattern of an organism's chromosomes to be examined and compared; since members of the same species typically share a characteristic chromosome number and structure, comparing karyotypes from the two populations can reveal whether their chromosomes are consistent with belonging to a single species, or whether there are differences (such as differing chromosome number) that would suggest they are more distantly related or reproductively incompatible."
        }
      ]
    }
  ],

  "B4.1": [
    {
      context: "Species living in extreme habitats, such as polar seas, show a suite of adaptations that let them cope with conditions most organisms couldn't survive.",
      parts: [
        {
          label: "a",
          prompt: "Describe two physical adaptations that allow a marine mammal, such as a ringed seal, to survive in cold water.",
          marks: 2,
          guidance: "A thick layer of blubber provides insulation against heat loss and also aids buoyancy; a streamlined body shape combined with flipper-like limbs reduces drag and allows efficient movement through water, which is far more resistant to movement than air."
        },
        {
          label: "b",
          prompt: "Explain why an organism's realized niche is often narrower than its fundamental niche in a natural ecosystem.",
          marks: 3,
          guidance: "The fundamental niche describes the full range of conditions and resources a species could use in the absence of competitors; in reality, interspecific competition often restricts a species to a smaller realized niche, since it can be excluded from certain conditions or resources by better-adapted competitors — a real-world constraint that rarely applies in a lab setting where competitors are absent."
        }
      ]
    },
    {
      context: "Organisms living in extreme environments, such as hot deserts, show a range of adaptations that allow them to survive conditions that would be lethal to most other species.",
      parts: [
        {
          label: "a",
          prompt: "State two abiotic factors that characterize a hot desert biome.",
          marks: 2,
          guidance: "Hot deserts are typically characterised by very high daytime temperatures alongside much lower night-time temperatures, and by very low precipitation (rainfall) and low humidity; some deserts also have predominantly sandy or rocky soil and consistently high light intensity."
        },
        {
          label: "b",
          prompt: "Suggest one adaptation that could help a desert-dwelling mammal such as a rabbit survive in these conditions.",
          marks: 1,
          guidance: "Suitable adaptations include light-coloured fur (which reflects sunlight and reduces heat absorption), unusually large ears (which increase surface area for heat loss), and behavioural adaptations such as being nocturnal or sheltering in burrows during the hottest part of the day to avoid extreme daytime temperatures."
        }
      ]
    }
  ],

  "D4.1": [
    {
      context: "Comparisons of human skeletal remains from different historical periods have been used to investigate trends in height, and what these trends might reveal about the genetics of variation.",
      parts: [
        {
          label: "a",
          prompt: "Human height varies continuously across a population rather than falling into a few distinct categories. Discuss whether this pattern of variation supports the hypothesis that height is a polygenic trait.",
          marks: 2,
          guidance: "Continuous variation, where a trait ranges smoothly across many intermediate values rather than clustering into a small number of discrete categories, is consistent with the trait being controlled by several genes acting together (polygenic inheritance), each contributing a small additive effect; this hypothesis is well supported by the pattern, though it's worth noting that environmental factors (such as childhood nutrition) also contribute substantially to variation in a trait like height, so genetics alone doesn't fully explain the pattern."
        },
        {
          label: "b",
          prompt: "Compare and contrast directional selection and disruptive selection.",
          marks: 2,
          guidance: "As a similarity, both directional and disruptive selection act against individuals with the average (intermediate) phenotype and can shift a population's allele frequencies over time in response to environmental pressures. They differ in the direction of that shift: directional selection favours one extreme phenotype over the other, shifting the population's average toward that extreme, while disruptive selection favours both extremes simultaneously and selects against the intermediate phenotype, potentially splitting a population into two distinct phenotypic groups."
        },
        {
          label: "c",
          prompt: "Discuss how the Hardy-Weinberg equation can be used in population genetics studies, and outline the conditions that must hold for its predictions to be considered valid.",
          marks: 3,
          guidance: "The Hardy-Weinberg equation (p2 + 2pq + q2 = 1) can be used to calculate the expected genotype and allele frequencies of a population, and to test whether a real population's observed frequencies match those predictions. For the equation's predictions to be considered valid, several conditions need to (approximately) hold: mating must be random, the population must be large enough to avoid genetic drift, and there should be no migration, no new mutation, and no natural selection acting on the alleles in question; if a real population's genotype frequencies deviate substantially from the Hardy-Weinberg prediction, this is taken as evidence that one or more of these conditions is being violated — for instance, that selection is acting on the gene in question."
        }
      ]
    },
    {
      context: "Genetic variation is the raw material for evolution, and populations that become isolated from one another can gradually diverge into separate species.",
      parts: [
        {
          label: "b",
          prompt: "Describe how genetic variation is brought about by sexual reproduction.",
          marks: 5,
          guidance: "Meiosis produces haploid gametes and, in the process, breaks up existing combinations of alleles through independent segregation; crossing over (chiasmata formation) during meiosis I exchanges alleles between homologous chromosomes, producing new combinations not present in either parent chromosome. Random orientation of homologous pairs at metaphase I (independent assortment) further increases the range of possible gamete combinations, and fertilization then combines gametes from two different parents at random, all of which together generate substantial genetic variation among offspring beyond what either parent alone carries."
        },
        {
          label: "c",
          prompt: "Explain how isolation leads to speciation.",
          marks: 7,
          guidance: "Speciation is the process by which a new species forms from an existing one, and it depends fundamentally on reproductive isolation, some barrier preventing interbreeding between two populations. This isolation can take several forms: temporal isolation (populations breeding at different times), behavioural isolation (different courtship rituals), or geographic isolation (a physical barrier separating populations entirely). Once isolated, gene flow between the populations stops, so mutations and other sources of variation accumulate independently in each population; different selective pressures in each environment then favour different traits, and over enough generations, the genetic divergence between the populations can become great enough that they can no longer interbreed successfully even if they later come back into contact, marking the formation of separate species."
        }
      ]
    },
    {
      context: "Variation in genetically inherited characteristics provides the raw material that natural selection acts upon, and this variation can arise in several distinct ways.",
      parts: [
        {
          label: "b",
          prompt: "Explain how genetic variation between individuals of a species can be generated.",
          marks: 7,
          guidance: "Mutation, a change to the base sequence of DNA, can create new alleles that didn't previously exist in the population; base substitutions (changing a single nucleotide) are one common type, and exposure to radiation or mutagenic chemicals can increase the rate at which mutations occur. Beyond mutation, sexual reproduction also generates variation without creating new alleles: crossing over during meiosis exchanges genetic material between homologous chromosomes, independent assortment randomly distributes maternal and paternal chromosomes into gametes, and random fertilization combines gametes from two different individuals, together producing offspring with new combinations of existing alleles."
        }
      ]
    },
    {
      context: "Evolution proceeds through several distinct mechanisms that cause gene pools to change over time, sometimes leading to the formation of entirely new species.",
      parts: [
        {
          label: "a",
          prompt: "Outline how adaptive radiation provides evidence for evolution.",
          marks: 3,
          guidance: "Adaptive radiation describes the diversification of species from a shared common ancestor, adapting to a variety of different environments and ecological niches; the resulting species often show homologous structures with underlying structural similarities despite very different present-day functions, reflecting descent from that shared ancestor. Classic examples, such as Darwin's finches or the pentadactyl limb across vertebrates, are commonly cited as evidence supporting evolution, since the pattern of shared structure combined with differing adaptations is difficult to explain except through evolutionary divergence from a common ancestor."
        }
      ]
    },
    {
      context: "Living organisms cause change in their environment and also respond to environmental change themselves, whether through ecological damage, evolutionary adaptation, or physiological illness.",
      parts: [
        {
          label: "a",
          prompt: "Outline changes to Earth's atmosphere that have been caused by living organisms over its history.",
          marks: 4,
          guidance: "Photosynthetic bacteria (cyanobacteria), active billions of years ago, gradually increased atmospheric oxygen concentration as a by-product of photosynthesis; aerobic respiration across the living world continually adds carbon dioxide to the atmosphere, while methanogenic archaea (as well as ruminant animals like cows) release methane, particularly under anaerobic conditions such as in swamps or animal digestive systems. More recently, large-scale human combustion of fossil fuels has substantially raised atmospheric CO2 concentration well beyond levels seen for hundreds of thousands of years."
        },
        {
          label: "b",
          prompt: "Explain how a population changes as a result of natural selection.",
          marks: 7,
          guidance: "Variation already exists within a population, arising from mutation and, in sexually reproducing species, from the reshuffling of alleles during meiosis; more offspring are typically produced than the environment can support, leading to competition for limited resources. When environmental conditions favour certain heritable characteristics (for example, during a change in food supply, climate, or the arrival of a new predator), individuals with advantageous variations survive and reproduce more successfully than others; because these advantageous traits are heritable, they become more common in the next generation, and this differential reproductive success, repeated over many generations, gradually shifts the population's overall characteristics."
        },
        {
          label: "c",
          prompt: "Explain the changes in lung function experienced by a person with emphysema.",
          marks: 4,
          guidance: "Emphysema results in the destruction of the walls separating individual alveoli, producing fewer, larger air sacs rather than many small ones; this substantially reduces the total surface area available for gas exchange, making the entry of oxygen into the blood and the release of carbon dioxide from it much less efficient. The alveolar walls also lose elasticity, making it harder for the lungs to stretch and recoil normally during breathing, contributing to the characteristic breathlessness experienced by people with this condition."
        }
      ]
    }
  ],

  "A4.1": [
    {
      context: "Chimpanzees and bonobos live on opposite sides of the Congo River in Central Africa and are both descended from a shared ancestral population.",
      parts: [
        {
          label: "a",
          prompt: "Identify the type of speciation shown by chimpanzees and bonobos evolving into separate species on either side of a river.",
          marks: 1,
          guidance: "Allopatric speciation, since the two populations were separated by a geographic barrier (the river)."
        },
        {
          label: "b",
          prompt: "Describe how both species could have evolved from their shared ancestor after becoming geographically separated.",
          marks: 3,
          guidance: "Once the river separated the ancestral population, the two isolated groups were exposed to different environmental conditions and selection pressures on each side; over many generations, different mutations arose and different traits were favoured by natural selection in each population, so their allele frequencies diverged. With no gene flow between the populations to homogenise these differences, they eventually accumulated enough genetic difference to become reproductively isolated, distinct species."
        },
        {
          label: "c",
          prompt: "The bonobo is classified as an endangered species. Explain how deforestation could contribute to a decline in their population.",
          marks: 2,
          guidance: "Deforestation destroys the bonobos' forest habitat, reducing available shelter, breeding grounds, and food sources; this can increase competition for the resources that remain, lower reproductive success, and increase vulnerability to predation or starvation, all of which push population size downward."
        }
      ]
    },
    {
      context: "DNA carries the hereditary information passed from parents to offspring, and comparing this information across species is one of the ways speciation can be studied and understood.",
      parts: [
        {
          label: "b",
          prompt: "Describe the importance of DNA in the process of speciation.",
          marks: 4,
          guidance: "Speciation is the process by which one species splits into two or more separate species over time. Organisms belonging to the same species share the great majority of their genome, but some variation in DNA sequence and alleles already exists within any population; new variation continually arises through mutation and through the random combinations produced during meiosis, such as crossing over. When part of a population becomes isolated from the rest, this genetic variation can accumulate differently in each group under different selective pressures, and over enough generations the accumulated genetic differences between the isolated populations can become great enough that they are no longer able to interbreed successfully, marking the formation of separate species."
        },
        {
          label: "c",
          prompt: "Explain the genetic basis of inheritance patterns in organisms that reproduce sexually.",
          marks: 8,
          guidance: "Offspring produced by sexual reproduction inherit genetic information from both parents via the gametes, each parent contributing one set of chromosomes; because most organisms that reproduce sexually are diploid, offspring end up with two copies of each gene, one inherited from each parent. These two copies (alleles) may be identical (homozygous) or different (heterozygous); where alleles differ, one may be dominant and mask the effect of a recessive allele in a heterozygote, or the two alleles may show incomplete dominance or codominance instead, producing an intermediate or combined phenotype. Because each parent's gametes are produced by meiosis, which shuffles chromosomes through independent assortment and crossing over, offspring end up with a unique combination of alleles rather than being identical to either parent, which is the underlying genetic basis for the patterns of inheritance and variation seen across generations."
        }
      ]
    },
    {
      context: "Chimpanzees and bonobos share a recent common ancestor but are now considered separate species, having diverged after a geographic feature separated their ancestral population.",
      parts: [
        {
          label: "b",
          prompt: "Explain how bonobos could have evolved from a shared ancestral population with chimpanzees through the process of speciation.",
          marks: 3,
          guidance: "A rise in water level is thought to have created a geographic barrier (the Congo River) that separated the ancestral population into two isolated groups; once separated, the two populations experienced no gene flow between them, meaning genetic differences arising through mutation in each population could no longer be shared or homogenised across the whole group. Each population also faced somewhat different environments and selective pressures on either side of the river, so natural selection favoured different traits in each population over many generations, and enough genetic divergence eventually built up that the two populations became reproductively isolated, distinct species — chimpanzees and bonobos."
        }
      ]
    },
    {
      context: "Species are defined as groups of organisms capable of interbreeding to produce fertile offspring, but new species can arise from existing ones through more than one evolutionary route.",
      parts: [
        {
          label: "a",
          prompt: "Outline how new heritable traits can develop within a species over time.",
          marks: 7,
          guidance: "Mutations, changes to the base sequence of DNA, generate genetic variation by forming new alleles that did not previously exist in the population; sexual reproduction and meiosis further generate new combinations of existing alleles through independent assortment and crossing over. Natural selection then acts on this variation: individuals whose traits make them better adapted to their environment tend to survive and reproduce more successfully than others, so advantageous heritable traits become more common in the population over successive generations, gradually shifting the population's overall characteristics."
        },
        {
          label: "b",
          prompt: "Explain how a new species can be formed abruptly through polyploidy.",
          marks: 5,
          guidance: "Polyploidy is the condition of possessing more than the usual two complete sets of homologous chromosomes, for example three sets (triploid) or four sets (tetraploid); this can arise from errors during meiosis producing diploid, rather than haploid, gametes, or from DNA replication occurring without a following mitotic division. A polyploid individual typically cannot produce fertile offspring by crossing with the original diploid population, since mismatched chromosome numbers disrupt normal pairing during meiosis in any hybrid; this reproductive isolation can allow the polyploid population to become a new, separate species within a single generation, a mechanism especially significant in the evolutionary history of many plant species."
        }
      ]
    }
  ],

  "B4.2": [
    {
      context: "Mycorrhizal fungi grow in close association with the roots of many plant species, including orchids, and this relationship can shape how those plants compete with others nearby.",
      parts: [
        {
          label: "a",
          prompt: "State the type of interspecific relationship shown between mycorrhizal fungi and the plant roots they colonise, and give one benefit the plant receives.",
          marks: 2,
          guidance: "This is a mutualistic relationship. The plant often benefits by receiving water and mineral nutrients from the fungal network; in orchids specifically, the fungi can be essential for seed germination, since orchid seeds carry very few stored resources of their own."
        },
        {
          label: "b",
          prompt: "Using a named example, explain how a plant can reduce competition from neighbouring species through allelopathy.",
          marks: 3,
          guidance: "Allelopathy involves releasing chemical compounds (secondary metabolites) into the surrounding soil or air that inhibit the germination, growth, or survival of nearby competing plants. For example, black walnut trees release a compound called juglone from their roots, which is toxic to many other plant species growing nearby; by suppressing competitors in this way, the allelopathic plant increases the light, water, and nutrients available to itself."
        }
      ]
    },
    {
      context: "Reintroducing a single animal species to an ecosystem can sometimes trigger far-reaching effects on the wider community, well beyond the direct presence of that one species.",
      parts: [
        {
          label: "a",
          prompt: "Beavers act as a keystone species in the ecosystems where they are reintroduced. Outline the importance of a keystone species.",
          marks: 2,
          guidance: "A keystone species has an effect on its ecosystem that is disproportionately large relative to its own abundance; by regulating the population sizes or habitats of other organisms, keystone species help maintain overall ecosystem stability and community structure, and their removal (or reintroduction) can trigger significant, cascading changes throughout the ecosystem."
        },
        {
          label: "b",
          prompt: "Species richness of large invertebrates has been shown to increase in the presence of reintroduced beavers. Suggest reasons why higher biodiversity is generally beneficial for an ecosystem.",
          marks: 2,
          guidance: "Higher biodiversity tends to support more complex food webs with a greater variety of available food sources, and it generally makes an ecosystem more stable and better able to adapt to disturbance or environmental change, since a wider range of species increases the chance that some will be able to fill an ecological role if another species is lost or declines."
        },
        {
          label: "c",
          prompt: "Outline two methods of restoring natural ecological processes through rewilding, other than reintroducing a keystone species.",
          marks: 2,
          guidance: "Rewilding strategies besides reintroducing a keystone species include removing invasive species that disrupt native ecosystems, restoring or rehabilitating degraded habitats (such as replanting native vegetation), and re-establishing connectivity between fragmented habitats over a large area so that populations can move, interbreed, and recolonise areas naturally."
        }
      ]
    }
  ],

  "A3.2": [
    {
      context: "Cladograms are used to represent hypothesised evolutionary relationships, but constructing and comparing them raises several methodological questions.",
      parts: [
        {
          label: "a",
          prompt: "Explain what the 'root' and a 'node' represent on a cladogram.",
          marks: 2,
          guidance: "The root represents the earliest common ancestor of every organism included in the cladogram. A node is a branching point that represents the most recent common ancestor shared by the two (or more) lineages that split from it."
        },
        {
          label: "b",
          prompt: "Discuss the usefulness of comparing amino acid sequences of a shared protein as a basis for constructing cladograms.",
          marks: 3,
          guidance: "Mutations gradually change the DNA base sequence over time, which can alter the amino acid sequence of the proteins that DNA codes for; because these differences accumulate gradually, species whose protein sequences differ more are inferred to have diverged from a common ancestor longer ago than species with more similar sequences. This makes amino acid sequence data a useful, quantifiable tool for building cladograms, though results can vary depending on which protein is chosen, since not all proteins evolve at the same rate."
        },
        {
          label: "c",
          prompt: "Identify one type of evidence, other than amino acid sequence, that could also be used to construct a cladogram.",
          marks: 1,
          guidance: "Suitable examples include comparing DNA (or rRNA) base sequences directly, or comparing morphological/anatomical (homologous) characteristics between species."
        },
        {
          label: "d",
          prompt: "Outline the principle of parsimony when choosing between several possible cladograms for the same set of species.",
          marks: 1,
          guidance: "The principle of parsimony favours the simplest explanation: among competing cladograms, the one requiring the fewest evolutionary changes (mutations or trait changes) to explain the observed data is generally preferred."
        }
      ]
    },
    {
      context: "Classifying organisms based on shared physical traits requires care, since similar-looking structures don't always reflect a shared evolutionary origin.",
      parts: [
        {
          label: "c",
          prompt: "Outline the use of analogous and homologous traits in natural classification.",
          marks: 4,
          guidance: "Analogous traits arise in organisms with different evolutionary origins that do not share a recent common ancestor, despite showing a similar function; they arise through convergent evolution, and classifying organisms based on analogous traits alone produces an artificial grouping that misrepresents true evolutionary relationships. Homologous traits, by contrast, are structures with similar internal anatomy inherited from a shared common ancestor, even if they now serve very different functions in each descendant lineage; classification based on homologous traits produces a natural grouping that accurately reflects evolutionary relationships, which is why cladistics and modern natural classification systems rely on homologous, not analogous, similarities."
        }
      ]
    },
    {
      context: "Naming and organising the enormous diversity of living organisms requires an internationally agreed, consistent system.",
      parts: [
        {
          label: "c",
          prompt: "Outline the binomial system of classification.",
          marks: 4,
          guidance: "The binomial system assigns every species a two-part scientific name, universally recognised among biologists regardless of language or country, avoiding the confusion of using different common names in different regions. The first part of the name identifies the genus (capitalised) and the second identifies the species (lowercase), and the whole name is conventionally italicised or underlined; organisms are grouped into these classifications based on shared characteristics and evolutionary relationships, allowing scientists worldwide to communicate about a specific organism unambiguously."
        }
      ]
    }
  ],

  "D4.2": [
    {
      context: "Ecosystems change over time, both through the gradual process of ecological succession and through sudden disturbances that test how resilient a community is.",
      parts: [
        {
          label: "a",
          prompt: "Describe how species diversity typically changes during primary succession, from bare rock to a more established community.",
          marks: 3,
          guidance: "Primary succession begins with pioneer species (such as lichens) able to colonise bare, nutrient-poor substrate; as these organisms die and decompose, along with weathering of the rock, soil gradually develops, allowing progressively larger and more complex plants to establish. As more niches become available with this developing soil and vegetation structure, species diversity generally increases across each successive stage, up to a relatively stable climax community."
        },
        {
          label: "b",
          prompt: "Distinguish between the resistance and the resilience of an ecosystem when faced with a disturbance, such as a wildfire or storm.",
          marks: 2,
          guidance: "Resistance describes an ecosystem's ability to remain largely unchanged despite a disturbance (withstanding the disturbance without major disruption), while resilience describes how quickly and effectively an ecosystem can recover and return to its previous state after being disrupted — an ecosystem could have low resistance to a disturbance but still show high resilience by recovering rapidly afterward."
        },
        {
          label: "c",
          prompt: "Explain how a loss of species diversity might affect an ecosystem's resilience to future disturbances.",
          marks: 3,
          guidance: "Greater species diversity generally provides more functional redundancy: several different species may be able to perform a similar ecological role, so if one species is lost or declines after a disturbance, others can partially compensate, helping the ecosystem recover its function more quickly. An ecosystem with lower diversity has fewer such backups, so the loss of even a single key species can have a larger, more lasting impact on ecosystem function and reduce overall resilience."
        }
      ]
    }
  ],

  "D4.3": [
    {
      context: "Average human core body temperature is tightly controlled, but the average surface temperature of the entire Earth has been rising steadily over the past century, driven primarily by human activity.",
      parts: [
        {
          label: "a",
          prompt: "Explain how the burning of fossil fuels has contributed to the rise in Earth's average surface temperature.",
          marks: 2,
          guidance: "Burning fossil fuels releases carbon dioxide, a greenhouse gas, into the atmosphere; increased atmospheric CO2 absorbs more of the long-wave (infrared) radiation re-emitted from Earth's surface, trapping additional heat within the atmosphere rather than letting it escape to space, which raises average surface temperature over time — the enhanced greenhouse effect."
        },
        {
          label: "b",
          prompt: "The melting of polar ice reduces how much sunlight is reflected back into space from Earth's surface. Identify, with a reason, whether this represents a positive or a negative feedback mechanism for climate change.",
          marks: 1,
          guidance: "This is a positive feedback mechanism: rising temperature causes polar ice to melt, and since ice reflects sunlight much more effectively than the darker ocean water or land it exposes, less ice means less sunlight is reflected (lower albedo) and more solar energy is absorbed, warming the surface further and accelerating additional ice melt."
        },
        {
          label: "c",
          prompt: "Discuss two consequences of rising ocean surface temperature for marine ecosystems.",
          marks: 3,
          guidance: "Rising ocean temperature can cause coral bleaching, as corals expel their symbiotic zooxanthellae under thermal stress, depriving them of a major energy source and often leading to coral death if the stress persists. Warmer surface water also increases ocean stratification, making it harder for cooler, nutrient-rich water from the deep ocean to mix upward (upwelling); this reduced nutrient supply can limit phytoplankton growth, with knock-on effects throughout the marine food web."
        }
      ]
    },
    {
      context: "Rising atmospheric carbon dioxide, driven largely by human activity, doesn't just warm the atmosphere, it also directly affects the chemistry of the oceans.",
      parts: [
        {
          label: "c",
          prompt: "Explain the causes of increasing carbon dioxide levels and their effects on ocean life.",
          marks: 7,
          guidance: "The rise in atmospheric CO2 is mostly attributable to human activity: combustion of fossil fuels and deforestation are major contributing factors. In the atmosphere, this extra CO2 absorbs long-wave (infrared) radiation reflected from Earth's surface, enhancing the greenhouse effect and raising global temperatures. A substantial proportion of this excess atmospheric CO2 also dissolves into the ocean, where it reacts with water to form carbonic acid, lowering ocean pH, a process called ocean acidification; this makes it more difficult for organisms such as corals and shelled molluscs to form and maintain their calcium carbonate structures, threatening coral reefs and other calcifying marine life, with knock-on effects throughout marine food webs and ecosystems that depend on these organisms."
        }
      ]
    },
    {
      context: "Rising global temperatures, driven by increasing atmospheric greenhouse gas concentrations, pose a direct and serious threat to coral reef ecosystems around the world.",
      parts: [
        {
          label: "b",
          prompt: "Outline the reasons that climate change is a threat to coral reefs.",
          marks: 5,
          guidance: "Rising atmospheric CO2 and other greenhouse gases enhance the greenhouse effect, increasing global temperatures, including ocean temperatures. When water temperature rises too far, corals expel their symbiotic zooxanthellae algae (coral bleaching), losing both their colour and a major source of nutrients normally supplied by the algae's photosynthesis. This reduced nutrient supply slows coral growth and, if the stress persists, can kill the coral outright; rising CO2 also dissolves into the ocean and lowers its pH (ocean acidification), making it harder for corals to deposit the calcium carbonate they need to build their skeletons, compounding the threat to reef survival."
        }
      ]
    },
    {
      context: "Global mean surface temperature and the amount of solar energy reaching Earth have both been tracked over recent decades, and scientists have compared these two datasets when investigating the causes of recent warming.",
      parts: [
        {
          label: "a",
          prompt: "It has been argued that variation in global mean surface temperature has mainly been caused by variation in energy received from the Sun. Discuss whether this argument is well supported by the available evidence.",
          marks: 2,
          guidance: "The evidence generally does not support this argument: while global surface temperature has shown a clear overall upward trend over recent decades, solar irradiance (energy from the sun) has shown no comparable overall increase, and in some measurements has even slightly decreased; furthermore, the peaks and troughs in solar irradiance data do not closely correspond with the fluctuations seen in surface temperature, which would be expected if solar variation were the primary driver of the observed warming."
        },
        {
          label: "b",
          prompt: "Explain how increased levels of atmospheric carbon dioxide contribute to global warming.",
          marks: 3,
          guidance: "Carbon dioxide absorbs long-wavelength (infrared) radiation; as its atmospheric concentration increases, more of this radiation is trapped within the atmosphere rather than escaping to space. Short-wave radiation from the sun passes through the atmosphere relatively easily and warms Earth's surface, which then re-emits this energy as long-wave radiation; it is specifically this outgoing long-wave radiation that increased CO2 absorbs and re-radiates back toward the surface, raising the average global temperature, the mechanism of the enhanced greenhouse effect."
        },
        {
          label: "c",
          prompt: "State one other gas, besides carbon dioxide, that contributes to global warming.",
          marks: 1,
          guidance: "Suitable answers include methane, nitrous oxide, water vapour, ozone, or CFCs and other halogenated gases, all of which also absorb long-wave radiation and contribute to the greenhouse effect."
        }
      ]
    }
  ],

  "C4.1": [
    {
      context: "Freshwater mussels filter large volumes of water for food, and in doing so can noticeably change water quality, with knock-on effects for other species in the ecosystem.",
      parts: [
        {
          label: "a",
          prompt: "Suggest why the presence of filter-feeding mussels in a body of water might be associated with a lower concentration of cyanobacteria and algae compared with water lacking mussels.",
          marks: 2,
          guidance: "Mussels filter water for food, removing suspended particles including algae and cyanobacteria as they feed; a higher density of actively filtering mussels would therefore be expected to reduce the standing concentration of these organisms in the surrounding water compared with an area without mussels."
        },
        {
          label: "b",
          prompt: "Outline how the population size of a mussel species like Unio pictorum could be estimated in a river.",
          marks: 3,
          guidance: "For a relatively immobile or slow-moving population like mussels, a common approach is quadrat sampling: placing quadrats randomly (or systematically) across the habitat, counting individuals within each quadrat, and using the mean density per quadrat combined with the total habitat area to estimate total population size. A mark-release-recapture approach could also be used if individuals can be safely marked and are mobile enough to redistribute."
        },
        {
          label: "c",
          prompt: "Discuss how overfishing of a species that shares a habitat with mussels could affect the sustainability of both populations, and suggest one way sustainable harvesting could be achieved.",
          marks: 3,
          guidance: "Overfishing a species can disrupt food web interactions (for example, removing a species that normally controls algal grazers or competitors), indirectly affecting water quality and conditions the mussels depend on; more directly, if mussels themselves are harvested faster than they can reproduce, their population may decline permanently. Sustainable harvesting could involve setting catch limits based on population monitoring data, protecting a minimum breeding population, or establishing seasonal closures during reproduction."
        }
      ]
    }
  ],

  "C4.2": [
    {
      context: "All living cells need a continual supply of usable energy, but different groups of organisms have evolved very different strategies for obtaining it.",
      parts: [
        {
          label: "a",
          prompt: "Explain the properties of ATP that make it well suited to distributing energy within a cell.",
          marks: 3,
          guidance: "ATP acts as an immediately usable energy currency: energy is released in a relatively small, manageable amount when its terminal phosphate bond is hydrolysed to form ADP and inorganic phosphate, an amount well matched to powering individual cellular reactions (such as active transport) without excessive waste. Because it can be regenerated quickly from ADP using energy released by respiration, cells can maintain a small, rapidly-recycled pool of ATP rather than needing to store large reserves."
        },
        {
          label: "b",
          prompt: "Compare and contrast how different types of heterotroph (such as holozoic consumers, saprotrophs, and parasites) obtain the energy they need to produce ATP.",
          marks: 5,
          guidance: "All heterotrophs share the underlying similarity of obtaining organic compounds (and the energy stored within them) from other organisms rather than synthesising their own food. They differ in how they acquire this material: holozoic consumers ingest whole or bulk food and digest it internally; saprotrophs secrete digestive enzymes externally onto dead organic matter and absorb the resulting products; and parasites obtain nutrients directly from a living host, often without killing it (at least immediately), distinguishing them from typical predator-prey relationships."
        }
      ]
    },
    {
      context: "Carbon is an essential element for life on Earth and must be continually distributed and recycled within ecosystems.",
      parts: [
        {
          label: "a",
          prompt: "Outline the chemical properties of carbon that allow it to form such a wide diversity of biological compounds.",
          marks: 4,
          guidance: "Carbon can form four covalent bonds at once, allowing it to bond with several other atoms simultaneously; it forms strong, stable covalent bonds with itself and with other non-metallic elements, can form single, double, or triple bonds, and can link into branched or unbranched chains as well as single or multiple rings, all of which combine to give carbon-based molecules enormous structural variety."
        },
        {
          label: "b",
          prompt: "Describe the processes involved in the transfer of carbon within an ecosystem.",
          marks: 4,
          guidance: "Carbon dioxide is stored short-term in the atmosphere and dissolved in water; photosynthesis fixes this CO2 into organic carbon compounds in producers; feeding then passes that organic carbon along food chains from producers to consumers; cellular respiration in all organisms returns carbon back to the environment as CO2; some carbon is stored long-term in fossil fuels, limestone, or forest biomass; and decomposition by decomposers also returns carbon to the atmosphere and soil, completing the cycle."
        },
        {
          label: "c",
          prompt: "Explain the impact of human activity on climate change.",
          marks: 7,
          guidance: "The greenhouse effect describes how greenhouse gases absorb long-wave radiation re-emitted from Earth's surface, trapping heat within the atmosphere; burning fossil fuels, peat, and natural gas releases additional CO2 beyond what natural cycles can absorb, while deforestation reduces the amount of CO2 that can be taken up by photosynthesis, and agriculture (particularly livestock and rice cultivation) adds methane, another potent greenhouse gas. Together, these anthropogenic sources have raised atmospheric greenhouse gas concentrations well above pre-industrial levels, enhancing the natural greenhouse effect and driving a sustained rise in global average temperature, with knock-on effects including ice melt, sea level rise, and shifting climate patterns."
        }
      ]
    },
    {
      context: "Carbon moves continuously between the atmosphere and living organisms, both being removed by some biological processes and released back into the atmosphere by others.",
      parts: [
        {
          label: "c",
          prompt: "Describe processes in the carbon cycle that either produce or use carbon dioxide.",
          marks: 7,
          guidance: "Photosynthesis uses carbon dioxide, reducing its concentration in the atmosphere as autotrophs (plants, algae, and cyanobacteria) fix it into organic carbon compounds; this fixed carbon then passes along food chains as consumers feed on producers and on each other. Cellular respiration, carried out by producers, consumers, and decomposers alike, releases carbon dioxide back into the atmosphere as organic compounds are broken down for energy; combustion of fossil fuels and of biomass (such as forest fires) also releases stored carbon as CO2, while decomposition of dead organic matter by decomposers returns yet more carbon to the atmosphere and soil, completing the cycle."
        }
      ]
    },
    {
      context: "Every population within an ecological community depends on other populations, directly or indirectly, for its supply of energy, ultimately traceable back to a single common source.",
      parts: [
        {
          label: "a",
          prompt: "Describe how populations within a community rely on each other for supplies of energy.",
          marks: 7,
          guidance: "Autotrophs (producers), such as plants and photosynthetic bacteria, convert light energy into chemical energy through photosynthesis, providing the initial energy input for the entire community; this energy then flows along food chains and through interconnected food webs as consumers feed on producers and, in turn, on each other. Energy transfer is never perfectly efficient, since a substantial proportion is lost as heat through respiration and other life processes at every trophic level, meaning each successive trophic level has less available energy than the one before it, illustrating how deeply every population in a community, whether producer, consumer, or decomposer, ultimately depends on this single flow of energy originating with the autotrophs."
        }
      ]
    }
  ],

  "A4.2": [
    {
      context: "Widespread deforestation in Southeast Asia's Greater Mekong region has raised concerns about its impact on regional biodiversity.",
      parts: [
        {
          label: "a",
          prompt: "Outline two ways in which large-scale deforestation could affect biodiversity in an affected region.",
          marks: 2,
          guidance: "Deforestation destroys habitat, shelter, and nesting sites for forest-dependent species, and removes food sources, disrupting existing food chains; it can also increase soil erosion (since roots no longer hold the soil together), degrading habitats for organisms living in and around the soil."
        },
        {
          label: "b",
          prompt: "State one cause of the current global biodiversity crisis other than deforestation.",
          marks: 1,
          guidance: "Acceptable causes include overhunting/overfishing, habitat loss from urbanisation and agriculture, pollution, climate change, and the spread of invasive species or disease."
        },
        {
          label: "c",
          prompt: "Outline the purpose of a conservation initiative like the EDGE of Existence programme, which prioritises species that are both Evolutionarily Distinct and Globally Endangered.",
          marks: 2,
          guidance: "Such programmes prioritise conservation funding and effort toward species that represent a large, irreplaceable amount of unique evolutionary history (species with few or no close living relatives) and that are simultaneously at serious risk of extinction, aiming to minimise the loss of evolutionary diversity even with limited conservation resources."
        }
      ]
    },
    {
      context: "Global conservation efforts must often prioritise which species receive limited funding and attention, and various frameworks exist to guide this decision-making.",
      parts: [
        {
          label: "a",
          prompt: "Describe the role of a conservation initiative such as the EDGE of Existence programme.",
          marks: 2,
          guidance: "The EDGE of Existence programme prioritises species for conservation that are both globally endangered and evolutionarily distinct, meaning they have few or no close living relatives and would represent an irreplaceable loss of unique evolutionary history if they went extinct. This approach helps ensure that limited conservation resources are directed toward preserving the greatest possible amount of overall biodiversity and evolutionary heritage, often working in partnership with local communities and conservation groups on the ground."
        }
      ]
    }
  ],

  "B2.1": [
    {
      context: "Membranes are versatile structures whose composition and organisation allow them to carry out very different jobs in different parts of the cell.",
      parts: [
        {
          label: "a",
          prompt: "Discuss how membranes allow eukaryotic cells to be compartmentalised.",
          marks: 4,
          guidance: "Internal membranes divide the cell into distinct organelles, some (like the nucleus, mitochondria, and chloroplasts) bounded by a double membrane. This compartmentalisation allows enzymes and substrates for a given pathway to be concentrated together in a small volume, keeps incompatible or potentially harmful processes (such as digestive enzymes in lysosomes) physically separated from the rest of the cytoplasm, and allows very different internal chemical environments to be maintained side by side within the same cell."
        },
        {
          label: "b",
          prompt: "Describe the main methods cells use to move substances into and out of themselves.",
          marks: 7,
          guidance: "A thorough answer covers several transport mechanisms: simple diffusion (passive movement of small or non-polar substances directly across the phospholipid bilayer, down a concentration gradient); facilitated diffusion (passive movement of larger or polar/charged substances through channel or carrier proteins, still down a concentration gradient); active transport (movement against a concentration gradient using ATP, via specific pump proteins); and bulk transport via endocytosis and exocytosis (vesicle-based movement of larger particles or large quantities of material, also requiring energy)."
        },
        {
          label: "c",
          prompt: "Explain the role of the membrane in the depolarization and repolarization of a neuron's axon.",
          marks: 4,
          guidance: "Depolarization occurs when voltage-gated sodium channels open, allowing sodium ions to diffuse into the axon down their electrochemical gradient (facilitated diffusion), making the inside of the membrane more positive. Repolarization then follows as voltage-gated potassium channels open, allowing potassium ions to diffuse out of the axon by facilitated diffusion, restoring the negative resting potential; the sodium-potassium pump subsequently restores the original ion gradients using active transport."
        }
      ]
    },
    {
      context: "Our understanding of cell membrane structure has changed over time as new evidence became available, from an early 'sandwich' model to the fluid mosaic model used today.",
      parts: [
        {
          label: "b",
          prompt: "Distinguish between the fluid mosaic model of the cell membrane and the earlier Davson-Danielli model.",
          marks: 1,
          guidance: "The Davson-Danielli model proposed that membrane proteins formed continuous layers coating the outside and inside surfaces of the phospholipid bilayer, like the outer layers of a sandwich; the fluid mosaic model instead proposes that proteins are individually embedded within the bilayer itself, scattered throughout it like tiles in a mosaic rather than forming continuous surface layers."
        },
        {
          label: "c",
          prompt: "Explain the role of a transport protein such as the sodium-potassium pump within the membrane of a nerve axon.",
          marks: 3,
          guidance: "The sodium-potassium pump uses active transport, hydrolysing ATP to provide the energy needed to move ions against their concentration gradients; each cycle pumps sodium ions out of the axon and potassium ions into it. By continuously maintaining these ion gradients, the pump helps establish and maintain the resting membrane potential, the foundation upon which action potentials and nerve impulse transmission depend."
        }
      ]
    },
    {
      context: "Cell size cannot increase indefinitely, and one key limiting factor relates directly to the relationship between a cell's surface area and its volume.",
      parts: [
        {
          label: "a",
          prompt: "Outline the significance of surface area to volume ratio in limiting cell size.",
          marks: 4,
          guidance: "A cell's surface area determines the maximum rate at which materials (nutrients, gases, waste products) can be exchanged with its surroundings; as a cell increases in size, its overall metabolic activity also increases, meaning it needs to take in more substances and excrete more waste. However, volume increases faster than surface area as a cell grows larger (surface area increases with the square of linear dimensions, while volume increases with the cube), so the surface area to volume ratio falls as cells get bigger; beyond a certain size, the available surface area becomes insufficient to support the cell's growing metabolic demands, which is why cells tend to divide rather than simply continuing to grow indefinitely."
        },
        {
          label: "b",
          prompt: "Describe transport across cell membranes by osmosis.",
          marks: 4,
          guidance: "Osmosis is a specific form of diffusion involving the movement of water molecules (rather than solute molecules) across a partially permeable membrane; water moves from a region of lower solute concentration to a region of higher solute concentration, or equivalently, from higher to lower water potential, until equilibrium is reached (or until a counteracting pressure, such as turgor pressure in a plant cell, opposes further net movement). This passive process requires no energy input from the cell, since it is driven entirely by the random movement of water molecules down their concentration gradient."
        }
      ]
    }
  ],

  "D3.3": [
    {
      context: "Average human core body temperature sits within a narrow range, tightly regulated by homeostatic feedback mechanisms — a regulation problem that scales up, in a very different way, to the entire planet's temperature.",
      parts: [
        {
          label: "a",
          prompt: "Outline one physiological change that occurs in the human body in response to a rise in core body temperature, and identify whether it represents positive or negative feedback.",
          marks: 2,
          guidance: "A rise in core temperature triggers vasodilation of blood vessels near the skin surface, increasing blood flow to the skin and heat loss to the environment; this is an example of negative feedback, since the response acts to counteract and reverse the original change (the rise in temperature), returning the body toward its normal set point."
        },
        {
          label: "b",
          prompt: "Chemoreceptors monitor blood pH to help regulate breathing rate. Outline where in the body these chemoreceptors are located and what change they detect.",
          marks: 2,
          guidance: "Chemoreceptors involved in monitoring blood pH are located in the brainstem (medulla oblongata) and in the walls of major blood vessels such as the carotid arteries and aorta; they detect a rise in dissolved carbon dioxide (and the corresponding fall in blood pH) and signal the respiratory centre to increase ventilation rate."
        }
      ]
    },
    {
      context: "The kidney precisely regulates the water content of the blood by controlling how concentrated or dilute the final urine becomes, using a combination of specialised tubule structure and hormonal control.",
      parts: [
        {
          label: "c",
          prompt: "Explain how ADH and the structure of the loop of Henle work together to control the concentration of urine.",
          marks: 7,
          guidance: "The loop of Henle establishes a region of high solute concentration deep within the medulla of the kidney: the ascending limb actively pumps sodium ions out of the filtrate into the surrounding tissue, while remaining impermeable to water, whereas the descending limb is permeable to water (but not sodium), allowing water to move out of the filtrate into the increasingly concentrated medulla as the filtrate flows down. This creates a steep concentration gradient that the collecting duct later passes back through. Antidiuretic hormone (ADH), released from the posterior pituitary gland when blood water potential is too low, increases the permeability of the collecting duct's walls to water by inserting more aquaporin channels; this allows more water to be reabsorbed from the filtrate into the concentrated medulla as it passes through, producing a smaller volume of more concentrated urine, and helping restore blood water potential back toward normal."
        }
      ]
    },
    {
      context: "Water is often called the medium of life, and the kidney plays a central role in maintaining the body's water and solute balance despite constantly changing intake and losses.",
      parts: [
        {
          label: "c",
          prompt: "Explain the role of the kidney in osmoregulation.",
          marks: 8,
          guidance: "Osmoregulation is the regulation of the body's water and solute (salt) balance. The nephron is the kidney's functional unit: ultrafiltration in the glomerulus forces small molecules (including water, salts, and waste) out of the blood and into Bowman's capsule, forming filtrate; useful substances are then selectively reabsorbed back into the blood as filtrate travels through the nephron. The loop of Henle establishes and maintains a region of high solute concentration deep in the medulla (through active transport of ions in the ascending limb, while the descending limb remains permeable to water); this concentration gradient allows water to be drawn out of the collecting duct by osmosis. ADH, released when the blood is too concentrated, increases the collecting duct's permeability to water, increasing reabsorption and producing a smaller volume of more concentrated urine, restoring the blood's water balance."
        }
      ]
    },
    {
      context: "When the body becomes dehydrated, several coordinated physiological responses work together to restore normal water balance.",
      parts: [
        {
          label: "c",
          prompt: "Explain how water balance is restored in mammals when they are dehydrated.",
          marks: 7,
          guidance: "Dehydration triggers the sensation of thirst, prompting increased water intake, and can also increase water reabsorption from the large intestine (colon). Internally, osmoreceptors in the hypothalamus detect the resulting rise in blood solute concentration; this triggers secretion of ADH from the posterior pituitary gland, which travels in the blood to the kidney and increases the permeability of the collecting duct (and distal convoluted tubule) to water by inserting more aquaporin channels. This allows more water to be reabsorbed from the filtrate back into the blood, producing a smaller volume of more concentrated urine and helping restore blood water potential back toward normal, completing a negative feedback loop."
        }
      ]
    },
    {
      context: "Excretion, the removal of metabolic waste products, is one of the defining functions of life, and different organisms have evolved very different structures to achieve it.",
      parts: [
        {
          label: "a",
          prompt: "Outline how carbon dioxide, carried to the lungs in the blood, is moved out to the air outside the body.",
          marks: 7,
          guidance: "Carbon dioxide is excreted at the alveoli, which are surrounded by a dense network of capillaries; the gas diffuses from the blood into the alveolar air space, moving from an area of higher concentration in the blood to lower concentration in the alveolus, following its concentration gradient. This diffusion is aided by the alveolus and capillary walls both being thin (often just a single layer of cells), minimising the diffusion distance, and by continuous fresh airflow into and out of the lungs during breathing, which maintains a steep concentration gradient for CO2 to diffuse down."
        },
        {
          label: "b",
          prompt: "Explain how the kidney produces urine with a higher concentration of urea than is found in blood plasma.",
          marks: 5,
          guidance: "Urea is filtered out of the blood plasma at the glomerulus during ultrafiltration, entering Bowman's capsule as part of the filtrate along with water and other small molecules. As this filtrate passes through the nephron, particularly the proximal convoluted tubule and later the collecting duct, water is selectively reabsorbed back into the blood, especially in the presence of ADH, since the surrounding medulla tissue is hypertonic relative to the filtrate; because urea itself is not significantly reabsorbed along with this water, its concentration within the remaining filtrate steadily rises, resulting in urine that is considerably more concentrated in urea than the original blood plasma."
        },
        {
          label: "c",
          prompt: "Compare and contrast excretion in humans with excretion in unicellular organisms such as Paramecium.",
          marks: 3,
          guidance: "As a similarity, both humans and Paramecium excrete carbon dioxide and other waste products of metabolism. As differences: humans possess specialised excretory organs (such as the kidneys and lungs), while Paramecium, being unicellular, has no such dedicated organs and instead excretes waste directly across its cell surface (or via a contractile vacuole, in the specific case of excess water); this reflects the greater structural complexity and specialisation possible in a multicellular organism compared with a single cell."
        }
      ]
    },
    {
      context: "Antidiuretic hormone (ADH), a peptide hormone synthesised in the hypothalamus and released from the posterior pituitary gland, regulates the body's water balance in response to changes in blood osmolarity.",
      parts: [
        {
          label: "a",
          prompt: "State the relationship between blood plasma osmolarity and ADH concentration.",
          marks: 1,
          guidance: "There is a direct (positive) relationship: the higher the osmolarity of the blood plasma, the higher the concentration of ADH released."
        },
        {
          label: "b",
          prompt: "Explain how a peptide hormone such as ADH produces its effect on a target cell.",
          marks: 3,
          guidance: "Peptide hormones like ADH bind to specific receptors on the plasma membrane of the target cell, since they cannot pass directly through the hydrophobic bilayer themselves; this binding activates a second-messenger cascade inside the cell, which then triggers changes such as the synthesis or activation of specific proteins (for example, increasing the number of aquaporin channels in a kidney collecting duct cell). Peptide hormones do not enter the target cell directly, unlike steroid hormones, which can diffuse across the membrane."
        },
        {
          label: "c",
          prompt: "State the reason the posterior pituitary gland is classified as an endocrine gland.",
          marks: 1,
          guidance: "It secretes hormones (such as ADH) directly into the bloodstream, the defining feature of an endocrine gland, as opposed to exocrine glands, which release their products through a duct rather than directly into the blood."
        }
      ]
    }
  ],

  "C3.1": [
    {
      context: "Lyme disease, transmitted by tick bites, can affect several body systems at once, illustrating how different systems interact when the body responds to infection.",
      parts: [
        {
          label: "a",
          prompt: "Explain how a capture-mark-release-recapture method could be used to estimate the size of a wild tick population.",
          marks: 3,
          guidance: "A sample of ticks is captured, marked in a way that doesn't affect their survival, and released back into the population; after enough time has passed for the marked individuals to mix randomly with the rest of the population, a second sample is captured, and the number of marked individuals within it is recorded. The total population size can then be estimated using the Lincoln index, based on the proportion of marked individuals recaptured."
        },
        {
          label: "b",
          prompt: "State both parts of the central nervous system, which can be affected by the neurological symptoms of some tick-borne infections.",
          marks: 1,
          guidance: "The brain and the spinal cord."
        },
        {
          label: "c",
          prompt: "Explain what a rise and later fall in antibody concentration after vaccination indicates about the immune response over time.",
          marks: 2,
          guidance: "A rise in antibody concentration reflects the activation of B-lymphocytes producing antibodies in response to the antigen (from the vaccine); the subsequent fall reflects the natural decline in active antibody production once the antigen has been cleared, though memory B-cells persist and can produce a faster, stronger response if the same antigen is encountered again in future."
        }
      ]
    }
  ],

  "B3.3": [
    {
      context: "Physical therapists use goniometers to measure how far a joint can move, providing insight into how mobility changes with age.",
      parts: [
        {
          label: "a",
          prompt: "Describe how the range of motion of a joint, such as the knee or hip, can be measured.",
          marks: 3,
          guidance: "A goniometer (or a computer-based image analysis tool) is used, with its centre aligned to the centre of the joint and its arms lined up along the two limb segments either side of the joint. The joint is then moved through its full range (for example, from fully extended to fully flexed), and the angle at each extreme is read from the goniometer's scale, giving the total range of motion."
        },
        {
          label: "b",
          prompt: "Distinguish between the skeletal support systems of arthropods and vertebrates.",
          marks: 2,
          guidance: "Arthropods have an exoskeleton, a hard, jointed covering on the outside of the body, made of chitin, which must be periodically shed (moulted) to allow growth. Vertebrates have an internal endoskeleton made of bone and cartilage, which grows continuously with the animal and provides an internal framework for muscle attachment, rather than external protection."
        }
      ]
    },
    {
      context: "Muscle contraction depends on the coordinated interaction of two specific protein filaments, arranged within a repeating structural unit.",
      parts: [
        {
          label: "c",
          prompt: "Explain the roles of proteins in muscle contraction.",
          marks: 7,
          guidance: "Muscle contraction depends on two protein filaments: actin (thin filaments) and myosin (thick filaments), organised together into repeating units called sarcomeres, with actin filaments anchored to structures called Z-lines at either end of each sarcomere. Myosin filaments carry projecting heads that can bind to specific sites on the actin filament, but at rest these binding sites are physically blocked by a regulatory protein; when calcium ions are released and bind to this regulatory protein, it changes shape and exposes the myosin-binding sites, allowing the myosin heads to attach to actin and form cross-bridges. Using energy from ATP hydrolysis, the myosin heads then bend and pull the actin filaments inward toward the centre of the sarcomere, sliding the actin and myosin past one another (the sliding filament model) and shortening the whole sarcomere, which is what generates the physical force of muscle contraction."
        }
      ]
    },
    {
      context: "The human elbow joint relies on a pair of muscles working in opposition to bend and straighten the arm, illustrating a general principle of how skeletal muscles control movement at a joint.",
      parts: [
        {
          label: "b",
          prompt: "Outline the antagonistic action of the muscles at the elbow joint.",
          marks: 2,
          guidance: "Antagonistic muscles work in opposition to each other, so that when one contracts, the other relaxes, producing opposite movements at the joint; at the elbow, the biceps contracts to bend (flex) the arm, pulling the forearm upward, while the triceps contracts to straighten (extend) the arm back out."
        },
        {
          label: "c",
          prompt: "State one reason that striated (skeletal) muscle cells are considered atypical compared with most other human cell types.",
          marks: 1,
          guidance: "Striated muscle cells are atypical because each cell (fibre) contains multiple nuclei rather than the single nucleus found in most other human cell types, and they are also unusually large and elongated compared with typical cells."
        },
        {
          label: "d",
          prompt: "Explain how specialised cardiac muscle cells initiate each heartbeat.",
          marks: 3,
          guidance: "Cardiac muscle is myogenic, meaning it can contract rhythmically without requiring external nerve stimulation to initiate each beat. The sinoatrial (SA) node, a specialised region of cardiac muscle, acts as the heart's natural pacemaker, spontaneously generating an action potential; this electrical signal then propagates across the muscle of the atria and, after a brief delay, the ventricles, stimulating coordinated contraction and producing each heartbeat."
        }
      ]
    }
  ],

  "B3.1": [
    {
      context: "There is a close relationship between the molecular structure of the genetic code, its expression, and the physical structures it ultimately produces.",
      parts: [
        {
          label: "a",
          prompt: "Describe the relationship between mRNA codons and the structure of the resulting polypeptide.",
          marks: 4,
          guidance: "A codon is a sequence of three mRNA bases, and each codon specifies (codes for) one particular amino acid or a stop signal; one specific codon (AUG) both codes for methionine and typically initiates translation, while three codons act as stop codons that terminate translation. Each codon is recognised through complementary base pairing with the anticodon on a specific tRNA molecule, which delivers the corresponding amino acid to be added to the growing polypeptide chain in the order specified by the sequence of codons."
        },
        {
          label: "b",
          prompt: "Explain the underlying causes of decreased blood pH during exercise and describe its effect on ventilation rate.",
          marks: 8,
          guidance: "During exercise, an increased rate of cellular respiration raises CO2 production; if oxygen supply cannot keep pace with demand, cells may also respire anaerobically, producing lactic acid. Dissolved CO2 reacts with water to form carbonic acid, which dissociates and releases hydrogen ions, lowering blood pH. Chemoreceptors (in the brainstem and major arteries) detect this fall in pH and signal the respiratory centre, which increases the rate and depth of breathing (ventilation); this increased ventilation expels more CO2 from the lungs, which shifts the chemical equilibrium and helps restore blood pH back toward normal — a negative feedback response linking cellular metabolism, blood chemistry, and breathing control."
        }
      ]
    },
    {
      context: "Efficient gas exchange in the human lung depends on several structural features of the alveoli working together.",
      parts: [
        {
          label: "b",
          prompt: "Describe the conditions necessary in the lungs for efficient gas exchange in humans.",
          marks: 3,
          guidance: "Alveoli provide a very large total surface area for gas diffusion; their walls, formed by type I pneumocytes, are extremely thin (often just one cell thick), minimising the diffusion distance between air and blood. A moist surface lines the alveoli, allowing oxygen and carbon dioxide to dissolve before diffusing across; type II pneumocytes secrete pulmonary surfactant, which reduces surface tension and prevents the alveoli from collapsing, while a dense surrounding capillary network maintains a steep concentration gradient by constantly carrying blood past the exchange surface."
        }
      ]
    }
  ],

  "B3.2": [
    {
      context: "Water can be transported hundreds of metres up a tree, but the mechanism behind this varies depending on conditions like humidity.",
      parts: [
        {
          label: "a",
          prompt: "Outline two structural adaptations of xylem vessels that support the efficient transport of water.",
          marks: 2,
          guidance: "Suitable adaptations include: the lack of living cell contents, which minimises resistance to water flow; lignified walls, which allow the vessel to withstand the tension created during transpiration without collapsing; and the absence (or incompleteness) of end walls between adjoining cells, which creates a long, continuous, unimpeded tube."
        },
        {
          label: "b",
          prompt: "On a humid day, transpiration slows dramatically. Explain how water can still be moved from the soil into the xylem and up to the leaves under these conditions.",
          marks: 3,
          guidance: "Even without much transpirational pull, root cells can actively transport mineral ions into the xylem, which lowers the water potential inside the xylem relative to the surrounding root tissue; this causes water to move into the xylem from the surrounding cells by osmosis, generating a positive root pressure that can push water upward through the xylem independently of transpiration."
        }
      ]
    },
    {
      context: "Plants must move large volumes of water from their roots to their leaves through specialised transport tissue, without any pump equivalent to a heart.",
      parts: [
        {
          label: "a",
          prompt: "Outline two adaptations of xylem vessels that suit them to transporting water.",
          marks: 2,
          guidance: "Xylem vessels lack living cell contents, leaving them hollow and largely empty, which minimises resistance to the flow of water; their end walls are incomplete or absent, creating a long, continuous tube for water to move through; their walls are strengthened with lignin, allowing them to withstand the tension generated during transpiration without collapsing; and small pits or pores in their walls allow water to move sideways between adjacent vessels."
        },
        {
          label: "b",
          prompt: "Explain how transpiration causes the movement of water through a plant.",
          marks: 3,
          guidance: "Water evaporates from the walls of mesophyll cells into the leaf's internal air spaces and is lost through open stomata (transpiration); this loss draws more water out of the xylem to replace it, and because water molecules cohere strongly to one another through hydrogen bonding, this creates a continuous pulling force (tension) that is transmitted all the way down the column of water in the xylem to the roots. Adhesion between water and the polar walls of the xylem further assists this movement, together drawing a steady stream of water up from the roots to replace what is lost at the leaf surface."
        }
      ]
    },
    {
      context: "Scientists studying how sugars move through a plant have used aphid stylets (the piercing mouthparts aphids use to feed on phloem sap) to sample phloem contents directly, along with radioactive tracers, to understand how transport occurs from source to sink.",
      parts: [
        {
          label: "b",
          prompt: "Explain how sugars are transported from sources to sinks in the phloem.",
          marks: 2,
          guidance: "At the source (such as a photosynthesising leaf), sugars are actively loaded into the phloem sieve tubes, using energy to move them against their concentration gradient; this raises the solute concentration inside the phloem at the source, causing water to enter by osmosis and raising the hydrostatic pressure there. At the sink (such as a growing root or fruit), sugars are removed and used or stored, lowering pressure at that end; the resulting pressure difference along the phloem drives a mass flow of sugary sap from the high-pressure source toward the low-pressure sink."
        }
      ]
    },
    {
      context: "Water's unusual physical properties are central to how plants move it efficiently over long distances, from the roots all the way up to the leaves.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the properties of water make it an ideal transport medium in plants.",
          marks: 4,
          guidance: "Water is a polar molecule, and hydrogen bonds form between neighbouring water molecules as a result; these hydrogen bonds give water strong cohesion, meaning water molecules stick together, which allows tension (low, negative pressure) generated by transpiration at the leaves to be transmitted all the way down a continuous, unbroken column of water in the xylem. Adhesion between water and the cellulose of the xylem cell walls further assists this movement, helping to counteract gravity and maintain the water column as it's drawn upward through the plant."
        },
        {
          label: "b",
          prompt: "Distinguish between the xylem and phloem of plants.",
          marks: 4,
          guidance: "Xylem is made of dead cells, forming hollow, lignified vessels that transport water and dissolved mineral ions in one direction only, upward from the roots. Phloem, by contrast, is made of living cells (sieve tube elements, supported by companion cells), and transports sugars produced by photosynthesis; unlike xylem's exclusively upward, root-to-leaf transport, phloem transport can occur in either direction depending on where sugar sources and sinks are located within the plant at a given time."
        }
      ]
    },
    {
      context: "The four chambers of the human heart each play a specific role in ensuring blood circulates efficiently around the body and lungs.",
      parts: [
        {
          label: "c",
          prompt: "Explain the function of the left ventricle in the cardiac cycle.",
          marks: 2,
          guidance: "The left ventricle receives oxygenated blood from the left atrium and contracts forcefully, generating high pressure to pump this blood out through the aorta to the rest of the body (excluding the lungs); its contraction is triggered by an electrical signal originating at the sinoatrial node and passing through the atrioventricular node, and its muscular wall is notably thicker than the right ventricle's, reflecting the greater pressure needed to push blood all the way around the systemic circulation rather than just to the nearby lungs."
        }
      ]
    },
    {
      context: "Cardiovascular diseases, which include diseases of the heart and blood vessels, remain one of the leading causes of death worldwide, and their risk is influenced by a combination of genetic, lifestyle, and physiological factors.",
      parts: [
        {
          label: "a",
          prompt: "Suggest one reason for a difference in the incidence of coronary heart disease (CHD) between males and females.",
          marks: 1,
          guidance: "Suitable reasons include genetic differences between the sexes, differences in sex hormone levels (which can affect cardiovascular risk), differences in typical diet (for example, differing average saturated fat intake), or differences in lifestyle factors such as smoking, activity level, or stress."
        },
        {
          label: "b",
          prompt: "Outline the causes of hypertension (high blood pressure).",
          marks: 2,
          guidance: "Hypertension can result from excessive salt or fat intake in the diet, reduced flexibility (elasticity) in the arteries, or the build-up of arterial plaque (atheroma) that narrows blood vessels; lifestyle factors such as smoking, obesity, low physical activity, and chronic stress, along with age and genetic predisposition, also contribute to increased risk of hypertension."
        },
        {
          label: "c",
          prompt: "Describe how an electrocardiogram (ECG) can be used to demonstrate that a person's heart is beating normally.",
          marks: 3,
          guidance: "An ECG measures the electrical activity generated by the heart as it beats; a regular, evenly spaced pattern of peaks (an even R-R interval, representing the time between successive heartbeats) indicates a normal, rhythmic heart rate. A regular P-wave preceding each main peak indicates normal electrical activity originating from the sinoatrial node, and consistent, expected wave shapes and timings throughout the trace together confirm the heart is beating in a coordinated, healthy pattern."
        }
      ]
    },
    {
      context: "Hormones travel through the bloodstream to reach distant target tissues, entering and leaving the circulation through the smallest blood vessels in the body.",
      parts: [
        {
          label: "b",
          prompt: "Outline two adaptations of capillaries that allow efficient exchange of substances, such as hormones, with the surrounding tissue.",
          marks: 2,
          guidance: "Capillary walls are extremely thin, often just one cell thick, minimising the diffusion distance for substances moving between blood and tissue; many capillaries also have small pores or fenestrations in their walls, increasing permeability and allowing faster exchange, and their narrow diameter allows a dense network of capillaries to run close to almost every cell in the body, further shortening the distance any substance needs to travel by diffusion."
        }
      ]
    }
  ],

  "C2.2": [
    {
      context: "A microscope image shows a myelinated neuron making contact with a muscle cell, illustrating several features shared between very different specialised cell types.",
      parts: [
        {
          label: "a",
          prompt: "State, with a reason, whether a neuron showing a myelin sheath around its axon is insulated.",
          marks: 1,
          guidance: "Yes, it is insulated — the presence of a myelin sheath (formed by Schwann cells wrapped around the axon) provides electrical insulation, which speeds up impulse conduction via saltatory conduction between the gaps (nodes of Ranvier)."
        },
        {
          label: "b",
          prompt: "List two structures that neurons share in common with prokaryotic cells.",
          marks: 2,
          guidance: "Both possess a plasma membrane, cytoplasm, DNA, and ribosomes — the basic features shared by essentially all cell types, despite the enormous structural differences between a highly specialised neuron and a bacterium."
        },
        {
          label: "c",
          prompt: "Describe how neurotransmitters are released from the presynaptic membrane at a synapse.",
          marks: 3,
          guidance: "When an action potential reaches the end of the presynaptic neuron, the resulting depolarization opens voltage-gated calcium channels, allowing calcium ions to diffuse into the neuron. This calcium influx triggers synaptic vesicles containing neurotransmitter to move toward and fuse with the presynaptic membrane, releasing their contents into the synaptic cleft by exocytosis."
        }
      ]
    },
    {
      context: "Neurons are highly specialised cells, and their basic structure allows for both rapid impulse conduction and precise chemical communication with neighbouring cells.",
      parts: [
        {
          label: "a",
          prompt: "Identify the structure that receives an impulse from an adjacent neuron and state its function.",
          marks: 2,
          guidance: "This structure is the dendrite; dendrites receive signals (via neurotransmitters) from adjacent neurons and conduct the resulting impulse toward the cell body, where it can then be passed on down the axon if the stimulus is strong enough."
        },
        {
          label: "b",
          prompt: "Describe how an excitatory postsynaptic potential is generated at a synapse.",
          marks: 3,
          guidance: "An arriving impulse causes calcium ions to move into the presynaptic neuron, which triggers the release of neurotransmitter (such as acetylcholine) from the presynaptic membrane by exocytosis; the neurotransmitter then diffuses across the synaptic cleft and binds to specific receptors on the postsynaptic membrane. This binding opens ligand-gated ion channels, allowing positively charged ions such as sodium to diffuse into the postsynaptic neuron, which makes the inside of that neuron's membrane slightly more positive (less negative) than resting potential, an excitatory postsynaptic potential, that brings the neuron closer to the threshold needed to trigger its own action potential."
        }
      ]
    },
    {
      context: "Cholinergic synapses, which use acetylcholine as their neurotransmitter, are widespread throughout the body and are the target of certain pesticides, including neonicotinoids.",
      parts: [
        {
          label: "b",
          prompt: "Outline how depolarization of an axon's membrane occurs.",
          marks: 2,
          guidance: "Local depolarization causes voltage-gated sodium channels to open, altering the membrane's permeability to sodium ions and allowing them to diffuse rapidly into the axon down their electrochemical gradient; this shifts the membrane potential from negative to positive, and if a threshold potential is reached, this local change triggers a full action potential."
        },
        {
          label: "c",
          prompt: "Explain how acetylcholine initiates an action potential at a postsynaptic membrane.",
          marks: 2,
          guidance: "Acetylcholine released from the presynaptic neuron diffuses across the synaptic cleft and binds to a specific receptor protein on the postsynaptic membrane; this binding causes a change in the receptor protein's conformation (tertiary structure), opening an associated channel that allows sodium ions to diffuse into the postsynaptic cell, depolarising the membrane and, if strong enough, triggering a new action potential."
        }
      ]
    },
    {
      context: "Synaptic transmission relies on a precise sequence of events triggered by an arriving nerve impulse, and this same synaptic machinery can be disrupted by certain insecticides.",
      parts: [
        {
          label: "b",
          prompt: "Outline how a neuron is stimulated to release neurotransmitter at a synapse.",
          marks: 2,
          guidance: "The arrival of a nerve impulse (action potential) at the presynaptic terminal causes depolarization, which stimulates voltage-gated calcium channels to open; calcium ions then enter the presynaptic knob, and this calcium influx causes neurotransmitter-containing vesicles to move toward and fuse with the presynaptic membrane, releasing their neurotransmitter contents into the synaptic cleft by exocytosis."
        },
        {
          label: "c",
          prompt: "Explain the action of neonicotinoid pesticides on the nervous system of insects.",
          marks: 3,
          guidance: "Neonicotinoid pesticides are structurally similar to the neurotransmitter acetylcholine and bind to acetylcholine receptors on the postsynaptic membrane; unlike acetylcholine, however, neonicotinoids are not broken down by the enzyme acetylcholinesterase, so they remain bound and continue to stimulate the receptor. This prevents normal synaptic transmission, since the receptor is left in a continuously activated, overstimulated state, disrupting normal nerve signalling and ultimately proving fatal to the insect at sufficient doses."
        }
      ]
    }
  ],

  "C2.1": [
    {
      context: "Epinephrine (adrenaline) prepares the body for intense physical activity by binding a receptor on the surface of target cells and triggering a cascade of internal changes.",
      parts: [
        {
          label: "a",
          prompt: "Identify which molecule acts as the ligand in this signalling pathway, and state the general class of receptor epinephrine binds to.",
          marks: 1,
          guidance: "Epinephrine (adrenaline) is the ligand, and it binds to a G protein-coupled receptor (GPCR) on the plasma membrane."
        },
        {
          label: "b",
          prompt: "Explain how epinephrine binding at the cell surface produces an effect inside the target cell.",
          marks: 3,
          guidance: "Epinephrine binding activates the associated G protein, which in turn activates an enzyme (adenylyl cyclase) that converts ATP into cyclic AMP (cAMP); cAMP then acts as a second messenger inside the cell, triggering a cascade of further reactions that ultimately produce the target cell's specific response, all without epinephrine itself needing to enter the cell."
        },
        {
          label: "c",
          prompt: "Describe two ways in which epinephrine helps prepare the body for intense muscle activity.",
          marks: 2,
          guidance: "Epinephrine increases heart rate and the force of heart contraction, improving blood flow (and oxygen delivery) to skeletal muscles; it also increases breathing rate and dilates the airways, increasing oxygen uptake, and stimulates the breakdown of stored glycogen into glucose, providing more fuel for respiring muscle cells."
        }
      ]
    },
    {
      context: "Auxin coordinates a plant's directional growth response to light, while a different set of hormones coordinates the cyclical changes of the menstrual cycle in humans, two very different examples of chemical signalling.",
      parts: [
        {
          label: "a",
          prompt: "Describe the role of the plant hormone auxin in phototropism.",
          marks: 4,
          guidance: "Phototropism is a plant's growth response to the direction of light, and positive phototropism describes growth toward a light source. Auxin is produced in the shoot's apical meristem and promotes cell elongation in the stem; when light is uneven across the shoot, auxin efflux carrier proteins redistribute auxin unevenly, moving more of it to the shaded side of the shoot. This higher auxin concentration on the shaded side causes those cells to elongate more than the cells on the illuminated side, bending the shoot toward the light source."
        },
        {
          label: "b",
          prompt: "Outline the hormone feedback mechanisms involved in the menstrual cycle.",
          marks: 4,
          guidance: "FSH stimulates the development of ovarian follicles, and developing follicles secrete oestrogen; rising oestrogen at first has a negative feedback effect, inhibiting further FSH secretion from the pituitary gland (preventing multiple eggs maturing at once). As oestrogen continues to rise and reaches a high, sustained peak just before ovulation, it switches to having a positive feedback effect instead, triggering a sharp surge in LH secretion; this LH surge causes ovulation. After ovulation, the resulting corpus luteum secretes progesterone (along with continuing oestrogen), which then has a negative feedback effect on both FSH and LH, preventing further follicle development and ovulation until the current cycle ends."
        }
      ]
    },
    {
      context: "Hormonal signalling coordinates processes as different as human sexual development and a plant shoot's growth toward light, and comparing hormonal signalling with nervous signalling reveals both shared principles and important differences.",
      parts: [
        {
          label: "b",
          prompt: "Outline how the hormone auxin controls phototropism in plant shoots.",
          marks: 5,
          guidance: "Phototropism describes a shoot growing or bending toward the brightest available light; when light is uneven across a shoot, auxin efflux pumps redistribute auxin from the more brightly lit side toward the shadier side of the shoot tip. This higher auxin concentration promotes greater cell elongation on the shaded side, through mechanisms including loosening of the cell wall; because the shaded side elongates more than the illuminated side, the shoot bends toward the light source."
        },
        {
          label: "c",
          prompt: "Compare and contrast hormonal and nervous communication.",
          marks: 7,
          guidance: "As similarities, both hormonal and nervous communication allow signalling between cells, tissues, or organs, both produce a response in specific target cells, and both rely on chemical messengers (hormones or neurotransmitters) that bind to specific receptors, and both can either stimulate or inhibit a target's activity. As differences, nervous signals travel electrically along neurons and are extremely fast but short-lived, reaching a precise target, while hormonal signals travel more slowly through the bloodstream, are longer-lasting, and typically reach a broader range of target tissues (any cell with the matching receptor) rather than a single specific destination."
        }
      ]
    },
    {
      context: "Hormones such as testosterone and epinephrine coordinate very different processes in the body, but both must travel from the gland that secretes them to distant target tissues via the bloodstream.",
      parts: [
        {
          label: "a",
          prompt: "State one effect on the body of testosterone, and one effect of epinephrine.",
          marks: 2,
          guidance: "Testosterone stimulates the development of male genitalia, sperm production, and male secondary sexual characteristics; epinephrine (adrenaline) increases heart rate, among other effects associated with the 'fight or flight' response, such as increased breathing rate or blood glucose release."
        },
        {
          label: "b",
          prompt: "Hormones must be pumped twice by the heart to reach the tissues where they have an effect. Explain why this is the case.",
          marks: 2,
          guidance: "Humans have a double circulatory system, consisting of a pulmonary circuit and a separate systemic circuit; blood returning from a gland (carrying its secreted hormone) first travels to the right side of the heart, from where it is pumped to the lungs to be oxygenated, before returning to the left side of the heart. Only then is it pumped a second time, out through the systemic circuit, to reach the target tissue where the hormone can actually have its effect."
        }
      ]
    }
  ],

  "C3.2": [
    {
      context: "Adaptive immunity gives the body long-lasting, specific protection against pathogens, and this is the biological basis for how vaccination works.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between the innate and adaptive immune responses.",
          marks: 1,
          guidance: "The innate response is immediate, non-specific, and doesn't require prior exposure to a pathogen (relying on phagocytes and general barriers); the adaptive response is slower to begin, highly specific to a particular antigen, and improves with repeated exposure due to immunological memory."
        },
        {
          label: "b",
          prompt: "Explain why T-cells typically reach their peak numbers before antibody levels do, following a first exposure to a pathogen or vaccine, but the two peak at roughly the same time after a second exposure.",
          marks: 2,
          guidance: "After first exposure, helper T-cells must first be activated and must then activate specific B-lymphocytes, which need further time to proliferate into a clone of antibody-secreting plasma cells — so antibody levels rise later than the T-cell response. After a second exposure, memory B-cells (already primed from the first encounter) can differentiate into plasma cells much more rapidly, so antibody production keeps pace with the T-cell response instead of lagging behind it."
        },
        {
          label: "c",
          prompt: "Different types of vaccine target different structural features of a virus. Justify why this variety of vaccine types is possible.",
          marks: 2,
          guidance: "Because viruses are relatively simple structures, several different components can be used as the basis for a vaccine: the viral genetic material itself can be used in DNA/RNA vaccines, fragments of the protein capsid can be used as isolated antigens, or a whole inactivated/attenuated virus can be used to trigger a broader immune response against multiple structural features at once."
        }
      ]
    },
    {
      context: "The human body relies on multiple layers of defence, first to prevent pathogens from entering at all, and then to destroy any that do get through.",
      parts: [
        {
          label: "b",
          prompt: "Describe how disease-causing bacteria are typically prevented from entering the body.",
          marks: 3,
          guidance: "Intact skin acts as a physical barrier to bacterial entry, and its slightly acidic surface further inhibits bacterial growth; mucous membranes lining airways and other openings trap bacteria in mucus before they can penetrate deeper tissue. Stomach acid kills many bacteria that are swallowed, and lysozyme enzymes present in tears and saliva break down bacterial cell walls; if the skin is cut, rapid blood clotting seals the wound and provides an additional physical barrier against further bacterial entry."
        },
        {
          label: "c",
          prompt: "Explain how the body develops immunity against pathogenic bacteria that have entered the body.",
          marks: 8,
          guidance: "Antigens found on the surface of invading bacteria are recognised as foreign; phagocytes engulf the bacteria and display fragments of these antigens on their own surface. This antigen presentation activates specific helper T-lymphocytes matching that antigen, which in turn activate matching B-lymphocytes. Activated B-lymphocytes proliferate and differentiate into plasma cells, which secrete large quantities of antibodies specific to the bacterial antigen; these antibodies help neutralise the bacteria and mark them for destruction by phagocytes. Some activated B- and T-lymphocytes persist afterward as memory cells, allowing a much faster and stronger response if the same bacterial species is encountered again in future."
        }
      ]
    },
    {
      context: "Producing an antibody that targets one specific molecule of interest, useful in both medical diagnostics and treatment, relies on a laboratory technique combining two different cell types.",
      parts: [
        {
          label: "b",
          prompt: "Describe how monoclonal antibodies are produced.",
          marks: 5,
          guidance: "A mouse (or other small mammal) is injected with the specific antigen of interest, stimulating an immune response; antibody-producing cells (plasma cells) are then removed from the animal's spleen. Since these plasma cells cannot divide indefinitely on their own, they are fused with myeloma (tumour) cells, which are capable of continuous division, to create hybrid cells called hybridomas; these hybridomas combine the plasma cell's ability to produce a specific antibody with the myeloma cell's ability to divide indefinitely, and can be cultured to produce large quantities of a single, identical (monoclonal) antibody specific to the original antigen."
        }
      ]
    }
  ],

  "A2.3": [
    {
      context: "Bacteriophage lambda is a virus that infects bacteria and can follow one of two very different reproductive cycles.",
      parts: [
        {
          label: "a",
          prompt: "Identify the outer protein coat of a virus particle.",
          marks: 1,
          guidance: "This structure is the capsid, the protein shell that encloses and protects the virus's genetic material."
        },
        {
          label: "b",
          prompt: "Give one reason why viruses are not generally classified as living organisms.",
          marks: 1,
          guidance: "Viruses lack their own metabolism and cannot carry out processes like protein synthesis or ATP production independently; they also aren't made of cells, and can only replicate by hijacking a host cell's machinery, rather than reproducing on their own."
        },
        {
          label: "c",
          prompt: "Explain how bacteriophage lambda reproduces via the lysogenic cycle.",
          marks: 3,
          guidance: "In the lysogenic cycle, the phage attaches to a receptor protein on the host bacterium and injects its DNA; rather than immediately taking over the cell, this viral DNA integrates into the host's chromosome, becoming a 'prophage'. Whenever the host cell replicates its own DNA and divides, the prophage is copied along with it, so every daughter cell inherits a copy of the viral genome, which can remain dormant for many generations before eventually being triggered to enter the lytic cycle."
        }
      ]
    }
  ],

};
