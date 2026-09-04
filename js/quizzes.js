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

  "B4.2": [
    {
      q: "A bacterium can respire aerobically when oxygen is present but switches to fermentation when it isn't. What is it?",
      options: ["An obligate aerobe", "An obligate anaerobe", "A facultative anaerobe", "A chemoautotroph"],
      correct: 2,
      explanation: "Facultative anaerobes can use aerobic respiration when oxygen is available but switch to anaerobic pathways when it's not."
    },
    {
      q: "Euglena can photosynthesise in light but ingest food particles in the dark. What type of nutrition is this?",
      options: ["Holozoic", "Saprotrophic", "Mixotrophic", "Chemoautotrophic"],
      correct: 2,
      explanation: "Mixotrophic nutrition combines autotrophic and heterotrophic strategies in a single organism, as seen in Euglena."
    },
    {
      q: "A species' fundamental niche is larger than its realised niche mainly because the realised niche accounts for...",
      options: ["Abiotic tolerance only", "Competition and predation from other species", "Genetic diversity", "Its taxonomic classification"],
      correct: 1,
      explanation: "The realised niche is the fundamental niche narrowed down by biotic interactions like competition and predation."
    }
  ],

  "A3.2": [
    {
      q: "Why can the traditional taxonomic hierarchy sometimes fail to reflect true evolutionary relationships?",
      options: [
        "It was built on molecular data alone",
        "It was originally based on visible morphology, which can result from convergent evolution rather than shared ancestry",
        "It never considers physical traits",
        "It's identical to cladistics"
      ],
      correct: 1,
      explanation: "Morphological similarity can arise from convergent evolution, so a classification based purely on appearance doesn't always match true ancestry."
    },
    {
      q: "What does a node on a cladogram represent?",
      options: ["A single living species", "A hypothetical common ancestor where lineages diverged", "The root of the whole tree only", "A mutation event"],
      correct: 1,
      explanation: "Each node marks a branch point representing a hypothetical common ancestor shared by the lineages that follow it."
    },
    {
      q: "Carl Woese's rRNA sequence comparisons led to which major classification change?",
      options: ["Merging plants and fungi", "Splitting prokaryotes into two separate domains, Bacteria and Archaea", "Removing viruses from classification", "Creating the genus category"],
      correct: 1,
      explanation: "Woese's rRNA evidence showed methanogens were as genetically distinct from typical bacteria as bacteria are from eukaryotes, leading to the three-domain system."
    }
  ],

  "D4.2": [
    {
      q: "What defines a keystone species?",
      options: [
        "The most numerous species in an ecosystem",
        "A species with a disproportionately large impact on ecosystem structure relative to its abundance",
        "Any apex predator",
        "A species found only in stable ecosystems"
      ],
      correct: 1,
      explanation: "A keystone species has an outsized effect on its community structure despite often being a small fraction of total biomass."
    },
    {
      q: "Why does eutrophication often lead to fish die-offs?",
      options: [
        "Excess nutrients directly poison fish",
        "Algal bloom decomposition consumes dissolved oxygen, raising biochemical oxygen demand",
        "Fertiliser changes water pH instantly",
        "It has no effect on oxygen levels"
      ],
      correct: 1,
      explanation: "When the resulting algal bloom dies and decomposes, bacteria consume large amounts of dissolved oxygen, depleting it for fish."
    },
    {
      q: "In primary succession on bare rock, which organisms typically colonise first?",
      options: ["Large trees", "Lichens and mosses", "Grazing mammals", "Coral"],
      correct: 1,
      explanation: "Pioneer species like lichens and mosses can tolerate harsh, soil-free conditions and begin building organic matter."
    }
  ],

  "D4.3": [
    {
      q: "Melting Arctic sea ice reduces the reflectivity of the planet, causing more solar energy absorption and further warming. This is an example of...",
      options: ["A negative feedback cycle", "A positive feedback cycle", "Carbon sequestration", "Ecological succession"],
      correct: 1,
      explanation: "The initial warming (ice melt) drives further warming (more heat absorption), amplifying the original change — a positive feedback cycle."
    },
    {
      q: "Why doesn't melting sea ice directly raise sea level, unlike melting land ice?",
      options: [
        "Sea ice is much colder than land ice",
        "Sea ice was already floating and displacing its own weight in water",
        "Sea ice contains no water",
        "Sea ice melts into a different substance"
      ],
      correct: 1,
      explanation: "Floating ice already displaces an equivalent volume of water, so its melting doesn't add net volume to the ocean."
    },
    {
      q: "A mismatch between a flowering plant's bloom time and its pollinator's active period, caused by climate change, is an example of a disrupted...",
      options: ["Food web", "Trophic level", "Phenological pattern", "Carbon sink"],
      correct: 2,
      explanation: "Phenology is the study of timing of biological events, and climate change can shift these timings unevenly between interacting species."
    }
  ],

  "C4.2": [
    {
      q: "Roughly what percentage of energy is typically lost between one trophic level and the next?",
      options: ["10%", "50%", "90%", "99%"],
      correct: 2,
      explanation: "About 90% of energy is lost at each trophic transfer, mainly through respiration heat loss and undigested material, leaving roughly 10% passed on."
    },
    {
      q: "What is the key difference between gross and net primary productivity?",
      options: [
        "Net productivity ignores respiration",
        "Net productivity subtracts the producers' own respiration from gross productivity",
        "Gross productivity is always smaller",
        "They are the same measurement"
      ],
      correct: 1,
      explanation: "Net primary productivity is what remains after producers use some of their captured energy for their own respiration."
    },
    {
      q: "The Keeling Curve's regular yearly zig-zag pattern is mainly caused by...",
      options: [
        "Random measurement error",
        "Seasonal changes in photosynthesis in the northern hemisphere",
        "Ocean current shifts",
        "Volcanic eruptions"
      ],
      correct: 1,
      explanation: "CO2 falls during the northern hemisphere's growing season as photosynthesis increases, then rises again over winter."
    }
  ],

  "A4.2": [
    {
      q: "A population with high genetic diversity is generally better able to withstand environmental change because...",
      options: [
        "It has more individuals",
        "At least some individuals are likely to carry alleles suited to the new conditions",
        "Genetic diversity increases reproduction rate directly",
        "It reduces predation"
      ],
      correct: 1,
      explanation: "Greater genetic diversity increases the chance that some individuals already carry traits suited to changing conditions."
    },
    {
      q: "Captive breeding programmes and seed banks are examples of...",
      options: ["In situ conservation", "Ex situ conservation", "Rewilding", "Biomagnification control"],
      correct: 1,
      explanation: "Ex situ conservation preserves species outside their natural habitat, such as in zoos, seed banks, or breeding programmes."
    },
    {
      q: "Why do 'splitters' and 'lumpers' report different numbers of species in the same group of organisms?",
      options: [
        "They study different organisms entirely",
        "Classification involves interpretation, and they draw species boundaries differently from the same evidence",
        "One group uses outdated data",
        "It only applies to extinct species"
      ],
      correct: 1,
      explanation: "Classifying variation into species categories involves a degree of interpretation, so different taxonomists can reach different conclusions from the same data."
    }
  ],

  "D3.3": [
    {
      q: "Why is negative feedback, rather than positive feedback, the basis of homeostatic control?",
      options: ["Negative feedback amplifies changes", "Negative feedback counteracts a deviation, returning a variable to its set point", "Positive feedback is faster", "They are the same mechanism"],
      correct: 1,
      explanation: "Negative feedback counteracts deviations from the set point in either direction, which is exactly what's needed to keep a variable stable."
    },
    {
      q: "What is the key physiological difference between type 1 and type 2 diabetes?",
      options: [
        "Type 1 involves insulin resistance, type 2 involves no insulin production",
        "Type 1 involves little or no insulin production, type 2 involves reduced target-cell sensitivity to insulin",
        "They are the same condition with different names",
        "Type 2 only affects blood pH, not glucose"
      ],
      correct: 1,
      explanation: "Type 1 diabetes results from autoimmune destruction of insulin-producing cells; type 2 results from cells becoming less responsive to insulin, even though it's still produced."
    },
    {
      q: "What happens in the kidney's glomerulus?",
      options: ["Selective reabsorption of glucose", "Ultrafiltration of blood into the Bowman's capsule", "Production of antidiuretic hormone", "Blood clotting"],
      correct: 1,
      explanation: "Blood pressure forces water, ions, glucose, and urea out of glomerular capillaries into the Bowman's capsule, the first step of urine formation."
    }
  ],

  "B3.1": [
    {
      q: "Why does gas exchange become more challenging as an organism increases in size?",
      options: [
        "Larger organisms need less oxygen",
        "Surface area to volume ratio decreases and diffusion distance increases with size",
        "Larger organisms have thicker skin only",
        "Size has no effect on gas exchange"
      ],
      correct: 1,
      explanation: "As size increases, SA:V ratio falls and the distance from the body's centre to its exterior grows, both of which make simple diffusion across the outer surface insufficient."
    },
    {
      q: "What does the Bohr shift describe?",
      options: [
        "A leftward shift in the oxygen dissociation curve with higher CO2",
        "A rightward shift in the oxygen dissociation curve with higher CO2, lowering haemoglobin's oxygen affinity",
        "A change in haemoglobin's structure over evolutionary time",
        "The effect of altitude on lung volume"
      ],
      correct: 1,
      explanation: "Higher CO2 (and lower pH) shifts the curve right, reducing haemoglobin's affinity for oxygen so it releases more oxygen to actively respiring tissue."
    },
    {
      q: "Why does foetal haemoglobin have a higher oxygen affinity than adult haemoglobin?",
      options: [
        "To allow the foetus to draw oxygen from maternal blood that has already released some oxygen",
        "Because foetal blood is warmer",
        "It doesn't — they have identical affinity",
        "To reduce the foetus's oxygen requirements"
      ],
      correct: 0,
      explanation: "The higher affinity lets foetal haemoglobin successfully extract oxygen from maternal blood across the placenta despite its lower oxygen concentration."
    }
  ],

  "B3.2": [
    {
      q: "Why do capillary walls consist of just a single layer of cells?",
      options: ["To save the body energy", "To minimise diffusion distance for exchange with tissue", "Because they carry no blood cells", "To increase blood pressure"],
      correct: 1,
      explanation: "A thin, single-cell-layer wall minimises the diffusion distance between blood and the surrounding tissue fluid, maximising exchange efficiency."
    },
    {
      q: "What is the main functional advantage of double circulation over single circulation?",
      options: [
        "It uses less energy",
        "Blood can be re-pressurised between the pulmonary and systemic circuits, delivering oxygenated blood at higher pressure",
        "It requires a smaller heart",
        "It eliminates the need for valves"
      ],
      correct: 1,
      explanation: "Passing through the heart twice per circuit lets blood be repressurised after the lungs, so it reaches body tissues at a much higher, more effective pressure than in single circulation."
    },
    {
      q: "What force pulls water up through the xylem from roots to leaves?",
      options: ["Active transport by xylem cells", "Root pressure alone", "Tension generated by transpiration, transmitted via cohesion between water molecules", "Gravity"],
      correct: 2,
      explanation: "As water evaporates from leaf mesophyll during transpiration, cohesion between water molecules transmits the resulting tension all the way down the xylem to the roots."
    }
  ],

  "B3.3": [
    {
      q: "During muscle contraction, what actually shortens?",
      options: [
        "The actin filaments themselves",
        "The myosin filaments themselves",
        "Neither filament shortens — the sarcomere shortens as they slide past each other",
        "The titin protein only"
      ],
      correct: 2,
      explanation: "In the sliding filament model, actin and myosin filaments slide past one another without changing length themselves; it's this sliding that shortens the sarcomere."
    },
    {
      q: "Why must muscles work in antagonistic pairs?",
      options: [
        "Because muscle tissue can only actively generate force by contracting, not by extending",
        "To conserve ATP",
        "Because a single muscle cannot attach to bone",
        "It's not necessary — most muscles work alone"
      ],
      correct: 0,
      explanation: "Since muscle can only actively pull (contract), moving a joint in two directions requires two opposing muscles, each pulling for its own direction."
    },
    {
      q: "What defines a motor unit?",
      options: ["A single muscle fibre alone", "A motor neuron together with all the muscle fibres it controls", "A whole muscle group", "A type of joint"],
      correct: 1,
      explanation: "A motor unit is one motor neuron plus every muscle fibre it connects to; all those fibres contract together whenever that neuron fires."
    }
  ],

  "C2.2": [
    {
      q: "What maintains a neuron's resting potential?",
      options: [
        "Passive diffusion of sodium and potassium alone",
        "The sodium-potassium pump, actively transporting 3 Na+ out for every 2 K+ in",
        "Calcium channels",
        "Myelin sheath insulation"
      ],
      correct: 1,
      explanation: "The sodium-potassium pump uses ATP to maintain the resting potential by moving more positive charge out of the cell than it brings in."
    },
    {
      q: "What makes saltatory conduction faster than continuous conduction?",
      options: [
        "The action potential jumps between exposed nodes of Ranvier rather than firing continuously along the whole membrane",
        "Myelinated axons are always shorter",
        "Sodium channels open more slowly in myelinated axons",
        "It isn't actually faster"
      ],
      correct: 0,
      explanation: "Myelin insulates most of the axon, so depolarisation only needs to occur at the nodes, letting the impulse 'jump' between them much faster than continuous propagation."
    },
    {
      q: "What is summation in the context of postsynaptic neurons?",
      options: [
        "The total number of neurons in the brain",
        "The combined effect of multiple synaptic inputs determining whether a postsynaptic neuron fires",
        "The sum of all ion channel types",
        "A method for measuring nerve conduction speed"
      ],
      correct: 1,
      explanation: "A postsynaptic neuron often integrates many simultaneous inputs, and whether it reaches threshold depends on their combined, summed effect."
    }
  ],

  "C2.1": [
    {
      q: "What is quorum sensing?",
      options: [
        "A method bacteria use to detect and respond to their own population density via chemical signalling",
        "A type of antibiotic resistance",
        "The process of cell division in bacteria",
        "A vaccine mechanism"
      ],
      correct: 0,
      explanation: "Bacteria release a signalling molecule continuously; once its concentration is high enough (indicating high population density), the population coordinates a collective response."
    },
    {
      q: "Why do steroid hormones use intracellular receptors rather than transmembrane receptors?",
      options: [
        "They are too large to be made at all",
        "They are small and lipid-soluble enough to diffuse directly across the plasma membrane",
        "They only work on plant cells",
        "They cannot bind to any receptor"
      ],
      correct: 1,
      explanation: "Being lipid-soluble, steroid hormones can cross the membrane directly and bind receptors inside the cell, which then act on DNA to affect transcription."
    },
    {
      q: "What's the difference between paracrine and endocrine signalling?",
      options: [
        "Paracrine signals travel a short distance to nearby cells; endocrine signals travel through the bloodstream to distant cells",
        "They are identical",
        "Endocrine signalling only occurs in plants",
        "Paracrine signalling requires no receptor"
      ],
      correct: 0,
      explanation: "Paracrine signalling acts locally by diffusion to nearby cells; endocrine signalling uses the bloodstream to reach cells throughout the body."
    }
  ],

  "C3.2": [
    {
      q: "What is the key functional difference between innate and adaptive immunity?",
      options: [
        "Innate immunity is specific and slow; adaptive is fast and non-specific",
        "Innate immunity is fast and non-specific; adaptive immunity is specific and builds immunological memory",
        "They are the same system",
        "Only adaptive immunity involves phagocytes"
      ],
      correct: 1,
      explanation: "Innate immunity responds immediately but non-specifically; adaptive immunity is slower to develop but pathogen-specific and retains memory for faster future responses."
    },
    {
      q: "Why are antibiotics ineffective against viral infections?",
      options: [
        "Viruses are too small for antibiotics to reach",
        "Antibiotics target structures/processes specific to bacterial cells, which viruses lack",
        "Viruses are resistant to all chemicals",
        "Antibiotics only work on humans"
      ],
      correct: 1,
      explanation: "Antibiotics target bacteria-specific features like cell walls or bacterial ribosomes; viruses don't have these structures, so antibiotics have no effect on them."
    },
    {
      q: "How does herd immunity protect unvaccinated individuals?",
      options: [
        "It doesn't protect them at all",
        "When enough of the population is immune, the pathogen can't sustain a transmission chain, indirectly protecting non-immune individuals",
        "It only works if 100% of the population is vaccinated",
        "It targets the pathogen directly"
      ],
      correct: 1,
      explanation: "Once enough of a population is immune, a pathogen struggles to find enough susceptible hosts to keep spreading, indirectly protecting those who aren't immune."
    }
  ],

  "A2.3": [
    {
      q: "What happens to a host cell at the end of the lytic cycle?",
      options: ["It becomes dormant", "It typically ruptures (lyses), releasing new virus particles", "It divides normally", "It becomes immune to further infection"],
      correct: 1,
      explanation: "In the lytic cycle, once enough new viruses have been assembled, the host cell usually bursts, releasing them to infect further cells."
    },
    {
      q: "What distinguishes the lysogenic cycle from the lytic cycle?",
      options: [
        "Lysogenic viruses never replicate",
        "In the lysogenic cycle, viral DNA integrates into the host genome and stays dormant as a prophage before eventually switching to the lytic cycle",
        "Lysogenic viruses only infect plants",
        "There is no difference"
      ],
      correct: 1,
      explanation: "In lysogeny, viral genetic material integrates into the host's genome and replicates passively with it, until a trigger causes it to switch to active lytic replication."
    },
    {
      q: "Why do RNA viruses tend to evolve especially rapidly?",
      options: [
        "They have very long generation times",
        "Their replication often lacks proofreading, generation times are short, and viral populations are huge",
        "RNA is a more stable molecule than DNA",
        "They don't evolve rapidly compared to bacteria"
      ],
      correct: 1,
      explanation: "A combination of error-prone replication, rapid generation turnover, and huge population sizes lets mutations accumulate and spread quickly in RNA virus populations."
    }
  ],

  "C3.1": [
    {
      q: "What is an emergent property, in the context of biological organisation?",
      options: [
        "A property visible only under a microscope",
        "A characteristic that arises from the interaction of parts at a lower level, not present in any single part alone",
        "Any newly discovered gene",
        "A property unique to plants"
      ],
      correct: 1,
      explanation: "Emergent properties, like a cheetah's sprinting ability, arise only from the coordinated interaction of multiple systems, not from any one system in isolation."
    },
    {
      q: "Why can a pain reflex arc trigger a response before you consciously feel pain?",
      options: [
        "Pain signals never reach the brain",
        "The reflex arc is coordinated at the spinal cord, bypassing the need to wait for brain processing",
        "Reflexes are slower than conscious responses",
        "Pain receptors are located in the spinal cord itself"
      ],
      correct: 1,
      explanation: "Reflex arcs are wired through the spinal cord directly, allowing a rapid protective response before the signal has even finished reaching and registering in the brain."
    },
    {
      q: "How does uneven light exposure cause a shoot to bend toward light (phototropism)?",
      options: [
        "Auxin is redistributed to the shaded side, causing faster cell elongation there",
        "Auxin is destroyed on the illuminated side",
        "The shoot physically twists using muscle-like tissue",
        "Chlorophyll pulls the shoot toward light directly"
      ],
      correct: 0,
      explanation: "Auxin accumulates on the shaded side, stimulating greater cell elongation there than on the illuminated side, which bends the shoot toward the light."
    }
  ],

  "D2.3": [
    {
      q: "A plant cell is placed in a hypertonic solution. What happens?",
      options: ["It swells and may burst", "Water leaves the cell by osmosis, causing plasmolysis", "Nothing changes", "The cell wall dissolves"],
      correct: 1,
      explanation: "In a hypertonic solution, water leaves the cell by osmosis down its water potential gradient, causing the cell membrane to pull away from the wall (plasmolysis)."
    },
    {
      q: "Why are isotonic solutions used for intravenous fluids in medicine?",
      options: [
        "They are cheaper to produce",
        "They match the solute concentration of blood, preventing red blood cells from swelling or shrinking",
        "They contain no water at all",
        "They speed up clotting"
      ],
      correct: 1,
      explanation: "An isotonic solution has the same water potential as blood plasma, so red blood cells neither gain nor lose water when it's infused."
    },
    {
      q: "Water potential is the sum of which two components?",
      options: ["Osmotic potential and turgor", "Solute potential and pressure potential", "pH and temperature", "Diffusion rate and concentration"],
      correct: 1,
      explanation: "Water potential combines solute potential (always negative or zero, from dissolved solutes) and pressure potential (from physical pressure, e.g. cell wall pushing back)."
    }
  ],

  "B1.1": [
    {
      q: "What reaction joins two monosaccharides together, releasing water?",
      options: ["Hydrolysis", "Condensation", "Oxidation", "Phosphorylation"],
      correct: 1,
      explanation: "Condensation reactions join monomers together while releasing a water molecule; hydrolysis is the reverse, breaking bonds by adding water."
    },
    {
      q: "Why is cellulose an effective structural material in plant cell walls, unlike starch?",
      options: [
        "Cellulose is soluble in water",
        "Cellulose's straight, hydrogen-bonded chains form strong fibres, unlike starch's coiled storage structure",
        "Cellulose is a lipid, not a carbohydrate",
        "Starch and cellulose have identical structures"
      ],
      correct: 1,
      explanation: "Cellulose's unbranched chains held by hydrogen bonds form rigid microfibrils suited to structural support, very different from starch's compact, coiled storage form."
    },
    {
      q: "What structural feature allows phospholipids to spontaneously form a bilayer in water?",
      options: [
        "They are entirely hydrophobic",
        "They are amphipathic, with a hydrophilic head and hydrophobic tails",
        "They are entirely hydrophilic",
        "They contain no fatty acids"
      ],
      correct: 1,
      explanation: "The amphipathic nature of phospholipids drives spontaneous self-assembly into a bilayer, heads facing water, tails shielded from it."
    }
  ],

  "C1.1": [
    {
      q: "How do enzymes increase the rate of a reaction?",
      options: [
        "By increasing the temperature of the reaction",
        "By lowering the activation energy needed for the reaction to proceed",
        "By being consumed in the reaction",
        "By changing the products formed"
      ],
      correct: 1,
      explanation: "Enzymes provide an alternative reaction pathway with lower activation energy, without being used up themselves."
    },
    {
      q: "What typically happens to enzyme activity at temperatures well above its optimum?",
      options: [
        "Activity increases indefinitely",
        "The enzyme denatures, losing its functional shape and activity",
        "Nothing changes",
        "The enzyme becomes more specific"
      ],
      correct: 1,
      explanation: "Excess heat disrupts the bonds maintaining an enzyme's tertiary structure, denaturing it and destroying its active site."
    },
    {
      q: "What's the difference between intracellular and extracellular enzymes?",
      options: [
        "Extracellular enzymes work inside cells only",
        "Intracellular enzymes act within the cell that made them; extracellular enzymes are secreted to act outside the cell",
        "There is no difference",
        "Intracellular enzymes cannot be denatured"
      ],
      correct: 1,
      explanation: "Intracellular enzymes catalyse reactions inside the cell; extracellular enzymes, like digestive enzymes, are secreted to act outside it."
    }
  ],

  "A1.2": [
    {
      q: "What are the three components of a single nucleotide?",
      options: ["A sugar, a phosphate, and a base", "Two sugars and a phosphate", "A protein and two bases", "A lipid and a sugar"],
      correct: 0,
      explanation: "Each nucleotide consists of a pentose sugar, a phosphate group, and a nitrogenous base."
    },
    {
      q: "In DNA base pairing, which bases pair together?",
      options: ["A with G, C with T", "A with T, C with G", "A with C, G with T", "All bases pair with each other equally"],
      correct: 1,
      explanation: "Complementary base pairing follows adenine-thymine and cytosine-guanine, matching purines to pyrimidines with the right hydrogen bonding pattern."
    },
    {
      q: "How does DNA achieve such a high information capacity?",
      options: [
        "Through a huge alphabet of different bases",
        "Through the enormous number of possible sequences from just 4 bases arranged over millions of positions",
        "Through variable sugar types",
        "DNA doesn't actually store much information"
      ],
      correct: 1,
      explanation: "Even with just 4 possible bases at each position, a long sequence has an astronomically large number of possible combinations, giving DNA immense information capacity."
    }
  ],

  "D1.1": [
    {
      q: "What does 'semi-conservative' mean in the context of DNA replication?",
      options: [
        "Only half the DNA is replicated",
        "Each new DNA molecule consists of one original (parental) strand and one newly synthesised strand",
        "DNA replication only happens some of the time",
        "Both strands of the new DNA are newly synthesised"
      ],
      correct: 1,
      explanation: "Semi-conservative replication means each daughter molecule retains one original template strand paired with one newly made strand."
    },
    {
      q: "Why does DNA replication produce a leading strand and a lagging strand?",
      options: [
        "DNA polymerase can only synthesise DNA in the 5' to 3' direction, but the two template strands run in opposite directions",
        "One strand is replicated by a different enzyme entirely",
        "The lagging strand is not actually copied",
        "This only happens in prokaryotes"
      ],
      correct: 0,
      explanation: "Because DNA polymerase only adds nucleotides 5' to 3' and the double helix is antiparallel, one strand is synthesised continuously (leading) and the other in fragments (lagging)."
    },
    {
      q: "What is the main purpose of PCR (polymerase chain reaction)?",
      options: [
        "To separate DNA fragments by size",
        "To amplify a specific DNA sequence into millions of copies",
        "To sequence an entire genome directly",
        "To destroy unwanted DNA"
      ],
      correct: 1,
      explanation: "PCR uses repeated heating/cooling cycles with DNA polymerase to exponentially amplify a targeted DNA sequence."
    }
  ],

  "D2.1": [
    {
      q: "What is the key functional difference between mitosis and meiosis?",
      options: [
        "Mitosis produces genetically varied cells; meiosis produces identical cells",
        "Mitosis produces two genetically identical diploid cells; meiosis produces four genetically varied haploid cells",
        "They are the same process",
        "Meiosis only occurs in plants"
      ],
      correct: 1,
      explanation: "Mitosis is for growth/repair and preserves the chromosome number and genetic content; meiosis halves the chromosome number and generates genetic variation for gametes."
    },
    {
      q: "What is non-disjunction?",
      options: [
        "The normal separation of chromosomes during division",
        "The failure of chromosomes to separate properly during meiosis, leading to gametes with abnormal chromosome numbers",
        "A type of mitotic checkpoint",
        "The joining of two separate cells"
      ],
      correct: 1,
      explanation: "Non-disjunction is an error where chromosomes fail to separate correctly, resulting in gametes with too many or too few chromosomes."
    },
    {
      q: "What role do cyclins play in the cell cycle?",
      options: [
        "They form the spindle fibres",
        "They regulate progression through the cell cycle by activating enzymes at specific checkpoints",
        "They are structural components of chromosomes",
        "They have no functional role"
      ],
      correct: 1,
      explanation: "Cyclins bind to and activate cyclin-dependent kinases, driving the cell through checkpoints and ensuring the cycle progresses in the correct order."
    }
  ],

  "B1.2": [
    {
      q: "What determines the properties of a specific amino acid?",
      options: ["The central carbon atom", "The variable R-group attached to the central carbon", "The amino group only", "The carboxyl group only"],
      correct: 1,
      explanation: "All amino acids share the same core structure; it's the R-group that varies and gives each amino acid its distinct chemical properties."
    },
    {
      q: "How does a protein's primary structure influence its final shape?",
      options: [
        "It has no influence at all",
        "The sequence of amino acids determines the pattern of interactions (bonds) that fold the protein into its specific conformation",
        "Only the first amino acid matters",
        "Primary structure only affects colour"
      ],
      correct: 1,
      explanation: "The specific sequence of amino acids dictates which bonds and interactions form between R-groups, which in turn determines the protein's overall 3D shape."
    },
    {
      q: "Why can extreme pH denature a protein?",
      options: [
        "It has no effect on protein structure",
        "It disrupts the ionic and hydrogen bonds maintaining the protein's folded structure",
        "It only affects the primary structure",
        "It changes the amino acid sequence directly"
      ],
      correct: 1,
      explanation: "Extreme pH alters the charge on R-groups, disrupting the bonds (ionic, hydrogen) that hold the protein's specific 3D shape together."
    }
  ],

  "A2.1": [
    {
      q: "Why is the origin of the first cell difficult to study directly?",
      options: [
        "It happened too recently to leave evidence",
        "It occurred billions of years ago and left no direct fossil evidence of the process itself",
        "Scientists aren't interested in the question",
        "Cells cannot be studied using modern techniques"
      ],
      correct: 1,
      explanation: "The origin of life happened around 3.5-4 billion years ago, and the transitional stages left no fossils, so it must be studied indirectly through modern chemistry and modelling."
    },
    {
      q: "Why is RNA hypothesised to have been the first genetic material rather than DNA?",
      options: [
        "RNA cannot store information",
        "RNA can both store genetic information and catalyse reactions, potentially performing both roles before DNA and proteins evolved separately",
        "DNA existed before RNA",
        "RNA is more stable than DNA"
      ],
      correct: 1,
      explanation: "RNA's dual capability, as both an information carrier and a catalyst (ribozyme), makes it a plausible single molecule for early self-replicating systems."
    },
    {
      q: "What evidence points to hydrothermal vents as a possible location for the origin of life?",
      options: [
        "They provide a stable, nutrient-rich, chemically active environment relevant to the last universal common ancestor",
        "They are the only place on Earth with water",
        "They are too hot for any chemistry to occur",
        "They only formed very recently"
      ],
      correct: 0,
      explanation: "Hydrothermal vents provide chemical gradients, minerals, and energy sources that could have supported the chemistry needed for the earliest cells."
    }
  ],

  "D1.2": [
    {
      q: "What is transcription?",
      options: [
        "The conversion of mRNA into a polypeptide",
        "The copying of a gene's DNA sequence into a complementary mRNA molecule",
        "The replication of an entire chromosome",
        "The breakdown of proteins"
      ],
      correct: 1,
      explanation: "Transcription is the synthesis of mRNA using one strand of DNA as a template."
    },
    {
      q: "Why is the genetic code described as 'degenerate'?",
      options: [
        "It only codes for a few amino acids",
        "Most amino acids are specified by more than one codon",
        "It changes between species",
        "It cannot be read accurately"
      ],
      correct: 1,
      explanation: "Since there are 64 possible codons but only 20 amino acids, most amino acids have multiple codons that code for them — this redundancy is called degeneracy."
    },
    {
      q: "What is the role of tRNA in translation?",
      options: [
        "It forms the ribosome structure",
        "It carries specific amino acids to the ribosome and matches them to the mRNA codon via its anticodon",
        "It directly copies DNA",
        "It has no role in translation"
      ],
      correct: 1,
      explanation: "Each tRNA carries a specific amino acid and has an anticodon that base-pairs with the corresponding mRNA codon, ensuring the correct amino acid sequence."
    }
  ],

  "A2.2": [
    {
      q: "What structural features are common to all cells?",
      options: [
        "A nucleus, mitochondria, and chloroplasts",
        "A plasma membrane, cytoplasm, ribosomes, and DNA as genetic material",
        "A cell wall and large central vacuole",
        "Multiple nuclei"
      ],
      correct: 1,
      explanation: "Despite huge diversity, all cells share a plasma membrane, cytoplasm, ribosomes, and DNA — these are the universal features of cellular life."
    },
    {
      q: "What is the key structural difference between prokaryotic and eukaryotic cells?",
      options: [
        "Prokaryotes have a membrane-bound nucleus; eukaryotes don't",
        "Eukaryotes have a membrane-bound nucleus and membrane-bound organelles; prokaryotes lack both",
        "There is no meaningful difference",
        "Prokaryotes are always larger than eukaryotic cells"
      ],
      correct: 1,
      explanation: "The defining distinction is the presence (eukaryotes) or absence (prokaryotes) of a membrane-bound nucleus and other membrane-bound organelles."
    },
    {
      q: "What does the endosymbiotic theory propose about the origin of mitochondria and chloroplasts?",
      options: [
        "They evolved from parts of the plasma membrane",
        "They originated as free-living prokaryotes that were engulfed by a host cell and became permanent internal symbionts",
        "They are not related to any prokaryotic ancestor",
        "They formed spontaneously from RNA"
      ],
      correct: 1,
      explanation: "Endosymbiotic theory holds that mitochondria and chloroplasts descend from free-living bacteria engulfed by an ancestral host cell, evidenced by their own DNA and double membranes."
    }
  ],

  "B2.2": [
    {
      q: "What is an organelle?",
      options: [
        "Any structure inside a cell, membrane-bound or not",
        "A specialised, membrane-bound structure within a eukaryotic cell that performs a specific function",
        "Only the nucleus",
        "A type of protein"
      ],
      correct: 1,
      explanation: "Organelles are membrane-bound compartments within eukaryotic cells, each carrying out a distinct specialised function."
    },
    {
      q: "What is the main advantage of compartmentalising the cytoplasm into organelles?",
      options: [
        "It makes the cell larger",
        "It allows incompatible or specialised chemical processes to occur simultaneously in separate, controlled environments",
        "It has no functional advantage",
        "It reduces the number of enzymes needed"
      ],
      correct: 1,
      explanation: "Compartmentalisation lets a cell maintain different chemical conditions in different organelles, allowing processes that might otherwise interfere with each other to occur simultaneously."
    },
    {
      q: "Why does the mitochondrion have a highly folded inner membrane (cristae)?",
      options: [
        "To reduce its surface area",
        "To increase surface area for the proteins involved in ATP production",
        "To store DNA",
        "It has no functional significance"
      ],
      correct: 1,
      explanation: "Cristae dramatically increase the inner membrane's surface area, accommodating more of the electron transport chain proteins involved in ATP synthesis."
    }
  ],

  "C1.2": [
    {
      q: "Why is ATP described as the 'energy currency' of the cell?",
      options: [
        "It stores energy for years at a time",
        "It's a small, universal molecule that's readily made, used, and regenerated to transfer energy for immediate cellular use",
        "It's the only energy molecule in cells",
        "It cannot be broken down"
      ],
      correct: 1,
      explanation: "ATP is rapidly made and broken down to shuttle usable energy to wherever a cell needs it, rather than being a long-term energy store."
    },
    {
      q: "What is the key difference between aerobic and anaerobic respiration in humans?",
      options: [
        "Anaerobic respiration produces far more ATP per glucose molecule",
        "Aerobic respiration requires oxygen and yields much more ATP; anaerobic respiration doesn't require oxygen but yields far less ATP",
        "They produce identical amounts of ATP",
        "Aerobic respiration doesn't involve glucose"
      ],
      correct: 1,
      explanation: "Aerobic respiration, using oxygen, releases far more energy per glucose molecule than anaerobic respiration (fermentation), which yields much less ATP."
    },
    {
      q: "What is the role of oxygen in aerobic respiration?",
      options: [
        "It's a raw material for glycolysis",
        "It acts as the final electron acceptor at the end of the electron transport chain",
        "It has no specific role",
        "It directly produces glucose"
      ],
      correct: 1,
      explanation: "Oxygen accepts electrons at the end of the electron transport chain, combining with hydrogen ions to form water, which keeps the chain running."
    }
  ],

  "C1.3": [
    {
      q: "What is the overall role of light-dependent reactions in photosynthesis?",
      options: [
        "To fix carbon dioxide into glucose",
        "To capture light energy and use it to produce ATP and reduced NADP",
        "To release oxygen from glucose",
        "To break down starch"
      ],
      correct: 1,
      explanation: "The light-dependent reactions capture light energy, split water (releasing oxygen), and generate ATP and reduced NADP for use in the Calvin cycle."
    },
    {
      q: "What enzyme catalyses carbon fixation in the Calvin cycle?",
      options: ["ATP synthase", "Rubisco", "DNA polymerase", "Catalase"],
      correct: 1,
      explanation: "Rubisco catalyses the combination of CO2 with RuBP, the first step of carbon fixation in the Calvin cycle."
    },
    {
      q: "Why might light intensity, CO2 concentration, or temperature each act as a limiting factor for photosynthesis?",
      options: [
        "They never actually limit photosynthesis",
        "Whichever of these factors is in shortest supply relative to the plant's needs will cap the overall rate of photosynthesis",
        "Only light intensity ever matters",
        "Photosynthesis doesn't depend on any external factors"
      ],
      correct: 1,
      explanation: "The rate of photosynthesis is capped by whichever necessary factor (light, CO2, or temperature) is furthest below what's needed — the limiting factor principle."
    }
  ],

};
