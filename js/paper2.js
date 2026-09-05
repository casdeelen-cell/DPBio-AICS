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
