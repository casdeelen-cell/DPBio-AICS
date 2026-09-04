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
      label: "1",
      heading: "Water as a polar molecule",
      level: "SL",
      text: "Water's biological importance starts with its shape and its chemistry. A water molecule is bent at an angle of roughly 104.5 degrees, with two hydrogen atoms covalently bonded to a central oxygen. Oxygen has a higher **electronegativity** than hydrogen, so it pulls the shared electrons in each O-H bond closer to itself. This produces an uneven distribution of charge across the molecule: the oxygen end carries a partial negative charge and each hydrogen carries a partial positive charge.\n\nA molecule with this kind of unequal charge distribution is described as a **polar molecule**. It is worth being precise with terminology here: water is not ionic and does not carry a full charge, the polarity arises purely from unequal sharing of electrons within covalent bonds. Almost every property of water covered in this topic, its role as a solvent, its cohesion, its thermal behaviour, traces back to this single structural feature.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hydrogen-bonding-in-water-2D.svg",
      imageCaption: "Hydrogen bonding between adjacent water molecules, arising from the polarity of each O-H bond.",
      tip: { label: "Exam tip", text: "Examiners distinguish between a covalent bond (within a water molecule, between O and H) and a hydrogen bond (between separate water molecules). Mixing these up is one of the most common errors on this topic." }
    },
    {
      label: "2",
      heading: "Hydrogen bonding",
      level: "SL",
      text: "Because each water molecule carries both a positive and a negative region, molecules can attract one another: the positive hydrogen of one molecule is drawn to the negative oxygen of a neighbouring molecule. This intermolecular attraction is called a **hydrogen bond**.\n\nA hydrogen bond is considerably weaker than a covalent bond, roughly one-twentieth of the strength, and each individual bond is short-lived, breaking and reforming on a picosecond timescale. What matters biologically is the cumulative effect: at any given moment, a water molecule in liquid water is hydrogen bonded to an average of about 3.4 other molecules, and this constant, dynamic network of bonds is what gives bulk water its unusual physical properties compared to similarly sized molecules."
    },
    {
      label: "3",
      heading: "Cohesion and its consequences",
      level: "SL",
      text: "**Cohesion** refers to the mutual attraction between molecules of the same substance. In water, cohesion arises directly from hydrogen bonding, and it has several consequences that are directly relevant to living systems.\n\nThe clearest example is water transport in the xylem of vascular plants. As water evaporates from the mesophyll cells of a leaf during **transpiration**, it is replaced by water pulled up from the xylem below. Because the water molecules in the xylem are hydrogen bonded to one another, they behave as a continuous, unbroken column, so the loss of water at the top of the plant creates a pull that is transmitted all the way down to the roots. This is the basis of the cohesion-tension theory of water transport, and it explains how trees move water to heights of over 100 metres without any active pumping mechanism.\n\nCohesion is also responsible for **surface tension**, the tendency of a water surface to behave like a stretched elastic sheet. This is strong enough to support the weight of small organisms, such as pond skaters, that would otherwise sink.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Water_strider.jpg",
      imageCaption: "A water strider supported by surface tension, a direct consequence of cohesion between water molecules."
    },
    {
      label: "4",
      heading: "Adhesion",
      level: "SL",
      text: "**Adhesion** is the attraction between water molecules and a different polar or charged surface, rather than between water molecules themselves. Inside a xylem vessel, water adheres to the cellulose and lignin of the vessel walls, which helps counteract the downward pull of gravity on the water column.\n\nCohesion and adhesion act together to produce **capillary action**, the tendency of water to rise up narrow tubes. This is a measurable contributor to water movement in short plants and in the initial uptake of water from soil into root hairs, though for tall trees, transpiration pull dominates.",
      tip: { label: "Common mistake", text: "Cohesion is water sticking to water. Adhesion is water sticking to something else. Students frequently swap these two definitions under exam pressure, so it helps to have a fixed example memorised for each." }
    },
    {
      label: "5",
      heading: "Water as a solvent",
      level: "SL",
      text: "Polar and charged (ionic) substances tend to dissolve readily in water, because individual water molecules can surround a solute particle, with their negative oxygen oriented towards a positive ion or their positive hydrogens oriented towards a negative ion. This process, called hydration, effectively pulls the substance apart and disperses it through the solution.\n\nThis solvent property makes water the medium in which the great majority of metabolic reactions take place; enzymes, substrates and products are almost always dissolved in the aqueous cytoplasm. It is equally why blood plasma can transport glucose, amino acids, and ions around the body, and why the phloem of a plant can carry dissolved sucrose between source and sink tissues.\n\nNon-polar substances, such as lipids, do not dissolve in water. This is not a side note, it is the entire reason that lipid bilayers can function as membranes: a barrier that is impermeable to most polar and charged solutes is exactly what a cell needs to control its internal environment (see B2.1)."
    },
    {
      label: "6",
      heading: "Thermal properties and aquatic habitats",
      level: "HL",
      text: "The extensive hydrogen bonding in water also accounts for its thermal behaviour, which is relevant to the way organisms experience aquatic and terrestrial environments differently.\n\nWater has a high **specific heat capacity**: a relatively large amount of energy is required to raise its temperature, because much of the input energy goes into breaking hydrogen bonds rather than increasing the kinetic energy of the molecules. Large bodies of water therefore change temperature slowly, buffering aquatic organisms against the rapid daily and seasonal temperature swings that terrestrial organisms must cope with.\n\nWater also has a high latent heat of vaporisation, meaning evaporation removes a large amount of energy from the remaining liquid. This is the physical basis of cooling by sweating and by transpiration. Finally, hydrogen bonding causes ice to be less dense than liquid water, since the bonds hold molecules in a more open lattice arrangement when frozen. Ice therefore floats, insulating the liquid water beneath it and allowing aquatic life to persist under a frozen surface rather than the entire body of water freezing solid from the bottom up."
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
      label: "1",
      heading: "Solute potential and pressure potential",
      level: "SL",
      text: "**Water potential** (symbol &Psi;) is a measure of the tendency of water to move from one place to another, and it is made up of two components. **Solute potential** (&Psi;s) reflects how much solute is dissolved in the water, it is always zero or negative, and becomes more negative as more solute is added, since dissolved solute lowers water's tendency to move. **Pressure potential** (&Psi;p) reflects physical pressure, in a plant cell this is usually positive, generated by the protoplast pushing outward against the rigid cell wall.\n\nThe two combine as &Psi;w = &Psi;s + &Psi;p. Water always moves from a region of higher (less negative) water potential to a region of lower (more negative) water potential, this single rule governs osmosis at the whole-cell level, not just concentration gradients in isolation."
    },
    {
      label: "2",
      heading: "Osmosis in plant and animal cells",
      level: "SL",
      text: "When a plant cell is placed in a solution with a higher water potential than the cell itself, water moves in by osmosis, the protoplast swells and presses against the cell wall, and pressure potential rises until the cell becomes fully turgid. The rigid wall stops the cell from bursting the way an animal cell would in the same situation, since animal cells have no wall to resist the pressure.\n\nIf a plant cell is instead placed in a solution with a lower (more negative) water potential, water leaves the cell by osmosis, the protoplast shrinks and eventually pulls away from the cell wall entirely. This is called **plasmolysis**, and it is a useful sign, in a lab context, that a cell has been placed in a solution more concentrated than its own cytoplasm."
    },
    {
      label: "3",
      heading: "Turgor pressure and its uses",
      level: "SL",
      text: "**Turgor pressure** is the outward pressure exerted by the cell contents against the cell wall in a turgid cell. It is not just a side effect, plants rely on it directly: turgor pressure keeps non-woody stems and leaves rigid, and its loss is exactly what causes a plant to wilt when it has not been watered enough.\n\nTurgor changes are also actively used for movement in some cells, guard cells around a stoma open and close the pore by gaining or losing turgor pressure, which shifts their shape."
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
      label: "1",
      heading: "Metabolism: anabolic and catabolic reactions",
      level: "SL",
      text: "**Metabolism** is the sum of all the chemical reactions happening inside an organism. These reactions fall into two broad categories. **Anabolic reactions** build larger molecules from smaller ones, using energy in the process, protein synthesis and glycogen formation are both anabolic. **Catabolic reactions** break larger molecules down into smaller ones, typically releasing energy, the oxidation of glucose during respiration is catabolic.\n\nAlmost every metabolic reaction, in either direction, is catalysed by a specific enzyme, without enzymes, most of these reactions would happen far too slowly to sustain life."
    },
    {
      label: "2",
      heading: "Enzyme structure and the active site",
      level: "SL",
      text: "An enzyme is a globular protein whose three-dimensional shape creates a pocket called the **active site**, shaped to bind a specific **substrate**. When the substrate binds, the enzyme lowers the **activation energy** needed for the reaction to proceed, allowing the reaction to happen much faster than it would otherwise.\n\nThe induced fit model describes how the active site is not a rigid, pre-formed shape, it subtly changes shape as the substrate binds, moulding around it slightly to improve the fit and strain particular bonds in the substrate, helping the reaction along."
    },
    {
      label: "3",
      heading: "Temperature and pH effects on enzyme activity",
      level: "SL",
      text: "Enzyme activity generally increases with temperature up to an optimum, since molecules move faster and collide more often. Beyond that optimum, activity drops sharply, because the enzyme begins to **denature**, the bonds holding its three-dimensional structure in place break, distorting the active site so the substrate no longer fits.\n\npH has a similar effect. Every enzyme has an optimum pH, often close to neutral, though some (like pepsin in the stomach) function best at extreme pH. Moving too far from that optimum in either direction disrupts the bonds maintaining the enzyme's shape and denatures it, just as excess heat does."
    }
  ],

  "A1.2": [
    {
      label: "1",
      heading: "Nucleotide structure",
      level: "SL",
      text: "A **nucleotide** is the basic building block of nucleic acids, made of three parts: a phosphate group, a five-carbon sugar (deoxyribose in DNA, ribose in RNA), and a nitrogenous base. Nucleotides join together through condensation reactions between the phosphate of one nucleotide and the sugar of the next, forming a **phosphodiester bond**, this repeating sugar-phosphate backbone is what gives a strand of DNA or RNA its structural continuity."
    },
    {
      label: "2",
      heading: "The DNA double helix",
      level: "SL",
      text: "DNA is made of two nucleotide strands wound into a **double helix**, held together by hydrogen bonds between bases on opposite strands. The pairing is not random, it follows **complementary base pairing**: adenine always pairs with thymine (two hydrogen bonds), and cytosine always pairs with guanine (three hydrogen bonds). This predictable pairing is what makes DNA replication and the reading of genetic information possible.\n\nThe two strands run in opposite directions, described as **antiparallel**, one strand runs 5' to 3', the other runs 3' to 5' alongside it. This antiparallel arrangement matters directly for how DNA polymerase works during replication (see D1.1)."
    },
    {
      label: "3",
      heading: "DNA versus RNA",
      level: "SL",
      text: "RNA differs from DNA in three consistent ways: it uses the sugar ribose rather than deoxyribose, it is typically single-stranded rather than double-stranded, and it uses the base uracil in place of thymine. These differences are not incidental, RNA's single-stranded, more flexible structure suits its role as a short-lived working copy of genetic information (as in mRNA), rather than DNA's role as a stable, long-term store of it."
    }
  ],

  "D1.1": [
    {
      label: "1",
      heading: "Semi-conservative replication",
      level: "SL",
      text: "DNA replication is described as **semi-conservative** because each new DNA molecule ends up with one original (parental) strand and one newly synthesised strand. This was confirmed experimentally by Meselson and Stahl, who used isotope labelling to show that after one round of replication, every DNA molecule was a hybrid of old and new material, ruling out models where the whole original molecule stayed intact or where all four strands mixed together randomly."
    },
    {
      label: "2",
      heading: "Unwinding and building the new strand",
      level: "SL",
      text: "Replication starts when the enzyme **helicase** unwinds the double helix by breaking the hydrogen bonds between base pairs, creating a Y-shaped **replication fork** and exposing two single strands to act as templates.\n\n**DNA polymerase** then builds a new complementary strand by adding free nucleotides opposite each template base, following the same base pairing rules as always (A with T, C with G). DNA polymerase can only add nucleotides in one direction (5' to 3'), which, combined with the antiparallel structure of DNA, is why one new strand is built continuously and the other is built in short, separate fragments that are later joined together."
    },
    {
      label: "3",
      heading: "Accuracy of replication",
      level: "SL",
      text: "DNA polymerase does not just add nucleotides, it also proofreads as it goes, checking that each newly added base is correctly paired with its template base and removing it if not. This proofreading is why replication is remarkably accurate, errors slip through only very rarely, but on the occasions they do, and are not corrected, they become permanent mutations passed on to future generations of cells (see D1.3)."
    }
  ],

  "D2.1": [
    {
      label: "1",
      heading: "The cell cycle",
      level: "SL",
      text: "The cell cycle is the ordered sequence a eukaryotic cell goes through between one division and the next. **Interphase** is by far the longest phase, during which the cell grows, carries out its normal functions, and replicates its DNA in preparation for division. This is followed by **mitosis**, nuclear division, and then **cytokinesis**, division of the cytoplasm into two separate cells.\n\nThe cell cycle is tightly regulated by checkpoints that verify conditions are right (such as DNA being fully and correctly replicated) before the cell is allowed to proceed to the next stage, loss of this regulation is a hallmark of cancer."
    },
    {
      label: "2",
      heading: "The stages of mitosis",
      level: "SL",
      text: "By the start of mitosis, each chromosome consists of two identical **chromatids**, joined at a **centromere**, produced by DNA replication in interphase. During prophase, chromosomes condense and become visible, and the nuclear envelope breaks down. In metaphase, chromosomes line up along the centre of the cell, attached to **spindle fibres**. In anaphase, the spindle fibres shorten and pull the sister chromatids apart to opposite poles of the cell. In telophase, two new nuclear envelopes form around each set of chromosomes, which then decondense."
    },
    {
      label: "3",
      heading: "Cytokinesis and the purpose of mitosis",
      level: "SL",
      text: "In animal cells, cytokinesis happens through a ring of actin and myosin filaments that contracts around the middle of the cell, pinching it into two. In plant cells, which have a rigid cell wall, a new cell plate is instead built outward from the centre by vesicles carrying membrane and wall material, eventually fusing with the existing wall to divide the cell.\n\nMitosis produces two genetically identical daughter cells, which makes it essential for growth, for repairing damaged tissue, and for asexual reproduction, but not for producing gametes, which instead requires meiosis (see D3.1)."
    }
  ],

  "B1.2": [
    {
      label: "1",
      heading: "Amino acids and peptide bonds",
      level: "SL",
      text: "An **amino acid** consists of a central carbon bonded to an amino group, a carboxyl group, a hydrogen atom, and a variable side chain (R group) that differs between the 20 amino acids and gives each its distinct chemical properties. Amino acids join through a condensation reaction between the carboxyl group of one and the amino group of the next, forming a **peptide bond** and releasing water. A chain of many amino acids linked this way is a polypeptide."
    },
    {
      label: "2",
      heading: "Levels of protein structure",
      level: "SL",
      text: "A protein's **primary structure** is simply the specific sequence of amino acids in the chain, determined directly by the gene that coded for it. This sequence folds into a **secondary structure**, local, repeating patterns such as alpha helices and beta pleated sheets, held together by hydrogen bonds along the backbone.\n\nThe overall three-dimensional shape of a single polypeptide, formed by further folding driven by interactions between the R groups, is its **tertiary structure**. Where a functional protein is made of more than one polypeptide chain bound together, that combined assembly is its **quaternary structure**, haemoglobin, made of four separate polypeptide chains, is a classic example."
    },
    {
      label: "3",
      heading: "Protein diversity and denaturation",
      level: "SL",
      text: "Because the R groups can combine in so many different ways, proteins take on an enormous range of shapes suited to very different jobs: enzymes catalyse reactions, structural proteins like collagen provide strength, transport proteins like haemoglobin carry molecules around the body, and antibodies recognise pathogens.\n\nA protein's function depends entirely on its precise shape, which is why excess heat or extreme pH can **denature** a protein: the bonds maintaining its secondary, tertiary, and quaternary structure break, the protein unfolds, and it usually loses its function permanently, even if the primary structure (the amino acid sequence itself) is left untouched."
    }
  ],

  "A2.1": [
    {
      label: "1",
      heading: "Conditions for the origin of life",
      level: "SL",
      text: "Early Earth's atmosphere is thought to have contained little or no free oxygen, along with gases such as methane, ammonia, hydrogen, and water vapour. Laboratory experiments, most famously the Miller-Urey experiment, showed that passing electrical sparks (simulating lightning) through a mixture of these gases could generate simple organic molecules, including amino acids, without any living cells involved, suggesting the basic building blocks of life could plausibly have formed spontaneously under early Earth conditions."
    },
    {
      label: "2",
      heading: "From molecules to the first cells",
      level: "SL",
      text: "Getting from simple organic molecules to a living cell requires, among other things, a boundary separating an internal chemical environment from the outside world. A **protobiont** is a simple, self-assembled structure, such as a lipid membrane enclosing a pool of molecules, that shows some cell-like properties (a boundary, some internal chemistry) without yet being fully alive. Protobionts are considered a plausible intermediate step between free-floating organic molecules and the first true, self-replicating cells."
    },
    {
      label: "3",
      heading: "Endosymbiotic theory",
      level: "SL",
      text: "The **endosymbiotic theory** proposes that mitochondria and chloroplasts originated as free-living prokaryotic cells that were engulfed by a larger host cell, and instead of being digested, survived inside it in a mutually beneficial relationship that became permanent over evolutionary time.\n\nThis theory explains several otherwise puzzling features of these organelles: both have their own circular DNA (resembling a prokaryote's chromosome, not the linear DNA of a eukaryotic nucleus), both have their own ribosomes similar in size to prokaryotic ribosomes, and both are surrounded by a double membrane, consistent with one membrane from the original prokaryote and one from the host cell's engulfing vesicle."
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
      label: "1",
      heading: "Prokaryotic and eukaryotic cells",
      level: "SL",
      text: "A **prokaryote** is a cell with no nucleus and no membrane-bound organelles, its DNA lies free in the cytoplasm as a single circular chromosome, and the cell is generally small and structurally simple (bacteria are the main example). A **eukaryote** has a true nucleus enclosing its DNA, along with a range of membrane-bound organelles that divide the cell into specialised compartments, and is typically much larger and more structurally complex than a prokaryotic cell."
    },
    {
      label: "2",
      heading: "Key organelles in a eukaryotic cell",
      level: "SL",
      text: "The nucleus houses the cell's DNA and controls gene expression. The endoplasmic reticulum, rough (studded with ribosomes, involved in protein synthesis) and smooth (involved in lipid synthesis), forms an extensive internal membrane network. The Golgi apparatus modifies, sorts, and packages proteins and lipids, often for export from the cell. Mitochondria carry out aerobic respiration to generate ATP. Each of these is an **organelle**, a specialised, usually membrane-bound structure with a distinct function within the cell."
    },
    {
      label: "3",
      heading: "Why cells are small: surface area to volume ratio",
      level: "SL",
      text: "As a cell grows larger, its volume increases faster than its surface area, since volume scales with the cube of a cell's dimensions while surface area scales only with the square. This falling **surface area to volume ratio** limits how large a cell can get, because the cell membrane is what all nutrients, waste, and gases must cross, past a certain size, the surface area becomes too small relative to the volume of cytoplasm it needs to service, which is a major reason cells divide rather than simply growing indefinitely."
    }
  ],

  "B2.2": [
    {
      label: "1",
      heading: "Why compartmentalise?",
      level: "SL",
      text: "**Compartmentalisation** is the division of a eukaryotic cell into separate membrane-bound regions, each with its own internal chemical environment. This matters because a cell needs to run many reactions simultaneously, including reactions that would interfere with each other if left to happen in the same open space, or that need very different local conditions (such as pH) to work efficiently. Enclosing a set of enzymes and substrates within their own organelle keeps that reaction efficient and prevents it from being disrupted by, or disrupting, everything else happening in the cell."
    },
    {
      label: "2",
      heading: "The endomembrane system",
      level: "SL",
      text: "Several organelles work together as a connected system for making, modifying, and directing proteins and lipids: rough endoplasmic reticulum, where proteins destined for secretion or membranes are synthesised, feeds into the Golgi apparatus, where those proteins are chemically modified and sorted. Small membrane-bound sacs called **vesicles** bud off from one organelle and fuse with the next, physically transporting material through this pathway without it ever having to cross a membrane directly, ending either at the cell surface membrane for secretion, or at another organelle such as a lysosome."
    },
    {
      label: "3",
      heading: "Mitochondria, chloroplasts, and lysosomes",
      level: "SL",
      text: "Mitochondria have a folded inner membrane, forming structures called **cristae**, which greatly increases the surface area available for the reactions of aerobic respiration. Chloroplasts have a comparable internal structure adapted for photosynthesis instead. Both organelles compartmentalise a multi-step energy pathway inside a dedicated double-membrane structure, keeping the relevant enzymes and intermediate molecules concentrated together.\n\nA **lysosome** is a vesicle packed with digestive enzymes, used to break down waste material, worn-out organelles, or material engulfed from outside the cell, keeping those enzymes safely contained rather than free in the cytoplasm, where they would otherwise damage the cell's own healthy components."
    }
  ],

  "C1.2": [
    {
      label: "1",
      heading: "An overview of cell respiration",
      level: "SL",
      text: "Cell respiration is the controlled release of energy from organic molecules (usually glucose) to produce **ATP**, the molecule cells use as their immediate, usable energy currency. In eukaryotes, aerobic respiration happens in stages: glycolysis in the cytoplasm, followed by the link reaction, the **Krebs cycle**, and the **electron transport chain**, all inside the mitochondrion. Each stage extracts a bit more of the energy originally stored in glucose, most of the ATP is actually generated at the final stage, the electron transport chain."
    },
    {
      label: "2",
      heading: "Aerobic versus anaerobic respiration",
      level: "SL",
      text: "**Aerobic respiration** requires oxygen as the final electron acceptor at the end of the electron transport chain, and it releases far more ATP per glucose molecule than anaerobic respiration does. **Anaerobic respiration** happens when oxygen is unavailable, and in human muscle cells this means glycolysis continues but pyruvate is converted to lactate instead of entering the mitochondrion, regenerating the NAD needed to keep glycolysis running, but yielding a much smaller amount of ATP overall, and only sustainable for a limited time before lactate build-up becomes a problem."
    },
    {
      label: "3",
      heading: "Measuring respiration rate",
      level: "SL",
      text: "Respiration rate can be measured experimentally using a respirometer, a sealed chamber containing respiring organisms (such as germinating seeds) connected to a fluid-filled tube with a moving marker. Since respiration consumes oxygen and produces carbon dioxide in roughly similar volumes, a chemical like soda lime is included to absorb the CO2 produced, so that only the oxygen consumption causes a measurable pressure change, pulling the marker toward the respiring organisms and allowing the rate of oxygen uptake to be measured directly."
    }
  ],

  "C1.3": [
    {
      label: "1",
      heading: "An overview of photosynthesis",
      level: "SL",
      text: "Photosynthesis converts light energy into the chemical energy stored in glucose, using carbon dioxide and water as raw materials and releasing oxygen as a by-product. It happens in two linked stages inside the chloroplast: the light-dependent reactions, which capture light energy, and the light-independent reactions (the Calvin cycle), which use that captured energy to build organic molecules from carbon dioxide."
    },
    {
      label: "2",
      heading: "The light-dependent reactions",
      level: "SL",
      text: "In the light-dependent reactions, **chlorophyll** and other pigments absorb light energy, which drives **photolysis**, the splitting of water molecules into oxygen (released as a waste product), hydrogen ions, and electrons. That captured energy is used to generate ATP and reduced NADP, both of which are then carried forward to power the light-independent reactions."
    },
    {
      label: "3",
      heading: "The light-independent reactions (Calvin cycle)",
      level: "SL",
      text: "In the **Calvin cycle**, carbon dioxide is incorporated into an existing organic molecule in a process called **carbon fixation**, catalysed by the enzyme Rubisco. Using the ATP and reduced NADP supplied by the light-dependent reactions, this fixed carbon is progressively converted into glycerate-3-phosphate, then triose phosphate, some of which is used to regenerate the starting molecule (RuBP) so the cycle can continue, and some of which is exported to build glucose and other organic molecules the plant needs."
    },
    {
      label: "4",
      heading: "Limiting factors of photosynthesis",
      level: "SL",
      text: "The rate of photosynthesis at any moment is constrained by whichever factor is currently in shortest supply relative to the others, a **limiting factor**. Light intensity, carbon dioxide concentration, and temperature are the three main limiting factors: increasing whichever one is currently most limiting will increase the rate, but increasing a factor that is not currently limiting will have little to no effect, since some other factor is now holding the rate back instead."
    }
  ]

};

