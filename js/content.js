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
      label: "1",
      heading: "Why compartmentalise?",
      level: "SL",
      text: "**Compartmentalisation** is the division of a eukaryotic cell into separate membrane-bound regions, each with its own internal chemical environment. This matters because a cell runs many reactions simultaneously, including some that would interfere with each other, or need very different local conditions (such as pH or enzyme concentration), enclosing a set of enzymes and substrates within their own organelle keeps that reaction efficient and isolated from everything else happening in the cell."
    },
    {
      label: "2",
      heading: "The nucleus",
      level: "SL",
      text: "The nucleus is enclosed by a double membrane, the nuclear envelope, perforated by nuclear pores that regulate the movement of molecules (such as mRNA) between the nucleus and cytoplasm. Compartmentalising DNA inside the nucleus, separate from the ribosomes in the cytoplasm, is part of what allows transcription and translation to be controlled as distinct, separately regulated steps in eukaryotic gene expression."
    },
    {
      label: "3",
      heading: "The endomembrane system",
      level: "SL",
      text: "Several organelles work together as a connected system for making, modifying, and directing proteins and lipids. Rough endoplasmic reticulum, where proteins destined for secretion or membranes are synthesised, feeds into the Golgi apparatus, where those proteins are chemically modified, sorted, and packaged. Small membrane-bound **vesicles** bud off from one organelle and fuse with the next, physically moving material through this pathway without it ever needing to cross a membrane directly."
    },
    {
      label: "4",
      heading: "Mitochondria and chloroplasts",
      level: "SL",
      text: "Mitochondria have a folded inner membrane, forming structures called **cristae**, which greatly increases the surface area available for the reactions of aerobic respiration (see C1.2). Chloroplasts have a comparable internal structure, thylakoid membranes stacked into grana, adapted for the reactions of photosynthesis (see C1.3) instead. Both organelles compartmentalise a multi-step energy pathway inside a dedicated double-membrane structure, keeping the relevant enzymes and intermediates concentrated together."
    },
    {
      label: "5",
      heading: "Lysosomes and vesicular digestion",
      level: "SL",
      text: "A **lysosome** is a vesicle packed with digestive enzymes, used to break down waste material, worn-out organelles, or material engulfed from outside the cell. Keeping these enzymes enclosed inside a lysosome, rather than free in the cytoplasm, protects the rest of the cell's own components from being digested."
    },
    {
      label: "6",
      heading: "Free and bound ribosomes",
      level: "HL",
      text: "Ribosomes are not membrane-bound organelles themselves, but their location matters: free ribosomes, floating in the cytoplasm, synthesise proteins that will stay and function within the cytoplasm, while ribosomes bound to the rough endoplasmic reticulum synthesise proteins destined for secretion, for insertion into a membrane, or for packaging into a lysosome. Which type of ribosome a given mRNA is translated on depends on a signal sequence at the start of the protein being made."
    }
  ],

  "C1.2": [
    {
      label: "1",
      heading: "An overview of cell respiration",
      level: "SL",
      text: "Cell respiration is the controlled release of energy from organic molecules (usually glucose) to produce **ATP**, the molecule cells use as their immediate, usable energy currency. In eukaryotes, aerobic respiration happens in stages: **glycolysis** in the cytoplasm, followed by the link reaction, the **Krebs cycle**, and the **electron transport chain**, all inside the mitochondrion. Each stage extracts a little more of the energy originally stored in glucose, and most of the ATP is actually generated at the final stage, the electron transport chain."
    },
    {
      label: "2",
      heading: "Aerobic versus anaerobic respiration",
      level: "SL",
      text: "**Aerobic respiration** requires oxygen as the final electron acceptor at the end of the electron transport chain, and releases far more ATP per glucose molecule than anaerobic respiration does. **Anaerobic respiration** happens when oxygen is unavailable, glycolysis continues, but in human muscle cells pyruvate is converted to lactate rather than entering the mitochondrion, regenerating the NAD needed to keep glycolysis running, but yielding a much smaller amount of ATP overall, and sustainable for only a limited time before lactate build-up becomes a problem."
    },
    {
      label: "3",
      heading: "Glycolysis",
      level: "SL",
      text: "**Glycolysis** splits a six-carbon glucose molecule into two three-carbon pyruvate molecules, in a sequence of enzyme-catalysed reactions in the cytoplasm. It produces a small net yield of ATP directly, and also generates reduced NAD, which carries captured energy forward into later stages of aerobic respiration, or is regenerated by fermentation to lactate or ethanol when oxygen is unavailable."
    },
    {
      label: "4",
      heading: "Measuring respiration rate",
      level: "SL",
      text: "Respiration rate can be measured experimentally using a respirometer, a sealed chamber containing respiring organisms (such as germinating seeds) connected to a fluid-filled tube with a moving marker. Since respiration consumes oxygen and produces carbon dioxide in roughly similar volumes, a chemical like soda lime is included to absorb the CO2 produced, so that only oxygen consumption causes a measurable pressure change, pulling the marker toward the respiring organisms and allowing the rate of oxygen uptake to be measured directly."
    },
    {
      label: "5",
      heading: "The link reaction and the Krebs cycle",
      level: "HL",
      text: "Before entering the Krebs cycle, each pyruvate molecule is converted to acetyl-CoA in the link reaction, releasing carbon dioxide and reducing more NAD. The **Krebs cycle** then fully oxidises the carbon skeleton, releasing the remaining carbon as carbon dioxide, while generating further reduced NAD and reduced FAD, along with a small direct yield of ATP, the reduced NAD and FAD produced here carry the bulk of glucose's original energy forward to the electron transport chain."
    },
    {
      label: "6",
      heading: "The electron transport chain and oxidative phosphorylation",
      level: "HL",
      text: "Reduced NAD and FAD deliver their electrons to a series of protein complexes in the inner mitochondrial membrane, the **electron transport chain**. As electrons pass along the chain, energy released is used to pump hydrogen ions across the inner membrane, building a concentration gradient. Those hydrogen ions then flow back through ATP synthase, driving the synthesis of large amounts of ATP, a process called oxidative phosphorylation, oxygen's role is to accept electrons at the very end of the chain, which is why aerobic respiration depends on it so heavily."
    }
  ],

  "C1.3": [
    {
      label: "1",
      heading: "An overview of photosynthesis",
      level: "SL",
      text: "Photosynthesis converts light energy into the chemical energy stored in glucose, using carbon dioxide and water as raw materials and releasing oxygen as a by-product. It happens in two linked stages inside the chloroplast: the light-dependent reactions, which capture light energy, and the light-independent reactions (the **Calvin cycle**), which use that captured energy to build organic molecules from carbon dioxide."
    },
    {
      label: "2",
      heading: "The light-dependent reactions",
      level: "SL",
      text: "In the light-dependent reactions, **chlorophyll** and other pigments absorb light energy, which drives **photolysis**, the splitting of water molecules into oxygen (released as a waste product), hydrogen ions, and electrons. That captured energy is used to generate ATP and reduced NADP, both of which are carried forward to power the light-independent reactions."
    },
    {
      label: "3",
      heading: "The light-independent reactions (Calvin cycle)",
      level: "SL",
      text: "In the Calvin cycle, carbon dioxide is incorporated into an existing organic molecule in a process called **carbon fixation**, catalysed by the enzyme Rubisco. Using the ATP and reduced NADP supplied by the light-dependent reactions, this fixed carbon is progressively converted into glycerate-3-phosphate, then triose phosphate, some of which regenerates the starting molecule (RuBP) so the cycle can continue, and some of which is exported to build glucose and other organic molecules the plant needs."
    },
    {
      label: "4",
      heading: "Limiting factors of photosynthesis",
      level: "SL",
      text: "The rate of photosynthesis at any moment is constrained by whichever factor is currently in shortest supply relative to the others, a **limiting factor**. Light intensity, carbon dioxide concentration, and temperature are the three main limiting factors, increasing whichever one is currently most limiting will increase the rate, but increasing a factor that is not currently limiting will have little to no effect, since some other factor is now holding the rate back instead."
    },
    {
      label: "5",
      heading: "Photosystems and the light-dependent reactions in detail",
      level: "HL",
      text: "Pigments are organised into **photosystems** embedded in the thylakoid membrane, each acting as a light-harvesting antenna that funnels absorbed energy to a reaction centre. Electrons excited by that energy pass along an electron transport chain, driving hydrogen ions across the thylakoid membrane to build a concentration gradient. Those hydrogen ions flow back through ATP synthase, producing ATP by chemiosmosis, a process closely paralleling the electron transport chain used in respiration (see C1.2)."
    },
    {
      label: "6",
      heading: "Factors affecting the rate in more depth",
      level: "HL",
      text: "Beyond simply identifying which factor is currently limiting, the relationship between each factor and photosynthetic rate can be analysed quantitatively, for example using graphs of rate against light intensity at different CO2 concentrations to identify exactly where the limiting factor shifts from one variable to another. This kind of graph interpretation, reading where a curve plateaus and reasoning about why, is a core applied skill for this topic."
    }
  ]
};

