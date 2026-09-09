/*
  paper2.js
  ---------
  Extended-response practice questions ("Paper 2 style"), as distinct
  from the multiple-choice practice in questionbank.js. All questions
  in this file are ORIGINAL, written from scratch for this site --
  NOT adapted from any IB Questionbank export or other secure exam
  source (an earlier version of this file was adapted from such
  material, but that approach was retired for exam-security reasons,
  see the note at the top of questionbank.js for the full story).
  They match the same syllabus points, difficulty, and command-term
  style as real IB Paper 1B/2 questions, but every scenario and mark
  scheme is newly written.

  Each topic maps to an array of question SETS. A set has:
  - context: a short scenario/intro shared by all parts (can be "")
  - parts: an array of { label, prompt, marks, guidance }

  PAPER2["A1.1"] = [
    { context: "...", parts: [ { label: "a", prompt: "...", marks: 4, guidance: "..." } ] }
  ]
*/

const PAPER2 = {

  "A1.1": [
    {
      context: "Desert-adapted plants and animals face a constant challenge: conserving water in an environment where it is scarce, while water itself has several unusual chemical properties that shape how living things use it.",
      parts: [
        {
          label: "a",
          prompt: "Outline two properties of water that make it an effective solvent for transporting dissolved substances within a living organism.",
          marks: 2,
          guidance: "Water is a polar molecule, with an unevenly distributed charge across each molecule; this polarity allows it to form hydrogen bonds with other polar or charged substances, surrounding and separating them (dissolving them) rather than letting them clump together. Its small size also allows it to surround individual dissolved particles efficiently, making it effective at carrying a wide range of dissolved substances around an organism."
        },
        {
          label: "b",
          prompt: "Explain how the high specific heat capacity of water helps desert animals cope with large daily temperature swings.",
          marks: 3,
          guidance: "Water requires a comparatively large amount of thermal energy to change its temperature, due to the extensive hydrogen bonding between its molecules; because a large proportion of an animal's body is water, this property helps buffer the animal's internal temperature against the sometimes extreme swings between hot desert days and cold desert nights, preventing body temperature from changing as rapidly as the surrounding air does."
        }
      ]
    },
    {
      context: "Antarctic icefish survive in sub-zero ocean water thanks to natural antifreeze glycoproteins circulating in their blood, which prevent ice crystals from forming within their tissues.",
      parts: [
        {
          label: "a",
          prompt: "Outline how hydrogen bonding between water molecules contributes to the formation of ice crystals at low temperatures.",
          marks: 3,
          guidance: "As water cools, the kinetic energy of its molecules decreases, allowing hydrogen bonds between neighbouring molecules to persist for longer rather than constantly breaking and reforming as they do in liquid water; below freezing point, these hydrogen bonds organise water molecules into a fixed, repeating lattice structure, which is the ice crystal, holding the molecules further apart on average than in the liquid state."
        },
        {
          label: "b",
          prompt: "Suggest how an antifreeze glycoprotein might prevent ice crystals from forming or growing within the icefish's blood.",
          marks: 2,
          guidance: "Antifreeze glycoproteins likely bind to the surface of any tiny ice crystals that begin to form, physically blocking additional water molecules from joining the growing crystal lattice; by interfering with this process, the protein prevents small ice crystals from growing into larger, tissue-damaging structures, even though the surrounding water remains at a temperature that would otherwise cause freezing."
        }
      ]
    }
  ],

  "D2.3": [
    {
      context: "Farmers sometimes apply fertiliser incorrectly, adding far more than a crop can use; unexpectedly, over-fertilised plants can wilt and die despite plenty of soil water being present.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of water potential, why over-fertilised soil can cause a crop plant to wilt even when the soil contains plenty of water.",
          marks: 4,
          guidance: "Adding excess fertiliser greatly increases the solute concentration of the soil water, lowering (making more negative) its water potential; if the soil water potential drops below that of the root cells, the normal direction of osmosis reverses, and water is drawn out of the root cells into the surrounding soil rather than being absorbed. This net water loss from the plant's cells causes a drop in turgor pressure, leading to wilting despite water being physically present in the soil."
        },
        {
          label: "b",
          prompt: "Suggest one way a farmer could reduce the risk of this problem occurring in future.",
          marks: 1,
          guidance: "Suitable answers include applying fertiliser in smaller, more frequent doses rather than one large application, diluting the fertiliser more before application, or watering the soil thoroughly after fertilising to dilute the surrounding solute concentration."
        }
      ]
    }
  ],

  "B1.1": [
    {
      context: "Bamboo stems are remarkably strong and flexible for a plant material with no lignified wood, largely thanks to the carbohydrate polymers that make up their cell walls.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structure of cellulose and explain how this structure contributes to the strength of bamboo cell walls.",
          marks: 4,
          guidance: "Cellulose is a polysaccharide built from long, unbranched chains of beta-glucose monomers, linked by glycosidic bonds formed through condensation reactions; because of the specific orientation of beta-glucose, these chains run straight rather than coiling. Many parallel chains are cross-linked by hydrogen bonds into bundles called microfibrils, and it is this fibrous, cross-linked arrangement that gives cellulose (and the bamboo cell walls built from it) considerable tensile strength despite being a relatively simple carbohydrate polymer."
        },
        {
          label: "b",
          prompt: "State one other polysaccharide found in plants, and outline how its structure differs from cellulose.",
          marks: 2,
          guidance: "Starch is a suitable example; unlike cellulose, starch is built from alpha-glucose monomers, and its chains are typically coiled or branched rather than straight, making it more compact and better suited to energy storage rather than the structural role played by cellulose."
        }
      ]
    },
    {
      context: "Camels store large fat deposits in their humps rather than distributing fat evenly across their body, an adaptation long assumed to be primarily about energy storage for their desert environment.",
      parts: [
        {
          label: "a",
          prompt: "Outline why lipids are particularly well suited to long-term energy storage compared with carbohydrates.",
          marks: 3,
          guidance: "Lipids contain a higher proportion of energy-rich carbon-hydrogen bonds relative to oxygen than carbohydrates, meaning more energy can be released per gram when oxidised during respiration; lipids are also non-polar and insoluble in water, so they can be stored compactly without affecting a cell's water potential the way an equivalent mass of stored soluble carbohydrate would."
        },
        {
          label: "b",
          prompt: "Suggest an additional advantage, beyond energy storage, that concentrating fat in a hump rather than distributing it evenly might provide a camel living in a hot desert.",
          marks: 2,
          guidance: "Concentrating fat in one location, rather than as an insulating layer spread across the whole body, may help the camel avoid the additional insulation that a more evenly distributed fat layer would provide; since insulation would trap metabolic heat and make it harder to lose heat to the environment, keeping fat concentrated in the hump could help the rest of the body more effectively release excess heat in hot desert conditions."
        }
      ]
    }
  ],

  "C1.1": [
    {
      context: "Wine and beer producers sometimes add sulfur dioxide to their products as a preservative, since it inhibits enzymes responsible for spoilage in the beverage, including an enzyme called polyphenol oxidase that causes browning.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a non-competitive inhibitor differs from a competitive inhibitor in the way it affects an enzyme.",
          marks: 3,
          guidance: "A competitive inhibitor closely resembles the enzyme's natural substrate and binds directly to the active site, competing with the substrate for that same site; its effect can therefore be reduced by increasing substrate concentration. A non-competitive inhibitor instead binds to a different site on the enzyme, altering the enzyme's overall shape (and therefore its active site indirectly); because it isn't competing for the same site as the substrate, increasing substrate concentration does not overcome a non-competitive inhibitor's effect in the same way."
        },
        {
          label: "b",
          prompt: "Suggest why using an inhibitor to slow enzyme activity might be preferable to simply heating the beverage to denature the enzyme completely.",
          marks: 2,
          guidance: "Heating a beverage to denature its enzymes could also negatively affect its flavour, aroma, or other delicate compounds, and may not be practical or desirable for a product like wine that is meant to be consumed largely unprocessed; a targeted inhibitor can reduce unwanted enzyme activity (like browning) while leaving other aspects of the beverage's chemistry and sensory qualities largely unaffected."
        }
      ]
    },
    {
      context: "Industrial biotechnology companies often use enzymes extracted from thermophilic bacteria, which naturally live in extremely hot environments such as hot springs, for high-temperature manufacturing processes.",
      parts: [
        {
          label: "a",
          prompt: "Explain why an enzyme extracted from a thermophilic bacterium would be expected to remain active at temperatures that would denature most other enzymes.",
          marks: 4,
          guidance: "Enzymes from thermophilic organisms have evolved additional stabilising bonds and interactions (such as extra ionic bonds, disulfide bridges, or more tightly packed hydrophobic cores) within their tertiary structure, allowing them to maintain their functional shape at much higher temperatures than typical enzymes; this structural resilience means their optimum temperature, and the point at which they begin to denature, is shifted considerably higher than for enzymes from organisms living in more moderate environments."
        },
        {
          label: "b",
          prompt: "Suggest one advantage to a biotechnology company of using a heat-stable enzyme in an industrial process, compared with a typical enzyme.",
          marks: 2,
          guidance: "A heat-stable enzyme can be used at higher process temperatures without denaturing, which can increase reaction rates and reduce the risk of microbial contamination in the reaction vessel (since fewer other organisms can survive at such high temperatures), potentially making the industrial process both faster and easier to keep sterile."
        }
      ]
    }
  ],

  "A1.2": [
    {
      context: "Forensic scientists sometimes need to determine the biological relationship between individuals using degraded or limited DNA samples, relying on the fundamental chemistry of the DNA molecule itself.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structure of a single DNA nucleotide.",
          marks: 2,
          guidance: "A DNA nucleotide consists of three components joined together: a phosphate group, a deoxyribose sugar, and one of four nitrogenous bases (adenine, thymine, guanine, or cytosine); the phosphate and sugar form the repeating backbone structure, while the base projects outward and pairs with a complementary base on the opposite DNA strand."
        },
        {
          label: "b",
          prompt: "Explain why a small sample of degraded DNA can still sometimes be successfully analysed using PCR.",
          marks: 4,
          guidance: "PCR (polymerase chain reaction) can amplify a specific, targeted region of DNA exponentially, doubling the amount of that region with each heating-cooling cycle; even if a DNA sample is degraded and only short fragments survive, as long as a short target region (matched by the chosen primers) remains intact somewhere within the sample, PCR can amplify that surviving fragment into millions of copies, providing enough material for further analysis even from a highly limited or degraded starting sample."
        }
      ]
    }
  ],

  "D1.1": [
    {
      context: "Before a cell can divide, it must first make an accurate copy of its entire genome, a process that relies on a coordinated team of enzymes working at the replication fork.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of helicase and DNA polymerase during DNA replication.",
          marks: 4,
          guidance: "Helicase unwinds the DNA double helix by breaking the hydrogen bonds between the two strands, creating a replication fork and exposing single-stranded template for the rest of the replication machinery. DNA polymerase then adds new, complementary nucleotides to a growing strand, reading the exposed template strand and matching each new nucleotide via complementary base pairing, synthesising the new strand in a 5' to 3' direction."
        },
        {
          label: "b",
          prompt: "Explain why DNA replication is described as semi-conservative.",
          marks: 3,
          guidance: "Because each of the two original template strands is used to synthesise one new complementary strand, each resulting double helix contains one original ('old') strand and one newly synthesised strand; this means the genetic information is conserved by being distributed across both new molecules rather than either fully retained in one molecule or entirely lost, which is why the process is described as semi-conservative rather than conservative or dispersive."
        }
      ]
    }
  ],

  "D2.1": [
    {
      context: "Bone marrow transplants rely on donor stem cells dividing rapidly to repopulate a patient's blood cell supply, a process that depends on accurate and repeated cell division.",
      parts: [
        {
          label: "a",
          prompt: "Outline the events that occur during metaphase and anaphase of mitosis.",
          marks: 4,
          guidance: "During metaphase, chromosomes (each still consisting of two sister chromatids joined at a centromere) align individually along the equator of the cell, attached to spindle fibres from both poles. During anaphase, the centromere of each chromosome splits, and the sister chromatids are pulled apart toward opposite poles of the cell as the spindle fibres shorten, ensuring each pole receives a complete, identical set of chromatids."
        },
        {
          label: "b",
          prompt: "Explain why accurate mitotic division is essential for the success of a bone marrow transplant.",
          marks: 3,
          guidance: "Donor stem cells must divide repeatedly by mitosis to produce enough new blood cells to repopulate the patient's blood supply; because mitosis produces genetically identical daughter cells, each new cell retains the full, correct genetic instructions needed to develop into a functioning blood cell. Errors during mitosis (such as incomplete or uneven chromosome distribution) could produce faulty daughter cells incapable of functioning correctly, undermining the whole purpose of the transplant."
        }
      ]
    },
    {
      context: "Skin wound healing depends on rapid, controlled cell division at the wound site to replace damaged tissue, a process that can go wrong if cell division becomes uncontrolled.",
      parts: [
        {
          label: "a",
          prompt: "Outline the main stages of the cell cycle, in order.",
          marks: 3,
          guidance: "The cell cycle consists of interphase (itself divided into G1, where the cell grows and carries out normal functions; S phase, where DNA is replicated; and G2, where the cell prepares for division), followed by mitosis (nuclear division, producing two genetically identical nuclei) and cytokinesis (division of the cytoplasm, producing two separate daughter cells)."
        },
        {
          label: "b",
          prompt: "Explain how a fault in the control of the cell cycle could lead to the formation of a tumour at a wound site.",
          marks: 4,
          guidance: "The cell cycle is normally regulated by checkpoints that ensure cells only divide when appropriate conditions are met and any DNA damage has been repaired; if mutations disable these checkpoints (for example, in genes that would normally halt division in response to DNA damage), cells can continue dividing uncontrollably even when they shouldn't, potentially forming a mass of abnormally dividing cells (a tumour) at the site rather than the controlled, appropriate cell division needed for normal wound repair."
        }
      ]
    }
  ],

  "B1.2": [
    {
      context: "Spider silk is prized for combining high tensile strength with elasticity, a combination of properties that emerges directly from the structure of the proteins it's made of.",
      parts: [
        {
          label: "a",
          prompt: "Outline the four levels of protein structure.",
          marks: 4,
          guidance: "Primary structure is the specific linear sequence of amino acids joined by peptide bonds. Secondary structure describes local, repeating folding patterns (such as alpha helices or beta-pleated sheets) stabilised by hydrogen bonds along the polypeptide backbone. Tertiary structure is the overall three-dimensional shape of a single folded polypeptide chain, stabilised by a range of interactions between R-groups (such as hydrogen bonds, ionic bonds, and disulfide bridges). Quaternary structure describes the arrangement of two or more separate polypeptide chains coming together to form one functional protein."
        },
        {
          label: "b",
          prompt: "Suggest how the specific combination of secondary and tertiary structure in spider silk protein could account for both its strength and its elasticity.",
          marks: 3,
          guidance: "Regions of extensive beta-pleated sheet (secondary structure), held together by many hydrogen bonds, likely contribute to silk's high tensile strength, resisting being pulled apart; alongside these strong, ordered regions, more flexible, less ordered sections of the protein's tertiary structure could allow some stretching and recoil, contributing to elasticity. This combination of rigid, strong regions and flexible, stretchable regions within the same protein could explain how silk achieves both properties simultaneously."
        }
      ]
    },
    {
      context: "Sickle cell disease is caused by a single amino acid substitution in the beta-globin chain of haemoglobin, illustrating how a very small change at the primary structure level can have dramatic consequences for protein function.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a single base substitution in DNA could lead to the amino acid substitution responsible for sickle cell haemoglobin.",
          marks: 3,
          guidance: "A substitution mutation changes a single base within the DNA triplet coding for one particular amino acid position in the beta-globin chain; because this changes the corresponding mRNA codon, the ribosome delivers a different amino acid to that position during translation than would normally be inserted, resulting in a beta-globin protein with one amino acid substituted for another compared with the normal sequence."
        },
        {
          label: "b",
          prompt: "Explain how this single amino acid change can affect the overall structure and function of the haemoglobin molecule.",
          marks: 4,
          guidance: "The substituted amino acid has different chemical properties from the one it replaces, altering the local folding pattern of the beta-globin chain and, in low-oxygen conditions, causing haemoglobin molecules to stick together and form long, rigid fibres; this distorts red blood cells into a rigid, sickle shape rather than their normal flexible disc shape, impairing their ability to carry oxygen efficiently and to pass smoothly through narrow capillaries, illustrating how a change at the level of primary structure can disrupt tertiary and quaternary structure and, ultimately, whole-organism function."
        }
      ]
    }
  ],

  "A2.1": [
    {
      context: "The RNA world hypothesis proposes that RNA, rather than DNA or protein, was the first molecule capable of both storing genetic information and catalysing chemical reactions in early life.",
      parts: [
        {
          label: "a",
          prompt: "Suggest why RNA, rather than DNA, might have been better suited to serve as both a genetic molecule and a catalyst in the earliest stages of life.",
          marks: 3,
          guidance: "RNA is capable of folding into complex three-dimensional shapes (similar to how proteins fold), which some RNA molecules (ribozymes) use to catalyse chemical reactions, a role DNA's simpler double-helix structure isn't well suited to; RNA can also carry genetic information in its base sequence, similar to DNA, meaning a single type of molecule could in principle have performed both the storage and catalytic roles needed for early self-replicating systems, before more specialised DNA and protein molecules evolved to take over these roles separately."
        },
        {
          label: "b",
          prompt: "State one piece of evidence, aside from RNA's dual capabilities, that supports the idea that RNA played a central role in early life.",
          marks: 1,
          guidance: "Suitable evidence includes the fact that ribosomes (essential to protein synthesis in all living cells today) are built around a catalytic RNA core, or that ATP (a near-universal energy currency) is itself a nucleotide closely related to RNA, both suggesting RNA's involvement in cellular processes may predate the evolution of DNA and widespread protein catalysis."
        }
      ]
    }
  ],

  "D1.2": [
    {
      context: "A single gene mutation can sometimes ripple through the entire process of gene expression, changing not just one amino acid but potentially the function of the whole resulting protein.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of translation, from mRNA binding at the ribosome to the release of a completed polypeptide.",
          marks: 5,
          guidance: "Translation begins when the small ribosomal subunit binds to the mRNA near its start codon, and an initiator tRNA (carrying methionine) binds via complementary base pairing between its anticodon and the start codon. The large ribosomal subunit then joins, and translation proceeds through repeated cycles: a new tRNA delivers its amino acid to the ribosome's A site (matching the next codon), a peptide bond forms between this amino acid and the growing chain, and the ribosome shifts along by one codon; this continues until a stop codon is reached, at which point the completed polypeptide is released and the ribosome subunits separate."
        },
        {
          label: "b",
          prompt: "Explain how a substitution mutation early in a gene could, in some cases, have no effect on the final protein produced.",
          marks: 2,
          guidance: "Because the genetic code is degenerate, several different codons can specify the same amino acid; if a substitution mutation changes a codon into a different codon that still happens to code for the identical amino acid, this is called a silent mutation, and the resulting protein sequence remains completely unchanged despite the underlying change in the DNA sequence."
        }
      ]
    },
    {
      context: "Cystic fibrosis is caused by mutations affecting a specific membrane transport protein, and understanding how the corresponding gene is expressed is central to explaining the disease's symptoms.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process by which a gene's information is used to produce a protein.",
          marks: 4,
          guidance: "The gene's DNA sequence is first transcribed into a complementary mRNA molecule within the nucleus, using RNA polymerase and complementary base pairing against the DNA template strand; this mRNA is then processed (in eukaryotes, including splicing to remove introns) and exported to the cytoplasm, where it is translated at a ribosome, with tRNA molecules delivering amino acids in the order specified by the mRNA's codon sequence, ultimately producing the specific polypeptide chain that gene encodes."
        },
        {
          label: "b",
          prompt: "Suggest how a mutation affecting the gene coding for this membrane transport protein could ultimately affect the properties of mucus produced in the lungs of a person with cystic fibrosis.",
          marks: 3,
          guidance: "If the mutation disrupts the structure or function of the resulting transport protein, this could impair the normal movement of chloride ions (and, indirectly, water) across the membrane of cells lining the airways; this altered ion and water balance can result in the production of unusually thick, sticky mucus, which is more difficult to clear from the lungs and airways than normal, contributing to the respiratory symptoms characteristic of cystic fibrosis."
        }
      ]
    }
  ],

  "A2.2": [
    {
      context: "Comparing a plant cell and a bacterial cell under the highest-resolution microscope available reveals a striking difference in internal organisation, despite both being living cells that carry out many of the same basic life processes.",
      parts: [
        {
          label: "a",
          prompt: "Outline two structural differences between a typical plant cell and a typical bacterial cell.",
          marks: 2,
          guidance: "A plant cell has a true, membrane-bound nucleus containing its DNA, while a bacterial cell's DNA lies free in the cytoplasm within a nucleoid region, not enclosed by a membrane; a plant cell also contains membrane-bound organelles such as mitochondria and chloroplasts, which bacterial cells entirely lack, since bacterial cells are not compartmentalised into internal organelles the way eukaryotic cells are."
        },
        {
          label: "b",
          prompt: "Explain why a light microscope is generally insufficient to observe the internal organelles of either cell type in fine detail, and how an electron microscope overcomes this limitation.",
          marks: 4,
          guidance: "Resolution (the ability to distinguish two close points as separate) is limited by the wavelength of the radiation used to form an image; visible light has a relatively long wavelength compared with the very small size of internal cell structures like ribosomes or the internal membranes of chloroplasts, limiting how much fine detail a light microscope can resolve regardless of magnification. Electron microscopes use a beam of electrons, which have a much shorter wavelength than visible light, achieving far higher resolution and revealing structural detail that light microscopy cannot, at the cost of usually requiring the sample to be non-living and placed in a vacuum."
        }
      ]
    },
    {
      context: "A newly discovered single-celled marine organism is examined under both a light microscope and an electron microscope, revealing very different levels of structural detail.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between magnification and resolution.",
          marks: 2,
          guidance: "Magnification refers to how much larger an image appears compared with the actual size of the object being viewed; resolution refers to the ability to distinguish two objects (or two points) that are very close together as separate, rather than blurring into one. An image can be highly magnified but still have poor resolution if fine detail cannot be distinguished."
        },
        {
          label: "b",
          prompt: "Explain why an electron microscope can reveal much finer detail of this organism's internal structure than a light microscope, even at the same magnification.",
          marks: 4,
          guidance: "Resolution is fundamentally limited by the wavelength of the radiation used to form an image; visible light has a relatively long wavelength compared with the very small internal structures of a cell, limiting how much detail a light microscope can resolve no matter how much the image is magnified further. Electron microscopes use a beam of electrons, which have a much shorter wavelength than visible light, allowing far higher resolution and revealing structural detail (such as the internal membranes of organelles) that light microscopy simply cannot distinguish, regardless of magnification."
        }
      ]
    }
  ],

  "B2.2": [
    {
      context: "Antibody-producing cells (plasma cells) secrete very large quantities of protein continuously, relying on close cooperation between several organelles to keep up with this demand.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of the rough endoplasmic reticulum and the Golgi apparatus in producing a secreted protein such as an antibody.",
          marks: 4,
          guidance: "The rough endoplasmic reticulum is studded with ribosomes and is where the antibody's polypeptide chains are synthesised and undergo initial folding and modification; the resulting protein is then transported, typically via vesicles, to the Golgi apparatus, which further modifies, sorts, and packages the protein into vesicles appropriate for its final destination, in this case secretion out of the cell."
        },
        {
          label: "b",
          prompt: "Suggest why a plasma cell, which secretes very large amounts of protein, would be expected to contain an unusually extensive rough endoplasmic reticulum compared with a typical cell.",
          marks: 2,
          guidance: "Since the rough endoplasmic reticulum is the site of protein synthesis for molecules destined for secretion, a cell that needs to produce and secrete very large quantities of a specific protein (like antibodies) would benefit from having a greater surface area of ribosome-studded membrane, increasing its overall capacity for simultaneous protein synthesis to meet this high demand."
        }
      ]
    }
  ],

  "C1.2": [
    {
      context: "Yeast used in bread-making respire both aerobically and anaerobically depending on oxygen availability within the dough, with important consequences for how bread rises and develops flavour.",
      parts: [
        {
          label: "a",
          prompt: "Compare the products of aerobic and anaerobic respiration in yeast.",
          marks: 3,
          guidance: "Aerobic respiration in yeast fully oxidises glucose, producing carbon dioxide, water, and a large yield of ATP, using oxygen as the final electron acceptor. Anaerobic respiration in yeast instead converts pyruvate into ethanol and carbon dioxide, regenerating NAD+ so that glycolysis can continue without oxygen, but yielding far less ATP overall than the aerobic pathway; both processes produce carbon dioxide, but only anaerobic respiration in yeast produces ethanol, and only aerobic respiration produces water as a product."
        },
        {
          label: "b",
          prompt: "Explain why bread dough rises more as it sits, and how this relates to the type of respiration occurring within it.",
          marks: 4,
          guidance: "As yeast cells within the dough consume the surrounding sugar, they initially have some access to oxygen trapped within the dough and respire aerobically; but as this oxygen is used up, and diffusion of new oxygen into the dense dough is limited, the yeast increasingly shifts toward anaerobic respiration. The carbon dioxide gas produced by this anaerobic respiration becomes trapped within the dough's elastic gluten network, forming bubbles that cause the dough to expand and rise over time."
        }
      ]
    },
    {
      context: "Certain poisons, such as cyanide, are known to be lethal specifically because they block a key step in aerobic respiration, causing rapid cell death throughout the body.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of oxygen in aerobic respiration.",
          marks: 2,
          guidance: "Oxygen acts as the final electron acceptor at the end of the electron transport chain, combining with electrons that have passed along the chain and with hydrogen ions to form water; this final step is essential for keeping the electron transport chain running, which in turn drives the chemiosmotic production of the vast majority of a cell's ATP during aerobic respiration."
        },
        {
          label: "b",
          prompt: "Explain why blocking the final step of the electron transport chain, as cyanide does, is so rapidly lethal to cells throughout the body.",
          marks: 5,
          guidance: "If oxygen (or the enzyme that allows it to accept electrons) is blocked, electrons can no longer be passed to the end of the electron transport chain; this causes the whole chain to back up and stop functioning, since each carrier protein needs to pass its electrons onward to continue accepting more. Without a functioning electron transport chain, the proton gradient needed to drive ATP synthase collapses, and cells rapidly lose their ability to produce ATP via aerobic respiration; because most cells (especially highly active ones like heart and brain cells) depend heavily on this ATP supply for their basic functioning, this disruption can cause rapid, widespread cell dysfunction and death throughout the body."
        }
      ]
    }
  ],

  "C1.3": [
    {
      context: "Indoor vertical farms use carefully controlled LED lighting rather than sunlight to grow crops, allowing precise control over the wavelengths of light plants receive.",
      parts: [
        {
          label: "a",
          prompt: "Explain why vertical farm operators typically choose LED lights that emit mostly red and blue light, rather than green light, to grow their crops.",
          marks: 3,
          guidance: "Chlorophyll, the main photosynthetic pigment, absorbs red and blue light strongly but reflects most green light rather than absorbing it; providing light concentrated in the wavelengths chlorophyll actually absorbs makes more efficient use of the energy supplied, since green light would be largely wasted (reflected rather than used to drive the light-dependent reactions), an important consideration when the farm is paying directly for the electricity used to generate the light."
        },
        {
          label: "b",
          prompt: "Outline how the light-dependent reactions convert light energy into a form usable by the light-independent reactions (Calvin cycle).",
          marks: 4,
          guidance: "Light energy absorbed by chlorophyll excites electrons, which pass along an electron transport chain, releasing energy used to pump hydrogen ions across the thylakoid membrane and build up a concentration gradient; this gradient drives ATP synthase, producing ATP. Some of these energised electrons are also used, together with hydrogen ions, to reduce NADP to NADPH. Both ATP and NADPH produced this way are then used in the Calvin cycle to convert fixed carbon dioxide into organic sugars."
        }
      ]
    },
    {
      context: "Farmers growing crops in greenhouses sometimes artificially raise CO2 concentration and use supplementary lighting to boost yields, but must carefully balance several environmental factors together to avoid wasting resources.",
      parts: [
        {
          label: "a",
          prompt: "Explain the concept of a limiting factor in the context of photosynthesis.",
          marks: 2,
          guidance: "A limiting factor is whichever environmental variable (such as light intensity, CO2 concentration, or temperature) is, at a given moment, present in the lowest relative supply compared with what the plant could otherwise use; the rate of photosynthesis is constrained by this factor specifically, and increasing any other factor will not increase the rate further until the limiting factor itself is increased."
        },
        {
          label: "b",
          prompt: "Suggest why simply maximising all three factors (light, CO2, and temperature) simultaneously might not be the most cost-effective strategy for a commercial greenhouse.",
          marks: 4,
          guidance: "Increasing light intensity, CO2 concentration, and temperature all typically involve real costs (electricity for lighting, purchasing and distributing CO2 gas, and heating); because only one factor is ever truly limiting at a given moment, increasing factors that are not currently limiting wastes resources without producing any corresponding increase in photosynthetic rate or yield. A more cost-effective strategy would involve monitoring which factor is actually limiting under current conditions and directing resources specifically toward addressing that limiting factor, rather than maximising every variable at once regardless of whether doing so is currently useful."
        }
      ]
    }
  ],

  "B2.3": [
    {
      context: "Researchers hope that induced pluripotent stem cells (iPSCs), created by reprogramming adult skin cells, could one day allow damaged organs to be repaired using a patient's own cells.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between totipotent, pluripotent, and multipotent stem cells.",
          marks: 3,
          guidance: "Totipotent stem cells, found only in the very earliest embryonic stages, can develop into any cell type in the body plus extra-embryonic tissues like the placenta. Pluripotent stem cells can develop into almost any cell type in the body, but not extra-embryonic tissue. Multipotent stem cells are more restricted, able to differentiate into only a limited range of related cell types, such as the various blood cell types produced from bone marrow stem cells."
        },
        {
          label: "b",
          prompt: "Suggest one advantage of using a patient's own reprogrammed skin cells (rather than donor stem cells) for a future organ repair treatment.",
          marks: 2,
          guidance: "Using a patient's own reprogrammed cells avoids the risk of immune rejection, since the cells carry the patient's own genetic markers and would not be recognised as foreign by their immune system, unlike donor stem cells from a different individual, which could trigger an immune response requiring long-term immunosuppressive treatment."
        }
      ]
    }
  ],

  "D2.2": [
    {
      context: "Bees within a single hive can develop into either a worker or a queen, despite having essentially identical genomes, depending largely on the diet they receive as larvae.",
      parts: [
        {
          label: "a",
          prompt: "Explain how two genetically similar bee larvae can develop into a worker bee and a queen bee, in terms of gene expression.",
          marks: 4,
          guidance: "Larvae fed a specialised diet (royal jelly) throughout their development experience different chemical signals compared with larvae fed a standard diet; these signals influence epigenetic modifications, such as changes in DNA methylation, altering which genes are switched on or off during development. This differential gene expression, triggered by diet rather than any difference in the underlying DNA sequence, is what drives one larva to develop into a queen (larger, fertile) and another into a worker (smaller, typically sterile)."
        },
        {
          label: "b",
          prompt: "State one epigenetic mechanism, other than the one already described, that can influence gene expression.",
          marks: 1,
          guidance: "Suitable answers include histone modification (such as acetylation, which can loosen or tighten how tightly DNA is wound around histone proteins, affecting accessibility for transcription)."
        }
      ]
    }
  ],

  "D1.3": [
    {
      context: "Some agricultural pests have evolved resistance to genetically modified crops engineered to produce their own insecticidal proteins, prompting scientists to investigate the underlying genetic mechanisms.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a random mutation could give an insect pest resistance to an insecticidal protein produced by a genetically modified crop.",
          marks: 3,
          guidance: "A random mutation might change the shape of the insect's target receptor protein (the molecule the insecticidal protein normally binds to), so that the insecticidal protein can no longer bind effectively; insects carrying this mutation would then survive exposure to the crop's insecticidal protein while non-resistant insects are killed, allowing the resistance allele to spread through the surviving population over successive generations of natural selection."
        },
        {
          label: "b",
          prompt: "Suggest one strategy farmers could use to reduce the rate at which pest resistance develops.",
          marks: 2,
          guidance: "Suitable strategies include planting a proportion of non-modified 'refuge' crops nearby, allowing susceptible insects to survive and interbreed with any resistant ones (diluting the resistance allele's spread), or rotating between crops using different insecticidal mechanisms so that resistance to any one mechanism doesn't provide a lasting survival advantage."
        }
      ]
    },
    {
      context: "Certain workplaces, such as nuclear facilities and X-ray departments, require strict radiation safety protocols to protect workers from an elevated risk of mutation-related illness.",
      parts: [
        {
          label: "a",
          prompt: "Outline how ionising radiation can cause mutations in DNA.",
          marks: 3,
          guidance: "Ionising radiation carries enough energy to knock electrons out of atoms and molecules it passes through, including DNA; this can directly break chemical bonds within the DNA strand, or generate highly reactive free radicals nearby that go on to chemically damage DNA bases or the sugar-phosphate backbone, potentially causing base changes, breaks in the DNA strand, or other structural damage that leads to mutation if not correctly repaired."
        },
        {
          label: "b",
          prompt: "Explain why cells that divide frequently (such as bone marrow cells) are often more severely affected by radiation exposure than slowly-dividing cells (such as muscle cells).",
          marks: 4,
          guidance: "Rapidly dividing cells spend proportionally more time in S phase, replicating their DNA, and in mitosis, both processes during which DNA is especially vulnerable to damage and where existing damage is more likely to be copied and passed on to daughter cells before repair mechanisms can act; additionally, any mutations that do occur in frequently dividing cells are propagated to a larger number of descendant cells more quickly than in slowly-dividing tissue, compounding the potential harm from a given level of radiation exposure."
        }
      ]
    }
  ],

  "D3.1": [
    {
      context: "In vitro fertilization (IVF) requires precise hormonal control to stimulate the development of multiple mature eggs, which are then collected and fertilized outside the body.",
      parts: [
        {
          label: "a",
          prompt: "Outline the hormonal changes that stimulate follicle development in a typical menstrual cycle.",
          marks: 3,
          guidance: "Follicle stimulating hormone (FSH), released from the pituitary gland, stimulates the growth and maturation of ovarian follicles at the start of the cycle; as follicles develop, they secrete increasing amounts of oestrogen, which initially provides negative feedback that suppresses further FSH release, helping to ensure typically only one dominant follicle matures fully in a natural cycle."
        },
        {
          label: "b",
          prompt: "Explain why IVF treatment often involves administering artificially high doses of FSH.",
          marks: 3,
          guidance: "Administering higher-than-natural doses of FSH overrides the normal negative feedback mechanism that would otherwise limit follicle development to just one or two per cycle, stimulating multiple follicles to mature simultaneously; this increases the number of eggs available for collection and fertilization, improving the overall chances of successful IVF, since not every fertilized egg will necessarily develop into a viable embryo."
        }
      ]
    },
    {
      context: "A couple struggling to conceive naturally undergoes fertility testing, which reveals the male partner has a very low sperm count, prompting doctors to investigate possible causes within the process of spermatogenesis.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of spermatogenesis, from germline stem cell to mature sperm.",
          marks: 4,
          guidance: "Germline stem cells (spermatogonia) divide by mitosis to produce primary spermatocytes; each primary spermatocyte undergoes the first meiotic division to form two secondary spermatocytes, which then undergo the second meiotic division to form four haploid spermatids. These spermatids then undergo further differentiation (developing a tail, condensing their nucleus, and losing most of their cytoplasm) to become mature, motile sperm cells."
        },
        {
          label: "b",
          prompt: "Suggest one stage in this process at which a fault could occur that would result in a reduced sperm count.",
          marks: 2,
          guidance: "Suitable answers include a fault during the mitotic divisions of spermatogonia (reducing the initial number of cells entering the pathway), a fault during either meiotic division (which could cause cell death rather than successful production of secondary spermatocytes or spermatids), or a fault during the final differentiation stage (producing non-functional or immotile sperm that would not be counted as viable in a sperm count test)."
        }
      ]
    }
  ],

  "D3.2": [
    {
      context: "Coat colour in Labrador retrievers is controlled by two genes, one determining whether pigment is deposited at all, and another determining whether the deposited pigment appears black or brown; a dog's specific combination of alleles at both genes determines its final coat colour.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a cross between two dogs, both heterozygous at two independently assorting genes, could produce offspring with several different phenotypes.",
          marks: 4,
          guidance: "Each parent, being heterozygous at both genes, produces four different types of gamete in equal proportions through independent assortment during meiosis; when gametes from both parents combine at fertilization, this produces a range of possible offspring genotypes, which correspond to the classic 9:3:3:1 phenotypic ratio expected from a dihybrid cross between two heterozygous individuals, explaining how a single cross can generate several distinct coat colour outcomes among the puppies."
        },
        {
          label: "b",
          prompt: "State the term for the phenomenon where one gene's alleles mask the phenotypic expression of a different, unlinked gene.",
          marks: 1,
          guidance: "Epistasis."
        }
      ]
    },
    {
      context: "Haemophilia, a blood clotting disorder, is caused by a recessive allele carried on the X chromosome, and its inheritance pattern has historically been studied in royal European families with a documented family history of the condition.",
      parts: [
        {
          label: "a",
          prompt: "Using a Punnett grid, deduce the possible genotypes and phenotypes of children born to a haemophiliac father and a mother who is not a carrier.",
          marks: 3,
          guidance: "Representing the haemophilia allele as Xh and the normal allele as XH, the father's genotype is XhY and the mother's is XHXH; the Punnett grid gives daughters genotype XHXh (unaffected carriers) and sons genotype XHY (unaffected, non-carriers), meaning none of the children would actually have haemophilia themselves, though all daughters would be carriers."
        },
        {
          label: "b",
          prompt: "Explain why haemophilia is much more commonly observed in males than in females.",
          marks: 3,
          guidance: "Because the haemophilia allele is recessive and located on the X chromosome, a male (who has only one X chromosome) needs just a single copy of the allele to be affected, while a female (with two X chromosomes) would need to inherit the recessive allele from both parents to be affected, since a single normal, dominant allele on her other X chromosome would otherwise mask the effect; this difference in the number of X chromosomes between the sexes explains why X-linked recessive conditions like haemophilia appear far more frequently in males."
        }
      ]
    }
  ],

  "A3.1": [
    {
      context: "Marine biologists surveying a coral reef need a reliable way to classify and identify the huge diversity of species they encounter, from corals themselves to fish, molluscs, and crustaceans.",
      parts: [
        {
          label: "a",
          prompt: "Outline the binomial naming system used to identify species.",
          marks: 2,
          guidance: "Every species is given a two-part scientific name: the first part identifies the genus (capitalised) and the second identifies the species (lowercase), with the whole name conventionally italicised; this internationally standardised system avoids the confusion that can arise from using different common names for the same organism in different languages or regions."
        },
        {
          label: "b",
          prompt: "Explain how a dichotomous key could be used to help identify an unfamiliar reef organism.",
          marks: 3,
          guidance: "A dichotomous key presents a series of paired statements about observable features (such as presence or absence of a shell, number of legs, or body symmetry); at each step, the user selects whichever statement matches the organism being identified, which either leads directly to an identification or to a further pair of choices, progressively narrowing down the possibilities until the specific organism (or its taxonomic group) is identified."
        }
      ]
    }
  ],

  "B4.1": [
    {
      context: "The Arctic ground squirrel survives brutally cold winters through an extreme combination of physiological and behavioural adaptations, including hibernation with a body temperature that can drop below freezing.",
      parts: [
        {
          label: "a",
          prompt: "Outline two physiological adaptations that might allow an animal to survive extremely low body temperatures during hibernation.",
          marks: 2,
          guidance: "Suitable adaptations include producing natural antifreeze-like compounds in the blood that prevent ice crystals from damaging cells, and dramatically reducing metabolic rate and heart rate to minimise energy expenditure during the period of low body temperature."
        },
        {
          label: "b",
          prompt: "Explain how natural selection could have produced such an extreme adaptation as tolerance for near-freezing body temperature in this species.",
          marks: 3,
          guidance: "Ancestral populations likely showed natural variation in cold tolerance; in an environment with extremely harsh, prolonged winters, individuals with heritable traits allowing even slightly better survival at low body temperatures would have been more likely to survive and reproduce than less cold-tolerant individuals. Repeated over very many generations, this differential survival and reproduction could gradually shift the population toward the extreme cold tolerance seen in the species today, an example of directional selection acting under a strong, consistent selective pressure."
        }
      ]
    }
  ],

  "D4.1": [
    {
      context: "Widespread and repeated use of a common antibiotic in livestock farming has been linked to a rise in antibiotic-resistant bacteria found on farms and in surrounding communities.",
      parts: [
        {
          label: "a",
          prompt: "Explain how repeated antibiotic use in livestock could lead to an increase in antibiotic-resistant bacteria over time.",
          marks: 4,
          guidance: "Random mutations occasionally produce bacteria with some degree of resistance to a given antibiotic, even before that antibiotic is ever used; when antibiotics are used repeatedly and widely, susceptible bacteria are killed while any resistant individuals survive and continue reproducing, increasing their proportion in the overall population with each round of treatment, a direct example of natural selection acting on existing genetic variation."
        },
        {
          label: "b",
          prompt: "Outline one measure that could help reduce the spread of antibiotic resistance in this farming context.",
          marks: 2,
          guidance: "Suitable measures include reducing unnecessary or routine antibiotic use in livestock (reserving antibiotics for treating diagnosed infections rather than as a standard preventative measure), improving farm hygiene and animal welfare to reduce disease incidence in the first place, or rotating between different classes of antibiotic to reduce sustained selective pressure favouring resistance to any single drug."
        }
      ]
    }
  ],

  "A4.1": [
    {
      context: "Hawaiian honeycreepers are a group of bird species, all descended from a single common ancestor, that have diversified into a remarkable range of beak shapes suited to very different feeding strategies across the islands.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of adaptive radiation, using the Hawaiian honeycreepers as an example.",
          marks: 4,
          guidance: "Adaptive radiation describes the diversification of a single ancestral species into many descendant species, each adapted to a different ecological niche; when the ancestral honeycreeper species colonised the Hawaiian islands, it encountered a wide range of available food sources and few competing bird species. Over time, different populations became adapted to exploit these different resources (such as nectar, seeds, or insects), evolving distinct beak shapes suited to each, eventually diverging into the many separate honeycreeper species seen today."
        },
        {
          label: "b",
          prompt: "Suggest why an isolated island environment, such as Hawaii, is particularly likely to produce adaptive radiation.",
          marks: 2,
          guidance: "Isolated islands often have relatively few existing species and correspondingly reduced competition, along with a range of unoccupied ecological niches for a newly arrived species to exploit; this combination of reduced competition and available niches creates favourable conditions for a founding population to diversify rapidly into multiple new forms, each specialised for a different available niche."
        }
      ]
    }
  ],

  "B4.2": [
    {
      context: "Cleaner fish set up 'cleaning stations' on coral reefs, where larger fish visit to have parasites and dead skin removed from their bodies, sometimes even opening their mouths to allow the cleaner fish inside.",
      parts: [
        {
          label: "a",
          prompt: "State the type of interspecific relationship shown between cleaner fish and the larger fish they clean, and explain your reasoning.",
          marks: 2,
          guidance: "This is mutualism, since both species benefit: the cleaner fish gains a reliable food source (parasites and dead skin), while the larger fish benefits from parasite removal and improved health, a mutual exchange distinguishing this relationship from one-sided interactions such as parasitism or commensalism."
        },
        {
          label: "b",
          prompt: "Explain how competitive exclusion could occur between two species of cleaner fish occupying very similar ecological niches on the same reef.",
          marks: 3,
          guidance: "If two species compete for the same limited resource, in this case, access to the same cleaning stations and the same client fish, whichever species is even slightly more effective at securing this resource will tend to outcompete the other over time; the competitive exclusion principle predicts that two species with sufficiently overlapping niches cannot coexist indefinitely, so one species would eventually be excluded from the shared cleaning stations unless the two species' niches diverge in some way (for example, specialising in different client fish species)."
        }
      ]
    }
  ],

  "A3.2": [
    {
      context: "Taxonomists reclassifying a group of freshwater fish species used both traditional physical measurements and modern DNA sequencing to reassess how the species should be grouped.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a cladogram is constructed using DNA sequence data.",
          marks: 3,
          guidance: "DNA (or amino acid) sequences of a shared gene or protein are compared across the species being studied; species with fewer sequence differences between them are inferred to have diverged from a shared common ancestor more recently than species with more sequence differences, since mutations accumulate gradually over time. This data is used to construct a branching diagram (cladogram) reflecting the inferred pattern and relative timing of these evolutionary divergences."
        },
        {
          label: "b",
          prompt: "Explain why molecular data might lead to a different classification than one based solely on physical appearance.",
          marks: 3,
          guidance: "Physical similarity can sometimes result from convergent evolution, in which unrelated species independently evolve similar features due to similar environmental pressures, rather than from shared ancestry; molecular data more directly reflects genetic relatedness, since DNA sequence similarity is less likely to be misled by convergent physical adaptations, meaning species that look very similar might turn out to be only distantly related once DNA evidence is considered, or vice versa."
        }
      ]
    }
  ],

  "D4.2": [
    {
      context: "A region of forest cleared for farming was abandoned after only a few years, and ecologists have been monitoring how the ecosystem has recovered in the decades since.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between primary and secondary succession, and identify which type would be occurring at this abandoned farmland site.",
          marks: 3,
          guidance: "Primary succession begins on bare, lifeless substrate with no pre-existing soil, such as newly exposed rock; secondary succession instead begins on land that has been disturbed but still retains soil and some existing organisms, such as this previously farmed and then abandoned land. Because the site already has developed soil (from its earlier use as farmland) rather than starting from bare rock, this scenario describes secondary succession."
        },
        {
          label: "b",
          prompt: "Explain why species diversity would generally be expected to increase as succession proceeds at this site.",
          marks: 4,
          guidance: "As succession proceeds, increasingly complex vegetation structure (from pioneer grasses and herbs through to shrubs and eventually trees) creates a greater range of available niches, in terms of light levels, shelter, and food sources; this growing habitat complexity generally allows a wider range of species to establish and coexist, increasing overall species diversity as the ecosystem develops toward a more complex, established community."
        }
      ]
    }
  ],

  "D4.3": [
    {
      context: "Glacial ice cores drilled in Antarctica preserve tiny bubbles of ancient atmosphere, allowing scientists to reconstruct atmospheric CO2 concentrations stretching back hundreds of thousands of years and compare them with the sharp rise seen since industrialisation.",
      parts: [
        {
          label: "a",
          prompt: "Suggest how ice cores can be used to estimate the atmospheric carbon dioxide concentration at the time each layer of ice formed.",
          marks: 2,
          guidance: "As snow accumulates and gradually compresses into ice over time, tiny air bubbles from the atmosphere at that time become trapped within the ice; by drilling down and extracting a core sample, scientists can analyse the trapped air within bubbles from different depths (and therefore different time periods) to directly measure the atmospheric CO2 concentration present when that layer of ice originally formed."
        },
        {
          label: "b",
          prompt: "Explain how the pattern of CO2 concentration revealed by ice cores supports the conclusion that recent increases are primarily due to human activity rather than natural variation.",
          marks: 4,
          guidance: "Ice core data shows that atmospheric CO2 concentration remained within a relatively stable range for hundreds of thousands of years prior to industrialisation, fluctuating gradually in line with natural climate cycles; the sharp, rapid rise in CO2 concentration seen since the mid-1800s, coinciding closely with the timing of large-scale fossil fuel combustion, stands out as a dramatic departure from this long-term natural pattern, supporting the conclusion that human activity, rather than natural variation alone, is the primary driver of the recent increase."
        }
      ]
    },
    {
      context: "International climate agreements often set targets for limiting global average temperature rise to well below 2°C above pre-industrial levels, based on projections of the consequences if this threshold is exceeded.",
      parts: [
        {
          label: "a",
          prompt: "Outline two consequences of continued global warming beyond current levels.",
          marks: 2,
          guidance: "Suitable consequences include rising sea levels (due to thermal expansion of seawater and melting ice sheets and glaciers), more frequent and severe extreme weather events (such as heatwaves, droughts, or intense storms), or continued loss of biodiversity as species struggle to adapt to changing climate conditions quickly enough."
        },
        {
          label: "b",
          prompt: "Explain how a positive feedback mechanism could cause global warming to accelerate beyond what would be predicted from greenhouse gas emissions alone.",
          marks: 4,
          guidance: "A positive feedback mechanism amplifies an initial change rather than counteracting it; for example, as rising temperatures melt Arctic sea ice, this exposes darker ocean water that absorbs more solar energy than the reflective ice did, causing further warming and further ice melt. This kind of self-reinforcing cycle means that once a certain amount of warming has occurred, additional warming can be triggered independently of any further increase in direct human greenhouse gas emissions, potentially causing warming to accelerate beyond initial projections based on emissions alone."
        }
      ]
    }
  ],

  "C4.1": [
    {
      context: "Wildlife rangers monitoring an elephant population in a national park use aerial surveys and ground-based mark-recapture methods to estimate population size and track changes over several years.",
      parts: [
        {
          label: "a",
          prompt: "Describe how the mark-release-recapture technique could be used to estimate the size of this elephant population.",
          marks: 3,
          guidance: "A sample of elephants is captured (or identified using distinguishing features such as ear shape or tusk pattern), marked or recorded, and released back into the population; after allowing time for this sample to mix randomly with the rest of the population, a second sample is captured or observed, and the proportion of previously marked individuals within it is used, via the Lincoln index, to estimate the total population size."
        },
        {
          label: "b",
          prompt: "Suggest one reason population estimates obtained this way might be inaccurate for a species like elephants.",
          marks: 2,
          guidance: "Suitable reasons include elephants potentially avoiding capture more effectively after a first encounter (reducing the recapture rate and inflating the population estimate), the population not being closed during the study period (due to births, deaths, or migration in or out of the study area), or marked individuals not mixing randomly if elephants tend to stay within specific family groups or territories rather than moving freely throughout the whole park."
        }
      ]
    }
  ],

  "C4.2": [
    {
      context: "A commercial fishery targets a species of large predatory fish; overfishing has raised concerns among ecologists about how removing so many individuals from the top of the local food web could affect the wider marine ecosystem.",
      parts: [
        {
          label: "a",
          prompt: "Explain, using the concept of energy flow, why top predators typically exist in much smaller numbers than the organisms they feed on.",
          marks: 4,
          guidance: "At each successive trophic level, a substantial proportion of the energy available is lost, mainly as heat released through cellular respiration and other life processes, rather than being converted into new biomass that can be passed on; because a top predator's food source (its prey) has already lost energy through several previous trophic transfers, only a small fraction of the energy originally captured by producers remains available to support top predators, limiting how many individuals a given ecosystem can sustain at that level."
        },
        {
          label: "b",
          prompt: "Suggest how the removal of a top predator through overfishing could affect the rest of the food web.",
          marks: 3,
          guidance: "Removing a top predator can allow populations of its usual prey species to grow largely unchecked, since one of their main sources of mortality has been reduced; this increased prey population could then place greater pressure on the organisms further down the food web that the prey themselves feed on, potentially causing a cascading series of changes throughout the ecosystem, a pattern known as a trophic cascade."
        }
      ]
    },
    {
      context: "A large-scale study tracks the movement of carbon through a temperate forest ecosystem over several years, measuring how much is stored in living biomass, dead organic matter, and released back into the atmosphere.",
      parts: [
        {
          label: "a",
          prompt: "Outline the main processes by which carbon enters and leaves a forest ecosystem.",
          marks: 4,
          guidance: "Carbon enters the ecosystem primarily through photosynthesis, as trees and other producers fix atmospheric CO2 into organic compounds; it then passes through the ecosystem via feeding relationships as consumers eat producers and each other. Carbon leaves the ecosystem mainly through cellular respiration (releasing CO2 back into the atmosphere) carried out by producers, consumers, and decomposers, and can also be lost through processes like combustion (in the case of wildfire) or export if organic material is removed from the site."
        },
        {
          label: "b",
          prompt: "Explain why an old-growth forest with a large amount of carbon stored in living trees might still be considered roughly carbon-neutral over the long term, despite ongoing photosynthesis.",
          marks: 3,
          guidance: "In a mature, stable forest, the rate of carbon uptake through photosynthesis is roughly balanced by the rate of carbon release through respiration and decomposition, since the forest is no longer rapidly accumulating new biomass the way a young, actively growing forest would be; while a large amount of carbon remains stored within the existing trees and soil, the net annual exchange of carbon with the atmosphere can be close to balanced, making the mature forest roughly carbon-neutral on an ongoing basis even though it holds substantial stored carbon."
        }
      ]
    }
  ],

  "A4.2": [
    {
      context: "The Tasmanian devil, a carnivorous marsupial found only in Tasmania, has suffered a dramatic population decline due to a contagious facial tumour disease, prompting a major conservation response including captive breeding programmes.",
      parts: [
        {
          label: "a",
          prompt: "Suggest why a species restricted to a single island, such as the Tasmanian devil, might be considered a higher conservation priority than a similar species with a much wider geographic range.",
          marks: 2,
          guidance: "A species confined to a single, restricted geographic range has no other wild populations to rely on if the local population is lost, making it especially vulnerable to extinction from a single localised threat such as disease, habitat loss, or a natural disaster; a species with a much wider range, by contrast, has multiple separate populations, meaning the loss of any one wouldn't necessarily threaten the survival of the species as a whole."
        },
        {
          label: "b",
          prompt: "Outline how a captive breeding programme could help conserve a species facing a threat like the one affecting Tasmanian devils.",
          marks: 4,
          guidance: "Captive breeding programmes maintain a genetically diverse population of a threatened species in a controlled, protected environment away from the immediate threat (in this case, isolating individuals from the contagious disease); by carefully managing breeding pairs, such programmes can help preserve genetic diversity and build up a secure population that could potentially be used to reintroduce individuals into the wild in the future, once the original threat has been reduced or a way of managing it has been developed."
        }
      ]
    }
  ],

  "B2.1": [
    {
      context: "Kidney dialysis machines rely on a partially permeable membrane to filter waste products from a patient's blood, mimicking the selective filtering function normally performed by the kidney itself.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a partially permeable membrane allows some substances to pass through while blocking others.",
          marks: 3,
          guidance: "A partially permeable membrane allows small molecules (such as water, urea, and small ions) to pass through, either by diffusing directly through gaps or pores in the membrane, or via facilitated diffusion through specific channel proteins, while larger molecules (such as blood proteins and blood cells) are too large to pass through and are retained; this size-based (and in biological membranes, sometimes charge-based) selectivity is what allows the membrane to filter some substances while retaining others."
        },
        {
          label: "b",
          prompt: "Explain why the dialysis fluid used in this process is carefully formulated to have a similar solute concentration to healthy blood plasma, rather than being pure water.",
          marks: 3,
          guidance: "If the dialysis fluid had a very different (for example, much lower) solute concentration than blood plasma, this would create a large water potential gradient, causing excessive and potentially dangerous net movement of water into or out of the patient's blood by osmosis; by keeping the fluid's solute concentration similar to normal blood plasma (other than the specific waste products meant to be removed), only the intended waste products diffuse out of the blood, while water balance is not unnecessarily disturbed."
        }
      ]
    }
  ],

  "D3.3": [
    {
      context: "Patients with untreated diabetes insipidus produce extremely large volumes of dilute urine because their kidneys cannot properly respond to a hormone that normally regulates water reabsorption.",
      parts: [
        {
          label: "a",
          prompt: "Identify the hormone most likely involved in this condition, and outline where it is produced and released.",
          marks: 2,
          guidance: "Antidiuretic hormone (ADH) is the hormone involved; it is produced by neurosecretory cells in the hypothalamus and released from the posterior pituitary gland into the bloodstream."
        },
        {
          label: "b",
          prompt: "Explain how a lack of response to this hormone in the kidney could result in the production of large volumes of dilute urine.",
          marks: 5,
          guidance: "Normally, ADH increases the permeability of the collecting duct to water by inserting aquaporin channels into its walls, allowing water to be reabsorbed from the filtrate back into the blood as it passes through the concentrated medulla region of the kidney; if the collecting duct cells cannot respond to ADH (either due to a lack of receptors or a fault in the receptor's signalling pathway), this water reabsorption fails to occur even when ADH is present, so much more water remains in the filtrate and is excreted, producing a large volume of dilute urine rather than the small volume of concentrated urine that would normally result from effective ADH signalling."
        }
      ]
    }
  ],

  "C3.1": [
    {
      context: "Athletes preparing for a competitive race show measurable physiological changes even in the minutes before the starting gun, coordinated by the nervous and endocrine systems acting together.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the nervous system and endocrine system differ in the speed and duration of the responses they produce.",
          marks: 3,
          guidance: "The nervous system transmits signals electrically along neurons, producing very rapid but typically short-lived effects, well suited to responses needing to occur within milliseconds; the endocrine system instead releases hormones into the bloodstream, which travel more slowly to reach target tissues but can produce effects that last considerably longer, sometimes for minutes, hours, or even longer, depending on the hormone."
        },
        {
          label: "b",
          prompt: "Explain why an athlete's body might benefit from having both nervous and hormonal responses active simultaneously in the lead-up to a race.",
          marks: 4,
          guidance: "An immediate nervous response can rapidly increase heart rate and alertness in direct response to the anticipated start of the race, providing an instantaneous adjustment; the accompanying hormonal response, such as increased adrenaline release, reinforces and sustains these changes (further increasing heart rate, redirecting blood flow to muscles, and releasing stored glucose) over a longer period than the nervous system alone could maintain, together preparing the body more fully and for a longer duration than either system could achieve independently."
        }
      ]
    }
  ],

  "B3.3": [
    {
      context: "Astronauts returning from extended stays aboard the International Space Station often show significant muscle wasting, despite following prescribed exercise routines during their mission, due to the prolonged absence of gravitational load on their muscles.",
      parts: [
        {
          label: "a",
          prompt: "Outline the sliding filament model of muscle contraction.",
          marks: 4,
          guidance: "Calcium ions released within the muscle cell bind to troponin, causing tropomyosin to shift and expose the myosin-binding sites on actin filaments; myosin heads then bind to actin, forming cross-bridges, and using energy from ATP hydrolysis, the myosin heads bend and pull the actin filaments inward toward the centre of the sarcomere. This sliding of actin past myosin (without either filament itself shortening) shortens the sarcomere overall, producing the physical force of muscle contraction, and the cycle repeats as long as calcium and ATP remain available."
        },
        {
          label: "b",
          prompt: "Suggest why an absence of gravitational load could lead to muscle wasting, in terms of how muscle tissue normally adapts to demand.",
          marks: 3,
          guidance: "Muscle tissue typically adapts to the mechanical demands placed on it, increasing in strength and mass in response to regular resistance or load-bearing activity; in the near-weightless environment of space, muscles used for standing, walking, and supporting body weight against gravity experience much less mechanical load than on Earth, even with a prescribed exercise routine, and this reduced demand can trigger the breakdown of muscle protein and a corresponding loss of muscle mass over an extended mission."
        }
      ]
    }
  ],

  "B3.1": [
    {
      context: "Free-divers train to hold their breath for several minutes underwater, relying on physiological adaptations that maximise their body's oxygen efficiency during extended breath-holds.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structural features of the alveoli that allow efficient gas exchange under normal breathing conditions.",
          marks: 3,
          guidance: "Alveoli have an extremely large total surface area, thin walls (often just one cell thick) that minimise the diffusion distance between air and blood, a moist internal surface that allows gases to dissolve before diffusing, and a dense surrounding network of capillaries that maintains a steep concentration gradient by continuously carrying blood past the exchange surface."
        },
        {
          label: "b",
          prompt: "Explain how the oxygen-haemoglobin dissociation curve helps describe how oxygen is both loaded in the lungs and unloaded in respiring tissues.",
          marks: 4,
          guidance: "At the high oxygen partial pressure found in the lungs, haemoglobin has a high affinity for oxygen and becomes almost fully saturated, efficiently loading oxygen into the blood; as blood reaches actively respiring tissues, where oxygen partial pressure is lower (and where CO2, temperature, and acidity may also be higher, further reducing haemoglobin's oxygen affinity), haemoglobin readily releases a substantial proportion of its bound oxygen, delivering it to the tissues that need it most. This shape of the dissociation curve, steep in the range of partial pressures typical of respiring tissue, is what allows haemoglobin to load and unload oxygen efficiently at the appropriate locations."
        }
      ]
    }
  ],

  "B3.2": [
    {
      context: "Grafting is a horticultural technique in which a cutting from one plant (the scion) is joined to the root system of another (the rootstock), and for the graft to succeed, vascular tissue from both parts must connect and function together.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of xylem and phloem in a successfully grafted plant.",
          marks: 3,
          guidance: "Xylem tissue must reconnect across the graft to allow water and dissolved mineral ions to continue being transported from the rootstock's roots up into the scion; phloem tissue must also reconnect to allow sugars produced by photosynthesis in the scion's leaves to be transported back down to the rootstock's roots, supplying them with the energy they need, since roots themselves cannot photosynthesise."
        },
        {
          label: "b",
          prompt: "Suggest why a graft is likely to fail if the vascular tissues of the scion and rootstock do not properly reconnect.",
          marks: 3,
          guidance: "Without a functioning vascular connection, the scion would be unable to receive water and minerals from the rootstock's root system, quickly leading to water stress and wilting; at the same time, the rootstock would be cut off from the sugars produced by the scion's photosynthesising leaves, eventually depleting its own energy reserves, so a failed vascular reconnection would be expected to cause the death of one or both parts of the graft."
        }
      ]
    },
    {
      context: "Long-haul commercial pilots and cabin crew have a slightly elevated risk of developing blood clots in their legs during very long flights, a condition linked to prolonged sitting and reduced circulation.",
      parts: [
        {
          label: "a",
          prompt: "Outline how skeletal muscle contraction normally assists the return of blood through veins toward the heart.",
          marks: 3,
          guidance: "Many veins, particularly in the legs, contain one-way valves that prevent backward blood flow; as surrounding skeletal muscles contract during normal movement (such as walking), they squeeze against these veins, helping to push blood forward toward the heart, with the valves preventing it from flowing back down due to gravity between contractions, together forming what is often called the skeletal muscle pump."
        },
        {
          label: "b",
          prompt: "Explain why prolonged immobility during a long flight increases the risk of blood clot formation in the legs.",
          marks: 4,
          guidance: "Without regular muscle contraction from movement, the normal skeletal muscle pump mechanism that assists venous return is largely inactive, allowing blood to pool and flow more sluggishly through the leg veins; this slower blood flow increases the likelihood that clotting factors and platelets remain in prolonged contact with the vessel wall, raising the risk that a blood clot will begin to form, which is why passengers are often advised to move their legs periodically during long flights."
        }
      ]
    }
  ],

  "C2.2": [
    {
      context: "Certain nerve agents used as chemical weapons work by permanently binding to and disabling the enzyme acetylcholinesterase, with devastating effects on the nervous system.",
      parts: [
        {
          label: "a",
          prompt: "Outline the normal role of acetylcholinesterase at a cholinergic synapse.",
          marks: 2,
          guidance: "Acetylcholinesterase is an enzyme located within the synaptic cleft that breaks down acetylcholine shortly after it has bound to and stimulated its receptor on the postsynaptic membrane; this rapid breakdown ensures that each nerve impulse produces only a brief, discrete signal, allowing the synapse to reset and respond to subsequent impulses."
        },
        {
          label: "b",
          prompt: "Explain why permanently disabling acetylcholinesterase would be so dangerous to an exposed individual.",
          marks: 5,
          guidance: "Without functional acetylcholinesterase, acetylcholine released into affected synapses cannot be broken down, so it remains bound to its receptors and continues to stimulate the postsynaptic membrane continuously, rather than producing the normal, brief signal; this uncontrolled, prolonged overstimulation disrupts normal nervous system function throughout the body, including at neuromuscular junctions controlling breathing muscles, and can rapidly become life-threatening as essential involuntary functions such as breathing become severely disrupted."
        }
      ]
    }
  ],

  "C2.1": [
    {
      context: "Commercial fruit distributors sometimes artificially ripen bananas by exposing them to a specific plant hormone in sealed ripening rooms before shipping them to stores.",
      parts: [
        {
          label: "a",
          prompt: "Identify the hormone most likely being used in this process, and outline its effect on fruit.",
          marks: 2,
          guidance: "Ethylene is the hormone responsible for triggering fruit ripening; exposure to ethylene stimulates a range of ripening changes, including softening of the fruit's flesh, conversion of stored starches into sugars, and changes in the fruit's skin colour."
        },
        {
          label: "b",
          prompt: "Explain why ripening tends to spread quickly from fruit to fruit once it begins within a sealed storage room.",
          marks: 4,
          guidance: "Ethylene is a gas, and its production is self-amplifying: as one fruit begins to ripen, it produces increasing amounts of ethylene, which diffuses through the air and can trigger ripening in nearby fruit as well. Once several fruits begin ripening and releasing their own ethylene, this creates a positive feedback effect within an enclosed space, causing ripening to accelerate and spread rapidly throughout the sealed room."
        }
      ]
    },
    {
      context: "Commercial growers of certain flowering plants control the timing of flowering by carefully manipulating day length and applying specific plant hormones at particular stages of growth.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between the mode of action of a plant hormone and an animal hormone such as insulin, in terms of how each typically travels to its target.",
          marks: 2,
          guidance: "Both plant and animal hormones are chemical messengers that travel from where they are produced to a distant target where they exert an effect; plant hormones can move through the plant via diffusion, active transport between cells, or transport within the phloem or xylem, while animal hormones like insulin are typically secreted directly into the bloodstream, where they circulate throughout the body to reach any tissue with the appropriate receptor."
        },
        {
          label: "b",
          prompt: "Explain how auxin contributes to a plant's overall growth and development beyond simply controlling directional growth responses like phototropism.",
          marks: 4,
          guidance: "Beyond phototropism, auxin plays several other roles in plant development, including stimulating cell elongation more generally (contributing to overall stem growth), promoting the initiation of new root growth (a property exploited commercially in rooting hormone products used for plant cuttings), and inhibiting the growth of lateral (side) buds when produced by an actively growing shoot tip, a phenomenon called apical dominance, which helps direct the plant's growth resources toward upward growth rather than excessive branching."
        }
      ]
    }
  ],

  "C3.2": [
    {
      context: "Public health officials tracking a seasonal flu outbreak notice that people who were infected with a similar flu strain the previous year tend to experience much milder symptoms and recover faster than those infected for the first time.",
      parts: [
        {
          label: "a",
          prompt: "Explain why prior exposure to a similar pathogen can result in a faster, stronger immune response upon reinfection.",
          marks: 4,
          guidance: "Following an initial infection, some of the activated B- and T-lymphocytes persist long-term as memory cells, retaining the ability to recognise the same (or a very similar) antigen; upon a second exposure, these memory cells can be activated and can proliferate into effector cells (such as antibody-secreting plasma cells) much more rapidly than the initial, first-time response was able to, since the immune system doesn't need to identify and select the correct rare, matching lymphocytes from scratch as it did the first time."
        },
        {
          label: "b",
          prompt: "Suggest why milder flu strains still sometimes cause severe illness in people who have never previously encountered any similar flu strain.",
          marks: 3,
          guidance: "Without any prior exposure or existing memory cells specific to that strain (or a sufficiently similar one), a person's adaptive immune response must be built from scratch, a process that takes several days to reach full effectiveness; during this delay, the virus has more time to replicate and spread within the body largely unchecked by a targeted adaptive response, which can allow even a comparatively mild strain to cause more severe illness in a first-time, non-immune individual than in someone with relevant prior immunity."
        }
      ]
    },
    {
      context: "Organ transplant recipients are typically prescribed immunosuppressant drugs for the rest of their lives to prevent their immune system from attacking the transplanted organ as if it were foreign tissue.",
      parts: [
        {
          label: "a",
          prompt: "Explain why a transplanted organ from a donor is at risk of being attacked by the recipient's own immune system.",
          marks: 3,
          guidance: "Cells within the transplanted organ carry surface antigens characteristic of the donor, which differ from the recipient's own antigens unless the donor is a very close genetic match (such as an identical twin); the recipient's immune system can recognise these donor antigens as foreign, triggering an immune response (rejection) against the transplanted tissue in much the same way it would respond to a genuine pathogen."
        },
        {
          label: "b",
          prompt: "Suggest a possible drawback of long-term immunosuppressant use for a transplant recipient, beyond its intended effect of preventing organ rejection.",
          marks: 2,
          guidance: "Because immunosuppressant drugs work by reducing the overall activity of the immune system, a significant drawback is that the recipient becomes considerably more vulnerable to infections from pathogens that a fully functioning immune system would normally be able to fight off effectively, requiring careful lifelong management to balance the risk of organ rejection against the risk of serious infection."
        }
      ]
    }
  ],

  "A2.3": [
    {
      context: "Bacteriophages, viruses that specifically infect bacteria, are being investigated as an alternative to antibiotics for treating certain bacterial infections, particularly those resistant to conventional antibiotic treatment.",
      parts: [
        {
          label: "a",
          prompt: "Outline the basic structure of a bacteriophage.",
          marks: 2,
          guidance: "A typical bacteriophage consists of genetic material (either DNA or RNA) enclosed within a protective protein coat called a capsid; many bacteriophages also have additional structures, such as a tail and tail fibres, which allow them to attach specifically to receptor proteins on the surface of their target bacterial host."
        },
        {
          label: "b",
          prompt: "Explain how the lytic cycle of a bacteriophage could be exploited to treat a bacterial infection.",
          marks: 5,
          guidance: "A lytic bacteriophage attaches to a specific receptor on its target bacterium and injects its genetic material; this hijacks the bacterial cell's own machinery to rapidly produce many new phage particles, ultimately causing the bacterial cell to lyse (burst) and release these new phages to infect further bacteria of the same type. Because phages are often highly specific to a particular bacterial species (or even strain), a bacteriophage matched to a patient's infecting bacterium could be used to selectively destroy the harmful bacteria through repeated cycles of this lytic infection, potentially offering an alternative treatment option when conventional antibiotics have become ineffective due to bacterial resistance."
        }
      ]
    }
  ],

};
