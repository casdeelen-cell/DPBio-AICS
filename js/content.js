/*
  content.js
  ----------
  This is where your actual notes live. One entry per topic code.
  Each topic is an array of sections, and each section is one syllabus
  statement with your notes on it.

  Format for a section:
  {
    label: "1",              // short label, usually a number
    heading: "Short heading",
    level: "SL",              // "SL" or "HL" - shows a small badge, optional
    text: "Notes go here. Use **word** to bold a key term. Use \n\n between paragraphs.",
    image: "https://...",     // optional
    imageCaption: "...",      // optional, small caption under the image
    tip: { label: "Exam tip", text: "..." }   // optional highlighted side note
  }

  If a bolded **word** matches a term in wordbank.js for this topic
  (case-insensitive), it automatically gets a dotted underline and a
  hover/tap tooltip with the definition, no extra work needed.

  Topics with no entry here yet just show "notes coming soon" on the
  site, so it's safe to leave them out until you get to them.
*/

const CONTENT = {

  "A1.1": [
    {
      label: "A1.1.1",
      heading: "Water as a polar molecule",
      level: "SL",
      text: "Water's biological importance starts with its shape and its chemistry. A water molecule is bent at an angle of roughly 104.5 degrees, with two hydrogen atoms covalently bonded to a central oxygen. Oxygen has a higher **electronegativity** than hydrogen, so it pulls the shared electrons in each O-H bond closer to itself. This produces an uneven distribution of charge across the molecule: the oxygen end carries a partial negative charge and each hydrogen carries a partial positive charge.\n\nA molecule with this kind of unequal charge distribution is described as a **polar molecule**. It is worth being precise with terminology here: water is not ionic and does not carry a full charge, the polarity arises purely from unequal sharing of electrons within covalent bonds. Almost every property of water covered in this topic, its role as a solvent, its cohesion, its thermal behaviour, traces back to this single structural feature.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hydrogen-bonding-in-water-2D.svg",
      imageCaption: "Hydrogen bonding between adjacent water molecules, arising from the polarity of each O-H bond.",
      tip: { label: "Exam tip", text: "Examiners distinguish between a covalent bond (within a water molecule, between O and H) and a hydrogen bond (between separate water molecules). Mixing these up is one of the most common errors on this topic." }
    },
    {
      label: "A1.1.2",
      heading: "Hydrogen bonding",
      level: "SL",
      text: "Because each water molecule carries both a positive and a negative region, molecules can attract one another: the positive hydrogen of one molecule is drawn to the negative oxygen of a neighbouring molecule. This intermolecular attraction is called a **hydrogen bond**.\n\nA hydrogen bond is considerably weaker than a covalent bond, roughly one-twentieth of the strength, and each individual bond is short-lived, breaking and reforming on a picosecond timescale. What matters biologically is the cumulative effect: at any given moment, a water molecule in liquid water is hydrogen bonded to an average of about 3.4 other molecules, and this constant, dynamic network of bonds is what gives bulk water its unusual physical properties compared to similarly sized molecules."
    },
    {
      label: "A1.1.3",
      heading: "Cohesion and its consequences",
      level: "SL",
      text: "**Cohesion** refers to the mutual attraction between molecules of the same substance. In water, cohesion arises directly from hydrogen bonding, and it has several consequences that are directly relevant to living systems.\n\nThe clearest example is water transport in the xylem of vascular plants. As water evaporates from the mesophyll cells of a leaf during **transpiration**, it is replaced by water pulled up from the xylem below. Because the water molecules in the xylem are hydrogen bonded to one another, they behave as a continuous, unbroken column, so the loss of water at the top of the plant creates a pull that is transmitted all the way down to the roots. This is the basis of the cohesion-tension theory of water transport, and it explains how trees move water to heights of over 100 metres without any active pumping mechanism.\n\nCohesion is also responsible for **surface tension**, the tendency of a water surface to behave like a stretched elastic sheet. This is strong enough to support the weight of small organisms, such as pond skaters, that would otherwise sink.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Water_strider.jpg",
      imageCaption: "A water strider supported by surface tension, a direct consequence of cohesion between water molecules."
    },
    {
      label: "A1.1.4",
      heading: "Adhesion",
      level: "SL",
      text: "**Adhesion** is the attraction between water molecules and a different polar or charged surface, rather than between water molecules themselves. Inside a xylem vessel, water adheres to the cellulose and lignin of the vessel walls, which helps counteract the downward pull of gravity on the water column.\n\nCohesion and adhesion act together to produce **capillary action**, the tendency of water to rise up narrow tubes. This is a measurable contributor to water movement in short plants and in the initial uptake of water from soil into root hairs, though for tall trees, transpiration pull dominates.",
      tip: { label: "Common mistake", text: "Cohesion is water sticking to water. Adhesion is water sticking to something else. Students frequently swap these two definitions under exam pressure, so it helps to have a fixed example memorised for each." }
    },
    {
      label: "A1.1.5",
      heading: "Water as a solvent",
      level: "SL",
      text: "Polar and charged (ionic) substances tend to dissolve readily in water, because individual water molecules can surround a solute particle, with their negative oxygen oriented towards a positive ion or their positive hydrogens oriented towards a negative ion. This process, called hydration, effectively pulls the substance apart and disperses it through the solution.\n\nThis solvent property makes water the medium in which the great majority of metabolic reactions take place; enzymes, substrates and products are almost always dissolved in the aqueous cytoplasm. It is equally why blood plasma can transport glucose, amino acids, and ions around the body, and why the phloem of a plant can carry dissolved sucrose between source and sink tissues.\n\nNon-polar substances, such as lipids, do not dissolve in water. This is not a side note, it is the entire reason that lipid bilayers can function as membranes: a barrier that is impermeable to most polar and charged solutes is exactly what a cell needs to control its internal environment (see B2.1)."
    },
    {
      label: "A1.1.6",
      heading: "Thermal properties and aquatic habitats",
      level: "HL",
      text: "The extensive hydrogen bonding in water also accounts for its thermal behaviour, which is relevant to the way organisms experience aquatic and terrestrial environments differently.\n\nWater has a high **specific heat capacity**: a relatively large amount of energy is required to raise its temperature, because much of the input energy goes into breaking hydrogen bonds rather than increasing the kinetic energy of the molecules. Large bodies of water therefore change temperature slowly, buffering aquatic organisms against the rapid daily and seasonal temperature swings that terrestrial organisms must cope with.\n\nWater also has a high latent heat of vaporisation, meaning evaporation removes a large amount of energy from the remaining liquid. This is the physical basis of cooling by sweating and by transpiration. Finally, hydrogen bonding causes ice to be less dense than liquid water, since the bonds hold molecules in a more open lattice arrangement when frozen. Ice therefore floats, insulating the liquid water beneath it and allowing aquatic life to persist under a frozen surface rather than the entire body of water freezing solid from the bottom up."
    },
    {
      label: "A1.1.7",
      heading: "Extraplanetary origin of water on Earth",
      level: "HL",
      text: "Earth's water is thought to have originated at least partly from beyond the planet itself, delivered by impacts from water-rich asteroids and comets during the early, heavily-bombarded history of the Solar System. That water was only retained once Earth's surface had cooled enough for water vapour to condense into liquid rather than escape back into space, and once gravity was sufficient to hold an atmosphere capable of maintaining the pressure and temperature conditions liquid water needs to persist."
    },
    {
      label: "A1.1.8",
      heading: "Water and the search for extraterrestrial life",
      level: "HL",
      text: "Because every known living system depends on liquid water, the search for life elsewhere in the universe is guided heavily by the search for water, astrobiologists describe this as a 'follow the water' strategy. This is also the reasoning behind the concept of a habitable zone (sometimes called the Goldilocks zone), the range of distances from a star within which a planet's temperature would allow water to exist as a liquid rather than permanently freezing or boiling away, used as a first filter when assessing whether a distant planet could plausibly support life."
    }
  ],

  "B2.1": [
    {
      label: "1",
      heading: "The phospholipid bilayer",
      level: "SL",
      text: "Every biological membrane is built around a **phospholipid** bilayer, two layers of phospholipid molecules arranged tail to tail. A phospholipid has a polar, hydrophilic phosphate head and two non-polar, hydrophobic fatty acid tails. When phospholipids are placed in an aqueous environment, they spontaneously arrange themselves so the polar heads face outward, in contact with the water on either side of the membrane, and the non-polar tails cluster together, shielded from water in the interior of the bilayer.\n\nThis arrangement is thermodynamically favourable and requires no cellular machinery to assemble, it is a direct consequence of the amphipathic structure of phospholipids and their interaction with water. The result is a continuous, self-sealing barrier that separates the inside of a cell (or organelle) from its surroundings.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/0302_Phospholipid_Bilayer.jpg",
      imageCaption: "A phospholipid bilayer: polar heads face the aqueous environment on both sides, non-polar tails face inward."
    },
    {
      label: "2",
      heading: "The fluid mosaic model",
      level: "SL",
      text: "The **fluid mosaic model**, proposed by Singer and Nicolson in 1972, describes the arrangement and behaviour of membrane components. It is described as a mosaic because proteins, cholesterol, and glycolipids are embedded at different points and depths throughout the bilayer, producing a patchy, varied composition rather than a uniform sheet. It is described as fluid because individual phospholipids and proteins are not fixed in place, they can diffuse laterally within their own layer, giving the membrane flexibility and self-repairing properties.\n\n**Integral proteins** are embedded within the bilayer, often spanning it completely, while **peripheral proteins** are attached more loosely to just one face of the membrane. Membrane proteins carry out much of the functional work of a membrane, including transport, enzymatic catalysis, receptor binding for cell signalling, and cell-to-cell recognition."
    },
    {
      label: "3",
      heading: "Simple diffusion and osmosis",
      level: "SL",
      text: "Small, non-polar molecules, notably oxygen and carbon dioxide, can cross the hydrophobic interior of the bilayer directly. This is **simple diffusion**: net movement from a region of higher concentration to a region of lower concentration, requiring no protein and no energy input, since it is driven entirely by the **concentration gradient**.\n\n**Osmosis** is the diffusion of water specifically, across a partially permeable membrane, from a region of lower solute concentration to a region of higher solute concentration. Although water is a polar molecule, small amounts can cross the bilayer directly, and this is substantially assisted in most cells by aquaporins, channel proteins specialised for water transport."
    },
    {
      label: "4",
      heading: "Facilitated diffusion",
      level: "SL",
      text: "Polar molecules and ions cannot cross the non-polar core of the bilayer at a biologically useful rate, so their movement depends on membrane proteins. **Facilitated diffusion** uses two classes of protein: channel proteins, which form a hydrophilic pore that allows specific ions or molecules through, and carrier proteins, which bind their target molecule and undergo a conformational change to move it across the membrane.\n\nCrucially, facilitated diffusion is still a form of **passive transport**: movement occurs down the concentration gradient, and no ATP is consumed, even though a protein is required to make the crossing possible."
    },
    {
      label: "5",
      heading: "Active transport",
      level: "SL",
      text: "When a substance needs to move against its concentration gradient, from a region of lower to higher concentration, energy input is required. This is **active transport**, and it is carried out by pump proteins that use ATP directly to drive a conformational change.\n\nThe sodium-potassium pump is the standard example: for each cycle, it moves three sodium ions out of the cell and two potassium ions in, both against their respective gradients, using the energy released from hydrolysing one molecule of ATP. This pump is essential for maintaining the resting membrane potential in neurons and for driving secondary active transport of other solutes, such as glucose reabsorption in the kidney nephron."
    },
    {
      label: "6",
      heading: "Bulk transport: endocytosis and exocytosis",
      level: "HL",
      text: "Some material is too large to cross a membrane through an individual protein, and instead requires bulk transport using vesicles. In **endocytosis**, a region of the membrane invaginates around extracellular material and pinches off to form an intracellular vesicle. In **exocytosis**, an intracellular vesicle moves to the membrane and fuses with it, releasing its contents to the exterior of the cell.\n\nBoth processes require energy and are essential for handling material too large for channel or carrier proteins, for example the secretion of protein hormones or neurotransmitters, or the uptake of large extracellular particles by phagocytic immune cells.",
      tip: { label: "Exam tip", text: "When asked to compare passive and active transport, always state explicitly whether ATP is used and whether movement is with or against the concentration gradient. Vague answers that just say 'it needs energy' without naming ATP tend to lose marks." }
    }
  ],

  "D3.2": [
    {
      label: "1",
      heading: "Genes, alleles, and loci",
      level: "SL",
      text: "Every gene occupies a fixed position on a chromosome, called its **locus**. Because diploid organisms inherit one copy of each chromosome from each parent, they carry two copies of every gene, sitting at the same locus on a pair of homologous chromosomes. Different versions of a gene, arising historically from mutation, are called **alleles**.\n\nAn individual's **genotype** is the specific combination of alleles it carries for a gene, while its **phenotype** is the observable trait that results, which may also be influenced by the environment. If the two alleles at a locus are identical, the organism is described as **homozygous**; if they differ, it is **heterozygous**."
    },
    {
      label: "2",
      heading: "Dominant and recessive alleles",
      level: "SL",
      text: "A **dominant allele** produces its associated phenotype whenever it is present in the genotype, whether the organism is homozygous or heterozygous for it. A **recessive allele** only produces its phenotype when no dominant allele is present, that is, only in the homozygous recessive genotype.\n\nBy convention, a dominant allele is represented with an uppercase letter and its recessive counterpart with the corresponding lowercase letter, for example A and a."
    },
    {
      label: "3",
      heading: "Monohybrid crosses and Punnett grids",
      level: "SL",
      text: "A **monohybrid cross** tracks the inheritance of a single gene between two parents. The possible gametes each parent can produce, and the possible genotype combinations in the offspring, can be predicted systematically using a Punnett grid.\n\nCrossing two heterozygotes for a gene with simple dominant/recessive inheritance produces the classic 3:1 phenotypic ratio in the offspring, three individuals showing the dominant phenotype for every one showing the recessive phenotype. This ratio is a probability, describing the expected outcome across a large number of offspring, not a guaranteed outcome for any small sample.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Punnett_Square.svg",
      imageCaption: "A Punnett grid for a monohybrid cross between two heterozygotes, giving the expected 3:1 phenotypic ratio."
    },
    {
      label: "4",
      heading: "Test crosses",
      level: "SL",
      text: "An organism showing a dominant phenotype could be either homozygous dominant or heterozygous, its genotype cannot be determined from appearance alone. A **test cross** resolves this ambiguity: the individual of unknown genotype is crossed with a homozygous recessive individual.\n\nIf any offspring display the recessive phenotype, the unknown parent must have carried a recessive allele and was therefore heterozygous, since a homozygous dominant parent could never pass on a recessive allele to any offspring."
    },
    {
      label: "5",
      heading: "Codominance and multiple alleles",
      level: "SL",
      text: "Not all genes follow simple dominant/recessive inheritance. In **codominance**, both alleles present in a heterozygote are fully and simultaneously expressed in the phenotype, rather than one masking the other.\n\nThe ABO blood group system illustrates both codominance and multiple alleles at once. Three alleles exist for this gene: IA and IB, which are codominant with one another, and i, which is recessive to both. This produces four phenotypes (A, B, AB and O) from six possible genotypes, since both IAIA and IAi produce blood type A, and both IBIB and IBi produce blood type B.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/ABO_Blood_Group_Phenotypes.jpg",
      imageCaption: "The four ABO blood group phenotypes and the genotypes that produce each of them."
    },
    {
      label: "6",
      heading: "Sex linkage",
      level: "HL",
      text: "Genes located on the X chromosome show a distinct inheritance pattern because of the difference between the sex chromosomes: females carry two X chromosomes, while males carry one X and one much smaller Y chromosome, which carries very few genes.\n\nAs a consequence, a male needs only a single copy of a recessive X-linked allele to display the associated recessive phenotype, since there is no second X chromosome present to carry a masking dominant allele. This explains why conditions such as red-green colour blindness and haemophilia occur substantially more often in males than in females, and why they characteristically appear to skip a generation when carried, unexpressed, by a heterozygous ('carrier') female.",
      tip: { label: "Exam tip", text: "For sex-linked crosses, always write the alleles as superscripts on the X chromosome itself, not as free-floating letters. This notation is expected at DP level and makes it far easier to track inheritance correctly." }
    }
  ],

  "C4.1": [
    {
      label: "1",
      heading: "Populations and carrying capacity",
      level: "SL",
      text: "A **population** is defined as all the organisms of one species living in the same area at the same time, capable of interbreeding. Populations do not grow indefinitely, they are constrained by the **carrying capacity** of their environment, the maximum population size that the available resources (food, space, water, shelter) can sustain over the long term.\n\nWhen a population is small relative to the available resources, growth is approximately exponential. As the population approaches carrying capacity, growth slows as resources become limiting, producing a **sigmoid growth curve**, an S-shaped pattern of rapid initial growth followed by a plateau.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Logistic_Carrying_Capacity.svg",
      imageCaption: "A sigmoid (S-shaped) population growth curve levelling off at the carrying capacity, K."
    },
    {
      label: "2",
      heading: "Limiting factors",
      level: "SL",
      text: "Factors that restrict population growth are called **limiting factors**, and they fall into two categories. Density-dependent factors, such as food availability, disease transmission, and predation, have a proportionally larger effect as population density increases, and are what actually produce the levelling-off seen in a sigmoid growth curve. Density-independent factors, such as a sudden extreme weather event, affect a population regardless of how many individuals are present."
    },
    {
      label: "3",
      heading: "Interspecific relationships",
      level: "SL",
      text: "Species within a community interact in several recurring, classifiable ways.\n\nIn **competition**, two species require the same limited resource, and both are disadvantaged by the interaction. In predation, one species (the predator) consumes another (the prey), benefiting at the prey's expense. In **mutualism**, both interacting species benefit, as in the relationship between a flowering plant and its pollinator. In parasitism, one species benefits at the sustained expense of a host, typically without killing it outright, distinguishing it from predation."
    },
    {
      label: "4",
      heading: "Communities and ecological niches",
      level: "SL",
      text: "A **community** comprises all the populations of different species that live and interact within a given area. Within a community, each species occupies a **niche**, its functional role, encompassing its resource use, habitat, and interactions with other species.\n\nThe competitive exclusion principle states that two species cannot occupy an identical niche indefinitely within the same community, since they would be in direct, total competition for every resource, and one would eventually be excluded. This principle explains why closely related species coexisting in the same habitat typically show niche differentiation, partitioning resources in slightly different ways rather than competing directly."
    }
  ],

  "D2.3": [
    {
      label: "D2.3.1",
      heading: "Solvation: water as the solvent",
      level: "SL",
      text: "**Solvation** is the interaction between water molecules and the particles of a dissolved solute, water molecules cluster around a solute particle, oriented by their own polarity, and effectively pull it into solution. This is why water is described as the 'universal solvent': its polarity lets it dissolve a very wide range of polar and charged substances, from salts to sugars, and is the basis for water's role as the medium for essentially all metabolic reactions."
    },
    {
      label: "D2.3.2 / D2.3.3",
      heading: "Osmosis: water movement between solutions",
      level: "SL",
      text: "Water moves passively from a region of lower solute concentration to a region of higher solute concentration across a partially permeable membrane, a special case of diffusion called **osmosis**. At the level of a whole cell, this means water will move into or out of a cell depending on how the solute concentration inside the cell compares to the solute concentration of the surrounding solution."
    },
    {
      label: "D2.3.4-6",
      heading: "How cells respond to hypotonic and hypertonic solutions",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Turgor_pressure_on_plant_cells_diagram.svg",
      imageCaption: "A plant cell in hypotonic, isotonic, and hypertonic solutions, showing turgid, normal, and plasmolysed states.",
      text: "A solution with a lower solute concentration than the cell is **hypotonic** to it, water moves in. A solution with a higher solute concentration is **hypertonic**, water moves out. A solution with the same solute concentration is isotonic, there is no net water movement.\n\nAn animal cell, having no cell wall, will swell and can burst in a hypotonic solution, and will shrink in a hypertonic one. A plant cell behaves differently because its cell wall resists expansion: in a hypotonic solution it swells only until **turgor pressure** builds up enough to stop further net water entry, becoming turgid rather than bursting, while in a hypertonic solution it undergoes **plasmolysis**, the protoplast shrinking away from the wall entirely."
    },
    {
      label: "D2.3.7",
      heading: "Medical applications of isotonic solutions",
      level: "SL",
      text: "Solutions used in medicine are generally kept isotonic to the cells they will contact, specifically to avoid the swelling or shrinking that a hypotonic or hypertonic solution would cause. Intravenous fluids given to patients are isotonic to blood plasma so red blood cells are not damaged, and organs prepared for transplant are bathed in an isotonic solution to keep their cells stable and undamaged during storage and transport."
    },
    {
      label: "D2.3.8 / D2.3.9",
      heading: "Water potential",
      level: "HL",
      text: "**Water potential** (&Psi;) is a more precise way of describing water's tendency to move, defined as the potential energy of water per unit volume. Its absolute value cannot be measured directly, so it is expressed relative to pure water at atmospheric pressure and 20&deg;C, which is assigned a water potential of zero, meaning every solution has a water potential at or below zero. Water always moves from a region of higher (less negative) water potential to a region of lower (more negative) water potential, this is simply a more quantitative restatement of the same osmosis rule covered at SL, but framed in terms of potential energy rather than concentration alone."
    },
    {
      label: "D2.3.10",
      heading: "Solute potential and pressure potential",
      level: "HL",
      text: "In a walled plant cell, water potential has two contributing components: **solute potential** (&Psi;s), which is always zero or negative and becomes more negative with more dissolved solute, and **pressure potential** (&Psi;p), the physical pressure of the protoplast pushing against the cell wall, usually positive in a turgid cell. The two combine as &Psi;w = &Psi;s + &Psi;p, which makes it possible to calculate any one of the three values given the other two, a common exam calculation."
    }
  ],

  "B1.1": [
    {
      label: "B1.1.1",
      heading: "Carbon's chemical versatility",
      level: "SL",
      text: "Carbon can form four stable covalent bonds, including with other carbon atoms, which lets it build long chains, branches, and rings. This single property is the reason carbon-based molecules can be so structurally diverse, and it is why carbon, rather than any other element, forms the backbone of every major class of biological macromolecule: carbohydrates, lipids, proteins, and nucleic acids."
    },
    {
      label: "B1.1.2 / B1.1.3",
      heading: "Condensation and hydrolysis",
      level: "SL",
      text: "Monomers are joined into a polymer through a **condensation reaction**, which forms a new covalent bond between two monomers and releases a water molecule as a by-product. The reverse process, **hydrolysis**, breaks that bond by adding a water molecule back in, splitting the polymer apart into its monomers again.\n\nThis same condensation/hydrolysis pattern builds and breaks down every major type of macromolecule, a **glycosidic bond** links monosaccharides, a peptide bond links amino acids (see B1.2), and a phosphodiester bond links nucleotides (see A1.2), the chemistry is the same, only the monomer changes."
    },
    {
      label: "B1.1.4",
      heading: "Form and function of monosaccharides",
      level: "SL",
      text: "A **monosaccharide** is a single sugar unit, such as glucose, fructose, or galactose, sharing the general formula (CH2O)n. In solution, glucose exists mainly as a six-membered ring, and that ring can close in two slightly different orientations depending on which side the hydroxyl group on carbon 1 ends up: **alpha-glucose** or **beta-glucose**. This small structural difference looks trivial, but it has major consequences: it is the entire reason starch and glycogen (built from alpha-glucose) end up as compact, coiled or branched molecules, while cellulose (built from beta-glucose) ends up as straight, rigid chains, see B1.1.5 and B1.1.6."
    },
    {
      label: "B1.1.5",
      heading: "Starch and glycogen as energy storage polysaccharides",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/219_Three_Important_Polysaccharides-01.jpg",
      imageCaption: "Amylose, amylopectin, glycogen, and cellulose, showing how alpha and beta glucose linkages give each a different shape.",
      text: "Starch (in plants) and glycogen (in animals) are both **polysaccharides** built from alpha-glucose monomers joined by 1-4 glycosidic bonds, which naturally makes the chain curl into a coil rather than lying flat. Starch is a mixture of amylose (an unbranched, tightly coiled chain) and amylopectin (branched, with occasional 1-6 glycosidic bonds roughly every 20-25 glucose units). Glycogen follows the same basic pattern as amylopectin but is far more heavily branched.\n\nThat branching is not incidental, more branch points mean more free ends, and each end is a place where glucose can be added or removed, so a highly branched molecule like glycogen can be built up or broken down for energy much faster than a less-branched one, exactly what an animal's fluctuating energy demands require."
    },
    {
      label: "B1.1.6",
      heading: "Cellulose: structure related to function",
      level: "SL",
      text: "Cellulose is built from **beta-glucose** monomers joined by 1-4 glycosidic bonds. Because of the way beta-glucose rings must rotate relative to each other to bond, each successive glucose unit is flipped upside down compared to the last, and the resulting chain comes out straight rather than coiled. Many of these straight chains then run in parallel and are cross-linked to one another by hydrogen bonds, bundling into strong microfibrils.\n\nThis is a direct structure-function relationship: a straight, hydrogen-bonded, fibrous molecule is mechanically strong under tension, which is exactly what is needed for cellulose's role as the main structural component of plant cell walls, and it is a completely different job from the compact, easily-mobilised energy storage role that the coiled, alpha-glucose polysaccharides (starch and glycogen) perform."
    },
    {
      label: "B1.1.7",
      heading: "Glycoproteins and cell recognition",
      level: "SL",
      text: "A glycoprotein is a protein with short carbohydrate chains attached, usually projecting from the outer surface of the cell membrane. These carbohydrate chains act like an identification tag: they let a cell be recognised by other cells and by the immune system, which is how the body distinguishes its own cells from foreign ones, and is also the molecular basis of the ABO blood group system, where the carbohydrate structure attached to red blood cell glycoproteins determines blood type."
    },
    {
      label: "B1.1.8",
      heading: "Hydrophobic properties of lipids",
      level: "SL",
      text: "Lipids are built mostly from carbon and hydrogen, with very few polar or charged groups, which makes them non-polar and hydrophobic, they do not dissolve in water. This single property underlies most of what lipids are used for biologically: forming a barrier that separates watery compartments (membranes), waterproofing surfaces, and storing energy in a form that does not carry the extra weight of associated water molecules the way stored carbohydrate does."
    },
    {
      label: "B1.1.9",
      heading: "Forming triglycerides and phospholipids",
      level: "SL",
      text: "A **triglyceride** forms when a glycerol molecule undergoes three separate condensation reactions, one with each of three fatty acid chains, releasing three water molecules in total. A phospholipid is built the same way but with only two fatty acid chains attached to glycerol, the third position instead carries a phosphate group, which is polar and gives the molecule a hydrophilic head alongside its two hydrophobic tails, the amphipathic property that makes membranes possible (see B2.1)."
    },
    {
      label: "B1.1.10",
      heading: "Saturated, monounsaturated, and polyunsaturated fatty acids",
      level: "SL",
      text: "A **saturated fatty acid** has no carbon-carbon double bonds, so its hydrocarbon tail is straight and packs tightly against neighbouring tails, giving saturated fats a solid consistency at room temperature. A monounsaturated fatty acid has exactly one carbon-carbon double bond, and a polyunsaturated fatty acid has two or more, each double bond puts a rigid kink in the chain that prevents tight packing, which is why increasingly unsaturated fats have progressively lower melting points and tend to be liquid oils at room temperature."
    },
    {
      label: "B1.1.11",
      heading: "Triglycerides in adipose tissue",
      level: "SL",
      text: "Triglycerides store roughly twice as much energy per gram as carbohydrates, and adipose tissue is largely made of cells specialised for storing them. Beyond energy storage, a layer of adipose tissue also acts as thermal insulation, reducing heat loss to the environment, which is especially important for endothermic animals living in cold conditions, such as marine mammals relying on blubber (see A1.1)."
    },
    {
      label: "B1.1.12",
      heading: "Formation of the phospholipid bilayer",
      level: "HL",
      text: "Because a phospholipid has a hydrophilic head and hydrophobic tails, placing phospholipids in water causes them to spontaneously arrange into a bilayer, heads facing outward into the water on both sides, tails facing inward, away from water, with no cellular machinery required to assemble it. This self-assembly, driven purely by the amphipathic structure of the molecule, is the physical basis of every biological membrane (see B2.1)."
    },
    {
      label: "B1.1.13",
      heading: "Non-polar steroids crossing the bilayer",
      level: "HL",
      text: "Steroid hormones, such as oestradiol and testosterone, are small and non-polar, which means they can diffuse directly through the hydrophobic core of a phospholipid bilayer without needing a channel or carrier protein. This is why steroid hormones can act on receptors located inside the cytoplasm or nucleus of a target cell, rather than only on receptors at the cell surface, unlike larger or polar signalling molecules (see B2.1 and C2.1)."
    }
  ],

  "C1.1": [
    {
      label: "C1.1.1",
      heading: "Enzymes as catalysts",
      level: "SL",
      text: "An **enzyme** is a biological catalyst, it increases the rate of a chemical reaction without being consumed or permanently changed itself, and so can be used repeatedly. This is what allows reactions such as digestion, respiration, and photosynthesis to proceed fast enough to sustain life at normal body or environmental temperatures, reactions that would otherwise be far too slow to be biologically useful."
    },
    {
      label: "C1.1.2",
      heading: "The role of enzymes in metabolism",
      level: "SL",
      text: "**Metabolism** is the complex network of interdependent, interacting chemical reactions occurring within an organism. Because each enzyme is specific to a particular reaction, a cell needs a large number of different enzymes to run its metabolism, and by controlling which enzymes are active, and how active they are, at any given time, a cell can exert precise control over its own metabolic activity."
    },
    {
      label: "C1.1.3",
      heading: "Anabolic and catabolic reactions",
      level: "SL",
      text: "**Anabolic reactions** build larger molecules from smaller ones, examples include protein synthesis, glycogen formation, and photosynthesis, all condensation reactions that require an input of energy. **Catabolic reactions** break larger molecules into smaller ones, examples include the hydrolysis of macromolecules during digestion and the oxidation of glucose during respiration, both of which release energy."
    },
    {
      label: "C1.1.4-7",
      heading: "Enzyme structure and the active site",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Induced_fit_diagram_de.svg",
      imageCaption: "The induced fit model: the active site subtly changes shape as the substrate binds.",
      text: "An enzyme is a globular protein whose folded three-dimensional structure creates an **active site**, a pocket shaped and chemically suited to bind a specific substrate. Substrate molecules collide with the enzyme through normal random molecular motion, and when a collision brings a substrate into the active site with the correct orientation, it binds. The active site is not a rigid lock, it subtly changes shape as the substrate binds, known as induced fit, improving the fit and helping to strain particular bonds in the substrate to drive the reaction forward. This close structural relationship between active site shape and substrate shape is exactly why an enzyme's specificity depends on its precise three-dimensional structure."
    },
    {
      label: "C1.1.8",
      heading: "Temperature, pH, and enzyme activity",
      level: "SL",
      text: "Enzyme activity rises with temperature up to an optimum, since faster-moving molecules collide more often, but rises too far and the enzyme denatures, the bonds maintaining its three-dimensional shape break, distorting the active site so substrate can no longer bind properly. The same pattern applies to pH: every enzyme has an optimum, and moving too far from it in either direction disrupts the enzyme's structure and its activity falls away."
    },
    {
      label: "C1.1.9 / C1.1.10",
      heading: "Measuring reaction rate and activation energy",
      level: "SL",
      text: "The rate of an enzyme-catalysed reaction can be measured experimentally by tracking either the disappearance of substrate or the appearance of product over time, commonly by measuring a change in mass, volume, or colour. Enzymes work by lowering the **activation energy** needed for a reaction to proceed, the minimum energy input required to get the reaction started, which is why enzyme-catalysed reactions can occur readily at normal body or environmental temperatures where the uncatalysed reaction would barely happen at all."
    },
    {
      label: "C1.1.11",
      heading: "Intracellular and extracellular enzymes",
      level: "HL",
      text: "Intracellular enzymes catalyse reactions inside the cells that made them, glycolysis in the cytoplasm and the Krebs cycle in the mitochondria are both intracellular examples. Extracellular enzymes are secreted out of the cell to catalyse reactions outside it, chemical digestion in the gut, where enzymes like amylase and protease break down food outside any single cell, is the standard example."
    },
    {
      label: "C1.1.12",
      heading: "Metabolism generates heat",
      level: "HL",
      text: "No metabolic reaction converts energy with perfect efficiency, some energy is inevitably released as heat at each step of a metabolic pathway. Across the huge number of reactions happening simultaneously in an organism, this heat output adds up to a significant and unavoidable by-product of metabolism, and in endothermic animals this metabolically generated heat is actively used to help maintain a stable body temperature."
    }
  ],

  "A1.2": [
    {
      label: "A1.2.1",
      heading: "Nucleic acids as the genetic material",
      level: "SL",
      text: "**Nucleic acids** are polymers built from nucleotide monomers, and there are two types, DNA and RNA. DNA is the genetic material of every living organism, it stores hereditary information that is copied and passed from cell to cell, and from parent to offspring, that every form of life uses the same basic molecule for this is itself strong evidence of a shared evolutionary origin."
    },
    {
      label: "A1.2.2",
      heading: "Components of a nucleotide",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/DNA_molecular_structure,_showing_individual_nucleotides_and_bonds.jpg",
      imageCaption: "The molecular structure of DNA, showing individual nucleotides linked into a sugar-phosphate backbone.",
      text: "A **nucleotide** has three parts: a five-carbon (pentose) sugar, a phosphate group attached to one side of the sugar, and a nitrogenous base attached to the other side. The sugar is deoxyribose in DNA and ribose in RNA, and this single difference in the sugar is part of what gives the two molecules their different chemical stability and roles."
    },
    {
      label: "A1.2.3",
      heading: "The sugar-phosphate backbone",
      level: "SL",
      text: "Nucleotides are linked by bonding the phosphate group of one nucleotide to the sugar of the next, building an alternating sugar-phosphate-sugar-phosphate **backbone** that runs the length of the strand. This backbone is structural rather than informational, it holds the nucleotides in their specific sequence but does not itself vary between genes, all the coded information is carried by the bases attached to it."
    },
    {
      label: "A1.2.4",
      heading: "Bases as the basis of a code",
      level: "SL",
      text: "Each nucleotide carries one of a small set of nitrogenous bases, adenine, cytosine, guanine, and either thymine (DNA only) or uracil (RNA only). The specific sequence of bases along a strand functions as a **code**: in the same way letters combine into words, a sequence of bases (read in groups of three, see D1.2) specifies the sequence of amino acids in a protein."
    },
    {
      label: "A1.2.5",
      heading: "Forming a nucleic acid polymer",
      level: "SL",
      text: "Individual nucleotides are joined into a nucleic acid polymer through condensation reactions: the phosphate group of one nucleotide bonds to the sugar of the next, releasing a water molecule each time, exactly the same condensation logic used to build carbohydrates and proteins (see B1.1 and B1.2), just with a different monomer."
    },
    {
      label: "A1.2.6",
      heading: "The DNA double helix",
      level: "SL",
      text: "DNA consists of two nucleotide strands wound into a **double helix**, held together by hydrogen bonds between bases on opposite strands, following strict **complementary base pairing**: adenine pairs with thymine, cytosine pairs with guanine. The two strands run in opposite directions to one another, described as antiparallel, which matters directly for how the molecule is copied (see D1.1) and read (see D1.2)."
    },
    {
      label: "A1.2.9",
      heading: "The information capacity of DNA",
      level: "HL",
      text: "Because each position along a DNA strand can hold any one of four possible bases, the number of distinct sequences possible even in a short stretch of DNA is astronomically large, and grows exponentially with length. This gives DNA an effectively limitless capacity to store unique genetic information, more than enough to encode the full complexity of any known organism."
    },
    {
      label: "A1.2.11",
      heading: "Directionality of DNA and RNA",
      level: "HL",
      text: "Each strand of DNA or RNA has a chemical direction, one end (the 5' end) has an exposed phosphate group, the other (the 3' end) has an exposed sugar group. This directionality is not just a labelling convention, it determines which end an enzyme like DNA polymerase or RNA polymerase can add new nucleotides to, which is why replication and transcription always proceed in a fixed direction (see D1.1 and D1.2)."
    },
    {
      label: "A1.2.12",
      heading: "Purine-pyrimidine bonding and helix stability",
      level: "HL",
      text: "Adenine and guanine are purines (larger, double-ringed bases), while cytosine, thymine, and uracil are pyrimidines (smaller, single-ringed). Base pairing always occurs between one purine and one pyrimidine, which keeps the width of the double helix constant along its entire length, an important structural requirement for the molecule's overall stability."
    },
    {
      label: "A1.2.13",
      heading: "Nucleosome structure",
      level: "HL",
      text: "In eukaryotes, DNA does not float freely in the nucleus, it is wound around clusters of proteins called histones to form a **nucleosome**, the basic packaging unit of chromatin. This packaging is what allows an enormous length of DNA to be compacted to fit inside a nucleus, and the tightness of that packaging in a given region is also a way of controlling whether the genes in that region are accessible for transcription."
    },
    {
      label: "A1.2.15",
      heading: "Chargaff's data and complementary base pairing",
      level: "HL",
      text: "Before the double helix structure was known, Erwin Chargaff analysed DNA from many different species and found that, in every sample, the amount of adenine always closely matched the amount of thymine, and the amount of cytosine always closely matched the amount of guanine, even though the overall base composition varied between species. This pattern was a key piece of evidence pointing toward complementary base pairing, and was one of the observations Watson and Crick's model had to explain."
    }
  ],

  "D1.1": [
    {
      label: "D1.1.1",
      heading: "What DNA replication is for",
      level: "SL",
      text: "**DNA replication** is the process of producing exact copies of a cell's DNA. It happens before both mitosis and meiosis, and it is essential for reproduction, growth, and tissue replacement in multicellular organisms, every new cell needs its own complete, accurate copy of the genome."
    },
    {
      label: "D1.1.2",
      heading: "Semi-conservative replication",
      level: "SL",
      text: "DNA replication is **semi-conservative**: each resulting DNA molecule contains one original (parental) strand and one newly synthesised strand. This was confirmed experimentally by Meselson and Stahl using isotope labelling. Building the new strand directly against an original strand, using complementary base pairing, is what gives replication its high accuracy, the new strand's sequence is fully determined by the template it was copied from."
    },
    {
      label: "D1.1.3",
      heading: "Helicase and DNA polymerase",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/DNA_replication_en.svg",
      imageCaption: "The replication fork: helicase unwinds the double helix while DNA polymerase builds new strands.",
      text: "**Helicase** unwinds the double helix by breaking the hydrogen bonds between base pairs, exposing two single strands to act as templates. **DNA polymerase** then builds a new complementary strand by adding free nucleotides opposite each template base, following the same base-pairing rules used throughout DNA and RNA."
    },
    {
      label: "D1.1.4 / D1.1.5",
      heading: "PCR and gel electrophoresis",
      level: "SL",
      text: "The **polymerase chain reaction (PCR)** is a laboratory technique that amplifies a specific region of DNA, repeatedly copying it using DNA polymerase to generate millions of copies from a tiny starting sample. **Gel electrophoresis** then separates DNA fragments by size, since DNA is negatively charged, fragments move toward a positive electrode through a gel matrix, and smaller fragments move faster and travel further.\n\nTogether, these two techniques underpin many practical applications: forensic DNA profiling, paternity testing, diagnosing genetic conditions, and detecting pathogens, all rely on amplifying a small DNA sample with PCR and then analysing the resulting fragments with gel electrophoresis."
    },
    {
      label: "D1.1.6",
      heading: "Directionality of DNA polymerase",
      level: "HL",
      text: "DNA polymerase can only add new nucleotides to the 3' end of an existing strand, meaning it always builds a new strand in the 5' to 3' direction. Because the two template strands are antiparallel (see A1.2), this single constraint has a major consequence for how replication actually proceeds along the two strands simultaneously (see D1.1.7)."
    },
    {
      label: "D1.1.7",
      heading: "Leading and lagging strands",
      level: "HL",
      text: "At the replication fork, one template strand allows DNA polymerase to synthesise the new strand continuously in the same direction the fork is opening, this is the leading strand. The other template strand runs in the opposite direction, so DNA polymerase must synthesise it discontinuously, in short sections called Okazaki fragments, each started separately and later joined together, this is the lagging strand."
    },
    {
      label: "D1.1.8",
      heading: "Enzymes of prokaryotic replication",
      level: "HL",
      text: "In prokaryotes, replication involves a specific division of labour between enzymes: **primase** lays down a short RNA primer to give DNA polymerase a starting point, **DNA polymerase III** carries out the bulk of new strand synthesis, **DNA polymerase I** replaces the RNA primers with DNA, and **DNA ligase** seals the remaining gaps between fragments (particularly on the lagging strand) by forming the final phosphodiester bonds."
    },
    {
      label: "D1.1.9",
      heading: "Proofreading and accuracy",
      level: "HL",
      text: "DNA polymerase does not just add nucleotides, it also proofreads as it goes, checking that each newly added base correctly pairs with its template base and removing it if not. This built-in proofreading is why replication is remarkably accurate, errors occur only very rarely, and on the occasions that do slip through uncorrected, they become permanent mutations (see D1.3)."
    }
  ],

  "D2.1": [
    {
      label: "D2.1.1",
      heading: "New cells from existing cells",
      level: "SL",
      text: "New cells are produced only by the division of a pre-existing cell, described as the mother cell, into two daughter cells. This is a foundational idea in cell biology: it means every cell in your body, and every cell of every organism, can trace its lineage back through an unbroken chain of divisions."
    },
    {
      label: "D2.1.2 / D2.1.3",
      heading: "Cytokinesis in plant and animal cells",
      level: "SL",
      text: "**Cytokinesis** is the division of the cytoplasm to form two separate cells, and it happens differently depending on cell type. In an animal cell, a contractile ring of actin and myosin filaments pinches the cell membrane inward until it splits in two. In a plant cell, vesicles carrying membrane and cell wall material assemble outward from the centre of the cell to build a new dividing wall.\n\nCytokinesis usually divides the cytoplasm equally, but not always, both daughter cells must receive at least one mitochondrion and any other organelle that can only arise from an existing one, but beyond that minimum, division can be unequal, as in yeast budding or human oogenesis, where one resulting cell receives far more cytoplasm than the other."
    },
    {
      label: "D2.1.4 / D2.1.5",
      heading: "Roles and shared features of mitosis and meiosis",
      level: "SL",
      text: "**Mitosis** produces two genetically identical daughter nuclei and maintains the chromosome number, it underlies growth, tissue repair, and asexual reproduction. **Meiosis** halves the chromosome number and generates genetic diversity, it is specifically used to produce gametes. Despite their different outcomes, both processes share key features: both are preceded by DNA replication, and both involve chromosome condensation and movement organised by a spindle apparatus."
    },
    {
      label: "D2.1.6 / D2.1.7",
      heading: "The phases of mitosis",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitosis_Stages.svg",
      imageCaption: "The stages of mitosis, from interphase through prophase, metaphase, anaphase, and telophase.",
      text: "In prophase, chromosomes condense and become visible, and the nuclear envelope breaks down. In metaphase, chromosomes line up along the cell's equator, attached to spindle fibres. In anaphase, spindle fibres shorten and pull sister chromatids apart to opposite poles. In telophase, two new nuclear envelopes form around each set of chromosomes. These stages can be identified directly from photomicrographs, based on the visible position and condensation state of the chromosomes."
    },
    {
      label: "D2.1.8 / D2.1.9",
      heading: "Meiosis as a reduction division",
      level: "SL",
      text: "Meiosis is described as a reduction division because it halves the chromosome number, taking a diploid cell through two successive divisions (meiosis I and meiosis II) to produce four haploid cells. In meiosis I, homologous chromosome pairs separate from each other, in meiosis II, sister chromatids separate, similarly to mitosis, this two-step process is what achieves the reduction from diploid to haploid."
    },
    {
      label: "D2.1.10 / D2.1.11",
      heading: "Non-disjunction and genetic diversity",
      level: "SL",
      text: "**Non-disjunction** is the failure of chromosomes (or chromatids) to separate correctly during meiosis, producing gametes with an abnormal chromosome number, in humans this can result in conditions such as Down syndrome (trisomy 21). Separately, meiosis actively generates genetic diversity through two mechanisms: crossing over between homologous chromosomes during meiosis I, which shuffles alleles between them, and the independent assortment of homologous pairs, which randomises which chromosome from each pair ends up in a given gamete."
    },
    {
      label: "D2.1.12 / D2.1.13 / D2.1.14",
      heading: "The cell cycle and interphase",
      level: "SL",
      text: "Multicellular organisms need continual **cell proliferation** for growth and to replace cells lost to normal wear or damage. This happens through the cell cycle, most of which is **interphase**, during which the cell grows, carries out its normal functions, and replicates its DNA, followed by mitosis and cytokinesis. Interphase is itself divided into sub-phases (growth, DNA synthesis, further growth) reflecting these different tasks happening in sequence before the cell is ready to divide."
    },
    {
      label: "D2.1.15",
      heading: "Cyclins and cell cycle control",
      level: "HL",
      text: "Progression through the cell cycle is controlled by proteins called **cyclins**, whose concentrations rise and fall at specific points in the cycle. Cyclins activate enzymes that trigger the next stage of the cycle only once conditions are right, this checkpoint system is what normally prevents a cell from dividing with damaged or incompletely replicated DNA, and its breakdown is a central feature of how cancer develops."
    }
  ],

  "B1.2": [
    {
      label: "B1.2.1",
      heading: "The generalised structure of an amino acid",
      level: "SL",
      text: "Every **amino acid** shares the same basic structure: a central carbon atom bonded to an amino group, a carboxyl group, a hydrogen atom, and a variable side chain, the **R group**. All 20 amino acids used in proteins share this common core, it is only the R group that differs between them, and that variation is what gives amino acids their distinct chemical properties."
    },
    {
      label: "B1.2.2",
      heading: "Forming polypeptides by condensation",
      level: "SL",
      text: "Amino acids join through a condensation reaction between the carboxyl group of one and the amino group of the next, forming a **peptide bond** and releasing a water molecule. Two linked amino acids form a dipeptide, and longer chains, formed the same way, one bond at a time, are called polypeptides."
    },
    {
      label: "B1.2.3",
      heading: "Essential and non-essential amino acids",
      level: "SL",
      text: "The human body can synthesise some amino acids itself from other molecules, these are non-essential. Others cannot be synthesised at all and must be obtained directly from the diet, these are essential amino acids. This is why dietary variety matters, particularly for anyone relying heavily on plant proteins, since no single plant source typically supplies every essential amino acid in sufficient quantity."
    },
    {
      label: "B1.2.4",
      heading: "The near-infinite variety of polypeptides",
      level: "SL",
      text: "With 20 different amino acids available and no restriction on the order or length in which they can be joined, the number of possible polypeptide sequences is enormous, even a short chain of just a few amino acids has hundreds of possible combinations, and chains can run to hundreds or thousands of amino acids long. This combinatorial variety is what allows proteins to take on such a wide diversity of forms and functions."
    },
    {
      label: "B1.2.5",
      heading: "Effect of pH and temperature on protein structure",
      level: "SL",
      text: "Every protein has an optimum pH and temperature range in which its structure, and therefore its function, is stable. Moving too far outside that range disrupts the weak bonds holding the protein's three-dimensional shape together, causing it to **denature**, unfold and lose its structure, usually irreversibly. Since most enzymes are proteins, denaturation is why extreme heat or pH so reliably destroys enzyme activity."
    },
    {
      label: "B1.2.6",
      heading: "Chemical diversity in R-groups",
      level: "HL",
      text: "R groups vary enormously in their chemistry, some are non-polar and hydrophobic, others are polar, and some are acidic or basic, carrying a charge at physiological pH. This chemical diversity in the R groups is the underlying reason protein form and function can be so varied, it is what allows different regions of a polypeptide to interact with each other, and with other molecules, in so many different ways."
    },
    {
      label: "B1.2.7",
      heading: "Primary structure determines conformation",
      level: "HL",
      text: "A protein's **primary structure**, the specific linear sequence of amino acids, ultimately determines its entire final three-dimensional shape (its conformation). Because folding is driven by interactions between the R groups along the chain, changing even a single amino acid in the sequence can alter how the chain folds, which is exactly why a single point mutation can sometimes have such a large effect on a protein's function (see D1.2)."
    },
    {
      label: "B1.2.8",
      heading: "Secondary structure: pleating and coiling",
      level: "HL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Levels_of_structural_organization_of_a_protein.svg",
      imageCaption: "The four levels of protein structure: primary, secondary, tertiary, and quaternary.",
      text: "A polypeptide's **secondary structure** consists of local, repeating folding patterns held together by hydrogen bonds along the backbone, an alpha helix, where the chain coils into a spiral, and a beta pleated sheet, where sections of the chain lie alongside each other in a folded, zig-zag arrangement. Most proteins contain a mix of both, along with less regular regions, distributed across the length of the chain."
    }
  ],

  "A2.1": [
    {
      label: "A2.1.1",
      heading: "Why the origin of the first cell is hard to explain",
      level: "HL",
      text: "Modern cell theory states that new cells only arise from pre-existing cells, which raises an obvious problem: it cannot explain how the very first cell came to exist, since there was no earlier cell for it to have come from. Explaining the origin of life therefore requires a different kind of explanation, one based on non-living chemistry gradually giving rise to something capable of the basic processes of life."
    },
    {
      label: "A2.1.2",
      heading: "Conditions on early Earth",
      level: "HL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Miller-Urey_experiment-en.svg",
      imageCaption: "The Miller-Urey apparatus, used to test whether organic molecules could form under early Earth conditions.",
      text: "Early Earth's atmosphere is thought to have contained little or no free oxygen, along with gases such as methane, ammonia, and water vapour, with volcanic activity and intense ultraviolet radiation providing energy for chemical reactions, since there was no ozone layer to block it. The Miller-Urey experiment showed that passing electrical discharges (simulating lightning) through a comparable gas mixture could generate simple organic molecules, including amino acids, without any living cells involved, demonstrating this kind of chemistry was at least plausible."
    },
    {
      label: "A2.1.5",
      heading: "Spontaneous formation of vesicles",
      level: "HL",
      text: "Fatty acid molecules placed in water spontaneously coalesce into hollow spherical bilayers, forming simple vesicles, with no biological machinery required, purely as a consequence of their amphipathic chemistry (see B1.1). This step matters because it shows how a boundary separating an internal chemical environment from the surrounding water, a basic requirement for anything resembling a cell, could plausibly have arisen on its own from simple organic molecules."
    },
    {
      label: "A2.1.6",
      heading: "RNA as the presumed first genetic material",
      level: "HL",
      text: "RNA, rather than DNA, is generally presumed to have been the first genetic material, because RNA can both store information (like DNA) and catalyse chemical reactions (like an enzyme), a dual capability DNA does not have. This idea, sometimes called the RNA world hypothesis, offers a way for the very first self-replicating molecules to have functioned before more specialised molecules, DNA for storage and proteins for catalysis, took over those roles separately."
    },
    {
      label: "A2.1.8",
      heading: "Estimating the age of the first cells",
      level: "HL",
      text: "Scientists estimate how long ago the first cells, and the last universal common ancestor (LUCA) of all known life, existed using multiple independent approaches: the fossil record, geochemical evidence in ancient rocks, and molecular clock methods, which estimate elapsed time from the accumulated number of differences between the DNA or protein sequences of living species."
    },
    {
      label: "A2.1.9",
      heading: "Hydrothermal vents and the last universal common ancestor",
      level: "HL",
      text: "Several lines of evidence, including the metabolic chemistry shared broadly across the tree of life, point toward deep-sea hydrothermal vents as a plausible environment for the last universal common ancestor. Vents provide a continuous supply of chemical energy and mineral surfaces that could have catalysed early biochemical reactions, offering a stable, energy-rich setting quite different from the sunlit surface conditions once assumed necessary for life's origin."
    }
  ],

  "D1.2": [
    {
      label: "D1.2.1-3",
      heading: "Transcription: copying a gene into mRNA",
      level: "SL",
      text: "**Transcription** is the synthesis of an RNA molecule using one strand of a gene's DNA as a template. RNA polymerase binds near the start of the gene, unwinds the double helix, and moves along the template strand, using **complementary base pairing** and hydrogen bonding to add matching RNA nucleotides, with uracil taking the place of thymine wherever the template has an adenine.\n\nCrucially, the DNA template itself is not used up or altered by this process, it separates temporarily, gets copied, and re-forms its double helix afterwards, remaining stable and available to be transcribed again, many times over, whenever that gene is next needed."
    },
    {
      label: "D1.2.4",
      heading: "Transcription and the control of gene expression",
      level: "SL",
      text: "Not every gene in a cell is transcribed at every moment, whether a particular gene is transcribed, and how often, is a major point of control over which proteins a cell actually produces. Because transcription is the very first step in turning a gene into a functioning protein, it is the stage at which gene expression is most commonly switched on or off, which is a large part of how genetically identical cells in one organism end up specialised into very different cell types."
    },
    {
      label: "D1.2.5-7",
      heading: "Translation: mRNA, ribosomes, and tRNA",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ribosome_mRNA_translation_en.svg",
      imageCaption: "A ribosome moving along mRNA, with tRNA molecules delivering amino acids to build the polypeptide chain.",
      text: "**Translation** is the synthesis of a polypeptide using the sequence of an mRNA molecule as instructions, and it takes place at a **ribosome**. The mRNA carries the coded message as a sequence of **codons**, the ribosome provides the site where translation happens, and **tRNA** molecules physically deliver amino acids, each tRNA has an **anticodon** that binds to its complementary codon on the mRNA through the same base-pairing rules used elsewhere in molecular biology, which is what ensures the correct amino acid is added at each step."
    },
    {
      label: "D1.2.8",
      heading: "Degeneracy and universality of the genetic code",
      level: "SL",
      text: "The genetic code is degenerate, meaning most amino acids can be specified by more than one codon, which gives some protection against mutation, since a change to a codon's third base often still codes for the same amino acid. It is also (near-)universal, the same codons specify the same amino acids across virtually every living organism, strong evidence that all known life shares a common evolutionary origin, and the practical reason a human gene can be inserted into bacteria and still be read correctly."
    },
    {
      label: "D1.2.9-10",
      heading: "Reading the code, and elongation",
      level: "SL",
      text: "Given an mRNA sequence and a codon table, the corresponding amino acid sequence can be deduced directly, codon by codon, and vice versa. During the elongation stage of translation, the ribosome moves stepwise along the mRNA one codon at a time, at each step a new tRNA delivers its amino acid, a peptide bond forms between it and the growing chain, and the ribosome shifts forward to expose the next codon, repeating until a stop codon is reached."
    },
    {
      label: "D1.2.11",
      heading: "How a point mutation can affect the polypeptide",
      level: "SL",
      text: "A point mutation changes a single base in the DNA sequence, and because of degeneracy, that is not guaranteed to change the resulting protein, a substitution might land on a codon's third base and still code for the same amino acid (a silent mutation). But it can just as easily change the amino acid at that position (with effects ranging from negligible to severe, depending on the protein) or create a premature stop codon, which typically truncates the protein and destroys its function."
    },
    {
      label: "D1.2.12",
      heading: "Directionality: transcription and translation run 5' to 3'",
      level: "SL",
      text: "Both transcription and translation proceed in a consistent direction: RNA polymerase reads the DNA template 3' to 5' while building the new RNA strand 5' to 3', and the ribosome reads mRNA codons in the 5' to 3' direction as well. This directionality is not arbitrary, it is fixed by the chemistry of how new nucleotides can be added to a growing strand, the same underlying reason DNA replication has a leading and a lagging strand (see D1.1)."
    },
    {
      label: "D1.2.13",
      heading: "Promoters and transcription factors",
      level: "HL",
      text: "A **promoter** is a specific DNA sequence located just before the start of a gene. In eukaryotes, transcription does not begin until transcription factors first bind to the promoter, and it is that transcription factor-promoter complex that then recruits RNA polymerase to the gene, only once RNA polymerase is correctly positioned can transcription actually begin. This gives the cell a precise, gene-by-gene switch: whether the right transcription factors are present and able to bind determines whether a given gene gets transcribed at all."
    },
    {
      label: "D1.2.14",
      heading: "Roles of non-coding regions of DNA",
      level: "HL",
      text: "Only a small fraction of the human genome directly codes for protein, the rest is non-coding, but non-coding does not mean functionless. Non-coding regions include promoters and other regulatory sequences that control when and how strongly nearby genes are transcribed, sequences that get transcribed into functional RNA molecules that are never translated (such as tRNA and rRNA genes), and regions such as introns that are removed from a transcript before translation (see D1.2.15-16)."
    },
    {
      label: "D1.2.15-16",
      heading: "Post-transcriptional modification and alternative splicing",
      level: "HL",
      text: "In eukaryotes, a newly made mRNA transcript is modified before it leaves the nucleus, non-coding sections called introns are cut out, and the remaining coding sections, exons, are joined together, along with the addition of a protective cap and tail at each end.\n\nBecause exons can be joined together in more than one combination, a process called **alternative splicing**, a single gene can produce several different mRNA transcripts, and therefore several different protein variants, depending on which exons are included. This is a major reason the human genome can code for a far larger number of distinct proteins than it has genes."
    },
    {
      label: "D1.2.17",
      heading: "Initiation of translation",
      level: "HL",
      text: "Translation begins when the small ribosomal subunit binds to the mRNA and moves along it until it reaches a start codon (AUG). An initiator tRNA, carrying the amino acid methionine, then pairs with that start codon, and the large ribosomal subunit joins to complete the functional ribosome, only once this initiation complex has assembled correctly can the ribosome move into the elongation stage described in D1.2.10."
    },
    {
      label: "D1.2.18",
      heading: "Modifying polypeptides into their functional form",
      level: "HL",
      text: "A freshly translated polypeptide is not always the final, functional protein, many require further processing. Insulin is the standard example: it is first translated as a single longer polypeptide, pre-proinsulin, which is then cut and modified in stages, first to proinsulin, and then, once a central section is enzymatically removed, to the final, active insulin molecule made of two shorter polypeptide chains held together by disulfide bonds."
    },
    {
      label: "D1.2.19",
      heading: "Recycling amino acids: proteasomes",
      level: "HL",
      text: "Proteins do not last indefinitely, cells continually break down proteins that are damaged, misfolded, or no longer needed. A **proteasome** is a large protein complex that carries out this breakdown, unfolding a targeted protein and cutting it back down into individual amino acids, which the cell can then reuse to build new polypeptides, a form of recycling that reduces how many new amino acids the cell needs to obtain from scratch."
    }
  ],

  "A2.2": [
    {
      label: "A2.2.1",
      heading: "The cell as the basic unit of life",
      level: "SL",
      text: "The **cell** is the smallest structural and functional unit capable of carrying out all the processes of life independently. This is a foundational part of cell theory: every living organism is made of one or more cells, and every life process, metabolism, growth, response, reproduction, happens at the cellular level, even in a large multicellular organism."
    },
    {
      label: "A2.2.4",
      heading: "Features common to all cells",
      level: "SL",
      text: "Despite their diversity, every cell shares a small set of common features: a plasma membrane separating the cell from its environment, cytoplasm in which chemical reactions take place, DNA carrying genetic information, and ribosomes for making proteins. These shared features are strong evidence that all cellular life shares a common evolutionary origin."
    },
    {
      label: "A2.2.5 / A2.2.6",
      heading: "Prokaryotic and eukaryotic cell structure",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Celltypes.svg",
      imageCaption: "A eukaryotic cell (left) alongside a prokaryotic cell (right), drawn to comparable scale.",
      text: "A **prokaryotic** cell has no nucleus and no membrane-bound organelles, its DNA lies free in the cytoplasm as a single circular chromosome, and the cell is generally small and structurally simple. A **eukaryotic** cell has a true nucleus enclosing its DNA, along with a range of membrane-bound organelles dividing the cell into specialised compartments, and is typically much larger and more structurally complex."
    },
    {
      label: "A2.2.7",
      heading: "Life processes in unicellular organisms",
      level: "SL",
      text: "A unicellular organism must carry out every process needed for life, nutrition, respiration, excretion, response, and reproduction, within a single cell, since it has no other cells to divide the labour with. This places real constraints on how such a cell can be organised, and is part of why unicellular organisms tend to stay small, to keep their single cell's surface area sufficient for the exchange all these processes require."
    },
    {
      label: "A2.2.8 / A2.2.9",
      heading: "Diversity and atypical structures in eukaryotic cells",
      level: "SL",
      text: "Eukaryotic cells vary structurally between kingdoms, plant cells have a cellulose cell wall, chloroplasts, and a large central vacuole that animal cells lack, while fungal cells have a chitin cell wall rather than a cellulose one. Some eukaryotic cells are also atypical in more specific ways, for example phloem sieve tube elements and mature red blood cells both lack a nucleus, a specialisation that maximises internal space for their specific transport role (see B2.3)."
    },
    {
      label: "A2.2.10 / A2.2.11",
      heading: "Studying cells with microscopy",
      level: "SL",
      text: "Light microscopes allow living cells to be viewed, but their resolution is limited, fine internal detail below about 200 nanometres cannot be distinguished. Electron microscopes offer far higher resolution, revealing the internal structure of organelles in detail, but require cells to be fixed, dehydrated, and viewed in a vacuum, meaning only dead material can be examined. Both types of image need to be interpreted carefully, including drawing and correctly annotating structures from electron micrographs, a core practical skill for this topic."
    },
    {
      label: "A2.2.12",
      heading: "Origin of eukaryotic cells by endosymbiosis",
      level: "HL",
      text: "Mitochondria and chloroplasts are thought to have originated as free-living prokaryotic cells engulfed by a larger host cell, and instead of being digested, survived inside it as an internal symbiont, a relationship that became permanent over evolutionary time. This **endosymbiotic theory** explains otherwise puzzling features of these organelles: both have their own circular DNA and prokaryote-sized ribosomes, and both are enclosed by a double membrane, one layer from the original engulfed prokaryote, one from the host cell's engulfing vesicle."
    },
    {
      label: "A2.2.13",
      heading: "Cell differentiation",
      level: "SL",
      text: "**Cell differentiation** is the process by which genetically identical cells become structurally and functionally specialised, developing into the many distinct tissue types found in a multicellular organism. Since every cell in an organism carries the same DNA, differentiation happens through differences in which genes are actively expressed in each cell, not through any change to the DNA sequence itself (see D2.2)."
    }
  ],

  "B2.2": [
    {
      label: "B2.2.1",
      heading: "What counts as an organelle",
      level: "SL",
      text: "An **organelle** is a discrete, separate subunit of a cell, adapted by its structure to perform one or more specific functions. The nucleus, vesicles, ribosomes, and the plasma membrane all count as organelles by this definition. The cell wall, cytoskeleton, and general cytoplasm do not, they lack a specific, discrete function of their own, and instead provide support or serve as the general matrix the rest of the cell operates within."
    },
    {
      label: "B2.2.2",
      heading: "The advantage of compartmentalising the cytoplasm",
      level: "SL",
      text: "Enclosing part of the cytoplasm inside its own organelle lets a cell concentrate specific enzymes and substrates in one place, increasing the efficiency of that particular reaction, while also isolating potentially harmful processes from the rest of the cell. Lysosomes illustrate this well: their digestive enzymes are kept safely contained rather than free in the cytoplasm, where they would damage the cell's own components. Phagocytic vacuoles apply the same principle to material engulfed from outside the cell, keeping it enclosed while it is broken down."
    },
    {
      label: "B2.2.3",
      heading: "Separating the nucleus from the cytoplasm",
      level: "SL",
      text: "Keeping DNA inside the nucleus, physically separate from the ribosomes in the cytoplasm, gives a eukaryotic cell an advantage in controlling protein synthesis: transcription and translation become two distinct, separately regulated steps rather than one continuous process. This separation is part of what allows eukaryotic cells to modify and control an mRNA transcript (see D1.2) before it ever reaches a ribosome, a level of control prokaryotic cells, which lack this compartmentalisation, do not have."
    },
    {
      label: "B2.2.4",
      heading: "Mitochondrial structure and ATP production",
      level: "HL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitochondrion_structure.svg",
      imageCaption: "The structure of a mitochondrion, showing the folded inner membrane (cristae) and matrix.",
      text: "The mitochondrion's structure closely matches its role in aerobic respiration (see C1.2). Its double membrane encloses a matrix containing the enzymes of the Krebs cycle at a high, useful concentration. Its inner membrane is folded into **cristae**, dramatically increasing the surface area available for the electron transport chain and ATP synthase. And the narrow intermembrane space between the two membranes allows a steep hydrogen ion gradient to build up quickly during chemiosmosis, exactly what's needed to drive efficient ATP synthesis."
    }
  ],

  "C1.2": [
    {
      label: "C1.2.1",
      heading: "ATP as the energy currency of the cell",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cellular_respiration_flowchart_(en).svg",
      imageCaption: "An overview flowchart of cellular respiration, from glycolysis through to the electron transport chain.",
      text: "**ATP** (adenosine triphosphate) is a nucleotide made of an adenine base, a ribose sugar, and three phosphate groups. Its structure makes it ideally suited as a cell's immediate energy currency: the bonds between its phosphate groups release a usable amount of energy when broken, small enough to be released in manageable amounts, but large enough to actually drive a reaction, and ATP can be regenerated and reused repeatedly rather than used up once."
    },
    {
      label: "C1.2.2 / C1.2.3",
      heading: "What ATP is used for, and the ATP-ADP cycle",
      level: "SL",
      text: "ATP supplies energy for essentially every energy-requiring process in a cell: active transport across membranes, the synthesis of macromolecules (anabolism), and the movement of structures within or by the cell, from chromosome movement during division to whole-cell locomotion. Energy is released when ATP is hydrolysed to ADP and an inorganic phosphate, and that energy is put back in, regenerating ATP, when a phosphate group is reattached to ADP, this continuous interconversion between ATP and ADP is how energy is shuttled around a cell as needed."
    },
    {
      label: "C1.2.4",
      heading: "Cell respiration as an ATP-generating system",
      level: "SL",
      text: "**Cell respiration** is the system of reactions that generates ATP by releasing the chemical energy stored in carbon compounds, typically glucose. Rather than releasing all of that energy in one uncontrolled step, respiration breaks it down into a sequence of smaller, enzyme-controlled reactions, which allows the energy to be captured efficiently, as ATP, rather than being lost as heat all at once."
    },
    {
      label: "C1.2.5",
      heading: "Aerobic versus anaerobic respiration in humans",
      level: "SL",
      text: "Aerobic respiration uses glucose and oxygen as substrates and produces carbon dioxide and water, taking place inside the mitochondria, and yields a large amount of ATP per glucose molecule. Anaerobic respiration in humans uses only glucose, produces lactate (along with some carbon dioxide and water), takes place in the cytoplasm, and yields far less ATP per glucose molecule, but can proceed without oxygen, useful for short, intense bursts of activity when oxygen delivery can't keep up with demand."
    },
    {
      label: "C1.2.6",
      heading: "Variables affecting the rate of cell respiration",
      level: "SL",
      text: "The rate of cell respiration is affected by variables including temperature (via its effect on enzyme activity), substrate availability, and oxygen availability (for the aerobic pathway specifically). These variables can be investigated experimentally, for example using a respirometer to measure oxygen consumption under different conditions, changing one variable at a time while keeping others constant."
    },
    {
      label: "C1.2.7-9",
      heading: "NAD, glycolysis, and regenerating NAD anaerobically",
      level: "HL",
      text: "**NAD** acts as a hydrogen carrier during respiration, becoming reduced NAD when it accepts hydrogen (with its electron) removed from a substrate during oxidation. In **glycolysis**, glucose is broken down, through a series of enzyme-catalysed steps in the cytoplasm, into two molecules of pyruvate, with a net yield of ATP and reduced NAD, this stage occurs whether or not oxygen is present.\n\nWhen oxygen is unavailable, reduced NAD cannot be reoxidised by the electron transport chain, so cells regenerate NAD another way: in humans, by converting pyruvate to lactate, which reoxidises reduced NAD back to NAD, allowing glycolysis, and its small ATP yield, to keep running anaerobically."
    },
    {
      label: "C1.2.11 / C1.2.12",
      heading: "The link reaction and the Krebs cycle",
      level: "HL",
      text: "In the **link reaction**, pyruvate is transported into the mitochondrial matrix, oxidised, and decarboxylated (losing a carbon dioxide molecule), producing reduced NAD and a two-carbon acetyl group, which combines with coenzyme A to form acetyl-CoA.\n\nIn the **Krebs cycle**, the acetyl group is fully oxidised and decarboxylated across a cycle of reactions, releasing the remaining carbon as carbon dioxide, while generating a further yield of ATP, reduced NAD, and reduced FAD, molecules that carry the bulk of glucose's original energy forward to the electron transport chain."
    },
    {
      label: "C1.2.16",
      heading: "Oxygen as the terminal electron acceptor",
      level: "HL",
      text: "At the end of the electron transport chain, oxygen accepts the electrons (and hydrogen ions) that have passed along the chain, forming water. This is why aerobic respiration depends absolutely on oxygen, without a terminal acceptor to remove electrons at the end of the chain, the whole chain backs up and stops, which halts oxidative phosphorylation and the large ATP yield that depends on it."
    }
  ],

  "C1.3": [
    {
      label: "C1.3.1",
      heading: "Light energy becomes chemical energy",
      level: "SL",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Simple_photosynthesis_overview.svg",
      imageCaption: "A simple overview of photosynthesis: light, water, and carbon dioxide in, glucose and oxygen out.",
      text: "Photosynthesis transforms light energy into the chemical energy stored in the bonds of carbon compounds. This transformation matters far beyond the photosynthesising organism itself, it supplies, directly or indirectly, most of the chemical energy that powers life processes across an entire ecosystem, since nearly every food chain traces back to it (see C4.2)."
    },
    {
      label: "C1.3.2 / C1.3.3",
      heading: "Converting carbon dioxide to glucose, and oxygen as a by-product",
      level: "SL",
      text: "Photosynthesis converts carbon dioxide into glucose, using hydrogen obtained by splitting water molecules. The carbon and some oxygen atoms in the resulting glucose come from carbon dioxide, while the hydrogen comes from water. **Oxygen** is released as a by-product of that water-splitting step, not built into the glucose itself, this is true across plants, algae, and cyanobacteria, and it is the source of almost all atmospheric oxygen."
    },
    {
      label: "C1.3.4 / C1.3.5",
      heading: "Photosynthetic pigments",
      level: "SL",
      text: "Different pigments absorb different wavelengths of light, and **chromatography** can separate a mixture of pigments extracted from a leaf, allowing each one to be identified by how far it travels relative to the solvent, expressed as its Rf value. Pigments such as chlorophyll a, chlorophyll b, and carotenoids absorb strongly in the blue and red parts of the visible spectrum but reflect green light, which is why they appear green and why an absorption spectrum for photosynthetic pigments shows clear peaks in those regions."
    },
    {
      label: "C1.3.7 / C1.3.8",
      heading: "Investigating limiting factors, and predicting future rates",
      level: "SL",
      text: "The effect of light intensity, carbon dioxide concentration, or temperature on photosynthetic rate can be investigated experimentally by varying one of these factors while controlling the others and measuring the resulting rate, testing a hypothesis about which factor is limiting under given conditions. This kind of experiment also has a real-world application: carbon dioxide enrichment experiments, exposing plants to elevated CO2 levels, are used to predict how photosynthesis rates might change as atmospheric CO2 continues to rise (see D4.3)."
    },
    {
      label: "C1.3.9 / C1.3.10",
      heading: "Photosystems",
      level: "HL",
      text: "Pigments are organised into **photosystems**, structured arrays embedded in the thylakoid membrane. A single pigment molecule absorbing light on its own could not drive photosynthesis, the advantage of arranging many pigment molecules together in a photosystem is that it creates a much larger antenna for capturing light energy, which is then funnelled to a central reaction centre where the energy is actually put to use."
    },
    {
      label: "C1.3.12 / C1.3.14",
      heading: "ATP production by chemiosmosis in the thylakoid",
      level: "HL",
      text: "The electrons released by photolysis pass along an electron transport chain in the thylakoid membrane, and the energy released is used to pump hydrogen ions into the thylakoid space, building a concentration gradient. Those hydrogen ions then flow back out through ATP synthase, driving ATP production by chemiosmosis, closely paralleling how ATP is made during respiration (see C1.2). This entire process, photolysis, electron transport, and chemiosmotic ATP synthesis, together with the reduction of NADP, all take place across the thylakoid membrane system."
    },
    {
      label: "C1.3.15",
      heading: "Carbon fixation by Rubisco",
      level: "HL",
      text: "**Rubisco** catalyses carbon fixation, combining carbon dioxide with the five-carbon molecule RuBP to produce glycerate-3-phosphate (GP). Rubisco works relatively slowly and becomes ineffective at low carbon dioxide concentrations, which is why chloroplasts contain such high concentrations of it, compensating for its inefficiency with sheer quantity, making Rubisco the most abundant enzyme on Earth."
    },
    {
      label: "C1.3.16 / C1.3.17",
      heading: "Completing the Calvin cycle",
      level: "HL",
      text: "Glycerate-3-phosphate (GP) is converted into triose phosphate (TP) using the ATP and reduced NADP generated by the light-dependent reactions. Most of that triose phosphate is used to regenerate RuBP, also using ATP, so the cycle can continue fixing more carbon dioxide, while the remainder is exported from the cycle to build glucose and other organic molecules the plant needs."
    }
  ],
  "B2.3": [
    {
      label: "B2.3.1",
      heading: "From zygote to embryo: differentiation and morphogens",
      level: "SL",
      text: "Fertilisation produces a single, **unspecialised** cell, the zygote, which is totipotent and carries the full set of instructions needed to build an entire organism. As the zygote divides, the resulting cells begin to take on distinct identities through **differentiation**, the process by which a cell becomes structurally and biochemically specialised for a particular role, even though every cell in the embryo still carries an identical copy of the genome.\n\nWhat differs between cells is not their DNA but which genes are switched on. This is controlled in large part by **morphogens**, signalling chemicals released from a particular source within the embryo that diffuse outward, forming a concentration gradient. Cells close to the source receive a high concentration of morphogen and activate one set of genes, while cells further away receive progressively less and activate a different set. In this way, a single chemical gradient can pattern an entire region of the embryo, giving cells positional information about where they sit and, consequently, what they should become.",
      tip: { label: "Exam tip", text: "Every cell in an embryo has the same genome. Differentiation is entirely about which genes get expressed, not any change to the DNA sequence itself." }
    },
    {
      label: "B2.3.2",
      heading: "Properties of stem cells",
      level: "SL",
      text: "**Stem cells** are unspecialised cells that retain two defining properties throughout their lifetime. The first is **self-renewal**: a stem cell can divide to produce more stem cells indefinitely, maintaining its own population without being used up. The second is **potency**: the capacity to differentiate into one or more specialised cell types when the right signals are present.\n\nPotency exists on a spectrum. **Totipotent** cells, such as the zygote and the cells of the very earliest embryonic divisions, can form any cell type in the body as well as extra-embryonic tissues like the placenta. **Pluripotent** cells, found in the inner cell mass of the blastocyst a few days after fertilisation, can form any of the body's cell types but can no longer produce extra-embryonic tissue or develop into a full organism on their own. **Multipotent** cells, such as the stem cells found in adult bone marrow, are restricted to a limited range of related cell types within a particular tissue lineage.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stem cells diagram.png",
      imageCaption: "Potency decreases as development proceeds: totipotent cells can form any tissue, pluripotent cells any body cell type, and multipotent cells only a limited range within one lineage."
    },
    {
      label: "B2.3.3",
      heading: "Stem cell niches",
      level: "SL",
      text: "A **stem cell niche** is a specific microenvironment within a tissue where stem cells are maintained in an undifferentiated, self-renewing state, protected from the signals that would otherwise trigger differentiation. The niche typically involves supporting cells, signalling molecules, and physical contact that together keep the stem cell population stable over an organism's lifetime.\n\nBone marrow houses the niche for haematopoietic stem cells, which continuously divide and differentiate to replace the body's blood cells, since red blood cells, white blood cells, and platelets all have limited lifespans and must be constantly renewed. Hair follicles contain a separate niche near the base of the follicle, where stem cells periodically activate to regenerate the hair shaft and, when needed, help repair the surrounding skin."
    },
    {
      label: "B2.3.4 / B2.3.5",
      heading: "Cell size and the surface area to volume ratio",
      level: "SL",
      text: "Specialised human cells vary enormously in size, from red blood cells around 7 micrometres across, to a motor neuron whose cell body might be 20 micrometres wide but whose axon can extend over a metre. This variation is not incidental, it reflects the different physical constraints each cell type must work within.\n\nAs a cell increases in size, its volume grows faster than its surface area (volume scales with the cube of a linear dimension, surface area only with the square). This means that larger cells have a lower **surface area to volume ratio**, which limits how efficiently a cell can exchange materials, oxygen, nutrients, wastes, and signalling molecules, with its surroundings, since all of that exchange happens across the cell's surface but has to keep pace with the demands of its entire volume. Cells that rely heavily on rapid exchange with their environment are therefore under selective pressure to stay small or to adopt shapes that increase their effective surface area."
    },
    {
      label: "B2.3.6",
      heading: "Adaptations that increase surface area to volume ratio",
      level: "SL",
      text: "Several structural adaptations allow a cell to increase its surface area without a proportional increase in volume. **Flattening** is one strategy: red blood cells are biconcave discs rather than spheres, which maximises the surface available for gas exchange while keeping the diffusion distance to the cell's interior short.\n\n**Microvilli**, finger-like folds of the plasma membrane, are another. Cells lining the small intestine and the proximal convoluted tubule of the kidney are both covered in dense microvilli, dramatically increasing the membrane area available for absorption within a small overall cell footprint.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Blausen 0425 Erythrocyte.png",
      imageCaption: "The biconcave shape of a red blood cell increases its surface area to volume ratio for gas exchange."
    },
    {
      label: "B2.3.7",
      heading: "Structural adaptations in lung, heart, muscle, and gonad cells",
      level: "SL",
      text: "The alveoli of the lungs are lined by two distinct cell types. **Type I pneumocytes** are extremely thin and flattened, minimising the diffusion distance for oxygen and carbon dioxide and maximising the surface area available for gas exchange. **Type II pneumocytes** are fewer in number but structurally distinct, packed with the secretory machinery needed to produce **surfactant**, a substance that reduces surface tension inside the alveoli and prevents them from collapsing between breaths.\n\n**Cardiac muscle cells** are adapted for constant, rhythmic contraction: they are packed with mitochondria to meet a very high, continuous energy demand, and are connected to neighbouring cells by intercalated discs, which allow electrical signals to pass rapidly from cell to cell so the heart contracts as a coordinated unit. **Striated skeletal muscle fibres** are unusually long, multinucleated cells, formed by the fusion of many individual cells during development, packed with contractile protein filaments.\n\nThe **gametes** show perhaps the most extreme specialisation of all. A **sperm cell** is streamlined, with a flagellum for propulsion, a high density of mitochondria along its midpiece to power that movement, and an acrosome containing enzymes to penetrate the egg's outer layers. An **egg cell**, by contrast, is one of the largest cells in the body, packed with cytoplasm, organelles, and nutrient reserves to support the earliest stages of development after fertilisation, before the embryo can obtain nutrients any other way."
    }
  ],

  "D2.2": [
    {
      label: "D2.2.1",
      heading: "Gene expression links genotype to phenotype",
      level: "HL",
      text: "**Gene expression** is the process by which the information encoded in a gene is converted into an effect on the organism's phenotype, most often by producing a protein through transcription and translation. Every cell in a multicellular organism carries the same genome, but cells differ enormously in structure and function because they express different subsets of that genome. A liver cell and a neuron contain identical DNA, yet look and behave completely differently because of which genes are switched on, and to what degree, in each of them.\n\nDistinguishing three related terms helps make this precise. The **genome** is the complete set of genes an organism carries. The **transcriptome** is the set of genes actually transcribed into mRNA in a given cell at a given time, a much smaller subset that varies from cell to cell and moment to moment. The **proteome** is the full set of proteins a cell produces, which is smaller still, since not every mRNA transcript is translated, and a single gene can sometimes give rise to more than one protein product."
    },
    {
      label: "D2.2.2",
      heading: "Regulating transcription",
      level: "HL",
      text: "Whether a gene is transcribed depends heavily on proteins that bind to specific base sequences in the DNA near that gene. **Transcription factors** bind to regulatory sequences and either promote or block the assembly of the transcription machinery at the gene's promoter. **Activators** bind to enhancer sequences and increase the rate of transcription, often by helping recruit RNA polymerase to the promoter. **Repressors** bind to silencer sequences and block transcription, either by physically obstructing RNA polymerase or by interfering with the activators.\n\nBecause a single transcription factor can regulate many different genes, and a single gene can be controlled by several different transcription factors acting together, this system allows a small number of regulatory proteins to produce highly specific, combinatorial patterns of gene expression across different cell types."
    },
    {
      label: "D2.2.3",
      heading: "Regulating translation through mRNA degradation",
      level: "HL",
      text: "Gene expression can also be controlled after transcription, by regulating how long an mRNA molecule survives before it is broken down. Most eukaryotic mRNAs carry a **poly-A tail**, a long stretch of adenine nucleotides added to their 3' end, which protects the transcript from enzymes that degrade RNA. Over time, this tail is gradually shortened, and once it falls below a critical length, the mRNA becomes vulnerable to rapid degradation by nucleases.\n\nBecause a longer-lived mRNA is translated more times before it is destroyed, controlling the rate of poly-A tail shortening is an effective way for a cell to control how much protein a given gene ultimately produces, independent of how much transcription occurred in the first place."
    },
    {
      label: "D2.2.4 / D2.2.5",
      heading: "Epigenesis and the genome, transcriptome, proteome",
      level: "HL",
      text: "**Epigenesis** describes how differentiated cell types arise during development, not through changes to the DNA sequence, but through stable, heritable patterns of gene expression that are established and then maintained through subsequent cell divisions. A skin cell and a neuron both keep the genes for making the other cell type present in their genome, but those genes are epigenetically locked into an 'off' state.\n\nThis is exactly why the genome, transcriptome, and proteome differ between cell types even though the underlying DNA sequence is identical throughout the body. The genome is fixed and shared. The transcriptome and proteome are cell-type specific, shaped by the pattern of epigenetic marks and transcription factor activity unique to that cell's developmental history."
    },
    {
      label: "D2.2.6",
      heading: "Methylation as an epigenetic tag",
      level: "HL",
      text: "**DNA methylation**, the addition of a methyl group to a cytosine base, most often in the promoter region of a gene, is one of the best-studied **epigenetic tags**. Heavy methylation of a promoter typically silences the associated gene, since methylated DNA tends to bind proteins that compact the surrounding chromatin, making it physically inaccessible to the transcription machinery.\n\n**Histones**, the proteins around which DNA is wound to form nucleosomes, can also be chemically tagged, for instance by methylation or acetylation. These modifications alter how tightly the DNA is packaged: some loosen the chromatin and make genes more accessible, effectively switching them on, while others compact it and switch genes off. Both DNA methylation and histone modification are ways of regulating gene expression without altering the base sequence itself."
    },
    {
      label: "D2.2.7",
      heading: "Epigenetic inheritance",
      level: "HL",
      text: "Epigenetic tags are not always erased between generations. When a pattern of methylation or histone modification is copied along with the DNA during cell division, or in some cases passed from parent to offspring through the gametes, this is called **epigenetic inheritance**: a heritable change in gene expression that occurs without any change to the underlying DNA sequence.\n\nEpigenetic inheritance is distinct from genetic inheritance because it can, in principle, be influenced by an individual's environment or life experience, and because epigenetic tags can in some cases be reversed, unlike mutations to the DNA sequence itself."
    },
    {
      label: "D2.2.8",
      heading: "Environmental effects on gene expression",
      level: "HL",
      text: "External environmental factors can alter a cell's epigenetic tags and, through them, its pattern of gene expression. Exposure to air pollution, for example, has been linked to altered methylation patterns in genes associated with immune system regulation, one proposed mechanism by which long-term exposure to polluted air can increase susceptibility to respiratory and inflammatory conditions.\n\nOther documented environmental influences on gene expression include diet, chemical toxins, and even psychological stress, all of which can shift epigenetic marks and therefore change which genes are actively expressed, without altering the DNA sequence itself."
    },
    {
      label: "D2.2.9",
      heading: "Reprogramming and imprinting in gametes",
      level: "HL",
      text: "During the formation of sperm and egg cells, most of the epigenetic tags accumulated in the parent's somatic cells are erased and reset, a process called **reprogramming**, which allows the resulting embryo to begin development with the full totipotent potential of a zygote rather than inheriting the restricted, cell-type-specific expression pattern of the parent's own tissues.\n\nHowever, this erasure is not complete. A small number of genes retain their epigenetic tags through this reprogramming process in a phenomenon called **genomic imprinting**, meaning the gene is expressed from only one parental copy, either the maternally or paternally inherited allele, depending on the gene. The genes that escape reprogramming are thought to play particularly important roles in early embryonic and placental development, though the incomplete removal of epigenetic tags from gametes is also one of the mechanisms proposed to underlie the epigenetic inheritance described in D2.2.7."
    }
  ],
  "D1.3": [
    {
      label: "D1.3.1",
      heading: "Gene mutations as structural changes to DNA",
      level: "SL",
      text: "A **gene mutation** is a change in the base sequence of DNA. Mutations range in scale from a change to a single nucleotide up to changes affecting large stretches of a chromosome, but D1.3 focuses on mutations at the small, molecular scale. Three basic types occur at this level: a **substitution** replaces one nucleotide with another without changing the overall length of the sequence; an **insertion** adds one or more extra nucleotides into the sequence; and a **deletion** removes one or more nucleotides from it.\n\nMutations can arise in any cell. A **somatic mutation**, occurring in a body cell, affects only the tissue descended from that cell during the individual's own lifetime and is not passed to offspring. A **germline mutation**, occurring in a cell that gives rise to gametes, can be inherited by the next generation."
    },
    {
      label: "D1.3.2",
      heading: "Consequences of base substitutions",
      level: "SL",
      text: "Because the genetic code is degenerate, meaning most amino acids are specified by more than one codon, a substitution does not always change the resulting protein. A **silent mutation** changes a codon but not the amino acid it specifies, often because the change falls on the third, most flexible position of the codon, so the protein produced is identical and the mutation has no effect on phenotype.\n\nA **missense mutation** changes a codon into one that specifies a different amino acid. The effect on the protein ranges from negligible, if the new amino acid has similar chemical properties and sits away from any functionally critical region, to severe, if it disrupts the protein's folding or active site (as in sickle cell disease, where a single missense mutation changes the shape and behaviour of haemoglobin). A **nonsense mutation** changes a codon that specified an amino acid into a stop codon, causing translation to end prematurely and usually producing a severely truncated, non-functional protein."
    },
    {
      label: "D1.3.3",
      heading: "Consequences of insertions and deletions",
      level: "SL",
      text: "Because mRNA is read in non-overlapping triplets, inserting or deleting a number of nucleotides that is not a multiple of three shifts the **reading frame** for every codon downstream of the mutation. This **frameshift** scrambles the amino acid sequence from that point onward and very often introduces a premature stop codon, typically producing a completely non-functional protein, since almost the entire downstream sequence is altered.\n\nInsertions or deletions of exactly three nucleotides, or a multiple of three, do not shift the reading frame; instead, they simply add or remove one or more amino acids from the protein while leaving the rest of the sequence intact. The effect of this is usually less catastrophic than a frameshift, though it can still disrupt protein folding or function depending on which amino acids are affected."
    },
    {
      label: "D1.3.4 / D1.3.5",
      heading: "Causes and locations of mutation",
      level: "SL",
      text: "Mutations arise from two main sources. **Errors during DNA replication or repair** occur spontaneously, for instance when DNA polymerase inserts an incorrect base and that error escapes proofreading. **Mutagens**, external physical or chemical agents such as ultraviolet radiation, ionising radiation, and certain chemicals including some found in tobacco smoke, increase the rate at which such errors occur by directly damaging DNA or interfering with accurate replication.\n\nMutations can occur anywhere in the genome, in coding sequences that specify proteins, in regulatory sequences that control gene expression, or in the much larger stretches of non-coding DNA. A mutation's location strongly influences its consequences: one falling in a critical coding region is far more likely to have a significant phenotypic effect than one falling in non-coding DNA with no regulatory role."
    },
    {
      label: "D1.3.6",
      heading: "Somatic versus germline mutations",
      level: "SL",
      text: "A mutation in a somatic cell affects only the tissue that develops from that cell through subsequent mitotic divisions, and its effects, whether harmless or harmful, such as certain cancers, die with the individual rather than passing to the next generation. A mutation in a germline cell, by contrast, can be incorporated into a gamete and passed on at fertilisation, becoming present in every cell of the resulting offspring, and potentially in that offspring's own descendants."
    },
    {
      label: "D1.3.7",
      heading: "Mutation as the source of genetic variation",
      level: "SL",
      text: "Gene mutation is the ultimate, original source of all genetic variation. Other processes that generate variation within a population, such as the independent assortment and crossing over that occur during meiosis, only reshuffle existing alleles into new combinations; they cannot create an allele that did not already exist somewhere in the gene pool. Only mutation can do that.\n\nMost mutations are neutral or mildly harmful to the individual that carries them, since organisms are already reasonably well adapted to their environment, and a random change is more likely to disrupt than to improve a functioning system. Nonetheless, over the long term and across a population, mutation is essential: it is the process that continually introduces the raw genetic variation on which natural selection can act, without which evolution could not occur."
    },
    {
      label: "D1.3.8",
      heading: "Gene knockout",
      level: "HL",
      text: "**Gene knockout** is a laboratory technique used to investigate a gene's function by deliberately disabling it, most often by introducing mutations that prevent the gene from being expressed or from producing a functional protein. Researchers then compare the knockout organism to a normal individual and infer the gene's role from whatever traits or processes are disrupted in its absence.\n\nKnockout studies are one of the most direct ways of establishing what a specific gene actually does, since observing the consequences of its absence is often more informative than studying the gene's sequence alone."
    },
    {
      label: "D1.3.9",
      heading: "CRISPR-Cas9 gene editing",
      level: "HL",
      text: "**CRISPR-Cas9** is a gene editing system adapted from a natural bacterial defence mechanism, in which bacteria store short fragments of viral DNA from past infections and use them to recognise and destroy that virus's DNA if it is encountered again. In the laboratory, this system has been repurposed: a guide RNA is designed to match a specific target sequence in a genome, directing the **Cas9** enzyme to that exact location, where it cuts both strands of the DNA.\n\nOnce cut, the cell's own repair machinery can be exploited to disable the gene, correct a faulty sequence, or insert a new one, giving researchers a comparatively precise, efficient, and low-cost way to edit specific genes. Applications range from basic research into gene function to the correction of disease-causing mutations, though the technology also raises ethical questions, particularly around edits made to human germline cells, which would be inherited by future generations.",
      tip: { label: "Exam tip", text: "Be able to state that CRISPR-Cas9 originally functions as a bacterial immune system against viruses (bacteriophages), before being adapted into a gene editing tool." }
    },
    {
      label: "D1.3.10",
      heading: "Conserved sequences",
      level: "HL",
      text: "Some stretches of DNA remain almost identical across many species or over very long evolutionary timescales, a pattern known as **sequence conservation**. Two hypotheses account for this. First, if a sequence codes for a protein or RNA molecule that is functionally essential, mutations affecting it are very likely to be harmful and are removed by natural selection, so the sequence changes only very slowly across generations. Second, some regions may simply mutate at an inherently lower rate than the rest of the genome, for reasons connected to how tightly they are packaged or how actively they are repaired, allowing them to remain similar even without especially strong selective pressure.\n\nHighly conserved sequences are of particular interest to biologists because their persistence across such vast evolutionary distances is itself strong evidence that they perform some indispensable function."
    }
  ],

  "D3.1": [
    {
      label: "D3.1.1",
      heading: "Sexual versus asexual reproduction",
      level: "SL",
      text: "**Asexual reproduction** involves a single parent producing offspring that are genetically identical to that parent (aside from any new mutations), through mitotic division. It is fast and requires no mate, but produces little to no genetic variation among offspring.\n\n**Sexual reproduction** involves two parents, each contributing gametes formed by meiosis, which fuse at fertilisation to form a genetically unique offspring carrying a combination of both parents' alleles. It is slower and more costly, since it requires finding a mate, but the genetic variation it generates gives populations a greater capacity to adapt to changing conditions over time."
    },
    {
      label: "D3.1.2",
      heading: "Meiosis and the generation of variation",
      level: "SL",
      text: "Meiosis is the process that produces haploid gametes from a diploid parent cell, and in doing so it generates genetic variation in two distinct ways. **Independent assortment** describes how homologous chromosome pairs line up and separate randomly during meiosis I, so that each gamete receives an essentially random mixture of maternal and paternal chromosomes. **Crossing over**, the exchange of segments between homologous chromosomes earlier in meiosis, further shuffles alleles within individual chromosomes, so that even chromosomes inherited together are not exact copies of either parent's original chromosome. Together, these mechanisms mean that, aside from identical twins, no two gametes, and no two offspring of the same parents, are genetically identical."
    },
    {
      label: "D3.1.3 / D3.1.4 / D3.1.5",
      heading: "The male and female reproductive systems",
      level: "SL",
      text: "The **testes** produce sperm cells and testosterone; sperm mature and are stored in the **epididymis** before travelling through the **vas deferens** during ejaculation, picking up secretions from the seminal vesicles and prostate gland that together form semen, and exit through the **urethra**, which runs through the **penis**.\n\nThe **ovaries** produce egg cells and the hormones oestrogen and progesterone. Roughly monthly, a single egg is released from an ovary during ovulation and enters the **fallopian tube** (oviduct), where fertilisation normally occurs if sperm are present. The fertilised egg then travels to the **uterus**, whose inner lining, the endometrium, thickens each cycle to potentially support a pregnancy; if no pregnancy occurs the lining breaks down and is shed through the **cervix** and **vagina** as menstruation.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Female reproductive system lateral nolabel.png",
      imageCaption: "The main structures of the human female reproductive system."
    },
    {
      label: "D3.1.6",
      heading: "Hormonal regulation of the menstrual cycle",
      level: "HL",
      text: "The **menstrual cycle** is coordinated by four hormones acting in a feedback loop between the pituitary gland and the ovaries. **Follicle-stimulating hormone (FSH)**, released by the pituitary, stimulates several ovarian follicles to begin developing, and one dominant follicle matures fully. As it develops, the follicle secretes rising levels of **oestrogen**, which thickens the endometrium in preparation for a possible pregnancy and, once it reaches a high enough level, triggers a sharp surge in **luteinising hormone (LH)** from the pituitary.\n\nThis LH surge triggers **ovulation**, the release of the egg from the follicle. The ruptured follicle then transforms into the **corpus luteum**, which secretes **progesterone**, maintaining and further thickening the endometrium. If fertilisation does not occur, the corpus luteum degenerates, progesterone levels fall, and the endometrium is shed as menstruation, after which the cycle begins again."
    },
    {
      label: "D3.1.7",
      heading: "The sequence of events leading to fertilisation",
      level: "HL",
      text: "Following ejaculation, sperm travel from the vagina, through the cervix and uterus, and into the fallopian tube, aided by their own flagellar movement and by contractions of the female reproductive tract. Only a small fraction of the many millions of sperm released ever reach the vicinity of the egg. When a sperm encounters the egg, enzymes released from its **acrosome** help it digest a path through the egg's outer layers.\n\nOnce a single sperm fuses with the egg's plasma membrane, the egg triggers a rapid change in that membrane that acts as a fast block to prevent additional sperm from entering, ensuring the resulting zygote receives only one set of paternal chromosomes. The nuclei of the sperm and egg then fuse, restoring the diploid chromosome number and completing fertilisation."
    },
    {
      label: "D3.1.8",
      heading: "The role of hormones in IVF",
      level: "HL",
      text: "**In vitro fertilisation (IVF)** relies on hormones to precisely control the timing and scale of egg production. First, drugs are used to suspend the woman's normal hormonal cycle, giving doctors full control over its timing. Next, injections of FSH and LH at levels well above those of a natural cycle are given to induce **superovulation**, causing multiple follicles to mature simultaneously rather than the single follicle of a typical cycle.\n\nThe resulting mature eggs are then surgically collected and fertilised with sperm in laboratory conditions, and one or more of the resulting embryos are transferred into the uterus, timed to coincide with the point in the cycle when the endometrium is most receptive to implantation."
    }
  ],
  "D3.2": [
    {
      label: "D3.2.1",
      heading: "Gametes and the diploid zygote",
      level: "SL",
      text: "Every gene that a diploid organism carries is present in two copies, one on each of a pair of homologous chromosomes. During meiosis, each parent produces **haploid gametes** carrying only a single copy of each gene. At fertilisation, a haploid sperm and a haploid egg fuse to form a **diploid zygote**, which therefore carries two copies of every gene, one inherited from each parent. This pattern, halving the chromosome number in gametes and restoring it at fertilisation, is common to essentially all eukaryotes with a sexual life cycle, and it is the fundamental mechanism by which traits are passed from parents to offspring."
    },
    {
      label: "D3.2.2",
      heading: "Genetic crosses in flowering plants",
      level: "SL",
      text: "Many flowering plants, such as garden peas, produce both male gametes (in pollen) and female gametes (in the ovary) on the same individual, which allows self-pollination as well as cross-pollination between two different plants. Geneticists use standard terms to track a cross across generations: the **P generation** is the initial pair of parents, the **F1 generation** is their first-generation offspring, and the **F2 generation** arises from crossing (or self-pollinating) the F1 individuals.\n\nA **Punnett grid** is used to predict the genotypes and phenotypes expected among the offspring of a particular cross, by laying out all possible combinations of the gametes each parent can produce."
    },
    {
      label: "D3.2.3 / D3.2.4",
      heading: "Genotype and phenotype",
      level: "SL",
      text: "An organism's **genotype** is the specific combination of alleles it has inherited for a given gene or set of genes. Its **phenotype** is the observable trait or characteristic that results, which depends not only on genotype but also, in many cases, on environmental factors. Two individuals with the same genotype for a gene can, in some circumstances, show different phenotypes if they experience different environments during development, which is why phenotype is best understood as the product of genotype and environment together, not genotype alone."
    },
    {
      label: "D3.2.5",
      heading: "Dominant and recessive alleles",
      level: "SL",
      text: "When two different alleles of a gene are present in a diploid organism, the effect they have on phenotype depends on their relationship. A **dominant allele** produces its associated phenotype whenever it is present, whether the organism is homozygous or heterozygous for it. A **recessive allele** only produces its associated phenotype when present in two copies (homozygous), because a single dominant allele is usually enough to mask its effect in a heterozygote."
    },
    {
      label: "D3.2.6",
      heading: "Phenotypic plasticity",
      level: "SL",
      text: "**Phenotypic plasticity** is the capacity of a single genotype to produce different phenotypes depending on the environment it develops in, achieved through varying patterns of gene expression rather than any change to the DNA sequence itself. A well-known example is temperature-dependent fur colouring in Himalayan rabbits and Siamese cats, where an enzyme involved in pigment production only functions properly at the cooler temperatures found at the extremities, producing dark fur on the ears, nose, paws, and tail while the warmer body remains pale."
    },
    {
      label: "D3.2.7",
      heading: "Phenylketonuria as a recessive genetic disease",
      level: "SL",
      text: "**Phenylketonuria (PKU)** is a human genetic disease caused by a recessive allele for the gene coding for the enzyme that normally breaks down the amino acid phenylalanine. Individuals homozygous for the recessive allele cannot break this amino acid down properly, so it accumulates to toxic levels, which can cause serious intellectual disability if untreated. Because the condition is recessive, most newborn screening programmes test for it at birth, since a strict, phenylalanine-controlled diet started early in life can prevent the harmful effects almost entirely."
    },
    {
      label: "D3.2.8",
      heading: "SNPs and multiple alleles in gene pools",
      level: "SL",
      text: "Although a single individual can only carry a maximum of two alleles of any one gene, a population's **gene pool** can contain many more than two alleles for that gene, since different mutations can arise independently at different points in a population's history. A **single-nucleotide polymorphism (SNP)** is one of the most common sources of this variation: a difference at a single base position in the DNA sequence, found at millions of locations across the human genome, most with no noticeable effect on phenotype, but some of which contribute to differences between individuals."
    },
    {
      label: "D3.2.9",
      heading: "ABO blood groups: multiple alleles",
      level: "SL",
      text: "The human **ABO blood group** system is a clear real-world example of multiple alleles at a single gene. Three alleles exist in the population: I^A, which produces the A antigen on red blood cells; I^B, which produces the B antigen; and i, which produces no antigen. Since each individual only inherits two of these three possible alleles, this single gene can produce four different blood group phenotypes (A, B, AB, and O) depending on which two alleles are combined."
    },
    {
      label: "D3.2.10",
      heading: "Incomplete dominance and codominance",
      level: "SL",
      text: "Not all pairs of alleles show a simple dominant-recessive relationship. In **incomplete dominance**, the heterozygote shows a phenotype intermediate between the two homozygous phenotypes, as in the four o'clock flower, where a cross between red-flowered and white-flowered plants produces pink-flowered heterozygotes, since one allele alone produces only a partial amount of pigment.\n\nIn **codominance**, both alleles are fully and simultaneously expressed in the heterozygote's phenotype, rather than blending together. The AB blood type is the clearest example: a person with genotype I^A I^B expresses both the A and the B antigen on their red blood cells at once, rather than some intermediate antigen."
    },
    {
      label: "D3.2.11 / D3.2.12",
      heading: "Sex determination and haemophilia",
      level: "SL",
      text: "In humans, biological sex is determined by the **X and Y sex chromosomes**: individuals with two X chromosomes typically develop as female, and individuals with one X and one Y typically develop as male. Since sperm can carry either an X or a Y chromosome while eggs always carry an X, it is the sperm that determines the sex chromosome combination of the offspring.\n\nGenes carried on the X chromosome show a distinctive, **sex-linked** pattern of inheritance, since males only have a single copy of most X-linked genes and therefore express whatever allele that single copy carries, with no second copy to mask it. **Haemophilia**, a disorder in which blood fails to clot properly, is caused by a recessive allele on the X chromosome, which is why it is far more common in males, who need only inherit one copy of the allele to be affected, than in females, who would need to inherit it from both parents."
    },
    {
      label: "D3.2.13",
      heading: "Pedigree charts",
      level: "SL",
      text: "A **pedigree chart** is a diagram showing the presence or absence of a particular trait across the generations of a family, using standard symbols for males, females, affected individuals, and carriers. By tracing which family members do and do not show a trait, geneticists can often deduce whether the underlying allele is dominant or recessive, and whether the gene is autosomal or sex-linked, which is particularly useful for studying human genetic disorders where controlled breeding experiments are not possible."
    },
    {
      label: "D3.2.14 / D3.2.15",
      heading: "Continuous variation and box-and-whisker plots",
      level: "SL",
      text: "Traits controlled by a single gene with two clearly distinct alleles, such as ABO blood group, tend to show **discrete variation**, falling into a small number of separate categories. Many other traits, such as human height or skin colour, instead show **continuous variation**, forming an unbroken range of values across a population. This pattern typically arises because the trait is **polygenic**, controlled by the combined, additive effect of many genes, often further influenced by environmental factors.\n\n**Box-and-whisker plots** are commonly used to represent continuous data of this kind, since they summarise the spread and central tendency of a data set (the median, the interquartile range, and the overall range) in a single, compact diagram, making it easy to compare distributions such as the height of students in different age groups."
    },
    {
      label: "D3.2.16",
      heading: "Segregation and independent assortment of unlinked genes",
      level: "HL",
      text: "Genes located on different chromosomes are described as **unlinked**. During meiosis I, each homologous chromosome pair separates independently of every other pair, since their orientation on the metaphase plate is random. As a result, the alleles of unlinked genes segregate into gametes independently of one another, meaning the combination of alleles a gamete receives for one gene has no bearing on which alleles it receives for a gene on a different chromosome. This is the chromosomal basis for what is often called the law of independent assortment."
    },
    {
      label: "D3.2.17",
      heading: "Dihybrid crosses",
      level: "HL",
      text: "A **dihybrid cross** tracks the inheritance of two unlinked genes simultaneously. Because each gene has two alleles and the genes assort independently, a heterozygote for both genes can produce four different combinations of gametes in equal proportions. Laying these out in a Punnett grid for a cross between two double heterozygotes produces the classic 9:3:3:1 ratio of phenotypes among the offspring, a signature pattern that confirms two genes are unlinked and each showing straightforward dominant-recessive inheritance."
    },
    {
      label: "D3.2.18",
      heading: "Gene loci and their polypeptide products",
      level: "HL",
      text: "Each gene occupies a specific, fixed position, or **locus**, on a particular chromosome, and this locus is the same in every individual of a species, even though the specific allele present at that locus can vary between individuals. Modern genome mapping has identified the chromosomal locus of thousands of human genes and linked many of them to the specific polypeptide product they encode, work that underpins the diagnosis of genetic disease, genetic counselling, and ongoing research into gene function."
    }
  ],
  "A3.1": [
    {
      label: "A3.1.1",
      heading: "Variation as a defining feature of life",
      level: "SL",
      text: "No two individuals, even members of the same species, are identical in every trait. This **variation** is one of the defining features of life itself, and the patterns it forms are complex, shaped by genetic differences, environmental influences, and the interaction between the two. Far from being incidental, variation is precisely what makes it possible to name, group, and classify organisms in the first place, since classification depends on identifying which differences and similarities are consistent enough to define meaningful categories."
    },
    {
      label: "A3.1.2 / A3.1.3",
      heading: "Species and binomial nomenclature",
      level: "SL",
      text: "The original, morphological concept of a **species**, going back to the eighteenth-century naturalist Carl Linnaeus, defines it as a group of organisms sharing a set of common traits. Linnaeus also introduced the **binomial system** still used today, in which every species is given a two-part scientific name: the first part identifies the **genus**, a group of closely related species, and is capitalised, while the second, lower-case part distinguishes that particular species within the genus, as in Homo sapiens. Species within the same genus tend to share many structural and biochemical similarities, reflecting their closer evolutionary relationship."
    },
    {
      label: "A3.1.4 / A3.1.5",
      heading: "The biological species concept and its limits",
      level: "SL",
      text: "The **biological species concept** defines a species as a group of organisms that can interbreed with one another under natural conditions to produce fertile offspring, and that are reproductively isolated from other such groups. This definition works well for many sexually reproducing organisms, but drawing a firm boundary is not always straightforward: as populations diverge from a common ancestor during speciation, there is often a lengthy intermediate period during which it is genuinely ambiguous whether two increasingly distinct populations should be classified as one species or two, since the point at which interbreeding becomes impossible is rarely a single, sharp moment in time."
    },
    {
      label: "A3.1.6 / A3.1.7",
      heading: "Chromosome number, karyotyping, and karyograms",
      level: "SL",
      text: "The number of chromosomes carried by a diploid cell varies between species but is characteristic of that species, and, because chromosomes are inherited in homologous pairs, this number is always even. Humans have 46 chromosomes, while chimpanzees, our closest living relatives, have 48, the difference having arisen from the fusion of two ancestral chromosomes at some point in human evolutionary history.\n\n**Karyotyping** is the technique of investigating and classifying the chromosomes present in a cell by their number, length, banding pattern, and the position of the centromere. The resulting organised visual display, arranged by size and pairing, is called a **karyogram**, and it is used both to study chromosome number diversity between species and to detect chromosomal abnormalities in individuals.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Human karyogram.svg",
      imageCaption: "A human karyogram: the 23 pairs of chromosomes arranged and matched by size and banding pattern."
    },
    {
      label: "A3.1.8 / A3.1.9 / A3.1.10",
      heading: "Unity and diversity of genomes",
      level: "SL",
      text: "The **genome** is the entire set of genetic information carried by an organism. Comparing genomes across species reveals both striking unity and striking diversity. All living things share the same basic genetic code and many of the same core genes for fundamental processes like respiration and protein synthesis, evidence of a shared evolutionary origin, but the size and organisation of genomes differ enormously between species.\n\nAmong eukaryotes in particular, genome size does not correlate neatly with an organism's apparent complexity, some amphibians and plants have genomes many times larger than the human genome, largely due to differences in the amount of non-coding DNA they carry, a pattern sometimes called the C-value paradox."
    },
    {
      label: "A3.1.11",
      heading: "Uses of whole genome sequencing",
      level: "SL",
      text: "**Whole genome sequencing**, determining the complete DNA sequence of an organism, has become dramatically faster and cheaper since the Human Genome Project was completed in 2003. Current applications include diagnosing genetic diseases, guiding personalised approaches to medical treatment based on an individual's genetic profile, tracking the transmission and evolution of infectious pathogens, and reconstructing evolutionary relationships between species. Potential future uses being actively explored include more comprehensive personalised medicine, conservation genetics for endangered species, and better understanding of the genetic basis of complex traits."
    },
    {
      label: "A3.1.12",
      heading: "Difficulties applying the biological species concept",
      level: "HL",
      text: "The biological species concept relies on the idea of interbreeding, but this becomes difficult to apply to organisms that do not reproduce sexually. Asexually reproducing species, such as many bacteria, produce offspring by simple division rather than by interbreeding, so the concept's central criterion simply does not apply to them, and other criteria, most often genetic or morphological similarity, must be used instead to delineate species.\n\nBacteria complicate matters further through **horizontal gene transfer**, the movement of genetic material between organisms other than by reproduction, for instance through the uptake of free DNA or the exchange of plasmids. This means genes can move between what would otherwise be considered separate bacterial species, blurring species boundaries in a way that has no real parallel in most sexually reproducing eukaryotes."
    },
    {
      label: "A3.1.13 / A3.1.14",
      heading: "Chromosome number as a trait, and dichotomous keys",
      level: "SL",
      text: "Because chromosome number is generally consistent within a species, it can itself be used as one line of evidence when investigating whether a group of organisms belongs to a single species or several, alongside other structural and genetic criteria.\n\nA **dichotomous key** is a practical identification tool built from a series of paired statements, each offering two mutually exclusive choices about an organism's observable features, leading step by step to its identification. Constructing a dichotomous key for a set of local plant or animal species requires first identifying which specific, reliably distinguishing features separate them."
    },
    {
      label: "A3.1.15",
      heading: "Identifying species from environmental DNA",
      level: "SL",
      text: "**Environmental DNA (eDNA)** consists of genetic material shed by organisms into their surroundings, in skin cells, waste, or other biological material present in soil, water, or air. By collecting environmental samples and comparing the DNA sequences found within them, using short, standardised reference sequences called **DNA barcodes**, researchers can detect which species are present in a habitat without needing to directly observe or capture any individual organism, a technique that has become an increasingly important tool for biodiversity surveys, particularly for rare, elusive, or cryptic species."
    }
  ],

  "B4.1": [
    {
      label: "B4.1.1",
      heading: "Habitat",
      level: "SL",
      text: "A **habitat** is the place in which a community, species, population, or individual organism lives. A habitat can be described using a combination of physical characteristics, such as substrate type, temperature range, and water availability, and biological characteristics, such as the other species typically found there. The same broad habitat, a coral reef or a temperate forest, for instance, provides the physical and biological context within which many different, differently adapted species coexist."
    },
    {
      label: "B4.1.2",
      heading: "Adaptations to the abiotic environment",
      level: "SL",
      text: "An **adaptation** is an inherited trait that increases an organism's chance of survival and reproduction in its particular environment, having arisen through natural selection acting over many generations. **Marram grass**, a pioneer species of sand dune habitats, shows several such adaptations to the harsh abiotic conditions of loose, low-nutrient, drought-prone sand: rolled leaves that reduce water loss by protecting the stomata from wind, and an extensive, deep root and rhizome system that both draws up water from a wide area and stabilises the shifting sand around it.\n\n**Mangrove trees**, adapted to the coastal intertidal zone, face a very different challenge, tolerating salt water and waterlogged, low-oxygen sediment. Their adaptations include specialised roots that either exclude salt at the point of uptake or actively excrete it through glands on the leaves, and aerial roots or root projections that rise above the waterlogged mud to allow gas exchange with the atmosphere.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mangrove roots.jpg",
      imageCaption: "Mangrove roots exposed at low tide, adapted to waterlogged, saline sediment."
    },
    {
      label: "B4.1.3 / B4.1.4",
      heading: "Abiotic variables, species distribution, and range of tolerance",
      level: "SL",
      text: "Abiotic variables such as temperature, moisture, light, pH, and salinity all influence where a species can survive. Each species has a **range of tolerance** for any given abiotic factor: a band of values within which it can survive, often with an optimum somewhere near the middle of that range where individuals thrive best, and limits beyond which the species cannot persist at all.\n\nField ecologists commonly use a **transect**, a line laid across a habitat along which measurements are taken at regular intervals, combined with sensors and data loggers that record abiotic variables such as light intensity or soil moisture, to correlate the distribution of a species with the specific range of an abiotic factor it can tolerate."
    },
    {
      label: "B4.1.5",
      heading: "Conditions required for coral reef formation",
      level: "SL",
      text: "Coral reefs are restricted to a fairly narrow set of abiotic conditions. Reef-building corals require warm water, generally between about 23 and 29 degrees Celsius, clear water with low levels of suspended sediment so that sufficient sunlight can reach the photosynthetic algae living symbiotically within their tissues, and shallow depths, since that light must penetrate to where the coral lives. They also need a stable, hard substrate on which to establish themselves and normal, undiluted ocean salinity, which is why extensive reef systems are essentially confined to shallow tropical waters."
    },
    {
      label: "B4.1.6 / B4.1.7",
      heading: "Biomes and the abiotic factors that determine them",
      level: "SL",
      text: "A **biome** is a large-scale category of ecosystem, defined by its climate and by the characteristic type of vegetation and animal life it supports, examples include tropical rainforest, temperate grassland, and tundra. The distribution of terrestrial biomes across the planet is determined primarily by two abiotic factors, mean annual temperature and mean annual rainfall, and plotting these two variables against one another for locations around the world produces a fairly reliable predictor of which biome is likely to be found there.\n\nA biome is therefore best understood as a group of ecosystems, potentially located on entirely different continents, that share a similar climate and consequently support broadly similar communities of organisms, even where those communities are made up of entirely different, unrelated species."
    },
    {
      label: "B4.1.8",
      heading: "Convergent evolution across biomes",
      level: "SL",
      text: "Because widely separated regions of the same biome impose similar selection pressures, unrelated species living in them can independently evolve strikingly similar adaptations, a pattern called **convergent evolution**. A classic example is the similarity between cacti of the Americas and many euphorbias of Africa, both succulent, spine-covered plants adapted to hot desert conditions despite having evolved these traits along entirely separate evolutionary lineages.\n\nConvergent evolution is strong evidence for the power of natural selection: when the same environmental pressures act on different starting material, they tend to produce similar solutions, even in the complete absence of shared ancestry for that particular trait."
    }
  ],

  "D4.1": [
    {
      label: "D4.1.1",
      heading: "Natural selection as the driver of evolutionary change",
      level: "SL",
      text: "**Natural selection** is the process by which heritable traits that improve an organism's chances of survival and reproduction become more common in a population over successive generations, while traits that reduce those chances become less common. Acting continuously over billions of years, across the enormous diversity of environments and selection pressures found on Earth, natural selection is the central mechanism responsible for the biodiversity of life observed today."
    },
    {
      label: "D4.1.2",
      heading: "Generating the variation natural selection acts on",
      level: "SL",
      text: "Natural selection cannot operate without heritable variation to act upon; if every individual in a population were genetically identical, none would have any survival or reproductive advantage over any other, and there would be nothing for selection to favour. **Mutation** generates entirely new alleles, the ultimate original source of genetic variation, while **sexual reproduction**, through the independent assortment and crossing over of meiosis and the random fusion of gametes at fertilisation, continually reshuffles existing alleles into new combinations, further increasing the variation present within a population."
    },
    {
      label: "D4.1.3",
      heading: "Overproduction and competition",
      level: "SL",
      text: "Populations consistently produce more offspring than the environment can support with its limited food, space, and other resources, a pattern of **overproduction**. Because not every offspring can survive to reproduce, this overproduction leads to competition between individuals of the same species for those limited resources, providing the underlying pressure that makes differential survival and reproduction, and therefore natural selection, possible in the first place."
    },
    {
      label: "D4.1.4",
      heading: "Biotic and abiotic selection pressures",
      level: "SL",
      text: "A **selection pressure** is any environmental factor that causes some individuals in a population to survive and reproduce more successfully than others. Biotic selection pressures arise from interactions with other organisms, such as predation, competition for resources, or disease, while abiotic selection pressures arise from the non-living environment, such as extreme temperature, drought, or limited nutrient availability. Both types of pressure can act simultaneously on a population, and which pressures dominate often depends heavily on the specific habitat and season."
    },
    {
      label: "D4.1.5",
      heading: "Differential adaptation, survival, and reproduction",
      level: "SL",
      text: "Individuals within a population differ in how well their particular combination of traits suits them to their environment. Those differences in adaptation translate into differences in **fitness**, an individual's combined survival value (its likelihood of surviving to reproductive age) and reproductive potential (the number of offspring it is likely to produce). It is precisely this differential fitness among individuals, driven by intraspecific competition for the same limited resources, that forms the basis of natural selection."
    },
    {
      label: "D4.1.6",
      heading: "The requirement that traits be heritable",
      level: "SL",
      text: "For natural selection to cause lasting evolutionary change across generations, the traits it acts on must be **heritable**, encoded in an organism's DNA and passed on to offspring. Traits acquired during an individual's lifetime purely due to environmental factors, such as increased muscle mass from exercise, are not heritable in this sense, since they involve no change to the base sequence of the relevant genes, and so are not passed on to the next generation regardless of how strongly they might have benefited the individual that acquired them."
    },
    {
      label: "D4.1.7",
      heading: "Sexual selection",
      level: "SL",
      text: "**Sexual selection** is a special case of natural selection in which the selective advantage comes specifically from increased mating success rather than increased survival, and it can sometimes favour traits that are actively costly to survival. Brightly coloured plumage or elaborate courtship displays in many bird species are classic examples: these traits can make an individual more visible to predators, reducing its survival value, but if they succeed in attracting more mates, the resulting boost to reproductive success can outweigh that cost, so the trait persists and can even become exaggerated over generations."
    }
  ],

  "A4.1": [
    {
      label: "A4.1.1",
      heading: "Evolution as change in heritable characteristics",
      level: "SL",
      text: "**Evolution** is defined precisely as change in the heritable characteristics of a population over time. This definition deliberately excludes changes that are not genetic in origin, distinguishing Darwinian evolution from the earlier Lamarckian idea that characteristics acquired during an individual's lifetime, through use or disuse of a particular structure, could be passed directly to offspring. Modern genetics confirms that acquired characteristics are not heritable unless they somehow alter the base sequence of an organism's DNA.\n\nThe theory of evolution by natural selection is exceptionally well supported by an enormous body of independent evidence and has never been falsified despite being open, in principle, to falsification, a hallmark of a strong scientific theory even though, like any scientific theory, it cannot be formally proven true beyond all possible doubt."
    },
    {
      label: "A4.1.2 / A4.1.3",
      heading: "Molecular and selective-breeding evidence for evolution",
      level: "SL",
      text: "Comparing the base sequences of DNA or RNA, or the amino acid sequences of proteins, across different species provides powerful evidence for evolution: species that are more similar in these sequences are inferred to share a more recent common ancestor, while greater sequence differences indicate a more distant evolutionary relationship, allowing biologists to reconstruct evolutionary relationships with a level of precision unavailable from anatomy alone.\n\n**Selective breeding** of domesticated animals and crop plants offers a second, complementary line of evidence. Over many generations, breeders selecting for particular desirable traits have produced dramatic changes, unrelated dog breeds descending from a shared wolf ancestor, or modern maize's dramatic divergence in size and structure from its wild ancestor teosinte, showing that heritable variation can be reshaped substantially by selection acting over comparatively few generations, exactly the same underlying process that natural selection performs without human direction."
    },
    {
      label: "A4.1.4 / A4.1.5",
      heading: "Homologous and analogous structures",
      level: "SL",
      text: "**Homologous structures** share a similar underlying anatomical structure despite being adapted for different functions, evidence that they are inherited, with modification, from a shared ancestor. The **pentadactyl limb**, the five-digit limb pattern built from the same basic arrangement of bones, is found, in modified form, in the human arm, the bird wing, the bat wing, and the whale flipper, structures used for entirely different purposes but built from a common ancestral blueprint.\n\n**Analogous structures**, by contrast, perform a similar function but arise from entirely different evolutionary origins, the result of **convergent evolution** rather than shared ancestry. The wings of insects and the wings of birds serve the same function of flight but evolved completely independently, from unrelated ancestral structures, and are not homologous to one another.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Homology vertebrates-en.svg",
      imageCaption: "The pentadactyl limb pattern, modified for different functions across several vertebrate groups, is a classic example of homologous structures."
    },
    {
      label: "A4.1.6 / A4.1.7",
      heading: "Speciation as the origin of new species",
      level: "SL",
      text: "**Speciation** is the only process by which entirely new species arise; ordinary evolutionary change within a single, continuously interbreeding population, however substantial, is not by itself speciation. Speciation occurs when a population becomes divided in a way that prevents interbreeding, most commonly through a physical barrier, allowing each isolated portion to accumulate genetic differences independently until they are no longer capable of interbreeding even if reunited.\n\nA well-documented example is the divergence of bonobos and common chimpanzees, close relatives separated by the Congo River in Central Africa. Isolated on opposite banks, the two populations experienced different selection pressures and, over time, diverged into the two distinct species recognised today, illustrating both the geographic mechanism of separation and the ongoing accumulation of differences that speciation requires."
    },
    {
      label: "A4.1.8",
      heading: "Reproductive isolation and modes of speciation",
      level: "HL",
      text: "**Reproductive isolation**, the inability of two populations to successfully interbreed, is the essential precondition for speciation, and it can arise through several distinct mechanisms. **Geographic isolation** occurs when a physical barrier, a mountain range, river, or stretch of ocean, physically separates a population, preventing gene flow between the resulting groups; when this drives speciation it is called **allopatric speciation**. **Behavioural isolation** occurs when part of a population develops different mating behaviours, such as distinct courtship displays or songs, that prevent interbreeding with the rest of the population despite living in the same area. **Temporal isolation** occurs when populations become active or reproductively receptive at different times, so that mating opportunities between them simply do not arise. Speciation driven by mechanisms like these, occurring without any geographic separation, is called **sympatric speciation**."
    },
    {
      label: "A4.1.9",
      heading: "Adaptive radiation",
      level: "HL",
      text: "**Adaptive radiation** is the relatively rapid evolution of many new species from a single ancestral species, or a small number of them, typically occurring when a lineage encounters a wide range of vacant ecological niches, for instance after colonising a new island or following a mass extinction that clears out established competitors. Each descendant lineage adapts to exploit a different niche, allowing the closely related resulting species to coexist without directly competing for the same resources.\n\nDarwin's finches on the Galápagos Islands are the textbook example: a single ancestral finch species is thought to have colonised the islands and then radiated into more than a dozen distinct species, each with a beak shape adapted to a different food source, from cracking large seeds to probing for insects."
    },
    {
      label: "A4.1.10",
      heading: "Barriers to hybridisation",
      level: "HL",
      text: "Even closely related species that occupy overlapping ranges are typically prevented from interbreeding, or from producing viable, fertile offspring if they do interbreed, by one or more **barriers to hybridisation**. These can act before mating occurs, through differences in habitat, mating season, courtship behaviour, or the physical or chemical compatibility of gametes, or after mating, if a hybrid embryo fails to develop, or if it develops into a hybrid offspring that is weak, sterile, or otherwise unable to pass genes on effectively. Such barriers are precisely what maintains the genetic distinctness of related species that might otherwise interbreed given the opportunity."
    },
    {
      label: "A4.1.11",
      heading: "Hybridisation and polyploidy in speciation",
      level: "HL",
      text: "While reproductive isolation usually builds up gradually, some new species, particularly in plants, can arise essentially instantly through **hybridisation** combined with **polyploidy**. When two different species interbreed, the resulting hybrid often carries mismatched sets of chromosomes that cannot pair correctly during meiosis, making it sterile. However, if a chromosome-doubling error occurs in that hybrid, producing a cell with two complete matching sets of chromosomes from each parent species, the resulting **polyploid** offspring can undergo meiosis normally and is fertile, but is now reproductively isolated from both original parent species, since crossing back to either produces offspring with an uneven, unpairable chromosome number. This abrupt mechanism has been an important route to new species in the evolutionary history of many crop plants, including bread wheat."
    }
  ],
};
