/*
  paper2.js
  ---------
  Extended-response practice questions ("Paper 2 style"). All content
  in this file is ORIGINAL, written from scratch for this site.

  Each topic maps to an array of question SETS. A set has:
  - context: a short scenario/intro shared by all parts (can be "")
  - parts: an array of { label, prompt, marks, guidance }
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
    },
    {
      context: "Emperor penguins huddle together in large groups during Antarctic winters, taking turns rotating between the warmer centre and the colder edges of the huddle, relying partly on water's thermal properties to survive the extreme cold.",
      parts: [
        {
          label: "a",
          prompt: "Explain how water's high specific heat capacity contributes to the relatively stable microclimate within a penguin huddle, compared with the surrounding air temperature.",
          marks: 3,
          guidance: "Water's high specific heat capacity means it can absorb or release a large amount of thermal energy with only a small change in temperature; the water vapour and moisture present within the dense, tightly packed huddle can help buffer against rapid temperature swings compared with the drier, more variable surrounding air, contributing to a relatively more stable microclimate within the huddle itself."
        },
        {
          label: "b",
          prompt: "Suggest why penguins on the outer edge of the huddle are at greater risk of heat loss than those in the centre.",
          marks: 2,
          guidance: "Penguins positioned on the outer edge of the huddle have a greater proportion of their body surface directly exposed to the cold surrounding air and wind, increasing their rate of heat loss compared with penguins in the centre, who are more fully surrounded by other warm bodies and therefore lose comparatively little heat directly to the environment; this is why penguins rotate positions periodically, sharing the burden of occupying the more exposed outer positions."
        }
      ]
    },
    {
      context: "Termite mounds in parts of Africa and Australia contain intricate internal chimney systems that draw moisture up from deep underground, keeping the colony's interior humid even during long dry seasons.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of capillary action, how a termite mound's narrow internal channels could draw water upward from moist soil deep underground.",
          marks: 4,
          guidance: "Capillary action depends on cohesion between water molecules (via hydrogen bonding, keeping the water column together) working alongside adhesion between water molecules and the polar surfaces of the narrow channel walls; together these forces allow water to be drawn upward through narrow spaces against gravity, the same underlying principle that draws water up through soil pores or plant xylem, allowing moisture to reach the upper parts of the mound from the moist soil far below."
        },
        {
          label: "b",
          prompt: "Suggest why maintaining a humid interior would be advantageous for a termite colony living in a seasonally dry environment.",
          marks: 2,
          guidance: "Suitable answers include reducing water loss from the termites' own bodies (many termite species are highly vulnerable to desiccation), and maintaining suitable conditions for the fungal gardens some termite species cultivate for food, which typically require a humid environment to grow successfully."
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
    },
    {
      context: "Farmers growing crops in slightly saline soil often see reduced yields, since the plants must expend energy managing the resulting osmotic stress rather than putting all their resources into growth.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of water potential, why plants growing in saline soil often struggle to take up sufficient water.",
          marks: 4,
          guidance: "Dissolved salts lower the water potential of the surrounding soil water, making it more negative; if the soil water potential becomes lower than that of the root cells, the normal water potential gradient driving water uptake is reduced or even reversed, meaning the roots may struggle to absorb sufficient water, or in severe cases may even lose water to the surrounding saline soil, despite water being physically present."
        },
        {
          label: "b",
          prompt: "Suggest one adaptation a plant species might evolve to cope with growing in consistently saline soil.",
          marks: 2,
          guidance: "Suitable adaptations include actively accumulating compatible solutes within root cells to lower their own internal water potential (helping maintain a favourable gradient for water uptake despite the saline surroundings), or specialised glands capable of actively excreting excess absorbed salt from leaf surfaces, preventing toxic salt accumulation within the plant's tissues."
        }
      ]
    },
    {
      context: "Mangrove trees grow in coastal, saline environments and have evolved specific adaptations to cope with the challenging osmotic conditions created by their salty surroundings.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of water potential, why absorbing water from saline coastal soil poses a challenge for mangrove trees.",
          marks: 3,
          guidance: "Dissolved salts in the surrounding soil water lower its water potential (make it more negative); if the soil water potential becomes similar to or lower than that of the root cells, the water potential gradient that normally drives water uptake into the roots is reduced or reversed, making it more difficult for the tree to absorb sufficient water despite being surrounded by it."
        },
        {
          label: "b",
          prompt: "Suggest one specific adaptation that could help a mangrove tree overcome this osmotic challenge.",
          marks: 2,
          guidance: "Suitable adaptations include actively accumulating solutes within root cells to lower their internal water potential further than the surrounding saline soil water (maintaining a favourable gradient for water uptake), or specialised salt-excreting glands on the leaves capable of removing excess salt that does enter the plant, preventing toxic accumulation within its tissues."
        }
      ]
    },
    {
      context: "Freshwater fish placed accidentally into seawater would rapidly lose water from their body tissues by osmosis, illustrating the importance of water potential balance for organisms adapted to a particular salinity.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of water potential, why a freshwater fish would be expected to lose water rapidly if placed into seawater.",
          marks: 3,
          guidance: "Seawater has a much lower (more negative) water potential than the freshwater fish's body fluids, since it contains a far higher concentration of dissolved salts; this creates a steep water potential gradient between the fish's tissues and the surrounding seawater, causing a rapid net movement of water out of the fish's body by osmosis, potentially leading to severe dehydration if the fish cannot compensate."
        },
        {
          label: "b",
          prompt: "Suggest one physiological adaptation a marine (saltwater) fish species has that a freshwater fish typically lacks, related to managing this kind of osmotic challenge.",
          marks: 2,
          guidance: "Marine fish typically drink seawater continuously to replace water lost by osmosis, and possess specialised salt-excreting cells in their gills capable of actively removing the excess salt this drinking behaviour introduces, an adaptation not needed (and typically absent) in freshwater fish, which instead face the opposite challenge of excess water intake and must excrete large volumes of dilute urine to compensate."
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
    },
    {
      context: "Migratory birds preparing for long-distance flight accumulate substantial fat reserves in the weeks before departure, relying on this stored energy to fuel their journey without stopping to feed.",
      parts: [
        {
          label: "a",
          prompt: "Explain why fat, rather than carbohydrate, is the preferred energy storage molecule for a migratory bird preparing for a long flight.",
          marks: 3,
          guidance: "Fat contains a higher proportion of energy-rich carbon-hydrogen bonds relative to oxygen than carbohydrates, releasing considerably more energy per gram when oxidised during respiration; because a migrating bird needs to carry its entire fuel supply for the journey while minimising the additional weight this fuel adds (which would increase the energetic cost of flight), the greater energy density of fat makes it a far more efficient storage option than an equivalent mass of carbohydrate."
        },
        {
          label: "b",
          prompt: "Outline the type of chemical reaction used to form a triglyceride from its component molecules.",
          marks: 2,
          guidance: "A triglyceride is formed by three separate condensation reactions, each joining one fatty acid molecule to a hydroxyl group on a glycerol molecule, releasing a water molecule at each of the three linkage points to form the resulting ester bonds."
        }
      ]
    },
    {
      context: "Insect exoskeletons and fungal cell walls are both built primarily from chitin, a modified polysaccharide that provides considerable structural strength despite being found in such different types of organism.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structural similarity between chitin and cellulose.",
          marks: 2,
          guidance: "Both chitin and cellulose are built from long, unbranched chains of their respective monomers, cross-linked by hydrogen bonds into strong fibres; this shared structural arrangement, despite chitin's monomer being chemically modified compared with cellulose's beta-glucose, is what gives both molecules their considerable strength."
        },
        {
          label: "b",
          prompt: "Explain why a fibrous, cross-linked structure like that found in chitin is well suited to providing mechanical strength, compared with a more compact, branched polysaccharide such as glycogen.",
          marks: 4,
          guidance: "A fibrous, cross-linked arrangement allows a polysaccharide to distribute mechanical stress along many parallel, hydrogen-bonded chains, resisting being pulled apart or deformed, much like the fibres in a woven fabric; a compact, highly branched polysaccharide like glycogen, by contrast, is optimised for a completely different purpose (rapid, efficient energy storage and mobilisation), and its structure is not arranged in a way that would provide comparable mechanical strength, illustrating how molecular structure is closely matched to a molecule's specific biological role."
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
    },
    {
      context: "Lactose-free milk is produced by treating regular milk with the enzyme lactase, which breaks down lactose into its two constituent monosaccharides, making the product suitable for people with lactose intolerance.",
      parts: [
        {
          label: "a",
          prompt: "Outline the type of reaction catalysed by lactase, and name the products formed from lactose.",
          marks: 2,
          guidance: "Lactase catalyses a hydrolysis reaction, using a water molecule to break the glycosidic bond within lactose; this produces the two monosaccharides glucose and galactose, which together made up the original lactose molecule."
        },
        {
          label: "b",
          prompt: "Explain why immobilising lactase on a solid support, rather than using it freely dissolved in solution, might be advantageous for a commercial lactose-free milk production process.",
          marks: 4,
          guidance: "Immobilising the enzyme on a solid support allows milk to be passed through or over the fixed enzyme, after which the enzyme remains behind and can be reused for further batches of milk, rather than needing to be separated out of each individual batch or discarded after a single use; this can make the industrial process considerably more cost-effective, since the same immobilised enzyme preparation can process a large volume of milk over an extended period without needing to be replaced as frequently as a single-use, freely dissolved enzyme would require."
        }
      ]
    },
    {
      context: "Meat tenderiser products sold for home cooking often contain a plant-derived enzyme extracted from papaya or pineapple, used to break down tough proteins in meat before cooking.",
      parts: [
        {
          label: "a",
          prompt: "Identify the category of enzyme most likely responsible for meat tenderisation, and outline the type of reaction it catalyses.",
          marks: 2,
          guidance: "A protease is the category of enzyme responsible, catalysing the hydrolysis of peptide bonds within proteins, using a water molecule to break each targeted bond and split the protein into smaller fragments."
        },
        {
          label: "b",
          prompt: "Explain why storing meat tenderiser at room temperature for many months could reduce its effectiveness, referencing enzyme structure.",
          marks: 4,
          guidance: "Enzymes, including proteases, are proteins whose function depends on maintaining a precise tertiary structure, particularly at the active site; prolonged storage at room temperature, especially in the presence of moisture or fluctuating temperatures, can gradually cause some proportion of the enzyme molecules to denature, disrupting the bonds maintaining their correct three-dimensional shape and reducing the number of properly folded, catalytically active enzyme molecules remaining in the product over time, explaining a gradual loss of tenderising effectiveness."
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
    },
    {
      context: "Ancient DNA extracted from well-preserved remains, such as those found frozen in permafrost, allows scientists to study the genetics of extinct species and ancient human populations.",
      parts: [
        {
          label: "a",
          prompt: "Outline why DNA, rather than protein, is generally the preferred molecule for studying evolutionary relationships between ancient and modern organisms.",
          marks: 3,
          guidance: "DNA directly encodes the genetic information passed between generations, and comparing DNA sequences allows a much more direct and detailed comparison of genetic relatedness than comparing proteins, since multiple different DNA sequences can sometimes code for very similar or identical proteins (due to the degeneracy of the genetic code), potentially obscuring underlying genetic differences that a direct DNA comparison would reveal."
        },
        {
          label: "b",
          prompt: "Explain why ancient DNA extracted from very old remains is often highly fragmented and difficult to work with, compared with DNA extracted from a living organism.",
          marks: 4,
          guidance: "After an organism dies, its DNA is no longer protected and repaired by living cellular processes, and begins to degrade over time due to factors such as chemical breakdown, exposure to moisture, and enzymatic activity from decomposing microorganisms; over very long periods, even under relatively favourable preservation conditions like permafrost, this ongoing degradation breaks the DNA into progressively shorter fragments, making ancient DNA far more difficult to extract, sequence, and analyse than the intact, high-quality DNA available from a living organism's cells."
        }
      ]
    },
    {
      context: "Comparative genomics researchers studying a newly discovered deep-sea microorganism find that its genetic code, the rules mapping codons to amino acids, is almost identical to that used by humans, despite the two organisms having diverged from any shared ancestor billions of years ago.",
      parts: [
        {
          label: "a",
          prompt: "Outline what is meant by the genetic code being described as 'near-universal' across living organisms.",
          marks: 2,
          guidance: "A near-universal genetic code means that, with only a small number of documented exceptions, virtually all known organisms use the same specific set of rules mapping each three-base codon to the same corresponding amino acid, regardless of how distantly related those organisms are to one another."
        },
        {
          label: "b",
          prompt: "Explain why this shared genetic code is considered strong evidence for a last universal common ancestor of all life.",
          marks: 4,
          guidance: "Because the specific set of codon-to-amino-acid assignments making up the genetic code is arbitrary, in the sense that there is no obvious chemical reason a particular codon must specify one particular amino acid rather than another, it seems highly improbable that such a specific, complex coding system would have arisen independently on multiple separate occasions; the fact that this same code is shared so broadly across the tree of life instead suggests it was already established in a single ancestral population, the last universal common ancestor, from which all currently known life is ultimately descended."
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
    },
    {
      context: "Forensic scientists sometimes use a technique called DNA fingerprinting, which relies on differences in repetitive, non-coding DNA sequences between individuals, but this technique still depends on the same underlying replication process common to all DNA.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of DNA polymerase III and DNA polymerase I during DNA replication.",
          marks: 3,
          guidance: "DNA polymerase III is responsible for the bulk of new strand synthesis, adding nucleotides to the growing strand by reading the template strand and using complementary base pairing; DNA polymerase I has the specific role of removing the short RNA primers laid down earlier by primase and replacing them with the correct DNA nucleotides, a step needed before the newly synthesised fragments can be properly joined together."
        },
        {
          label: "b",
          prompt: "Explain why accurate DNA replication is essential for a technique like DNA fingerprinting to reliably distinguish between individuals.",
          marks: 3,
          guidance: "DNA fingerprinting relies on comparing specific, variable regions of an individual's genome, regions that differ between individuals due to inherited variation rather than replication errors; if DNA replication were highly inaccurate, this would introduce new, random variation with every cell division, potentially altering these regions unpredictably and undermining the reliability of using them to consistently and accurately identify or distinguish individuals based on inherited, rather than newly acquired, genetic differences."
        }
      ]
    },
    {
      context: "Cancer treatments sometimes target DNA replication directly, using drugs designed to interfere with the enzymes and processes cells rely on to copy their DNA before dividing, since cancer cells tend to divide unusually rapidly and frequently.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of DNA primase and DNA ligase during DNA replication.",
          marks: 3,
          guidance: "DNA primase synthesises a short RNA primer, providing the free 3' end that DNA polymerase requires before it can begin adding new nucleotides to a strand, since DNA polymerase itself cannot start synthesis from nothing; DNA ligase joins together adjacent fragments of newly synthesised DNA, such as the Okazaki fragments produced on the lagging strand, sealing the remaining gaps to form one continuous new strand."
        },
        {
          label: "b",
          prompt: "Suggest why a drug that specifically inhibits DNA polymerase might be particularly effective at slowing the growth of a rapidly dividing tumour, compared with its effect on normal, slower-dividing tissue.",
          marks: 4,
          guidance: "Because tumour cells divide unusually rapidly and frequently, they rely much more heavily on continuous, active DNA replication than most normal, slower-dividing tissue; a drug inhibiting DNA polymerase would disproportionately affect these frequently-replicating tumour cells, disrupting their ability to complete DNA replication and therefore to divide, while having a comparatively smaller impact on normal tissue that divides far less often and is therefore less dependent on continuous DNA polymerase activity at any given moment."
        }
      ]
    },
    {
      context: "Certain viruses, such as HIV, use an enzyme called reverse transcriptase to convert their RNA genome into DNA once inside a host cell, a reversal of the normal direction of information flow described by the central dogma.",
      parts: [
        {
          label: "a",
          prompt: "Outline the normal role of DNA polymerase during DNA replication in a human cell.",
          marks: 2,
          guidance: "DNA polymerase adds new, complementary nucleotides to a growing DNA strand, reading an exposed single-stranded DNA template and matching each new nucleotide via complementary base pairing, synthesising the new strand in a 5' to 3' direction."
        },
        {
          label: "b",
          prompt: "Explain how reverse transcriptase's function differs from that of a typical DNA polymerase, and why this makes it a useful target for antiviral drugs.",
          marks: 4,
          guidance: "Reverse transcriptase uses an RNA template, rather than a DNA template, to synthesise a complementary DNA strand, a reversal of the more typical DNA-to-DNA replication carried out by standard DNA polymerases; because human cells do not normally use this particular type of enzyme (having no routine need to convert RNA back into DNA), a drug that specifically inhibits reverse transcriptase can block a step essential to the virus's life cycle while having comparatively little effect on the host's own normal DNA replication machinery, making it a useful and reasonably selective antiviral drug target."
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
    },
    {
      context: "Cervical cancer screening relies on examining a sample of cervical cells under a microscope, looking for abnormal cells showing signs of uncontrolled or abnormal division that could indicate early-stage cancer.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the mitotic index of a tissue sample is calculated, and explain what a higher mitotic index generally indicates.",
          marks: 3,
          guidance: "The mitotic index is calculated as the number of cells observed to be undergoing mitosis divided by the total number of cells counted, often expressed as a percentage; a higher mitotic index generally indicates a greater rate of cell division within the tissue, which can be a warning sign of abnormal, potentially cancerous growth if found to be unusually elevated compared with normal tissue."
        },
        {
          label: "b",
          prompt: "Explain why detecting cells with an abnormal chromosome number can be a useful indicator when screening for early-stage cancer.",
          marks: 4,
          guidance: "Cancer cells frequently show aneuploidy, an abnormal chromosome number, resulting from errors during mitotic chromosome segregation that are not properly corrected by the cell's normal checkpoint mechanisms; detecting cells with this kind of chromosomal abnormality alongside an elevated mitotic index can suggest that normal control over the cell cycle has broken down in that tissue sample, providing an early warning sign of cancerous or pre-cancerous changes worth investigating further, even before a tumour becomes large enough to detect by other means."
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
    },
    {
      context: "Human hair and fingernails are both built primarily from a fibrous protein called keratin, valued for its mechanical toughness despite being produced by living cells that are, by the time keratin accumulates, already dead.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between fibrous and globular proteins in terms of their general shape and function.",
          marks: 3,
          guidance: "Fibrous proteins, such as keratin, form long, extended, often strongly cross-linked strands well suited to providing mechanical strength and structural support; globular proteins instead fold into a compact, roughly spherical shape, typically suited to functions such as catalysis or transport that depend on a precisely shaped binding site rather than tensile strength."
        },
        {
          label: "b",
          prompt: "Suggest why keratin's structure, rich in the amino acid cysteine, makes it particularly resistant to being pulled apart.",
          marks: 3,
          guidance: "Cysteine amino acids can form strong covalent disulfide bonds with other cysteines positioned nearby once the protein folds; keratin contains many cysteine residues, allowing extensive disulfide cross-linking between adjacent protein strands, and it is this dense network of strong covalent cross-links, in addition to hydrogen bonding within the protein's secondary structure, that gives keratin its considerable resistance to mechanical stress."
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
    },
    {
      context: "Deep-sea hydrothermal vents host dense communities of chemosynthetic bacteria that some scientists propose resemble the kind of environment where the earliest metabolic pathways on Earth could have first evolved.",
      parts: [
        {
          label: "a",
          prompt: "Outline why hydrothermal vents are considered a plausible environment for the origin of early metabolism.",
          marks: 3,
          guidance: "Hydrothermal vents release mineral-rich, chemically energetic water from within the Earth, providing a continuous source of chemical energy (such as hydrogen sulfide) that could have powered early metabolic reactions independently of sunlight; the mineral surfaces around vents may also have provided a suitable environment for concentrating organic molecules and catalysing early chemical reactions, both features considered favourable for the origin of the earliest metabolic pathways."
        },
        {
          label: "b",
          prompt: "Suggest one piece of evidence that would support the hypothesis that life originated near hydrothermal vents rather than at the ocean surface.",
          marks: 2,
          guidance: "Suitable evidence includes the observation that some of the most ancient, deeply branching lineages of archaea and bacteria (based on molecular evolutionary trees) are chemosynthetic, heat-tolerant organisms similar to those found at hydrothermal vents today, suggesting these kinds of organisms may be closer to the ancestral condition of early life than surface-dwelling, sunlight-dependent organisms."
        }
      ]
    },
    {
      context: "Laboratory experiments simulating the chemical conditions thought to resemble early Earth, using simple gases and an energy source such as electrical discharge, have successfully produced amino acids and other organic building blocks from scratch.",
      parts: [
        {
          label: "a",
          prompt: "Outline the significance of this kind of experiment for hypotheses about the origin of life.",
          marks: 3,
          guidance: "This kind of experiment (such as the classic Miller-Urey experiment) demonstrates that organic building blocks essential for life, such as amino acids, could plausibly have formed spontaneously from simple inorganic starting materials under conditions resembling early Earth, providing supporting evidence that the necessary organic molecules could have become available through purely chemical processes rather than requiring a pre-existing biological source."
        },
        {
          label: "b",
          prompt: "Suggest one limitation of this kind of laboratory experiment for fully explaining the chemical origin of life.",
          marks: 2,
          guidance: "Suitable limitations include that producing simple organic molecules like amino acids is only an early step toward the origin of life, and doesn't by itself demonstrate how these building blocks went on to form more complex, self-replicating systems; the experiment also relies on assumptions about early Earth's atmospheric composition and conditions that remain the subject of ongoing scientific debate, meaning the exact starting conditions used may not perfectly reflect the true environment in which life actually originated."
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
    },
    {
      context: "Sickle cell disease results from a single amino acid substitution in the beta-globin chain of haemoglobin, an example of how a very small genetic change can dramatically affect protein structure and function.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a primary mRNA transcript is processed into a mature mRNA molecule in a eukaryotic cell, before it is translated.",
          marks: 3,
          guidance: "The primary transcript undergoes splicing, in which non-coding intron sequences are removed and the remaining coding exon sequences are joined together; a protective 5' cap is added to the beginning of the molecule, and a poly-A tail is added to its end, both helping stabilise the mRNA and protect it from degradation before it is exported from the nucleus to the cytoplasm for translation."
        },
        {
          label: "b",
          prompt: "Explain how a single base substitution mutation in DNA could lead to the specific amino acid change responsible for sickle cell haemoglobin.",
          marks: 3,
          guidance: "A substitution mutation changes a single base within the DNA triplet coding for one particular amino acid position in the beta-globin chain; because this changes the corresponding mRNA codon, the ribosome delivers a different amino acid to that position during translation than would normally be inserted, resulting in a beta-globin protein with one amino acid substituted for another compared with the normal sequence, ultimately altering the protein's structure and function."
        }
      ]
    },
    {
      context: "Antibiotic resistance genes in bacteria are sometimes carried on small circular pieces of DNA called plasmids, which can be transferred between bacterial cells independently of the main bacterial chromosome.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a bacterial cell would express a resistance gene carried on a plasmid.",
          marks: 3,
          guidance: "The plasmid's resistance gene is transcribed into mRNA by RNA polymerase, using the same basic transcription process as genes on the main bacterial chromosome; this mRNA is then translated at a ribosome, producing the resistance protein (such as an enzyme capable of breaking down a particular antibiotic), following the same universal genetic code used to translate genes located anywhere within the bacterial cell."
        },
        {
          label: "b",
          prompt: "Suggest why resistance genes located on plasmids can spread antibiotic resistance more rapidly through a bacterial population than resistance genes located only on the main chromosome.",
          marks: 3,
          guidance: "Plasmids can be transferred directly between bacterial cells through a process called conjugation, independently of normal reproduction; this allows a resistance gene carried on a plasmid to spread relatively quickly to other bacteria, including different bacterial species, without needing to wait for the slower process of vertical transmission (passing from parent cell to daughter cell) alone, helping explain why plasmid-borne resistance genes can spread through a bacterial population, and even between different species, more rapidly than chromosomal genes."
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
    },
    {
      context: "Researchers studying the cellular basis of muscular dystrophy examine muscle biopsy samples under both light and electron microscopy to identify structural abnormalities within affected muscle fibres.",
      parts: [
        {
          label: "a",
          prompt: "Outline why an electron microscope typically requires a specimen to be non-living, unlike a light microscope.",
          marks: 2,
          guidance: "Electron microscopy requires the specimen to be placed within a vacuum, since air molecules would otherwise scatter the electron beam before it reaches the sample, and living tissue cannot survive in a vacuum; specimens usually also need to be chemically fixed, dehydrated, and sometimes coated in a thin layer of metal to be imaged, all of which further prevents the specimen from remaining alive, unlike the comparatively minimal preparation usually needed for light microscopy."
        },
        {
          label: "b",
          prompt: "Explain why an electron microscope, rather than a light microscope, would be needed to observe fine structural abnormalities within individual muscle fibres, such as disrupted sarcomere organisation.",
          marks: 4,
          guidance: "Resolution is fundamentally limited by the wavelength of the radiation used to form an image; visible light has a relatively long wavelength compared with the very fine internal structures of a sarcomere, limiting how much detail a light microscope can resolve no matter how much the image is magnified further. An electron microscope uses a beam of electrons, which have a much shorter wavelength than visible light, achieving far higher resolution and revealing fine structural detail, such as disrupted or misaligned sarcomeres, that light microscopy simply cannot distinguish."
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
    },
    {
      context: "White blood cells called neutrophils are among the first immune cells to arrive at a site of infection, where they engulf and destroy invading bacteria through phagocytosis.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of the organelles involved when a neutrophil engulfs and digests a bacterium.",
          marks: 4,
          guidance: "The neutrophil's plasma membrane extends around the bacterium, engulfing it within a vesicle called a phagosome; this phagosome then fuses with a lysosome, which contains digestive (hydrolytic) enzymes capable of breaking down proteins, lipids, and other macromolecules that make up the bacterium, allowing it to be broken down within this contained, membrane-bound compartment without the digestive enzymes damaging the rest of the neutrophil's own cellular contents."
        },
        {
          label: "b",
          prompt: "Suggest why neutrophils would be expected to contain an unusually large number of lysosomes compared with many other body cells.",
          marks: 2,
          guidance: "Because neutrophils specialise in engulfing and destroying pathogens through phagocytosis, they require a plentiful, ready supply of lysosomes containing digestive enzymes to break down each newly engulfed pathogen; a cell with a less specialised digestive function would not need this same high density of lysosomes, making an unusually large number of lysosomes a reasonable structural adaptation to a neutrophil's specific immune function."
        }
      ]
    },
    {
      context: "Pancreatic acinar cells produce and secrete large quantities of digestive enzymes into the small intestine each day, a demand reflected clearly in their distinctive internal structure when viewed under an electron microscope.",
      parts: [
        {
          label: "a",
          prompt: "Outline the pathway a digestive enzyme follows from its site of synthesis to its release from a pancreatic acinar cell.",
          marks: 4,
          guidance: "The enzyme is synthesised by ribosomes attached to the rough endoplasmic reticulum, where the growing polypeptide is threaded into the internal space for initial folding; it is then transported, typically enclosed within a vesicle, to the Golgi apparatus, which further modifies and packages the protein into secretory vesicles that migrate to and fuse with the plasma membrane, releasing the enzyme outside the cell by exocytosis."
        },
        {
          label: "b",
          prompt: "Suggest why pancreatic acinar cells would be expected to contain an unusually large number of secretory vesicles compared with a typical, non-secretory cell.",
          marks: 2,
          guidance: "Because secretory vesicles are responsible for storing newly packaged enzyme molecules until they are needed and then releasing them via exocytosis, a cell with a high ongoing demand for enzyme secretion, such as a pancreatic acinar cell producing digestive enzymes continuously, would benefit from having a large reserve of these vesicles ready for release, allowing it to respond rapidly to signals (such as the arrival of food in the gut) without waiting for enzymes to be freshly synthesised and packaged on demand."
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
    },
    {
      context: "Certain marine mammals, such as sperm whales, can hold their breath and dive to extreme depths for over an hour, relying on unusually large oxygen and energy reserves stored within their muscle and blood.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of the electron transport chain in producing ATP during aerobic respiration.",
          marks: 3,
          guidance: "Electrons passed along the electron transport chain release energy used to actively pump hydrogen ions across the inner mitochondrial membrane, building up a concentration gradient; this gradient drives hydrogen ions back through ATP synthase, and the energy released by this flow is used to synthesise ATP from ADP and inorganic phosphate, a process called chemiosmosis."
        },
        {
          label: "b",
          prompt: "Suggest why a diving mammal with large oxygen reserves would still eventually need to switch to anaerobic respiration during an extremely long dive.",
          marks: 4,
          guidance: "Even very large oxygen reserves are finite, and as a dive continues, stored oxygen becomes progressively depleted while the animal's muscles continue to demand energy for sustained activity; once available oxygen becomes insufficient to support the required rate of aerobic respiration, muscle cells would need to switch to anaerobic respiration to continue producing at least some ATP, accepting the resulting build-up of lactate as a trade-off for continuing muscle activity during the later stages of a very long dive."
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
    },
    {
      context: "Indoor vertical farms use precisely controlled LED lighting to maximise crop yield while minimising electricity costs, requiring careful consideration of which wavelengths of light are actually worth providing.",
      parts: [
        {
          label: "a",
          prompt: "Explain why LED lighting concentrated in the red and blue wavelengths is generally more cost-effective for a vertical farm than lighting that includes a large proportion of green light.",
          marks: 3,
          guidance: "Chlorophyll absorbs red and blue light strongly but reflects most green light rather than absorbing it; providing light concentrated in the wavelengths chlorophyll actually absorbs makes more efficient use of the electricity being paid for, since green light would largely be wasted (reflected rather than absorbed and used to drive the light-dependent reactions)."
        },
        {
          label: "b",
          prompt: "Outline how the light-dependent reactions use absorbed light energy to produce ATP and reduced NADP, both required by the Calvin cycle.",
          marks: 4,
          guidance: "Light energy absorbed by chlorophyll excites electrons, which pass along an electron transport chain, releasing energy used to pump hydrogen ions across the thylakoid membrane and build up a concentration gradient; this gradient drives ATP synthase, producing ATP. Some of these energised electrons are also used, together with hydrogen ions, to reduce NADP to NADPH, with both ATP and NADPH then supplied to the Calvin cycle to convert fixed carbon dioxide into organic sugars."
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
    },
    {
      context: "Researchers have successfully grown miniature, simplified versions of human organs (called organoids) in the laboratory, starting from a small population of stem cells that differentiate into the various specialised cell types needed.",
      parts: [
        {
          label: "a",
          prompt: "Outline how stem cells are able to differentiate into many different specialised cell types despite sharing an identical genome.",
          marks: 3,
          guidance: "Even though every cell arising from the original stem cell population carries an identical set of genes, different combinations of genes are switched on or off as cells receive different developmental signals during growth; this differential gene expression, rather than any change to the underlying DNA sequence, is what allows genetically identical stem cells to develop into a wide range of structurally and functionally distinct specialised cell types within the growing organoid."
        },
        {
          label: "b",
          prompt: "Suggest one advantage of using organoids grown from a patient's own stem cells to test how that patient might respond to a new drug, compared with testing on cells from an unrelated donor.",
          marks: 2,
          guidance: "Using a patient's own stem cells means the resulting organoid carries that patient's own specific genetic makeup, potentially allowing researchers to test how a drug would affect that particular individual's cells more accurately than testing on cells from an unrelated donor, whose genetic differences could affect how they respond to the same drug in ways that don't reflect the actual patient's likely response."
        }
      ]
    },
    {
      context: "Salamanders have a remarkable ability to fully regenerate lost limbs, a process that relies on specialised cells at the site of injury reverting to a less differentiated state before rebuilding the missing structure.",
      parts: [
        {
          label: "a",
          prompt: "Outline what is meant by cell differentiation.",
          marks: 2,
          guidance: "Cell differentiation is the process by which relatively unspecialised cells develop into structurally and functionally distinct, specialised cell types, driven by differential gene expression rather than any change to the underlying DNA sequence, which remains identical across all the resulting cell types."
        },
        {
          label: "b",
          prompt: "Suggest how cells at a salamander's injury site could revert to a less differentiated state in order to regenerate the missing limb structures.",
          marks: 4,
          guidance: "Because all of a salamander's cells retain a complete copy of its genome despite differentiation involving selective gene expression, cells at the injury site could potentially have their gene expression reprogrammed back toward a less specialised, more flexible state (similar in principle to how induced pluripotent stem cells are produced in the laboratory), allowing them to then re-differentiate into the range of specialised cell types (muscle, bone, skin, and so on) needed to rebuild the missing limb structures."
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
    },
    {
      context: "Studies of survivors of famine, and their children born years later, have found unexpected differences in gene expression and disease risk that persist across at least one generation, prompting researchers to investigate the role of epigenetic inheritance.",
      parts: [
        {
          label: "a",
          prompt: "Outline what is meant by an epigenetic change to a gene, and give one example of such a change.",
          marks: 3,
          guidance: "An epigenetic change alters whether or how much a gene is expressed without changing the underlying DNA base sequence itself; DNA methylation, the addition of methyl groups to specific bases (often silencing the associated gene when heavily methylated), is one well-documented example of this kind of modification."
        },
        {
          label: "b",
          prompt: "Suggest how a severe environmental stress such as famine, experienced by a parent, could potentially influence gene expression patterns in their offspring.",
          marks: 4,
          guidance: "Severe environmental stress can trigger epigenetic modifications, such as changes in DNA methylation, in the cells of an affected individual, including their developing gametes; if these epigenetic marks are not fully erased during the normal reprogramming that usually occurs early in the next generation's development, some of this altered gene expression pattern could potentially be transmitted to offspring, providing one possible mechanism by which a parent's environmental experience might influence gene expression (and, in turn, health outcomes) in their children, even though the offspring's own DNA sequence remains unchanged."
        }
      ]
    },
    {
      context: "Identical twins raised apart, in different environments, sometimes show measurable differences in gene expression and disease risk later in life, despite sharing an identical DNA sequence from birth.",
      parts: [
        {
          label: "a",
          prompt: "Outline what is meant by an epigenetic modification, giving one named example.",
          marks: 2,
          guidance: "An epigenetic modification alters whether or how much a gene is expressed without changing the underlying DNA base sequence itself; DNA methylation, the addition of methyl groups to specific bases (typically reducing expression of the associated gene when heavily methylated), is one commonly cited example."
        },
        {
          label: "b",
          prompt: "Explain how different environmental exposures could lead to measurable differences in gene expression between genetically identical twins.",
          marks: 4,
          guidance: "Different environmental factors, such as diet, stress levels, or exposure to certain chemicals, can trigger different epigenetic modifications (such as changes in DNA methylation) in each twin over their lifetime; because these modifications directly influence gene expression without requiring any change to the shared DNA sequence, twins exposed to sufficiently different environments over many years can develop measurably different gene expression patterns, and potentially different disease risks, despite their identical starting genome."
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
    },
    {
      context: "Radiation workers, such as those in nuclear medicine departments, follow strict safety protocols to minimise their exposure to ionising radiation, which is known to increase the risk of mutation-related illness including cancer.",
      parts: [
        {
          label: "a",
          prompt: "Outline how ionising radiation can cause mutations in DNA.",
          marks: 3,
          guidance: "Ionising radiation carries enough energy to knock electrons out of atoms and molecules it passes through, including DNA; this can directly break chemical bonds within the DNA strand, or generate highly reactive free radicals nearby that go on to chemically damage DNA bases or the sugar-phosphate backbone, potentially causing base changes, strand breaks, or other structural damage that leads to mutation if not correctly repaired."
        },
        {
          label: "b",
          prompt: "Suggest why radiation workers are advised to minimise both the duration and frequency of their exposure, rather than simply avoiding a single large dose.",
          marks: 3,
          guidance: "Because mutation risk generally increases with cumulative radiation exposure over time, minimising both the duration of each individual exposure and the overall frequency of exposures helps reduce the total cumulative dose received across a worker's career, since repeated smaller exposures can still add up to a significant cumulative risk even if no single exposure event is large enough to cause immediate, obvious harm."
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
    },
    {
      context: "IVF clinics carefully monitor a woman's hormone levels throughout a treatment cycle, using this information to precisely time procedures such as egg collection for the best chance of successful fertilization.",
      parts: [
        {
          label: "a",
          prompt: "Outline the roles of FSH and LH in the menstrual cycle.",
          marks: 3,
          guidance: "Follicle stimulating hormone (FSH) stimulates the growth and maturation of ovarian follicles, each containing a developing egg; luteinizing hormone (LH) triggers ovulation, the release of the mature egg from the dominant follicle, typically following a sharp surge in LH concentration partway through the cycle."
        },
        {
          label: "b",
          prompt: "Explain why closely monitoring LH levels is particularly important for timing egg collection during IVF treatment.",
          marks: 4,
          guidance: "A sharp surge in LH reliably precedes ovulation by a short, fairly predictable interval; by closely monitoring LH levels, clinicians can identify the onset of this surge and precisely time the egg collection procedure to occur just before ovulation would naturally happen, maximising the chance of retrieving a fully mature, viable egg rather than either an immature egg (if collected too early) or missing the egg entirely if it has already been released naturally (if collected too late)."
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
    },
    {
      context: "Breeders of Labrador retrievers know that coat colour is controlled by the interaction of two separate genes, and understanding this interaction allows them to predict the range of coat colours possible from a given pair of parents.",
      parts: [
        {
          label: "a",
          prompt: "Define the term epistasis, using coat colour genetics as a potential example.",
          marks: 2,
          guidance: "Epistasis describes a situation in which the expression of one gene is masked or influenced by the alleles present at a different, separate gene; in Labrador coat colour, one gene determines whether pigment is deposited at all, and its alleles can mask the effect of a second gene that would otherwise determine whether any deposited pigment appears black or brown."
        },
        {
          label: "b",
          prompt: "Explain how a cross between two dogs, each heterozygous at both coat colour genes, could produce puppies with three visually distinct coat colours.",
          marks: 5,
          guidance: "Each parent, being heterozygous at both genes, produces four types of gamete in equal proportion through independent assortment; combining gametes from both parents at fertilization can produce genotypes falling into three phenotypic groups once epistasis is accounted for: dogs with the recessive genotype at the pigment-deposition gene appear a uniform light colour (yellow) regardless of their genotype at the second gene, while dogs with at least one dominant pigment-depositing allele show either black or brown fur depending on their genotype at the second gene, together producing the three visually distinct coat colours commonly seen in this breed."
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
    },
    {
      context: "A field ecologist surveying an unfamiliar patch of woodland encounters several organisms she cannot immediately identify, including a small fungus growing on a fallen log and an insect she has never seen before.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a dichotomous key could be used to identify the unfamiliar insect.",
          marks: 3,
          guidance: "A dichotomous key presents a series of paired statements describing contrasting observable features (such as number of legs, presence or absence of wings, or body segmentation); at each step, the ecologist selects whichever statement correctly matches the insect she is examining, which either leads directly to an identification or to the next pair of choices, progressively narrowing down the possibilities until the specific group or species is identified."
        },
        {
          label: "b",
          prompt: "Explain how the fungus's mode of nutrition could be used to help distinguish it from a nearby moss growing on the same log.",
          marks: 3,
          guidance: "Fungi are saprotrophic heterotrophs, obtaining nutrients by secreting digestive enzymes onto dead organic matter (such as the fallen log) and absorbing the resulting products, since they lack chlorophyll and cannot photosynthesise; mosses, by contrast, are autotrophic, producing their own organic compounds through photosynthesis using chlorophyll, so testing for the presence of chlorophyll (or observing whether the organism is capable of independent nutrition without an external organic food source) would help distinguish the heterotrophic fungus from the autotrophic moss."
        }
      ]
    },
    {
      context: "A biodiversity survey team exploring a newly accessible cave system discovers several previously unknown invertebrate species and must classify each one using standard taxonomic methods.",
      parts: [
        {
          label: "a",
          prompt: "Outline how a dichotomous key could be used to help classify one of the newly discovered species.",
          marks: 3,
          guidance: "A dichotomous key presents a series of paired statements describing contrasting observable features (such as number of legs, presence or absence of a shell, or body segmentation); at each step, the researcher selects whichever statement correctly matches the specimen being examined, which either leads directly to an identification or to a further pair of choices, progressively narrowing down the possibilities until the specific group or species is identified."
        },
        {
          label: "b",
          prompt: "Explain why molecular data, in addition to physical characteristics, might be particularly useful for classifying species discovered in an isolated cave system.",
          marks: 3,
          guidance: "Species isolated in an extreme, unusual environment like a cave system may have undergone significant physical adaptation (such as loss of eyes or pigmentation) that could obscure their true relationship to surface-dwelling relatives if classification relied on physical appearance alone; molecular data, directly reflecting genetic relatedness, can help reveal true evolutionary relationships that might not be obvious from physical characteristics that have been substantially reshaped by adaptation to this unusual, isolated habitat."
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
    },
    {
      context: "The kangaroo rat, a small desert rodent, survives its entire life without ever needing to drink liquid water, obtaining all the water it needs from its food and from water produced during its own cellular respiration.",
      parts: [
        {
          label: "a",
          prompt: "Outline two physiological adaptations that could help the kangaroo rat minimise water loss in its desert habitat.",
          marks: 2,
          guidance: "Suitable adaptations include an unusually long loop of Henle in the kidney, allowing the production of extremely concentrated urine and minimising water lost through excretion, and specialised nasal passages that cool and condense water vapour from exhaled air before it is lost, recapturing some of the water that would otherwise be exhaled."
        },
        {
          label: "b",
          prompt: "Explain why metabolic water, produced during cellular respiration, can make a meaningful contribution to this animal's overall water balance despite it never drinking liquid water.",
          marks: 3,
          guidance: "Aerobic respiration of food, particularly of carbohydrates and fats, produces water as one of its end products, alongside carbon dioxide; because the kangaroo rat has such effective adaptations for minimising water loss elsewhere (through urine, faeces, and respiration), even this comparatively modest source of water production from its own metabolism can be sufficient to maintain overall water balance without ever needing to drink liquid water directly."
        }
      ]
    },
    {
      context: "The Arctic ground squirrel undergoes extreme hibernation, during which its body temperature drops below freezing for extended periods, an ability rare among mammals and reliant on multiple coordinated physiological adaptations.",
      parts: [
        {
          label: "a",
          prompt: "Outline two physiological adaptations that might allow an animal to survive extremely low body temperatures during hibernation.",
          marks: 2,
          guidance: "Suitable adaptations include producing natural antifreeze-like compounds in the blood and tissues that prevent damaging ice crystal formation within cells, and dramatically reducing metabolic rate and heart rate to minimise energy expenditure during the prolonged period of low body temperature."
        },
        {
          label: "b",
          prompt: "Explain how natural selection could have produced such an extreme cold-tolerance adaptation in this species over evolutionary time.",
          marks: 4,
          guidance: "Ancestral squirrel populations likely showed natural variation in cold tolerance among individuals; in an environment with extremely harsh, prolonged winters, individuals with heritable traits allowing even slightly better survival at very low body temperatures would have been more likely to survive and reproduce than less cold-tolerant individuals. Repeated over many generations, this differential survival and reproduction could gradually shift the population toward the extreme cold tolerance seen in the species today, an example of directional selection acting under a strong, consistent selective pressure."
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
    },
    {
      context: "Widespread use of a single class of pesticide against a crop-damaging beetle species has, over a decade, resulted in the pesticide becoming far less effective at controlling beetle populations in many farming regions.",
      parts: [
        {
          label: "a",
          prompt: "Explain, in terms of natural selection, how repeated pesticide use could lead to a decline in the pesticide's overall effectiveness.",
          marks: 4,
          guidance: "If a small number of beetles already carried a heritable resistance allele before the pesticide was introduced, repeated pesticide application would kill susceptible beetles while resistant ones survived and reproduced; because resistance is heritable, the proportion of resistant beetles in the population would increase with each generation of exposure, gradually reducing the pesticide's overall effectiveness at controlling the population as resistant individuals become more common."
        },
        {
          label: "b",
          prompt: "Suggest one strategy farmers could use to slow the development of pesticide resistance in this beetle population.",
          marks: 2,
          guidance: "Suitable strategies include rotating between pesticides with different modes of action (so that resistance to one doesn't provide an advantage against the other), using integrated pest management approaches that combine pesticide use with other control methods (reducing overall reliance on the pesticide), or maintaining untreated 'refuge' areas where susceptible beetles can survive and interbreed with any resistant individuals, diluting the spread of resistance alleles."
        }
      ]
    },
    {
      context: "A population of aphids on a commercial crop has shown a marked increase in resistance to a widely used insecticide over just a few growing seasons, despite the insecticide having been highly effective when first introduced.",
      parts: [
        {
          label: "a",
          prompt: "Explain how the aphid population could have evolved insecticide resistance so rapidly, in terms of natural selection.",
          marks: 4,
          guidance: "Random mutation would have generated some variation in insecticide susceptibility within the original aphid population, entirely independent of insecticide exposure; when the insecticide was first applied, individuals carrying a resistance-conferring allele would have survived and reproduced at a much higher rate than susceptible individuals, and because aphids can reproduce very rapidly with short generation times, this strong selective advantage could increase the resistance allele's frequency substantially within just a few growing seasons."
        },
        {
          label: "b",
          prompt: "Suggest one strategy that could help slow the future evolution of insecticide resistance in this aphid population.",
          marks: 2,
          guidance: "Suitable strategies include rotating between different classes of insecticide with different modes of action, reducing the consistent selective pressure favouring resistance to any single compound, or combining chemical control with non-chemical methods (such as biological control using natural predators), reducing overall reliance on the insecticide and the resulting selective pressure driving resistance evolution."
        }
      ]
    },
    {
      context: "A population of moths shows two colour morphs, light and dark, and researchers have monitored their relative frequencies over several decades as local air pollution levels have changed, affecting the colour of tree bark the moths rest on.",
      parts: [
        {
          label: "a",
          prompt: "Outline how natural selection could explain a change in the relative frequency of the two colour morphs following a change in bark colour due to pollution.",
          marks: 4,
          guidance: "If pollution darkens the tree bark, a dark-coloured moth morph would be better camouflaged against this darker background, making it less visible to predators than the lighter morph; individuals with the dark colouration would therefore be more likely to survive and reproduce, increasing the frequency of the dark morph's alleles in the population over successive generations, a process that would be expected to reverse if pollution were later reduced and the bark returned to a lighter colour, favouring the light morph once again."
        },
        {
          label: "b",
          prompt: "Suggest what type of evidence, beyond simply observing changing morph frequencies, would help confirm predation (rather than some other factor) is the main cause of this change.",
          marks: 2,
          guidance: "Suitable evidence includes direct observation or recording of predators (such as birds) capturing moths of each colour morph at different rates depending on the current bark colour, or controlled experiments placing moths of both morphs on different bark backgrounds and measuring differences in predation rate, both of which would provide more direct evidence that predation, specifically, is driving the observed change in morph frequency."
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
    },
    {
      context: "Cichlid fish in the African Great Lakes have diversified into hundreds of distinct species over a relatively short evolutionary timescale, each adapted to a different feeding strategy and habitat within the same lake system.",
      parts: [
        {
          label: "a",
          prompt: "Outline the process of adaptive radiation, using the cichlid fish as an example.",
          marks: 4,
          guidance: "Adaptive radiation describes the relatively rapid diversification of a single ancestral species into many descendant species, each adapted to a different ecological niche; an ancestral cichlid species colonising a lake with abundant, varied food resources and relatively few established competitors could diversify over time into distinct species, each specialised for a particular niche (such as scraping algae, crushing snail shells, or hunting other fish), eventually producing the hundreds of ecologically distinct cichlid species seen in some African lakes today."
        },
        {
          label: "b",
          prompt: "Suggest one type of evidence that could be used to confirm that two cichlid species share a recent common ancestor, despite having very different feeding structures.",
          marks: 2,
          guidance: "Comparing DNA or protein sequences between the two species would provide direct molecular evidence of their relatedness, since closely related species (having diverged relatively recently) would be expected to show greater sequence similarity than more distantly related species, regardless of how different their external feeding structures might currently appear."
        }
      ]
    },
    {
      context: "Vestigial structures, such as the small pelvic bones found in some whale species, are remnants of features that were functional in a distant ancestor but no longer serve their original purpose in the modern organism.",
      parts: [
        {
          label: "a",
          prompt: "Explain what the presence of vestigial pelvic bones in whales suggests about their evolutionary history.",
          marks: 3,
          guidance: "The presence of small, non-functional pelvic bones in whales, structures used for supporting hind limbs in most other mammals, strongly suggests that whales evolved from a land-dwelling, four-limbed ancestor; as this ancestral lineage adapted to a fully aquatic lifestyle, the hind limbs themselves became reduced and eventually lost, but the pelvic bones persisted in a reduced, non-functional form rather than disappearing entirely."
        },
        {
          label: "b",
          prompt: "Suggest why a structure like this might persist over evolutionary time even though it no longer serves its original function.",
          marks: 2,
          guidance: "A vestigial structure that no longer serves its original function, but also causes no significant survival or reproductive disadvantage, experiences little to no selective pressure to be lost entirely; without a strong selective force actively removing the structure, it can persist in a reduced form across many generations, since natural selection acts on functional advantages and disadvantages rather than removing every trait that has simply become unnecessary."
        }
      ]
    },
    {
      context: "Two species of stickleback fish, one living in open lake water and one living in a nearby stream, differ noticeably in body shape and the size of their protective bony plates, despite both having descended from a shared marine ancestor within the last several thousand years.",
      parts: [
        {
          label: "a",
          prompt: "Suggest how these two populations, descended from a shared ancestor within a relatively short evolutionary timescale, could have diverged in body shape and armour plating.",
          marks: 4,
          guidance: "The lake and stream environments likely present different selective pressures, such as different predator types, water flow conditions, or food availability; individuals in each population best suited to their specific local conditions (for example, a body shape suited to a particular type of swimming, or an appropriate degree of armour plating balancing predation protection against the cost of producing it) would have been more likely to survive and reproduce, and over many generations, this differential survival could drive the two populations to diverge in these traits, even over a relatively short evolutionary timescale."
        },
        {
          label: "b",
          prompt: "Suggest what type of evidence would help confirm that the two stickleback populations still belong to the same species, despite these physical differences.",
          marks: 2,
          guidance: "Successfully producing fertile offspring when individuals from the two populations are crossed, either in a controlled laboratory setting or observed under natural conditions, would provide strong evidence (based on the biological species concept) that the two populations remain the same species, despite the physical differences that have developed between them."
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
    },
    {
      context: "A species of small bird regularly follows groups of foraging monkeys through the forest canopy, catching insects that the monkeys disturb as they move through the vegetation, without providing the monkeys any obvious benefit in return.",
      parts: [
        {
          label: "a",
          prompt: "Identify the type of interspecific relationship shown between the bird and the monkeys, and justify your answer.",
          marks: 2,
          guidance: "This is commensalism, since the bird benefits by gaining easier access to disturbed insects, while the monkeys are neither helped nor noticeably harmed by the bird's presence, distinguishing this from mutualism (which would require a benefit to both species) or parasitism (which would require harm to the monkeys)."
        },
        {
          label: "b",
          prompt: "Explain how competition could arise between the bird species described and a second, similar bird species that also follows the same monkey troops for the same reason.",
          marks: 4,
          guidance: "If both bird species rely on the same limited resource, insects disturbed by the same monkey troops, they would be in direct competition (interspecific competition) for this shared food source; if one species is even slightly more effective at exploiting this resource (for example, by flying faster or having a more effective feeding technique), it could outcompete the other over time, potentially leading to the competitive exclusion of the less successful species from following that particular group of monkeys, unless the two species' niches diverge in some way, such as specialising in different types of disturbed insect."
        }
      ]
    },
    {
      context: "Certain species of shrimp live within the protective spines of sea urchins, gaining shelter from predators while foraging for scraps of food and algae among the urchin's spines, seemingly without affecting the urchin itself.",
      parts: [
        {
          label: "a",
          prompt: "Identify the type of interspecific relationship shown between the shrimp and the sea urchin, and justify your answer.",
          marks: 2,
          guidance: "This is commensalism, since the shrimp benefits from gaining shelter and access to food scraps, while the sea urchin appears to be neither harmed nor helped by the shrimp's presence, distinguishing this from mutualism (which would require a clear benefit to the urchin as well)."
        },
        {
          label: "b",
          prompt: "Suggest how competition could arise between two different shrimp species both attempting to shelter within the spines of the same sea urchin.",
          marks: 3,
          guidance: "If both shrimp species rely on the same limited resource, in this case, sheltered space among a particular urchin's spines and the food scraps available there, they would be in direct competition for this shared resource; if one species is more effective at securing and defending this space, it could outcompete the other over time, potentially excluding the less successful species from that particular urchin, unless the two species' niches diverge in some way, such as preferring different urchin species or different microhabitats within the spines."
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
    },
    {
      context: "A team of taxonomists is revising the classification of a group of freshwater snails after new molecular evidence reveals unexpected relationships between species previously grouped together based on shell shape alone.",
      parts: [
        {
          label: "a",
          prompt: "Explain why shell shape alone might not be a reliable characteristic for classifying these snail species.",
          marks: 3,
          guidance: "Shell shape can be influenced by convergent evolution, where unrelated species independently evolve similar shell forms in response to similar environmental pressures (such as water flow rate or predation risk), rather than reflecting genuine shared ancestry; relying on shell shape alone risks grouping together species that merely look similar (an analogous relationship) rather than species that are truly closely related, producing an inaccurate, artificial classification."
        },
        {
          label: "b",
          prompt: "Outline how molecular data can be used to construct a more accurate classification for this group of snails.",
          marks: 4,
          guidance: "Comparing DNA or protein sequences across the different snail species allows genetic relatedness to be assessed directly, since species with fewer sequence differences are inferred to share a more recent common ancestor than species with more differences; this molecular data can be used to construct a cladogram reflecting the group's actual evolutionary relationships, which can then be compared against the traditional, shell-shape-based classification to identify and correct any groupings that were based on convergent similarity rather than true shared ancestry."
        }
      ]
    },
    {
      context: "The three-domain system of classification, developed after comparing ribosomal RNA sequences across many organisms, revealed that the group traditionally called 'prokaryotes' actually contains two profoundly distinct evolutionary lineages.",
      parts: [
        {
          label: "a",
          prompt: "Outline the three domains used in the modern system of classification.",
          marks: 3,
          guidance: "The three domains are Bacteria, Archaea, and Eukarya; Bacteria and Archaea both consist of prokaryotic organisms lacking a membrane-bound nucleus, but differ substantially in their biochemistry (such as cell wall composition and membrane lipid structure), while Eukarya consists of organisms with a true, membrane-bound nucleus and other membrane-bound organelles."
        },
        {
          label: "b",
          prompt: "Explain why molecular evidence, rather than structural features visible under a microscope, was needed to reveal the distinction between Bacteria and Archaea.",
          marks: 4,
          guidance: "Under a standard light or even electron microscope, Bacteria and Archaea appear broadly similar, both lacking a nucleus and other membrane-bound organelles typical of eukaryotic cells, making them difficult to distinguish using structural features alone; it was only through comparing molecular evidence, particularly ribosomal RNA sequences, that scientists discovered these two groups are in fact profoundly genetically distinct, prompting their separation into two entirely different domains despite their superficially similar prokaryotic cell structure."
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
    },
    {
      context: "A stretch of coastal sand dune has been protected from human disturbance for several decades, allowing ecologists to study the natural progression of plant communities from the youngest, most exposed dunes near the sea to the oldest, most stable dunes further inland.",
      parts: [
        {
          label: "a",
          prompt: "Outline the changes in vegetation typically observed across a dune succession, from youngest to oldest dunes.",
          marks: 4,
          guidance: "The youngest dunes, closest to the sea and most exposed to salt spray and shifting sand, are typically colonised by hardy pioneer species such as marram grass, adapted to unstable, nutrient-poor conditions; as dunes stabilise and accumulate organic matter over time, a wider range of grasses and herbaceous plants establish, followed eventually by shrubs and, on the oldest and most stable dunes furthest inland, established woodland."
        },
        {
          label: "b",
          prompt: "Explain why species diversity generally increases as succession proceeds across this dune sequence.",
          marks: 3,
          guidance: "As succession proceeds, accumulating organic matter improves soil structure and nutrient availability, while increasingly complex vegetation creates a greater variety of physical structure, light conditions, and microhabitats; this growing habitat complexity generally allows a wider range of species to establish and coexist, increasing overall species diversity as the dune sequence progresses from simple pioneer vegetation toward a more complex, established plant community."
        }
      ]
    },
    {
      context: "A series of ponds formed at different times by a retreating glacier show progressively more advanced stages of ecological succession, from open water in the youngest ponds to nearly filled-in, marshy ground in the oldest.",
      parts: [
        {
          label: "a",
          prompt: "Outline the term hydrosere succession, referring to the pond sequence described.",
          marks: 2,
          guidance: "Hydrosere succession describes the successional sequence occurring in an aquatic habitat, such as a pond, as it is gradually filled in by accumulating sediment and encroaching vegetation, eventually transitioning from open water toward a marshy, and ultimately terrestrial, habitat type over an extended period of time."
        },
        {
          label: "b",
          prompt: "Explain why the oldest ponds in this sequence show the least remaining open water.",
          marks: 4,
          guidance: "Over time, sediment carried into the pond by water flow, combined with organic matter from dying aquatic and marginal plants, gradually accumulates on the pond bottom and around its edges; as this process continues across many years, the pond becomes progressively shallower and its edges become increasingly colonised by marginal and then terrestrial vegetation, so the oldest ponds in the sequence, having undergone this filling-in process for the longest time, show the least remaining open water and the most advanced successional vegetation."
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
    },
    {
      context: "Coral reefs around the world have experienced repeated mass bleaching events as ocean temperatures have risen in recent decades, threatening one of the most biodiverse marine ecosystems on the planet.",
      parts: [
        {
          label: "a",
          prompt: "Outline the biological cause of coral bleaching.",
          marks: 3,
          guidance: "Coral bleaching occurs when heat-stressed coral polyps expel their symbiotic photosynthetic algae (zooxanthellae), which normally provide the coral with both its colour and a substantial portion of its nutritional needs through photosynthesis; without these algae, the coral appears white (bleached) and, if the stress persists and the algae aren't recolonised, the coral may eventually starve and die."
        },
        {
          label: "b",
          prompt: "Explain why rising ocean temperatures linked to climate change are considered a major threat to coral reef biodiversity specifically, beyond their direct effect on coral itself.",
          marks: 4,
          guidance: "Coral reefs provide the physical structure and habitat that supports an enormous diversity of other marine species, including fish, invertebrates, and other organisms that rely on the reef for shelter, feeding grounds, or breeding sites; widespread coral bleaching and subsequent coral death, driven by rising ocean temperatures, can therefore trigger a much broader loss of biodiversity across the entire reef ecosystem, not just among the coral species themselves, since so many other species depend directly or indirectly on a healthy coral reef structure to survive."
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
    },
    {
      context: "A conservation team monitoring a population of a rare tortoise species uses mark-release-recapture surveys every few years to track how the population is changing over time, in relation to the site's estimated carrying capacity.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the size of the tortoise population could be estimated using mark-release-recapture, and state the formula used.",
          marks: 3,
          guidance: "A sample of tortoises is captured, marked in a way that won't harm them, and released back into the population; after allowing time for the marked individuals to redistribute randomly, a second sample is captured, and the proportion of marked individuals within it is used to estimate total population size, using the Lincoln index: total population estimate = (number marked in first sample × total number in second sample) ÷ number of marked individuals recaptured in the second sample."
        },
        {
          label: "b",
          prompt: "Explain what would be expected to happen to this tortoise population's growth rate as its size approaches the site's carrying capacity.",
          marks: 4,
          guidance: "As the population approaches carrying capacity, increasing competition for limited resources such as food, nesting sites, and shelter would be expected to reduce the population's overall growth rate, since resource scarcity typically increases mortality and/or reduces reproductive success; this density-dependent regulation causes population growth to slow and eventually stabilise once the population reaches a size the environment can sustainably support, rather than continuing to grow indefinitely."
        }
      ]
    },
    {
      context: "Marine biologists studying a population of a slow-moving sea star species on a rocky shore use random quadrat sampling, rather than mark-release-recapture, to estimate its population density across the site.",
      parts: [
        {
          label: "a",
          prompt: "Explain why quadrat sampling is more appropriate than mark-release-recapture for estimating the population of this sea star species.",
          marks: 3,
          guidance: "Quadrat sampling is well suited to relatively immobile or slow-moving organisms like sea stars, since it doesn't rely on the assumption, central to mark-release-recapture, that marked individuals will move and redistribute randomly back into the wider population between sampling events; because sea stars move very little, this assumption would be unreliable, making random quadrat sampling a more appropriate method for this particular species."
        },
        {
          label: "b",
          prompt: "Outline how the results from multiple quadrats could be used to estimate the total sea star population across the entire rocky shore habitat.",
          marks: 3,
          guidance: "The mean number of sea stars counted per quadrat is calculated from a suitably large number of randomly placed quadrats of known area; this mean density per unit area is then multiplied by the total area of the habitat being studied to produce an estimate of the total population size across the whole site, with the standard deviation of the counts per quadrat providing a measure of how evenly the sea stars are distributed."
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
    },
    {
      context: "A woodland ecosystem's carbon cycle involves continuous exchange between the atmosphere, living organisms, dead organic matter, and the soil, with each pathway contributing to the overall balance of carbon stored versus released.",
      parts: [
        {
          label: "a",
          prompt: "Outline the main processes by which carbon enters and leaves this woodland ecosystem.",
          marks: 4,
          guidance: "Carbon enters the ecosystem primarily through photosynthesis, as trees and other producers fix atmospheric CO2 into organic compounds; it then passes through the ecosystem via feeding relationships as consumers eat producers and each other. Carbon leaves the ecosystem mainly through cellular respiration (releasing CO2 back into the atmosphere) carried out by producers, consumers, and decomposers, and can also be lost through processes like combustion during a wildfire."
        },
        {
          label: "b",
          prompt: "Explain why decomposers play an essential role in this woodland's overall carbon cycle.",
          marks: 3,
          guidance: "Decomposers break down dead organic matter, such as fallen leaves and deadwood, releasing the carbon it contains back into the atmosphere as CO2 through their own respiration, or incorporating some of it into the soil as organic matter; without decomposers, carbon would remain locked up within accumulating dead material rather than being recycled back into a form available for producers to use again, disrupting the normal, continuous cycling of carbon through the ecosystem."
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
    },
    {
      context: "A government agency is deciding how to allocate a limited conservation budget between restoring a degraded wetland that supports several common bird species and protecting an isolated cave system that hosts a species of blind cave fish found nowhere else in the world.",
      parts: [
        {
          label: "a",
          prompt: "Suggest a reason based on evolutionary distinctiveness that might favour prioritising protection of the cave fish over the wetland restoration.",
          marks: 2,
          guidance: "If the cave fish species has no close living relatives and represents a unique, long-isolated evolutionary lineage, its extinction would result in the permanent loss of a disproportionately large and irreplaceable share of unique evolutionary history, compared with the loss of a wetland supporting more common bird species that have many close relatives elsewhere, whose loss from this one specific site would represent a smaller overall loss of unique biodiversity."
        },
        {
          label: "b",
          prompt: "Explain why a species restricted to a single, isolated cave system might be considered at particularly high risk of extinction.",
          marks: 3,
          guidance: "A species confined to a single, isolated location has no alternative populations elsewhere to rely on if that specific habitat is damaged, degraded, or destroyed by even a single localised threat, such as pollution, disease, or a change in water flow into the cave system; this lack of any backup population makes highly range-restricted species like this cave fish especially vulnerable to extinction compared with species distributed across multiple separate sites."
        }
      ]
    },
    {
      context: "A university research team is using DNA barcoding, comparing a short standardised gene sequence across many species, to rapidly assess the biodiversity of an unfamiliar tropical forest, helping identify conservation priorities within a limited survey timeframe.",
      parts: [
        {
          label: "a",
          prompt: "Suggest one advantage of using DNA barcoding, rather than solely relying on visual identification, to assess biodiversity in an unfamiliar habitat.",
          marks: 2,
          guidance: "DNA barcoding allows researchers to identify and distinguish species accurately even when specimens are damaged, immature, or otherwise difficult to identify by visual appearance alone, and can be applied consistently across many different types of organism using the same basic technique, potentially speeding up and improving the accuracy of a biodiversity survey compared with relying entirely on time-consuming and sometimes uncertain visual identification."
        },
        {
          label: "b",
          prompt: "Explain how identifying areas of particularly high species diversity through this kind of survey could help guide conservation priorities.",
          marks: 3,
          guidance: "Identifying areas with unusually high species diversity, or a high proportion of species found nowhere else (endemic species), allows conservation organisations to prioritise limited funding and protective effort toward the sites likely to provide the greatest overall biodiversity benefit; without this kind of survey data, conservation resources might instead be allocated based on less informed criteria, potentially overlooking areas of disproportionately high conservation value."
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
    },
    {
      context: "Cystic fibrosis is caused by a fault in a specific membrane transport protein, and researchers are investigating gene therapy approaches that would deliver a corrected copy of this protein's gene directly to affected lung cells.",
      parts: [
        {
          label: "a",
          prompt: "Outline the normal function of a membrane transport protein such as the one affected in cystic fibrosis.",
          marks: 3,
          guidance: "Membrane transport proteins allow specific substances, in this case chloride ions, to cross the otherwise impermeable phospholipid bilayer; depending on the specific protein, this movement may occur passively (facilitated diffusion, down a concentration gradient) or actively (using ATP, potentially against a concentration gradient), allowing the cell to regulate the movement of ions and other substances that could not otherwise cross the membrane unaided."
        },
        {
          label: "b",
          prompt: "Suggest why successfully delivering a corrected gene to lung cells might not immediately or completely reverse all symptoms of cystic fibrosis.",
          marks: 3,
          guidance: "Even with a corrected gene successfully delivered and expressed, existing damage already caused by years of abnormal mucus production (such as chronic infection or lung scarring) would not necessarily be reversed simply by restoring normal protein function going forward; additionally, ensuring the corrected gene is delivered to a sufficient proportion of the many affected cells throughout the lungs, and that it continues to be expressed effectively over the long term, presents ongoing technical challenges for this kind of gene therapy approach."
        }
      ]
    },
    {
      context: "Sports drinks are formulated with a specific concentration of dissolved salts and sugars, designed to be absorbed efficiently by the small intestine without disrupting the body's normal water balance.",
      parts: [
        {
          label: "a",
          prompt: "Outline what is meant by an isotonic solution.",
          marks: 2,
          guidance: "An isotonic solution has a water potential equal to that of the cells or body fluid it is being compared with, meaning there is no net movement of water into or out of cells by osmosis when the two are in contact."
        },
        {
          label: "b",
          prompt: "Explain why a sports drink formulated to be strongly hypertonic relative to blood plasma might actually slow, rather than speed up, fluid absorption during exercise.",
          marks: 4,
          guidance: "If a drink is hypertonic relative to blood plasma, it has a lower water potential than the surrounding intestinal cells and blood; rather than water moving efficiently from the gut into the bloodstream, a hypertonic solution can actually draw water out of the surrounding cells and into the gut by osmosis, temporarily worsening rather than improving hydration, which is why sports drinks are typically formulated to be isotonic or only mildly hypertonic to avoid this counterproductive effect."
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
    },
    {
      context: "Patients with Addison's disease produce insufficient cortisol and aldosterone due to damage to their adrenal glands, requiring lifelong hormone replacement therapy to manage the resulting symptoms.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of negative feedback in the normal regulation of cortisol secretion.",
          marks: 3,
          guidance: "Rising cortisol levels normally provide negative feedback to the hypothalamus and pituitary gland, reducing the secretion of the hormones (such as ACTH) that stimulate further cortisol release from the adrenal glands; this feedback loop helps keep cortisol levels within an appropriate normal range, preventing levels from rising or falling too far from the body's set point."
        },
        {
          label: "b",
          prompt: "Explain why a patient with Addison's disease might struggle to cope with physical stress, such as illness or injury, without adjusting their hormone replacement dose.",
          marks: 4,
          guidance: "Cortisol secretion normally increases substantially during periods of physical stress, helping mobilise energy reserves and support various physiological functions needed to cope with the added demand; because a patient with Addison's disease cannot naturally increase their own cortisol production in response to stress (due to the underlying adrenal gland damage), their fixed replacement dose may be insufficient during a period of illness or injury, potentially leading to a dangerous adrenal crisis unless their dose is specifically increased to compensate for this additional physiological demand."
        }
      ]
    },
    {
      context: "A hiker becomes lost in a mountainous region overnight without adequate shelter, and by morning shows signs of dangerously low core body temperature despite the body's normal thermoregulatory mechanisms attempting to compensate.",
      parts: [
        {
          label: "a",
          prompt: "Outline two physiological responses the body would normally use to try to maintain core temperature in cold conditions.",
          marks: 2,
          guidance: "Suitable responses include vasoconstriction of blood vessels near the skin surface, reducing heat loss by directing blood flow away from the body's surface, and shivering, in which rapid, involuntary muscle contractions generate additional metabolic heat."
        },
        {
          label: "b",
          prompt: "Explain why these thermoregulatory responses might eventually fail to prevent a dangerous drop in core body temperature during a prolonged, severe cold exposure.",
          marks: 4,
          guidance: "While vasoconstriction and shivering can help conserve and generate heat in the short term, they both require ongoing energy expenditure and cannot fully compensate for prolonged, severe heat loss to a very cold environment, especially without adequate insulation or shelter; over an extended period, the body's heat loss can exceed what these compensatory mechanisms can offset, causing core temperature to fall progressively despite the ongoing thermoregulatory response, eventually resulting in dangerous hypothermia if the exposure continues without intervention."
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
    },
    {
      context: "Firefighters entering a burning building experience a rapid, coordinated physiological response as their bodies prepare for intense physical exertion under dangerous, high-stress conditions.",
      parts: [
        {
          label: "a",
          prompt: "Outline how the nervous and endocrine systems work together to prepare the body for intense physical activity in a high-stress situation.",
          marks: 4,
          guidance: "The sympathetic nervous system produces an almost immediate response, including increased heart rate and pupil dilation, via direct nerve signals; this is reinforced by the endocrine system, particularly the release of adrenaline (epinephrine) from the adrenal glands, which sustains and amplifies these effects (further increasing heart rate, redirecting blood flow toward muscles, and releasing stored glucose for energy) over a somewhat longer timeframe than the nervous system's initial, very rapid response alone could achieve."
        },
        {
          label: "b",
          prompt: "Suggest why this kind of integrated response is more effective for coping with sudden, intense danger than either the nervous or endocrine system acting alone.",
          marks: 3,
          guidance: "The nervous system alone provides an extremely rapid, but comparatively brief, initial response, while the endocrine system alone would act too slowly to prepare the body for genuinely immediate danger; combining both systems allows for an almost instantaneous initial response (from the nervous system) that is then sustained and reinforced over a longer period (via hormonal signalling), providing both the speed and the duration of physiological preparation needed to cope effectively with a prolonged, high-stress situation like fighting a fire."
        }
      ]
    },
    {
      context: "A patient recovering from a stroke affecting a specific region of the brainstem shows disrupted coordination between their heart rate, breathing rate, and blood pressure, all of which had previously adjusted smoothly and automatically in response to changes in activity level.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of the brainstem in coordinating involuntary physiological functions.",
          marks: 3,
          guidance: "The brainstem contains centres responsible for regulating several vital, involuntary physiological functions, including heart rate, breathing rate, and blood pressure, continuously adjusting these functions in response to the body's changing needs (such as during exercise or rest) without requiring any conscious control."
        },
        {
          label: "b",
          prompt: "Explain why damage to a single region of the brainstem could disrupt the coordination of several apparently separate physiological functions simultaneously.",
          marks: 4,
          guidance: "Because the brainstem integrates and coordinates multiple vital functions using closely related or overlapping neural circuits, damage to this single, centrally important region can disrupt several seemingly separate physiological functions at once, since these functions rely on shared or interconnected control mechanisms within the brainstem rather than being regulated by entirely independent, unconnected structures elsewhere in the nervous system."
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
    },
    {
      context: "Astronauts returning from long-duration space missions often experience significant loss of muscle mass and strength, despite following structured resistance exercise routines while aboard the spacecraft, due to the near-absence of gravitational loading on their muscles.",
      parts: [
        {
          label: "a",
          prompt: "Outline the sliding filament model of muscle contraction.",
          marks: 4,
          guidance: "Calcium ions released within the muscle fibre bind to troponin, causing a shape change that shifts tropomyosin and exposes the myosin-binding sites on the actin filament; myosin heads then bind to these exposed sites, forming cross-bridges, and using energy from ATP hydrolysis, they pivot and pull the actin filament inward toward the centre of the sarcomere. This sliding of actin past myosin, without either filament itself shortening, reduces the overall length of the sarcomere, and the cycle repeats as long as calcium and ATP remain available."
        },
        {
          label: "b",
          prompt: "Suggest why muscle wasting occurs in astronauts despite them following a regular exercise routine during their mission.",
          marks: 3,
          guidance: "Muscle tissue typically adapts to the mechanical load it experiences, and much of the everyday load muscles normally experience on Earth (from supporting body weight against gravity) is almost entirely absent in the near-weightless environment of space; even with a structured exercise routine providing some resistance training, the overall mechanical demand on muscles used for posture and movement is considerably reduced compared with Earth-based activity, and this reduced demand can still trigger a net loss of muscle protein and mass over an extended mission, despite the astronaut's best efforts to counteract it through exercise."
        }
      ]
    },
    {
      context: "A patient recovering from a knee ligament injury undergoes physiotherapy focused on rebuilding strength and stability in the surrounding muscle groups, since the joint's normal function depends on close cooperation between muscles, tendons, and ligaments.",
      parts: [
        {
          label: "a",
          prompt: "Distinguish between the roles of tendons and ligaments at a joint such as the knee.",
          marks: 2,
          guidance: "Tendons connect muscle to bone, transmitting the force generated by a contracting muscle to produce movement at the joint; ligaments instead connect bone to bone, providing structural stability and limiting excessive or abnormal movement at the joint, rather than being involved in transmitting muscular force."
        },
        {
          label: "b",
          prompt: "Explain why physiotherapy for a ligament injury often focuses heavily on strengthening the surrounding muscles, even though the muscles themselves were not directly injured.",
          marks: 4,
          guidance: "Because ligaments provide passive structural stability to a joint, a damaged or weakened ligament can leave the joint less stable and more vulnerable to further injury; strengthening the surrounding muscles can help provide additional active, muscular support and control around the joint, at least partially compensating for the reduced passive stability normally provided by the ligament, helping protect the joint from further damage while the ligament itself heals."
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
    },
    {
      context: "High-altitude mountaineers climbing above 8000 metres often use supplemental oxygen, since the extremely low atmospheric oxygen partial pressure at these altitudes makes normal gas exchange dangerously inefficient even for well-acclimatised climbers.",
      parts: [
        {
          label: "a",
          prompt: "Outline the structural features of the alveoli that allow efficient gas exchange under normal sea-level conditions.",
          marks: 3,
          guidance: "Alveoli have an extremely large total surface area, thin walls (often just a single cell thick) that minimise the diffusion distance between air and blood, a moist internal lining that allows gases to dissolve before diffusing, and a dense surrounding network of capillaries that maintains a steep concentration gradient by continuously carrying blood past the exchange surface."
        },
        {
          label: "b",
          prompt: "Explain why gas exchange becomes considerably less efficient at extreme high altitude, even though the alveolar structures themselves remain unchanged.",
          marks: 4,
          guidance: "At extreme high altitude, atmospheric pressure (and therefore the partial pressure of oxygen within the air) is much lower than at sea level; since diffusion of oxygen into the blood depends on a favourable partial pressure gradient between the air in the alveoli and the blood in the surrounding capillaries, this much lower atmospheric oxygen partial pressure substantially reduces the gradient driving diffusion, making gas exchange far less efficient even though the alveolar structures supporting exchange remain completely unchanged, explaining why supplemental oxygen becomes necessary at extreme altitudes."
        }
      ]
    },
    {
      context: "Premature babies born several weeks before their due date often require respiratory support, since a key component needed for normal lung function may not yet have developed sufficiently at the time of birth.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of pulmonary surfactant in normal lung function.",
          marks: 2,
          guidance: "Pulmonary surfactant, produced by type II pneumocytes lining the alveoli, reduces surface tension within the alveoli, preventing them from collapsing (especially during exhalation) and making it easier for the lungs to expand during subsequent breaths."
        },
        {
          label: "b",
          prompt: "Explain why premature babies are particularly likely to experience breathing difficulties related to insufficient surfactant production.",
          marks: 4,
          guidance: "Type II pneumocytes typically mature and begin producing adequate surfactant relatively late in gestation, often not until close to full term; a baby born significantly premature may not yet have sufficient surfactant production established, leaving their alveoli prone to collapsing due to high surface tension, which is why premature babies often require respiratory support, and sometimes artificial surfactant treatment, until their own surfactant production catches up."
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
    },
    {
      context: "A patient with a heart valve defect is found to have blood flowing backward into a heart chamber during each contraction, significantly reducing the efficiency with which blood is pumped around the body.",
      parts: [
        {
          label: "a",
          prompt: "Outline the normal function of heart valves in maintaining one-way blood flow through the heart.",
          marks: 2,
          guidance: "Heart valves open to allow blood to flow forward through the heart's chambers at the appropriate point in the cardiac cycle, then close to prevent blood from flowing backward once it has moved into the next chamber or major vessel, maintaining efficient, one-way blood flow through the heart with each heartbeat."
        },
        {
          label: "b",
          prompt: "Explain why a malfunctioning heart valve, allowing backward blood flow, could lead to symptoms such as fatigue and breathlessness in an affected patient.",
          marks: 4,
          guidance: "If blood flows backward through a faulty valve rather than being fully pumped forward, the heart must work harder with each beat to pump the same net volume of blood around the body, since some blood is effectively being recirculated rather than moving forward efficiently; over time, this reduced pumping efficiency can result in less oxygenated blood reaching the body's tissues for a given amount of cardiac effort, contributing to symptoms such as fatigue and breathlessness, particularly during physical exertion when demand for oxygen delivery increases."
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
    },
    {
      context: "Certain local anaesthetics used in minor surgical procedures work by temporarily blocking voltage-gated sodium channels in the sensory neurons of the treated area, preventing pain signals from reaching the brain.",
      parts: [
        {
          label: "a",
          prompt: "Outline how voltage-gated sodium channels normally contribute to the generation of an action potential.",
          marks: 3,
          guidance: "Voltage-gated sodium channels open in response to a sufficiently strong initial stimulus, allowing sodium ions to rapidly enter the neuron and reverse the membrane potential from negative to positive (depolarisation); this rapid, self-reinforcing opening of sodium channels along the membrane is what allows an action potential to be generated and then propagated along the length of the axon."
        },
        {
          label: "b",
          prompt: "Explain why a local anaesthetic blocking sodium channels prevents pain signals from reaching the brain, without permanently damaging the affected neurons.",
          marks: 4,
          guidance: "By reversibly blocking voltage-gated sodium channels in the treated area, a local anaesthetic prevents the depolarisation needed to generate an action potential in the affected sensory neurons, meaning no pain signal can be initiated or transmitted toward the brain from that specific area while the anaesthetic remains bound; because the blockage is temporary and reversible rather than causing any structural damage to the channels or neurons themselves, normal sensation returns once the anaesthetic has been metabolised and cleared from the site."
        }
      ]
    },
    {
      context: "A patient with multiple sclerosis experiences progressively worsening coordination and slower reflexes as the disease damages the myelin sheath surrounding neurons in the brain and spinal cord.",
      parts: [
        {
          label: "a",
          prompt: "Outline the role of myelin in nerve impulse conduction.",
          marks: 2,
          guidance: "Myelin electrically insulates sections of a neuron's axon between exposed gaps called nodes of Ranvier, allowing nerve impulses to jump rapidly from node to node (saltatory conduction) rather than needing to depolarise continuously along the entire length of the membrane, considerably increasing conduction speed."
        },
        {
          label: "b",
          prompt: "Explain how progressive myelin damage could account for the worsening coordination and slower reflexes observed in this patient.",
          marks: 4,
          guidance: "As myelin is progressively damaged, the electrical insulation it normally provides between nodes of Ranvier is compromised, disrupting saltatory conduction and causing nerve impulses to travel more slowly (or fail to travel at all) along the affected neurons; because coordinated movement and rapid reflexes depend on nerve impulses reaching their destination quickly and reliably, this slowed and increasingly unreliable conduction can explain the progressively worsening coordination and slower reflexes seen as the underlying myelin damage advances."
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
    },
    {
      context: "Farmers use a synthetic auxin-based herbicide to selectively kill broadleaf weeds growing among a cereal crop, since the herbicide disrupts normal growth regulation much more severely in broadleaf plants than in grasses.",
      parts: [
        {
          label: "a",
          prompt: "Outline the normal role of auxin in plant growth.",
          marks: 2,
          guidance: "Auxin promotes cell elongation, particularly in shoot tips, and plays a role in coordinating tropic responses such as phototropism (growth toward light) by being redistributed unevenly across a shoot in response to a directional stimulus."
        },
        {
          label: "b",
          prompt: "Suggest why applying an artificially high, uncontrolled concentration of auxin to a susceptible plant could cause its death, based on auxin's normal role in regulated growth.",
          marks: 4,
          guidance: "Because auxin normally promotes cell elongation in a carefully regulated, localised manner, an artificially high and uncontrolled concentration can trigger excessive, disorganised growth throughout the plant rather than the coordinated, directional growth that normally occurs; this uncontrolled growth can disrupt the plant's normal vascular tissue and metabolic function, ultimately causing the plant to die from a kind of catastrophic overgrowth response, rather than from any direct toxic effect unrelated to the hormone's normal growth-promoting role."
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
    },
    {
      context: "Newborn babies are partially protected against certain infections during their first few months of life by antibodies passed from their mother, either across the placenta before birth or through breast milk afterward.",
      parts: [
        {
          label: "a",
          prompt: "Outline the difference between passive and active immunity, using this scenario as an example.",
          marks: 3,
          guidance: "Passive immunity involves receiving ready-made antibodies from an external source, such as a mother's antibodies passed to her baby, providing immediate but temporary protection since the baby's own immune system did not produce these antibodies and no memory cells are formed; active immunity, by contrast, involves an individual's own immune system producing antibodies and memory cells in response to direct exposure to an antigen, providing longer-lasting protection."
        },
        {
          label: "b",
          prompt: "Explain why the protection a newborn baby receives from maternal antibodies is only temporary.",
          marks: 3,
          guidance: "Because the baby did not produce these antibodies itself and has not generated any memory cells in response to the relevant antigens, the maternally-derived antibodies simply circulate for a limited period before being naturally broken down and cleared from the baby's body, without being replenished by any ongoing production; without the baby's own immune system having been actively stimulated to produce further antibodies or memory cells, this initial, borrowed protection fades over the following weeks to months."
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
    },
    {
      context: "Gene therapy researchers sometimes use modified viruses as vectors to deliver a corrected copy of a gene into a patient's cells, exploiting the virus's natural ability to enter host cells and insert genetic material.",
      parts: [
        {
          label: "a",
          prompt: "Outline why a virus's natural mode of infection makes it a useful tool for delivering genetic material into human cells.",
          marks: 3,
          guidance: "Because viruses naturally evolved to inject or introduce their own genetic material into a host cell as part of their normal infection cycle, this same mechanism can be exploited by researchers to deliver a different, therapeutically useful piece of genetic material (such as a corrected gene) into a patient's cells instead of the virus's own genome, using the virus purely as a delivery vehicle rather than allowing it to cause a genuine infection."
        },
        {
          label: "b",
          prompt: "Suggest one safety modification that would need to be made to a virus before it could be used safely as a gene therapy vector.",
          marks: 2,
          guidance: "Suitable modifications include removing or disabling the genes a virus would normally need to replicate itself and cause disease, ensuring it can deliver its genetic cargo into a target cell without being able to reproduce further or spread to other cells, since an uncontrolled, still-infectious virus would pose a serious safety risk if used directly in gene therapy."
        }
      ]
    },
    {
      context: "Virologists studying the evolutionary origin of viruses have proposed several competing hypotheses, since viruses leave no fossil record and their relationship to cellular life remains an active area of scientific investigation.",
      parts: [
        {
          label: "a",
          prompt: "Outline why viruses are generally classified as non-living, despite possessing genetic material.",
          marks: 3,
          guidance: "Although viruses possess genetic material (DNA or RNA), they lack independent metabolism and cannot reproduce without entirely hijacking a host cell's own cellular machinery; because independent metabolism and self-directed reproduction are generally considered defining characteristics of life, most biologists classify viruses as non-living despite this genetic similarity to true living cells."
        },
        {
          label: "b",
          prompt: "Suggest one piece of evidence that could support the hypothesis that viruses evolved from small fragments of cellular genetic material that gained the ability to move between cells.",
          marks: 2,
          guidance: "Suitable evidence includes finding that certain viral genes show strong sequence similarity to genes found within the genomes of their host organisms, suggesting these viral genes may have originated from host cellular DNA at some point in the past, rather than having an entirely independent evolutionary origin unrelated to cellular life."
        }
      ]
    }
  ],

};
