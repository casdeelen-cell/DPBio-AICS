/*
  content.js
  ----------
  This is where your actual notes live. One entry per topic code.
  Each topic is an array of sections, and each section is one syllabus
  statement with your notes on it.

  Format for a section:
  {
    label: "1",              // just a short label, usually a number
    heading: "Short heading",
    level: "SL",              // "SL" or "HL" - shows a small badge, optional
    text: "Your notes go here as plain text. Use \n\n between paragraphs.",
    image: "https://..."      // optional, leave out if you don't have one
  }

  Topics with no entry here yet will just show "notes coming soon" on
  the site, so it's safe to leave them out until you get to them.
  Copy the pattern from A1.1 below for a new topic.
*/

const CONTENT = {

  "A1.1": [
    {
      label: "1",
      heading: "Why water shapes everything",
      level: "SL",
      text: "Water is not just the stuff life happens in, it is a big part of why life works the way it does. A water molecule is bent, with the oxygen pulling electrons towards itself more than the two hydrogens do. That makes oxygen slightly negative and each hydrogen slightly positive. This is called a polar molecule, and it is the starting point for basically every property of water that matters in biology.",
    },
    {
      label: "2",
      heading: "Hydrogen bonds",
      level: "SL",
      text: "Because water is polar, the slightly positive hydrogen on one molecule gets attracted to the slightly negative oxygen on a neighbouring molecule. That attraction is a hydrogen bond. It is weaker than a covalent bond, but water molecules form so many of them, constantly breaking and reforming, that together they have a big effect on how water behaves.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hydrogen-bonding-in-water-2D.svg"
    },
    {
      label: "3",
      heading: "Cohesion",
      level: "SL",
      text: "Cohesion is water molecules sticking to each other through hydrogen bonding. This is what lets water form an unbroken column inside the xylem of a plant. When water evaporates from a leaf, it pulls the whole column up behind it like a chain, because the molecules are hydrogen bonded to one another. This is basically the whole reason tall trees can get water to their top branches without a pump.\n\nCohesion is also why water forms droplets and why you can slightly overfill a glass before it spills, the surface tension comes from the same hydrogen bonding."
    },
    {
      label: "4",
      heading: "Adhesion",
      level: "SL",
      text: "Adhesion is water sticking to other polar or charged surfaces, not just to itself. Inside a xylem vessel, water adheres to the cellulose walls, which helps counteract gravity pulling the water column back down. Adhesion and cohesion together are what make capillary action possible, which is part of how water moves up narrow tubes like xylem vessels or a thin glass capillary tube."
    },
    {
      label: "5",
      heading: "Water as a solvent",
      level: "SL",
      text: "Polar and charged substances dissolve well in water because water molecules can surround them and pull them apart. This is why water is such a good medium for metabolism, most of the reactions in a cell happen with the reactants dissolved in the cytoplasm. It is also why blood plasma can carry glucose, ions, and other polar solutes around the body, and why xylem and phloem can transport dissolved substances around a plant.\n\nNon-polar substances like lipids do not dissolve in water, which is exactly why cell membranes, which are built from lipids, can act as a barrier."
    },
    {
      label: "6",
      heading: "Thermal properties and aquatic habitats",
      level: "HL",
      text: "Hydrogen bonds also give water a high specific heat capacity, meaning it takes a lot of energy to change its temperature. This keeps large bodies of water thermally stable, so aquatic organisms are not exposed to the same rapid temperature swings that land organisms deal with. Water also has a high latent heat of vaporisation, which is why sweating and transpiration are effective cooling methods, and ice is less dense than liquid water, so it floats and insulates the water underneath rather than a lake freezing solid from the bottom up."
    }
  ],

  "B2.1": [
    {
      label: "1",
      heading: "The fluid mosaic model",
      level: "SL",
      text: "A membrane is built from a phospholipid bilayer, two layers of phospholipids arranged tail to tail. The phosphate heads are polar and face outwards towards the watery environment on either side, while the fatty acid tails are non-polar and face inwards, away from water. This arrangement happens automatically because of how the molecules interact with water, nobody has to build it.\n\nProteins are scattered through this bilayer at different depths, some going all the way through and some sitting on just one side. The whole thing is called a mosaic because of this patchy arrangement, and fluid because the phospholipids and proteins can drift sideways within their layer.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/0302_Phospholipid_Bilayer.jpg"
    },
    {
      label: "2",
      heading: "Membrane proteins",
      level: "SL",
      text: "Integral proteins are embedded in the bilayer, often spanning all the way across, and peripheral proteins sit on the surface, loosely attached. Membrane proteins do a lot of the actual work of a membrane: some are channels or carriers for transport, some are receptors that bind signalling molecules like hormones, some are enzymes, and some help cells recognise each other or stick together."
    },
    {
      label: "3",
      heading: "Simple diffusion and osmosis",
      level: "SL",
      text: "Small non-polar molecules like oxygen and carbon dioxide can pass straight through the phospholipid bilayer, moving from an area of higher concentration to lower concentration, no protein needed and no energy used. Osmosis is a special case of this, it is the diffusion of water itself across a partially permeable membrane, from a region of lower solute concentration to higher solute concentration."
    },
    {
      label: "4",
      heading: "Facilitated diffusion",
      level: "SL",
      text: "Polar molecules and ions cannot easily cross the non-polar interior of the bilayer, so they need help from a protein. Channel proteins form a pore that lets specific ions through, and carrier proteins change shape to move a specific molecule across. Both of these still work down the concentration gradient, so no energy input is required, this is still a passive process even though a protein is involved."
    },
    {
      label: "5",
      heading: "Active transport",
      level: "SL",
      text: "Sometimes a cell needs to move something against its concentration gradient, from low to high concentration. That takes energy, usually supplied directly by ATP, and it is done by pump proteins. The sodium potassium pump is the classic example, it moves sodium out of a cell and potassium in, both against their gradients, which is essential for maintaining the resting potential of neurons."
    },
    {
      label: "6",
      heading: "Bulk transport",
      level: "HL",
      text: "Endocytosis and exocytosis move large molecules or whole particles across the membrane using vesicles, rather than moving individual molecules through a protein. In endocytosis the membrane folds inwards around material outside the cell and pinches off into a vesicle. In exocytosis a vesicle inside the cell fuses with the membrane and releases its contents outside. Both processes need energy and are how cells handle things too big to fit through a channel or carrier, like secreting hormones or taking in large food particles."
    }
  ],

  "D3.2": [
    {
      label: "1",
      heading: "Genes, alleles, and loci",
      level: "SL",
      text: "A gene occupies a specific position on a chromosome called a locus. Different versions of the same gene are called alleles, and they exist because of mutation somewhere in the past. In a diploid organism, each individual has two alleles for a given gene, one inherited from each parent, sitting at the same locus on a pair of homologous chromosomes."
    },
    {
      label: "2",
      heading: "Genotype and phenotype",
      level: "SL",
      text: "Genotype is the actual combination of alleles an organism has, phenotype is the observable trait that results. If both alleles are the same, the organism is homozygous for that gene, if they are different, it is heterozygous. A dominant allele shows up in the phenotype whenever it is present, a recessive allele only shows up in the phenotype when there is no dominant allele around to mask it, meaning the organism is homozygous recessive."
    },
    {
      label: "3",
      heading: "Punnett grids and monohybrid crosses",
      level: "SL",
      text: "A monohybrid cross tracks the inheritance of a single gene between two parents. You can predict the possible genotypes and their ratios in the offspring by working out which alleles each parent can pass on and laying them out in a Punnett grid. The classic 3:1 ratio in the offspring phenotypes shows up when you cross two heterozygotes for a gene with straightforward dominant and recessive alleles.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Punnett_Square.svg"
    },
    {
      label: "4",
      heading: "Test crosses",
      level: "SL",
      text: "If an organism shows the dominant phenotype, you cannot tell just by looking whether it is homozygous dominant or heterozygous. A test cross solves this by crossing the unknown individual with a homozygous recessive one. If any offspring show the recessive phenotype, the unknown parent must have been heterozygous, because a homozygous dominant parent could never pass on a recessive allele."
    },
    {
      label: "5",
      heading: "Codominance and multiple alleles",
      level: "SL",
      text: "Not every gene follows simple dominant and recessive rules. With codominance, both alleles are expressed in the phenotype at the same time rather than one masking the other. The ABO blood group system is the standard example, it has three alleles, IA and IB are codominant with each other and both are dominant over i, which is why there are four possible blood type phenotypes but six possible genotypes."
    },
    {
      label: "6",
      heading: "Sex linkage",
      level: "HL",
      text: "Genes carried on the X chromosome show a different inheritance pattern because males only have one X chromosome, paired with a much smaller Y that carries very few genes. This means a male only needs one copy of a recessive X-linked allele to show the recessive phenotype, since there is no second X to potentially carry a dominant allele. This is why conditions like red-green colour blindness and haemophilia show up more often in males than females, and why you often see them skip a generation when carried by an unaffected female."
    }
  ],

  "C4.1": [
    {
      label: "1",
      heading: "Populations and carrying capacity",
      level: "SL",
      text: "A population is all the organisms of one species living in the same area at the same time, able to interbreed. Populations do not grow forever, they are limited by the carrying capacity of the environment, the maximum population size that the available resources can sustain long term. Early on, with few individuals and plenty of resources, a population tends to grow close to exponentially. As it approaches carrying capacity, limiting factors like food, space, and predation slow growth down, producing an S-shaped, or sigmoid, growth curve.",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Logistic_Carrying_Capacity.svg"
    },
    {
      label: "2",
      heading: "Limiting factors",
      level: "SL",
      text: "Limiting factors can be density dependent or density independent. Density dependent factors, like disease, competition for food, or predation, have a bigger effect the more crowded a population gets, which is what actually creates that S-shaped curve levelling off. Density independent factors, like a sudden freeze or a storm, affect a population regardless of how many individuals are in it."
    },
    {
      label: "3",
      heading: "Interspecific relationships",
      level: "SL",
      text: "Species in a community interact with each other in a few recurring ways. In competition, two species both need the same limited resource and both are harmed by the interaction. In predation, one species benefits by consuming the other, which is harmed. In mutualism, both species benefit, like a bee getting nectar while pollinating a flower. In parasitism, one species benefits at the other's expense over an extended period, usually without immediately killing the host, unlike predation."
    },
    {
      label: "4",
      heading: "Communities and niches",
      level: "SL",
      text: "A community is all the different populations of different species living and interacting in the same area. Each species within a community occupies a niche, which is essentially its role, covering what it eats, where it lives, and how it interacts with other species. Two species cannot occupy exactly the same niche in the same place indefinitely, since they would be in direct competition for every resource, and one would eventually outcompete the other. This is why closely related species sharing a habitat often specialise into slightly different niches instead."
    }
  ]

};
