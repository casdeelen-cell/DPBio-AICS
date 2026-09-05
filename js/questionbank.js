/*
  questionbank.js
  ---------------
  Questions in this file are ADAPTED from the real IB Questionbank:
  same underlying concept, same difficulty, same correct answer, but
  rewritten in original wording so it's safe to publish on a public
  site. The site automatically shows "Adapted from IB Questionbank"
  above this section, you don't need to add that yourself.

  This is a SEPARATE section from your quick quiz in quizzes.js. Keep
  quizzes.js as your own lightweight checks, use this file for the
  bigger, exam-style question bank as you send over more PDFs.

  Same format as quizzes.js:
  QUESTIONBANK["A1.1"] = [
    { q: "...", options: ["...","...","...","..."], correct: 0, explanation: "..." }
  ]
*/

const QUESTIONBANK = {

  "A1.1": [
    {
      q: "A ringed seal (Pusa hispida) spends long periods in near-freezing Arctic water. Which adaptation is a direct response to how efficiently water conducts heat away from the body?",
      options: ["A streamlined body shape", "Sharp teeth for gripping prey", "A thick layer of blubber", "Lungs adapted for diving"],
      correct: 2,
      explanation: "Water conducts heat away from a body far faster than air does, so a thick fat layer (blubber) is the adaptation that directly counters that heat loss."
    },
    {
      q: "Asteroid impacts are hypothesised to be an early source of Earth's water. What allowed that water to be retained on the planet rather than escaping back into space?",
      options: ["Early atmospheric gases absorbed the water vapour", "High atmospheric pressure trapped the vapour", "Earth's temperature allowed the vapour to condense into liquid", "Water became trapped inside newly formed rock"],
      correct: 2,
      explanation: "Once Earth's surface cooled enough, water vapour could condense into liquid water, which is what allowed it to stay on the surface rather than escape."
    },
    {
      q: "Which of these is a consequence of water's adhesive properties specifically, rather than its cohesive properties?",
      options: ["Aquatic environments stay thermally stable", "Water climbs upward through narrow soil spaces by capillary action", "Blood plasma can transport dissolved nutrients", "Sweating has a cooling effect"],
      correct: 1,
      explanation: "Capillary action depends on water adhering to the surface of a different material (like soil particles), which is adhesion, not cohesion."
    },
    {
      q: "A Wikipedia-style planet comparison table lists surface temperature, atmosphere, and orbital distance for four exoplanets. Which planet is most likely to support life based on the presence of liquid water?",
      options: ["A planet close enough to its star that all water exists as vapour", "A planet far enough from its star that all water is frozen solid", "A planet at a distance where surface temperatures allow water to stay liquid", "A planet with no atmosphere at all"],
      correct: 2,
      explanation: "The 'habitable zone' (sometimes called the Goldilocks zone) is defined by the orbital distance at which a planet's temperature allows water to exist as a liquid rather than permanently as ice or vapour, since liquid water is considered essential for life as we know it."
    },
    {
      q: "Phospholipids are described as amphipathic molecules. Which feature of their structure makes this true?",
      options: ["Both ends of the molecule are hydrophilic", "Both ends of the molecule are hydrophobic", "One end is hydrophilic and the other is hydrophobic", "The molecule has no charge anywhere"],
      correct: 2,
      explanation: "Amphipathic means a molecule has both a hydrophilic region (the phosphate head, which interacts with water) and a hydrophobic region (the fatty acid tails, which avoid water), which is exactly why phospholipids spontaneously form bilayers in water."
    },
    {
      q: "Aquatic ecosystems tend to show much smaller day-to-day temperature swings than the air above them. Which property of water is directly responsible for this?",
      options: ["Water's high specific heat capacity, because hydrogen bonds absorb a large amount of energy before the temperature rises", "Water's low specific heat capacity, because covalent bonds absorb energy easily", "Water's high density, which prevents heat from entering the water", "Water's transparency, which reflects heat away from the surface"],
      correct: 0,
      explanation: "A large amount of thermal energy must be absorbed to break/weaken hydrogen bonds between water molecules before the average kinetic energy (and therefore temperature) rises, giving water an unusually high specific heat capacity and making aquatic environments thermally stable."
    },
    {
      q: "Pond skaters and other small insects can rest on the surface of still water without breaking through. Which property of water explains this?",
      options: ["Adhesion between water and the insect's legs", "Capillary action pulling the insect upward", "Surface tension created by cohesive hydrogen bonds at the surface", "The high transparency of water"],
      correct: 2,
      explanation: "Hydrogen bonds between water molecules at the surface pull inward more strongly than they are pulled by the air above, creating a 'skin'-like surface tension strong enough to support very light, water-repellent objects like an insect's legs."
    },
    {
      q: "Which statement correctly describes the type of bond between two hydrogen atoms and the oxygen atom within a single water molecule?",
      options: ["A polar covalent bond, because the shared electrons are pulled unevenly towards oxygen", "A non-polar covalent bond, because the electrons are shared equally", "An ionic bond, because electrons are fully transferred to oxygen", "A hydrogen bond, because it forms between adjacent molecules"],
      correct: 0,
      explanation: "Oxygen is more electronegative than hydrogen, so the shared electrons in the O–H covalent bonds spend more time near the oxygen atom, giving oxygen a partial negative charge and each hydrogen a partial positive charge — a polar covalent bond, not a hydrogen bond (hydrogen bonds occur between separate molecules)."
    },
    {
      q: "Two water molecules are attracted to each other because a slightly positive hydrogen on one molecule is drawn to a slightly negative oxygen on the neighbouring molecule. What is this intermolecular attraction called, and why does it arise?",
      options: ["A hydrogen bond, arising from the polarity of the O–H bonds", "A covalent bond, arising from shared electron pairs", "An ionic bond, arising from full charge transfer", "A dispersion force, arising from random electron movement"],
      correct: 0,
      explanation: "This weak electrostatic attraction between the partial positive charge on a hydrogen atom of one water molecule and the partial negative charge on the oxygen of a neighbouring molecule is a hydrogen bond, and it underlies almost every unusual property of water, from cohesion to its high boiling point."
    },
    {
      q: "Sweating helps cool the human body as water evaporates from the skin's surface. Which property of water makes it especially effective as an evaporative coolant?",
      options: ["Its high latent heat of vaporization, meaning a large amount of energy is absorbed from the skin to evaporate even a small amount of sweat", "Its high specific heat capacity, which slows down how quickly it heats up", "Its high boiling point, which prevents it from evaporating too easily", "Its high melting point, which keeps it liquid across a wide temperature range"],
      correct: 0,
      explanation: "Water has an unusually high latent heat of vaporization, meaning that converting liquid water into vapour requires absorbing a large amount of thermal energy; when sweat evaporates from the skin, it draws this energy from the body itself, producing a strong cooling effect even though only a small volume of liquid is lost."
    },
    {
      q: "Water molecules are strongly attracted to one another, allowing water to form a continuous, unbroken column inside narrow tubes such as xylem vessels. What is the term for this attraction between water molecules of the same substance?",
      options: ["Cohesion", "Adhesion", "Capillary action", "Surface tension"],
      correct: 0,
      explanation: "Cohesion describes the attraction between molecules of the same substance, in water's case arising from hydrogen bonding between neighbouring water molecules; adhesion, by contrast, refers to attraction between water and a different surface, such as the walls of a xylem vessel."
    }
  ],

  "D2.3": [
    {
      q: "A plant cell has a water potential of -0.24 kPa and a pressure potential of 0.46 kPa. Using the equation water potential = solute potential + pressure potential, what is the solute potential of the cell?",
      options: ["0.22 kPa", "-0.22 kPa", "0.70 kPa", "-0.70 kPa"],
      correct: 3,
      explanation: "Rearranging the equation: solute potential = water potential minus pressure potential = -0.24 - 0.46 = -0.70 kPa."
    },
    {
      q: "A plant cell is moved from a dilute (low solute concentration) solution into a more concentrated one. What happens to the cell's water potential and pressure potential as a result?",
      options: ["Water potential inside the cell decreases as water leaves, and pressure (turgor) potential also decreases as the cell membrane pulls away from the wall", "Water potential inside the cell increases as water enters, and pressure potential increases as turgor builds", "Neither water potential nor pressure potential changes", "Water potential decreases but pressure potential increases"],
      correct: 0,
      explanation: "Moving a cell into a more concentrated external solution lowers the water potential outside relative to inside, so water leaves the cell by osmosis; as the cytoplasm shrinks away from the cell wall (plasmolysis), turgor (pressure potential) is lost as well, since pressure potential depends on the cell contents pushing against the wall."
    }
  ],

  "B1.1": [
    {
      q: "A molecular diagram shows a glycerol backbone attached to a phosphate group on one side and two fatty acid tails on the other. What kind of molecule is this?",
      options: ["A polysaccharide", "A phospholipid", "A triglyceride", "A polypeptide"],
      correct: 1,
      explanation: "A glycerol backbone with a phosphate group and two (rather than three) fatty acid tails is the defining structure of a phospholipid, not a triglyceride, which has three fatty acid tails and no phosphate."
    },
    {
      q: "Plant cell walls need to resist bursting from the internal pressure created by osmotic water uptake. Which structural feature of cellulose makes it suited to this role?",
      options: ["Its long, unbranched chains of beta-glucose cross-linked into strong fibres", "Its highly branched structure, which traps water inside the cell", "Its solubility in water, which allows it to form a flexible gel", "Its role as an immediate energy source broken down during respiration"],
      correct: 0,
      explanation: "Cellulose is made of long, straight chains of beta-glucose molecules held together by hydrogen bonds into bundles of microfibrils; this fibrous arrangement gives cellulose great tensile strength, allowing the cell wall to resist the internal turgor pressure that builds up as water enters the cell by osmosis."
    },
    {
      q: "Starch, glycogen, and cellulose are all polysaccharides built entirely from glucose monomers, yet they behave very differently in living organisms. What is the main structural reason for this difference?",
      options: ["They differ in whether the glucose monomers are joined as alpha- or beta-glucose, and in how branched the resulting chains are", "They are made from different types of monosaccharide entirely", "Only cellulose contains any covalent bonds", "Starch and glycogen are proteins, not carbohydrates"],
      correct: 0,
      explanation: "Starch and glycogen are built from alpha-glucose in branched or coiled arrangements that pack compactly for storage, while cellulose is built from beta-glucose in long straight, hydrogen-bonded chains; this small difference in monomer type and chain shape explains why one group stores energy efficiently and the other provides structural strength."
    },
    {
      q: "A simplified diagram shows a molecule with a glycerol backbone, two fatty acid tails, and a phosphate-containing head group. What kind of molecule is this most likely to be, and what is one of its key roles?",
      options: ["A phospholipid, which forms the bilayer structure of cell membranes", "A triglyceride, used exclusively for long-term energy storage in fat cells", "A polysaccharide, used for structural support in plant cell walls", "A steroid, used for cell signalling"],
      correct: 0,
      explanation: "The combination of a glycerol backbone, two fatty acid tails, and a phosphate head group is characteristic of a phospholipid; its amphipathic nature (hydrophilic head, hydrophobic tails) is exactly why phospholipids spontaneously arrange into the bilayer that forms the basis of every cell membrane."
    },
    {
      q: "Cellulose is described as insoluble in water, despite water molecules readily forming hydrogen bonds with its surface. Which statement correctly reflects both of these properties?",
      options: ["Cellulose is insoluble in water, but water still adheres to it via hydrogen bonding", "Cellulose is insoluble in water, and water does not adhere to it at all", "Cellulose is soluble in water, but water does not adhere to it", "Cellulose is soluble in water, and water adheres to it"],
      correct: 0,
      explanation: "Cellulose's long, tightly hydrogen-bonded microfibrils make it insoluble in water (the molecule doesn't disperse into solution), but the many exposed hydroxyl groups along its surface still readily form hydrogen bonds with water molecules, which is why cellulose fibres readily absorb and retain adhering water even without dissolving."
    },
    {
      q: "Two molecules of alpha-glucose combine, releasing a water molecule, to form maltose. Which set of terms correctly describes both the reaction and its product?",
      options: ["A disaccharide is produced by a condensation reaction", "A monosaccharide is produced by a hydrolysis reaction", "A polysaccharide is produced by a condensation reaction", "A disaccharide is produced by a hydrolysis reaction"],
      correct: 0,
      explanation: "Joining exactly two monosaccharides while releasing a water molecule is a condensation reaction, and the two-sugar product is by definition a disaccharide; hydrolysis is the reverse process (using water to break a glycosidic bond apart), and a polysaccharide would require many more monomers joined together, not just two."
    },
    {
      q: "A lipid diagram shows a fatty acid chain in which the two hydrogen atoms adjacent to a carbon-carbon double bond are positioned on opposite sides of the chain, creating a distinct kink in the molecule's shape. What kind of fatty acid does this represent?",
      options: ["A cis-unsaturated fatty acid, since the kink is the hallmark of a cis double bond configuration", "A trans-unsaturated fatty acid, since the chain remains straight", "A fully saturated fatty acid, since there is a double bond present", "A monounsaturated fatty acid, since more than one double bond is shown"],
      correct: 0,
      explanation: "A cis double bond places the two hydrogens on the same side of the double bond, forcing a bend or kink into the fatty acid chain; a trans configuration, by contrast, places them on opposite sides, allowing the chain to remain relatively straight despite the double bond — the opposite arrangement described in the question, which is characteristic of a cis-unsaturated fatty acid."
    },
    {
      q: "The permeability of a set of plasma membranes to carbon dioxide was found to vary depending on the relative amount of one particular lipid component in the membrane. Which membrane component is most likely responsible for this kind of variation in permeability?",
      options: ["Cholesterol, since it affects how tightly packed and fluid the phospholipid bilayer is", "Glycoproteins, since they are involved in cell recognition rather than permeability", "Unsaturated fatty acids alone, since they have no effect on gas permeability", "Integral transport proteins, since gases never cross membranes via proteins"],
      correct: 0,
      explanation: "Cholesterol is embedded within the phospholipid bilayer and modulates its fluidity and packing, which in turn affects how easily small non-polar or lipid-soluble molecules like carbon dioxide can diffuse directly through the bilayer; higher cholesterol content can alter permeability to such small molecules more than variation in glycoproteins, which mainly serve a recognition role."
    },
    {
      q: "The equation for a reaction in a leaf cell shows two monosaccharides combining with the release of a water molecule to form a larger sugar. What can be correctly concluded about this reaction?",
      options: ["A disaccharide is produced by a condensation reaction", "A polysaccharide is produced by a hydrolysis reaction", "Two disaccharides are combined in a hydrolysis reaction", "A single monosaccharide is broken down by hydrolysis"],
      correct: 0,
      explanation: "Combining exactly two monosaccharides with the release of a water molecule is, by definition, a condensation reaction producing a disaccharide; this is the reverse of hydrolysis, which would instead use a water molecule to break a larger sugar back down into its monosaccharide components."
    },
    {
      q: "A diagram shows glucose and fructose linked together, with a water molecule released as a by-product. What would be the correct name for the products of this reaction?",
      options: ["Water and sucrose", "Water and maltose", "A dipeptide", "Lactose alone, with no water released"],
      correct: 0,
      explanation: "Joining glucose and fructose together in a condensation reaction produces the disaccharide sucrose, along with a water molecule released as a by-product; maltose is instead formed from two glucose molecules, and lactose from glucose and galactose, so correctly identifying the specific monosaccharides involved is essential to naming the right disaccharide product."
    },
    {
      q: "Polysaccharides and triglycerides are chemically very different classes of molecule, one built from sugar monomers and the other from glycerol and fatty acids, yet they share one feature in common. What is this shared feature?",
      options: ["They are both formed by condensation reactions", "They are both classified as polymers", "They both function as the primary energy store in humans", "Their carbon-to-oxygen ratio is identical in both molecules"],
      correct: 0,
      explanation: "Despite their very different building blocks, both polysaccharides (formed from repeated monosaccharides) and triglycerides (formed from glycerol and fatty acids) are assembled through condensation reactions, each releasing a water molecule as monomers or components are joined together; triglycerides, unlike polysaccharides, are not considered true polymers, since they aren't built from a single repeating type of monomer."
    },
    {
      q: "A diagram shows a molecule with three unbranched carbon chains, one containing a carbon-carbon double bond drawn so that the chain remains straight rather than kinked at that point. What type of fatty acid does this represent?",
      options: ["A saturated fatty acid, since there is no double bond present, or a trans-unsaturated fatty acid if a double bond is shown without a kink", "A cis-unsaturated fatty acid, since the chain is drawn straight", "A polyunsaturated fatty acid, regardless of the chain's shape", "None of the above, since a straight chain always indicates saturation with no double bonds at all"],
      correct: 0,
      explanation: "A straight, unkinked hydrocarbon chain is characteristic either of a fully saturated fatty acid (no double bonds at all) or of a trans-unsaturated fatty acid, in which the hydrogens on either side of a double bond sit on opposite sides of the chain, allowing it to remain straight; a cis double bond, by contrast, forces a distinct kink into the chain, which is the key visual clue distinguishing cis from trans or saturated fatty acids in a diagram."
    },
    {
      q: "Cellulose, glycogen, and starch are all built from glucose monomers, yet cellulose alone provides structural support in plant cell walls while the other two function purely as energy stores. What key structural difference explains this functional distinction?",
      options: ["Cellulose has a structural role because its long, straight, hydrogen-bonded chains give it great tensile strength, unlike the compact, coiled or branched chains of starch and glycogen", "Only cellulose is actually made from glucose monomers", "Cellulose is far more branched than either starch or glycogen", "Cellulose is found exclusively in plants, while starch and glycogen occur in every type of organism"],
      correct: 0,
      explanation: "Cellulose's long, straight chains of beta-glucose, held together by hydrogen bonds into strong microfibrils, give it the tensile strength needed for a structural role in cell walls; starch and glycogen, made instead from alpha-glucose in branched or coiled forms, are more compact and easily broken down, better suited to being efficient energy stores rather than structural materials."
    },
    {
      q: "A diagram shows a fatty acid molecule with no carbon-carbon double bonds anywhere along its hydrocarbon chain. What type of fatty acid is depicted?",
      options: ["A saturated fatty acid", "A monounsaturated fatty acid", "A cis-unsaturated fatty acid", "A vegetable oil"],
      correct: 0,
      explanation: "A fatty acid with no carbon-carbon double bonds at all, meaning every carbon is 'saturated' with the maximum possible number of hydrogen atoms, is classified as a saturated fatty acid; any degree of unsaturation, by contrast, requires the presence of at least one double bond somewhere in the chain."
    }
  ],

  "C1.1": [
    {
      q: "Enzyme-containing laundry detergent was used to remove blood stains at different temperatures. Stain removal was best around 40°C and got noticeably worse at 50°C. What best explains the result at 50°C?",
      options: ["The enzymes denature at 50°C", "The active site shape of some enzymes changes at 50°C", "Enzyme and substrate molecules have maximum kinetic energy at 50°C", "At 50°C, successful binding between enzyme and substrate becomes unlikely"],
      correct: 3,
      explanation: "At temperatures pushing toward denaturation, the enzyme's active site starts losing its precise shape, making successful substrate binding increasingly unlikely, which explains reduced stain breakdown."
    },
    {
      q: "Which pairing correctly matches an example of an anabolic reaction with an example of a catabolic reaction?",
      options: ["Anabolic: hydrolysis of macromolecules into monomers. Catabolic: oxidation of substrates in respiration", "Anabolic: glycogen formation. Catabolic: hydrolysis of macromolecules into monomers", "Anabolic: oxidation of substrates in respiration. Catabolic: protein synthesis", "Anabolic: protein synthesis. Catabolic: glycogen formation"],
      correct: 1,
      explanation: "Glycogen formation builds a larger molecule from smaller units (anabolic), while hydrolysing macromolecules into monomers breaks bonds down (catabolic)."
    },
    {
      q: "A graph plots enzyme activity against increasing temperature. Activity rises to a peak and then falls sharply at higher temperatures. What causes the sharp decline beyond the optimum temperature?",
      options: ["The enzyme denatures as its active site changes shape, so it can no longer bind substrate effectively", "Substrate molecules stop moving at high temperature", "Product concentration builds up and speeds up the reverse reaction", "An inhibitor is automatically released at high temperature"],
      correct: 0,
      explanation: "Beyond the optimum temperature, the extra thermal energy disrupts the hydrogen bonds and other interactions holding the enzyme's tertiary structure together; the active site loses its precise shape (denaturation), so it can no longer bind its substrate efficiently, causing the sharp fall in activity."
    },
    {
      q: "Which of the following is an example of an intracellular enzyme-catalysed reaction, as opposed to an extracellular one?",
      options: ["Glycolysis occurring in the cytoplasm during cellular respiration", "Chemical digestion of food in the stomach and intestine", "Blood clotting occurring in a wound", "Digestive enzymes breaking down food outside a fungal cell"],
      correct: 0,
      explanation: "Glycolysis takes place entirely within the cytoplasm of the cell that needs the ATP it produces, making it intracellular; digestion in the gut, blood clotting, and extracellular fungal digestion all involve enzymes acting outside the cells that produced them."
    },
    {
      q: "Statins are drugs that lower cholesterol levels by reducing the activity of an enzyme involved in cholesterol synthesis, without permanently altering the enzyme's structure. Which type of inhibition best fits this description?",
      options: ["Competitive inhibition, where the drug competes with the natural substrate for the active site", "Irreversible inhibition, where the drug permanently destroys the enzyme", "No inhibition at all, since the enzyme's structure is unchanged", "Allosteric activation, which increases the enzyme's activity"],
      correct: 0,
      explanation: "Statins work as competitive inhibitors: they resemble the enzyme's natural substrate closely enough to bind the active site and block it temporarily, reducing the rate of cholesterol synthesis without permanently damaging the enzyme, which is why their effect can be reversed if the drug is removed."
    },
    {
      q: "A reaction pathway diagram shows the energy levels of substrate, transition state, and products, both with and without an enzyme present. Which change does the enzyme cause on this diagram?",
      options: ["It lowers the activation energy needed to reach the transition state, without changing the overall energy released by the reaction", "It increases the activation energy, making the reaction slower", "It changes the net energy released by the reaction", "It has no effect on any part of the energy diagram"],
      correct: 0,
      explanation: "Enzymes speed up reactions by providing an alternative pathway with a lower activation energy, making it easier for substrate molecules to reach the transition state; crucially, they do not change the overall energy difference between reactants and products, only the height of the energy barrier in between."
    },
    {
      q: "The general term for reactions that break down larger molecules into smaller ones, usually releasing energy, is 'catabolism'. Which of the following is an example of a catabolic process?",
      options: ["Oxidation of glucose during cellular respiration", "Formation of a polypeptide from amino acids", "Photosynthesis converting carbon dioxide into glucose", "Formation of glycogen from glucose monomers"],
      correct: 0,
      explanation: "Catabolism refers to breakdown reactions that release energy, such as the oxidation of glucose during respiration; building larger molecules from smaller ones (protein synthesis, glycogen formation, or photosynthesis) is instead classed as anabolism, which requires an input of energy."
    },
    {
      q: "An experiment places an aquatic plant and a snail together in water containing a CO2-sensitive indicator that is blue when CO2 is low and turns yellow as CO2 rises. Under which condition would the water most likely stay blue after several hours?",
      options: ["The plant is kept in bright light without a snail present, so photosynthesis removes more CO2 than respiration produces", "The plant and snail are both kept in complete darkness", "Only a snail is present, with no plant", "The plant is kept in darkness together with a snail"],
      correct: 0,
      explanation: "In bright light with only a plant present, photosynthesis (which uses CO2) proceeds much faster than the plant's own respiration (which releases CO2), so net CO2 in the water falls and the indicator stays blue; without light, or with a respiring snail also present, CO2 tends to build up instead, turning the indicator yellow."
    },
    {
      q: "Bread dough containing yeast is kept at around 30°C, and this specific temperature is deliberately chosen to make the dough rise most effectively. What is the main reason for choosing this particular temperature?",
      options: ["It is close to the optimum temperature for the enzymes involved in the yeast's cellular respiration, maximising the rate of carbon dioxide production", "Carbon dioxide gas itself expands more at this specific temperature than at any other", "Lactate produced by anaerobic respiration is only released at this temperature", "This temperature denatures competing bacterial enzymes without affecting the yeast at all"],
      correct: 0,
      explanation: "Around 30°C is close to the optimum temperature for the yeast's respiratory enzymes, meaning enzyme activity, and therefore the rate of respiration and CO2 production, is at (or near) its highest; too much higher, and enzymes would begin to denature, slowing the reaction rather than speeding it up further."
    },
    {
      q: "The activity of an enzyme is measured at varying concentrations of a molecule that turns out not to be its usual substrate but appears to reduce the enzyme's activity as its concentration rises. Which hypothesis would best fit this kind of data?",
      options: ["The molecule inhibits the enzyme, for example by preventing normal binding of the substrate to the active site", "The molecule is the enzyme's substrate and is simply being used up over time", "The molecule has no effect on the enzyme's activity at any concentration", "The molecule increases the enzyme's activity by increasing the reaction's activation energy"],
      correct: 0,
      explanation: "A molecule that reduces enzyme activity as its concentration rises, without behaving like the normal substrate, fits the pattern of an inhibitor; a common inhibitory mechanism is competing for or blocking the active site, preventing the true substrate from binding effectively and reducing the observed rate of reaction."
    },
    {
      q: "A graph shows the rate of an enzyme-catalysed reaction increasing with temperature up to a peak, before dropping sharply at higher temperatures. At a point on the graph just past this peak, what would be a valid explanation for the observed decrease in rate?",
      options: ["Some of the enzyme's active sites have changed shape as the protein begins to denature", "All of the substrate molecules have already been converted into product", "Substrate concentration has become the only limiting factor at this point", "Enzyme and substrate molecules have reached their highest possible kinetic energy at this exact point without any negative effect"],
      correct: 0,
      explanation: "Just beyond the optimum temperature, rising thermal energy starts to disrupt the bonds holding the enzyme's tertiary structure together; as active sites begin to lose their precise shape (denaturation), fewer successful enzyme-substrate collisions occur, explaining the drop in reaction rate even though temperature (and therefore kinetic energy) continues to rise."
    },
    {
      q: "A group of students investigate an enzyme-catalysed reaction in the presence of two different inhibitory substances, testing the effect of increasing substrate concentration on reaction rate for each. At very low substrate concentrations, inhibitor 2 shows a noticeably stronger inhibitory effect than inhibitor 1, but this difference shrinks as substrate concentration rises. What does this pattern suggest about inhibitor 1?",
      options: ["Inhibitor 1 likely competes directly with the substrate for the enzyme's active site, since increasing substrate concentration can overcome its effect", "Inhibitor 1 must be a non-competitive inhibitor, unaffected by substrate concentration", "Inhibitor 1 permanently and irreversibly destroys the enzyme's structure", "Inhibitor 1 has no measurable inhibitory effect at any substrate concentration"],
      correct: 0,
      explanation: "A competitive inhibitor's effect can be progressively overcome as substrate concentration rises, since substrate molecules increasingly outcompete the inhibitor for a limited number of active sites; a diminishing difference in inhibitory effect at higher substrate concentrations is therefore consistent with competitive inhibition, unlike non-competitive inhibition, whose effect doesn't diminish with rising substrate concentration."
    },
    {
      q: "A graph of reaction rate against substrate concentration for an enzyme-catalysed reaction shows the rate levelling off into a plateau at higher substrate concentrations. What best explains the shape of the curve at this plateau?",
      options: ["All of the enzyme's active sites are already occupied by substrate molecules at any given moment, so adding more substrate cannot increase the rate further", "The reaction has reached its absolute end point and no further product can ever form", "Collisions between substrate molecules have reached their theoretical fastest possible speed", "The amount of available substrate has become the limiting factor at this point"],
      correct: 0,
      explanation: "Once substrate concentration is high enough that every available enzyme active site is continuously occupied, the reaction is proceeding as fast as the fixed amount of enzyme allows; adding still more substrate beyond this point cannot increase the rate further, since substrate (not enzyme availability) is no longer the limiting factor, producing the plateau seen on the graph."
    },
    {
      q: "Succinate dehydrogenase catalyses the oxidation of succinic acid. Adding malonic acid to the reaction mixture reduces the rate of reaction, but this inhibitory effect can be reversed by adding more succinic acid. What term best describes malonic acid's role in this system?",
      options: ["A competitive inhibitor", "The substrate itself", "The end product of the reaction", "A non-competitive inhibitor"],
      correct: 0,
      explanation: "Because malonic acid's inhibitory effect can be reversed simply by increasing the concentration of the true substrate (succinic acid), this indicates malonic acid is competing directly with succinic acid for the enzyme's active site, the defining feature of a competitive inhibitor, rather than binding elsewhere on the enzyme as a non-competitive inhibitor would."
    },
    {
      q: "Sulfanilamide inhibits a bacterial enzyme that normally uses PABA as its substrate to help synthesise folate, a molecule bacteria need to survive. Sulfanilamide closely resembles PABA in molecular shape. Based on this description, what type of inhibitor is sulfanilamide most likely to be?",
      options: ["A competitive inhibitor, since its structural similarity to PABA allows it to occupy the enzyme's active site and block the true substrate", "A non-competitive inhibitor, binding at a site distinct from the active site", "An allosteric activator, increasing the enzyme's activity", "The natural end product of the reaction, causing feedback inhibition"],
      correct: 0,
      explanation: "A molecule that closely resembles the natural substrate in shape, and is able to compete for the same reaction, is characteristic of a competitive inhibitor: sulfanilamide's structural similarity to PABA allows it to occupy the enzyme's active site instead of PABA, blocking the folate synthesis pathway that bacteria depend on."
    },
    {
      q: "Which of the following is a genuine example of catabolism, the breakdown of larger molecules into smaller ones?",
      options: ["Hydrolysis of a protein into its constituent amino acids", "Translation of mRNA into a polypeptide chain", "Replication of DNA to produce two identical strands", "Synthesis of a disaccharide from two monosaccharides"],
      correct: 0,
      explanation: "Hydrolysing a protein into individual amino acids is a breakdown (catabolic) reaction, releasing smaller molecules from a larger one; translation, DNA replication, and disaccharide synthesis are all anabolic processes, since each builds larger molecules from smaller components rather than breaking them down."
    },
    {
      q: "An enzyme's activity depends critically on the precise three-dimensional shape of its active site, which is determined by a particular level of protein structure. Which statement about this level, tertiary structure, is correct?",
      options: ["A change to an enzyme's tertiary structure can significantly alter or destroy its function, since the shape of the active site depends on it", "Tertiary structure refers simply to the linear sequence of amino acids in the enzyme", "Some enzymes function normally without ever having a tertiary structure", "An alpha helix is an example of tertiary, rather than secondary, protein structure"],
      correct: 0,
      explanation: "Tertiary structure is the overall three-dimensional folded shape of a single polypeptide chain, and it is this shape that determines the precise geometry of an enzyme's active site; since catalysis depends entirely on the active site correctly binding its substrate, any disruption to tertiary structure (such as denaturation) can severely impair or destroy enzyme function."
    },
    {
      q: "Enzymes are highly specific, generally only catalysing a reaction involving one particular substrate or a small group of closely related substrates. What best explains the basis of this specificity?",
      options: ["Enzyme function depends on successful collisions between the substrate and a precisely shaped active site, so only molecules with a complementary shape can bind effectively", "A single active site typically binds to a very broad range of unrelated substrates", "The active site is actually a feature of the substrate rather than the enzyme", "Enzymes permanently stop functioning once removed from solution and immobilized on a solid support"],
      correct: 0,
      explanation: "Enzyme specificity arises because a productive reaction requires successful collisions between substrate molecules and an active site whose shape (and chemical environment) is complementary to that specific substrate; molecules that don't fit this shape cannot bind effectively and so aren't catalysed by that enzyme, which is why enzymes tend to be so selective about which reactions they speed up."
    },
    {
      q: "Laccase, an enzyme extracted from a fungus, is tested for its ability to break down dye molecules at various pH values and temperatures. Which underlying principle explains why laccase's activity would be expected to fall sharply outside a certain range of these conditions?",
      options: ["Extremes of pH or temperature can denature the enzyme, disrupting the precise shape of its active site needed for catalysis", "Laccase's activity is completely unaffected by either pH or temperature", "Laccase only functions correctly when immobilised on a solid support", "Dye molecules become chemically inert outside a certain pH or temperature range, independent of the enzyme"],
      correct: 0,
      explanation: "Like all enzymes, laccase's activity depends on maintaining a precisely folded tertiary structure; extremes of pH or temperature can disrupt the bonds holding this structure together, denaturing the enzyme and distorting its active site so that it can no longer bind and catalyse the breakdown of its substrate effectively."
    },
    {
      q: "A statin drug used to lower cholesterol works by closely resembling the natural substrate of a key enzyme in the cholesterol synthesis pathway, allowing it to occupy the enzyme's active site. What category of inhibitor does this drug belong to?",
      options: ["A competitive inhibitor", "A non-competitive inhibitor", "An irreversible inhibitor that permanently destroys the enzyme", "An allosteric activator that increases enzyme activity"],
      correct: 0,
      explanation: "A drug that resembles the natural substrate closely enough to occupy the enzyme's active site and block the true substrate from binding is, by definition, a competitive inhibitor; because it competes directly for the same site rather than binding elsewhere, increasing the natural substrate's concentration could in principle reduce the inhibitor's effect."
    }
  ],

  "A1.2": [
    {
      q: "Which combination of features correctly describes the molecular structure of DNA?",
      options: ["Complementary base pairing only", "Complementary base pairing and deoxyribose only", "Deoxyribose and thymine only", "Complementary base pairing, deoxyribose, and thymine"],
      correct: 3,
      explanation: "DNA is defined by all three features together: internal complementary base pairing, the sugar deoxyribose, and the base thymine (rather than uracil)."
    },
    {
      q: "The human genome contains around three billion base pairs, yet this information fits inside a nucleus just a few micrometres across. What property of DNA makes it possible to store such a large amount of information so compactly?",
      options: ["The double helix shape alone", "The specific sequence of the four bases along each strand", "The sugar-phosphate backbone", "The presence of complementary base pairing"],
      correct: 1,
      explanation: "Although the double helix, backbone, and base pairing are all structural features of DNA, the actual information is encoded in the linear order (sequence) of the four bases — it's the sequence itself, not the shape, that acts like a four-letter code capable of specifying huge amounts of information in a small physical space."
    },
    {
      q: "Ribosomes in the cytoplasm of a plant cell have a larger relative molecular mass than the ribosomes found inside that same cell's chloroplasts. What best explains this difference in size?",
      options: ["Chloroplasts originated from engulfed prokaryotes, which had smaller ribosomes than the eukaryotic host cell's own ribosomes", "Chloroplast ribosomes are smaller because they only translate short mRNA molecules", "Cytoplasmic ribosomes are larger because they are bound to the rough endoplasmic reticulum", "Chloroplast ribosomes shrink over the cell's lifetime as the chloroplast matures"],
      correct: 0,
      explanation: "According to the endosymbiotic theory, chloroplasts descend from once free-living, engulfed photosynthetic prokaryotes; because prokaryotic ribosomes are smaller than eukaryotic ribosomes, chloroplasts retain this smaller, more bacteria-like ribosome size, distinct from the larger ribosomes found free in the cytoplasm or bound to the rough ER."
    },
    {
      q: "Which feature is shared by both mRNA and DNA, despite their many structural differences?",
      options: ["Covalent bonds link adjacent nucleotides along each strand", "Both use ribose as their sugar component", "Both contain thymine as one of their bases", "Both always exist as double, antiparallel strands"],
      correct: 0,
      explanation: "In both mRNA and DNA, adjacent nucleotides are joined together by covalent phosphodiester bonds forming the sugar-phosphate backbone; DNA and RNA differ in their sugar (deoxyribose vs ribose), in one of their bases (thymine vs uracil), and in that mRNA is typically single-stranded while DNA is double-stranded."
    },
    {
      q: "Unlike the DNA found in the nucleus, the human genome also includes DNA located somewhere else within the cell. Which feature reflects this?",
      options: ["The human genome includes DNA held within the mitochondria, separate from nuclear DNA", "The human genome contains no repetitive sequences at all", "The human genome is entirely contained within a single circular chromosome", "The human genome includes plasmids, similar to those found in bacteria"],
      correct: 0,
      explanation: "In addition to the much larger nuclear genome, human cells also carry a small, separate genome within their mitochondria; this mitochondrial DNA is inherited differently from nuclear DNA (almost exclusively from the mother) and reflects the organelle's evolutionary origin as a once free-living prokaryote."
    },
    {
      q: "Hydrolysing a pure sample of a nucleic acid produces a pentose sugar, together with the bases thymine, guanine, and cytosine. Besides these bases and sugar, what other component would be expected in the hydrolysed sample?",
      options: ["Phosphate", "Uracil", "RNA", "ATP"],
      correct: 0,
      explanation: "A complete nucleotide consists of a phosphate group, a pentose sugar, and a nitrogenous base; since the sample already contains a pentose sugar and DNA-specific bases (thymine indicates DNA rather than RNA, since RNA would show uracil instead), the missing structural component expected from hydrolysing intact nucleotides is phosphate."
    },
    {
      q: "Around 20,000 protein-coding genes are found in the human genome, yet the human proteome (the full set of proteins actually produced) is estimated to be considerably larger than this. What is one reason for this discrepancy?",
      options: ["mRNA can be spliced in different ways after transcription, allowing a single gene to produce more than one distinct protein", "There are more types of amino acid than there are types of nucleotide", "Base substitutions frequently occur during every round of transcription", "Exons are removed from mRNA before translation, leaving only introns to be translated"],
      correct: 0,
      explanation: "Alternative splicing allows a single gene's primary transcript to be processed in more than one way, retaining different combinations of exons and producing multiple distinct mature mRNA molecules (and therefore multiple different proteins) from one gene, which helps explain why the proteome is so much larger than the number of protein-coding genes would suggest on its own."
    }
  ],

  "D1.1": [
    {
      q: "DNA fragments of different sizes are separated using gel electrophoresis, with the wells at the negative electrode end. Which fragments would be expected to travel the furthest across the gel?",
      options: ["4 kb, negatively charged", "10 kb, negatively charged", "10 kb, positively charged", "2 kb, positively charged"],
      correct: 0,
      explanation: "DNA is negatively charged and moves toward the positive electrode, and smaller fragments move through the gel matrix faster, so the smallest negatively-charged fragment travels furthest."
    },
    {
      q: "One of the enzymes involved in DNA replication has a 'proofreading' function, checking each newly added nucleotide and removing incorrect ones before continuing. Which enzyme carries out this role in bacteria?",
      options: ["DNA polymerase III", "DNA primase", "DNA helicase", "DNA ligase"],
      correct: 0,
      explanation: "DNA polymerase III not only adds new nucleotides to the growing strand but also proofreads its own work, detecting and correcting mismatched bases as it goes; helicase unwinds the double helix, primase lays down RNA primers, and ligase joins Okazaki fragments together, but none of these have a proofreading function."
    },
    {
      q: "Meselson and Stahl's classic experiment used density-labelled DNA to distinguish between three possible models of DNA replication. Which pattern of results supported the semi-conservative model specifically?",
      options: ["After one round of replication, all DNA showed an intermediate density, consistent with each new molecule containing one old and one new strand", "After one round of replication, DNA showed only the heaviest density, consistent with entirely new molecules made of only old strands", "After one round of replication, DNA showed only the lightest density, consistent with entirely new strands in every molecule", "The density of DNA never changed across generations, ruling out replication entirely"],
      correct: 0,
      explanation: "The semi-conservative model predicts that each new DNA double helix contains one original (old) strand and one newly synthesised strand; this produces an intermediate density after one round of replication, which is exactly the result Meselson and Stahl observed, ruling out the conservative and dispersive models."
    },
    {
      q: "During DNA replication, one strand is synthesised continuously while the other is synthesised in short fragments that must later be joined together. What causes DNA to become negatively charged and migrate towards the positive electrode during subsequent gel electrophoresis analysis?",
      options: ["The phosphate groups in DNA's sugar-phosphate backbone carry a negative charge, so DNA migrates toward the positive electrode", "DNA is positively charged overall, so it is repelled from the positive electrode", "DNA carries no charge and moves only due to the flow of the surrounding buffer", "DNA becomes negatively charged only after it has been cut by restriction enzymes"],
      correct: 0,
      explanation: "The phosphate groups that make up part of DNA's sugar-phosphate backbone are negatively charged at the pH typically used for gel electrophoresis; because opposite charges attract, this overall negative charge causes DNA fragments to migrate through the gel toward the positive electrode, with smaller fragments moving further in a given time than larger ones."
    },
    {
      q: "During DNA replication, DNA polymerase III makes occasional errors while adding new nucleotides to the growing strand. Which additional function helps to correct most of these errors before replication is complete?",
      options: ["DNA polymerase III has a built-in proofreading function that detects and removes incorrectly paired nucleotides as it goes", "DNA ligase corrects errors by cutting out and replacing incorrect nucleotides", "DNA helicase proofreads the template strand before replication begins", "RNA primase removes any incorrectly added nucleotides after replication is finished"],
      correct: 0,
      explanation: "DNA polymerase III doesn't just add new nucleotides; it also has an inherent proofreading ability that checks each newly added base for correct complementary pairing, removing and replacing any mismatches as it continues along the strand, which is a major reason why DNA replication is so remarkably accurate overall."
    },
    {
      q: "DNA polymerase I plays a distinct and essential role during DNA replication, separate from the main synthesis carried out by DNA polymerase III. What is this specific role?",
      options: ["It removes the short RNA primers laid down earlier and replaces them with DNA nucleotides", "It builds the leading strand continuously by adding DNA nucleotides in one unbroken sequence", "It forms Okazaki fragments on the lagging strand by adding new DNA nucleotides", "It unwinds the double helix ahead of the replication fork to expose the template strands"],
      correct: 0,
      explanation: "Replication cannot begin without a short RNA primer to give DNA polymerase III a starting point; DNA polymerase I's specific job is to later go back over these RNA primers, remove them, and fill in the resulting gaps with the correct DNA nucleotides, ensuring the final DNA molecule contains no leftover RNA."
    },
    {
      q: "During DNA replication, several distinct enzymes carry out specialised roles, including one whose main job is to remove RNA primers and replace them with DNA nucleotides. Which enzyme performs this specific function?",
      options: ["DNA polymerase I", "DNA polymerase III", "DNA helicase", "DNA primase"],
      correct: 0,
      explanation: "DNA polymerase I is specifically responsible for removing the short RNA primers that initiated synthesis and replacing them with the correct DNA nucleotides; DNA polymerase III carries out the bulk of new strand synthesis, helicase unwinds the double helix ahead of the replication fork, and primase lays down the initial RNA primers rather than removing them."
    },
    {
      q: "Two proteins work together to unwind and separate the two strands of the DNA double helix as replication proceeds, keeping them apart long enough for new strands to be synthesised. Which pairing correctly identifies these two proteins?",
      options: ["Helicase and single-strand binding proteins", "DNA polymerase III and DNA polymerase I", "DNA gyrase and DNA polymerase I", "Helicase and DNA primase"],
      correct: 0,
      explanation: "Helicase physically unwinds the double helix by breaking the hydrogen bonds between base pairs, while single-strand binding proteins then attach to the exposed single strands to keep them apart and prevent them from re-annealing before replication enzymes can act on them; DNA polymerase and primase play separate roles in actually synthesising new DNA strands, rather than in unwinding and separating the original two."
    },
    {
      q: "In a classic 1952 experiment, Hershey and Chase infected bacteria with viruses labelled with radioactive isotopes, one type marking protein and the other marking DNA, then measured how much of each isotope ended up inside versus outside the infected bacterial cells. What did the results of this experiment demonstrate?",
      options: ["DNA, not protein, is the genetic material that enters the host cell and directs the production of new virus particles", "Protein, not DNA, is the genetic material responsible for directing viral reproduction", "Neither DNA nor protein enters the host cell during viral infection", "Both DNA and protein enter the host cell in exactly equal amounts"],
      correct: 0,
      explanation: "Hershey and Chase found that the isotope labelling DNA (phosphorus-32) was found predominantly inside the infected bacterial cells, while the isotope labelling protein (sulfur-35) remained largely outside; since only the material that actually enters the cell can be responsible for directing the production of new virus particles, this provided strong evidence that DNA, not protein, is the genetic material."
    },
    {
      q: "What is the specific role of DNA polymerase during the process of DNA replication?",
      options: ["It adds new nucleotides to the growing strand, using the template strand as a guide", "It adds nucleotides directly to the template strand rather than the new strand", "It synthesises messenger RNA from a DNA template", "It carries out translation of mRNA into protein"],
      correct: 0,
      explanation: "DNA polymerase's core function during replication is to add new, complementary nucleotides to the growing new strand, reading the existing template strand to determine which base to add next; it plays no role in synthesising mRNA (that's the job of RNA polymerase during transcription) or in translation, a separate stage of gene expression."
    }
  ],

  "D2.1": [
    {
      q: "A micrograph shows onion root tip cells undergoing mitosis. At one labelled point, new membrane and cell wall material is being assembled by vesicles between the two forming daughter cells. What process is happening there?",
      options: ["Unequal cytokinesis by budding", "Assembly of the new cell membrane and wall from vesicles", "Contraction of an actin-myosin ring", "Movement of chromosomes by microtubules"],
      correct: 1,
      explanation: "Plant cells lack the actin-myosin contractile ring used by animal cells; instead, they build a new cell plate from vesicles fusing together between the two daughter cells."
    },
    {
      q: "Which sequence correctly places these meiosis events in order?\n1. Separation of homologous chromosomes\n2. DNA replication\n3. Crossing over\n4. Pairing of homologous chromosomes",
      options: ["DNA replication, pairing, crossing over, separation", "DNA replication, crossing over, pairing, separation", "Pairing, crossing over, DNA replication, separation", "Pairing, DNA replication, crossing over, separation"],
      correct: 0,
      explanation: "DNA must be replicated before meiosis begins, then homologous chromosomes pair up, crossing over happens between the paired chromatids, and only then are the homologues separated."
    },
    {
      q: "A student examines a slide of onion root tip cells and needs to identify a cell in anaphase. Which feature would confirm this stage rather than metaphase?",
      options: ["Sister chromatids are visibly separating and moving toward opposite poles of the cell", "Chromosomes are aligned in a single row along the equator", "The nuclear envelope has just reformed around two new nuclei", "Chromosomes are just beginning to condense and become visible"],
      correct: 0,
      explanation: "Anaphase is defined by the separation of sister chromatids, which are then pulled towards opposite poles by shortening spindle microtubules; alignment along the equator is characteristic of metaphase, while nuclear envelope reformation and decondensation of chromosomes belong to telophase."
    },
    {
      q: "Both mitosis and meiosis involve the movement of chromosomes to opposite poles of the cell using spindle fibres. Which specific event during anaphase is common to both types of division?",
      options: ["Microtubules shortening to pull chromatids apart towards opposite poles", "Pairing of homologous chromosomes along the equator", "Crossing over between non-sister chromatids", "Formation of four genetically distinct haploid cells"],
      correct: 0,
      explanation: "In both mitosis and (the second division of) meiosis, spindle microtubules attach to chromatids and shorten during anaphase, pulling them apart towards opposite poles; homologous pairing and crossing over, by contrast, are unique to meiosis I and don't occur in mitosis."
    },
    {
      q: "A karyogram is prepared from a cell sample and shows 46 chromosomes, including one X and one Y sex chromosome. What can be concluded from this karyogram?",
      options: ["The sample came from a genetically male individual, since XY is the typical human male sex chromosome combination", "The sample came from a genetically female individual", "The sample must have come from a cell undergoing meiosis", "No conclusion about sex can be drawn from a karyogram"],
      correct: 0,
      explanation: "A karyogram displays an organism's full chromosome set arranged in matching pairs; in humans, the presence of one X and one Y chromosome (rather than two X chromosomes) indicates a genetically male individual, since sex is determined by this specific pair."
    },
    {
      q: "Embryonic stem cells from a very early mouse embryo can be cultured in the laboratory and induced to become almost any specialised cell type. Which term correctly describes cells with this very broad developmental potential?",
      options: ["Totipotent", "Multipotent", "Unipotent", "Fully differentiated"],
      correct: 0,
      explanation: "Totipotent cells, found only in the very earliest stages of embryonic development, can give rise to every cell type in the body plus extra-embryonic structures like the placenta; this is a broader potential than pluripotent, multipotent, or unipotent cells, which have progressively more restricted developmental options."
    },
    {
      q: "A diagram shows a cell containing a specific number of chromosomes, each still made of a single chromatid, with no visible spindle apparatus. What type of cell is most likely being represented if it also contains an unpaired (odd, non-homologous-paired) set of chromosomes?",
      options: ["A haploid gamete", "A diploid somatic cell", "A haploid somatic cell", "A diploid gamete"],
      correct: 0,
      explanation: "A cell containing a single, unpaired set of chromosomes (rather than homologous pairs) is haploid; if this haploid cell is also a reproductive cell rather than a body cell, it is a haploid gamete, produced through meiosis and destined to fuse with another gamete at fertilization to restore the diploid number."
    },
    {
      q: "During meiosis, sister chromatids remain joined together for longer than they do during mitosis, only separating at a specific later stage. At which stage of meiosis do sister chromatids finally separate?",
      options: ["Anaphase II", "Anaphase I", "Metaphase I", "Metaphase II"],
      correct: 0,
      explanation: "During meiosis I, it is the homologous chromosomes (each still made of two sister chromatids) that separate at anaphase I; sister chromatids themselves don't separate until anaphase II, the second meiotic division, which is structurally similar to a normal mitotic anaphase."
    },
    {
      q: "A karyogram shows a pair of homologous chromosomes from a human cell, arranged and matched by size, banding pattern, and centromere position. What feature is always found at the same locus (position) on both members of a homologous pair, regardless of whether the individual is homozygous or heterozygous at that locus?",
      options: ["Alleles controlling the same characteristic (which may or may not be identical to each other)", "Alleles with identical base sequences to one another", "Genes with identical base pair sequences to one another", "Genes carrying the same mutation as one another"],
      correct: 0,
      explanation: "Homologous chromosomes carry the same genes at the same positions (loci), but the specific alleles present at a given locus can differ between the two homologous chromosomes (making the individual heterozygous) or be identical (homozygous); what is guaranteed is that alleles controlling the same characteristic occupy the same locus, not that those alleles are necessarily identical in sequence."
    },
    {
      q: "A chart tracking an inherited hearing condition through several generations of a family shows the condition appearing in children of unaffected parents, roughly equally in males and females. Where would the responsible allele most likely be located?",
      options: ["On a pair of autosomes (not the sex chromosomes)", "On the Y chromosome only", "On the X chromosome only", "On a single, unpaired autosome"],
      correct: 0,
      explanation: "A condition affecting males and females roughly equally, and capable of appearing in children of unaffected (carrier) parents, is consistent with autosomal recessive inheritance, located on one of the paired autosomes rather than the sex chromosomes; sex-linked conditions typically show a skewed sex ratio, most often affecting one sex considerably more than the other."
    },
    {
      q: "A group of researchers observe a cell from a male locust in which paired homologous chromosomes are visibly connected at points where genetic material appears to be exchanged between non-sister chromatids. What can be deduced from this observation?",
      options: ["The cell contains chiasmata and is undergoing crossing over during prophase I of meiosis", "The cell is in prophase of ordinary mitosis", "The cell's chromosomes are circular, similar to a prokaryotic chromosome", "The cell is in prophase II of meiosis, after homologous chromosomes have already separated"],
      correct: 0,
      explanation: "Visible connections between non-sister chromatids of homologous chromosomes, where genetic material is being exchanged, are called chiasmata, and they are the physical evidence of crossing over; this process is specific to prophase I of meiosis, since by prophase II the homologous chromosomes have already separated and crossing over can no longer occur between them."
    },
    {
      q: "Meiosis and mitosis are distinct processes producing very different outcomes, yet they share certain mechanical features in common. What is a genuine similarity between the two types of division?",
      options: ["Both involve spindle fibres pulling chromatids apart towards opposite poles of the cell during their final division", "Both always result in four genetically identical daughter cells", "Both involve pairing of homologous chromosomes prior to division", "Both always produce haploid daughter cells"],
      correct: 0,
      explanation: "Although mitosis produces two genetically identical diploid cells and meiosis produces four genetically varied haploid cells, both processes rely on the same basic mechanism during their final division: spindle fibres attaching to chromatids and shortening to pull them apart toward opposite poles of the cell, ensuring each new cell receives a complete set of genetic material."
    },
    {
      q: "A karyogram of a child with a chromosome condition known to arise from an error during gamete formation in one of the parents shows three copies of a single chromosome instead of the usual two. What kind of error during meiosis would best explain this outcome?",
      options: ["Homologous chromosomes failed to separate completely during meiosis I in one parent, producing a gamete with an extra chromosome", "An extra chromosome replicated itself during anaphase in the affected child's own cells", "Non-disjunction occurred, but only in the child's own mitotic divisions after fertilization", "Pairs of sister chromatids failed to separate during a normal mitotic division"],
      correct: 0,
      explanation: "A condition involving an extra whole chromosome (trisomy) typically results from non-disjunction, the failure of homologous chromosomes to separate properly during meiosis I (or occasionally sister chromatids during meiosis II) in one of the parents, producing a gamete with an extra copy of that chromosome, which combines with a normal gamete at fertilization to give the child three copies overall."
    },
    {
      q: "A micrograph shows a dividing cell with a single, condensed chromosome visible, made of two sister chromatids joined at the centromere, positioned at the middle of the cell. What stage of division does this represent?",
      options: ["Metaphase, since the replicated chromosome is aligned centrally before the chromatids separate", "Telophase, since the chromosome would be a single chromatid from a cell that has already divided", "G1 of interphase, since the chromosome would not yet be visible as a distinct structure", "Anaphase, since sister chromatids would already be separated and moving apart"],
      correct: 0,
      explanation: "A visibly condensed chromosome made of two joined sister chromatids, positioned along the equator of the cell (rather than already separated and moving apart), is characteristic of metaphase; by anaphase, sister chromatids would have already split, and by telophase the chromosome would consist of only a single chromatid within each newly forming daughter cell."
    },
    {
      q: "If a cell has a diploid number of 20 chromosomes, how many chromosomes would be present in that cell during anaphase of mitosis, immediately after sister chromatids separate?",
      options: ["40", "20", "10", "80"],
      correct: 0,
      explanation: "During anaphase of mitosis, sister chromatids separate and each is now counted as an individual chromosome; since DNA replication during interphase doubled the original 20 chromosomes into 20 pairs of sister chromatids (40 chromatids total), separating these chromatids at anaphase results in 40 individual chromosomes momentarily present in the cell before it divides into two daughter cells."
    },
    {
      q: "Which process occurs in both mitosis and meiosis, despite the very different outcomes each type of division ultimately produces?",
      options: ["Splitting of chromosome centromeres, separating sister chromatids from one another", "Exchange of genetic material between non-sister chromatids", "Pairing of homologous chromosomes along the equator of the cell", "Halving of the chromosome number in the resulting daughter cells"],
      correct: 0,
      explanation: "Both mitosis and meiosis (specifically its second division) involve the splitting of centromeres and separation of sister chromatids toward opposite poles of the cell; crossing over and homologous pairing, by contrast, are exclusive to meiosis I, and only meiosis (not mitosis) results in a halved chromosome number in the final daughter cells."
    },
    {
      q: "A tetrad observed in the developing anther of a lily consists of four cells produced by a single mother cell dividing by meiosis. If this particular tetrad contains a combined total of 48 chromosomes across its four cells, what is the diploid chromosome number of this lily species?",
      options: ["24", "48", "12", "96"],
      correct: 0,
      explanation: "Each of the four haploid cells in a tetrad contains half the diploid chromosome number; if the four cells together contain 48 chromosomes in total, each individual haploid cell contains 12 chromosomes (48 divided by 4), meaning the diploid number for this species is 24 (double the haploid number)."
    },
    {
      q: "In humans, non-disjunction (failure of chromosomes to separate correctly) during meiosis can lead to conditions such as Turner syndrome. If non-disjunction occurs during anaphase I of meiosis in a developing egg cell, resulting in one daughter cell with an extra X chromosome (leading to Turner syndrome after fertilization), what chromosome complement would be found in the other daughter cell (the polar body) produced at the end of that same meiotic division?",
      options: ["22 autosomes and no X chromosome at all", "44 autosomes and a single X chromosome", "22 autosomes and two X chromosomes", "44 autosomes and two X chromosomes"],
      correct: 0,
      explanation: "Non-disjunction during meiosis I means a pair of homologous chromosomes fails to separate, so one resulting cell receives both copies of that chromosome (or chromosome type) while the other receives none; if one daughter cell ends up with an extra X (contributing to Turner syndrome after fertilization with a normal sperm), the complementary cell produced in that same division would have the full set of 22 autosomes but no X chromosome at all."
    },
    {
      q: "A tissue sample is examined under a microscope to determine its mitotic index, the proportion of cells actively undergoing mitosis at any given moment. If 800 cells are counted in total, and 200 of them are found to be in some stage of mitosis (rather than interphase), what is the mitotic index for this sample?",
      options: ["0.25", "0.125", "0.75", "1.00"],
      correct: 0,
      explanation: "Mitotic index is calculated as the number of cells actively undergoing mitosis divided by the total number of cells counted; with 200 out of 800 cells in mitosis, the mitotic index is 200 divided by 800, which equals 0.25, meaning a quarter of the sampled cells were actively dividing at the moment the tissue was examined."
    },
    {
      q: "Which statement correctly applies to both meiosis and mitosis, despite their many important differences?",
      options: ["Separation of sister chromatids occurs in both meiosis (during its second division) and mitosis", "Meiosis occurs in a far greater number of body locations than mitosis", "Recombination (crossing over) occurs in both meiosis and mitosis", "A reduction in chromosome number occurs in both meiosis and mitosis"],
      correct: 0,
      explanation: "Separation of sister chromatids toward opposite poles occurs during mitosis and also during the second division of meiosis (meiosis II), which mechanically resembles a normal mitotic division; crossing over and the halving of chromosome number, by contrast, are unique to meiosis and don't occur during mitosis at all, while mitosis (unlike meiosis) occurs throughout the body wherever growth or repair is needed."
    },
    {
      q: "Which process occurs during both mitosis and meiosis, despite meiosis alone producing genetically varied haploid cells?",
      options: ["Separation of chromatids toward opposite poles of the cell", "Formation of chiasmata between homologous chromosomes", "Reduction division, halving the chromosome number", "Exchange of alleles between non-sister chromatids"],
      correct: 0,
      explanation: "Both mitosis and meiosis rely on spindle fibres separating chromatids and pulling them toward opposite poles of the cell during their final division; chiasmata formation, reduction division, and allele exchange between non-sister chromatids are all processes specific to meiosis, arising from the pairing and crossing over of homologous chromosomes that doesn't occur in mitosis."
    },
    {
      q: "During which phase of the cell cycle does DNA replication actually take place?",
      options: ["S phase of interphase", "Early prophase, at the very start of mitosis", "G1 phase of interphase, before any chromosome duplication begins", "Late prophase, just before metaphase begins"],
      correct: 0,
      explanation: "DNA replication occurs specifically during S phase (synthesis phase) of interphase, before mitosis begins; by the time a cell enters prophase, its DNA has already been fully replicated, which is why chromosomes are visible at that stage as two identical sister chromatids joined at a centromere."
    },
    {
      q: "Which statement correctly describes a feature of chromatids during cell division?",
      options: ["Chiasmata form specifically between non-sister chromatids of homologous chromosomes during meiosis", "Sister chromatids separate specifically during meiosis I, not meiosis II", "Crossing over exclusively involves an exchange of DNA between sister chromatids", "Non-sister chromatids always carry an identical combination of alleles to one another"],
      correct: 0,
      explanation: "Chiasmata, the visible points of genetic exchange during crossing over, form specifically between non-sister chromatids belonging to a pair of homologous chromosomes during prophase I of meiosis; sister chromatids (which are genetically identical, not carrying different allele combinations) separate during anaphase II, not meiosis I, and crossing over specifically exchanges material between non-sister, not sister, chromatids."
    },
    {
      q: "What feature distinguishes the chromosomes of eukaryotic cells from those of prokaryotic cells?",
      options: ["Eukaryotic chromosomes are associated with histone proteins, which help package and organise the DNA", "Eukaryotic chromosomes are circular, unlike the linear chromosomes typical of prokaryotes", "Only eukaryotic chromosomes are made of double-stranded DNA molecules", "Eukaryotic chromosomes carry only a single gene each, unlike prokaryotic chromosomes"],
      correct: 0,
      explanation: "Eukaryotic DNA is wrapped around histone proteins, forming a highly organised chromatin structure that allows large amounts of DNA to be packaged efficiently within the nucleus; prokaryotic DNA, by contrast, is typically a single circular chromosome without histones (and eukaryotic chromosomes are linear, not circular, the reverse of what might be assumed), and both types of chromosome carry many genes rather than just one."
    }
  ],

  "B1.2": [
    {
      q: "A table lists valine and lysine as essential amino acids, and alanine and glycine as non-essential. Which conclusion is actually valid from this?",
      options: ["Lysine is synthesised by the human body", "Alanine can only be obtained from food", "Glycine is not used anywhere in the human body", "Valine must be supplied through the diet"],
      correct: 3,
      explanation: "'Essential' amino acid specifically means the body cannot synthesise it, so it must come from food; valine being essential means exactly that."
    },
    {
      q: "A table lists the four levels of protein structure alongside the type of bonding responsible for each. Which pairing correctly matches structural level with stabilizing bond type?",
      options: ["Primary structure is held together by peptide bonds between amino acids", "Primary structure is held together by hydrogen bonds along the backbone", "Secondary structure is held together entirely by disulfide bridges", "Quaternary structure never involves more than one polypeptide chain"],
      correct: 0,
      explanation: "Primary structure is the linear sequence of amino acids joined by covalent peptide bonds; secondary structure (alpha helices and beta sheets) is stabilized by hydrogen bonds along the backbone, tertiary structure involves a wider range of bonds including disulfide bridges, and quaternary structure specifically involves more than one polypeptide chain interacting."
    },
    {
      q: "Myoglobin is a globular protein whose non-polar amino acid side chains are folded towards the molecule's interior, while its polar side chains face outward. What does this arrangement suggest about how myoglobin interacts with its watery surroundings?",
      options: ["The outward-facing polar groups form hydrogen bonds with surrounding water molecules, keeping the protein soluble", "The outward-facing polar groups repel water, making the protein insoluble", "The inward-facing non-polar groups form ionic bonds with water", "The folding pattern has no relationship to solubility"],
      correct: 0,
      explanation: "Globular proteins that function in an aqueous environment typically fold so hydrophilic (polar) side chains face outward, forming hydrogen bonds with surrounding water and keeping the protein in solution, while hydrophobic side chains cluster in the interior away from water — exactly the pattern seen in myoglobin."
    },
    {
      q: "Two amino acids are joined together, releasing a water molecule in the process, to form a short chain. What is this reaction called, and what type of bond does it form?",
      options: ["A condensation reaction, forming a peptide bond", "A hydrolysis reaction, forming a peptide bond", "A condensation reaction, forming a glycosidic bond", "A hydrolysis reaction, forming an ester bond"],
      correct: 0,
      explanation: "Joining two amino acids while releasing water is a condensation reaction, and the covalent bond formed between the amine group of one amino acid and the carboxyl group of the next is specifically called a peptide bond, the basic linkage of every polypeptide chain."
    },
    {
      q: "Someone following a plant-based diet needs to plan their meals carefully to avoid a deficiency that meat-eaters rarely worry about. What is the specific nutritional concern, and why does it arise?",
      options: ["Getting enough of all the essential amino acids, since no single common plant source contains them all in sufficient amounts", "Getting enough total protein, since plant foods contain almost no protein at all", "Avoiding excess protein, since plant proteins are more concentrated than animal proteins", "Getting enough fat, since plant-based diets contain no lipids"],
      correct: 0,
      explanation: "Essential amino acids cannot be made by the body and must come from the diet; most single plant protein sources are missing one or more of them, so a vegan diet needs to combine different plant proteins (like grains and legumes) across the day to supply the full set."
    },
    {
      q: "Which single feature distinguishes a fibrous, structural protein like collagen from a globular protein like an enzyme?",
      options: ["Fibrous proteins form long, repetitive strands adapted for strength, while globular proteins fold into compact, specific shapes adapted for functions like catalysis or transport", "Fibrous proteins are always soluble in water, while globular proteins never are", "Only globular proteins contain peptide bonds", "Fibrous proteins never contain more than one polypeptide chain"],
      correct: 0,
      explanation: "Structural proteins like collagen form long, often cross-linked fibres suited to providing mechanical strength (and are typically insoluble), while globular proteins like enzymes and antibodies fold compactly into a precise 3D shape, exposing functional sites needed for binding, catalysis or signalling."
    },
    {
      q: "Human insulin is made of 51 amino acids arranged across two separate polypeptide chains. How many peptide bonds does a molecule of insulin actually contain?",
      options: ["49", "51", "50", "48"],
      correct: 0,
      explanation: "Within a single polypeptide chain, the number of peptide bonds is always one fewer than the number of amino acids present, since a bond forms between each consecutive pair; because insulin's 51 amino acids are split across two separate chains rather than one continuous chain, two peptide bonds fewer are formed overall than a single 51-amino-acid chain would have, giving 49 peptide bonds in total."
    },
    {
      q: "A diagram of insulin's structure shows two separate polypeptide chains held together by several disulfide bridges, with each individual chain also folded into a specific three-dimensional shape. What level(s) of protein structure does insulin display?",
      options: ["Insulin has primary, secondary, tertiary, and quaternary structure, since it is a single functional protein made of more than one folded polypeptide chain linked by bonds such as disulfide bridges", "Insulin only has primary and secondary structure, since there is no true tertiary folding", "Insulin has only primary, secondary and tertiary structure, since it has just one polypeptide chain", "Insulin has no distinguishable quaternary structure, despite having two chains"],
      correct: 0,
      explanation: "Because insulin is composed of two separate polypeptide chains, each individually folded (through primary sequence, secondary structure, and tertiary folding) and then held together by interchain bonds like disulfide bridges, it displays all four levels of protein structure, including quaternary structure, which specifically refers to the assembly of multiple polypeptide chains into one functional protein."
    },
    {
      q: "An enzyme extracted from a soil bacterium is found to consist of a single, relatively short polypeptide chain of about 110 amino acids, with no evidence of multiple interacting chains. Which levels of protein structure would this enzyme be expected to have?",
      options: ["Primary, secondary, and tertiary structure only", "Primary, secondary, and quaternary structure only", "Primary, tertiary, and quaternary structure only", "Primary, secondary, tertiary, and quaternary structure"],
      correct: 0,
      explanation: "Quaternary structure specifically requires more than one polypeptide chain interacting together; a protein made of just a single polypeptide chain, however complex its folding, can only display primary structure (its amino acid sequence), secondary structure (local folding patterns like alpha helices), and tertiary structure (the overall 3D shape of that one chain) — never quaternary structure."
    },
    {
      q: "Amino acids all share the same basic backbone structure, an amino group, a carboxyl group, and a central carbon, yet there are twenty different types. What accounts for the difference between one amino acid and another?",
      options: ["The composition of the variable side chain (R-group) attached to the central carbon", "The position of the carboxyl group relative to the central carbon", "The number of unsaturated carbon atoms in the backbone", "The position of the amino group relative to the central carbon"],
      correct: 0,
      explanation: "All twenty standard amino acids share an identical core structure (an amino group, a carboxyl group, and a central carbon), and the sole point of difference between them is the composition of the R-group (side chain) attached to that central carbon, which is what gives each amino acid its own distinctive chemical properties."
    },
    {
      q: "A short peptide chain contains 18 amino acids joined together in sequence. If this peptide were synthesised by translation of an mRNA molecule (including a start and stop codon), how many bases would be present in that length of coding mRNA sequence?",
      options: ["60", "54", "36", "18"],
      correct: 0,
      explanation: "Each amino acid in a polypeptide is specified by one three-base codon, so 18 amino acids require 18 codons of coding sequence (54 bases) purely for the amino acids themselves; including a start codon (already counted as coding for the first amino acid, typically methionine) plus a stop codon (an additional three bases that don't code for an amino acid) brings the total mRNA length coding for this peptide to 60 bases."
    },
    {
      q: "Which of the following organic molecules could contain the element sulfur as part of its structure?",
      options: ["Proteins, since certain amino acid R-groups (such as cysteine and methionine) contain sulfur", "Carbohydrates, since all monosaccharides contain sulfur atoms", "Phospholipids, since their phosphate head group always contains sulfur", "Nucleic acids, since the sugar-phosphate backbone contains sulfur"],
      correct: 0,
      explanation: "Proteins are the only one of these molecule classes that can contain sulfur, specifically within the R-groups of certain amino acids such as cysteine and methionine; carbohydrates, phospholipids, and nucleic acids are all built from carbon, hydrogen, oxygen, nitrogen, and phosphorus, but do not typically incorporate sulfur into their core structure."
    }
  ],

  "A2.1": [
    {
      q: "Which description correctly matches an organism that carries out holozoic nutrition?",
      options: ["Chemoautotrophic with no digestion", "Photoautotrophic with no digestion", "Saprotrophic with external digestion", "Heterotrophic with internal digestion"],
      correct: 3,
      explanation: "Holozoic nutrition means taking in whole or bulk food and digesting it internally, which makes it a heterotrophic strategy with internal digestion."
    },
    {
      q: "In 1952, Stanley Miller and Harold Urey sparked an electric discharge through a mixture of gases meant to simulate early Earth's atmosphere. What did their results actually demonstrate?",
      options: ["That living cells can self-assemble from simple chemicals", "That complex organic molecules, including amino acids, can form under early-Earth-like conditions", "That DNA can spontaneously replicate without enzymes", "That life can arise instantly given the right chemical mixture"],
      correct: 1,
      explanation: "The Miller-Urey experiment showed that amino acids and other organic building blocks could be generated abiotically from simple inorganic gases and an energy source, supporting one step of the chemical origin-of-life hypothesis — but it did not create a living cell or demonstrate self-replication."
    },
    {
      q: "A single-celled organism is observed engulfing smaller algal cells and retaining them alive inside food vacuoles rather than digesting them immediately. What can be deduced about this relationship, and how does it connect to a major theory about the origin of eukaryotic organelles?",
      options: ["It illustrates a stable engulfment relationship similar to the process proposed by the endosymbiotic theory for the origin of chloroplasts and mitochondria", "It shows that the organism is a prokaryote incapable of any form of nutrition besides photosynthesis", "It demonstrates that all single-celled organisms eventually evolve into multicellular ones", "It proves the algae are parasites feeding directly on the host's cytoplasm"],
      correct: 0,
      explanation: "A host cell retaining smaller cells alive and functioning within it, rather than digesting them, mirrors the process the endosymbiotic theory proposes for how ancestral eukaryotic cells acquired their mitochondria and chloroplasts: initial engulfment followed by a stable, mutually beneficial relationship rather than digestion."
    },
    {
      q: "According to the endosymbiotic theory, how did mitochondria most likely originate within eukaryotic cells?",
      options: ["A small, free-living aerobic bacterium was engulfed by (or invaded) a larger anaerobic host cell and was retained rather than digested", "An anaerobic prokaryote engulfed a smaller aerobic bacterium and both cells fused their genomes completely", "Invaginations of the plasma membrane of a large prokaryote folded inward to form a double-membraned organelle", "A photosynthetic eukaryote fused directly with another photosynthetic eukaryote"],
      correct: 0,
      explanation: "The endosymbiotic theory proposes that mitochondria originated when a small, free-living aerobic bacterium was engulfed by (or invaded) a larger host cell; rather than being digested, the bacterium survived and eventually became a permanent, energy-producing organelle, which explains why mitochondria retain their own DNA, ribosomes, and double membrane today."
    },
    {
      q: "The first substantial iron ore deposits appear in rock layers dating to around 1.8 billion years ago, forming as dissolved iron in the oceans reacted with a particular dissolved gas and precipitated out. What event most likely explains the sudden availability of this gas in the oceans?",
      options: ["Photosynthetic prokaryotes began releasing oxygen as a by-product, which reacted with dissolved iron and caused it to precipitate out", "Photosynthetic eukaryotes began releasing oxygen as a by-product for the first time", "Prokaryotic organisms began absorbing large quantities of carbon dioxide from seawater", "Volcanic activity suddenly released large amounts of iron directly into the oceans"],
      correct: 0,
      explanation: "Banded iron formations are widely interpreted as evidence of the Great Oxidation Event: as early photosynthetic prokaryotes (cyanobacteria) began releasing oxygen as a by-product of photosynthesis, this oxygen reacted with dissolved iron in the oceans, causing it to oxidise and precipitate out as iron oxide, forming the layered iron deposits seen in rocks from this period."
    },
    {
      q: "A graph of atmospheric oxygen levels over Earth's history shows a marked rise starting around 2.5 billion years ago, well before land plants had evolved. What is the most likely explanation for this early rise in atmospheric oxygen?",
      options: ["Oxygen produced by photosynthetic bacteria was gradually released into the atmosphere", "Photosynthesis by early non-vascular land plants", "Photosynthesis by early vascular land plants", "Increased volcanic activity releasing oxygen directly"],
      correct: 0,
      explanation: "Since land plants (vascular or non-vascular) had not yet evolved 2.5 billion years ago, the rise in atmospheric oxygen at that time must be attributed to earlier photosynthetic organisms, specifically photosynthetic bacteria (cyanobacteria), whose oxygen output gradually accumulated in the atmosphere over hundreds of millions of years."
    },
    {
      q: "An electron micrograph of a cell shows an organelle bounded by a double membrane and containing ribosomes smaller than those found free in the surrounding cytoplasm. Which feature of this organelle is most directly consistent with the endosymbiotic theory?",
      options: ["It contains 70S ribosomes, a size characteristic of prokaryotes rather than the 80S ribosomes typical of the surrounding eukaryotic cytoplasm", "It has only a single membrane rather than a double membrane", "It is surrounded by 80S ribosomes, matching those in the cytoplasm", "It lacks any ribosomes of its own entirely"],
      correct: 0,
      explanation: "Mitochondria and chloroplasts contain smaller, 70S ribosomes, matching the ribosome size typically found in prokaryotes, rather than the larger 80S ribosomes found in the surrounding eukaryotic cytoplasm; together with their double membrane and own circular DNA, this is one of the strongest pieces of evidence supporting the endosymbiotic theory of organelle origin."
    },
    {
      q: "Which of the following observations would be considered evidence in favour of the endosymbiotic theory for the origin of chloroplasts?",
      options: ["Chloroplasts contain their own 70S ribosomes, similar in size to those found in free-living bacteria", "Protein synthesis in the cell occurs exclusively in the cytoplasm", "Organic molecules can be synthesised abiotically under laboratory conditions", "RNA molecules are capable of self-replication in a test tube"],
      correct: 0,
      explanation: "Chloroplasts (like mitochondria) contain their own 70S ribosomes, a bacterial-sized ribosome distinct from the 80S ribosomes used elsewhere in the eukaryotic cell; this, along with their own circular DNA and double membrane, supports the idea that chloroplasts originated as free-living, photosynthetic bacteria that were engulfed by an ancestral eukaryotic cell."
    }
  ],

  "D1.2": [
    {
      q: "A table shows four different mRNA sequences and the amino acids they code for. Which sequence demonstrates degeneracy in the genetic code?",
      options: ["Three different codons coding for three different amino acids", "Different codons coding for the same amino acid at more than one position", "A start codon followed by two other codons for different amino acids", "Three codons for three chemically similar amino acids"],
      correct: 1,
      explanation: "Degeneracy specifically means multiple different codons can code for the same amino acid, so a sequence showing that repetition is the one demonstrating degeneracy."
    },
    {
      q: "An mRNA molecule gets bound and broken down by a nuclease enzyme partway through the translation process. What happens to that particular mRNA molecule as a result?",
      options: ["Transcription of the gene stops", "The mRNA binds more readily to ribosomes", "More copies of this mRNA get synthesised", "That mRNA molecule can no longer be translated"],
      correct: 3,
      explanation: "Once a nuclease has broken down an mRNA molecule, that specific molecule is destroyed and simply can't be used as a template for translation again."
    },
    {
      q: "During translation, ribosomes have three distinct binding sites for tRNA molecules as the growing polypeptide chain moves through. If the leftmost of these three sites (which normally allows a spent tRNA to leave) is experimentally blocked, what would be the most likely immediate effect on translation?",
      options: ["The ribosome would be unable to release the tRNA that has already delivered its amino acid, stalling further progress along the mRNA", "A new tRNA would be unable to enter the ribosome's rightmost binding site", "Translation would proceed at a faster rate than normal", "The mRNA would immediately detach from the ribosome"],
      correct: 0,
      explanation: "The ribosome cycles tRNAs through three sites in sequence; blocking the exit site prevents a tRNA that has already transferred its amino acid from leaving, which would back up the whole translation process even though incoming tRNAs could, in principle, still enter the other sites."
    },
    {
      q: "A section of DNA is transcribed and then translated. If a substitution mutation changes just one DNA base, what determines whether the resulting amino acid sequence actually changes?",
      options: ["Whether the altered codon still codes for the same amino acid, due to the degeneracy of the genetic code", "Whether the mutation occurs during translation rather than transcription", "Whether more than one base has changed", "Whether the mutation occurs in a non-coding region only"],
      correct: 0,
      explanation: "Because the genetic code is degenerate (several codons can specify the same amino acid), a single base substitution doesn't always change the amino acid produced; a 'silent' mutation changes the codon but not the amino acid, while a 'missense' mutation changes both, depending on exactly which codon results."
    },
    {
      q: "Using a table of mRNA codons, a specific sequence of four amino acids (for example Ser-Leu-Arg-Phe) needs to be encoded. Given that several different mRNA codons can specify the same amino acid, what does this illustrate about the genetic code?",
      options: ["The genetic code is degenerate, meaning more than one codon can code for the same amino acid", "The genetic code is ambiguous, meaning one codon can code for more than one amino acid", "Each amino acid has only one possible codon", "The genetic code varies between different species of organism"],
      correct: 0,
      explanation: "The genetic code is described as degenerate (or redundant) because most amino acids can be specified by more than one codon (for example, several codons all code for leucine); it is not ambiguous, however, since each individual codon still only ever specifies one particular amino acid."
    },
    {
      q: "A person following a vegan diet needs to combine different plant protein sources across their meals rather than relying on just one. What is the biochemical reason careful combination matters here?",
      options: ["No single common plant protein source supplies all the essential amino acids in adequate amounts, so combining sources fills in the gaps", "Plant proteins contain no amino acids at all", "The body can synthesise all amino acids itself, making dietary source irrelevant", "Combining sources is only a cultural preference with no biological basis"],
      correct: 0,
      explanation: "Essential amino acids must come from the diet because the body cannot synthesise them; because different plant foods are often deficient in different essential amino acids, deliberately combining complementary sources (such as grains and legumes) ensures that, across a day's meals, the body receives a complete set."
    },
    {
      q: "A short section of the antisense (template) strand of a gene reads 5' CATG 3' as it is being transcribed by RNA polymerase. What is the base sequence, including its correct orientation, of the resulting mRNA transcript?",
      options: ["3' GUAC 5'", "3' CATG 5'", "5' GUAC 3'", "3' GTAC 5'"],
      correct: 0,
      explanation: "RNA polymerase synthesises the new mRNA strand antiparallel and complementary to the template strand, using RNA bases (U instead of T): a template of 5' CATG 3' pairs with a complementary mRNA sequence of 3' GUAC 5' — matching each template base (C-G, A-U, T-A, G-C) in reverse order to preserve the correct antiparallel orientation."
    },
    {
      q: "Ribosomes in a cell can either float freely in the cytoplasm or be attached to the rough endoplasmic reticulum. What generally distinguishes the destination of proteins made by these two ribosome populations?",
      options: ["Free ribosomes typically synthesise proteins used within the cell itself, while bound ribosomes typically synthesise proteins destined for secretion or for insertion into membranes", "Free ribosomes synthesise proteins mainly for secretion, while bound ribosomes make proteins used only inside the cell", "Only bound ribosomes are capable of carrying out translation at all", "Free and bound ribosomes always produce identical proteins regardless of their location"],
      correct: 0,
      explanation: "Ribosomes bound to the rough endoplasmic reticulum typically translate proteins that will be secreted from the cell, inserted into membranes, or packaged into lysosomes, since the RER provides direct access to the cell's internal transport and packaging pathway; free ribosomes in the cytoplasm, by contrast, generally produce proteins that will remain and function within the cytoplasm itself."
    },
    {
      q: "A molecule of mRNA contains a codon that could never appear in a strand of DNA, no matter which gene is being transcribed. Which of the following codons is only possible in RNA?",
      options: ["UCA, since it contains uracil, a base found in RNA but not in DNA", "ATC, since it contains a T base, which appears in both RNA and DNA", "CGC, since it contains only bases common to both molecules", "GTU, since G, T and U all appear in DNA as well as RNA"],
      correct: 0,
      explanation: "RNA uses uracil in place of the thymine found in DNA, so any codon containing a U (like UCA) could only belong to an RNA molecule, never a DNA strand; codons built only from A, T, C, and G, the four bases DNA actually uses, could in principle appear in either molecule (thymine is exclusive to DNA, so any codon with a T is actually invalid for RNA, not for DNA)."
    },
    {
      q: "Which specific role do tRNA-activating enzymes (aminoacyl-tRNA synthetases) play during protein synthesis?",
      options: ["They attach amino acids to their corresponding tRNA molecules, using energy from ATP", "They activate tRNA and amino acids specifically during transcription", "They synthesise ATP and bind it directly to specific tRNA molecules", "They form hydrogen bonds between tRNA anticodons and matching amino acids"],
      correct: 0,
      explanation: "Aminoacyl-tRNA synthetases (tRNA-activating enzymes) use energy from ATP to attach the correct amino acid to its corresponding tRNA molecule, a step that occurs before translation begins, ensuring that each tRNA delivers the amino acid specified by its anticodon when it later pairs with the matching codon on mRNA at the ribosome."
    },
    {
      q: "A diagram shows a short peptide made of 18 amino acids. If this peptide were produced by translating an mRNA molecule that also includes a start and stop codon, how many bases would be present in the length of coding mRNA sequence?",
      options: ["60", "54", "36", "18"],
      correct: 0,
      explanation: "Each amino acid requires one three-base codon, so 18 amino acids require 54 bases of coding sequence for the amino acids themselves; since the start codon is already counted as coding for the first amino acid, an additional stop codon (three more bases, not coding for an amino acid) brings the total mRNA length coding for this peptide to 60 bases."
    },
    {
      q: "A diagram represents both transcription and translation occurring simultaneously, a process observed in prokaryotic cells. Which structures would be labelled X and Y if X represents the enzyme synthesising mRNA and Y represents the structure translating that mRNA even before transcription is complete?",
      options: ["X is RNA polymerase, and Y is a ribosome", "X is a ribosome, and Y is RNA polymerase", "X is DNA polymerase, and Y is RNA polymerase", "X is a ribosome, and Y is DNA polymerase"],
      correct: 0,
      explanation: "In prokaryotes, transcription and translation can occur simultaneously since there's no nuclear envelope separating them; RNA polymerase (X) transcribes DNA into mRNA, and ribosomes (Y) can begin translating that mRNA even before RNA polymerase has finished transcribing the rest of the gene, a coupling not possible in eukaryotes, where transcription is confined to the nucleus."
    },
    {
      q: "A diagram shows the three-dimensional folded structure of a tRNA molecule, with a labelled region at one end distinct from the anticodon loop. What could attach to this labelled region if it represents the 3' end of the tRNA molecule?",
      options: ["An amino acid, which attaches to the 3' end of tRNA via an aminoacyl-tRNA synthetase enzyme", "mRNA, which binds directly to this end of the tRNA", "An anticodon, which is actually located at this end rather than a separate loop", "The P site of the ribosome, which physically binds to this specific region"],
      correct: 0,
      explanation: "The 3' end of a tRNA molecule is where its specific amino acid is attached, a reaction catalysed by an aminoacyl-tRNA synthetase enzyme using ATP; the anticodon, by contrast, is located at a separate loop of the folded tRNA molecule and is responsible for base-pairing with a complementary codon on mRNA, not for binding an amino acid."
    },
    {
      q: "Which region of DNA is directly responsible for coding for the amino acid sequence of a specific protein?",
      options: ["Exons", "Telomeres", "Genes coding for ribosomal RNA", "Regions that regulate gene expression, such as promoters"],
      correct: 0,
      explanation: "Exons are the coding regions of a gene that remain in the mature mRNA after splicing and are directly translated into the amino acid sequence of a protein; telomeres protect chromosome ends, genes for ribosomal RNA produce RNA rather than protein-coding transcripts, and regulatory regions like promoters control whether and how much a gene is transcribed, without themselves coding for protein sequence."
    },
    {
      q: "What is a genuine feature of transfer RNA (tRNA) molecules and their role in protein synthesis?",
      options: ["There is at least one type of tRNA molecule capable of combining with each of the twenty amino acids", "A single type of tRNA molecule can combine with every known amino acid", "tRNA carries out its main functional role within the nucleus", "tRNA molecules are themselves produced by the process of translation"],
      correct: 0,
      explanation: "Because there are twenty different amino acids that need to be delivered to the ribosome during translation, there are correspondingly at least twenty different types of tRNA (often more, accounting for the genetic code's degeneracy), each specific to one amino acid; tRNA carries out its main role in the cytoplasm at the ribosome, not the nucleus, and it is itself produced by transcription, not translation."
    },
    {
      q: "A diagram shows structures involved in transcription and translation, with letters X and Y marking two key components of this process. If X represents the enzyme responsible for synthesising a new RNA strand and Y represents the structure where amino acids are joined together, what are X and Y?",
      options: ["X is RNA polymerase, and Y is a ribosome", "X is a ribosome, and Y is RNA polymerase", "X is DNA polymerase, and Y is a ribosome", "X is a ribosome, and Y is DNA polymerase"],
      correct: 0,
      explanation: "RNA polymerase is the enzyme responsible for transcribing DNA into a new mRNA strand, while ribosomes are the structures where translation occurs and amino acids are joined together into a polypeptide chain; correctly distinguishing these two roles is essential to correctly labelling any diagram of gene expression."
    },
    {
      q: "A diagram shows two nucleic acid molecules side by side, one labelled DNA and the other RNA, each built from different combinations of components. Which combination of components would be found in both DNA and RNA?",
      options: ["Phosphate groups and a nitrogenous base, though the specific sugar and one specific base differ between the two molecules", "Deoxyribose sugar, found identically in both DNA and RNA", "Thymine, found identically in both DNA and RNA", "Exactly the same set of four nitrogenous bases in both molecules"],
      correct: 0,
      explanation: "Both DNA and RNA nucleotides contain a phosphate group and a nitrogenous base, but they differ in their sugar component (deoxyribose in DNA, ribose in RNA) and in one of their four bases (DNA uses thymine, RNA uses uracil in its place), so identifying exactly which components are shared versus different is an important, commonly tested distinction."
    },
    {
      q: "Which molecules are the reactants and products involved during the process of glycolysis?",
      options: ["Glucose and NAD+ are reactants; pyruvate, ATP, and reduced NADH are the products", "Pyruvate and reduced NADH are reactants; glucose and NAD+ are the products", "Only glucose acts as both a reactant and a product of glycolysis", "Oxygen is a required reactant for glycolysis to take place"],
      correct: 0,
      explanation: "Glycolysis begins with glucose and NAD+ as reactants and, through a sequence of cytoplasmic reactions, produces pyruvate, a net gain of ATP, and reduced NADH as products; because glycolysis doesn't require oxygen, it proceeds identically whether the cell will go on to respire aerobically or anaerobically."
    },
    {
      q: "Certain bacterial and viral genomes lack the extensive non-coding regions (such as large introns) that are common in eukaryotic genomes, and transcription and translation can occur simultaneously in prokaryotes. Which statement correctly reflects a real feature of gene expression in the single-celled organism shown coupling both processes together in this way?",
      options: ["RNA is synthesised in a 5' to 3' direction, as it is in all cells, including this coupled system", "mRNA splicing occurs extensively before ribosomes begin translating the transcript", "Large numbers of introns must be removed before translation can begin", "Codon-anticodon binding occurs before RNA polymerase has even attached to the DNA"],
      correct: 0,
      explanation: "RNA polymerase synthesises new RNA in a 5' to 3' direction in every organism, including prokaryotes where transcription and translation are tightly coupled; extensive intron removal (splicing) is largely a eukaryotic feature and generally isn't a major factor in the simpler, more compact genomes typical of prokaryotes, where translation of the mRNA can begin almost immediately as it's being transcribed."
    }
  ],

  "A2.2": [
    {
      q: "An electron micrograph shows an organelle made of extensive folded membrane with no ribosomes attached to its surface. What is this organelle, and what is it most associated with?",
      options: ["Mitochondrion, associated with ATP production", "Smooth endoplasmic reticulum, associated with lipid synthesis", "Rough endoplasmic reticulum, associated with protein synthesis", "Golgi apparatus, associated with protein modification"],
      correct: 1,
      explanation: "Smooth ER lacks ribosomes (unlike rough ER) and its extensive folded membrane is where lipids, including phospholipids and steroids, are synthesised."
    },
    {
      q: "What is one benefit of the nuclear envelope being a double membrane rather than a single one?",
      options: ["It reduces the total surface area of the nucleus", "It allows the envelope to break down into vesicles during mitosis", "It keeps hydrophilic phospholipid tails away from the cytoplasm", "It creates pores for DNA to move into the cytoplasm"],
      correct: 1,
      explanation: "Because it's built from two membranes rather than one continuous barrier, the nuclear envelope can disassemble into small vesicles at mitosis and reassemble afterwards."
    },
    {
      q: "A research group wants to visualise a delicate membrane protein at a single frozen instant, without the chemical fixation methods that can distort protein shape. Which imaging technique is best suited to this?",
      options: ["Standard light microscopy", "Immunofluorescence", "Cryogenic electron microscopy", "Gel electrophoresis"],
      correct: 2,
      explanation: "Cryo-electron microscopy rapidly freezes a sample so that proteins are captured in a near-native, stable conformation without the distortion caused by traditional chemical fixatives, making it especially useful for resolving fine structural detail in delicate molecules."
    },
    {
      q: "A cell biologist wants to know exactly where a specific protein is located within a cell, using a light microscope. Which technique directly achieves this?",
      options: ["Attaching a fluorescent tag to an antibody that binds specifically to the protein", "Staining all proteins in the cell with the same general dye", "Increasing the magnification of a standard bright-field microscope", "Freezing the sample before viewing"],
      correct: 0,
      explanation: "Immunofluorescence uses an antibody linked to a fluorescent marker; because antibodies bind highly specifically to one target protein, the glowing signal reveals precisely where that protein sits within the cell, unlike a general stain or simple magnification increase."
    },
    {
      q: "Ribosomes are the only organelle found in essentially every type of cell, from bacteria to complex eukaryotic cells. Why is this consistent with the role ribosomes play?",
      options: ["Every living cell must be able to synthesise proteins from its genetic information", "Every living cell must be able to divide by mitosis", "Every living cell must photosynthesise", "Every living cell needs a nucleus"],
      correct: 0,
      explanation: "Protein synthesis is a universal requirement of life, since proteins carry out almost every cellular function; ribosomes are the structures that translate mRNA into protein, which is why they appear in prokaryotic and eukaryotic cells alike, even though bacteria lack nuclei and other membrane-bound organelles."
    },
    {
      q: "An electron micrograph shows a cell nucleus surrounded by a double membrane, containing visible chromatin, with endoplasmic reticulum nearby in the cytoplasm. Which statement best describes this nucleus?",
      options: ["It contains chromatin and is surrounded by a double membrane", "It is composed of highly folded internal membranes and is filled with fluid only", "It contains ribosomes and is the main site of protein synthesis in the cell", "It contains other membrane-bound organelles inside it"],
      correct: 0,
      explanation: "The defining structural features of a nucleus are its double membrane (the nuclear envelope) and the chromatin (DNA plus associated proteins) held within it; ribosomes are not the nucleus's defining feature, and while the nucleus is itself a membrane-bound organelle, it doesn't normally contain other membrane-bound organelles within it."
    },
    {
      q: "Certain unusual cells, such as fungal hyphae and skeletal muscle fibres, both contain several nuclei within a single, continuous mass of cytoplasm not divided into separate cells. What feature do both of these cell types share that makes them atypical?",
      options: ["Both contain multiple nuclei", "Both have rigid cell walls", "Both lack membrane-bound organelles entirely", "Both are divided internally into separate walled compartments"],
      correct: 0,
      explanation: "Structures such as fungal hyphae and skeletal muscle fibres are described as coenocytic or syncytial: they contain many nuclei within one shared, undivided cytoplasm, rather than being partitioned into individual, separately-nucleated cells as is typical for most tissues."
    },
    {
      q: "A cryo-electron microscopy image reveals fine structural details of a delicate membrane protein complex frozen in a near-natural conformation. What advantage does this microscopy technique have over standard light microscopy for this kind of specimen?",
      options: ["It achieves much higher resolution, revealing fine molecular detail invisible under a light microscope", "It allows the specimen to be observed alive and moving in real time", "It requires no specialized sample preparation at all", "It only works on specimens that are naturally pigmented"],
      correct: 0,
      explanation: "Electron-based techniques, including cryo-EM, achieve far higher resolution than light microscopy because electrons have a much shorter wavelength than visible light; this makes it possible to resolve fine molecular structures (such as a membrane protein's shape) that would appear as an indistinct blur under even the best light microscope."
    },
    {
      q: "A single-celled *Paramecium* is observed with food vacuoles containing living, photosynthesising algal cells rather than digested remains. What can be deduced about the *Paramecium*'s mode of nutrition from this observation?",
      options: ["It carries out heterotrophic nutrition, since it engulfs other organisms for food, even though in this case some prey has survived", "It is an autotroph, since it hosts photosynthetic algae", "It cannot perform all of the functions of life, since it relies on another organism", "It is a prokaryote, since it lacks a rigid cell wall"],
      correct: 0,
      explanation: "Engulfing other cells as a feeding strategy is a hallmark of heterotrophic (specifically holozoic) nutrition; the fact that some ingested algae happen to survive and photosynthesise inside the Paramecium (a mutualistic relationship) doesn't change the Paramecium's own mode of nutrition, which remains heterotrophic."
    },
    {
      q: "A micrograph of a cell from a male locust shows paired homologous chromosomes connected at points where their non-sister chromatids appear to be exchanging segments. What stage of division is most likely being shown?",
      options: ["Prophase I of meiosis, showing chiasmata where crossing over is taking place", "Prophase of mitosis, with sister chromatids beginning to separate", "Prophase II of meiosis, after homologous chromosomes have already separated", "Anaphase, with chromosomes already moving to opposite poles"],
      correct: 0,
      explanation: "Chiasmata, the visible points where non-sister chromatids of homologous chromosomes exchange genetic material, are diagnostic of crossing over, which occurs specifically during prophase I of meiosis; by prophase II, homologous chromosomes have already separated, so no chiasmata would be visible."
    },
    {
      q: "An electron micrograph of a pancreatic cell shows a nucleus surrounded by an extensive network of endoplasmic reticulum. Which statement correctly describes this nucleus?",
      options: ["It contains chromatin and is surrounded by a double membrane", "It is composed of highly folded internal membranes and a liquid matrix", "It contains ribosomes and is the main site of protein synthesis in the cell", "It contains other membrane-bound organelles"],
      correct: 0,
      explanation: "The defining features of a nucleus are its chromatin (DNA and associated proteins) and its double membrane (nuclear envelope); it is not itself the main site of protein synthesis (that role belongs to ribosomes), and it does not typically contain other membrane-bound organelles within it."
    },
    {
      q: "Which structural feature distinguishes a eukaryotic cell from a prokaryotic cell?",
      options: ["Eukaryotic cells are compartmentalised by internal membranes, while prokaryotic cells are not", "Prokaryotic cells lack ribosomes entirely, while eukaryotic cells possess them", "Only eukaryotic cells contain DNA", "Only prokaryotic cells possess a cell wall"],
      correct: 0,
      explanation: "Eukaryotic cells are compartmentalised into distinct, membrane-bound organelles (including a nucleus), while prokaryotic cells lack this internal membrane organisation; both cell types contain ribosomes and DNA, and cell walls are actually common to many prokaryotes as well as some eukaryotes (such as plants and fungi), so those features don't distinguish the two groups."
    },
    {
      q: "Certain unusual cells, such as fungal hyphae and skeletal muscle fibres, contain several nuclei within one continuous, undivided mass of cytoplasm. What feature do both of these cell types share that makes them atypical?",
      options: ["Both contain several nuclei", "Both possess rigid cell walls", "Both entirely lack membrane-bound organelles", "Both are internally divided into separate compartments"],
      correct: 0,
      explanation: "Structures like fungal hyphae and skeletal muscle fibres are described as coenocytic (or syncytial): they contain multiple nuclei sharing one continuous cytoplasm, rather than being divided into individual, separately-nucleated cells, which is unusual compared with most tissue types."
    },
    {
      q: "Which structure would be found in an animal cell, but never in a bacterial cell?",
      options: ["Mitochondria", "Cell wall", "Pili", "Ribosomes"],
      correct: 0,
      explanation: "Mitochondria are membrane-bound organelles found in animal (and other eukaryotic) cells but never in prokaryotic cells like bacteria, which lack membrane-bound organelles entirely; ribosomes, by contrast, are present in both cell types (though differing in size), while cell walls and pili are specifically bacterial features absent from typical animal cells."
    },
    {
      q: "Chlorella (a photosynthetic alga with a cell wall) and Paramecium are both unicellular eukaryotes living in the same freshwater habitat, but Paramecium is not photosynthetic. Which organelle would be expected in Paramecium but not in Chlorella?",
      options: ["A contractile vacuole, used to expel excess water taken up by osmosis", "A chloroplast, used for photosynthesis", "A rough endoplasmic reticulum, used for protein synthesis", "A mitochondrion, used for aerobic respiration"],
      correct: 0,
      explanation: "Freshwater protists like Paramecium constantly take in water by osmosis from their hypotonic surroundings and rely on a contractile vacuole to expel this excess water and avoid bursting; Chlorella, protected by a rigid cell wall, doesn't face the same osmotic pressure risk and lacks this structure, while both organisms would be expected to have a rough ER and mitochondria."
    },
    {
      q: "An electron micrograph shows a cell organelle with a highly folded internal membrane structure and its own small, circular strand of DNA, distinct from the main nuclear genome. In which organelle is the cell's overall genetic information most completely contained, if this pictured organelle is a mitochondrion?",
      options: ["The nucleus and the mitochondrion together, since both contain a portion of the cell's total genetic material", "The mitochondrion alone, since it contains the cell's entire genome", "The nucleus alone, with no genetic material found anywhere else in the cell", "The endoplasmic reticulum, which stores genetic material for use during protein synthesis"],
      correct: 0,
      explanation: "While the vast majority of a eukaryotic cell's genetic information is held in the nucleus, mitochondria (and chloroplasts, in plant cells) carry their own small, separate genome; a complete account of where a cell's genetic information is located must include both the nucleus and these organelles, not the nucleus alone."
    },
    {
      q: "A micrograph of a cell shows an extensive network of interconnected membranes studded with ribosomes, positioned near the nucleus and evidently active in protein production. What function is this structure performing?",
      options: ["Synthesis of proteins destined for secretion or for insertion into membranes", "Locomotion of the cell through its environment", "Movement of chromosomes during cell division", "Breakdown of worn-out cellular components"],
      correct: 0,
      explanation: "Ribosome-studded membranes of this kind describe the rough endoplasmic reticulum, whose main function is to synthesise, fold, and begin processing proteins that will be secreted from the cell or inserted into a membrane, distinct from structures involved in movement, chromosome segregation, or intracellular digestion."
    },
    {
      q: "An electron micrograph shows a plant cell with organelles labelled W, X, Y and Z. If X and Y are shown to be the nucleus and a chloroplast respectively, in which of these labelled structures would the cell's genome be found?",
      options: ["Both X and Y, since the nucleus holds the main genome and the chloroplast carries its own separate genome", "X only, since only the nucleus contains genetic material", "Y only, since only organelles with a double membrane contain DNA", "Neither X nor Y, since the genome is located in the cytoplasm"],
      correct: 0,
      explanation: "Although the nucleus contains by far the largest portion of a plant cell's genetic material, chloroplasts (like mitochondria) retain their own separate, smaller genome as a legacy of their evolutionary origin as engulfed photosynthetic bacteria, so a complete answer about where the genome is located must include both organelles."
    }
  ],

  "B2.2": [
    {
      q: "Which statement correctly describes a functional property of a membrane-bound organelle?",
      options: ["Rough ER synthesises lipids for use outside the cell", "The nucleus has a double membrane to allow vesicle formation for transport", "The mitochondrion keeps Krebs cycle enzymes and substrates compartmentalised in its matrix", "The Golgi apparatus uses ribosomes to make proteins for export"],
      correct: 2,
      explanation: "The mitochondrial matrix physically concentrates the enzymes and substrates of the Krebs cycle in one compartment, which is exactly what compartmentalisation is for, efficient, localised reactions."
    },
    {
      q: "A protein destined for secretion out of the cell is synthesised on ribosomes attached to a membranous organelle, then modified and packaged before release. Which sequence of organelles correctly describes this protein's journey?",
      options: ["Rough endoplasmic reticulum, then Golgi apparatus, then a secretory vesicle", "Smooth endoplasmic reticulum, then mitochondrion, then nucleus", "Golgi apparatus, then rough endoplasmic reticulum, then lysosome", "Nucleus, then ribosome, then smooth endoplasmic reticulum"],
      correct: 0,
      explanation: "Proteins for secretion are synthesised on ribosomes bound to the rough endoplasmic reticulum, which folds and adds initial modifications; they are then transported to the Golgi apparatus for further processing and sorting, before being packaged into vesicles that fuse with the plasma membrane to release their contents outside the cell."
    },
    {
      q: "Compartmentalising a eukaryotic cell into membrane-bound organelles allows very different chemical reactions to occur at the same time without interfering with each other. Which example best illustrates this advantage?",
      options: ["Digestive enzymes are kept inside lysosomes, separated from the rest of the cytoplasm they would otherwise damage", "All enzymes in a eukaryotic cell are found freely dissolved in the cytoplasm", "Compartmentalisation only matters in prokaryotic cells", "Mitochondria and lysosomes always share the exact same internal environment"],
      correct: 0,
      explanation: "Lysosomes contain powerful digestive enzymes that would break down important cellular components if released freely into the cytoplasm; keeping them isolated inside a membrane-bound compartment allows the cell to safely digest material (like worn-out organelles or engulfed particles) only when and where needed."
    },
    {
      q: "Two very different cell types, a fungal hypha and a skeletal muscle fibre, both contain multiple nuclei within one continuous, undivided cytoplasm rather than being split into separate walled compartments. What term describes this shared, atypical cellular organisation?",
      options: ["Coenocytic (or syncytial) organisation", "Prokaryotic organisation", "Compartmentalised organisation", "Haploid organisation"],
      correct: 0,
      explanation: "A coenocytic (or syncytial) cell contains multiple nuclei sharing one continuous cytoplasm without internal membrane partitions separating them into individual cells; this arrangement is unusual since most eukaryotic tissues are compartmentalised into single-nucleus cells, but it does occur in structures like fungal hyphae and skeletal muscle fibres."
    }
  ],

  "C1.2": [
    {
      q: "In the last step of anaerobic respiration in human muscle cells, pyruvate is converted to lactate using reduced NAD. What is the purpose of this reaction?",
      options: ["To let energy release from glucose breakdown continue", "To build a hydrogen ion gradient for ATP synthesis", "To provide electrons for the electron transport chain", "To reduce carbon compounds in the absence of oxygen"],
      correct: 0,
      explanation: "This reaction regenerates NAD from reduced NAD, and since glycolysis needs a fresh supply of NAD to keep running, this is what allows energy release to continue without oxygen."
    },
    {
      q: "Two respirometers containing germinating seeds were set up, one with soda lime (which absorbs CO2) and one without. After 30 minutes, what result would you expect?",
      options: ["Neither oil drop moves", "Both oil drops move the same amount", "The oil drop moves toward the seeds in both respirometers", "The oil drop moves in the respirometer with soda lime, but not in the one without it"],
      correct: 3,
      explanation: "With soda lime absorbing the CO2 produced, only the oxygen consumption by respiring seeds changes the gas volume and pulls the oil drop; without soda lime, CO2 released roughly replaces the O2 used, so the drop doesn't move."
    },
    {
      q: "Human muscle cells generate ATP without oxygen during intense, short bursts of activity. Which statement correctly identifies where this process occurs and what it produces?",
      options: ["It occurs in the cytoplasm and produces lactate as the end product", "It occurs in the mitochondrial matrix and produces carbon dioxide", "It occurs in the cytoplasm and produces ethanol and carbon dioxide", "It occurs in the mitochondria and produces ATP without producing any additional end product"],
      correct: 0,
      explanation: "Anaerobic respiration in human cells takes place in the cytoplasm (the same location as glycolysis); because oxygen isn't available to accept electrons in the mitochondria, pyruvate is instead converted to lactate, regenerating the NAD+ needed to keep glycolysis running."
    },
    {
      q: "A diagram shows a chemical reaction that occurs during the Krebs cycle, in which malic acid is converted to oxaloacetate with the release of hydrogen atoms captured by NAD. What type of chemical change is malic acid undergoing here?",
      options: ["Oxidation", "Reduction", "Decarboxylation", "Carboxylation"],
      correct: 0,
      explanation: "Losing hydrogen atoms (with their associated electrons) to a hydrogen carrier such as NAD is, by definition, an oxidation reaction; the reverse process, gaining hydrogen atoms and electrons, would be reduction, which is what happens to NAD itself as it becomes NADH in this same reaction."
    },
    {
      q: "The Krebs cycle and the Calvin cycle are very different metabolic pathways, one breaking down organic molecules and the other building them up. What feature do the two cycles genuinely have in common?",
      options: ["Both involve reduction reactions, in which an electron carrier molecule is reduced", "Both are forms of catabolism that release energy", "Both are forms of anabolism that require an input of energy", "Both produce large net amounts of ATP directly"],
      correct: 0,
      explanation: "Despite one being a catabolic pathway (Krebs cycle, breaking down organic molecules) and the other an anabolic pathway (Calvin cycle, building organic molecules), both involve reduction reactions: the Krebs cycle reduces electron carriers like NAD and FAD, while the Calvin cycle uses reduced NADPH to reduce glycerate-3-phosphate into triose phosphate."
    },
    {
      q: "Chemiosmosis, the process by which most ATP is generated during aerobic respiration, occurs across specific membranes within the mitochondrion. Which statement correctly describes a feature of chemiosmosis?",
      options: ["It takes place across the cristae (inner mitochondrial membrane), where a proton gradient drives ATP synthase", "It involves the direct movement of water across a semipermeable membrane", "It can only occur when sunlight is present as an energy source", "It uses ATP directly to actively pump hydrogen ions, rather than producing ATP"],
      correct: 0,
      explanation: "Chemiosmosis is the process in which a hydrogen ion (proton) gradient, built up across a membrane (the cristae in mitochondria, or the thylakoid membrane in chloroplasts) by an electron transport chain, is used to drive ATP synthase and produce ATP; it doesn't itself require sunlight (that's specific to the light-dependent reactions of photosynthesis), and it produces ATP rather than consuming it."
    },
    {
      q: "A metabolic pathway converting the amino acid threonine into isoleucine involves several enzyme-catalysed steps, and the pathway's own end product, isoleucine, inhibits an enzyme earlier in the same pathway once enough isoleucine has accumulated. What is this regulatory mechanism called?",
      options: ["Feedback inhibition, in which the pathway's end product inhibits an enzyme catalysing an earlier step in that same pathway", "Feedback activation, in which the end product speeds up an earlier step", "Competitive inhibition by the starting substrate, threonine, rather than by the end product", "Allosteric activation of the final enzyme in the pathway by its own substrate"],
      correct: 0,
      explanation: "When the end product of a metabolic pathway builds up and inhibits an enzyme that catalyses an earlier step in the same pathway, this is feedback inhibition; it acts as a self-regulating mechanism that prevents overproduction of the end product once there is already enough of it, without needing any external signal."
    },
    {
      q: "Which molecules act as reactants at the start of glycolysis, and which are produced as products by its end?",
      options: ["Glucose and NAD+ are reactants; pyruvate, ATP, and reduced NADH are products", "Pyruvate and ATP are reactants; glucose and NAD+ are products", "Only glucose is a reactant, with no other molecules involved in glycolysis", "Oxygen is required as a reactant for glycolysis to proceed"],
      correct: 0,
      explanation: "Glycolysis takes glucose and NAD+ as starting reactants and, through a series of enzyme-catalysed steps in the cytoplasm, produces two molecules of pyruvate, a net gain of two ATP, and two molecules of reduced NADH; oxygen is not required for glycolysis itself, since this stage occurs identically whether respiration continues aerobically or anaerobically afterward."
    },
    {
      q: "Which of the following equations correctly represents an example of decarboxylation, a reaction that occurs at several points during aerobic respiration?",
      options: ["Pyruvate → Acetyl CoA + CO2", "CO2 + H2O → H2CO3", "CH4 + 2O2 → CO2 + 2H2O", "Glucose + O2 → CO2 + H2O + ATP"],
      correct: 0,
      explanation: "Decarboxylation specifically refers to the removal of a carboxyl group as carbon dioxide from an organic molecule; the conversion of pyruvate to acetyl CoA (occurring at the link reaction, just before the Krebs cycle) releases CO2 in this way, whereas the other equations shown represent different types of reaction (such as combustion or the formation of carbonic acid) that don't specifically remove a carboxyl group as CO2."
    },
    {
      q: "Isocitrate is converted to oxalosuccinate at one point during the Krebs cycle, in a step that releases hydrogen atoms captured by NAD. What type of reaction is isocitrate undergoing in this step?",
      options: ["Oxidation, since it is losing hydrogen atoms (and their electrons) to a hydrogen carrier", "Reduction, since it is gaining hydrogen atoms", "Decarboxylation only, with no accompanying oxidation", "Hydrolysis, since water is required to break a bond in isocitrate"],
      correct: 0,
      explanation: "Losing hydrogen atoms (along with their associated electrons) to an electron carrier such as NAD is, by definition, an oxidation reaction; the Krebs cycle includes several such oxidation steps, each reducing a carrier molecule (like NAD or FAD) that will later contribute electrons to the electron transport chain."
    },
    {
      q: "Oxygen serves a specific, essential role at the very end of the electron transport chain during aerobic respiration. What is this role?",
      options: ["It acts as the final electron acceptor, combining with electrons and hydrogen ions to form water", "It directly supplies the energy used to synthesise ATP", "It is the molecule that carries electrons along the length of the electron transport chain", "It is reduced early in glycolysis before the electron transport chain begins"],
      correct: 0,
      explanation: "Oxygen's essential role in aerobic respiration is to act as the final electron acceptor at the end of the electron transport chain, combining with electrons (that have passed down the chain) and hydrogen ions to form water; without oxygen available to accept these electrons, the electron transport chain backs up and stops functioning, which is why oxygen is required for aerobic respiration to continue."
    },
    {
      q: "A comparison of anaerobic cellular respiration in a yeast species tests how quickly the yeast breaks down three different sugars: lactose, glucose, and galactose. After 42 hours, glucose has been broken down to the greatest extent, and lactose to the least. What conclusion is best supported by this data?",
      options: ["The percentage of sugar remaining unbroken down after 42 hours is greater for lactose than for glucose", "Cellular respiration of lactose necessarily produces glucose as an intermediate step", "The breakdown of glucose and galactose occurs at identical, indistinguishable rates", "The overall rate of cellular respiration is identical regardless of which sugar is used"],
      correct: 0,
      explanation: "If glucose is broken down to the greatest extent and lactose to the least after the same 42-hour period, this directly supports the conclusion that a greater percentage of the original lactose sample remains unbroken down at that time point compared with glucose, reflecting a slower overall rate of anaerobic breakdown for lactose in this yeast species."
    },
    {
      q: "What is a genuine, verifiable difference between aerobic and anaerobic respiration as carried out by yeast?",
      options: ["Anaerobic respiration in yeast produces ethanol as a by-product, while aerobic respiration does not", "Anaerobic respiration requires enzymes, while aerobic respiration does not", "Anaerobic respiration requires glucose as a substrate, while aerobic respiration does not", "Anaerobic respiration produces no oxygen, while aerobic respiration does"],
      correct: 0,
      explanation: "In yeast, anaerobic respiration (alcoholic fermentation) converts pyruvate into ethanol and carbon dioxide as by-products, regenerating NAD+ so glycolysis can continue without oxygen; aerobic respiration, by contrast, fully oxidises the substrate through the Krebs cycle and electron transport chain, producing carbon dioxide and water but not ethanol, and both processes require enzymes and can use glucose as a starting substrate."
    }
  ],

  "C1.3": [
    {
      q: "A photosynthesis experiment measured the relative concentrations of GP, TP, and RuBP in both light and dark conditions. In the dark, GP concentration rose while TP and RuBP concentrations fell. What explains this?",
      options: ["TP and RuBP from the light reactions are used to make GP", "Less ATP and reduced NADP are available to convert GP into TP", "There's a low CO2 supply for carbon fixation in the dark", "The enzyme Rubisco is only active in the presence of light"],
      correct: 1,
      explanation: "Without light, the light-dependent reactions stop producing ATP and reduced NADP, so GP (made via carbon fixation) can't be converted onward into TP, causing GP to build up while TP and RuBP are used up."
    },
    {
      q: "A graph shows the rate of photosynthesis rising with light intensity, then eventually plateauing, at two different CO2 concentrations. At low light intensity, both curves overlap; at high light intensity, the higher-CO2 curve reaches a higher plateau. What limits the rate at each of those two regions?",
      options: ["Low light region: CO2 concentration. High light region: light intensity", "Low light region: temperature. High light region: light intensity", "Low light region: light intensity. High light region: CO2 concentration", "Low light region: light intensity. High light region: temperature"],
      correct: 2,
      explanation: "When the two curves overlap, light must be the shared limiting factor; once they diverge and the higher-CO2 curve pulls ahead, CO2 concentration has become the limiting factor instead."
    },
    {
      q: "An experiment tested photosynthesis rate across a temperature range up to 70°C. What pattern would you expect between 25°C and 70°C?",
      options: ["A decrease from 25-35°C, then an increase from 35-70°C", "A continuous increase all the way to 70°C", "An increase to a maximum around 30-40°C, then a decrease", "A peak just above 25°C followed by a constant rate"],
      correct: 2,
      explanation: "Photosynthesis rate depends on enzyme activity, which rises with temperature up to an optimum (typically 30-40°C for many plants) before enzymes begin to denature and the rate falls."
    },
    {
      q: "A chromatography experiment separates leaf pigments; each pigment travels a different distance up the paper relative to the solvent front, giving it a characteristic Rf value. What does a pigment's Rf value depend on?",
      options: ["The pigment's solubility in the solvent relative to how strongly it binds to the paper", "The pigment's molecular mass alone", "The colour of the pigment as seen by eye", "The temperature of the room during the experiment only"],
      correct: 0,
      explanation: "Rf value reflects the balance between how soluble a pigment is in the mobile solvent (which carries it up the paper) and how strongly it adsorbs to the stationary paper (which holds it back); different pigments have different combinations of these properties, producing distinct, reproducible Rf values that can be used to identify them."
    },
    {
      q: "Diagrams of a chloroplast show distinct regions: the stroma and the stacked thylakoid membranes (grana). In which of these regions does the Calvin cycle take place?",
      options: ["The stroma, the fluid-filled space surrounding the thylakoids", "The thylakoid membrane itself", "The intermembrane space between the outer and inner chloroplast membranes", "Outside the chloroplast, in the cytoplasm"],
      correct: 0,
      explanation: "The light-dependent reactions occur across the thylakoid membranes, but the Calvin cycle (light-independent reactions) takes place in the stroma, the fluid matrix surrounding the thylakoids, where the enzymes and intermediates needed to fix carbon dioxide into sugars are located."
    },
    {
      q: "During the light-dependent reactions of photosynthesis, electrons ultimately reduce a molecule that will later be used to power carbon fixation in the Calvin cycle. Which molecule is reduced, and where do the electrons that reduce it come from?",
      options: ["NADP is reduced by accepting electrons that originated from photosystem I", "NAD is reduced by accepting electrons from ATP", "Water is reduced by releasing electrons to NADPH", "Glycerate-3-phosphate is reduced by oxidizing NADPH"],
      correct: 0,
      explanation: "At the end of the electron transport chain in the light-dependent reactions, electrons from photosystem I are used to reduce NADP+ to NADPH; this NADPH then supplies the reducing power needed in the Calvin cycle to convert glycerate-3-phosphate into triose phosphate."
    },
    {
      q: "In each full turn of the Calvin cycle needed to eventually produce one molecule of glucose, several molecules of RuBP must be regenerated to keep the cycle running. How many RuBP molecules are regenerated overall in the production of one glucose molecule?",
      options: ["6", "2", "10", "14"],
      correct: 0,
      explanation: "Producing one glucose molecule requires two turns of the Calvin cycle's output being combined, but to keep the cycle continuously running, six RuBP molecules must be regenerated using six CO2 molecules fixed across six turns of the cycle — a detail worth learning precisely, since it's a common point of confusion."
    },
    {
      q: "A graph plots the rate of photosynthesis against light intensity at several different, fixed CO2 concentrations, with temperature held constant. At a point on the graph where increasing light intensity no longer increases the rate of photosynthesis, but increasing CO2 concentration does, what is the limiting factor at that point?",
      options: ["Carbon dioxide concentration", "Light intensity", "Temperature", "Chlorophyll content"],
      correct: 0,
      explanation: "The limiting factor at any point on such a graph is whichever variable, if increased, would raise the rate of photosynthesis; since increasing CO2 (not light) raises the rate at that point, CO2 concentration — not light intensity — must be the factor currently holding photosynthesis back."
    },
    {
      q: "Which group(s) of organisms release oxygen as a by-product of their photosynthesis?",
      options: ["Algae and cyanobacteria, but not fungi", "Fungi only", "Algae and fungi, but not cyanobacteria", "Cyanobacteria and fungi, but not algae"],
      correct: 0,
      explanation: "Oxygen is released as a by-product specifically by oxygenic photosynthesis, which uses water as an electron donor; algae and cyanobacteria both carry out this type of photosynthesis, but fungi are heterotrophic and do not photosynthesise at all."
    },
    {
      q: "Free-air carbon dioxide enrichment (FACE) experiments raise CO2 concentration around plants growing in their natural outdoor environment, rather than in a sealed laboratory chamber. What is the main advantage of this experimental design?",
      options: ["The results more realistically reflect how photosynthesis rates might respond to rising atmospheric CO2 in the field", "It allows scientists to control temperature more precisely than in a lab", "It removes the need to measure CO2 concentration at all", "It eliminates natural variation between individual plants"],
      correct: 0,
      explanation: "Because FACE experiments expose plants to elevated CO2 under otherwise natural, uncontrolled field conditions (natural weather, soil, competition, pests), the resulting data on photosynthesis and growth are considered more representative of how real ecosystems will respond to future atmospheric change than results from an artificial, fully controlled chamber."
    },
    {
      q: "A photosynthesis-linked indicator experiment tests the growth of a plant supplied with different wavelengths of light. Data show a much higher rate of photosynthesis under red and blue light than under green light. What does this pattern reflect?",
      options: ["Chlorophyll absorbs red and blue light strongly but reflects most green light", "Chlorophyll absorbs green light most strongly of all wavelengths", "All wavelengths of light are absorbed equally by chlorophyll", "Photosynthesis does not depend on wavelength, only on total light intensity"],
      correct: 0,
      explanation: "Chlorophyll's absorption spectrum shows strong absorption in the red and blue regions of visible light, with relatively little absorption (and lots of reflection) in the green region, which is exactly why leaves appear green and why photosynthetic rate tends to be lower under green light."
    },
    {
      q: "An aquatic plant kept in bright light for 30 minutes produces visible gas bubbles inside its stem, which collect in a test tube above it. What is the most likely explanation for the presence of these bubbles?",
      options: ["Oxygen gas is released when light energy splits water molecules during the light-dependent reactions of photosynthesis", "Oxygen is formed when carbon dioxide directly combines with chlorophyll molecules", "Carbon dioxide is released during the light-dependent reactions of photosynthesis", "Carbon dioxide is released from a chemical reaction unrelated to photosynthesis occurring in the water"],
      correct: 0,
      explanation: "During the light-dependent reactions of photosynthesis, light energy is used to split (photolyse) water molecules, releasing oxygen gas as a by-product; this is the source of the bubbles seen collecting from a healthy aquatic plant photosynthesising rapidly under bright light, distinct from carbon dioxide, which is used up rather than released during photosynthesis."
    },
    {
      q: "A graph shows how varying light intensity affects the rate of photosynthesis under two different, fixed carbon dioxide concentrations, all at a constant, optimum temperature. At low light intensity, increasing CO2 concentration makes no difference to the measured rate. What does this indicate?",
      options: ["Light intensity, not CO2 concentration, is the limiting factor under these low-light conditions", "CO2 concentration is the limiting factor at low light intensity", "Temperature must be the limiting factor, since it was held constant", "Neither light nor CO2 has any effect on photosynthesis under these conditions"],
      correct: 0,
      explanation: "The limiting factor at any given point is whichever variable, if increased, would actually raise the rate of photosynthesis; if increasing CO2 makes no difference at low light, that rules out CO2 as the limiting factor there, and instead indicates that photosynthesis is being held back by insufficient light energy, which remains the bottleneck regardless of how much CO2 is available."
    },
    {
      q: "A structural diagram of a chloroplast, produced using high-resolution electron tomography, shows a stack of flattened membrane sacs and a surrounding fluid region. What is the name of the stacked structures, and which stage of photosynthesis occurs in the surrounding fluid region instead?",
      options: ["The stacked structures are grana (made of thylakoids), and the light-independent reactions (Calvin cycle) occur in the surrounding stroma", "The stacked structures are stroma, and the light-dependent reactions occur in the grana", "The stacked structures are mitochondrial cristae, and respiration occurs in the surrounding matrix", "The stacked structures are grana, and no other photosynthetic reactions occur elsewhere in the chloroplast"],
      correct: 0,
      explanation: "The stacks of flattened thylakoid membranes are called grana, and this is where the light-dependent reactions take place; the light-independent reactions (Calvin cycle) instead occur in the stroma, the fluid-filled matrix that surrounds and separates the grana within the chloroplast."
    },
    {
      q: "A Free-Air CO2 Enrichment (FACE) experiment exposes crop plants growing in an open field to elevated CO2 concentrations, without using an enclosed chamber, and measures their rate of photosynthesis over an entire growing season. What is the main methodological advantage of this outdoor design over a sealed laboratory chamber?",
      options: ["Results are more representative of how real crops would respond to future rising atmospheric CO2 under natural field conditions", "It removes the need to measure light intensity, since sunlight is assumed to be constant everywhere", "It eliminates any variation between individual plants entirely", "It allows temperature to be perfectly controlled, unlike a sealed chamber"],
      correct: 0,
      explanation: "Because FACE experiments expose plants to elevated CO2 while leaving natural weather, soil, pests, and competition unchanged, the resulting data on photosynthesis and crop yield are considered more realistic and representative of actual future field conditions than results obtained from an artificial, fully controlled indoor chamber."
    },
    {
      q: "Which processes occurring during photosynthesis specifically require ATP as an energy source? I. Splitting of water molecules II. Regeneration of ribulose bisphosphate (RuBP) III. Maintaining a proton gradient between the thylakoid space and the stroma",
      options: ["II only", "I only", "I and II only", "II and III only"],
      correct: 0,
      explanation: "Regenerating RuBP within the Calvin cycle requires an input of ATP (as well as NADPH); splitting water molecules (photolysis) is driven directly by light energy rather than ATP, and maintaining the proton gradient across the thylakoid membrane is itself the process that generates ATP (via chemiosmosis) rather than consuming it, so only RuBP regeneration among these three actually requires ATP."
    },
    {
      q: "A graph plots the rate of photosynthesis against light intensity at a fixed CO2 concentration of 0.03% and a fixed optimal temperature. At a low light intensity, increasing CO2 concentration further makes no measurable difference to the rate. What can be concluded from this observation?",
      options: ["Light intensity, not CO2 concentration, is the limiting factor under these low-light conditions", "CO2 concentration is definitely the limiting factor at this point on the graph", "Temperature must be the limiting factor, since it was held constant", "Neither light intensity nor CO2 concentration has any effect on this reaction"],
      correct: 0,
      explanation: "The limiting factor at any point on such a graph is whichever variable would actually increase the rate of photosynthesis if increased; since raising CO2 makes no difference under low light, that rules out CO2 as the limiting factor at that point, leaving light intensity as the factor currently holding photosynthesis back."
    },
    {
      q: "A diagram of a thylakoid membrane shows electrons passing from one point (X) to another (Y) along an electron transport chain, with hydrogen ions accumulating in the thylakoid space. Which processes are occurring at points X, Y, and within the thylakoid space?",
      options: ["X represents an earlier electron carrier, Y a later one, and the thylakoid space is where a proton gradient builds up to drive ATP synthase", "X and Y both represent locations where CO2 is being fixed into organic molecules", "The thylakoid space is where the Calvin cycle takes place, not the stroma", "Electrons flow from Y back to X, in the opposite direction to what's described"],
      correct: 0,
      explanation: "In the light-dependent reactions, electrons move along a chain of carrier molecules embedded in the thylakoid membrane, losing energy at each step that is used to pump hydrogen ions into the thylakoid space; the resulting proton gradient across the membrane then drives ATP synthase as protons flow back out, a process entirely separate from the Calvin cycle, which occurs in the stroma rather than inside the thylakoid space."
    },
    {
      q: "A green plant is exposed to different colours of light of equal intensity, and the rate of oxygen release is measured under each. Under which colour of light would oxygen release be expected to be lowest?",
      options: ["Green light, since chlorophyll reflects most green light rather than absorbing it", "Blue light, since chlorophyll absorbs blue light strongly", "Red light, since chlorophyll absorbs red light strongly", "White light, since it contains a full mixture of all wavelengths"],
      correct: 0,
      explanation: "Chlorophyll's absorption spectrum shows strong absorption of red and blue light but comparatively weak absorption of green light, most of which is instead reflected (which is also why leaves appear green); with less green light actually absorbed, less energy is available to drive the light-dependent reactions, resulting in a lower rate of oxygen release under green light compared with red, blue, or white light."
    },
    {
      q: "A student measures the volume of carbon dioxide exchanged by a potted plant at several different light intensities, using an apparatus that detects gas volume changes. At the lowest tested light intensities, the data shows a net release of carbon dioxide from the plant rather than a net uptake. What does this indicate about the plant at those low light levels?",
      options: ["The rate of cellular respiration exceeds the rate of photosynthesis at these low light intensities", "The rate of photosynthesis exceeds the rate of cellular respiration at these low light intensities", "No respiration is occurring in the plant under these conditions", "No photosynthesis is occurring in the plant under any of the tested conditions"],
      correct: 0,
      explanation: "A net release of CO2 indicates that more CO2 is being produced by respiration than is being consumed by photosynthesis; at low light intensities, the rate of photosynthesis is often too slow to keep pace with the plant's ongoing respiration, so respiration temporarily dominates and CO2 accumulates rather than being absorbed."
    },
    {
      q: "Within the stroma of a chloroplast, several reactions of the Calvin cycle take place, including carbon fixation and the regeneration of RuBP. Which of the following reactions does NOT take place in the stroma?",
      options: ["Reduction of NADP to NADPH, which occurs in the light-dependent reactions across the thylakoid membrane", "Fixation of carbon dioxide onto RuBP", "Synthesis of carbohydrates from triose phosphate", "Regeneration of ribulose bisphosphate (RuBP)"],
      correct: 0,
      explanation: "The reduction of NADP+ to NADPH occurs during the light-dependent reactions, which take place across and within the thylakoid membrane, not in the stroma; carbon fixation, RuBP regeneration, and carbohydrate synthesis, by contrast, are all part of the Calvin cycle (light-independent reactions), which does take place in the stroma."
    },
    {
      q: "A thin layer chromatogram separates several photosynthetic pigment fractions from a plant sample, each travelling a different distance up the plate relative to the solvent front. Which pigment would be expected to have travelled the furthest, and what does this indicate about it?",
      options: ["The pigment that is most soluble in the solvent used, relative to how strongly it adsorbs to the stationary phase", "The pigment with the largest overall molecular mass, regardless of solubility", "The pigment that absorbs the most red light specifically", "The darkest-coloured pigment on the plate, regardless of any other property"],
      correct: 0,
      explanation: "In chromatography, how far a pigment travels relative to the solvent front (its Rf value) depends on the balance between its solubility in the mobile solvent and how strongly it adheres to the stationary paper or plate; a pigment travelling furthest is the one most soluble in the solvent relative to how strongly it's held back by the stationary phase, not necessarily the one with the largest molecular mass or darkest colour."
    }
  ],

  "B2.3": [
    {
      q: "A stem cell diagram shows one cell type giving rise to red blood cells, lymphocytes, platelets, and phagocytes, but nothing outside the blood system. What type of stem cell is this, and where is it typically found?",
      options: ["Totipotent, found in bone marrow", "Multipotent, found in bone marrow", "Totipotent, found in blood", "Multipotent, found in blood"],
      correct: 1,
      explanation: "A stem cell that can only produce a limited range of related cell types (here, blood cell types) is multipotent, and this description matches haematopoietic stem cells found in bone marrow."
    },
    {
      q: "Which of these specialised human cells has by far the largest cell volume?",
      options: ["Egg cell", "Sperm cell", "Red blood cell", "White blood cell"],
      correct: 0,
      explanation: "The egg cell is packed with cytoplasm, organelles, and nutrient stores to support early development, making it enormously larger by volume than the other cell types listed."
    },
    {
      q: "Phloem sieve tube elements and human red blood cells are both described as atypical cells. What do they have in common that makes them unusual?",
      options: ["They have no cytoplasm at all", "Their DNA sits loose in the cytoplasm", "They lack a nucleus", "They lack every membrane-bound organelle"],
      correct: 2,
      explanation: "Both cell types lose their nucleus as part of their specialisation, sieve tube elements to maximise space for transport, and red blood cells to maximise space for haemoglobin."
    },
    {
      q: "Cells taken from a very early mouse embryo, before any tissue types have formed, can be coaxed in a lab to become almost any cell type in the body. What term describes this level of developmental potential?",
      options: ["Totipotent", "Pluripotent", "Multipotent", "Unipotent"],
      correct: 0,
      explanation: "The very earliest embryonic cells, capable of forming every cell type in the body plus extra-embryonic tissues like the placenta, are described as totipotent; slightly later embryonic stem cells that can form any body cell type (but not extra-embryonic tissue) are called pluripotent instead."
    },
    {
      q: "Stem cells found in adult bone marrow can develop into several types of blood cell, but not into unrelated cell types like neurons or muscle. What term describes this more limited developmental potential?",
      options: ["Totipotent", "Pluripotent", "Multipotent", "Unipotent"],
      correct: 2,
      explanation: "Multipotent stem cells, such as those found in bone marrow, can differentiate into a limited range of related cell types (in this case, various blood cell lineages), unlike totipotent or pluripotent cells, which retain the ability to form essentially any cell type in the body."
    },
    {
      q: "As an embryo develops, initially identical cells become exposed to different concentrations of signalling molecules depending on their position. What is the result of this exposure?",
      options: ["Cell differentiation, as different concentrations of signal switch different genes on or off", "Uncontrolled cell division with no change in cell identity", "Meiosis, producing haploid gametes", "Apoptosis of all exposed cells"],
      correct: 0,
      explanation: "Gradients of signalling molecules (morphogens) across a developing embryo cause cells in different positions to experience different concentrations, switching on different combinations of genes and steering otherwise identical cells down different developmental pathways — the basis of cell differentiation."
    },
    {
      q: "Researchers are comparing embryonic stem cells with adult (somatic) stem cells for a potential therapy to repair spinal cord injuries. What would be a genuine advantage of using embryonic stem cells instead?",
      options: ["A wider range of cell types can potentially be produced from them, since embryonic stem cells are more pluripotent than most adult stem cells", "There is a lower risk of immune rejection when using embryonic stem cells from an unrelated donor", "Embryonic stem cells carry no risk of forming tumours, unlike adult stem cells", "Unlimited numbers of embryonic stem cells can easily be extracted from adult bone marrow"],
      correct: 0,
      explanation: "Embryonic stem cells are pluripotent, capable of differentiating into a much broader range of cell types than the more limited, multipotent adult stem cells typically found in specific adult tissues; this broader potential is a genuine practical advantage, even though embryonic stem cells raise other ethical and rejection-related considerations that adult stem cells may not."
    },
    {
      q: "Mature mammalian red blood cells lack a nucleus, mitochondria, and ribosomes, unlike most other cell types in the body. Which statement correctly applies to red blood cells given this unusual structure?",
      options: ["They cannot produce new enzymes or other proteins, since they lack ribosomes needed for translation", "No chemical reactions of any kind take place within their cytoplasm", "Materials are completely unable to enter red blood cells", "Materials are completely unable to exit red blood cells"],
      correct: 0,
      explanation: "Without ribosomes, red blood cells cannot synthesise new proteins (including enzymes), which limits their functional lifespan since they cannot replace damaged proteins over time; they can, however, still carry out certain chemical reactions using existing enzymes already present in the cytoplasm, and materials such as oxygen and carbon dioxide continue to move in and out of the cell."
    },
    {
      q: "In a classic developmental biology experiment, a two-cell sea urchin embryo was physically separated into two individual cells by researchers, and each cell went on to develop into a complete, viable adult sea urchin. What is the correct relationship between the two resulting adults?",
      options: ["They are clones of one another, since both developed from cells with identical genetic material derived from the same original zygote", "They are equivalent to non-identical twins, since they came from separate fertilization events", "Only half of their genes would be identical to one another", "Both adults would have haploid cells rather than diploid cells"],
      correct: 0,
      explanation: "Because both cells originated from the same fertilized zygote by an early mitotic division, they carry identical genetic material; when experimentally separated and each allowed to develop independently into a full organism, the resulting adults are genetically identical clones of one another, demonstrating the totipotency of very early embryonic cells."
    }
  ],

  "D2.2": [
    {
      q: "DNA in a eukaryotic cell is wound tightly around clusters of histone proteins, forming repeating bead-like units along the chromosome. What is each of these units called?",
      options: ["A nucleosome", "A ribosome", "A centromere", "A chromatid"],
      correct: 0,
      explanation: "A nucleosome consists of a length of DNA wrapped around a core of eight histone proteins; nucleosomes are the basic packaging unit that allows enormous lengths of DNA to be condensed and organised within the small space of a eukaryotic nucleus, and their structure also plays a role in regulating gene expression."
    },
    {
      q: "A twin study measures methylation levels at a particular gene region on chromosome 2 and finds that one identical twin shows consistently higher methylation than the other, despite having an essentially identical DNA sequence. What could explain this difference?",
      options: ["An epigenetic modification, such as increased methylation of cytosines in the promoter region of one twin", "A difference in the underlying DNA base sequence between the twins", "Complete loss of the gene in one twin", "A difference in the number of chromosomes between the twins"],
      correct: 0,
      explanation: "Since identical twins share essentially the same DNA sequence, a difference in gene expression between them is best explained by an epigenetic change, such as differential DNA methylation, which can switch gene expression up or down without altering the underlying base sequence — often influenced by different environmental exposures over a lifetime."
    },
    {
      q: "Increased methylation of cytosine bases in the promoter region of a gene is generally associated with what effect on that gene's expression?",
      options: ["A decrease in gene expression, since methylation typically prevents transcription factors from binding effectively", "An increase in gene expression, since methylation activates the promoter", "No effect on gene expression at all", "A permanent, irreversible change in the DNA base sequence itself"],
      correct: 0,
      explanation: "Methylation of cytosines in a promoter region typically blocks transcription factors and RNA polymerase from binding effectively, silencing or reducing expression of the associated gene; because this modification changes gene activity without altering the DNA sequence, it is classed as an epigenetic (rather than genetic) change, and it can potentially be reversed."
    }
  ],

  "D1.3": [
    {
      q: "Two DNA sequences are compared: one reads ...GGACTGAGGACTCCTC... and the other reads ...GGACTGAGGACACCTC..., with a single base swapped partway along. What type of mutation is this?",
      options: ["Substitution", "Polyploidy", "Insertion", "Deletion"],
      correct: 0,
      explanation: "Since the sequences stay the same length and only one base has been swapped for another, this is a substitution mutation, not an insertion, deletion, or a whole-genome-level change like polyploidy."
    },
    {
      q: "In the polymerase chain reaction (PCR), what is the main function of the primers?",
      options: ["Forming hydrogen bonds between complementary bases across the whole strand", "Proofreading the newly made DNA copies", "Keeping the two DNA strands separated", "Marking out the specific region of DNA that needs to be copied"],
      correct: 3,
      explanation: "Primers bind to specific complementary sequences and mark the start point for DNA polymerase, defining exactly which stretch of DNA gets amplified."
    },
    {
      q: "The p53 gene codes for a protein that normally suppresses tumour growth. Researchers created 'knockout' mice that lack a working copy of p53. How would this model most usefully be applied in cancer research?",
      options: ["Extracting tumour-suppressor protein from the mice for use as a cancer treatment", "Using the mice's p53 gene copies in gene replacement therapy", "Testing how new anti-cancer drugs affect tumours that develop in these mice", "Studying how mutations affect expression of a gene the mice don't even have"],
      correct: 2,
      explanation: "Because these mice reliably develop tumours (lacking the tumour suppressor), they're a useful model for testing whether new anti-cancer drugs can shrink or slow those tumours."
    },
    {
      q: "What is always guaranteed to be true about two individuals of the same species who differ by a single-nucleotide polymorphism (SNP)?",
      options: ["They will have different proteomes", "They will have different genomes", "They will each carry a deletion mutation", "They will each carry an insertion mutation"],
      correct: 1,
      explanation: "A SNP is by definition a single base difference in the DNA sequence, so the genomes are automatically different, even though that single change won't necessarily affect the resulting protein."
    },
    {
      q: "A mutation could potentially be passed on to the next generation if it occurs in which of these cells?",
      options: ["A beta cell in the pancreas", "A T-cell in the lymphatic system", "A sperm cell in the testis", "A skeletal muscle cell in the diaphragm"],
      correct: 2,
      explanation: "Only mutations in germline cells (like sperm or egg cells) can be passed to offspring; mutations in body (somatic) cells like pancreas, immune, or muscle cells die with the individual."
    },
    {
      q: "A DNA sequence coding for part of a polypeptide has a single base deleted partway along the sequence. What is the most likely consequence for the amino acids coded for downstream of the deletion?",
      options: ["A frameshift, changing the grouping of all subsequent codons and likely altering many downstream amino acids", "No effect at all, since deleting one base cannot change a reading frame", "Only the amino acid at the deletion site changes, with no effect further along", "The deletion would stop transcription immediately"],
      correct: 0,
      explanation: "Because the genetic code is read in non-overlapping groups of three bases, deleting (or inserting) a single base shifts the reading frame from that point onward, changing how every subsequent triplet is grouped and typically scrambling the amino acid sequence for the rest of the polypeptide — a much more disruptive outcome than a substitution mutation."
    },
    {
      q: "Gel electrophoresis is used to separate DNA fragments of different sizes by applying an electric current across a gel. Which statement correctly describes what can be deduced from the resulting pattern of bands?",
      options: ["Smaller fragments travel further through the gel towards the positive electrode, since DNA is negatively charged", "Larger fragments travel further than smaller fragments", "All fragments move at the same rate regardless of size", "Fragments move towards the negative electrode because DNA carries a positive charge"],
      correct: 0,
      explanation: "DNA's phosphate backbone gives it an overall negative charge, so in an electric field it migrates towards the positive electrode; smaller fragments move through the gel matrix more easily and therefore travel further in a given time than larger fragments, which is how electrophoresis separates DNA by size."
    },
    {
      q: "Gene knockout is a laboratory technique that disables a specific gene within an organism's genome. What is this technique typically used to investigate?",
      options: ["The normal function of a gene, by observing what changes when it is no longer expressed", "The physical location of a gene on a chromosome", "Whether a gene is dominant or recessive", "The exact base sequence of a gene"],
      correct: 0,
      explanation: "By deliberately disabling ('knocking out') a specific gene and comparing the resulting phenotype to a normal organism, researchers can infer what that gene's protein product normally does, making gene knockout one of the standard tools for investigating gene function."
    },
    {
      q: "Tumours vary enormously in their appearance, growth rate, and whether they spread to other tissues, yet all tumours share one underlying cause. What do all tumours have in common?",
      options: ["They all result from mutations that disrupt normal control of cell division", "They are all malignant and capable of metastasis", "They are all spherical in shape", "They are all caused by viral infection"],
      correct: 0,
      explanation: "Every tumour, whether benign or malignant, arises from mutations in genes that normally control the cell cycle (such as proto-oncogenes or tumour suppressor genes), leading to uncontrolled cell division; only malignant tumours, however, go on to invade surrounding tissue and metastasize to distant sites."
    },
    {
      q: "Mutations are said to occur randomly with respect to their effect on the organism. What does this statement mean?",
      options: ["Mutations arise independently of whether they will be useful, harmful, or neutral to the organism", "Mutations only ever occur in reproductive (germ line) cells", "The rate of mutation can never be increased by external factors like radiation", "Mutations only occur in genes that are actively being transcribed"],
      correct: 0,
      explanation: "Mutations occur due to errors in DNA replication or exposure to mutagens, and they arise without any regard to whether the resulting change would help, harm, or have no effect on the organism; natural selection then acts afterwards on whichever mutations happen to exist, rather than mutations being directed towards useful outcomes."
    },
    {
      q: "A parent has a DNA profile constructed from several genetic markers, and a paternity test compares a child's profile against several possible fathers' profiles to identify a match. What underlying principle makes DNA profiling useful for this purpose?",
      options: ["A child inherits half of their genetic markers from each biological parent, so a true biological father's profile will share a matching pattern with the child's", "All humans have essentially identical DNA profiles", "DNA profiles are identical between any two related individuals, however distantly related", "DNA profiling can only be used to identify a mother, not a father"],
      correct: 0,
      explanation: "Because a child inherits one set of alleles at each marker locus from their mother and one from their father, comparing a child's DNA profile against a candidate father's profile can reveal whether the expected matching pattern is present, which is the genetic principle underlying paternity testing."
    },
    {
      q: "A second course of an antibiotic fails to treat the same bacterial infection that responded well the first time. Rather than the patient developing immunity to the drug, what has more likely happened at the population level of the bacteria?",
      options: ["Natural selection has favoured resistant bacteria that survived the first treatment and multiplied", "The bacteria have permanently lost the ability to cause disease", "The antibiotic has chemically changed and stopped working", "The patient's cells have started producing the antibiotic themselves"],
      correct: 0,
      explanation: "Random mutations occasionally confer antibiotic resistance on individual bacteria; if any resistant bacteria survived the first round of treatment, they can multiply and pass resistance on, so a subsequent infection may be dominated by resistant bacteria even though the antibiotic worked perfectly well the first time."
    },
    {
      q: "Which processes occur as a normal, malignant tumour develops from a single mutated cell into a mass capable of spreading to other parts of the body? I. Ordinary cell division (mitosis) II. Spread to distant sites (metastasis) III. The cytoplasm dividing to form two daughter cells (cytokinesis)",
      options: ["I, II and III", "I and II only", "II and III only", "I and III only"],
      correct: 0,
      explanation: "Tumour development begins with uncontrolled cell division, which requires both mitosis (nuclear division) and cytokinesis (division of the cytoplasm) to actually produce new cells; if the tumour becomes malignant, cells may also break away and spread to distant parts of the body, a process called metastasis, so all three processes are involved in the development of a secondary (metastatic) tumour."
    },
    {
      q: "Only a small fraction of a eukaryotic genome directly codes for the proteins made by ribosomes, yet other, non-coding regions of DNA still serve important biological functions. Which combination of regions correctly includes some of these non-coding but functionally important sequences?",
      options: ["Promoters, telomeres, and DNA coding for tRNA", "Promoters, nucleosomes, and introns", "Introns, nucleosomes, and tandem repeats", "Exons, tandem repeats, and DNA coding for tRNA"],
      correct: 0,
      explanation: "Promoters (regions that regulate transcription), telomeres (protective sequences at chromosome ends), and DNA coding for tRNA (which is transcribed but doesn't code for a protein sequence in the usual sense) are all examples of DNA regions that don't code for proteins but nonetheless serve essential biological functions, distinct from exons, which do code for protein sequence."
    },
    {
      q: "A gel electrophoresis image is used to compare DNA profiles from a crime scene sample with several suspects, matching patterns of DNA fragment bands across multiple genetic markers. What does each visible band in such a profile actually represent?",
      options: ["A group of DNA fragments that all happen to be the same length (number of base pairs), and therefore travelled the same distance through the gel", "A single, complete, intact DNA molecule with a specific overall electrical charge", "A single DNA strand containing one particular, uniquely identifiable base sequence", "Several complete DNA molecules of clearly different lengths clustered together in one band"],
      correct: 0,
      explanation: "During gel electrophoresis, DNA fragments separate primarily by size (length), with smaller fragments migrating further through the gel in a given time; each visible band therefore represents a group of many DNA fragments that all happen to share the same (or very similar) length, not necessarily an identical base sequence, since fragments from different regions of the genome can coincidentally be the same size."
    },
    {
      q: "A patient with a bacterial infection is prescribed the antibiotic rifampicin, which works by interfering specifically with transcription rather than any other stage of protein synthesis. Which specific process would rifampicin directly prevent?",
      options: ["Synthesis of mRNA from a DNA template", "Base pairing between mRNA codons and tRNA anticodons at the ribosome", "Formation of peptide bonds between adjacent amino acids", "Movement of tRNA molecules into and out of the ribosome"],
      correct: 0,
      explanation: "Since rifampicin specifically targets transcription, the process of synthesising mRNA using DNA as a template, it directly prevents this step; base pairing between mRNA and tRNA, peptide bond formation, and tRNA movement through the ribosome are all part of translation, a separate stage of protein synthesis that rifampicin does not directly act on."
    },
    {
      q: "There is no clear evidence that the underlying rate of chromosome non-disjunction during meiosis rises significantly with a father's age between 30 and 45, yet the incidence of Down syndrome (caused by non-disjunction) in offspring increases as a parent's age increases across this same range. What best resolves this apparent inconsistency?",
      options: ["The relevant increase in non-disjunction rate with age occurs specifically in the mother, not the father, since maternal age is the stronger risk factor for Down syndrome", "Down syndrome is not actually caused by non-disjunction in either parent", "Meiosis rates decrease overall in males between the ages of 30 and 45, which would reduce non-disjunction risk", "Down syndrome is sex-linked, so non-disjunction can only occur in one parent's gametes"],
      correct: 0,
      explanation: "It is specifically maternal age, not paternal age, that is strongly associated with an increased rate of non-disjunction during meiosis (largely because human egg cells remain paused partway through meiosis for many years before ovulation); this resolves the apparent puzzle, since the described lack of a paternal-age effect doesn't rule out age-related non-disjunction happening on the maternal side instead."
    },
    {
      q: "In a coding gene, a single DNA triplet on the transcribed (template) strand changes from one sequence to another due to a substitution mutation. If the resulting codon on the mRNA still codes for the exact same amino acid as before, despite the change in DNA sequence, what would be the effect on the protein produced?",
      options: ["No change in the protein, since the genetic code's degeneracy means some substitutions don't alter the amino acid sequence at all", "The protein would become completely non-functional", "The polypeptide chain would terminate early at this position", "A completely different but still fully functional protein would be produced"],
      correct: 0,
      explanation: "Because the genetic code is degenerate (several codons can specify the same amino acid), some single-base substitutions result in a 'silent' mutation, where the resulting codon still codes for the identical amino acid; in this case, the final protein sequence is completely unaffected, despite the underlying change in DNA sequence."
    },
    {
      q: "Which stage of DNA profiling specifically involves the polymerase chain reaction (PCR)?",
      options: ["During amplification of DNA fragments that have already been cut using restriction enzymes", "During the initial extraction of the DNA sample from cells", "During electrophoresis, when DNA fragments are separated on a gel", "During incubation of DNA with labelled probes"],
      correct: 0,
      explanation: "PCR is used specifically to amplify (make many copies of) small quantities of DNA, a step that occurs after the DNA sample has been extracted and, in many DNA profiling protocols, after it has already been cut into fragments using restriction enzymes; this amplification step ensures there is enough DNA to work with during the later stages of electrophoresis and analysis."
    },
    {
      q: "The development of a metastatic (secondary) cancer requires cells not only to divide uncontrollably but also to physically spread and establish new tumours in distant locations within the body. Which observation would best indicate that a person has actually developed metastatic cancer, rather than a single, localised tumour?",
      options: ["Cancer cells originating in one organ are found producing a distinctive substance in a completely different, distant organ", "A tumour forms in a single organ and remains confined entirely to that same organ", "Increased levels of a substance are found only within the organ where the original tumour developed", "A tumour is detected using imaging techniques at only one single location in the body"],
      correct: 0,
      explanation: "Metastasis specifically refers to cancer cells breaking away from their original tumour and establishing new, secondary tumours at distant sites in the body; finding cancer cells (or products specific to them) growing and functioning in an organ far from where the cancer originated is strong evidence of this spread, distinguishing metastatic cancer from a tumour that remains entirely localised to one site."
    },
    {
      q: "The genetic code shown for a coding gene indicates that a change in one DNA triplet from AGG to TCG could, in certain cases, result in no change to the resulting protein at all. What term best describes this kind of mutation, where the DNA sequence changes but the encoded amino acid does not?",
      options: ["A silent (synonymous) mutation", "A nonsense mutation, introducing a premature stop codon", "A frameshift mutation, shifting the entire reading frame", "A missense mutation, changing the resulting amino acid"],
      correct: 0,
      explanation: "A silent (or synonymous) mutation changes the DNA base sequence but, due to the redundancy built into the genetic code, still results in the same amino acid being coded for; this contrasts with missense mutations (which change the amino acid), nonsense mutations (which introduce a premature stop codon), and frameshift mutations (caused by insertions or deletions that shift the reading of all subsequent codons)."
    }
  ],

  "D3.1": [
    {
      q: "Oogenesis and spermatogenesis both produce gametes, but through slightly different processes. What is the correct general sequence of events in gamete formation?",
      options: ["Mitosis, then differentiation, then meiosis, then cell growth", "Meiosis, then differentiation, then mitosis, then cell growth", "Mitosis, then cell growth, then meiosis, then differentiation", "Meiosis, then cell growth, then mitosis, then differentiation"],
      correct: 2,
      explanation: "Germline cells first divide by mitosis to build up numbers, grow, then undergo meiosis to become haploid, and finally differentiate into their mature gamete form."
    },
    {
      q: "Which type of flowering plant is most likely to rely on cross-pollination rather than self-pollination?",
      options: ["A hermaphrodite plant", "A plant whose anthers and stigma mature at the same time", "A plant with flowers where stamens are much longer than the stigma", "A plant that produces separate male and female individuals"],
      correct: 3,
      explanation: "If a species has entirely separate male and female plants (dioecious), an individual physically cannot self-pollinate, it has no choice but to cross-pollinate with a different plant."
    },
    {
      q: "What is a key difference between oogenesis and spermatogenesis in humans?",
      options: ["The first meiotic division only starts at puberty in oogenesis", "Mitosis produces many cells during gametogenesis in both processes equally", "Cytokinesis divides the cytoplasm unequally in oogenesis but not in spermatogenesis", "Haploid gametes are only produced at the end of meiosis II in oogenesis"],
      correct: 2,
      explanation: "In oogenesis, cytokinesis is deliberately unequal, most cytoplasm stays with the egg cell (with the rest discarded as polar bodies), while spermatogenesis divides cytoplasm evenly between four sperm cells."
    },
    {
      q: "A cross-section diagram of a flower shows a structure at the tip of the male reproductive organ where pollen grains are produced. What is this structure called, and which part of the flower does it belong to?",
      options: ["The anther, part of the stamen", "The stigma, part of the stamen", "The anther, part of the carpel", "The stigma, part of the carpel"],
      correct: 0,
      explanation: "The anther is the pollen-producing structure at the tip of the stamen (the flower's male reproductive part); the stigma, by contrast, is part of the carpel (the female reproductive part) and functions to receive pollen rather than produce it."
    },
    {
      q: "Some flowering plants, including certain cherry trees, carry self-incompatibility alleles that prevent their own pollen from successfully fertilizing their own ovules. What is the main evolutionary benefit of this system?",
      options: ["It prevents inbreeding, increasing genetic variation in the resulting offspring", "It increases the total number of seeds produced per flower", "It prevents mutations from occurring in the plant's gametes", "It stops the plant from releasing pollen at inappropriate times of year"],
      correct: 0,
      explanation: "Self-incompatibility alleles prevent self-fertilization, which forces cross-pollination with genetically different individuals; this promotes outbreeding and maintains greater genetic diversity in the population, reducing the harmful effects that can come from inbreeding (such as increased expression of recessive, often harmful, alleles)."
    },
    {
      q: "During spermatogenesis, a diploid cell with 46 chromosomes undergoes meiosis to eventually produce mature gametes. What is the final outcome of this process, and how many functional gametes are produced from one starting cell?",
      options: ["Four haploid sperm cells, each with 23 chromosomes", "One haploid sperm cell with 23 chromosomes plus three polar bodies", "Four diploid sperm cells, each with 46 chromosomes", "One diploid sperm cell with 46 chromosomes"],
      correct: 0,
      explanation: "Unlike oogenesis (which produces one functional egg plus polar bodies), spermatogenesis divides the cytoplasm evenly at each division, so all four haploid products of meiosis develop into functional sperm cells, each carrying half the original chromosome number (23 in humans)."
    },
    {
      q: "At the moment a human sperm cell fuses with an egg cell during fertilization, several critical events happen almost simultaneously. Which of the following correctly describes one part of this process?",
      options: ["The nuclear membranes of the sperm and egg break down, allowing the two haploid nuclei to combine", "The sperm and egg both undergo a further round of meiosis after fusing", "Mitochondria from both the sperm and the egg contribute equally to the zygote", "The chromosomes from sperm and egg pair up and undergo crossing over before combining"],
      correct: 0,
      explanation: "As the sperm nucleus enters the egg, both nuclear membranes break down, allowing the two haploid sets of chromosomes to come together and form the diploid nucleus of the zygote; notably, mitochondria are inherited almost entirely from the egg, not equally from both gametes, since sperm mitochondria are typically destroyed after fertilization."
    },
    {
      q: "A diagram of the male reproductive system labels several structures along the pathway sperm travel before ejaculation. Which sequence correctly places these structures in the order sperm would pass through, from production to release?",
      options: ["Testis, then epididymis, then vas deferens, then urethra", "Urethra, then testis, then epididymis, then vas deferens", "Vas deferens, then testis, then urethra, then epididymis", "Epididymis, then urethra, then testis, then vas deferens"],
      correct: 0,
      explanation: "Sperm are produced in the testis, mature and are stored in the epididymis, travel along the vas deferens during ejaculation, and are finally expelled through the urethra; getting this sequence right is a common point of confusion worth memorising carefully."
    },
    {
      q: "The onset of puberty depends on a hormonal cascade that begins in the hypothalamus, well before any visible physical changes appear. Which sequence correctly describes this initiating cascade?",
      options: ["Increased hypothalamic GnRH release stimulates the pituitary to secrete more LH, which then increases sex hormone output from the gonads", "Increased sex hormone production by the gonads happens first and triggers GnRH release afterwards", "The pituitary releases GnRH directly, bypassing the hypothalamus entirely", "LH is secreted directly by the hypothalamus without pituitary involvement"],
      correct: 0,
      explanation: "Puberty begins with the hypothalamus increasing its output of gonadotropin-releasing hormone (GnRH); this stimulates the anterior pituitary to release more luteinizing hormone (LH), which acts on the testes or ovaries to boost sex hormone production, ultimately driving the physical and reproductive changes of puberty."
    },
    {
      q: "Spermatogenesis and oogenesis both begin with a diploid cell undergoing meiosis to eventually produce haploid gametes, yet the two processes differ in several respects in humans. Which of the following is a genuine difference between them?",
      options: ["Spermatogenesis takes place at a slightly lower temperature than oogenesis, since the testes are located outside the main body cavity", "Spermatogenesis requires two meiotic divisions, while oogenesis only requires one", "Spermatogenesis is stimulated primarily by a steroid hormone, while oogenesis is not hormonally controlled at all", "Spermatogenesis is a much faster process than oogenesis, which can take decades to complete for a single egg"],
      correct: 0,
      explanation: "The testes are located in the scrotum, outside the main body cavity, keeping them a few degrees cooler than core body temperature, which is necessary for normal sperm development; the ovaries, by contrast, remain within the body cavity, so oogenesis proceeds at standard core body temperature — both processes require the same two meiotic divisions and are both hormonally regulated."
    },
    {
      q: "In preparation for in vitro fertilization (IVF), a woman is first given drugs to suppress her own natural hormone cycle, followed by artificial doses of hormones to stimulate the development of multiple egg follicles at once. What is the purpose of each of these two steps?",
      options: ["The first step prevents natural ovulation from interfering with treatment timing, while the second step artificially stimulates the ovaries to mature several eggs at once, increasing the number of eggs available for collection", "The first step directly fertilizes the eggs, while the second step implants them into the uterus", "The first step stimulates ovulation directly, while the second step suppresses the woman's natural hormone cycle", "Both steps serve identical purposes and could be interchanged without affecting the outcome"],
      correct: 0,
      explanation: "IVF treatment typically begins by suppressing a woman's own natural hormonal cycle, to prevent unplanned ovulation from disrupting the carefully timed treatment schedule; this is followed by artificially administered hormones (similar to FSH and LH) that stimulate the ovaries to mature multiple egg follicles simultaneously, increasing the number of eggs that can later be collected for fertilization outside the body."
    },
    {
      q: "During childbirth, a particular hormone released from the posterior pituitary gland stimulates strong, coordinated contractions of the smooth muscle in the wall of the uterus. Which hormone is responsible for this effect?",
      options: ["Oxytocin", "Estrogen", "Progesterone", "Thyroxin"],
      correct: 0,
      explanation: "Oxytocin, released from the posterior pituitary gland, directly stimulates strong contractions of the uterine smooth muscle during labour; its release is further reinforced by a positive feedback loop, since increasing uterine stretch and pressure on the cervix stimulate even more oxytocin release as labour progresses."
    },
    {
      q: "A hormone produced by an early embryo signals to the mother's body that pregnancy has begun, before the placenta itself has fully formed. What is the main function of this early hormone?",
      options: ["It stimulates the corpus luteum to continue producing progesterone, maintaining the uterine lining during early pregnancy", "It directly stimulates contraction of the uterine muscles to begin labour", "It inhibits progesterone production to trigger menstruation despite the pregnancy", "It prevents polyspermy by blocking additional sperm from binding to the egg"],
      correct: 0,
      explanation: "Human chorionic gonadotropin (hCG), produced by the developing embryo shortly after implantation, signals the corpus luteum in the ovary to keep producing progesterone, which maintains the uterine lining and prevents menstruation from occurring, essential for sustaining the very early stages of pregnancy before the placenta takes over hormone production."
    },
    {
      q: "Certain flowering plant species carry genetic mechanisms that prevent an individual plant's own pollen from successfully fertilizing its own ovules, even though pollen from a genetically different individual works normally. What is the main evolutionary advantage of this kind of self-incompatibility?",
      options: ["It prevents self-fertilization, promoting outbreeding and greater genetic variation in the resulting offspring", "It ensures a much higher total seed yield per flower compared with self-fertilizing species", "It prevents the accumulation of any new mutations in the plant's gametes", "It allows the plant to reproduce asexually as a backup strategy"],
      correct: 0,
      explanation: "By blocking self-fertilization, self-incompatibility mechanisms force a plant to be pollinated by a genetically different individual, promoting cross-pollination (outbreeding) and greater genetic variation among offspring, which helps avoid the negative effects associated with inbreeding, such as an increased chance of harmful recessive alleles being expressed."
    },
    {
      q: "A diagram of hormonal changes throughout the female menstrual cycle shows the lining of the uterus thickening substantially in the days following menstruation, reaching a peak thickness around the middle of the cycle. During which range of days in a typical 28-day cycle is a woman generally most fertile?",
      options: ["Around days 11 to 16, close to ovulation", "Days 1 to 6, during menstruation itself", "Days 7 to 10, immediately after menstruation ends", "Days 17 to 21, well after ovulation has already occurred"],
      correct: 0,
      explanation: "Ovulation typically occurs around day 14 of a standard 28-day cycle, and since a released egg survives for roughly 24 hours while sperm can survive in the female reproductive tract for several days, the fertile window spans several days leading up to and just after ovulation, commonly cited as approximately days 11 to 16 of the cycle."
    },
    {
      q: "A positive pregnancy test relies on a band developing when a particular type of molecule, present in the test strip, becomes immobilised after binding to human chorionic gonadotropin (hCG) in the woman's urine. What kind of molecule is used to bind hCG in this test?",
      options: ["Antibodies made by modified plasma cells (often from small mammals), specific to hCG", "Antigens obtained directly from human blood plasma", "Antibodies synthesised naturally by the woman's own lymphocytes during pregnancy", "Antigens extracted specifically from cancerous myeloma cells"],
      correct: 0,
      explanation: "Modern pregnancy tests use antibodies (typically produced by modified plasma cells derived from mice, using monoclonal antibody technology) that specifically bind to hCG; when hCG is present in a urine sample, these antibodies bind it and become immobilised at a particular point on the test strip, producing the visible line that indicates a positive result."
    },
    {
      q: "A rare genetic condition called globozoospermia causes affected males to produce sperm with a rounded head lacking a normal acrosome, resulting in infertility. Why would sperm cells with this abnormal structure be unable to fertilize an egg?",
      options: ["They lack the enzymes normally needed to digest through the layers surrounding the egg and reach its plasma membrane", "They contain less genetic material than a normal sperm cell", "They lack the energy needed to swim through the female reproductive tract", "They are unable to bind to the follicle cells but can still reach the egg's plasma membrane"],
      correct: 0,
      explanation: "The acrosome, a cap-like structure at the head of a normal sperm cell, contains digestive enzymes essential for breaking through the layers of cells and material surrounding an egg; sperm lacking a normal acrosome cannot digest through these layers, preventing them from ever reaching and fusing with the egg's plasma membrane, regardless of their genetic content or motility."
    },
    {
      q: "Estrogen and progesterone, along with follicle stimulating hormone (FSH) and luteinizing hormone (LH), all play distinct roles in regulating the female reproductive system. Which statement correctly describes their function?",
      options: ["Estrogen and progesterone promote the development and maintenance of the female reproductive organs and uterine lining", "FSH and LH are released directly by the ovary rather than the pituitary gland", "Estrogen and progesterone are released by the pituitary gland and combine to directly prepare the uterus", "FSH and LH alone are responsible for the physical development of female reproductive organs at puberty"],
      correct: 0,
      explanation: "Estrogen and progesterone, secreted by the ovaries, are directly responsible for developing and maintaining female reproductive structures and preparing the uterine lining for possible pregnancy; FSH and LH, by contrast, are released by the pituitary gland (not the ovary itself) and act on the ovaries to regulate follicle development and ovulation, rather than acting directly on reproductive organ development themselves."
    },
    {
      q: "A woman presents with symptoms of being overweight, feeling persistently cold and tired, and frequently failing to ovulate during her menstrual cycle. Which pair of hormones is most likely being secreted at insufficient levels to explain this combination of symptoms?",
      options: ["Luteinizing hormone (LH) and thyroxin", "Estrogen and follicle stimulating hormone (FSH)", "Insulin and glucagon", "Epinephrine and leptin"],
      correct: 0,
      explanation: "Insufficient thyroxin would explain feeling persistently cold, tired, and having a slowed metabolism (contributing to weight gain), while insufficient LH would explain a failure to ovulate regularly, since LH triggers the release of the egg at ovulation; together, low levels of these two specific hormones account for the full combination of symptoms described."
    },
    {
      q: "Three hormones are tracked in the blood of a pregnant rat over the course of gestation, with one hormone's concentration falling sharply right around the time of birth while progesterone (which maintains pregnancy) also declines close to birth. Which combination of hormones is most likely being tracked, given estrogen tends to rise toward birth while progesterone falls?",
      options: ["Estrogen, progesterone, and oxytocin, since oxytocin surges specifically at the time of birth to trigger labour contractions", "Insulin, glucagon, and thyroxin, none of which are specifically linked to birth timing", "FSH, LH, and testosterone, none of which are the primary hormones controlling pregnancy maintenance and birth", "Melatonin, cortisol, and epinephrine, none of which directly regulate uterine contractions at birth"],
      correct: 0,
      explanation: "Progesterone maintains pregnancy and its levels typically fall as birth approaches, removing its inhibitory effect on uterine contraction; estrogen levels rise toward the end of pregnancy, increasing the uterus's sensitivity to oxytocin, whose own concentration surges sharply right around the time of birth to directly trigger the strong contractions of labour."
    },
    {
      q: "Testes in males and ovaries in females serve as the primary gonads in humans, and despite their many differences, share at least one important functional similarity. What is this shared feature?",
      options: ["They both secrete hormones into the bloodstream", "They both produce gametes continuously throughout the entire life of the individual", "Their development is controlled by a gene located on the Y chromosome in both sexes", "They both release their products directly to the outside of the body"],
      correct: 0,
      explanation: "Both testes and ovaries function as endocrine glands, secreting sex hormones (testosterone from the testes, estrogen and progesterone from the ovaries) into the bloodstream; unlike testes, ovaries don't produce gametes continuously throughout life (egg production is limited and effectively stops at menopause), and only male gonadal development is directly controlled by a Y-chromosome gene, since females lack a Y chromosome altogether."
    },
    {
      q: "A graph tracks the blood concentrations of several hormones across the human menstrual cycle, with one line rising after ovulation, peaking mid-luteal phase, and then falling sharply just before menstruation begins if fertilization hasn't occurred. Which hormone does this pattern most likely represent?",
      options: ["Progesterone", "Follicle stimulating hormone (FSH)", "Luteinizing hormone (LH)", "Gonadotropin-releasing hormone (GnRH)"],
      correct: 0,
      explanation: "Progesterone is secreted by the corpus luteum after ovulation, rising through the luteal phase to maintain the uterine lining; if fertilization does not occur, the corpus luteum degenerates and progesterone levels fall sharply just before menstruation, a distinctive pattern that distinguishes it from FSH and LH, which each peak at different, earlier points in the cycle."
    },
    {
      q: "A pregnancy test detects human chorionic gonadotropin (hCG) in a woman's urine as an indicator of pregnancy. Why does the presence of this particular hormone specifically indicate pregnancy?",
      options: ["hCG is produced specifically by the developing embryo shortly after implantation", "hCG is involved in stimulating milk production by the mammary glands", "hCG production is normally blocked by negative feedback during menstruation", "hCG is released specifically during the acrosome reaction at fertilization"],
      correct: 0,
      explanation: "Human chorionic gonadotropin is produced specifically by cells of the developing embryo (and later the placenta) shortly after implantation in the uterus; because non-pregnant individuals do not produce this hormone, its detection in a urine or blood sample is a reliable indicator that implantation, and therefore pregnancy, has occurred."
    },
    {
      q: "Human chorionic gonadotropin (hCG), produced early in pregnancy, plays a specific role in maintaining pregnancy before the placenta has fully taken over hormone production. What function does hCG serve at this stage?",
      options: ["It maintains the corpus luteum, which continues to produce progesterone needed to sustain the pregnancy", "It stimulates milk production by the mammary glands ahead of childbirth", "It directly stimulates contraction of the uterine muscles at the onset of labour", "It stimulates the anterior pituitary gland to increase FSH production"],
      correct: 0,
      explanation: "In early pregnancy, before the placenta is developed enough to produce sufficient hormones on its own, hCG signals the corpus luteum in the ovary to keep producing progesterone; this maintains the uterine lining and prevents menstruation, sustaining the pregnancy during this critical early window."
    }
  ],

  "D3.2": [
    {
      q: "A pedigree chart tracks colour blindness (a recessive, X-linked condition) across three generations. An unaffected daughter, Z, has an unaffected mother and an affected brother. What could Z's genotype be?",
      options: ["Homozygous unaffected only", "Heterozygous (carrier) only", "Either homozygous unaffected or heterozygous", "Either homozygous affected or heterozygous"],
      correct: 2,
      explanation: "Since Z shows no symptoms, she isn't homozygous affected, but because her brother is affected, her father or mother could have passed on a recessive allele, so she could be a carrier or not, both remain genuinely possible from the pedigree alone."
    },
    {
      q: "A heterozygous fruit fly with straight wings and red eyes was crossed with a curly-winged, sepia-eyed fly, and the offspring showed all four possible phenotype combinations in roughly equal numbers. What does this indicate?",
      options: ["The wing shape and eye colour genes are on the same chromosome", "The alleles for both genes show codominance", "Straight-winged, sepia-eyed offspring must result from crossing over", "The genes for wing shape and eye colour are not linked"],
      correct: 3,
      explanation: "Roughly equal numbers across all four phenotype combinations is exactly what independent assortment predicts, which only happens if the two genes are unlinked (on different chromosomes, or far apart on the same one)."
    },
    {
      q: "A red-flowered four o'clock plant (Mirabilis jalapa) is crossed with a white-flowered plant, and all F1 offspring have pink flowers. If two of these pink F1 plants are then crossed, what phenotype ratio is expected among the F2 offspring?",
      options: ["1 red : 2 pink : 1 white", "3 red : 1 white, with no pink offspring", "All offspring pink", "1 red : 1 white, with no pink offspring"],
      correct: 0,
      explanation: "Flower colour in Mirabilis jalapa shows incomplete dominance, so heterozygotes (F1) are pink rather than one colour masking the other; crossing two heterozygous pink F1 plants gives a 1:2:1 ratio of homozygous red : heterozygous pink : homozygous white in the F2 generation, following standard Mendelian segregation but with a distinct intermediate phenotype."
    },
    {
      q: "When white-flowered Mirabilis jalapa plants are fertilized using pollen from red-flowered plants, all the resulting offspring have pink flowers rather than red or white. What pattern of inheritance does this demonstrate, and why?",
      options: ["Incomplete dominance, because neither allele is fully dominant, so the heterozygote shows an intermediate phenotype", "Codominance, because both alleles are fully expressed as distinct, separately visible traits", "Simple dominance, because the red allele fully masks the white allele", "Sex linkage, because flower colour is inherited only through pollen"],
      correct: 0,
      explanation: "Incomplete dominance occurs when heterozygous offspring display a phenotype that blends the two homozygous phenotypes (here, pink as a blend of red and white pigment production), rather than one allele completely masking the other as in simple dominance, or both being separately visible as in codominance."
    },
    {
      q: "Phenylketonuria (PKU) is caused by a mutation in a single gene and is inherited in an autosomal recessive pattern. If both parents are heterozygous carriers, what proportion of their children would be expected to be affected by PKU?",
      options: ["One quarter, since only children who inherit the recessive allele from both parents are affected", "Half, since PKU is dominant in this scenario", "None, since both parents are unaffected carriers", "All of the children, since both parents carry the allele"],
      correct: 0,
      explanation: "For an autosomal recessive condition, a cross between two heterozygous carriers (Aa × Aa) produces offspring in a 1:2:1 genotype ratio (AA : Aa : aa); since only the homozygous recessive (aa) genotype is affected, this predicts that one quarter of the children would develop PKU."
    },
    {
      q: "A pedigree chart shows an affected child born to two unaffected parents, with the condition appearing more often in males than females across several generations. What pattern of inheritance is most consistent with this pedigree?",
      options: ["Sex-linked recessive", "Autosomal dominant", "Autosomal recessive", "Sex-linked dominant"],
      correct: 0,
      explanation: "A condition that skips generations (appearing in unaffected parents' children) and shows up disproportionately in males is characteristic of sex-linked recessive inheritance, since males need only one copy of the recessive allele on their single X chromosome to be affected, while females need two copies."
    },
    {
      q: "A student examines a pedigree in which an affected father has all affected daughters but no affected sons, and this pattern repeats across generations. Which mode of inheritance is most consistent with this pattern?",
      options: ["Sex-linked dominant, where the allele is carried on the X chromosome and passed from an affected father to all his daughters", "Autosomal recessive, unrelated to the sex of the offspring", "Sex-linked recessive, where the allele passes to sons rather than daughters", "Autosomal dominant, unrelated to the sex of the offspring"],
      correct: 0,
      explanation: "An affected father passes his X chromosome to every daughter (since sons receive his Y chromosome instead), so if the causal allele is dominant and X-linked, all daughters will inherit it and be affected while sons are unaffected — a distinctive pattern that helps distinguish sex-linked dominant inheritance from other modes."
    },
    {
      q: "A pair of blue-laced chickens are crossed on several occasions, and among the offspring that inherit the parents' phenotypes, roughly equal numbers turn out solid black or solid white, rather than all being blue-laced like the parents. What explanation best fits this pattern?",
      options: ["The alleles for black and white feather colour are codominant, and blue-laced birds are heterozygous, showing both colours together", "There are three separate co-dominant alleles controlling feather colour in this breed", "The allele for blue-laced feathers is fully dominant over both black and white", "Most gametes produced by these chickens happen to carry only the allele for blue-laced feathers"],
      correct: 0,
      explanation: "If heterozygous (blue-laced) parents produce offspring that are either solid black or solid white in roughly equal numbers, rather than intermediate or blue-laced themselves, this pattern is consistent with codominance: the black and white alleles are both fully expressed rather than blending, and heterozygotes show the combined blue-laced pattern, while homozygous offspring show one solid colour or the other."
    },
    {
      q: "Two parents, both known to be heterozygous carriers for the sickle cell allele, have children — one unaffected and one showing a mild form of the disease. Based on the expected pattern of inheritance for this recessive condition, what is the probability that their next child will be completely unaffected?",
      options: ["25%", "50%", "75%", "100%"],
      correct: 0,
      explanation: "Crossing two heterozygous carriers (Aa x Aa) for a simple recessive condition produces offspring in a 1:2:1 ratio of homozygous unaffected : heterozygous carrier : homozygous affected; since only the homozygous dominant genotype is completely unaffected (carriers still carry the allele, even if described as having a mild form due to some degree of expression), the probability of a completely unaffected child works out to 25% under standard Mendelian assumptions."
    },
    {
      q: "A pedigree chart for Huntington's disease, a genetic disorder caused by a dominant allele, shows the condition appearing in both males and females across generations, with no consistent link to the sex of the affected individual. What can be concluded from this pattern about the gene's location?",
      options: ["Huntington's disease is not sex-linked, since affected individuals of both sexes appear without a pattern tied to their sex", "Huntington's disease must be sex-linked, since it is caused by a dominant allele", "The pedigree cannot provide any information about whether a condition is sex-linked", "Only male family members can be carriers of the Huntington's disease allele"],
      correct: 0,
      explanation: "Sex-linked conditions typically show inheritance patterns tied closely to the sex chromosomes (for example, affecting one sex far more often, or with fathers unable to pass the condition to sons); a pattern showing the disease appearing in both males and females without this kind of sex-dependent pattern is more consistent with the responsible gene being located on an autosome rather than a sex chromosome."
    },
    {
      q: "A rare hearing loss condition is found only in individuals who inherited the responsible allele from both parents, and it affects males and females in equal numbers within affected families. On which type of chromosome would the responsible allele most likely be found?",
      options: ["An autosome (appearing as a pair, not a sex chromosome)", "The Y chromosome only", "The X chromosome only", "A single, unpaired chromosome"],
      correct: 0,
      explanation: "A condition requiring inheritance of the allele from both parents (recessive) and affecting males and females equally is consistent with autosomal recessive inheritance, located on one of the paired autosomes rather than the sex chromosomes, since X- or Y-linked conditions typically produce a noticeable difference in how often each sex is affected."
    },
    {
      q: "A cross between two four o'clock plants (Mirabilis jalapa), both with pink flowers, is expected to produce offspring showing red, pink, and white flowers in a specific ratio if flower colour follows a pattern of incomplete dominance. What ratio of phenotypes would be expected among these offspring?",
      options: ["1 red : 2 pink : 1 white", "3 red : 1 white, with no pink offspring produced", "All offspring pink, with no red or white produced", "1 red : 1 white, with no pink offspring produced"],
      correct: 0,
      explanation: "Under incomplete dominance, pink flowers represent the heterozygous genotype; crossing two heterozygous (pink) individuals follows standard Mendelian segregation, producing a 1:2:1 ratio of homozygous red : heterozygous pink : homozygous white offspring, since neither the red nor white allele fully masks the other."
    },
    {
      q: "A chi-squared test comparing observed and expected offspring ratios from a genetic cross gives a calculated value far larger than the critical value at the 0.05 significance level. What conclusion should be drawn from this result?",
      options: ["There is significant evidence that the observed ratio differs from the expected ratio, so the null hypothesis should be rejected", "The calculated chi-squared value falls within the critical region, so the null hypothesis should be accepted", "The genes involved must assort completely independently of one another", "No conclusion can be drawn without repeating the experiment using a larger sample size"],
      correct: 0,
      explanation: "When a calculated chi-squared value exceeds the critical value at a chosen significance level, this indicates the difference between observed and expected results is unlikely to be due to chance alone, so the null hypothesis (that there is no significant difference from the expected ratio) should be rejected, providing evidence that some other factor is influencing the observed ratio."
    },
    {
      q: "A farmer examines the crop yield from a field and finds a wide, continuous range of seed masses rather than a small number of distinct categories, closely resembling a bell-shaped distribution. Which explanation best accounts for the inheritance of this characteristic?",
      options: ["Polygenic inheritance, in which several genes each contribute a small additive effect, results in this kind of continuous variation", "This is a clear example of discontinuous variation controlled by a single gene", "Two linked genes located close together on the same chromosome are entirely responsible for seed mass", "The inheritance follows Mendel's laws for a simple monohybrid cross"],
      correct: 0,
      explanation: "A continuous, bell-shaped range of phenotypes (rather than a small number of sharply distinct categories) is the hallmark of polygenic inheritance, in which multiple genes each contribute a small, additive effect to the overall trait; this differs from discontinuous variation, which is typically controlled by one or two genes and produces distinct, non-overlapping phenotypic categories."
    },
    {
      q: "A pedigree chart for Huntington's disease, caused by a dominant allele, shows an affected individual (III-3) whose parents are both unaffected. What can be concluded from this observation about whether the responsible allele is sex-linked?",
      options: ["The disease is not sex-linked, since an X-linked dominant allele would typically be inherited from an affected parent, not two unaffected ones", "The disease must be sex-linked, since it is caused by a dominant allele", "No conclusion about sex-linkage can be drawn from a single affected individual", "The pattern shows the allele must be recessive rather than dominant"],
      correct: 0,
      explanation: "For a dominant condition (sex-linked or autosomal), an affected individual would normally be expected to have inherited the dominant allele from at least one affected parent; an affected individual with two unaffected parents is inconsistent with typical dominant inheritance patterns being sex-linked in a straightforward way, and is more consistent with autosomal dominant inheritance (allowing for the possibility of a new mutation) than sex-linkage."
    },
    {
      q: "Nonsyndromic Hearing Loss and Deafness (DFNB1) is a recessive genetic condition. A pedigree chart shows that affected individuals in a family include roughly equal numbers of males and females, born to unaffected carrier parents. On what type of chromosome is the DFNB1 allele most likely located?",
      options: ["On a pair of autosomes, rather than a sex chromosome", "On the Y chromosome only", "On the X chromosome only", "On a single, unpaired chromosome"],
      correct: 0,
      explanation: "A recessive condition affecting males and females in roughly equal proportions, appearing in children of unaffected carrier parents, is consistent with autosomal recessive inheritance, located on a pair of autosomes; sex-linked recessive conditions typically show a skewed pattern affecting one sex (usually males) considerably more often than the other."
    },
    {
      q: "Tall heterozygous pea plants are crossed with one another, and the 360 resulting offspring show 270 tall plants and 90 dwarf plants, closely matching an expected 3:1 ratio for a simple dominant/recessive trait. What can be correctly concluded about the genotypes of these offspring?",
      options: ["All 90 dwarf plants were homozygous recessive", "All 270 tall plants were homozygous dominant", "All 270 tall plants were heterozygous", "Only 90 of the tall plants were homozygous dominant"],
      correct: 0,
      explanation: "In a cross between two heterozygous individuals for a simple dominant/recessive trait, the expected 3:1 ratio of tall to dwarf corresponds to a 1:2:1 genotype ratio of homozygous dominant : heterozygous : homozygous recessive; since only the homozygous recessive genotype produces the dwarf phenotype, all 90 dwarf plants must be homozygous recessive, while the 270 tall plants are actually a mixture of homozygous dominant and heterozygous individuals, not uniformly one or the other."
    },
    {
      q: "A woman with blood type AB has three children with a man of blood type A (who is heterozygous, carrying alleles for A and O). What are all of the possible blood type phenotypes that could occur among their children?",
      options: ["AB, A, and B", "AB only", "A and B only", "AB, A, and O"],
      correct: 0,
      explanation: "A parent with genotype AB can pass on either the IA or IB allele, while a heterozygous type A parent (genotype IAi) can pass on either IA or i; combining these possible gametes gives potential offspring genotypes of IAIA, IAIB, IAi, and IBi, corresponding to possible phenotypes of A, AB, A, and B respectively, but never O, since the AB parent cannot contribute an i allele."
    },
    {
      q: "A woman with blood type A has three children with a man who has blood type AB; the first of these children has blood type B. Given this information, what is the probability that the couple's second child will have blood type AB?",
      options: ["0.25", "0.75", "0.50", "0.00"],
      correct: 0,
      explanation: "Since the first child has blood type B (genotype IBi), the mother (blood type A) must be heterozygous (IAi) rather than homozygous, since she must have contributed the i allele; crossing a heterozygous type A mother (IAi) with a type AB father (IAIB) gives possible offspring genotypes IAIA, IAIB, IAi, and IBi in equal proportions, meaning a 1 in 4 (0.25) chance of any given child being blood type AB (genotype IAIB)."
    },
    {
      q: "In fruit flies, grey body colour is dominant to black, and normal wings are dominant to vestigial wings. Homozygous vestigial-winged, black-bodied flies are crossed with flies heterozygous for both traits, and the observed offspring numbers deviate noticeably from a simple 1:1:1:1 ratio, with far more of the two 'parental-type' combinations than the two 'recombinant' combinations. What does this pattern suggest?",
      options: ["The two genes are linked (located close together on the same chromosome), reducing the frequency of recombinant offspring", "The two genes assort completely independently of one another", "The predicted phenotypic ratio for this cross should have been 9:3:3:1", "The two traits must be controlled by a single gene rather than two separate genes"],
      correct: 0,
      explanation: "If two genes assorted completely independently, a testcross like this (heterozygous x homozygous recessive) would be expected to produce all four phenotype combinations in roughly equal numbers; a strong excess of the two 'parental' combinations over the two 'recombinant' combinations instead indicates the two genes are linked on the same chromosome, with recombinants arising only from crossing over between them during meiosis."
    },
    {
      q: "In a breed of fowl, the allele for black feathers is codominant with the allele for white feathers, producing blue feathers in heterozygotes; a separate gene controls feather texture, with silky recessive to normal. If blue, silky birds are crossed with black, silky birds, what proportion of the offspring would be expected to be blue and silky?",
      options: ["50%", "25%", "100%", "0%"],
      correct: 0,
      explanation: "Since both parents are already silky (homozygous recessive for texture), all offspring will also be silky, so the texture gene doesn't reduce the proportion; for feather colour, crossing a heterozygous blue parent (black/white) with a homozygous black parent gives an expected 1:1 ratio of blue to black offspring, meaning 50% of all the (silky) offspring would be expected to show the blue, silky combination."
    },
    {
      q: "Which genotype would be a normal, valid genotype to find within a single gamete, given that gametes are haploid and carry only one allele per gene?",
      options: ["A gamete carrying one allele from each of several different genes, such as one allele for pigment and one for texture", "A gamete carrying two different alleles for the same gene", "A gamete carrying three different alleles for the same gene", "A gamete carrying two identical alleles for the same gene"],
      correct: 0,
      explanation: "Because gametes are haploid, they carry only a single allele for each gene, one from each pair that was present in the diploid parent cell; genotypes showing two or more alleles for the very same gene (such as a heterozygous combination) describe a diploid cell's genotype, not what would be found within a single haploid gamete."
    },
    {
      q: "A pedigree chart shows a genetic disease appearing in offspring of two unaffected parents, with affected individuals occurring in both sexes at similar frequency, and the disease sometimes skipping a generation entirely. What is the most likely mode of inheritance shown by this pedigree?",
      options: ["Inherited as a recessive autosomal allele", "Inherited as a dominant autosomal allele", "Inherited as a recessive sex-linked allele", "Inherited as a dominant sex-linked allele"],
      correct: 0,
      explanation: "A condition capable of skipping a generation (appearing in the children of unaffected parents, who must therefore be carriers) and affecting both sexes at similar frequency is classically consistent with autosomal recessive inheritance; dominant conditions typically appear in every generation where the allele is present, and sex-linked conditions usually show an uneven distribution between males and females."
    }
  ],

  "A3.1": [
    {
      q: "Four organisms have the following genus and species names: W is Felis catus, X is Conus catus, Y is Ameiurus catus, and Z is Felis silvestris. Based only on binomial naming, which pair is most closely related?",
      options: ["W, X and Y together", "X and Y", "W and Z", "W is equally related to all the others"],
      correct: 2,
      explanation: "Sharing a genus name (Felis) is a much stronger indicator of relatedness than sharing a species epithet (catus), which can appear independently across unrelated genera."
    },
    {
      q: "Deep-sea vent bacteria obtain energy by oxidizing inorganic hydrogen sulfide rather than using sunlight or feeding on other organisms. What term describes this mode of nutrition?",
      options: ["Photoautotrophic", "Heterotrophic", "Chemoautotrophic", "Saprotrophic"],
      correct: 2,
      explanation: "Chemoautotrophs build their own organic molecules (like photoautotrophs do) but use energy released from oxidizing inorganic substances instead of light, which is exactly how vent bacteria and other chemosynthetic organisms thrive in permanently dark environments."
    },
    {
      q: "A dinoflagellate species is observed both photosynthesising in sunlight and engulfing smaller prey cells. What best describes this organism's mode of nutrition?",
      options: ["Mixotrophic, since it combines autotrophic and heterotrophic strategies", "Purely autotrophic, since photosynthesis is occurring", "Purely holozoic, since prey is being consumed", "Saprotrophic, since it breaks down organic matter externally"],
      correct: 0,
      explanation: "An organism that can both photosynthesise and ingest other organisms for nutrition is described as mixotrophic, a strategy seen in several dinoflagellates that lets them survive when light or prey availability fluctuates."
    },
    {
      q: "A fungus growing on a dead log releases enzymes onto the wood and then absorbs the digested products. What type of nutrition is this?",
      options: ["Holozoic", "Saprotrophic", "Mixotrophic", "Autotrophic"],
      correct: 1,
      explanation: "Saprotrophic nutrition involves secreting digestive enzymes onto dead organic material and then absorbing the resulting small molecules, external digestion followed by absorption, which is the defining feature that separates fungi and similar decomposers from animals that digest internally (holozoic nutrition)."
    },
    {
      q: "A short section of unknown DNA is sequenced from a tissue sample and compared against a reference database to determine which species it came from. What technique is being used, and what is one common application of it?",
      options: ["DNA barcoding, used to identify species from environmental or unknown samples", "Gel electrophoresis, used to separate proteins by charge", "PCR, used to amplify an entire genome", "Karyotyping, used to count chromosome number"],
      correct: 0,
      explanation: "DNA barcoding compares a short, standardised region of DNA against a reference library to assign an unknown sample to a species, which makes it useful for tasks like identifying species from environmental DNA, mislabelled food products, or degraded biological material."
    },
    {
      q: "Two populations that were once considered separate species are found to produce fertile offspring when crossed under natural conditions. According to the biological species concept, what does this tell us?",
      options: ["They are hybrids and therefore cannot be classified", "They likely belong to the same species, since successful interbreeding and fertile offspring indicate they are not reproductively isolated", "They must belong to different genera", "They cannot be compared using the biological species concept"],
      correct: 1,
      explanation: "The biological species concept defines a species as a group capable of interbreeding to produce fertile offspring in natural conditions; producing fertile offspring is strong evidence the two populations are not reproductively isolated and so should be classified as the same species."
    },
    {
      q: "A liger is produced by crossing a lion and a tiger in captivity. What term describes this kind of cross, and what does it typically require?",
      options: ["An interspecific hybrid, formed by cross-breeding members of two different species", "An intraspecific hybrid, formed within a single species", "A clone, formed without fertilization", "A polyploid, formed by chromosome doubling"],
      correct: 0,
      explanation: "Crossing individuals from two different species produces an interspecific hybrid; such hybrids can sometimes develop successfully but are usually sterile or rare in nature because reproductive isolating mechanisms normally prevent this kind of cross from happening."
    },
    {
      q: "Scientists reclassified all living organisms into three domains rather than the traditional five kingdoms. Which type of evidence was central to establishing this three-domain system?",
      options: ["Differences in cell wall composition alone", "Comparisons of rRNA sequences", "Differences in observable body shape", "Fossil record dating"],
      correct: 1,
      explanation: "Carl Woese's comparison of ribosomal RNA sequences, a molecule present and highly conserved in all cellular life, revealed that Archaea are as distinct from Bacteria as both are from Eukarya, which is the molecular evidence that led to today's three-domain classification system."
    },
    {
      q: "A jellyfish-like organism is multicellular, has stinging cells, and has only a single opening that serves as both mouth and anus for its digestive cavity. Which phylum does this description best match?",
      options: ["Cnidaria", "Mollusca", "Porifera", "Arthropoda"],
      correct: 0,
      explanation: "Stinging cells (cnidocytes) and a body plan built around a single opening leading to a gastrovascular cavity are defining features of the phylum Cnidaria, which includes jellyfish, sea anemones, and corals; sponges (Porifera) lack stinging cells and a defined digestive cavity altogether."
    },
    {
      q: "All living organisms, however distantly related, share the same basic genetic code, in which the same DNA triplets specify the same amino acids. What does this near-universality suggest?",
      options: ["It is strong evidence that all living organisms share a common ancestor", "It proves that all organisms carry out the same modes of nutrition", "It shows that every organism can synthesise all twenty amino acids independently", "It demonstrates that mutation does not occur across different species"],
      correct: 0,
      explanation: "If life had arisen from many separate, independent origins, there would be no particular reason for different lineages to use the exact same triplet code; the fact that essentially every organism, from bacteria to humans, uses the same code is best explained by common descent from a single ancestral population in which the code was already established."
    },
    {
      q: "Cattle of a particular breed are known to reliably produce significantly higher milk yields than other cattle breeds, a trait that has developed through generations of farmers deliberately choosing which individuals to breed from. What process is most directly responsible for this outcome?",
      options: ["Selective breeding", "Natural selection", "Adaptive radiation", "Random mutation alone"],
      correct: 0,
      explanation: "When humans deliberately choose which individuals reproduce based on a desired trait (here, milk yield) over many generations, this is selective (artificial) breeding, distinct from natural selection, in which the environment rather than a human breeder determines differential reproductive success."
    },
    {
      q: "A mixotrophic protist is capable of feeding on smaller organisms directly, but under some conditions can also perform its own photosynthesis. What conclusion can be drawn about how it obtains carbon?",
      options: ["It can obtain carbon both by consuming other organisms and by fixing inorganic carbon dioxide through photosynthesis", "It can only obtain carbon by fixing carbon dioxide directly from the atmosphere", "It can only obtain carbon indirectly by feeding on autotrophs", "It cannot obtain carbon at all without a host organism"],
      correct: 0,
      explanation: "Mixotrophic organisms combine both major nutritional strategies: heterotrophic feeding (obtaining organic carbon by consuming other organisms) and autotrophic carbon fixation (building organic molecules from inorganic CO2 using light energy), giving them flexibility that purely autotrophic or purely heterotrophic organisms lack."
    },
    {
      q: "Chlorella (photosynthetic) and Paramecium (heterotrophic) are both single-celled eukaryotes, yet Paramecium is sometimes observed with ingested Chlorella cells surviving inside its food vacuoles rather than being digested. What can be deduced about Paramecium's mode of nutrition from this behaviour?",
      options: ["It carries out heterotrophic (specifically holozoic) nutrition, since it engulfs other organisms as food, even though some prey happens to survive", "It is autotrophic, since it hosts photosynthetic cells", "It cannot be classified as performing any recognised mode of nutrition", "It must be a prokaryote, since it lacks a cell wall"],
      correct: 0,
      explanation: "Engulfing other cells as a feeding strategy is characteristic of holozoic heterotrophic nutrition; the survival of some ingested Chlorella cells inside Paramecium reflects a separate mutualistic relationship rather than changing Paramecium's own fundamentally heterotrophic mode of obtaining nutrition."
    },
    {
      q: "Which organism would correctly be classified as a saprotroph, based on its mode of nutrition?",
      options: ["A fungus that feeds by secreting digestive enzymes onto dead organic matter and absorbing the resulting products", "A single-celled eukaryote that obtains its carbon compounds through photosynthesis", "A jellyfish that uses stinging cells on its tentacles to capture and paralyse live prey", "A dung beetle that physically ingests and internally digests fecal material left by other animals"],
      correct: 0,
      explanation: "Saprotrophic nutrition specifically involves secreting digestive enzymes externally onto dead organic matter and then absorbing the digested products, a strategy typical of many fungi; organisms that instead physically ingest food (like the dung beetle) are practising holozoic nutrition, even if the diet consists of dead organic matter, since digestion occurs internally rather than externally."
    },
    {
      q: "A dichotomous key is used to sort six major animal phyla based on features such as body symmetry, presence of a shell, and segmentation. What is the primary purpose of using a key structured this way?",
      options: ["To allow an organism to be identified or classified by working through a sequence of paired, either/or choices about its features", "To reveal the precise evolutionary relationships and common ancestry between the six phyla", "To calculate genetic distance between the different phyla shown", "To determine which phylum evolved most recently"],
      correct: 0,
      explanation: "A dichotomous key is a practical identification and classification tool built from a series of paired choices between two alternative features; at each step, the answer either identifies the organism or leads to a further pair of choices, but unlike a cladogram, it isn't designed to reveal or represent evolutionary relationships directly."
    },
    {
      q: "A dichotomous key sorts several plant species using features such as whether they have true roots, vascular tissue, or seeds. Which type of plant would most likely be identified by a key branch describing an organism that lacks vascular tissue?",
      options: ["A bryophyte (such as a moss)", "A gymnosperm (such as a conifer)", "An angiosperm (a flowering plant)", "A fern (a vascular seedless plant)"],
      correct: 0,
      explanation: "Bryophytes, such as mosses, are non-vascular plants that lack the specialised water- and sugar-transporting tissue (xylem and phloem) found in ferns, gymnosperms, and angiosperms, so a dichotomous key branch describing 'no vascular tissue' would most likely lead to a bryophyte."
    }
  ],

  "B4.1": [
    {
      q: "A mangrove tree species has salt-secreting glands visible in its leaf tissue. How does this adaptation benefit the plant?",
      options: ["The glands provide nitrates since mangrove soil is nitrogen-poor", "The salt attracts predators to eat the leaves", "A high salt concentration in the glands draws water into leaf cells", "The glands remove excess salt to keep cytoplasmic solute concentration workable"],
      correct: 3,
      explanation: "Mangroves take up salty water, so they need a way to excrete the excess salt, keeping their cytoplasm at a solute concentration their metabolism can actually function at."
    },
    {
      q: "Coral polyps host photosynthetic zooxanthellae within their tissues in a close symbiotic relationship. What is the main benefit the coral receives from this partnership?",
      options: ["A supply of glucose and other organic compounds produced by the zooxanthellae's photosynthesis", "Protection from predators provided by the zooxanthellae", "A supply of carbon dioxide for the coral's own respiration", "Increased structural strength of the coral skeleton"],
      correct: 0,
      explanation: "Zooxanthellae photosynthesise using sunlight and pass on a large share of the glucose and other organic products to their coral host, which in turn provides the algae with shelter, carbon dioxide, and nutrients — a mutualistic relationship that allows reef-building corals to thrive in nutrient-poor tropical waters."
    },
    {
      q: "A biome comparison chart plots typical annual precipitation against typical temperature range for several biome types. Which combination of low precipitation and low temperature would place an ecosystem in the tundra category on such a chart?",
      options: ["Low annual precipitation combined with consistently low temperatures", "High annual precipitation combined with high temperatures", "Moderate precipitation with a wide seasonal temperature range", "High precipitation with consistently low temperatures"],
      correct: 0,
      explanation: "Biome classification charts typically plot temperature against precipitation; tundra sits at the low end of both axes, since its cold, dry conditions restrict plant growth to hardy, low-lying vegetation adapted to short growing seasons and permafrost soils."
    },
    {
      q: "Marram grass grows on sand dunes where salinity, water availability, and exposure to wind vary considerably. Which of these factors would be classed as abiotic in an ecological study of the dune ecosystem?",
      options: ["The salinity of the soil surrounding the marram grass", "Competition between neighbouring marram grass plants", "A fungal infection spreading through the marram grass population", "Grazing of marram grass by rabbits"],
      correct: 0,
      explanation: "Abiotic factors are non-living components of the environment — soil salinity, water availability, wind, and temperature are all abiotic, whereas competition, disease, and grazing all involve interactions between living organisms and are therefore biotic factors."
    },
    {
      q: "A comparison of stomatal behaviour shows one plant species keeping its stomata open mostly during the night and tightly closed during the heat of the day, opposite to the more typical daytime-open pattern. What does this behaviour suggest about the plant's likely habitat?",
      options: ["It is likely adapted to a hot, arid (desert) environment, where minimising daytime water loss is critical for survival", "It is likely adapted to a cold, wet, temperate environment with abundant year-round rainfall", "It is likely an aquatic plant living permanently submerged in water", "This stomatal pattern provides no useful information about the plant's habitat"],
      correct: 0,
      explanation: "Opening stomata at night and closing them during the day is a hallmark adaptation of plants from hot, dry environments (a strategy known as CAM photosynthesis), since it dramatically reduces water loss through transpiration during the hottest, driest part of the day while still allowing the plant to take in carbon dioxide for later use in photosynthesis."
    }
  ],

  "D4.1": [
    {
      q: "Which combination of observations counts as genuine, direct evidence supporting evolution by natural selection?\nI. Homologous structures shared across related species\nII. Domestic dogs having descended from wolves through selective breeding\nIII. An organism passing on characteristics it acquired during its own lifetime",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 0,
      explanation: "Homology and artificial selection both provide genuine evidence for evolutionary change; passing on acquired traits (III) is the disproven Lamarckian idea and isn't how inheritance actually works."
    },
    {
      q: "A population experiences disruptive selection for a particular trait. What outcome would you expect?",
      options: ["An increase in the size of the gene pool overall", "An increase in the frequency of the most extreme phenotypes, at the expense of the middle", "A general reduction in genetic variance across the population", "Faster convergence toward a single average phenotype"],
      correct: 1,
      explanation: "Disruptive selection favours both extremes of a trait over intermediate phenotypes, which increases the frequency of the extremes and the overall genetic variance in the population."
    },
    {
      q: "Wing shapes in bats and insects look and function similarly but evolved through entirely separate evolutionary paths. What describes the evolutionary origin and function of structures like these?",
      options: ["Different origin, generally similar function", "Different origin, unrelated function", "Same origin, same function", "Same origin, different function"],
      correct: 0,
      explanation: "This describes analogous structures: independent evolutionary origins that happen to converge on a similar function, as opposed to homologous structures, which share a common ancestral origin."
    },
    {
      q: "Moth larvae reared at a cooler temperature developed noticeably different wing colouration as adults compared to larvae reared at a warmer temperature, despite being genetically similar. What best explains this?",
      options: ["The cooler temperature directly mutated the wing-colour genes", "Temperature is affecting how the wing-colour genes are expressed", "A mutation happened to occur that helps moths blend into cold environments", "Wing colour is controlled by many genes acting together (polygenic inheritance)"],
      correct: 1,
      explanation: "This is a textbook case of phenotypic plasticity, where the environment (temperature) changes gene expression and therefore the phenotype, without changing the underlying DNA sequence at all."
    },
    {
      q: "An insect population has an allele frequency of 0.72 for the dominant, long-mouthpart allele. Assuming Hardy-Weinberg equilibrium, what fraction of the population is expected to show the recessive, short-mouthpart phenotype?",
      options: ["0.52", "0.40", "0.28", "0.08"],
      correct: 3,
      explanation: "With p = 0.72, q must be 0.28, and the recessive phenotype frequency equals q squared, which works out to approximately 0.08."
    },
    {
      q: "Field experiments manipulating predator numbers in guppy populations showed that where predators were common, males evolved duller colouration, while where predators were rare, brighter males became more common. What does this demonstrate about the two selection pressures acting on male colouration?",
      options: ["Natural selection (avoiding predation) and sexual selection (attracting mates) can pull the same trait in opposite directions, with the balance depending on local conditions", "Only natural selection affects guppy colouration; sexual selection plays no role", "Only sexual selection affects guppy colouration; predation plays no role", "Colouration in guppies is not heritable and cannot evolve"],
      correct: 0,
      explanation: "Bright colouration helps males attract mates (favoured by sexual selection) but also makes them more visible to predators (opposed by natural selection); Endler's guppy experiments elegantly showed how the balance between these two pressures shifts the population's average colouration depending on how much predation risk is present."
    },
    {
      q: "Mutation and sexual reproduction are both described as sources of variation that natural selection can act upon, but they generate variation in different ways. Which statement correctly distinguishes their roles?",
      options: ["Mutation is the only process that creates entirely new alleles; sexual reproduction reshuffles existing alleles into new combinations", "Sexual reproduction creates new alleles, while mutation only reshuffles existing ones", "Both processes create new alleles in the same way", "Neither mutation nor sexual reproduction contributes to variation upon which selection can act"],
      correct: 0,
      explanation: "Mutation is the ultimate source of new genetic variation, since it is the only process capable of creating alleles that didn't exist before; sexual reproduction (through independent assortment and crossing over) doesn't create new alleles but reshuffles existing ones into new combinations, adding further variation for selection to act on."
    },
    {
      q: "For a population's genotype frequencies to remain stable and fit the Hardy-Weinberg equation from one generation to the next, several conditions must be met. Which of the following conditions is required?",
      options: ["Mating within the population must be random", "The population must be very small", "Individuals with the homozygous recessive phenotype must have reduced survival", "Migration into or out of the population must be occurring"],
      correct: 0,
      explanation: "The Hardy-Weinberg model assumes a large population with random mating, no migration, no mutation, and no natural selection acting on any genotype; a small population size, differential survival based on phenotype, or non-random mating would all cause genotype frequencies to drift away from the Hardy-Weinberg prediction."
    },
    {
      q: "A previously rare allele becomes much more common in a population of insects over just a few generations, following the widespread use of a particular pesticide. What evolutionary process best explains this rapid change?",
      options: ["Natural selection favouring individuals carrying the resistance allele, since they survive pesticide exposure and reproduce more successfully", "Genetic drift causing a random increase in allele frequency, unrelated to the pesticide", "A new mutation appearing simultaneously in every individual", "The Hardy-Weinberg equation predicting no change should occur"],
      correct: 0,
      explanation: "When a resistance allele already exists at low frequency in a population, exposure to a strong selective pressure like a pesticide kills susceptible individuals disproportionately, allowing resistant individuals to survive and reproduce at a much higher rate — a clear, fast-acting example of natural selection increasing an allele's frequency."
    },
    {
      q: "A species of finch shows considerable variation in beak shape across a population living on several different islands, each with different available food sources. Over many generations, this variation is closely tracked by proposed changes in beak shape best explained by natural selection. Which statement(s) correctly support this explanation? I. Beak shape variation existed in the ancestral population before selection acted on it. II. Changes to an individual bird's beak shape during its lifetime, caused by diet, were passed on to its offspring. III. Heritable differences in beak shape affected survival and reproductive success differently on each island.",
      options: ["I and III only", "II only", "I and II only", "I, II, and III"],
      correct: 0,
      explanation: "Natural selection requires pre-existing heritable variation (statement I) that affects survival and reproduction differently depending on the environment (statement III); statement II describes the discredited idea of inheritance of acquired characteristics (changes gained during an individual's lifetime being passed on genetically), which is not how natural selection or genetic inheritance actually works."
    },
    {
      q: "In a natural population under stable conditions, individuals better adapted to their environment tend to show a particular reproductive pattern compared with less well-adapted individuals of the same species. What is this typical feature of better-adapted individuals?",
      options: ["They tend to produce more surviving offspring over their lifetime than less well-adapted individuals", "They reliably produce offspring at a younger age than less well-adapted individuals", "They reproduce by cloning to guarantee offspring identical to themselves", "They deliberately limit their offspring number to avoid exceeding the environment's carrying capacity"],
      correct: 0,
      explanation: "The core mechanism of natural selection is differential reproductive success: individuals whose heritable traits make them better suited to their environment tend, on average, to survive longer and produce more surviving offspring than less well-adapted individuals, which is what causes advantageous traits to become more common in the population over successive generations."
    },
    {
      q: "How is a genuinely new allele, one that did not previously exist anywhere in a population, first produced?",
      options: ["Mutation", "Cloning", "Differentiation", "Natural selection"],
      correct: 0,
      explanation: "Mutation is the only process capable of generating an entirely new allele; cloning simply copies existing genetic material without creating new variants, differentiation describes cells specialising during development (with no change to the underlying DNA sequence), and natural selection acts on existing variation rather than creating new alleles itself."
    },
    {
      q: "How would evolution, in the modern biological sense, be most accurately defined?",
      options: ["A change in the heritable characteristics of a species over successive generations", "A change in the phenotype of a single individual during its lifetime", "The formation of a new species purely as a result of geographical separation", "The survival of only the strongest individuals within a population"],
      correct: 0,
      explanation: "Evolution refers specifically to a change in the heritable (genetically-based) characteristics of a population or species over generations, not a change occurring within a single individual's lifetime; speciation due to geographic separation is one possible outcome of evolutionary change but isn't itself the definition, and 'survival of the fittest' is an oversimplified popular phrase rather than the formal biological definition."
    },
    {
      q: "A field study reintroduces a large keystone predator to an ecosystem it had been absent from for decades, restoring pressure on a formerly unchecked herbivore population. Over subsequent years, previously overgrazed vegetation begins to recover in areas the herbivores now avoid. What does this outcome illustrate about the role of natural selection and predation together?",
      options: ["Renewed predation pressure changes the selective environment for both predator and prey, and can trigger cascading ecological effects beyond the two species directly involved", "Predation pressure has no long-term effect on the evolution or behaviour of prey species", "Reintroducing a predator always causes the immediate extinction of its prey species", "Vegetation recovery in this scenario is entirely unrelated to the herbivore population's behaviour"],
      correct: 0,
      explanation: "Reintroducing a predator changes the selective pressures acting on the prey population (favouring more cautious or predator-avoidant behaviour and altering habitat use), which can trigger a cascade of indirect ecological effects, such as reduced grazing pressure allowing previously overgrazed vegetation to recover, illustrating how selection and species interactions can ripple through an entire ecosystem rather than affecting just the two species directly involved."
    },
    {
      q: "A central idea in the theory of evolution by natural selection is that species change gradually over generations from a shared ancestor. Considering a population of birds showing variation in beak shape, which statement(s) correctly explain this kind of evolutionary pattern? I. Beak shape shows genetic variability already present in the ancestral population. II. Changes in beak shape acquired during an individual bird's lifetime are passed on to its offspring. III. Heritable changes in beak shape that improve survival and reproduction become more common over generations.",
      options: ["I and III only", "II only", "I and II only", "I, II, and III"],
      correct: 0,
      explanation: "Natural selection requires pre-existing heritable variation (statement I) that affects survival and reproductive success differently depending on the environment (statement III); statement II describes the long-discredited idea of inheritance of acquired characteristics, changes gained during an individual's own lifetime being passed on genetically to offspring, which is not how heredity or natural selection actually works."
    },
    {
      q: "Which process specifically results in decreased genetic variation within a population, in contrast to processes that tend to increase variation?",
      options: ["Natural selection", "Meiosis", "Mutation", "Sexual reproduction"],
      correct: 0,
      explanation: "Natural selection reduces variation by consistently favouring certain heritable traits over others, causing less advantageous alleles to become rarer or disappear from a population over time; meiosis, mutation, and sexual reproduction, by contrast, all act to increase genetic variation, through recombination, the creation of entirely new alleles, and the shuffling of existing alleles into new combinations, respectively."
    },
    {
      q: "Which of the following would be considered a genuine example of speciation, the formation of a new species, as opposed to a change occurring within a single existing species?",
      options: ["The evolution of distinct courtship behaviours in geographically separated populations, eventually preventing successful interbreeding between them", "Selective breeding by humans to produce new varieties of a crop plant", "Natural selection increasing the frequency of a darker coat colour within an existing population", "Selective feeding behaviour by an animal on a particular type of food source"],
      correct: 0,
      explanation: "Speciation specifically requires the formation of a new, reproductively isolated species; the evolution of distinct courtship behaviours in separated populations, if it eventually prevents successful interbreeding between them, represents a genuine example of behavioural reproductive isolation leading to speciation, unlike selective breeding, an increase in an existing allele's frequency, or a shift in feeding behaviour, none of which by themselves create a new species."
    }
  ],

  "A4.1": [
    {
      q: "Which combination of observations counts as genuine evidence for evolution?\nI. Homologous structures, such as the pentadactyl limb, across different species\nII. Domestic dogs having been bred from wolves\nIII. Characteristics acquired during an organism's lifetime being passed to offspring",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 0,
      explanation: "Homologous structures and artificial selection (dog breeding) are genuine evidence for evolution; inheritance of acquired characteristics (III) is a discredited, Lamarckian idea."
    },
    {
      q: "Bonobos and chimpanzees are closely related primates that became separated by the Congo River. What did that geographic separation directly cause?",
      options: ["Natural selection", "Reproductive isolation", "Selective breeding", "Analogous structures"],
      correct: 1,
      explanation: "Physically separating two populations prevents interbreeding, that reproductive isolation is what let the two populations diverge into separate species over time."
    },
    {
      q: "Which statement correctly describes an outcome of a particular type of selection?",
      options: ["Directional selection increases the size of the gene pool", "Stabilizing selection increases the frequency of extreme phenotypes", "Disruptive selection increases genetic variance in a population", "Sexual selection always leads to allopatric speciation"],
      correct: 2,
      explanation: "Disruptive selection favours both extremes of a trait over the middle, which increases the spread (variance) of phenotypes in the population."
    },
    {
      q: "In an insect population, the allele for long mouthparts (dominant) has a frequency of 0.72. Using the Hardy-Weinberg equation, what proportion of the population is expected to have short mouthparts?",
      options: ["0.52", "0.40", "0.28", "0.08"],
      correct: 3,
      explanation: "If p = 0.72, then q = 0.28, and the recessive (short mouthparts) genotype frequency is q squared, which is 0.28 squared, approximately 0.08."
    },
    {
      q: "Two structures in different species look and function similarly but evolved completely separately. What term describes their evolutionary origin and function?",
      options: ["Different origin, similar function", "Different origin, same or different function", "Same or different origin, same function", "Same origin, different function"],
      correct: 0,
      explanation: "This describes analogous structures: they arise independently (different evolutionary origin) but converge on a similar function, unlike homologous structures which share an origin."
    },
    {
      q: "Larvae of a moth species were reared at either a cooler or a warmer temperature, and the resulting adult moths showed different wing colour patterns. What best explains this?",
      options: ["The colder temperature directly caused mutations in the wing-colour genes", "Temperature affected how the wing-colour genes were expressed", "A mutation happened to make moths less visible to predators in the cold", "Wing colour is controlled by many genes acting together"],
      correct: 1,
      explanation: "This is phenotypic plasticity: the same genotype produces a different phenotype depending on the environment, because temperature is affecting gene expression, not the DNA sequence itself."
    },
    {
      q: "Ichthyosaurs (extinct marine reptiles) and dolphins (mammals) both evolved streamlined, fish-like bodies despite having completely different ancestors. What term describes this pattern, and what does it demonstrate?",
      options: ["Convergent evolution, showing that similar environments can select for similar body shapes in unrelated lineages", "Divergent evolution, showing that a shared ancestor gave rise to different body plans", "Analogous inheritance, showing a genetic link between the two groups", "Coevolution, showing that the two species evolved in response to each other"],
      correct: 0,
      explanation: "When unrelated lineages independently evolve similar features because they face similar selection pressures (here, moving efficiently through water), this is convergent evolution, and the resulting structures are called analogous — similar in function and appearance but not derived from a shared ancestor."
    },
    {
      q: "The eyes of vertebrates and octopuses are strikingly similar in overall structure and function, yet the two lineages diverged before complex eyes existed in either. What best explains this similarity?",
      options: ["Convergent evolution acting on both lineages under similar selective pressures for vision", "Both eyes are homologous structures inherited from a shared ancestor", "Octopus eyes evolved directly from vertebrate eyes", "The similarity is coincidental and has no evolutionary explanation"],
      correct: 0,
      explanation: "Because vertebrates and octopuses do not share a recent common ancestor with a complex eye, their remarkably similar camera-type eyes are best explained by convergent evolution: similar selection pressures (the need for sharp image-forming vision) independently producing similar solutions."
    },
    {
      q: "Over many generations, a single ancestral population becomes divided into two populations that can no longer interbreed successfully. What term describes this process, and what is typically required for it to occur?",
      options: ["Speciation, which usually requires some form of reproductive isolation between the diverging populations", "Convergence, which requires the populations to remain in constant contact", "Succession, which requires colonization of bare habitat", "Mutation, which requires exposure to a mutagen"],
      correct: 0,
      explanation: "Speciation is the formation of new species from an existing one, and it generally depends on reproductive isolation (geographic, behavioural, or genetic) building up between diverging populations until they can no longer produce fertile offspring together, even if they later come back into contact."
    },
    {
      q: "A ring of salamander populations wraps around a valley; neighbouring populations can interbreed, but the two populations at the ends of the ring, which come into contact, cannot produce fertile offspring. What does this 'ring species' pattern illustrate about the species concept?",
      options: ["That reproductive isolation can build up gradually across a geographic gradient, blurring the line between what counts as one species or two", "That all populations in a ring must be considered separate species", "That geographic distance has no effect on interbreeding ability", "That ring species always represent a single, uniform species"],
      correct: 0,
      explanation: "Ring species show that speciation is often a gradual process rather than a single event: genetic differences accumulate steadily around the ring until the two ends are different enough to be reproductively isolated, even though every neighbouring pair along the ring can still interbreed."
    },
    {
      q: "In a series of controlled field experiments, researchers manipulated the number of predators in different guppy populations and tracked how bright the males' colouration became over several generations. What did these experiments demonstrate?",
      options: ["That predation pressure can drive natural selection on a trait, in this case male colouration", "That guppies are unaffected by predator presence", "That colouration is entirely determined by diet and has no genetic basis", "That male guppies always evolve towards being duller regardless of predation"],
      correct: 0,
      explanation: "John Endler's classic guppy experiments showed that where predators were more common, males evolved duller colouration (favouring survival over conspicuous mating displays), while where predators were rare, brighter, more attractive males were favoured — a clear demonstration of natural selection acting in real time."
    },
    {
      q: "A diagram shows several finch species with different beak shapes, all descended from a shared ancestral population, alongside a proposed sequence of evolutionary events. Which combination of processes correctly explains this pattern of divergence over time?",
      options: ["The ancestral population showed heritable variation in beak shape, and beak shapes that improved survival and reproduction in a given environment became more common through natural selection", "Individual birds changed their own beak shape during their lifetime in response to their diet, and these acquired changes were passed to their offspring", "All beak shape variation arose spontaneously and simultaneously in a single generation with no ancestral variation required", "Beak shape is entirely determined by diet and has no genetic or heritable basis at all"],
      correct: 0,
      explanation: "Evolutionary change by natural selection requires heritable variation already present in a population (not changes acquired during an individual's lifetime); where that variation affects survival and reproductive success, advantageous heritable variants become more common over generations, which is exactly the mechanism behind the diversification of finch beak shapes."
    },
    {
      q: "A cladogram comparing baboons, gorillas, chimpanzees, and humans shows humans and chimpanzees sharing a branch point that is separate from, and more recent than, the point where gorillas join the tree, with baboons branching off earliest of all. What can be concluded from this cladogram?",
      options: ["Humans and chimpanzees are more closely related to each other than either is to gorillas", "Baboons are the common ancestor of all four groups shown", "Humans evolved directly from gorillas", "All four species split from their common ancestor at exactly the same point in time"],
      correct: 0,
      explanation: "A cladogram's branching pattern reflects relative recency of common ancestry: a shared branch point that occurs later (closer to the tips) than another indicates a more recent common ancestor, so humans and chimpanzees sharing a later branch point than gorillas indicates they are more closely related to each other than to gorillas — and no living species shown on a cladogram can be an ancestor of the others, since all are present-day tips."
    },
    {
      q: "Hedgehogs and echidnas both have sharp, hair-derived quills covering their bodies, despite belonging to very different, distantly related mammalian lineages. What is the most likely explanation for this shared feature?",
      options: ["Convergent evolution, in which similar environmental (predation) pressures independently favoured similar quill-like defensive structures in both lineages", "Common ancestry, since both species directly inherited quills from a shared ancestor with quills", "Adaptive radiation from a single quill-bearing ancestor species", "The similarity is purely coincidental and carries no adaptive significance in either species"],
      correct: 0,
      explanation: "Because hedgehogs and echidnas are not closely related and their most recent shared ancestor did not have quills, their similar defensive structures are best explained by convergent evolution: similar selective pressures (defence from predators) independently favoured a similar solution (modified, hardened hairs) in each separate lineage."
    },
    {
      q: "The wide variety of shapes taken by the pentadactyl limb across different vertebrate groups, from a bat's wing to a whale's flipper to a human hand, is best explained by which evolutionary process?",
      options: ["Adaptive radiation, in which a shared ancestral limb structure diversified to suit many different functions and environments", "Interbreeding between distantly related vertebrate lineages", "Selective breeding carried out deliberately by humans", "Convergent evolution from entirely unrelated ancestral limb structures"],
      correct: 0,
      explanation: "Adaptive radiation describes the diversification of a single ancestral lineage (or structure, in this case the pentadactyl limb) into a wide variety of forms adapted to different functions and environments; the underlying bone structure remains homologous across these vertebrate groups, reflecting shared ancestry, even though its final shape has been reshaped very differently by natural selection in each lineage."
    },
    {
      q: "Two populations of a fruit fly species become isolated on different oceanic islands, and over subsequent generations, individuals from each population develop distinct courtship rituals that make successful mating between the two populations increasingly unlikely. What best describes this as an example of?",
      options: ["Speciation, since a behavioural (reproductive) barrier is developing between the diverging populations", "Selective breeding directed by human intervention", "Natural selection increasing the frequency of an existing dark-coloured allele", "Selective feeding behaviour with no bearing on reproduction"],
      correct: 0,
      explanation: "The gradual development of distinct courtship behaviours that reduce successful interbreeding between separated populations is a classic example of behavioural (pre-zygotic) reproductive isolation building up during speciation; over enough generations, this kind of barrier can become strong enough that the populations can no longer interbreed at all, marking the formation of separate species."
    },
    {
      q: "Which evolutionary pathway would be most likely to result in two distantly related species independently evolving analogous structures, similar in function but not derived from a shared ancestral structure?",
      options: ["Both species facing similar environmental selection pressures despite having very different ancestors and starting points", "Both species sharing an identical, recent common ancestor with the same structure already present", "One species evolving directly from the other via a single mutation", "Both species undergoing identical patterns of genetic drift with no selection involved"],
      correct: 0,
      explanation: "Analogous structures arise through convergent evolution: when two lineages without a recent common ancestor face similar environmental or functional pressures, natural selection can favour similar solutions independently in each lineage, producing structures that look and function alike despite having entirely separate evolutionary origins."
    },
    {
      q: "Two mole-like animals from different, only distantly related mammalian orders both have enlarged, shovel-like forelimbs adapted for digging underground. Comparative anatomy reveals their limb bones have a similar overall arrangement, evolved independently. What best explains the underlying similarity in limb bone arrangement despite their distant relationship?",
      options: ["Both limbs are homologous at the level of pentadactyl limb structure (both descend from the same ancestral vertebrate limb plan), even though their specific digging adaptation evolved independently through convergent evolution", "The two species must share an unusually recent common ancestor after all", "One species' forelimb evolved directly from the other's", "The similarity is a coincidence with no evolutionary explanation available"],
      correct: 0,
      explanation: "All vertebrate limbs share the same underlying pentadactyl bone plan due to descent from a shared distant ancestor (making the basic limb structure homologous across vertebrates), but the specific digging adaptation seen in both moles evolved independently in each lineage in response to similar underground lifestyles, an example of convergent evolution operating within an already homologous starting structure."
    }
  ],

  "B4.2": [
    {
      q: "Two species of Paramecium grow well when cultured separately, but when grown together in the same flask, one species consistently outcompetes and eliminates the other over time. What ecological principle does this result demonstrate?",
      options: ["The competitive exclusion principle: two species with sufficiently overlapping niches cannot coexist indefinitely", "Mutualism, since both species benefit from being grown together", "Predation, since one species is consuming the other directly", "Allelopathy, since one species is releasing a toxin"],
      correct: 0,
      explanation: "This classic result (based on Gause's experiments) illustrates the competitive exclusion principle: when two species compete for the same limited resources within an overlapping niche, one will eventually outcompete and displace the other, so they cannot coexist indefinitely unless their niches diverge."
    },
    {
      q: "One species of tree releases chemicals into the soil that inhibit the germination and growth of nearby competing plant species. What is this interaction called?",
      options: ["Allelopathy", "Endemism", "Mutualism", "Parasitism"],
      correct: 0,
      explanation: "Allelopathy is a form of interspecific competition in which a plant releases chemical compounds that suppress the growth of neighbouring plants, reducing competition for light, water, and nutrients in favour of the chemical-producing species."
    },
    {
      q: "Bacteria naturally living in the human gut synthesise certain B vitamins that their host cannot make on its own, while the bacteria in turn receive a stable, nutrient-rich habitat. What type of interspecific relationship is this?",
      options: ["Mutualism, since both species benefit", "Parasitism, since only the bacteria benefit", "Predation, since the bacteria are being consumed", "Commensalism, since only the human benefits"],
      correct: 0,
      explanation: "When two different species both gain a benefit from their association, the relationship is mutualistic; here the bacteria receive shelter and nutrients from the gut environment while the human host gains vitamins it cannot otherwise synthesise, a benefit that flows both ways."
    },
    {
      q: "Two competing species share a fundamental niche that overlaps considerably, but in nature they are only ever observed living in slightly different parts of the habitat where they don't directly compete. What does this suggest about their realized niches?",
      options: ["Interspecific competition has restricted each species to a narrower realized niche within its broader fundamental niche", "Their fundamental and realized niches are identical", "The species have no niche overlap of any kind", "Competition has expanded both species' realized niches beyond their fundamental niche"],
      correct: 0,
      explanation: "A fundamental niche describes the full range of conditions a species could occupy in the absence of competitors, while the realized niche is the narrower range it actually occupies once competition is taken into account; observing two competitors partitioning the habitat is a sign that competitive exclusion has squeezed each species into a smaller realized niche."
    }
  ],

  "A3.2": [
    {
      q: "Scientists reclassified life into three domains rather than relying only on kingdoms. What kind of evidence mainly supported this domain-level classification?",
      options: ["Ribosomal RNA base sequences", "Mitochondrial DNA base sequences", "Cell wall structure", "Amino acid sequence of ATP synthase"],
      correct: 0,
      explanation: "Comparing rRNA sequences, present in every living cell, gave a molecular basis for splitting life into Archaea, Bacteria, and Eukarya."
    },
    {
      q: "A cladogram shows that species P and Q share a more recent common ancestor with each other than either does with species R, even though R looks superficially more similar to P. What can correctly be concluded from this cladogram?",
      options: ["P and Q are more closely related to each other than either is to R", "P and R must be more closely related because they look alike", "The cladogram cannot be used to infer relationships", "Physical similarity always indicates a recent common ancestor"],
      correct: 0,
      explanation: "A cladogram represents evolutionary relationships based on shared derived characteristics (often supported by molecular data), not superficial resemblance, so the branching pattern — not how alike two organisms look — is what tells us which species share the most recent common ancestor."
    },
    {
      q: "A cladogram shows that domain Eukarya splits into a branch leading to fungi and animals, and a separate branch leading to plants. Which conclusion is best supported by this branching pattern?",
      options: ["Fungi and animals share a more recent common ancestor than either does with plants", "Plants and animals are the same kingdom", "Fungi evolved directly from plants", "All eukaryotes are equally related to one another"],
      correct: 0,
      explanation: "In a cladogram, organisms that branch off from a shared point closer to the tips (rather than closer to the root) share a more recent common ancestor, so a shared branch for fungi and animals, separate from plants, indicates fungi are more closely related to animals than to plants."
    },
    {
      q: "A cladogram groups crocodiles more closely with birds than with other reptiles such as lizards and turtles, based on molecular and anatomical evidence. What conclusion is best supported by this branching pattern?",
      options: ["Crocodiles share a more recent common ancestor with birds than with other reptiles", "Birds are not really reptiles at all, according to this cladogram", "Turtles are more closely related to crocodiles than lizards are", "All four groups shown must have evolved from birds"],
      correct: 0,
      explanation: "A cladogram groups organisms according to how recently they shared a common ancestor, based on shared derived characteristics, not overall visual similarity; grouping crocodiles closer to birds than to other reptiles reflects genuine evolutionary relationships uncovered by more detailed molecular and anatomical analysis, even though crocodiles superficially resemble lizards more."
    },
    {
      q: "A cladogram is built by comparing amino acid sequence differences in a shared protein across four vertebrate species, including humans. What feature of the protein sequences would most likely have been compared to construct it?",
      options: ["Differences in amino acid composition between the species' versions of the protein", "Differences in the 3D folded shape of the protein alone", "Similarities in the physical location of the gene on a chromosome", "Similarities in the organism's outward appearance"],
      correct: 0,
      explanation: "Molecular cladograms are typically built by comparing the actual sequence of building blocks, in this case, differences in amino acid composition between each species' version of a shared protein, since species that diverged more recently are expected to accumulate fewer sequence differences than those that diverged longer ago."
    },
    {
      q: "Hedgehogs and echidnas both have sharp, hair-derived quills covering their bodies, despite belonging to very different mammalian lineages that diverged a long time ago. What is the most likely explanation for this shared feature?",
      options: ["Convergent evolution, in which similar environmental pressures independently favoured quill-like defensive structures in both lineages", "Common ancestry, since both species inherited quills directly from a shared ancestor with quills", "Adaptive radiation from a single quill-bearing ancestor species", "The quills are entirely coincidental and serve no adaptive function in either species"],
      correct: 0,
      explanation: "Because hedgehogs and echidnas are not closely related and their shared ancestor did not have quills, their similar defensive structures most likely arose independently through convergent evolution: similar selective pressures (defence against predators) favoured a similar solution (modified hairs) in each separate lineage."
    },
    {
      q: "A dichotomous key sorts vertebrates into groups based on a sequence of either/or questions about their observable features (e.g. presence of scales, type of respiration, method of reproduction). What is the main purpose of this kind of key?",
      options: ["To allow an organism to be identified or classified by working through a series of choices between two alternative features", "To show the exact evolutionary relationships and common ancestry between organisms", "To calculate genetic distance between different species", "To determine the exact date a species first evolved"],
      correct: 0,
      explanation: "A dichotomous key is a practical identification tool: at each step, the user chooses between two alternative descriptions of a feature, and each choice leads either to another pair of choices or to a final identification; unlike a cladogram, it is designed for classification and identification, not for showing evolutionary relationships."
    },
    {
      q: "Living organisms are classified into three domains: Archaea, Bacteria, and Eukarya. What feature would be expected to be present in the cells of all three domains?",
      options: ["A cell wall", "A membrane-bound nucleus", "Multiple linear chromosomes", "Membrane-bound organelles"],
      correct: 0,
      explanation: "A cell wall is a feature shared across representatives of all three domains, even though its exact chemical composition differs (peptidoglycan in most bacteria, different polymers in archaea, cellulose or chitin in some eukaryotes); a membrane-bound nucleus and membrane-bound organelles, by contrast, are unique to Eukarya and absent from Archaea and Bacteria."
    },
    {
      q: "A cladogram groups organisms into three domains, with two of the domains sharing a more recent common ancestor than either does with the third. Based on molecular evidence typically used to build such cladograms, which two domains are usually shown as most closely related?",
      options: ["Archaea and Eukarya, which share a more recent common ancestor than either does with Bacteria", "Bacteria and Eukarya, which share a more recent common ancestor than either does with Archaea", "All three domains are shown as equally related to one another", "Bacteria and Archaea, which share a more recent common ancestor than either does with Eukarya"],
      correct: 0,
      explanation: "Molecular evidence, particularly comparisons of ribosomal RNA sequences, generally shows that Archaea and Eukarya share a more recent common ancestor with each other than either does with Bacteria, a relationship that was a major justification for splitting the traditional two-kingdom prokaryote grouping into two separate domains, Archaea and Bacteria."
    },
    {
      q: "A cladogram shows that a particular reptile lineage shares a more recent common ancestor with birds than with other reptiles such as lizards or turtles. What can be correctly concluded from this branching pattern?",
      options: ["This reptile lineage is more closely related to birds than to other reptiles shown on the cladogram", "Birds must have evolved directly from this reptile lineage", "This reptile lineage cannot be classified as a reptile at all", "All reptile lineages shown must share an equally recent common ancestor with birds"],
      correct: 0,
      explanation: "A cladogram represents relative recency of common ancestry through its branching pattern; a lineage sharing a more recent branch point with birds than other reptiles do indicates it is more closely related to birds specifically, without implying that birds evolved directly from that particular reptile lineage, since all groups on a cladogram are typically shown as present-day or terminal branches."
    },
    {
      q: "What kind of information can genuinely be deduced from the sequence and pattern of branching nodes shown in a cladogram?",
      options: ["The probable order in which different lineages diverged from their shared ancestors", "The exact geological time period in which each species first appeared", "The precise number of physical characteristics any two species have in common", "The exact number of mutations that have occurred in each lineage since a shared ancestor"],
      correct: 0,
      explanation: "The sequence of branching nodes in a cladogram reflects the relative order in which different lineages are inferred to have diverged from shared common ancestors; it does not, by itself, provide exact dates, precise mutation counts, or a tally of shared physical characteristics, all of which would require additional data beyond the cladogram's branching structure alone."
    },
    {
      q: "A cladogram is used to classify several groups within the three domains of life. What underlying type of evidence is most commonly used to construct this kind of cladogram today?",
      options: ["Comparisons of DNA or RNA sequences (such as ribosomal RNA) across the different groups", "Direct observation of interbreeding between the groups shown", "Measurements of each organism's physical size and body shape alone", "Fossil dating alone, without reference to any molecular data"],
      correct: 0,
      explanation: "Modern cladograms, especially those used to define the three-domain system, rely heavily on molecular evidence, particularly comparisons of highly conserved sequences like ribosomal RNA, which can reveal evolutionary relationships that aren't always obvious from physical appearance or fossil evidence alone."
    }
  ],

  "D4.2": [
    {
      q: "Surtsey is a volcanic island off Iceland formed by eruptions between 1963 and 1967, and has been legally protected from human interference ever since. What kind of ecological changes would you expect scientists to have observed there since its formation?",
      options: ["Cyclical succession as the climax community repeatedly changes", "Secondary succession, beginning once the first animals arrived", "Arrested succession caused by drainage of wetland areas", "Primary succession, including increasingly larger plants colonising over time"],
      correct: 3,
      explanation: "Surtsey started as bare volcanic rock with no existing soil or organisms, which is the defining condition for primary succession, and larger, more complex plants would be expected to establish as that succession proceeds."
    },
    {
      q: "A volcanic island newly formed from cooled lava is gradually colonised over decades by lichens, then mosses, then small plants, and eventually shrubs and trees. Which of the following correctly describes what happens to species diversity and food web complexity as this succession proceeds?",
      options: ["Both species diversity and the complexity of food webs tend to increase as succession proceeds", "Species diversity decreases while food web complexity increases", "Both species diversity and food web complexity remain constant throughout succession", "Species diversity increases while food web complexity decreases"],
      correct: 0,
      explanation: "As primary succession proceeds from bare rock through pioneer species to a more established community, soil develops, more niches become available, and species diversity generally increases; with more species present, feeding relationships also become more numerous and complex, increasing the intricacy of the resulting food web."
    },
    {
      q: "A group of scientists studies the recovery of an ecosystem several decades after a major disturbance, tracking changes in species diversity and community structure as the ecosystem gradually returns toward a more stable state. What term describes this gradual process of ecological recovery and change following a disturbance?",
      options: ["Secondary succession", "Primary succession", "Speciation", "Genetic drift"],
      correct: 0,
      explanation: "Secondary succession describes the gradual recovery and change of an ecological community following a disturbance to an already-existing ecosystem (where soil and some organisms typically remain), distinguishing it from primary succession, which begins from bare, lifeless substrate such as newly exposed rock with no pre-existing soil or organisms."
    }
  ],

  "D4.3": [
    {
      q: "Climate models predict that hardiness zones (regions defined by minimum winter temperature) in parts of North America will shift over the next 25 years. What's a likely consequence of that shift for tree species in the region?",
      options: ["Tree species will spread further north as the climate changes", "Cold-resistant tree species will decline", "There will be no real change in where tree species grow", "Tree species currently found in the north will outcompete species further south"],
      correct: 0,
      explanation: "As hardiness zones shift northward with warming, the areas suitable for a given tree species also shift northward, so species distributions are expected to move north over time."
    },
    {
      q: "A researcher records the exact date of budburst in a tree species every spring for twenty years to see if it's shifting earlier. What field of study does this best represent?",
      options: ["Phenology, the timing of seasonal biological events", "Population genetics, changes in allele frequency over time", "Biogeochemistry, the relationship between ocean acidification and CO2", "Speciation, the emergence of new species through divergent evolution"],
      correct: 0,
      explanation: "Phenology is specifically the study of the timing of recurring biological events, like flowering, migration, or budburst, and how that timing shifts, often in response to climate change."
    },
    {
      q: "Which of the following could contribute to a positive feedback cycle that accelerates global warming?",
      options: ["Methane being released as previously frozen ground thaws", "A newly reforested area absorbing more carbon dioxide", "Higher temperatures increasing plant photosynthesis rates", "Peat gradually accumulating in undisturbed swamps"],
      correct: 0,
      explanation: "Thawing permafrost releasing methane (a potent greenhouse gas) causes further warming, which thaws more permafrost, releasing more methane, that self-reinforcing loop is a positive feedback cycle."
    },
    {
      q: "Since the mid-20th century, atmospheric carbon dioxide concentration has risen sharply, closely tracking the growth of global fossil fuel use. What is considered the main driver of this rise, and of contemporary climate change more broadly?",
      options: ["The combustion of fossil fuels, releasing large quantities of greenhouse gases into the atmosphere", "Natural variability in the sun's output, following a predictable long-term cycle", "Ocean currents redistributing existing heat rather than adding any new heat", "Volcanic eruptions releasing heat directly into the atmosphere"],
      correct: 0,
      explanation: "While natural factors like solar variability and volcanic activity do influence climate over long timescales, the overwhelming scientific consensus is that the rapid rise in atmospheric CO2 (and the associated enhanced greenhouse effect) since industrialisation is primarily driven by human combustion of fossil fuels."
    },
    {
      q: "Continuous measurements of atmospheric CO2 concentration at a monitoring station show a clear yearly zig-zag pattern superimposed on a long-term upward trend: concentration falls each year during one part of the year and rises during the other. What best explains this seasonal dip?",
      options: ["Increased photosynthesis by land plants during their growing season absorbs more CO2 than is being released", "A seasonal decrease in the rate of global fossil fuel combustion", "Increased volcanic activity during certain months of the year", "A seasonal increase in the rate of respiration by all organisms"],
      correct: 0,
      explanation: "During the Northern Hemisphere's growing season, the much larger land area (and plant biomass) there means photosynthesis temporarily draws down atmospheric CO2 faster than it's being released, producing an annual dip that is reversed in autumn and winter as plant growth slows and respiration/decomposition dominate again — the well-known 'Keeling curve' pattern."
    },
    {
      q: "Adding iron to nutrient-poor ocean surface waters has been proposed as a way to trigger blooms of phytoplankton, in the hope of increasing carbon dioxide removal from the atmosphere. What would be a plausible short-term consequence of a successful iron-fertilization bloom?",
      options: ["An increase in the rate of photosynthesis by phytoplankton, increasing uptake of atmospheric CO2 into the ocean", "A decrease in the rate of photosynthesis by phytoplankton", "An immediate decrease in atmospheric CO2 with no involvement of phytoplankton", "No change in CO2 exchange between the ocean and atmosphere"],
      correct: 0,
      explanation: "Iron often limits phytoplankton growth in certain ocean regions; adding it can trigger a bloom that increases photosynthetic uptake of dissolved CO2, which in turn increases the rate at which atmospheric CO2 diffuses into the ocean to replace it — though the long-term effectiveness and ecological side effects of this geoengineering approach remain debated."
    },
    {
      q: "Actions such as afforestation and rewetting drained peatlands are often promoted as climate change mitigation strategies, while deforestation has the opposite effect. What do afforestation and peatland rewetting have in common in terms of carbon?",
      options: ["Both increase carbon sequestration, storing more carbon in biomass or soil than before", "Both decrease carbon sequestration compared to leaving the land as it was", "Neither has any measurable effect on atmospheric carbon dioxide", "Only afforestation affects carbon storage; peatland rewetting does not"],
      correct: 0,
      explanation: "Afforestation increases the amount of carbon stored in growing tree biomass, while rewetting a drained peatland stops the rapid oxidation (and CO2 release) that occurs when peat is exposed to air, instead allowing new peat and stored carbon to build up again; deforestation does the reverse of both, releasing stored carbon rather than sequestering it."
    },
    {
      q: "Rising ocean temperatures are linked to several ecological consequences, including coral bleaching events. Why does elevated water temperature typically reduce nutrient upwelling to the ocean surface as well?",
      options: ["Warmer surface water increases ocean stratification, making it harder for cooler, nutrient-rich deep water to mix upward", "Warmer water always increases mixing between surface and deep layers", "Nutrient upwelling is completely unrelated to ocean temperature", "Warmer surface water sinks below cooler water, forcing nutrients upward"],
      correct: 0,
      explanation: "Warm water is less dense than cold water, so as surface layers warm, the ocean becomes more strongly stratified (layered), which resists the vertical mixing that would normally bring nutrient-rich deep water up to the surface; reduced upwelling in turn limits nutrient availability for phytoplankton, with knock-on effects throughout the marine food web."
    },
    {
      q: "One proposed short-term consequence of a large phytoplankton bloom triggered by ocean iron fertilization is a temporary shift in the ocean's role in the carbon cycle. Which statement best describes this shift?",
      options: ["The area of ocean temporarily becomes a stronger carbon sink, absorbing more CO2 from the atmosphere than it releases", "The area of ocean becomes a permanent, unlimited carbon source", "The bloom has no effect on the balance between the ocean and atmosphere", "The bloom immediately releases stored carbon back into the atmosphere"],
      correct: 0,
      explanation: "A phytoplankton bloom increases the rate of photosynthetic carbon fixation in that patch of ocean, temporarily strengthening it as a carbon sink (absorbing more CO2 from the atmosphere); whether this effect is significant or lasting at a global scale is a major point of scientific debate around ocean iron fertilization as a climate strategy."
    },
    {
      q: "Melting Arctic permafrost is releasing methane and carbon dioxide that had been trapped in frozen soil for thousands of years. What kind of climate mechanism does this represent?",
      options: ["A positive feedback loop, since warming causes permafrost to melt, which releases more greenhouse gases, causing further warming", "A negative feedback loop, since permafrost melting removes greenhouse gases from the atmosphere", "An unrelated, one-off event with no ongoing consequences for climate", "A mechanism that only affects local Arctic temperatures, not the global climate"],
      correct: 0,
      explanation: "Permafrost melting releases greenhouse gases that had been locked away in frozen ground; these gases contribute to further atmospheric warming, which in turn causes more permafrost to melt and release more gas, making this a positive feedback loop that can accelerate climate change beyond what direct human emissions alone would cause."
    },
    {
      q: "Methane in Earth's atmosphere is a much more potent greenhouse gas per molecule than carbon dioxide, and it also breaks down over time into other atmospheric compounds. Which combination of statements correctly explains why methane contributes to the greenhouse effect and global warming? I. It absorbs long-wave radiation re-emitted from Earth's surface. II. It is eventually converted into carbon dioxide in the atmosphere. III. It allows more heat to escape from Earth's atmosphere into space.",
      options: ["I and II only", "II only", "II and III only", "I, II, and III"],
      correct: 0,
      explanation: "Methane contributes to warming both directly, by absorbing long-wave radiation re-emitted from Earth's surface (statement I), and indirectly, since it is eventually oxidised into carbon dioxide, itself a long-lived greenhouse gas (statement II); statement III is incorrect, since greenhouse gases trap heat within the atmosphere rather than allowing more of it to escape into space."
    },
    {
      q: "Monthly measurements of atmospheric carbon dioxide concentration at a monitoring station show an overall rising trend across several years, with a repeating up-and-down zigzag pattern superimposed on that trend within each individual year. Which processes together best explain both the yearly zigzag and the overall long-term rise?",
      options: ["Seasonal changes in photosynthesis and respiration cause the yearly zigzag, while continued burning of fossil fuels drives the long-term upward trend", "Seasonal changes in ocean temperature alone cause both the zigzag pattern and the long-term trend", "Only volcanic activity can explain both the short-term zigzag and the long-term rise", "The long-term rise is caused entirely by natural variation in solar output, unrelated to human activity"],
      correct: 0,
      explanation: "The short-term, within-year zigzag reflects the seasonal balance between photosynthesis (which draws CO2 down during a hemisphere's growing season) and respiration/decomposition (which releases CO2 more strongly during other parts of the year), while the long-term upward trend across many years is attributed mainly to the ongoing combustion of fossil fuels, which releases far more CO2 than natural seasonal cycling can offset."
    },
    {
      q: "What kind of radiation, absorbed by greenhouse gases such as carbon dioxide and methane, is directly responsible for warming Earth's lower atmosphere via the enhanced greenhouse effect?",
      options: ["Long-wave radiation emitted from the surface of the Earth", "Ultraviolet light emitted by the Sun", "Short-wave radiation emitted by the Sun before reaching Earth's surface", "Radiation emitted only during volcanic eruptions"],
      correct: 0,
      explanation: "Short-wave solar radiation passes through the atmosphere largely unabsorbed and warms Earth's surface; the surface then re-emits this energy as long-wave (infrared) radiation, and it is specifically this long-wave radiation that greenhouse gases like CO2 and methane are effective at absorbing and re-radiating, which is the physical basis of the enhanced greenhouse effect and global warming."
    },
    {
      q: "Which gases have contributed most significantly to the observed rise in global average temperature over the past century, based on their combined atmospheric concentration and heat-trapping ability?",
      options: ["Carbon dioxide and methane", "Water vapour and carbon dioxide", "Methane and nitrous oxide", "Carbon dioxide and ozone"],
      correct: 0,
      explanation: "Carbon dioxide and methane are widely recognised as the two greenhouse gases making the most significant combined contribution to observed global warming, given both their substantial atmospheric concentrations (heavily influenced by human activity) and their considerable heat-trapping ability, even though other gases like nitrous oxide and ozone also contribute to a lesser overall extent."
    },
    {
      q: "Under certain environmental conditions, living organisms produce and release methane as a metabolic by-product. Which condition specifically favours this production of methane?",
      options: ["Anaerobic (oxygen-free) conditions, such as those found in wetlands, rice paddies, or the digestive systems of certain animals", "Forest fires, which combust organic material rather than producing methane biologically", "High light intensity, which favours photosynthesis rather than methane-producing metabolism", "Dry conditions, which typically limit rather than promote methane-producing microbial activity"],
      correct: 0,
      explanation: "Methane is produced by methanogenic archaea carrying out anaerobic metabolism in oxygen-free environments, such as waterlogged wetland soils, flooded rice paddies, and the digestive tracts of ruminant animals; dry, oxygen-rich conditions do not favour this type of anaerobic methane-producing metabolism."
    },
    {
      q: "The oceans absorb a substantial proportion of atmospheric carbon dioxide, and rising CO2 emissions from burning fossil fuels have increased the concentration of dissolved CO2 in seawater. What adverse effect does this increased oceanic CO2 have on marine life?",
      options: ["Corals deposit less calcium carbonate to build their skeletons, since increased dissolved CO2 makes ocean water more acidic", "Heterotrophic marine organisms consume significantly more phytoplankton as a direct result", "Phytoplankton show increased rates of photosynthesis as a direct benefit of the extra dissolved CO2", "Rising ocean pH directly reduces enzyme activity in marine organisms"],
      correct: 0,
      explanation: "Dissolved CO2 reacts with seawater to form carbonic acid, lowering ocean pH (ocean acidification, not a rise in pH); this makes it more difficult for corals and other calcifying organisms to deposit and maintain calcium carbonate structures such as skeletons and shells, threatening coral reefs and shelled marine life more broadly."
    }
  ],

  "C4.1": [
    {
      q: "Which interspecific relationship results in a negative impact for both species involved?",
      options: ["Competition", "Mutualism", "Parasitism", "Commensalism"],
      correct: 0,
      explanation: "In competition, both species are trying to use the same limited resource, and both are worse off for it, unlike parasitism, where only the host is harmed."
    },
    {
      q: "Legume plants (like soybeans) form root nodules containing Rhizobium bacteria. What best explains the relationship between the two species?",
      options: ["Mutualistic: bacteria get oxygen for respiration, the plant gets carbon dioxide", "Mutualistic: the plant supplies sugars, and gets ammonium for protein synthesis in return", "Parasitic: bacteria drain nutrients from the plant, stunting its growth", "Parasitic: bacteria take water from the roots, reducing photosynthesis"],
      correct: 1,
      explanation: "This is a classic mutualism: the plant provides sugars from photosynthesis, and the nitrogen-fixing bacteria provide the plant with usable ammonium for making amino acids and proteins."
    },
    {
      q: "In the mutualistic relationship between mycorrhizal fungi and orchids, what role does the fungus mainly play?",
      options: ["Nutrient absorption for the orchid", "Photosynthesis on the orchid's behalf", "Producing carbon dioxide for the orchid", "Providing physical shelter for the orchid"],
      correct: 0,
      explanation: "Mycorrhizal fungi vastly increase the surface area available for absorbing water and nutrients from the soil, which they share with the orchid in exchange for sugars."
    },
    {
      q: "Which scenario is an example of a population control mechanism operating within a community?",
      options: ["Bottom-up control of herbivores by a top predator", "Top-down control of grasses by the consumers that eat them", "Top-down control of a plant species by how much nutrient is in the soil", "Bottom-up control of dissolved oxygen levels by corals"],
      correct: 1,
      explanation: "Top-down control means a higher trophic level (consumers) limits a lower one (the grasses they eat); resource availability limiting a population, by contrast, is bottom-up control, not top-down."
    },
    {
      q: "Researchers use a capture-mark-release-recapture method, together with the Lincoln index (population estimate = M × N ÷ R), to estimate a mollusc population on a rocky shore. In the first sample, 40 individuals are marked and released; in a second sample, 100 individuals are caught, of which 8 are marked. What does this method assume in order for the estimate to be accurate?",
      options: ["Marked individuals mix randomly back into the population and marking does not affect survival or capture probability", "All individuals in the population are captured in the first sample", "Marked individuals are more likely to be recaptured than unmarked ones", "The population size changes substantially between the two sampling events"],
      correct: 0,
      explanation: "The Lincoln index only gives an accurate estimate if marked individuals redistribute randomly and are neither more nor less likely to be recaptured than unmarked ones, and if the population stays roughly closed (no major births, deaths, immigration or emigration) between the two sampling events."
    },
    {
      q: "Salinity, temperature, and available light are all measured as part of a study on marram grass growing on a coastal sand dune. Which category do these measurements belong to?",
      options: ["Abiotic factors, since they are non-living components of the environment", "Biotic factors, since they involve interactions with other organisms", "Neither abiotic nor biotic, since they don't affect the ecosystem", "Population density measures, since they describe organism numbers"],
      correct: 0,
      explanation: "Abiotic factors are the non-living physical and chemical components of an ecosystem, such as salinity, temperature, and light availability; these contrast with biotic factors, which describe interactions between organisms such as competition, predation, or disease."
    },
    {
      q: "A study rears mosquito larvae at two different pH levels and tracks the proportion still at the larval stage (versus already pupated) over 15 days. Larvae at the lower pH reach the pupal stage noticeably sooner than those at the higher pH. What can be concluded from this data?",
      options: ["Lower pH is associated with faster larval development in this species", "pH has no measurable effect on larval development", "Higher pH always speeds up insect development in general", "All larvae pupate at exactly the same rate regardless of pH"],
      correct: 0,
      explanation: "If larvae reared at the lower pH reach the pupal stage earlier than those at the higher pH, the data support a link between lower pH and faster development in this specific experiment; care is needed not to overgeneralise this single result to insect development as a whole, since other species or conditions might respond differently."
    },
    {
      q: "A population growth curve for yeast in a closed flask shows rapid growth followed by a much slower, eventually flattened phase. Which factor would be most likely to explain the point where growth begins to slow sharply?",
      options: ["Increasing competition for limited resources such as nutrients and space as the population approaches carrying capacity", "A sudden decrease in predation pressure", "An increase in food supply part-way through the experiment", "A decrease in the size of the population that has already occurred"],
      correct: 0,
      explanation: "As a population in a closed environment grows, resources like nutrients and space become increasingly limited and waste products accumulate, increasing competition and death rate while slowing birth rate; this density-dependent effect is what causes growth to slow and eventually plateau near the environment's carrying capacity."
    },
    {
      q: "A sealed terrestrial mesocosm containing plants, soil organisms, and a small population of consumers is monitored for several months without any material added or removed. What observation would best indicate that the mesocosm remains a sustainable, functioning ecosystem?",
      options: ["Nutrients such as carbon and nitrogen continue to be recycled between organisms rather than accumulating or running out", "The diversity of species inside the mesocosm continues increasing indefinitely without limit", "The total mass of carbon within the sealed system keeps increasing over time", "Energy is conserved and recycled repeatedly between organisms within the mesocosm"],
      correct: 0,
      explanation: "A sealed, sustainable ecosystem depends on nutrients (unlike energy) being continually recycled between producers, consumers, and decomposers, since no new matter can enter or leave the sealed system; energy, by contrast, flows through an ecosystem in one direction and is progressively lost as heat, so it cannot be recycled the way matter can, making continued nutrient cycling the better sustainability indicator."
    },
    {
      q: "Over time, the submerged hull of a sunken ship becomes colonised by a wide variety of marine organisms, including barnacles, algae, fish, and various invertebrates living in and around the wreck. What term correctly describes all of these organisms taken together?",
      options: ["A community", "A population", "An ecological niche", "An ecosystem"],
      correct: 0,
      explanation: "A community refers to all the different populations of different species living and interacting together in a given area; an ecosystem would additionally include the surrounding abiotic (non-living) environment, a population refers to only one species, and a niche describes an organism's specific role rather than the collection of organisms itself."
    },
    {
      q: "Which statement correctly describes how individual organisms within an ecological community are related to one another?",
      options: ["They belong to different populations, of potentially many different species, coexisting and interacting in the same area", "They all belong to the same species", "They all occupy the same trophic level within the ecosystem", "They must all be primary producers"],
      correct: 0,
      explanation: "A community is defined as all the different populations of different species that live and interact within a shared area; members of a community can belong to many different species, trophic levels, and roles, so what unites them is shared location and ecological interaction, not shared species identity or trophic position."
    },
    {
      q: "A chi-squared test is a statistical tool that can be applied to a variety of questions in ecological research. Which of the following would be an appropriate use of a chi-squared test in this context?",
      options: ["Testing whether two species tend to be found living together more often than would be expected by chance", "Testing whether the mean height of one plant population is greater than another", "Testing the specific effect of a single named abiotic factor on one particular plant species", "Testing whether one population of plants shows greater tolerance to heavy metal contamination than another"],
      correct: 0,
      explanation: "A chi-squared test compares observed frequencies of categorical data against expected frequencies, making it well suited to questions like whether two species are found together (or apart) more often than chance would predict; comparing mean values between groups (like height or tolerance) instead calls for a different statistical test, such as a t-test."
    }
  ],

  "C4.2": [
    {
      q: "In a food web from Chesapeake Bay, small planktivorous fish are eaten by wading birds, which are eaten by bald eagles. Considering the whole web, which organisms act as tertiary consumers in at least one food chain?",
      options: ["Small planktivorous fish and tundra swans", "Herbivorous ducks and bald eagles", "Wading birds and geese", "Ospreys and benthic invertebrates"],
      correct: 1,
      explanation: "A tertiary consumer sits three levels above producers, in different chains through this web, both herbivorous ducks (via a longer chain elsewhere) and bald eagles occupy that third-consumer position."
    },
    {
      q: "In an Arctic marine food web, bacteria, nanoflagellates, and diatoms are all shown consuming sunlight-derived energy as well as feeding on other organisms. Which organism in this kind of web is best described as a mixotroph?",
      options: ["Bacteria", "Nanoflagellates", "An organism like Micromonas that both photosynthesises and consumes other cells", "Copepods"],
      correct: 2,
      explanation: "A mixotroph combines both photosynthesis and heterotrophic feeding, which is exactly what distinguishes an organism like Micromonas from strict autotrophs or strict consumers in the same food web."
    },
    {
      q: "An energy pyramid shows 20,010 units of energy available to producers, 4,006 units reaching primary consumers, 408 reaching secondary consumers, and 21 reaching tertiary consumers (all in kJ per square metre per year). What's a valid conclusion from this data?",
      options: ["Producers lose almost all their energy by reflecting sunlight", "4,006 kJ per m2 per year is gained by primary consumers", "Tertiary consumers use 408 kJ per m2 per year in life processes", "21 kJ per m2 per year is used by detritivores"],
      correct: 1,
      explanation: "Each level in the pyramid represents the energy actually gained by that trophic level, so the 4,006 figure directly represents what primary consumers gained, not what was lost or used elsewhere."
    },
    {
      q: "Nitrogen fertiliser increasingly leaches into a nearby lake over several years. What change would you expect to see in the lake as a result?",
      options: ["Wilting of surface plants", "An increase in biochemical oxygen demand (BOD)", "Weakened shells in molluscs", "Bioaccumulation of pollutants at higher trophic levels"],
      correct: 1,
      explanation: "Excess nitrogen drives algal blooms; when that extra algae dies and decomposes, decomposer activity spikes and consumes more dissolved oxygen, raising the biochemical oxygen demand of the water."
    },
    {
      q: "A terrestrial food web diagram shows several species linked by feeding relationships, some of which feed only on producers while others feed on both producers and other consumers. Which group in the food web is correctly described as 'primary consumers'?",
      options: ["Species that feed directly and only on producers", "Species that feed on primary consumers only", "Species that photosynthesise to produce their own food", "Species that decompose dead organic matter"],
      correct: 0,
      explanation: "Primary consumers occupy the second trophic level, feeding directly on producers (autotrophs); species that additionally or exclusively feed on other consumers occupy higher trophic levels (secondary or tertiary consumers), so correctly identifying 'primary' consumers in a food web means tracing exactly which species feed only on the producer level."
    },
    {
      q: "In a eutrophic lake, an excess of nutrients from agricultural runoff triggers a large algal bloom, which is followed some time later by a sharp drop in dissolved oxygen and a fish die-off. What is the underlying chain of events connecting these observations?",
      options: ["Excess nutrients cause algae to overgrow; when the algae die, decomposing bacteria multiply and consume large amounts of dissolved oxygen through respiration", "Excess nutrients directly poison the fish, unrelated to the algae", "The algal bloom itself directly increases dissolved oxygen so much that fish cannot survive", "Fish die first, which then causes the algal bloom afterwards"],
      correct: 0,
      explanation: "Eutrophication follows a predictable chain: excess nutrients (often nitrates or phosphates) cause explosive algal growth; when the short-lived algae die, decomposer bacteria break down the dead material and, in doing so, consume large amounts of dissolved oxygen through aerobic respiration, leaving too little oxygen for fish and other aerobic organisms to survive."
    },
    {
      q: "In a stable, natural terrestrial ecosystem that has existed for a very long time without any external input of fresh raw materials, how is the ongoing supply of nutrients and energy for its inhabitants maintained?",
      options: ["Nutrients are efficiently recycled within the ecosystem, while energy continually enters from an external source (the Sun) and is not recycled", "Both nutrients and energy are recycled indefinitely within the ecosystem with no external input required", "Energy is recycled within the ecosystem, while nutrients must be continually supplied from an external source", "Neither nutrients nor energy need to be replenished once an ecosystem reaches a stable state"],
      correct: 0,
      explanation: "A key distinction in ecosystem ecology is that nutrients (like carbon, nitrogen, and phosphorus) are recycled repeatedly through an ecosystem via feeding, decomposition, and other processes, while energy flows through in one direction only and must be continually resupplied, almost always from sunlight captured by producers, since energy is progressively lost as heat at every trophic transfer rather than being recycled."
    },
    {
      q: "Autotrophs living in an aquatic ecosystem, such as algae, need a source of carbon to build organic molecules through photosynthesis, despite having no direct access to atmospheric carbon dioxide gas. How do they typically obtain this carbon?",
      options: ["By diffusion of dissolved carbon dioxide and hydrogen carbonate ions from the surrounding water", "By feeding on heterotrophs and extracting carbon from the carbohydrates they contain", "By actively transporting carbon dioxide gas directly from the atmosphere above the water's surface", "By ingesting the calcium carbonate shells of other aquatic organisms"],
      correct: 0,
      explanation: "Aquatic autotrophs obtain the carbon they need for photosynthesis from carbon dioxide and hydrogen carbonate ions dissolved directly in the surrounding water, which diffuse into their cells; this differs from terrestrial autotrophs, which typically obtain carbon dioxide gas directly from the air through their leaves."
    },
    {
      q: "A diagram of energy and matter flow through an ecosystem shows arrows connecting producers, consumers, and decomposers, with some arrows representing loss to the environment. Which combination of processes correctly represents the movement of carbon-containing matter and energy through such a diagram?",
      options: ["Matter cycles between organisms and their environment through feeding and decomposition, while energy flows through the system and is progressively lost as heat at each stage", "Matter and energy both cycle repeatedly through the ecosystem without ever being lost", "Only energy cycles through the ecosystem, while matter is lost permanently at each trophic level", "Matter is lost permanently once it passes from producers to consumers, with no possibility of recycling"],
      correct: 0,
      explanation: "In any ecosystem, matter (including carbon) is genuinely cycled: it moves from the environment into organisms, between organisms via feeding, and back to the environment via respiration and decomposition; energy, by contrast, flows through the system in a single direction from the initial input (usually sunlight) and is progressively lost as heat at each trophic transfer, meaning a continual energy supply is always needed to sustain the ecosystem."
    },
    {
      q: "Methane and carbon dioxide in Earth's atmosphere both absorb a particular kind of radiation, warming the atmosphere as a result. What kind of radiation is being absorbed in this process?",
      options: ["Long-wave radiation re-emitted from the surface of the Earth", "Ultraviolet radiation emitted directly by the Sun", "Short-wave radiation emitted directly by the Sun before reaching Earth's surface", "Radiation emitted specifically and only by greenhouse gases themselves"],
      correct: 0,
      explanation: "Short-wave radiation from the Sun passes through the atmosphere relatively freely and warms Earth's surface; the surface then re-emits this energy as long-wave (infrared) radiation, and it is specifically this long-wave radiation that greenhouse gases like carbon dioxide and methane absorb and re-radiate, trapping heat within the atmosphere rather than letting it escape directly to space."
    },
    {
      q: "In a stable, long-established natural ecosystem, both nutrients and energy must be continually supplied to sustain the community, yet they behave very differently over time. Which statement correctly describes how each is maintained?",
      options: ["Nutrients are efficiently recycled within the ecosystem, while there is a constant, one-way flow of energy into the system (mainly from sunlight)", "Nutrients and energy are both efficiently cycled within the ecosystem with no external input needed", "Energy is cycled through the ecosystem, while nutrients are constantly lost and never recycled", "Energy is cycled through photosynthesis and respiration alone, while food chains ensure nutrients never need to be replenished"],
      correct: 0,
      explanation: "A defining feature of ecosystem ecology is that nutrients (such as carbon, nitrogen, and phosphorus) are recycled repeatedly through feeding, respiration, and decomposition, while energy instead flows through the ecosystem in one direction, entering mainly as sunlight and being progressively lost as heat at each trophic transfer, meaning a continual external energy supply is always required."
    },
    {
      q: "Autotrophs living in aquatic ecosystems, such as algae, must obtain carbon in order to photosynthesise, despite having no direct access to atmospheric CO2 gas. How do they typically obtain this carbon?",
      options: ["By diffusion of dissolved carbon dioxide and hydrogen carbonate ions from the surrounding water", "By feeding on heterotrophs and extracting carbon from their carbohydrates", "By actively transporting carbon dioxide gas directly from the atmosphere above the water", "By ingesting organisms with calcium carbonate shells"],
      correct: 0,
      explanation: "Aquatic autotrophs obtain the carbon they need for photosynthesis from carbon dioxide and hydrogen carbonate ions dissolved directly in the surrounding water, diffusing into their cells; this differs from terrestrial autotrophs, which typically take up carbon dioxide gas directly from the air through structures such as stomata."
    },
    {
      q: "A diagram of energy flow through an ecosystem shows a series of 'sinks' representing where energy ultimately ends up at different trophic levels. In a typical terrestrial ecosystem, which trophic level would be expected to have accumulated the highest total biomass?",
      options: ["Autotrophs (producers), since they form the base of the food chain and typically retain the greatest total energy and biomass", "Primary consumers, since they benefit from concentrated energy passed on from producers", "Secondary consumers, since predators occupy a more energy-efficient position in the food chain", "Detritus feeders, since they recycle energy that would otherwise be lost"],
      correct: 0,
      explanation: "Because a substantial proportion of energy is lost as heat at each successive trophic transfer, producers (autotrophs) at the base of a food chain typically retain the greatest total energy and support the largest overall biomass in a typical terrestrial ecosystem, with progressively less biomass supported at each higher trophic level."
    },
    {
      q: "A diagram shows energy flow through a marine food chain, with a certain percentage of the energy passed from primary producers to primary consumers ultimately being lost to cellular respiration by tertiary consumers several steps later. Why does only a small percentage of the original energy remain available by the time it reaches such a high trophic level?",
      options: ["A substantial proportion of energy is lost as heat through cellular respiration and other life processes at every trophic transfer along the way", "Energy is fully conserved and passed on with no loss between any trophic levels", "Only primary producers ever lose energy to cellular respiration", "Energy loss only occurs at the final trophic level, not at earlier transfers"],
      correct: 0,
      explanation: "At every stage of a food chain, from producers to primary consumers to secondary and tertiary consumers, each organism uses a large share of the energy it has obtained for its own respiration, movement, and other life processes, releasing much of it as heat rather than passing it on; because this loss compounds at every trophic transfer, only a small fraction of the energy originally captured by producers remains available by the time it reaches a higher trophic level like tertiary consumers."
    },
    {
      q: "Deforestation removes large areas of photosynthesising vegetation and can also disturb stored carbon in soil. Considering carbon's role as both nutrient and reservoir, what effect would large-scale deforestation be expected to have on the surrounding ecosystem's nutrient and energy balance?",
      options: ["It reduces the rate at which carbon is taken up and cycled through photosynthesis, while also potentially releasing previously stored soil carbon back into the atmosphere", "It has no measurable effect on either nutrient cycling or energy flow in the ecosystem", "It only affects the flow of energy through the ecosystem, without altering nutrient cycling at all", "It increases the total amount of carbon stored within the remaining ecosystem"],
      correct: 0,
      explanation: "Removing large areas of vegetation reduces the ecosystem's capacity to take up atmospheric carbon through photosynthesis, disrupting the normal cycling of carbon as a nutrient; disturbed soil can also release previously stored carbon (built up over long periods through decomposition) back into the atmosphere, compounding the disruption to the ecosystem's carbon balance."
    }
  ],

  "A4.2": [
    {
      q: "Which action would most directly help reduce ongoing biodiversity loss?",
      options: ["Increasing the rate of deforestation", "Introducing new species to control predator numbers", "Cutting back on renewable energy use", "Rewilding ecosystems that have been degraded"],
      correct: 3,
      explanation: "Rewilding restores natural habitat and species interactions in a degraded area, directly working against biodiversity loss, unlike the other options which would worsen it."
    },
    {
      q: "Satellite images of Borneo show a large loss of forest cover between 1973 and 2010. Which pair of human activities most plausibly explains this?",
      options: ["Logging and palm oil plantation development", "Logging and ecosystem rewilding", "Mining and afforestation", "Afforestation and palm oil plantation development"],
      correct: 0,
      explanation: "Logging and converting land to palm oil plantations are the two dominant, well-documented drivers of large-scale forest loss in Borneo over that period."
    },
    {
      q: "Some conservation programmes prioritise species based on being 'evolutionarily distinct and globally endangered.' Why would a species be included on this kind of priority list?",
      options: ["It shares a niche with an invasive species", "It lives at the physical edge of its ecosystem", "Its population is shrinking and it has few or no close living relatives", "It is a keystone species holding its ecosystem together"],
      correct: 2,
      explanation: "This kind of programme specifically targets species that are both declining and evolutionarily isolated, meaning their extinction would represent a disproportionate loss of unique evolutionary history."
    },
    {
      q: "The North Island giant moa, a large flightless bird, went extinct in New Zealand not long after humans first arrived on the islands. What is considered the most likely cause of this extinction?",
      options: ["Overhunting by the newly arrived human population", "A sudden change in global climate", "Competition with other native megafauna", "Introduction of a new plant disease"],
      correct: 0,
      explanation: "The timing of the moa's extinction closely tracks the arrival and spread of humans across New Zealand, and evidence of large-scale hunting supports overhunting (rather than climate change or competition) as the primary driver, a pattern repeated with megafauna extinctions on several other islands and continents."
    },
    {
      q: "A conservation project reintroduces wolves to a national park decades after they were locally eliminated, aiming to restore natural predator-prey dynamics across the whole ecosystem. What is this strategy called?",
      options: ["Rewilding, through reintroduction of a keystone species", "Afforestation", "Captive breeding only, with no release planned", "Eutrophication management"],
      correct: 0,
      explanation: "Rewilding aims to restore natural ecological processes, often by reintroducing keystone species like large predators, whose presence can cascade through an ecosystem (for example, changing herbivore grazing patterns and allowing vegetation and other species to recover)."
    },
    {
      q: "Global biodiversity has declined significantly over the past century. Which combination of human activities is most directly responsible for this decline?",
      options: ["Urban expansion and clearing land for agriculture", "Restoring degraded habitats and reducing urban sprawl", "Establishing more protected wildlife reserves", "Reducing the human population size"],
      correct: 0,
      explanation: "Habitat loss from expanding cities and converting natural land to farmland is one of the largest direct drivers of global biodiversity loss, since it destroys or fragments the habitats that species depend on, unlike restoration or protection efforts, which work in the opposite direction."
    }
  ],

  "B2.1": [
    {
      q: "Oestradiol is a small, non-polar steroid hormone. How is it able to cross the plasma membrane of a target cell?",
      options: ["It passes directly between the phospholipids because it is non-polar", "It passes either between phospholipids or through channel proteins because it is amphipathic", "It can only pass through hydrophilic pores using hydrogen bonding", "It must pass through channel proteins because of its large size"],
      correct: 0,
      explanation: "Because it's small and non-polar, oestradiol can simply diffuse straight through the hydrophobic core of the bilayer without needing any transport protein."
    },
    {
      q: "At very low temperatures, membranes risk becoming too rigid to function properly. Which change in membrane composition helps maintain fluidity in the cold?",
      options: ["An increase in unsaturated fatty acids and a decrease in saturated ones, proteins unchanged", "No change to unsaturated fatty acids, an increase in saturated ones, proteins decrease", "An increase in unsaturated fatty acids and a decrease in saturated ones, proteins unchanged (kinked tails prevent tight packing)", "A decrease in unsaturated fatty acids, no change to saturated ones, proteins increase"],
      correct: 2,
      explanation: "Unsaturated fatty acid tails have kinks that stop phospholipids packing too tightly together, so increasing their proportion (relative to saturated ones) keeps the membrane fluid even in the cold."
    },
    {
      q: "Red blood cells were placed into four different solutions. In solution 2 they crenated (shrivelled with a spiky outline), and in solution 4 they burst. What can be concluded about the two solutions?",
      options: ["Solution 1 is hypotonic to solution 4", "Solution 2 is hypotonic to solution 1", "Solution 3 is hypertonic to solution 4", "Solution 4 is hypertonic to solution 2"],
      correct: 2,
      explanation: "A cell that stays normal in solution 3 but bursts in solution 4 shows solution 4 has a lower solute concentration than solution 3, meaning solution 3 is hypertonic relative to solution 4."
    },
    {
      q: "Which molecule is correctly paired with the membrane component that lets it cross the membrane?",
      options: ["Insulin paired with aquaporin", "Glycogen paired with a channel protein", "Oestradiol paired with the phospholipid bilayer directly", "Carbon dioxide paired with a pump protein"],
      correct: 2,
      explanation: "Oestradiol is small and non-polar, so it passes straight through the phospholipid bilayer itself rather than needing a transport protein."
    },
    {
      q: "Human cells maintain a much higher concentration of potassium ions inside the cell than outside, and a much higher concentration of sodium ions outside than inside. Since both ions would naturally diffuse down their gradients, what process must be maintaining this arrangement?",
      options: ["Active transport using a membrane protein pump, using ATP to move ions against their gradients", "Facilitated diffusion using a channel protein, which requires no energy", "Simple diffusion directly across the phospholipid bilayer", "Osmosis through aquaporins"],
      correct: 0,
      explanation: "Because both ions are being kept away from equilibrium, energy must be spent to move them against their concentration gradients; this is exactly what the sodium-potassium pump does, using ATP to actively transport sodium out and potassium in, maintaining the gradients that resting and action potentials depend on."
    },
    {
      q: "Certain glycoproteins embedded in the cell membrane allow the immune system to distinguish 'self' cells from foreign ones. Which part of the membrane's structure is responsible for this cell-recognition function?",
      options: ["Carbohydrate chains attached to membrane proteins, projecting from the outer surface", "The hydrophobic tails of the phospholipids", "Cholesterol molecules embedded within the bilayer", "The hydrophilic phosphate heads alone"],
      correct: 0,
      explanation: "Glycoproteins (and glycolipids) have carbohydrate chains that project outward from the membrane surface; the specific pattern of these chains acts like a molecular identity tag, which is how immune cells recognise a cell as belonging to the body rather than being foreign."
    },
    {
      q: "During receptor-mediated endocytosis, a coat protein assembles on the inner surface of the plasma membrane, causing it to curve inward and pinch off as a vesicle. What is the role of this coat protein?",
      options: ["Clathrin, which self-assembles into a lattice that pulls the membrane into a curved shape", "A sodium-potassium pump, which creates the force needed to bend the membrane", "An aquaporin, which allows water to flow in and push the membrane inward", "A glycoprotein, which marks the vesicle for recognition by the Golgi apparatus"],
      correct: 0,
      explanation: "Clathrin molecules bind to the cytoplasmic side of the membrane and assemble into a basket-like lattice; as more clathrin molecules join, the lattice curves and eventually pinches the membrane inward to form a clathrin-coated vesicle, a key mechanism in receptor-mediated endocytosis."
    },
    {
      q: "A diagram of the fluid mosaic model shows a bilayer with embedded proteins that can drift laterally within the membrane. Why is the membrane described as a 'mosaic' as well as 'fluid'?",
      options: ["Because it is made of a patchwork of different components (phospholipids, proteins, cholesterol, glycolipids) that can move relative to one another within the bilayer", "Because the membrane is a rigid, static structure", "Because only phospholipids are present in the membrane", "Because every component of the membrane is fixed permanently in one location"],
      correct: 0,
      explanation: "'Fluid' refers to the ability of phospholipids and proteins to move sideways within the layer; 'mosaic' refers to the variety of different components — proteins, cholesterol, glycolipids, glycoproteins — scattered throughout the phospholipid bilayer like tiles in a mosaic pattern, together giving the membrane its dynamic, patchwork structure."
    },
    {
      q: "Red blood cells placed in a particular solution shrink and develop a spiky, shrivelled appearance under the microscope. What can be concluded about the solution, and why does this happen?",
      options: ["The solution is hypertonic to the cell, so water leaves the cell by osmosis, causing it to shrink (crenate)", "The solution is hypotonic to the cell, so water enters and the cell swells", "The solution is isotonic, so there is no net water movement", "The solution has no effect on water movement across the membrane"],
      correct: 0,
      explanation: "If a cell shrinks and shrivels (crenates), water must be leaving the cell down its concentration gradient, which only happens when the surrounding solution has a lower water potential (higher solute concentration) than the cytoplasm — meaning the solution is hypertonic relative to the cell."
    },
    {
      q: "Facilitated diffusion and active transport both move substances across a cell membrane, but differ in several important ways. What is a genuine similarity between the two processes?",
      options: ["Both are carried out using specific proteins embedded in the membrane", "Both move substances against their concentration gradient", "Both directly require ATP to proceed", "Both are exclusively used to transport non-polar molecules"],
      correct: 0,
      explanation: "Facilitated diffusion and active transport both rely on specific membrane proteins to move their target substance across the membrane, unlike simple diffusion, which requires no protein at all; they differ in that facilitated diffusion moves substances down their concentration gradient without using energy, while active transport moves substances against their gradient and requires ATP."
    },
    {
      q: "Simple diffusion and facilitated diffusion both move substances passively, down their concentration gradient, without requiring ATP. What is the key distinguishing feature between the two processes?",
      options: ["The rate of facilitated diffusion depends on the number of available transport proteins, while simple diffusion does not rely on any membrane protein", "Simple diffusion requires ATP, while facilitated diffusion does not", "Facilitated diffusion can move substances against their concentration gradient, unlike simple diffusion", "Simple diffusion only occurs in prokaryotic cells, while facilitated diffusion only occurs in eukaryotic cells"],
      correct: 0,
      explanation: "Simple diffusion occurs directly through the phospholipid bilayer with no protein involvement, so its rate depends mainly on concentration gradient and membrane permeability; facilitated diffusion depends on specific transport proteins, so its rate is additionally limited by how many of those channel or carrier proteins are available, a key distinguishing feature between the two passive transport mechanisms."
    },
    {
      q: "Glucose is a relatively large, polar molecule, yet it can still move down its concentration gradient across the plasma membrane. How does it typically achieve this?",
      options: ["It moves through specific hydrophilic channel or carrier proteins, since its polarity prevents it from crossing the hydrophobic bilayer directly", "It dissolves directly into the hydrophobic core of the phospholipid bilayer", "It is actively pumped across the membrane using ATP due to its large size", "It diffuses freely between the phospholipid molecules due to their flexibility"],
      correct: 0,
      explanation: "Because glucose is polar, it cannot readily cross the hydrophobic interior of the phospholipid bilayer on its own; instead, it moves down its concentration gradient via facilitated diffusion, using specific hydrophilic transport proteins that provide a channel through the otherwise impermeable membrane."
    },
    {
      q: "In a diagram of the fluid mosaic model, certain regions of a membrane protein are shown facing the watery environment on either side of the membrane, while other regions are embedded within the hydrophobic interior of the bilayer. Which regions would be expected to be hydrophilic?",
      options: ["The regions exposed to the aqueous environment on either side of the membrane", "The regions embedded within the hydrophobic core of the bilayer", "The entire protein, regardless of its position within the membrane", "Neither region, since membrane proteins are entirely hydrophobic"],
      correct: 0,
      explanation: "Integral membrane proteins are amphipathic: the segments that sit within the hydrophobic core of the bilayer are themselves hydrophobic (to be compatible with the surrounding lipid tails), while the segments exposed to the watery environment on either side of the membrane are hydrophilic, allowing the protein to interact favourably with both its lipid and aqueous surroundings."
    },
    {
      q: "A membrane protein has a hydrophobic identification tag (glycoprotein or glycolipid marker) that projects outward, allowing the immune system to identify the cell as belonging to the body. What is this cell-recognition function primarily associated with?",
      options: ["Carbohydrate chains attached to proteins or lipids, projecting from the outer surface of the membrane", "The hydrophobic tails of the phospholipid molecules", "Cholesterol embedded within the bilayer", "Channel proteins that transport ions across the membrane"],
      correct: 0,
      explanation: "Cell-surface recognition depends on glycoproteins and glycolipids, membrane components with carbohydrate chains attached that project outward from the cell surface; the specific pattern of these carbohydrate 'tags' acts as an identity marker that immune cells use to distinguish the body's own cells from foreign ones."
    },
    {
      q: "A diagram of the fluid mosaic model labels several distinct regions of a membrane protein and phospholipid molecules. Which of these labelled regions would be expected to be hydrophilic?",
      options: ["The regions exposed to the watery environment on either side of the membrane, including the phosphate heads of phospholipids", "The regions embedded within the hydrophobic interior of the bilayer", "The fatty acid tails of every phospholipid molecule, regardless of position", "None of the regions in a membrane are hydrophilic"],
      correct: 0,
      explanation: "Membrane components positioned within the hydrophobic core of the bilayer (such as phospholipid tails and the membrane-spanning portions of integral proteins) are themselves hydrophobic, while regions exposed to the aqueous environment on either side of the membrane, including phospholipid phosphate heads and the exposed portions of membrane proteins, are hydrophilic, allowing favourable interaction with the surrounding water."
    },
    {
      q: "What property of phospholipid molecules explains their ability to spontaneously assemble into a bilayer when placed in water?",
      options: ["They are amphipathic, having both a hydrophilic head and hydrophobic tails", "They are entirely hydrophobic throughout the whole molecule", "They are entirely hydrophilic throughout the whole molecule", "They are saturated, with no double bonds in their fatty acid tails"],
      correct: 0,
      explanation: "Because phospholipids are amphipathic, possessing both a hydrophilic phosphate head and hydrophobic fatty acid tails, they spontaneously arrange themselves in water so that hydrophilic heads face outward toward the surrounding water while hydrophobic tails cluster together away from it, forming the characteristic bilayer structure of cell membranes without requiring any external energy input."
    },
    {
      q: "Red blood cells placed in a series of increasingly concentrated salt solutions show a corresponding pattern of change in cell volume. What underlying process explains these changes?",
      options: ["Osmosis, the net movement of water across the cell membrane down its water potential gradient", "Active transport of water molecules using ATP", "Exocytosis of water from the cell in response to high external salt concentration", "Facilitated diffusion of salt ions into or out of the cell"],
      correct: 0,
      explanation: "Placing cells in solutions of varying salt concentration changes the water potential gradient across the cell membrane, driving water to move into or out of the cell by osmosis; this explains cell swelling in more dilute (hypotonic) solutions and cell shrinkage in more concentrated (hypertonic) solutions, without requiring any energy input from the cell."
    },
    {
      q: "An organ intended for transplant must be kept bathed in a carefully chosen solution before the transplant procedure, to prevent damage to its cells. What type of solution would be most appropriate for this purpose?",
      options: ["A solution with the same osmolarity (solute concentration) as the organ's own tissue fluid", "A hypertonic solution, to help shrink swollen cells", "A hypotonic solution, to help hydrate the tissue", "Pure water containing no dissolved solutes at all"],
      correct: 0,
      explanation: "To prevent net water movement into or out of the organ's cells by osmosis (which could cause them to swell and burst, or shrink and become damaged), the surrounding solution needs to have the same osmolarity as the organ's own tissue fluid, an isotonic solution, keeping the cells in osmotic equilibrium with their surroundings."
    },
    {
      q: "Cholesterol is embedded within the phospholipid bilayer of animal cell membranes at varying concentrations. Which statement correctly describes a role of cholesterol in the membrane?",
      options: ["It affects the fluidity of the membrane, helping to keep it neither too rigid nor too fluid across a range of temperatures", "It is hydrophilic overall and sits entirely outside the bilayer", "It is transported through the blood in direct chemical association with glucose", "It has no measurable effect on the physical properties of the membrane"],
      correct: 0,
      explanation: "Cholesterol molecules are embedded within the hydrophobic interior of the phospholipid bilayer, where they help regulate membrane fluidity: at higher temperatures cholesterol restrains excessive fluidity, while at lower temperatures it helps prevent the membrane from becoming too rigid, allowing membranes to function effectively across a range of conditions."
    },
    {
      q: "A graph shows the rate at which chloride ions move into a cell by facilitated diffusion, plotted against the external chloride ion concentration. As external concentration continues to rise, the rate of ion movement eventually levels off rather than continuing to increase indefinitely. What best explains this levelling off?",
      options: ["The available channel proteins become saturated, since there is a limited number of them in the membrane", "Chloride ions stop being attracted to the cell once a certain concentration is reached", "The cell begins actively pumping chloride back out once internal concentration is high enough", "Facilitated diffusion has no maximum rate and would continue increasing indefinitely with concentration"],
      correct: 0,
      explanation: "Facilitated diffusion depends on a fixed number of channel or carrier proteins in the membrane; once external ion concentration is high enough that all of these proteins are continuously occupied and working at full capacity, further increases in external concentration cannot increase the rate any further, producing a plateau on the graph, a limitation not seen with simple diffusion directly through the lipid bilayer."
    },
    {
      q: "Diagrams show four cells with the same internal solute concentration but different combinations of membrane surface area and cell volume. If all four cells were placed into the same hypertonic solution, which cell would be expected to show the fastest rate of change in its internal solute concentration?",
      options: ["The cell with the largest surface area to volume ratio, since this maximises the rate of water movement relative to the cell's total volume", "The cell with the smallest surface area to volume ratio", "All four cells would change at exactly the same rate regardless of their surface area to volume ratio", "The cell with the largest total surface area, regardless of its volume"],
      correct: 0,
      explanation: "A larger surface area to volume ratio allows a proportionally greater area of membrane for water to move across relative to the total volume of cytoplasm that needs to lose or gain water; this means a cell with a higher surface area to volume ratio would show a faster rate of change in internal solute concentration when placed in a hypertonic solution compared with a cell with a lower ratio."
    },
    {
      q: "A diagram shows a cross-section through a cell membrane with several different structures labelled, including a channel protein, a carrier protein, and the phospholipid bilayer itself. Which combination of these structures could be involved in moving substances across the membrane?",
      options: ["The phospholipid bilayer alone (for small non-polar molecules), plus channel and carrier proteins (for larger or polar molecules, or against a gradient)", "Only the phospholipid bilayer can transport any substance across the membrane", "Only channel proteins are capable of transporting substances across the membrane", "Only carrier proteins are capable of transporting substances across the membrane"],
      correct: 0,
      explanation: "Different substances cross the membrane by different routes depending on their size, polarity, and the direction of movement required: small non-polar molecules can diffuse directly through the phospholipid bilayer, while larger or polar/charged molecules require specific channel proteins (facilitated diffusion) or carrier proteins (facilitated diffusion or active transport, depending on whether ATP is used)."
    }
  ],

  "D3.3": [
    {
      q: "People exercising on a hot, humid day show rising body temperature during exercise, which then drops slightly during a rest period before rising again with more exercise. What mechanism explains the temperature drop during rest?",
      options: ["Shivering", "Uncoupled respiration in brown adipose tissue", "Vasodilation in the skin", "Hair erection (piloerection)"],
      correct: 2,
      explanation: "During rest in the heat, blood vessels in the skin widen (vasodilation), increasing blood flow to the skin surface so more heat can radiate away, cooling the body slightly."
    },
    {
      q: "PET scans show much higher brown adipose tissue activity in a person at 2°C compared to at room temperature. How does brown adipose tissue help regulate body temperature in the cold?",
      options: ["It provides ATP for muscles to shiver", "It insulates the body so heat isn't lost", "It converts into thick white fat to prevent hypothermia", "It breaks down fat to release heat directly, without producing ATP"],
      correct: 3,
      explanation: "Brown fat contains a protein that uncouples respiration from ATP production, meaning the energy from breaking down fat is released as heat instead, which is a very direct way to warm the body."
    },
    {
      q: "When the body's core temperature rises above its normal set point, several physiological responses act to bring it back down. Which of the following is a correct example of one such response?",
      options: ["Vasodilation of blood vessels near the skin surface, increasing heat loss to the environment", "Vasoconstriction of blood vessels near the skin surface", "Shivering of skeletal muscle to generate heat", "Increased secretion of thyroxine to raise metabolic rate"],
      correct: 0,
      explanation: "As body temperature rises, vasodilation widens blood vessels close to the skin's surface, increasing blood flow there and allowing more heat to be lost to the surrounding environment by radiation, while vasoconstriction, shivering, and increased thyroxine secretion are all responses used to conserve or generate heat when the body is too cold."
    },
    {
      q: "If a person's core body temperature drops below its normal set point, several homeostatic mechanisms are triggered to restore it. Which response would be expected under these conditions?",
      options: ["Increased shivering, generating heat through rapid, repeated muscle contraction", "Increased sweating to cool the body further", "Vasodilation of skin blood vessels to lose more heat", "Decreased thyroxine secretion, slowing metabolic heat production"],
      correct: 0,
      explanation: "A drop in core temperature triggers heat-generating and heat-conserving responses, including shivering (rapid involuntary muscle contractions that release heat as a byproduct) and vasoconstriction; sweating, vasodilation, and reduced thyroxine would all make the situation worse by losing or failing to generate additional heat."
    },
    {
      q: "A drug is developed that specifically restores normal ion channel function in cardiac muscle cells, helping to correct an irregular heartbeat caused by delayed repolarization. Which underlying homeostatic principle does this treatment rely on?",
      options: ["Membrane potential must be tightly regulated by the coordinated opening and closing of specific ion channels for normal, rhythmic muscle contraction to occur", "Homeostasis in the heart depends entirely on hormonal signals, with no role for ion channels or membrane potential", "Cardiac muscle cells do not require any regulation of membrane potential to contract normally", "The heart's rhythm is controlled exclusively by the nervous system, with no involvement of ion movement across membranes"],
      correct: 0,
      explanation: "Normal, rhythmic contraction of cardiac muscle depends on precisely timed depolarization and repolarization, driven by the coordinated opening and closing of sodium and potassium channels; a drug that restores normal ion channel timing helps re-establish the tightly regulated membrane potential changes needed for a regular heartbeat, illustrating how homeostatic control at the cellular level underlies normal organ function."
    },
    {
      q: "The pituitary gland secretes antidiuretic hormone (ADH) when the solute concentration of the blood rises above normal. Which statement correctly explains how ADH acts to reduce blood solute concentration back toward normal?",
      options: ["It changes the permeability of the collecting duct's walls to water, increasing water reabsorption and producing more concentrated urine", "It increases ultrafiltration of solutes at the glomerulus, diluting the blood directly", "It increases reabsorption of sodium ions specifically in the loop of Henle, reducing water excretion indirectly", "It causes selective reabsorption of specific solutes in the distal convoluted tubule"],
      correct: 0,
      explanation: "ADH acts specifically on the collecting duct, increasing its permeability to water by inserting more aquaporin channels into its walls; this allows more water to be reabsorbed from the filtrate back into the blood as it passes through, producing a smaller volume of more concentrated urine and reducing the blood's overall solute concentration back toward normal."
    }
  ],

  "C3.1": [
    {
      q: "During moderate-intensity exercise, blood flow is redirected away from some organs and towards working muscles and the skin. Which change correctly explains one part of this redistribution?",
      options: ["Blood flow to the skin increases so that excess metabolic heat can be lost to the environment", "Blood flow to the brain decreases to divert more blood to digestion", "Blood flow to the digestive system increases to speed up nutrient absorption during exercise", "Blood flow to the kidneys increases specifically to remove lactate"],
      correct: 0,
      explanation: "As muscles generate heat during exercise, blood flow to the skin increases to help dissipate that heat by radiation and sweating, while blood flow to less immediately essential organs (such as the digestive system) is reduced, illustrating how the body coordinates multiple systems to maintain internal balance during physical activity."
    },
    {
      q: "The rhythmic, coordinated contractions that move food through the digestive tract (peristalsis) continue even in people who are unconscious or asleep. What does this indicate about the nervous control of peristalsis?",
      options: ["It is controlled involuntarily by the enteric nervous system, independent of conscious control", "It is controlled voluntarily by the central nervous system", "It requires continuous conscious effort to maintain", "It is controlled entirely by the endocrine system with no nervous involvement"],
      correct: 0,
      explanation: "Peristalsis is coordinated by the enteric nervous system, a largely self-contained network of neurons embedded in the wall of the digestive tract that operates automatically and involuntarily, which is why digestion continues smoothly even during sleep or unconsciousness."
    },
    {
      q: "Multiple organ systems, including the nervous, endocrine, and cardiovascular systems, must work together during a stress response such as the 'fight or flight' reaction. What best describes why this level of integration is necessary?",
      options: ["A coordinated response requires rapid nervous signalling alongside slower, longer-lasting hormonal signalling and altered blood distribution, all acting toward the same goal", "Each system responds completely independently with no need for coordination", "Only the nervous system needs to respond; other systems remain unaffected", "Integration only matters during sleep, not during a stress response"],
      correct: 0,
      explanation: "A stress response needs both the speed of nervous signalling (for immediate reflexes) and the sustained action of hormones like adrenaline (for effects that last longer, like increased heart rate and redirected blood flow), so the nervous, endocrine, and cardiovascular systems must act together in an integrated way rather than independently."
    }
  ],

  "B3.3": [
    {
      q: "A titinopathy is a muscle disorder caused by an abnormal version of the protein titin. Titin normally limits how far a muscle sarcomere can stretch. What would you predict happens if titin is abnormal?",
      options: ["Muscles detach from their tendons", "Muscles stretch too far during relaxation", "Muscles have less ATP available for contraction", "Antagonistic muscle pairs contract at the same time"],
      correct: 1,
      explanation: "Since titin's normal job is to act like a spring limiting overstretching, a faulty titin would most directly cause the sarcomere (and so the muscle) to stretch further than it should during relaxation."
    },
    {
      q: "In a sarcomere diagram, the distance between two Z-lines shortens during contraction as thick and thin filaments slide past each other. Which part of the sarcomere changes length as a muscle relaxes back to its resting state?",
      options: ["The I-band, which lengthens again as the filaments slide apart", "The A-band, which changes length as thick filaments shorten", "The individual thick filaments themselves, which physically shorten", "The individual thin filaments themselves, which physically shorten"],
      correct: 0,
      explanation: "The sliding filament model explains contraction as thick and thin filaments overlapping more, not shortening themselves; as a muscle relaxes, the filaments slide back apart, so the I-band (which contains only thin filaments) lengthens again, while the A-band (defined by the length of the thick filaments) stays constant."
    },
    {
      q: "Cardiac muscle and skeletal (striated) muscle look different overall, but they share some underlying structural features. Which of the following is found in both types of muscle?",
      options: ["Sarcomeres and a large number of mitochondria", "Branched fibres in both tissue types", "A single nucleus per fibre in both tissue types", "Involuntary control in both tissue types"],
      correct: 0,
      explanation: "Both cardiac and skeletal muscle are striated, meaning both contain sarcomeres as their basic contractile units, and both have a high density of mitochondria to supply the ATP needed for repeated contraction — even though cardiac fibres are branched and involuntary while skeletal fibres are unbranched and voluntary."
    },
    {
      q: "At a synovial joint such as the hip, several distinct connective tissues each perform a different mechanical role. Which statement correctly matches a structure to its function?",
      options: ["Tendons transmit the force generated by muscle contraction to the bone", "Ligaments attach muscle to bone", "Cartilage connects one bone directly to another", "Synovial fluid holds the bones of the joint rigidly in place"],
      correct: 0,
      explanation: "Tendons connect muscle to bone and transmit the pulling force of contraction so the bone actually moves; ligaments, by contrast, connect bone to bone and stabilise the joint, while cartilage cushions the bone ends and synovial fluid lubricates the joint to reduce friction during movement."
    },
    {
      q: "In the sliding filament model of muscle contraction, calcium ions play a critical regulatory role before myosin heads can bind to actin. What is the specific role of calcium ions in this process?",
      options: ["They bind to a regulatory protein on the actin filament, exposing the myosin-binding sites that were previously blocked", "They directly supply the energy needed for the myosin head to bend and pull the actin filament", "They prevent cross bridges from forming between actin and myosin", "They cause the actin and myosin filaments to physically shorten"],
      correct: 0,
      explanation: "In a resting muscle, a regulatory protein blocks the myosin-binding sites on the actin filament; when calcium ions are released and bind to this regulatory protein, it changes shape and moves out of the way, exposing the binding sites and allowing the myosin heads to attach to actin and begin the cross-bridge cycle."
    },
    {
      q: "An electron micrograph of a skeletal muscle fibre shows an extensive network of specialised endoplasmic reticulum wrapped closely around the muscle's contractile filaments. What is the primary function of this structure, known as the sarcoplasmic reticulum?",
      options: ["To store and release calcium ions needed to trigger muscle contraction", "To synthesise the actin and myosin proteins used in the sarcomere", "To generate ATP through aerobic respiration", "To transmit the nerve impulse that initiates contraction"],
      correct: 0,
      explanation: "The sarcoplasmic reticulum is a specialised form of smooth endoplasmic reticulum in muscle cells that stores calcium ions; when a nerve impulse triggers contraction, calcium is released from the sarcoplasmic reticulum into the cytoplasm, where it binds troponin and exposes the myosin-binding sites on actin, initiating the cross-bridge cycle."
    },
    {
      q: "Calcium ions play an essential regulatory role in initiating muscle contraction. What is their specific mechanism of action?",
      options: ["They bind to troponin, causing tropomyosin to shift and expose the myosin-binding sites on actin", "They bind directly to myosin, supplying the energy needed for the myosin head to bend", "They prevent an action potential from occurring in the muscle cell membrane", "They bind to tropomyosin directly, blocking the myosin-binding sites on actin"],
      correct: 0,
      explanation: "Calcium ions released from the sarcoplasmic reticulum bind to the regulatory protein troponin, causing a shape change that shifts the associated tropomyosin protein out of the way; this exposes the previously blocked myosin-binding sites on the actin filament, allowing the cross-bridge cycle of contraction to begin."
    },
    {
      q: "Striated skeletal muscle fibres are unusual among human cell types in containing more than one nucleus within a single, continuous cell. Which of the following cell types also typically shows this same multinucleate feature?",
      options: ["Fungal hyphae, which are similarly coenocytic, containing multiple nuclei within one continuous cytoplasm", "Red blood cells, which typically contain a single nucleus", "Neurons, which typically contain a single nucleus", "Sperm cells, which are haploid and typically contain a single nucleus"],
      correct: 0,
      explanation: "Both skeletal muscle fibres and fungal hyphae are described as coenocytic (or syncytial): each contains multiple nuclei sharing one continuous, undivided cytoplasm, an unusual arrangement compared with most other cell types, which typically contain just a single nucleus each."
    },
    {
      q: "A diagram of a sarcomere labels several structures, including the thin filaments that slide past the thick filaments during contraction. Which protein makes up these thin filaments?",
      options: ["Actin", "Myosin", "Troponin alone, with no other structural protein present", "Tropomyosin alone, with no other structural protein present"],
      correct: 0,
      explanation: "The thin filaments of a sarcomere are made of actin, along with the regulatory proteins troponin and tropomyosin associated with it; the thick filaments, by contrast, are made of myosin, whose projecting heads bind to actin during the cross-bridge cycle of muscle contraction."
    },
    {
      q: "In a diagram of a sarcomere, myosin filaments are shown with projecting heads oriented toward the neighbouring actin filaments on either side. Which structure represents the myosin filament itself in such a diagram?",
      options: ["The thick, centrally-positioned filament with visible projecting heads", "The thin filament anchored to the Z-line at either end of the sarcomere", "The entire sarcomere, from one Z-line to the next", "The whole myofibril, made up of many repeating sarcomeres"],
      correct: 0,
      explanation: "Myosin forms the thick filaments of a sarcomere, positioned centrally and recognisable by their distinctive projecting heads that reach out toward the neighbouring thin actin filaments; the actin filaments themselves are thinner and anchored to the Z-lines at either end of the sarcomere, while the whole repeating unit between two Z-lines is the sarcomere, and a chain of many sarcomeres makes up a myofibril."
    }
  ],

  "B3.1": [
    {
      q: "A transverse section of a leaf shows a layer of tall, tightly packed, column-shaped cells just beneath the upper epidermis, densely packed with chloroplasts. What tissue is this?",
      options: ["Upper epidermis", "Palisade mesophyll", "Spongy mesophyll", "Lower epidermis"],
      correct: 1,
      explanation: "Palisade mesophyll cells are the tall, column-shaped, chloroplast-rich cells positioned near the upper surface of a leaf to capture the most light."
    },
    {
      q: "As atmospheric carbon dioxide concentration rises, a mammal's ventilation rate also rises sharply. What mechanism explains this response?",
      options: ["The brainstem increases diaphragm and intercostal muscle contraction after chemoreceptors detect a drop in blood pH", "Stretch receptors in the brainstem directly signal the lungs to increase ventilation rate", "Baroreceptors detect the CO2 build-up and signal the diaphragm directly", "The pituitary gland stimulates the brainstem when blood plasma becomes more acidic"],
      correct: 0,
      explanation: "Rising CO2 lowers blood pH, which chemoreceptors detect; they signal the brainstem, which then increases the rate and depth of breathing via the diaphragm and intercostal muscles."
    },
    {
      q: "A lung biopsy shows thin, flattened cells lining tiny air sacs, each surrounded by a dense network of capillaries. Which feature of these cells is most directly responsible for efficient gas exchange?",
      options: ["Their extreme thinness, which minimises the diffusion distance between air and blood", "Their thick, multilayered structure, which increases surface area", "Their ability to actively pump oxygen across the membrane", "Their location far away from any blood supply"],
      correct: 0,
      explanation: "Type I pneumocytes lining the alveoli are extremely thin (often just one cell thick), which minimises the diffusion distance between the air in the alveolus and the blood in the surrounding capillaries, allowing oxygen and carbon dioxide to diffuse rapidly across the exchange surface."
    },
    {
      q: "A graph of lung volume during normal breathing and then a forced deep breath in and out is used to calculate a person's vital capacity. What does 'vital capacity' actually represent?",
      options: ["The maximum volume of air that can be exhaled after the deepest possible inhalation", "The volume of air left in the lungs after a normal exhalation", "The total volume of the lungs including air that can never be exhaled", "The volume of one normal, resting breath"],
      correct: 0,
      explanation: "Vital capacity is the maximum amount of air a person can forcibly exhale after taking the deepest possible breath in; it excludes the residual volume of air that always remains in the lungs (since the lungs can never be completely emptied), which is why it's smaller than total lung capacity."
    },
    {
      q: "Emphysema causes progressive destruction of the walls between alveoli, merging many small air sacs into fewer, larger ones. What is the most direct physiological consequence of this change?",
      options: ["A decrease in the total surface area available for gas exchange", "An increase in the surface area available for gas exchange", "An increase in pulmonary surfactant production", "A decrease in the rate of blood flow to the lungs"],
      correct: 0,
      explanation: "Destroying the thin walls between alveoli merges many small sacs into fewer large ones, which dramatically reduces the total internal surface area of the lungs; since gas exchange rate depends heavily on surface area, this directly explains the breathlessness experienced by people with emphysema."
    },
    {
      q: "During inhalation in humans, the diaphragm contracts and moves downward. What effect does this have on the thoracic cavity, and why does air then flow into the lungs?",
      options: ["Thoracic volume increases, decreasing pressure inside the lungs below atmospheric pressure, so air flows in", "Thoracic volume decreases, increasing pressure inside the lungs, so air flows in", "Thoracic volume stays constant, but pressure decreases anyway", "The diaphragm's movement has no effect on lung pressure"],
      correct: 0,
      explanation: "When the diaphragm contracts and flattens, it increases the volume of the thoracic cavity; by Boyle's law, increasing the volume of a gas-filled space decreases its pressure, so the pressure inside the lungs drops below atmospheric pressure and air flows in down the pressure gradient."
    },
    {
      q: "Chemoreceptors in the blood vessels and brainstem detect a fall in blood pH (caused by rising carbon dioxide) and trigger an increase in breathing rate. What is the functional significance of this response?",
      options: ["It increases carbon dioxide removal from the blood, helping to restore blood pH back towards normal", "It decreases oxygen delivery to the tissues", "It has no effect on blood chemistry", "It only responds to changes in blood glucose, not CO2"],
      correct: 0,
      explanation: "Rising CO2 lowers blood pH (via carbonic acid formation); chemoreceptors detect this change and increase ventilation rate, which expels more CO2 from the lungs, reducing the amount of carbonic acid in the blood and helping to bring pH back towards its normal, tightly regulated range."
    },
    {
      q: "A trained athlete and a beginner are compared using an oxygen-haemoglobin dissociation curve. If the athlete's curve is shifted to the right relative to the beginner's, what does this indicate about their haemoglobin's behaviour at the tissues?",
      options: ["Haemoglobin releases oxygen more readily at a given partial pressure of oxygen, delivering more oxygen to respiring tissue", "Haemoglobin binds oxygen more tightly and releases less to the tissues", "Oxygen affinity of haemoglobin is unaffected by the shift", "The shift only affects oxygen uptake in the lungs, not release in tissues"],
      correct: 0,
      explanation: "A rightward shift of the dissociation curve (often caused by higher CO2, lower pH, or higher temperature, all common during exercise) means haemoglobin holds onto oxygen less tightly at any given oxygen partial pressure, so more oxygen is unloaded into actively respiring tissues that need it most."
    },
    {
      q: "A diagram of an alveolus shows two distinct types of pneumocyte lining its wall, alongside patrolling phagocytes. What are the respective functions of the two pneumocyte types?",
      options: ["Type I pneumocytes are thin and adapted for gas exchange, while type II pneumocytes secrete surfactant to reduce surface tension", "Type I pneumocytes secrete surfactant, while type II pneumocytes are adapted for gas exchange", "Both pneumocyte types are equally thin and both are dedicated exclusively to gas exchange", "Type I and type II pneumocytes both function only to engulf pathogens, like the alveolar phagocytes"],
      correct: 0,
      explanation: "Type I pneumocytes are extremely thin, flattened cells that make up most of the alveolar surface and are specialised to minimise the diffusion distance for gas exchange; type II pneumocytes are fewer in number but secrete pulmonary surfactant, a substance that reduces surface tension within the alveolus and prevents it from collapsing."
    },
    {
      q: "A lung condition destroys a particular type of alveolar cell responsible for secreting a substance that reduces surface tension inside the alveoli. What would be the most likely consequence of this destruction?",
      options: ["Increased risk of alveolar collapse due to a lack of surfactant", "Increased mucus secretion throughout the airways", "Adhesion of alveolar walls due to excess surfactant production", "Immediate bursting of alveoli due to increased surface area"],
      correct: 0,
      explanation: "Surfactant, secreted by type II pneumocytes, reduces the surface tension of the thin fluid layer lining the alveoli; without enough surfactant, the surface tension becomes high enough to cause the alveolar walls to stick together and collapse, making it much harder to reinflate the alveoli with each breath."
    },
    {
      q: "During inhalation, the volume of the thoracic cavity increases, drawing air into the lungs. What directly causes this expansion of the thorax?",
      options: ["Contraction of the diaphragm and the external intercostal muscles", "Air actively entering the lungs under its own pressure", "An increase in tidal volume occurring independently of any muscle action", "An increase in pressure inside the lungs relative to the atmosphere"],
      correct: 0,
      explanation: "Contraction of the diaphragm (which flattens and moves downward) together with contraction of the external intercostal muscles (which lift the ribcage up and outward) increases the volume of the thoracic cavity; this expansion is the direct cause of the pressure drop inside the lungs that draws air in, rather than being a consequence of it."
    },
    {
      q: "Which feature of the alveoli helps increase the rate of gas exchange in the lung?",
      options: ["A dense network of surrounding capillaries providing high vascularization", "A very small total surface area", "A dry, non-moist internal surface", "Thick, muscular walls capable of contraction"],
      correct: 0,
      explanation: "A rich, dense network of capillaries surrounding the alveoli (high vascularization) maintains a steep concentration gradient for oxygen and carbon dioxide by continuously carrying blood past the exchange surface; alveoli are also adapted with a large total surface area, thin walls, and a moist internal lining, all of which increase, rather than decrease, the rate of gas exchange."
    },
    {
      q: "The exchange of oxygen and carbon dioxide across the thin walls of alveolar pneumocytes occurs by which process?",
      options: ["Simple diffusion, since these are small, non-polar gas molecules moving directly across the membrane down their concentration gradients", "Active transport, requiring ATP to move gases against their concentration gradient", "Facilitated diffusion through specific gas channel proteins", "Mass flow driven by differences in hydrostatic pressure"],
      correct: 0,
      explanation: "Oxygen and carbon dioxide are both small, non-polar molecules that can diffuse directly through the phospholipid bilayer of pneumocytes without requiring a channel or carrier protein; because both gases move down their own concentration gradients (oxygen into the blood, carbon dioxide out), this exchange occurs by simple diffusion rather than any energy-requiring or protein-mediated process."
    }
  ],

  "B3.2": [
    {
      q: "A graph of haemoglobin oxygen saturation against oxygen partial pressure shifts to the right at higher carbon dioxide concentrations and lower pH. What causes this rightward (Bohr) shift?",
      options: ["A decrease in CO2 concentration and a higher pH", "A decrease in CO2 concentration and a lower pH", "An increase in CO2 concentration and a higher pH", "An increase in CO2 concentration and a lower pH"],
      correct: 3,
      explanation: "More CO2 lowers blood pH, and both changes together reduce haemoglobin's affinity for oxygen, shifting the dissociation curve to the right, this is the Bohr shift."
    },
    {
      q: "In a cross section of a sunflower stem, one vascular tissue is positioned toward the outside of the vascular bundle and is responsible for moving sugars around the plant. What is it, and what does it transport?",
      options: ["Xylem, transports water", "Phloem, transports water", "Xylem, transports sugars", "Phloem, transports sugars"],
      correct: 3,
      explanation: "Phloem sits toward the outside of the vascular bundle (with xylem toward the inside) and its role is transporting dissolved sugars, not water."
    },
    {
      q: "Which feature best explains how phloem is adapted for transporting sugars?",
      options: ["Sieve tube elements are packed with mitochondria for active transport", "Plasmodesmata connect companion cells to sieve tube elements, aiding transport between them", "Phloem unloads sugars at the source end using pressure flow", "Companion cells have a reduced cytoplasm to help load sugars"],
      correct: 1,
      explanation: "Companion cells do the metabolic work of loading and supporting sieve tube elements, and plasmodesmata (cytoplasmic connections) between the two cell types are what make that close cooperation possible."
    },
    {
      q: "Which property of veins is essential for their role in the circulatory system?",
      options: ["They're flexible enough to be compressed by surrounding muscle", "They're rigid to resist high blood pressure", "They have fenestrations for rapid exchange with tissue", "They have a very narrow lumen to carry oxygenated blood"],
      correct: 0,
      explanation: "Veins carry blood at low pressure and rely partly on being compressed by surrounding skeletal muscle contractions to help push blood back toward the heart."
    },
    {
      q: "A micrograph shows a large vein running through leg muscle tissue. What mainly drives blood movement along that vein?",
      options: ["The smooth surface of the vein's inner lining", "Stretching and recoiling of the vessel wall itself", "Differences in plasma solute concentration", "Contraction of the surrounding skeletal muscle"],
      correct: 3,
      explanation: "Unlike arteries, veins rely heavily on nearby skeletal muscle contraction (the skeletal muscle pump) to push blood along, since vein walls themselves generate little pressure."
    },
    {
      q: "After a red blood cell releases oxygen in the brain, which sequence correctly describes its path through the heart before it reaches the aorta?",
      options: ["Right atrium then right ventricle then pulmonary artery then vena cava", "Vena cava then right atrium then pulmonary artery then right ventricle", "Vena cava then right atrium then right ventricle then pulmonary artery", "Pulmonary artery then right ventricle then vena cava then right atrium"],
      correct: 2,
      explanation: "Deoxygenated blood from the brain returns via the vena cava into the right atrium, moves into the right ventricle, and is pumped out through the pulmonary artery to the lungs (before later returning oxygenated to reach the aorta)."
    },
    {
      q: "A cross-section of a buttercup root shows the stele (central vascular tissue) and surrounding cortex. In which tissue would you expect to find lignin?",
      options: ["The xylem vessels in the stele", "The cortex cells", "The root epidermis", "The phloem sieve tubes"],
      correct: 0,
      explanation: "Lignin is deposited in xylem vessel walls to provide rigidity and waterproofing, which is why it's concentrated in the xylem tissue at the centre of the root's stele."
    },
    {
      q: "Which environmental change would be expected to increase a plant's rate of transpiration?",
      options: ["An increase in wind speed, which removes water vapour from around the stomata more quickly", "An increase in humidity around the leaf", "A decrease in temperature", "A decrease in light intensity"],
      correct: 0,
      explanation: "Higher wind speed sweeps away the layer of humid air that would otherwise build up around the stomata, maintaining a steeper water potential gradient between the leaf's air spaces and the outside air, which increases the rate of water vapour loss (transpiration)."
    },
    {
      q: "A sphygmomanometer reading shows blood pressure varying between a higher peak value and a lower baseline value as the heart cycles through contraction and relaxation. What do these two values represent?",
      options: ["The higher value is systolic pressure (during ventricular contraction) and the lower is diastolic pressure (during ventricular relaxation)", "The higher value is diastolic pressure and the lower is systolic pressure", "Both values represent the same phase of the cardiac cycle", "The values reflect venous pressure only, not arterial pressure"],
      correct: 0,
      explanation: "Systolic pressure is the higher reading, produced when the ventricles contract and forcefully eject blood into the arteries; diastolic pressure is the lower reading, measured when the ventricles are relaxed and refilling between beats — this is exactly what a sphygmomanometer trace over one cardiac cycle shows."
    },
    {
      q: "Compared with arteries, veins have relatively thin walls with little muscle or elastic tissue. Which of the following best explains why this doesn't cause a problem for blood flow?",
      options: ["Skeletal muscle contraction around veins helps push blood along, compensating for the lack of a strong muscular wall", "Veins carry blood at much higher pressure than arteries, so thick walls aren't needed", "Veins have no need to transport blood at all", "Thin walls allow veins to withstand higher pressure than arteries"],
      correct: 0,
      explanation: "Blood in veins is at much lower pressure than in arteries, so thick elastic walls aren't required to withstand pressure surges; instead, blood is helped along mainly by the squeezing action of surrounding skeletal muscles during movement, together with one-way valves that prevent backflow."
    },
    {
      q: "A diagram compares blood circulation in a fish (single circulation) and a mammal (double circulation). Which statement correctly distinguishes the pressure of blood as it returns to the heart in each system?",
      options: ["In a fish, blood loses considerable pressure passing through the gill capillaries before continuing to the body; in a mammal, blood returns to the heart to be re-pressurised before travelling to the body", "Fish and mammals both re-pressurise blood at the same point in the circuit", "Mammals lose all their blood pressure in a single pass through the capillaries", "Fish have no capillary network at all"],
      correct: 0,
      explanation: "In single circulation (fish), blood passes through one capillary bed (the gills) and loses pressure there before flowing on to the rest of the body at low pressure; in double circulation (mammals), blood returns to the heart after the lungs and is re-pressurised before being pumped out to the rest of the body, allowing faster, more efficient delivery."
    },
    {
      q: "During moderate exercise, blood flow to the skin increases noticeably. What is the main functional reason for this redistribution of blood flow?",
      options: ["Increased blood flow to the skin helps dissipate excess heat generated by working muscles", "Increased blood flow to the skin increases oxygen delivery to the muscles directly", "Increased blood flow to the skin reduces heart rate", "Increased blood flow to the skin has no thermoregulatory role"],
      correct: 0,
      explanation: "Muscle contraction during exercise generates a large amount of metabolic heat; redirecting blood flow to the skin brings this heat close to the body surface, where it can be lost to the environment by radiation and evaporation of sweat, helping to prevent the body from overheating."
    },
    {
      q: "A cross-section of a lily leaf shows a layer of tightly packed, water-conducting vessels alongside a separate layer of living, sieve-tube cells that transport sugars. What are these two tissue types called?",
      options: ["Xylem and phloem", "Epidermis and cortex", "Cortex and pith", "Cuticle and stomata"],
      correct: 0,
      explanation: "Xylem is made of dead, lignified vessels that transport water and mineral ions upward from the roots, while phloem consists of living sieve-tube elements (with companion cells) that transport sugars produced by photosynthesis to other parts of the plant; both are visible as distinct tissue types in a cross-section of a leaf or stem."
    },
    {
      q: "The lumen of an artery and the elastic fibres within its wall each play a distinct role in maintaining efficient blood flow. What are their respective functions?",
      options: ["The lumen provides a channel through which blood flows, while the elastic fibres allow the wall to stretch and recoil, smoothing out the pulsing pressure from the heart", "The lumen allows gas exchange with surrounding tissue, while the elastic fibres carry electrical signals along the vessel", "The lumen produces red blood cells, while the elastic fibres store oxygen", "The elastic fibres form the channel through which blood flows, while the lumen provides structural strength"],
      correct: 0,
      explanation: "The lumen is simply the central, hollow channel through which blood flows; the elastic fibres within an artery's wall allow it to stretch as blood surges in with each heartbeat and then recoil between beats, which helps smooth out the pulsing flow of blood into a steadier pressure by the time it reaches smaller vessels."
    },
    {
      q: "A section through a heart shows internal structures including valves and major blood vessels. Considering the atrioventricular valves and the semilunar valves, what are their respective functions?",
      options: ["Atrioventricular valves prevent backflow from the ventricles into the atria, while semilunar valves prevent backflow from the arteries into the ventricles", "Atrioventricular valves prevent backflow from the arteries into the ventricles, while semilunar valves prevent backflow from the ventricles into the atria", "Both valve types serve only to slow the heart rate", "Both valve types allow blood to flow freely in both directions"],
      correct: 0,
      explanation: "Atrioventricular valves sit between the atria and ventricles and close during ventricular contraction to prevent blood being forced backward into the atria; semilunar valves sit at the exit of the ventricles (into the pulmonary artery and aorta) and close during ventricular relaxation to prevent blood flowing backward out of the arteries into the ventricles."
    },
    {
      q: "A graph of pressure changes in the left side of the heart across a single cardiac cycle shows a period during which the atrioventricular valve stays open, corresponding to filling of the ventricle. If this filling phase makes up roughly two-thirds of a full 0.7-second cardiac cycle, approximately how long does the valve remain open during that cycle?",
      options: ["About 0.45 seconds", "About 0.10 seconds", "About 0.20 seconds", "About 0.70 seconds"],
      correct: 0,
      explanation: "The atrioventricular valve stays open throughout the period when the ventricle is filling with blood (diastole for that chamber), which makes up the majority of the cardiac cycle; roughly two-thirds of a typical 0.7-second cycle amounts to about 0.45 seconds, distinctly longer than the shorter systolic phase during which the valve is closed."
    },
    {
      q: "Phloem sieve tube cells transport sugars produced by photosynthesis to other parts of a plant. Which structural adaptations best explain how sieve tubes are suited to this role?",
      options: ["Sieve tubes have porous end plates (sieve plates) that allow cytoplasm and dissolved sugars to move relatively freely between adjoining cells along the tube", "Each sieve tube cell retains a full, functioning nucleus that actively directs the movement of sugars", "Sieve tubes have unusually thick, rigid walls specifically to withstand very high internal pressure", "Sieve tubes lack any connection between adjoining cells, relying entirely on diffusion through the surrounding tissue"],
      correct: 0,
      explanation: "Sieve tube cells are adapted for bulk transport of sugars by having porous sieve plates at their end walls, allowing cytoplasm (and the sugars dissolved in it) to flow with relatively little resistance from one cell to the next along the phloem; unlike a typical living cell, sieve tube cells lack a full nucleus, relying instead on adjacent companion cells to support their metabolic needs."
    },
    {
      q: "A diagram shows a cross-section through a leaf, with vascular tissue running through the midrib and out into each vein. What functions are carried out by the xylem and phloem tissue visible in this cross-section?",
      options: ["Xylem transports water and minerals into the leaf, while phloem transports the sugars produced by photosynthesis out of the leaf", "Xylem transports sugars out of the leaf, while phloem transports water into the leaf", "Both xylem and phloem exclusively transport water in the same direction", "Xylem and phloem both transport gases rather than liquids"],
      correct: 0,
      explanation: "Xylem carries water and dissolved mineral ions upward and outward from the roots into the leaf, replacing water lost by transpiration and supplying material for photosynthesis, while phloem carries the sugars produced by photosynthesis away from the leaf to other parts of the plant that need them, such as roots or developing fruit."
    },
    {
      q: "Veins returning blood to the heart operate at much lower pressure than arteries, yet blood still moves through them efficiently. What combination of features helps explain this?",
      options: ["The squeezing action of surrounding skeletal muscles, combined with one-way valves that prevent backflow, helps propel blood through veins despite the low pressure", "Veins actively pump blood using their own muscular contractions, similar to the heart", "Veins have much thicker, more elastic walls than arteries to compensate for lower pressure", "Blood flows through veins purely by diffusion rather than bulk flow"],
      correct: 0,
      explanation: "Since blood pressure has dropped substantially by the time blood reaches the veins, efficient venous return relies less on pressure from the heart and more on external help: contraction of nearby skeletal muscles squeezes veins and pushes blood along, while one-way valves inside the veins prevent that blood from flowing backward between muscle contractions."
    },
    {
      q: "A cross-section through xylem vessels shows spiral or ring-shaped thickenings on the inside of the vessel walls. How do these thickened structures contribute to water transport up the stem?",
      options: ["They allow xylem vessels to withstand the low (negative) pressures generated during transpiration without collapsing", "They make the xylem walls more permeable to water", "They increase adhesion between neighbouring xylem vessels", "They develop the cohesive forces that hold water molecules together"],
      correct: 0,
      explanation: "The lignified thickenings on xylem vessel walls provide the mechanical strength needed to resist collapsing under the strong tension (negative pressure) generated as water is pulled upward during transpiration; cohesion between water molecules and adhesion to the vessel walls are separate properties arising from hydrogen bonding, not from these structural thickenings."
    },
    {
      q: "A potato plant is examined at the start of the growing season, when its leaves are actively photosynthesising but its underground tubers have not yet begun storing large amounts of starch. Which visible structures would be acting as 'sources' and which as 'sinks' for sugar transport at this stage?",
      options: ["The leaves act as sources (producing sugar), while the developing tubers and roots act as sinks (using or storing sugar)", "The tubers act as sources, while the leaves act as sinks", "Both the leaves and tubers act as sources simultaneously", "Neither the leaves nor the tubers act as either a source or a sink at this stage"],
      correct: 0,
      explanation: "A 'source' is any plant part producing more sugar than it needs (typically photosynthesising leaves), while a 'sink' is any part that is a net consumer or storage site for sugar (such as developing tubers, roots, or growing shoots); at the start of the growing season, leaves supply sugar via the phloem to the tubers and roots, which are actively using or beginning to store it."
    },
    {
      q: "A cut in the skin triggers a rapid sequence of reactions involving several blood components, ultimately sealing the wound with a fibrous clot. In which order do these components typically act during this process?",
      options: ["Platelets, then clotting factors, then thrombin, then fibrinogen, then fibrin", "Platelets, then fibrinogen, then fibrin, then thrombin, then clotting factors", "Clotting factors, then platelets, then thrombin, then fibrinogen, then fibrin", "Clotting factors, then platelets, then thrombin, then fibrin, then fibrinogen"],
      correct: 0,
      explanation: "Blood clotting begins when platelets aggregate at the wound site and release clotting factors, which trigger a cascade converting the inactive enzyme prothrombin into active thrombin; thrombin then catalyses the conversion of soluble fibrinogen into insoluble fibrin strands, which form the mesh that traps blood cells and seals the wound."
    },
    {
      q: "Arteries are able to maintain sufficiently high blood pressure between heartbeats, despite the intermittent nature of the heart's pumping action. Which structural feature is most directly responsible for this?",
      options: ["Elastic fibres in the arterial wall, which stretch and recoil to smooth out and maintain pressure between beats", "A particularly wide lumen relative to the vessel's overall diameter", "The presence of one-way valves at intervals along the vessel", "An unusually thin overall wall thickness"],
      correct: 0,
      explanation: "Elastic fibres within the arterial wall allow it to stretch as blood surges in during each heartbeat and then recoil between beats, converting the heart's pulsing output into a steadier, sustained pressure; veins, by contrast, rely on valves and surrounding muscle contraction rather than elastic recoil, since they operate at much lower pressure."
    },
    {
      q: "A section through a plant stem shows two distinct vascular tissues running side by side. In which of these tissues would sucrose specifically be transported?",
      options: ["Phloem, which transports the sugars produced by photosynthesis to other parts of the plant", "Xylem, which transports sucrose alongside water and minerals", "Both tissues transport sucrose equally", "Neither tissue is responsible for transporting sucrose"],
      correct: 0,
      explanation: "Phloem tissue, specifically its sieve tube elements supported by companion cells, is responsible for transporting sucrose and other organic products of photosynthesis from source tissues (like leaves) to sink tissues elsewhere in the plant; xylem instead transports water and dissolved mineral ions, not sugars."
    },
    {
      q: "A graph shows pressure changes in the left atrium, left ventricle, and aorta over the course of a single cardiac cycle. At what point in this cycle does the atrioventricular valve close?",
      options: ["When ventricular pressure rises above atrial pressure, at the start of ventricular contraction (systole)", "When ventricular pressure falls below atrial pressure, at the start of ventricular relaxation (diastole)", "At the exact midpoint between the P wave and the QRS complex", "The atrioventricular valve never closes during a normal cardiac cycle"],
      correct: 0,
      explanation: "The atrioventricular valve closes at the moment ventricular pressure rises above atrial pressure, right at the beginning of ventricular systole (contraction), preventing blood from being forced backward into the atrium; it then reopens once ventricular pressure falls back below atrial pressure during diastole, allowing the ventricle to refill."
    },
    {
      q: "The right semilunar valve, located at the exit of the right ventricle, plays a specific role in preventing unwanted backflow of blood. Which blood flow does this valve specifically prevent?",
      options: ["Blood flowing from the pulmonary artery back into the right ventricle once the ventricle begins to relax", "Blood flowing from the right atrium back into the vena cava during atrial contraction", "Blood flowing from the right atrium into the right ventricle during ventricular filling", "Blood flowing from the aorta back into the left ventricle"],
      correct: 0,
      explanation: "The right semilunar valve sits between the right ventricle and the pulmonary artery; it closes once the right ventricle finishes contracting and begins to relax, specifically preventing blood that has just been pumped into the pulmonary artery from flowing backward into the now-relaxing right ventricle."
    },
    {
      q: "An experiment investigates how transpiration rate changes as temperature is varied, using a potted plant fitted with a device that measures the rate of water uptake. Which variable would need to be deliberately kept constant throughout this experiment?",
      options: ["The intensity of light striking the plant", "The rate of water uptake by the plant, since this is what is being measured", "The rate of stomatal opening and closing, since this is expected to respond to temperature", "The final measured transpiration rate itself"],
      correct: 0,
      explanation: "Since the experiment's purpose is to test the specific effect of temperature on transpiration rate, other variables that could independently affect transpiration, most importantly light intensity, need to be deliberately held constant; water uptake rate and stomatal behaviour are outcomes the experiment measures or expects to change, not variables that should be artificially fixed."
    },
    {
      q: "A comparison of stomatal opening over a 24-hour period shows one plant species with stomata open mostly at night and closed during the day, unlike a typical plant. What does this pattern most likely indicate about this species?",
      options: ["It is adapted to a hot, dry environment, opening its stomata at night to minimise water loss while still taking up CO2 for later use in photosynthesis", "It performs no photosynthesis at all during either the day or night", "It only respires during daylight hours and not at night", "It has no stomata capable of closing at any point during the cycle"],
      correct: 0,
      explanation: "Opening stomata at night rather than during the day is characteristic of CAM (Crassulacean Acid Metabolism) photosynthesis, an adaptation common in plants from hot, arid environments; by taking in and temporarily storing CO2 at night when temperatures are cooler and evaporation is lower, these plants minimise water loss through their stomata while still being able to carry out photosynthesis using stored CO2 during the day."
    }
  ],

  "C2.2": [
    {
      q: "A table compares two types of gated ion channel in neurons: one at a synapse, one along the axon involved in the action potential. How would these two channel types typically be gated?",
      options: ["The synaptic channel by voltage, the axon channel by neurotransmitter", "The synaptic channel by neurotransmitter, the axon channel by voltage", "Both gated by voltage", "Both gated by neurotransmitter"],
      correct: 1,
      explanation: "Channels at a synapse open in response to neurotransmitter binding, while channels along the axon (driving the action potential itself) open in response to changes in membrane voltage."
    },
    {
      q: "In a pain reflex arc, which structure acts as the effector?",
      options: ["A skeletal muscle", "A sensory nerve ending", "The pituitary gland", "Grey matter of the spinal cord"],
      correct: 0,
      explanation: "The effector is whatever carries out the response, in a pain reflex that's the skeletal muscle that contracts to pull the body part away."
    },
    {
      q: "In the same pain reflex arc, which structure acts as the receptor?",
      options: ["A skeletal muscle", "Grey matter of the spinal cord", "The pituitary gland", "A sensory nerve ending"],
      correct: 3,
      explanation: "The receptor is what detects the stimulus in the first place, a sensory nerve ending detecting a painful stimulus is exactly that."
    },
    {
      q: "Where in the spinal cord would you expect to find the synapse between a sensory neuron and an interneuron in a pain reflex arc?",
      options: ["In the white matter, at the outer edge of the cord", "In the grey matter, toward the centre of the cord", "Outside the spinal cord entirely, in the peripheral nerve", "In the cerebrospinal fluid surrounding the cord"],
      correct: 1,
      explanation: "Synapses between neurons in the spinal cord are found in the grey matter (the H-shaped region toward the centre), which is where the cell bodies and synaptic connections are concentrated."
    },
    {
      q: "The conduction velocity of electrical impulses was compared across three myelinated nerve fibre types. Fibre R conducted impulses much faster than fibres P and Q. What's the most likely explanation?",
      options: ["Fibre R is the longest of the three", "Fibre R has the thinnest myelin sheath", "Fibre R has the largest diameter", "Fibre R has the most mitochondria"],
      correct: 2,
      explanation: "A larger axon diameter reduces internal resistance to the electrical current, which is a major factor in why some myelinated fibres conduct impulses faster than others."
    },
    {
      q: "A graph of membrane potential during an action potential shows a rapid upward spike (depolarisation) followed by a fall back down (repolarisation). At which point on this graph do voltage-gated sodium channels open?",
      options: ["Just before and during the rapid rising (depolarising) phase", "Only after the peak, during repolarisation", "Only at resting potential, before any stimulus arrives", "Sodium channels never open during an action potential"],
      correct: 0,
      explanation: "Once a stimulus depolarises the membrane past threshold, voltage-gated sodium channels open, allowing a rapid influx of sodium ions that drives the sharp rising phase of the action potential; they then inactivate as potassium channels open to repolarise the membrane back towards resting potential."
    },
    {
      q: "Cocaine interferes with normal synaptic transmission at dopamine synapses in the brain. Which of the following correctly describes its mechanism of action?",
      options: ["It blocks the reuptake of neurotransmitter from the synaptic cleft back into the presynaptic neuron", "It opens ion channels that trigger an action potential directly", "It acts as a non-competitive inhibitor of the sodium-potassium pump", "It speeds up saltatory conduction along myelinated axons"],
      correct: 0,
      explanation: "Cocaine blocks the transporter proteins responsible for reuptake of neurotransmitter (such as dopamine) back into the presynaptic neuron; this leaves more neurotransmitter in the synaptic cleft for longer, prolonging and intensifying its stimulatory effect on the postsynaptic neuron."
    },
    {
      q: "Diagrams of several different axons show varying degrees of myelination. Which axon would be expected to conduct impulses the most slowly?",
      options: ["A thin, unmyelinated axon", "A thick, heavily myelinated axon", "A thin, heavily myelinated axon", "A thick, unmyelinated axon (compared to a thinner myelinated one)"],
      correct: 0,
      explanation: "Impulse speed increases with both axon diameter and the presence of a myelin sheath (which enables fast saltatory conduction by jumping between nodes of Ranvier); a thin, unmyelinated axon combines the two features that most slow conduction, making it the slowest of the options."
    },
    {
      q: "Two diagrams illustrate the possible synaptic action of cocaine and of a neonicotinoid insecticide. One diagram shows a molecule blocking the transporter that would normally remove neurotransmitter from the cleft; the other shows a molecule binding directly and permanently to the postsynaptic receptor. Which description matches cocaine's mode of action?",
      options: ["The diagram showing a blocked reuptake transporter, since cocaine prevents removal of the neurotransmitter from the synaptic cleft", "The diagram showing permanent receptor binding, since that is how cocaine works", "Neither diagram represents cocaine, which works by inhibiting a presynaptic pump instead", "Both diagrams equally represent cocaine's mechanism"],
      correct: 0,
      explanation: "Cocaine's mechanism is reuptake inhibition: it blocks the transporter protein that would normally clear neurotransmitter from the synaptic cleft back into the presynaptic neuron, prolonging neurotransmitter action — a different mechanism from neonicotinoids, which act by binding directly and persistently to the postsynaptic receptor itself."
    },
    {
      q: "In the reflex arc, sensory information travels from a receptor to the central nervous system, is processed, and a response is generated by an effector, often without conscious awareness. If the reflex being tested is a withdrawal reflex from a painful stimulus, which structure most likely acts as the effector?",
      options: ["A skeletal muscle that contracts to withdraw the limb", "The grey matter of the spinal cord", "A sensory neuron carrying the initial signal", "The pineal gland"],
      correct: 0,
      explanation: "The effector in a reflex arc is the structure that carries out the response, in this case a skeletal muscle that contracts to pull the limb away from the painful stimulus; the grey matter of the spinal cord is where the signal is processed (via a relay neuron), not the structure producing the physical response."
    },
    {
      q: "During synaptic transmission, several distinct steps occur in sequence: neurotransmitter release, diffusion across the synaptic cleft, receptor binding, and eventual breakdown of the neurotransmitter. Which sequence correctly reflects how these events unfold for an acetylcholine synapse?",
      options: ["Calcium ions entering the presynaptic neuron trigger exocytosis of acetylcholine, which diffuses across the cleft, binds postsynaptic receptors, and is later broken down by cholinesterase and reabsorbed", "Acetylcholine is broken down before it is released into the synaptic cleft", "Acetylcholine binds postsynaptic receptors before it is released from the presynaptic neuron", "Calcium ions are released from the postsynaptic neuron to trigger acetylcholine synthesis"],
      correct: 0,
      explanation: "The correct order is: an arriving impulse opens voltage-gated calcium channels, calcium influx triggers vesicles to release acetylcholine into the cleft by exocytosis, acetylcholine diffuses across and binds receptors on the postsynaptic membrane to propagate the signal, and finally the enzyme cholinesterase breaks down acetylcholine so the signal doesn't persist indefinitely, with the breakdown products reabsorbed by the presynaptic neuron."
    },
    {
      q: "An oscilloscope trace of membrane potential during a nerve impulse shows a point where the membrane is returning from its depolarised peak back toward resting potential. What ion movement is primarily responsible for the membrane potential at this point?",
      options: ["Potassium ions moving out of the axon through open potassium channels", "Potassium ions moving into the axon through open potassium channels", "Sodium ions beginning to enter the axon for the first time at this point", "No ion movement occurring at all at this particular point in the trace"],
      correct: 0,
      explanation: "Repolarization, the return of the membrane potential from its depolarised peak back toward (and briefly below) resting potential, is driven by voltage-gated potassium channels opening and allowing potassium ions to diffuse out of the axon down their electrochemical gradient, restoring the more negative resting membrane potential."
    },
    {
      q: "A drug that acts on potassium ion channels is given to a patient with an irregular heartbeat, and an oscilloscope trace shows the resulting action potential is unusually prolonged compared with normal. What is the most likely effect of this drug on membrane potentials?",
      options: ["It lengthens the action potential by slowing the rate at which potassium ions leave the cell during repolarization", "It shortens the action potential by speeding up sodium ion entry", "It has no measurable effect on repolarization", "It permanently keeps the membrane in a depolarised state with no return to resting potential"],
      correct: 0,
      explanation: "If a drug is known to act on potassium channels and the observed effect is a prolonged action potential, the most consistent explanation is that the drug is slowing the outward flow of potassium ions during repolarization; since potassium efflux is what normally restores the resting membrane potential, delaying this process extends the overall duration of the action potential."
    },
    {
      q: "The speed at which two different axons conduct a nerve impulse is compared: one is thin and unmyelinated, the other is thick and myelinated. Which axon would be expected to conduct impulses fastest, and why?",
      options: ["The thick, myelinated axon, since greater diameter reduces internal resistance and myelin enables faster saltatory conduction", "The thin, unmyelinated axon, since thinner axons always conduct faster regardless of myelination", "Both axons would conduct at exactly the same speed regardless of diameter or myelination", "Neither axon can conduct an impulse without a chemical synapse present along its length"],
      correct: 0,
      explanation: "Both increased axon diameter (which reduces internal resistance to the flow of ions) and the presence of a myelin sheath (which allows the impulse to 'jump' quickly between nodes of Ranvier via saltatory conduction) independently increase conduction speed, so a thick, myelinated axon combines both features and would be expected to conduct impulses considerably faster than a thin, unmyelinated one."
    },
    {
      q: "A region of a neural pathway is examined under a microscope, showing a small gap between the endings of two adjacent neurons, with vesicles clustered on one side near the gap. In which of these labelled regions is chemical transmission of a nerve impulse most likely to be occurring?",
      options: ["The synapse, the small gap between two neurons where vesicles cluster and neurotransmitter is released", "Along the length of a myelinated section of the axon, away from any gap", "Inside the cell body of the neuron, away from any junction with another cell", "Within a node of Ranvier, where no neurotransmitter vesicles are present"],
      correct: 0,
      explanation: "Chemical transmission specifically requires a synapse, the small gap between two neurons where the presynaptic ending stores neurotransmitter-filled vesicles ready for release; conduction along the axon itself (including at nodes of Ranvier) is electrical, not chemical, and only becomes chemical once the impulse reaches a synapse."
    },
    {
      q: "A graph of membrane potential during a nerve impulse shows the potential rapidly rising, peaking, and then falling back toward the resting value. At which point on this graph do potassium channels open, driving repolarization?",
      options: ["Just after the peak of the action potential, as the membrane potential begins falling back toward resting levels", "At the very start of the trace, before any change in membrane potential occurs", "During the rising (depolarising) phase, before the peak is reached", "Potassium channels remain closed throughout an entire action potential"],
      correct: 0,
      explanation: "Once the membrane reaches its depolarised peak, voltage-gated potassium channels open, allowing potassium ions to diffuse out of the axon down their electrochemical gradient; this outward flow of positive charge is what drives repolarization, returning the membrane potential back down toward (and briefly below) its resting value."
    },
    {
      q: "At rest, before any nerve impulse has been triggered, there is a measurable difference in electrical charge across an axon's plasma membrane. Which statement correctly describes this resting state?",
      options: ["The external surface of the membrane is positively charged relative to the internal surface", "There is no electrical potential difference between the internal and external surfaces at rest", "The external surface of the membrane is negatively charged relative to the internal surface", "The internal surface of the membrane carries a much higher positive charge than the external surface"],
      correct: 0,
      explanation: "At resting potential, the inside of the axon is negatively charged relative to the outside, maintained by the combined action of the sodium-potassium pump and selective membrane permeability to different ions; this means the external surface of the membrane is relatively positive compared with the internal surface, the reverse of the situation seen briefly during depolarization."
    },
    {
      q: "Which structural feature of a myelinated axon specifically enables saltatory conduction, the rapid jumping of a nerve impulse from node to node?",
      options: ["The presence of nodes of Ranvier, exposed gaps between adjacent Schwann cells where voltage-gated ion channels are concentrated", "Sodium channels located directly underneath the myelin sheath itself", "Potassium channels located directly underneath the myelin sheath itself", "Sodium-potassium pumps concentrated specifically underneath each Schwann cell"],
      correct: 0,
      explanation: "Saltatory conduction depends on nodes of Ranvier, the small unmyelinated gaps between adjacent Schwann cells where voltage-gated sodium and potassium channels are concentrated; because the myelinated sections in between are electrically insulated, the impulse effectively 'jumps' rapidly from one node to the next rather than propagating continuously along the entire membrane."
    },
    {
      q: "An electron micrograph shows a myelinated neuron in transverse (cross) section, with a distinct, tightly wound structure surrounding the central axon. What process is facilitated by this surrounding structure?",
      options: ["Saltatory conduction, since the myelin sheath electrically insulates the axon between nodes of Ranvier", "Repolarization, since myelin directly opens potassium channels", "Generation of the initial action potential, since myelin triggers depolarization", "Synaptic transmission, since myelin releases neurotransmitter directly"],
      correct: 0,
      explanation: "The myelin sheath, formed by Schwann cells wrapped tightly around the axon, electrically insulates the membrane between the exposed nodes of Ranvier; this insulation is what enables saltatory conduction, allowing the nerve impulse to jump rapidly from node to node rather than needing to depolarise every section of membrane in sequence."
    },
    {
      q: "A graph shows changing membrane potential during a single nerve impulse, with sodium channels opening early in the trace and potassium channels opening slightly later. Considering these two ion channel types, at which point on the graph would potassium channels first be expected to open?",
      options: ["Around the peak of the action potential, just as depolarization is ending", "At the very beginning of the trace, before sodium channels have opened", "Only after the membrane has returned all the way to resting potential", "Potassium channels open simultaneously with sodium channels from the very start"],
      correct: 0,
      explanation: "Voltage-gated sodium channels open first, in response to initial depolarization, driving the rapid rise toward the peak of the action potential; voltage-gated potassium channels open with a slight delay relative to sodium channels, roughly around the peak of depolarization, and it is their subsequent opening that drives repolarization back toward resting potential."
    }
  ],

  "C2.1": [
    {
      q: "The bacterium Vibrio fischeri only produces bioluminescence once its population inside a squid's light organ reaches a high density. What is the mechanism behind this?",
      options: ["At high density, bacteria secrete ligands that bind receptors in the squid's light organ", "Above a critical bacterial density, signalling molecules activate the bacteria's own bioluminescence genes", "A high concentration of bacterial signalling molecules directly switches on bioluminescence genes in the squid's DNA", "The squid's light organ sends a signal telling the bacteria to glow when the squid is at risk"],
      correct: 1,
      explanation: "This is quorum sensing: bacteria constantly release a signalling molecule, and once its concentration crosses a threshold (indicating high bacterial density), it switches on the bacteria's own bioluminescence genes."
    },
    {
      q: "A plant shoot bends toward a light source. Which combination of statements explains how this response happens?\nI. Auxin efflux carriers are positioned unevenly on one side of the cell\nII. Auxin promotes secretion of hydrogen ions\nIII. Cell walls become acidified and cellulose cross-links loosen",
      options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
      correct: 3,
      explanation: "All three steps work together: auxin gets redistributed unevenly (I), which triggers acid secretion (II), which loosens the cell wall on that side (III), letting those cells elongate faster and bend the shoot toward the light."
    },
    {
      q: "What environmental cue most directly triggers hormone secretion from the pineal gland?",
      options: ["Glucose intake", "The sound of music", "The onset of darkness", "A drop in body temperature"],
      correct: 2,
      explanation: "The pineal gland releases melatonin in response to darkness, which is why it plays such a central role in regulating the sleep-wake cycle."
    },
    {
      q: "A ripe banana placed next to unripe ones causes them to ripen faster too, and each ripening fruit produces even more of the same signalling chemical. What best describes this chemical, and the type of feedback involved?",
      options: ["Ethylene, a gas that triggers positive feedback, accelerating ripening in nearby fruit", "Auxin, which triggers negative feedback to slow ripening", "Cytokinin, which has no effect on ripening", "Abscisic acid, which prevents any further ripening"],
      correct: 0,
      explanation: "Ethylene is a gaseous plant hormone that triggers ripening, and its production is self-amplifying: as fruit begins to ripen, it produces more ethylene, which diffuses to nearby fruit and speeds up their ripening too, an example of positive feedback rather than the more common negative feedback seen in homeostasis."
    },
    {
      q: "After a meal, blood glucose concentration rises, triggering the release of a hormone from the pancreas that lowers it back towards a set point. Which hormone is released, and what effect does it have on liver cells?",
      options: ["Insulin, which stimulates liver and muscle cells to take up glucose and convert it to glycogen", "Glucagon, which stimulates the breakdown of glycogen into glucose", "Adrenaline, which raises blood glucose further", "Thyroxin, which has no direct effect on blood glucose"],
      correct: 0,
      explanation: "Insulin is released when blood glucose rises above the normal range; it promotes glucose uptake by liver and muscle cells and stimulates the conversion of excess glucose into glycogen for storage, lowering blood glucose back towards its homeostatic set point."
    },
    {
      q: "The onset of puberty involves a cascade of hormonal signals, starting in the hypothalamus. Which sequence correctly describes how this cascade unfolds?",
      options: ["The hypothalamus releases more GnRH, which increases pituitary release of LH, which then increases production of sex hormones by the gonads", "The pituitary releases GnRH directly to the gonads with no hypothalamic involvement", "Sex hormones are released first, triggering GnRH release afterwards", "LH is released directly by the hypothalamus, bypassing the pituitary"],
      correct: 0,
      explanation: "Puberty begins when the hypothalamus increases its output of gonadotropin-releasing hormone (GnRH), which stimulates the pituitary gland to secrete more luteinizing hormone (LH); LH then acts on the gonads to increase production of sex hormones like oestrogen and testosterone, driving the physical changes of puberty."
    },
    {
      q: "Epinephrine (adrenaline) causes a rapid rise in blood glucose during exercise by acting on liver cells through a second-messenger system. Which sequence of events correctly describes how this signal is transmitted inside the cell?",
      options: ["Epinephrine activates a G protein, which triggers production of cyclic AMP as a second messenger, ultimately activating enzymes that break down glycogen", "Epinephrine directly enters the cell and binds DNA to switch on glycogen breakdown", "Epinephrine deactivates the second messenger, reducing glycogen breakdown", "Epinephrine has no receptor and diffuses passively through the membrane"],
      correct: 0,
      explanation: "Epinephrine binds a membrane receptor and activates an associated G protein, which in turn activates the enzyme that produces cyclic AMP (cAMP); this second messenger amplifies the signal inside the cell, ultimately switching on enzymes that break down stored glycogen into glucose, quickly raising blood glucose during a stress response."
    },
    {
      q: "People who fly across several time zones often struggle to fall asleep at the local bedtime, even though they feel exhausted. Which hormonal explanation best accounts for this?",
      options: ["Their pineal gland hasn't yet adjusted its melatonin release to match local darkness, so melatonin isn't rising when it should", "Their hypothalamus is releasing too much melanin, a skin pigment unrelated to sleep", "Their pituitary gland is releasing too much oxytocin", "Lack of sunlight is preventing vitamin D synthesis, which directly disrupts sleep"],
      correct: 0,
      explanation: "Melatonin, secreted by the pineal gland in response to darkness, helps regulate the sleep-wake cycle; after crossing time zones, the body's internal clock and its melatonin release are still synced to the old time zone, so melatonin isn't rising at the new local bedtime, making it hard to fall asleep on schedule."
    },
    {
      q: "Auxin accumulates on the shaded side of a growing shoot tip, causing that side to elongate faster and bend the shoot towards a light source. What transports auxin specifically to one side of the shoot in this way?",
      options: ["Auxin efflux carrier proteins positioned asymmetrically in the plasma membrane, directing auxin transport to one side of the shoot", "Random diffusion of auxin with no directional control", "Direct light-triggered synthesis of auxin only on the shaded side", "Xylem vessels actively pumping auxin toward the shaded side"],
      correct: 0,
      explanation: "Auxin efflux carrier proteins become unevenly distributed in the plasma membrane in response to a light gradient, actively transporting auxin towards the shaded side of the shoot; the resulting higher auxin concentration there stimulates greater cell elongation, bending the shoot towards the light (phototropism)."
    },
    {
      q: "A person's blood glucose level rises steadily through the evening, from around 20:00 until bedtime, without any food intake during this window. Which hormonal change would best explain this trend?",
      options: ["A rise in glucagon and fall in insulin, converting stored glycogen back into glucose", "A rise in insulin, converting glucose into glycogen", "A fall in glucagon with no change in insulin", "No hormonal involvement, since glucose levels don't change overnight"],
      correct: 0,
      explanation: "In the absence of food, insulin levels fall and glucagon levels rise, stimulating the liver to break down stored glycogen into glucose and release it into the blood to maintain blood glucose within its normal range between meals — the opposite hormonal pattern to what happens right after eating."
    },
    {
      q: "An insecticide called a neonicotinoid binds tightly and permanently to receptors normally used by the neurotransmitter acetylcholine at an insect's synapses. What is the direct consequence of this binding for the postsynaptic neuron?",
      options: ["The receptor is continuously activated, causing prolonged, uncontrolled stimulation of the postsynaptic neuron", "Acetylcholine release from the presynaptic neuron is completely blocked", "The postsynaptic membrane becomes permanently hyperpolarized and unresponsive", "Acetylcholinesterase activity increases dramatically, rapidly clearing the synapse"],
      correct: 0,
      explanation: "Neonicotinoids act as agonists that bind acetylcholine receptors on the postsynaptic membrane, but unlike natural acetylcholine they aren't broken down by acetylcholinesterase, so they keep the receptor continuously activated, leading to prolonged overstimulation of the nervous system, which is fatal to insects in sufficient doses."
    },
    {
      q: "Metformin, a drug used to treat type II diabetes, reduces how strongly liver cells respond to the hormone glucagon. In a study comparing treated and untreated diabetic animals, blood glucose fell significantly after two weeks of metformin treatment. What can be deduced about metformin's effect from this information?",
      options: ["It decreases the breakdown of glycogen into glucose in liver cells, since it blunts the liver's response to glucagon", "It stimulates insulin secretion from the pancreas directly", "It increases glucagon secretion to compensate for lower blood glucose", "It enhances the rate of aerobic respiration specifically in liver cells"],
      correct: 0,
      explanation: "Since glucagon's main role in the liver is to stimulate the breakdown of stored glycogen into glucose, a drug that reduces the liver's responsiveness to glucagon would be expected to decrease this glycogen breakdown, explaining why blood glucose falls in diabetic patients treated with metformin without directly acting on insulin secretion."
    },
    {
      q: "Auxin is a plant hormone whose effects depend heavily on where in the plant it is acting and at what concentration. Which statement correctly describes one of its roles?",
      options: ["It regulates plant growth by controlling cell division and elongation in the shoot apical meristem", "It has no role in how plants respond to changes in their environment", "It causes plant cell walls to become permanently rigid, preventing further elongation", "It ensures plant growth remains completely unaffected by external stimuli like light or gravity"],
      correct: 0,
      explanation: "Auxin plays a central role in coordinating plant growth, including controlling cell division and elongation at the shoot apical meristem, and it is also central to tropic responses such as phototropism (growth toward light) and gravitropism, meaning it very much does allow plants to respond to their environment rather than growing independently of it."
    },
    {
      q: "A graph shows blood glucose and liver glycogen concentrations after animals receive glucose meals of different sizes, with the two variables closely correlated. Which statement best explains this correlation?",
      options: ["Liver cells respond to insulin by speeding up the conversion of blood glucose into glycogen, so higher blood glucose is followed by higher liver glycogen", "Liver cells store excess blood glucose as glycogen specifically in response to glucagon", "Insulin decreases respiration rates in liver cells to promote glucose storage", "Glucagon increases the release of glucose from liver cells to restore blood concentrations"],
      correct: 0,
      explanation: "Rising blood glucose after a meal stimulates insulin release, which promotes liver cells to take up glucose and convert it into glycogen for storage; this is the hormone (insulin, not glucagon) responsible for the correlation between higher glucose intake and higher resulting liver glycogen levels, since glucagon has the opposite effect of promoting glycogen breakdown."
    },
    {
      q: "A group of students expose a growing plant shoot to a treatment that blocks the normal downward movement of auxin from the shoot tip, then compare its growth to an untreated control over one week. What would be the most likely explanation for reduced cell elongation observed along the treated shoot?",
      options: ["Cell elongation was reduced because auxin, which stimulates elongation, could not diffuse down the shoot to reach the elongating cells", "Mitosis stopped entirely in the apical meristem due to a lack of light", "Cell differentiation slowed because auxin is required for producing new cells in the meristem", "Cell division along the shoot was inhibited due to a lack of light exposure"],
      correct: 0,
      explanation: "Auxin produced in the shoot apex normally moves downward and promotes cell elongation in the region just behind the tip; blocking this downward auxin transport prevents the hormone from reaching the elongating cells, directly explaining a reduction in cell elongation, distinct from mitosis or differentiation, which are separate processes not primarily controlled by this movement of auxin."
    },
    {
      q: "Auxin influences plant growth and development in several ways, but it does not act directly on the physical structure of the cell wall itself. Through what general mechanism does auxin actually exert its effects on plant cells?",
      options: ["It binds to a receptor, which leads to changes in gene expression within the cell", "It acts directly on the cell wall, physically causing it to expand", "It causes the vacuole to actively absorb water, physically expanding the cell", "It directly stimulates a single round of cell division in every cell it contacts"],
      correct: 0,
      explanation: "Like many plant hormones, auxin exerts its effects indirectly: it binds to specific receptor proteins within the target cell, triggering a signalling cascade that changes gene expression, which in turn alters processes such as cell wall loosening and elongation, rather than acting as a direct physical or mechanical trigger on the cell wall itself."
    },
    {
      q: "Auxin contributes to phototropism, the directional growth response of a shoot toward a light source. Which mechanism correctly explains how it achieves this?",
      options: ["It increases the rate of cell elongation specifically on the shaded side of the stem, causing the shoot to bend toward the light", "It increases the production of light-sensitive pigment proteins throughout the shoot", "It inhibits the growth of axillary buds located far from the shoot tip", "It uniformly inhibits stem elongation on all sides of the shoot equally"],
      correct: 0,
      explanation: "Light exposure causes auxin to become unevenly distributed within the shoot, accumulating more on the shaded side; because auxin promotes cell elongation, the shaded side's cells elongate more than those on the illuminated side, causing the shoot to bend toward the light source, the mechanism underlying positive phototropism."
    },
    {
      q: "When epinephrine is released into the bloodstream in response to a stimulus, it produces several rapid physiological changes centred on the heart. Which of the following correctly describes one of these effects? I. Blood pressure in the heart falls. II. Oxygenated blood is transported at a faster rate through the pulmonary artery. III. The sinoatrial node increases the rate of electrical signals it generates.",
      options: ["III only", "I only", "I and II only", "II and III only"],
      correct: 0,
      explanation: "Epinephrine increases heart rate by directly stimulating the sinoatrial node to fire more frequently (statement III); it does not lower blood pressure in the heart (statement I is false, since epinephrine tends to raise cardiac output and pressure), and the pulmonary artery actually carries deoxygenated blood toward the lungs, not oxygenated blood as claimed in statement II, which is also false."
    },
    {
      q: "Which type of stimulus would be most likely to trigger the release of epinephrine (adrenaline) into an individual's bloodstream?",
      options: ["A coach shouting instructions to begin an intense physical activity immediately", "The gradual onset of darkness at sunset", "Viewing an image of a close, trusted friend", "The routine intake of glucose during an ordinary meal"],
      correct: 0,
      explanation: "Epinephrine release is characteristically triggered by acute stress or the need for a rapid physical response, such as a sudden demand for intense activity; the other options describe stimuli more closely associated with different hormonal responses (melatonin for darkness, oxytocin-related bonding responses for a close friend, or insulin for routine glucose intake) rather than an epinephrine-driven fight-or-flight response."
    }
  ],

  "C3.2": [
    {
      q: "Which function is primarily associated with helper T-cells during an immune response?",
      options: ["Directly engulfing pathogens by phagocytosis", "Activating other cells of the immune system", "Producing antibodies", "Persisting long-term as memory cells"],
      correct: 1,
      explanation: "Helper T-cells act as coordinators, activating B-cells and other immune cells, rather than directly attacking pathogens or producing antibodies themselves."
    },
    {
      q: "During an infection, which process specifically leads to antibody production?",
      options: ["Fibrinogen being converted to fibrin by thrombin", "B-cells being activated by helper T-cells and antigen", "Plasma cells being activated by platelets", "Phagocytes being activated by infected body cells"],
      correct: 1,
      explanation: "B-cells need both antigen recognition and a signal from an activated helper T-cell before they proliferate into antibody-producing plasma cells."
    },
    {
      q: "Diseases such as Japanese encephalitis are classified as zoonoses. What does that classification actually mean?",
      options: ["They can be transferred directly from an animal to humans", "They only spread from human to human", "They're only found in animals kept in captivity", "They transfer antigens directly into animal cells"],
      correct: 0,
      explanation: "A zoonosis is specifically a disease that can jump from an animal host directly to humans, which is the defining feature of this disease category."
    },
    {
      q: "Phagocytes are able to respond to a wide range of pathogens immediately, without needing to have encountered that specific pathogen before. Which part of the immune system does this place them in?",
      options: ["The innate immune system", "The adaptive immune system, alongside B-lymphocytes", "The adaptive immune system, alongside helper T-cells", "Neither the innate nor adaptive immune system"],
      correct: 0,
      explanation: "Phagocytes recognise and engulf a broad range of pathogens using generic, non-specific mechanisms and respond immediately without prior exposure, which is the defining feature of the innate immune system, unlike B- and T-lymphocytes, which mount a slower but highly specific adaptive response."
    },
    {
      q: "A diagram of an immune response shows a pathogen being engulfed, antigens being displayed, and specific lymphocytes being activated in sequence. Which labels would correctly describe this general sequence of events?",
      options: ["A phagocyte engulfing the pathogen, presenting antigen fragments, then activating a helper T-cell", "A helper T-cell engulfing the pathogen directly with no antigen presentation", "An antibody engulfing the pathogen before any cell is involved", "A B-lymphocyte engulfing the pathogen and then presenting it to a phagocyte"],
      correct: 0,
      explanation: "A typical immune response sequence involves a phagocyte engulfing and breaking down a pathogen, displaying fragments of its antigens on its own surface (antigen presentation), and then activating a helper T-cell that recognises that specific antigen, coordinating the wider adaptive immune response."
    },
    {
      q: "Rabies, tuberculosis, and Japanese encephalitis are three very different diseases caused by different pathogens, yet they share one important epidemiological feature. What do all three have in common?",
      options: ["They are all zoonoses, meaning they can be transmitted from animals to humans", "They are all caused by the same type of pathogen", "They all only infect the respiratory system", "None of them can be prevented by vaccination"],
      correct: 0,
      explanation: "Despite differing in the type of pathogen involved (a virus, a bacterium, and another virus respectively) and in symptoms, all three diseases are zoonoses, originating in animal populations and capable of being transmitted to humans, which is why controlling animal reservoirs is often part of managing them."
    },
    {
      q: "A patient treated successfully with an antibiotic for a bacterial infection develops the same infection again months later, but this time the same antibiotic has no effect. What is the most likely biological explanation?",
      options: ["The bacterial population has evolved resistance through mutation and natural selection", "The patient's body has become permanently immune to the antibiotic itself", "The bacteria have started producing antibodies against the drug", "Leftover antibiotic from the earlier treatment is interfering with the new dose"],
      correct: 0,
      explanation: "Random mutations occasionally give individual bacteria resistance to an antibiotic; if that antibiotic is used again, resistant bacteria survive and reproduce while susceptible ones are killed, so natural selection can shift the population toward resistance, explaining why the same drug may later fail against a similar-looking infection."
    },
    {
      q: "Which of the following best explains why antibiotics, which are highly effective against many bacterial infections, are completely ineffective against viral infections such as the common cold?",
      options: ["Antibiotics target bacterial structures and metabolic pathways that viruses simply don't have, since viruses rely on host-cell machinery instead", "Viruses are naturally resistant because they carry antibiotic-resistance genes", "Antibiotics can only be used against organisms with a cell membrane", "Viruses have thicker cell walls than bacteria, blocking antibiotic entry"],
      correct: 0,
      explanation: "Antibiotics work by disrupting processes specific to bacterial cells, such as cell wall synthesis or bacterial-type ribosomes; because viruses have no independent metabolism and hijack the host cell's own machinery to replicate, there is no bacterial-style target for antibiotics to act on."
    },
    {
      q: "Vaccination against a disease sometimes needs a booster dose years later to maintain strong protection. What immunological process is the booster dose designed to reinforce?",
      options: ["The activity of memory B- and T-cells, which allow a faster and stronger secondary immune response upon renewed exposure to the antigen", "The innate immune response, which does not usually need boosting", "The production of the pathogen's own antigens inside the body", "The action of phagocytes only, without any lymphocyte involvement"],
      correct: 0,
      explanation: "The adaptive immune system retains memory B- and T-cells after first exposure to an antigen, which allow a much faster and larger secondary response if the same pathogen is encountered again; a booster dose re-exposes the immune system to the antigen, refreshing and strengthening this memory-cell population."
    },
    {
      q: "A patient infected with HIV shows a gradual decline in a specific type of white blood cell over several years, alongside an increasing viral load, and eventually develops several unrelated infections that a healthy immune system would normally control easily. What best explains this pattern of increasing susceptibility to infection?",
      options: ["The decline in helper T-cells reduces the immune system's ability to coordinate an effective response, allowing opportunistic infections to take hold", "The patient's red blood cell count has fallen too low to fight infection", "The patient has developed immunity to all infections and requires no further immune response", "Phagocyte numbers increase steadily throughout the infection, preventing any new disease"],
      correct: 0,
      explanation: "HIV specifically targets and depletes helper T-cells, which coordinate much of the adaptive immune response by activating both B-lymphocytes and cytotoxic T-cells; as helper T-cell numbers fall over the course of an HIV infection, the immune system becomes progressively less able to mount an effective response, leaving the patient vulnerable to infections that would not normally cause serious illness."
    },
    {
      q: "The first time a person is exposed to a particular pathogen, several days pass before an effective antibody response develops, even though the innate immune system responds immediately. What best explains this initial delay in the adaptive response?",
      options: ["Antigens on the pathogen's surface must first activate specific B-lymphocytes, which then need time to proliferate into a clone of antibody-secreting plasma cells", "Antibodies against the new pathogen are already present in the blood from birth and act immediately", "The adaptive immune response only occurs if memory cells are already present from a previous infection", "The innate and adaptive immune systems always respond at the same speed to any new pathogen"],
      correct: 0,
      explanation: "On a first exposure to a novel antigen, there are initially very few B-lymphocytes specific to that antigen; time is needed for the correct B-lymphocytes to be identified, activated (often with the help of helper T-cells), and to proliferate into a large clone of antibody-secreting plasma cells, which explains the delay before antibody levels rise substantially — a delay that is much shorter on a second exposure thanks to memory cells."
    },
    {
      q: "Vaccines are designed to trigger an immune response and generate lasting immunological memory without causing the disease itself. What do essentially all vaccines contain or introduce that makes this possible?",
      options: ["Antigens, or genetic material coding for antigens, from the target pathogen", "Fully virulent, unmodified live pathogens in every case", "Pre-made antibodies against the pathogen", "Only phagocytic cells extracted from a previously infected donor"],
      correct: 0,
      explanation: "Whatever specific form a vaccine takes (inactivated pathogen, weakened live pathogen, isolated protein fragments, or genetic material such as mRNA coding for a viral protein), its core purpose is to expose the immune system to antigens characteristic of the pathogen, prompting the body's own B- and T-lymphocytes to mount a response and establish memory cells, without needing to introduce pre-made antibodies or a fully virulent pathogen."
    },
    {
      q: "Antibiotics are widely used to treat infections caused by bacteria but are ineffective against viral infections. What property of antibiotics explains why they work specifically against bacteria?",
      options: ["They block metabolic pathways or structures specific to prokaryotic cells, which viruses do not possess", "They stimulate the host's own production of antibodies against the pathogen", "They directly block the metabolic processes of viruses", "They inhibit mitosis specifically in eukaryotic host cells"],
      correct: 0,
      explanation: "Antibiotics work by targeting structures or metabolic pathways specific to prokaryotic (bacterial) cells, such as bacterial cell wall synthesis or bacterial-type ribosomes; because viruses lack independent metabolism and instead hijack the host cell's own machinery, there is no equivalent bacterial-style target for antibiotics to act on, which is why they have no effect on viral infections."
    },
    {
      q: "Phagocytic white blood cells respond rapidly to a very wide range of pathogens without needing prior exposure to any specific one. Which statement correctly describes a feature of these cells?",
      options: ["They form part of the body's non-specific (innate) immune defence", "They are found exclusively within the circulatory system, never in surrounding tissues", "They directly stimulate blood clotting at a wound site", "They are responsible for producing antibodies against specific pathogens"],
      correct: 0,
      explanation: "Phagocytes recognise and engulf a broad range of pathogens using generic, non-specific recognition mechanisms, placing them firmly within the innate (non-specific) immune system; they can migrate out of the bloodstream into surrounding tissues where infections occur, and antibody production is instead carried out by B-lymphocytes, part of the separate, more specific adaptive immune response."
    },
    {
      q: "HIV progressively weakens a person's immune system over time by specifically targeting and destroying one type of white blood cell. Which cell type does HIV primarily attack?",
      options: ["Lymphocytes, specifically helper T-cells, which coordinate much of the adaptive immune response", "Erythrocytes (red blood cells), which transport oxygen", "Platelets, which are involved in blood clotting", "Phagocytes exclusively, with no effect on lymphocytes"],
      correct: 0,
      explanation: "HIV specifically infects and destroys helper T-lymphocytes, a type of white blood cell that plays a central coordinating role in the adaptive immune response by activating both B-lymphocytes and cytotoxic T-cells; as helper T-cell numbers decline over the course of infection, the immune system becomes progressively less able to mount an effective response against opportunistic infections."
    },
    {
      q: "A graph tracks the concentration of a specific antibody in a person's blood following two separate infections with the same pathogen, occurring at different times. The second infection produces a faster, larger antibody response than the first. What best explains this difference?",
      options: ["Memory B-cells generated during the first infection allow a faster, stronger antibody response during the second exposure", "The person was infected with two completely different, unrelated pathogens at each time point", "No clonal selection of B-lymphocytes was involved in either immune response", "T-lymphocytes play no role in either the first or the second immune response"],
      correct: 0,
      explanation: "Following a first exposure to a pathogen, some of the activated B-lymphocytes persist afterward as memory B-cells; upon a second exposure to the same antigen, these memory cells allow a much faster and larger secondary antibody response than was possible during the initial, first-time (primary) response, which is the basis of long-lasting immunity following infection or vaccination."
    },
    {
      q: "A vaccine is designed to expose the immune system to antigens from a pathogen, prompting a protective immune response without causing the disease itself. What is the primary immunological benefit gained from vaccination?",
      options: ["The generation of memory B- and T-cells that allow a faster, stronger response if the real pathogen is encountered later", "Permanent, pre-formed antibodies that circulate in the blood indefinitely without any need for later activation", "Complete and permanent destruction of the pathogen's genetic material before it can ever be encountered", "Immediate and total immunity that requires no time at all to develop"],
      correct: 0,
      explanation: "Vaccination works by exposing the immune system to antigens (or genetic material coding for antigens) from a pathogen, prompting the body's B- and T-lymphocytes to respond and, crucially, to generate memory cells; these memory cells persist long after the initial exposure, allowing a much faster and stronger response if the real pathogen is encountered in the future."
    }
  ],

  "A2.3": [
    {
      q: "Which feature is shared by every virus, regardless of type?",
      options: ["A protein capsid", "RNA as its genetic material", "Cytoplasm", "An envelope made from host cell membrane"],
      correct: 0,
      explanation: "All viruses have a protein coat (capsid) around their genetic material; not all have an envelope, and genetic material can be DNA or RNA depending on the virus."
    },
    {
      q: "How would you best describe the mode of existence of a virus?",
      options: ["An obligate parasite", "A facultative parasite", "An obligate heterotroph", "A predator"],
      correct: 0,
      explanation: "Viruses cannot replicate independently, they must use a host cell's machinery every time, making them obligate (not optional) parasites."
    },
    {
      q: "A patient with a viral infection is prescribed an antibiotic, but their symptoms do not improve. What is the most likely biological reason antibiotics fail against viruses?",
      options: ["Viruses carry genes that specifically inactivate antibiotics", "Antibiotics target bacterial metabolic processes and structures that viruses do not have", "Antibiotics only work on organisms without a capsid", "Viruses are naturally immune to all chemicals"],
      correct: 1,
      explanation: "Antibiotics work by disrupting bacterial structures and metabolic pathways (such as cell wall synthesis or bacterial ribosomes) that viruses simply don't possess, since viruses rely entirely on the host cell's own machinery to replicate rather than having independent metabolism of their own."
    },
    {
      q: "Which statement about viruses reflects a feature that they genuinely share with living cells, despite viruses not being considered alive themselves?",
      options: ["Viruses possess their own genetic material, just as living cells do", "Viruses reproduce independently by a process resembling binary fission", "Viruses carry out anaerobic respiration to generate their own energy", "Viruses contain 70S ribosomes identical to those found in bacteria"],
      correct: 0,
      explanation: "Despite lacking independent metabolism, an ability to reproduce without a host, and (in most cases) ribosomes of their own, viruses do possess genetic material (DNA or RNA) enclosed within a protein capsid, a feature they share with all living cells, even though the rest of their 'lifestyle' is fundamentally non-living and entirely dependent on hijacking a host cell's machinery."
    }
  ],

};
