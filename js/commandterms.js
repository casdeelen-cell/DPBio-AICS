/*
  commandterms.js
  ---------------
  The full IB command term glossary, grouped into the three official
  tiers (knowledge, application/analysis, synthesis/evaluation), plus
  a set of "commonly confused pairs" callouts.

  Definitions are the official IB wording. The "plain" field is a
  looser, exam-practical translation, not official IB text.

  Format:
  COMMAND_TERMS = [
    {
      tier: 1,
      tierName: "Knowledge and comprehension",
      terms: [
        { term: "Define", official: "...", plain: "..." },
        ...
      ]
    },
    ...
  ]

  MISTAKES = [
    { title: "Describe vs explain", body: "..." },
    ...
  ]
*/

const COMMAND_TERMS = [
  {
    tier: 1,
    tierName: "Knowledge and comprehension",
    tierNote: "These want a fact, a name, or a direct answer. No reasoning required.",
    terms: [
      { term: "Define", official: "Give the precise meaning of a word, phrase, concept or physical quantity.", plain: "Write the textbook definition. Word-for-word accuracy pays." },
      { term: "Draw", official: "Represent by means of a labelled, accurate diagram or graph, using a pencil. Diagrams should be drawn to scale; graph points plotted correctly and joined by a straight line or smooth curve.", plain: "Make an accurate, labelled drawing. Use a ruler. Scale matters." },
      { term: "Label", official: "Add labels to a diagram.", plain: "Name the parts. Nothing more." },
      { term: "List", official: "Give a sequence of brief answers with no explanation.", plain: "Bullet-style answers. One line each." },
      { term: "Measure", official: "Obtain a value for a quantity.", plain: "Read the value off the instrument, graph, or diagram." },
      { term: "State", official: "Give a specific name, value or other brief answer without explanation or calculation.", plain: "One short, direct answer. One sentence is enough." },
      { term: "Classify", official: "Arrange or order by class or category.", plain: "Sort the items into the right groups." },
      { term: "Identify", official: "Provide an answer from a number of possibilities.", plain: "Pick the right option and name it." }
    ]
  },
  {
    tier: 2,
    tierName: "Application and analysis",
    tierNote: "These want you to use what you know: apply it, work with data, or give a fuller account.",
    terms: [
      { term: "Annotate", official: "Add brief notes to a diagram or graph.", plain: "Label the diagram and add a short note to each label." },
      { term: "Apply", official: "Use an idea, equation, principle, theory or law in relation to a given problem or issue.", plain: "Take the theory and use it on this specific case." },
      { term: "Calculate", official: "Obtain a numerical answer showing the relevant stages in the working.", plain: "Get the number — and show every step. Working earns marks." },
      { term: "Describe", official: "Give a detailed account.", plain: "Say what it is, what it looks like, or what happens. No reasons needed." },
      { term: "Distinguish", official: "Make clear the differences between two or more concepts or items.", plain: "Show the differences. \u201cX does this, while Y does that.\u201d" },
      { term: "Estimate", official: "Obtain an approximate value.", plain: "A sensible rough answer. Method still matters." },
      { term: "Interpret", official: "Use knowledge and understanding to recognize trends and draw conclusions from given information.", plain: "Read the data. Say what it shows and what it means." },
      { term: "Outline", official: "Give a brief account or summary.", plain: "The short version. Key points only, in a sentence or two each." },
      { term: "Present", official: "Offer for display, observation, examination or consideration.", plain: "Set the information out clearly, often in a table or chart." },
      { term: "Construct", official: "Display information in a diagrammatic or logical form.", plain: "Build the table, graph, or diagram from the information given." },
      { term: "Plot", official: "Mark the position of points on a diagram.", plain: "Put the data points in exactly the right places." }
    ]
  },
  {
    tier: 3,
    tierName: "Synthesis and evaluation",
    tierNote: "The big ones. They carry the most marks, and they demand developed, structured answers.",
    terms: [
      { term: "Analyse", official: "Break down in order to bring out the essential elements or structure.", plain: "Take it apart. Show the parts and how they connect." },
      { term: "Comment", official: "Give a judgment based on a given statement or result of a calculation.", plain: "Say what you make of the result, with a reason." },
      { term: "Compare", official: "Give an account of the similarities between two (or more) items or situations, referring to both (all) of them throughout.", plain: "Similarities only. Mention both items in every point." },
      { term: "Compare and contrast", official: "Give an account of similarities and differences between two (or more) items or situations, referring to both (all) of them throughout.", plain: "Similarities and differences. Keep switching between both items." },
      { term: "Contrast", official: "Give an account of the differences between two (or more) items or situations, referring to both (all) of them throughout.", plain: "Differences only. Mention both items in every point." },
      { term: "Deduce", official: "Reach a conclusion from the information given.", plain: "Use the clues in the question to work out the answer." },
      { term: "Demonstrate", official: "Make clear by reasoning or evidence, illustrating with examples or practical application.", plain: "Prove your point with reasoning and examples." },
      { term: "Derive", official: "Manipulate a mathematical relationship to give a new equation or relationship.", plain: "Start from a known equation and rearrange your way to a new one." },
      { term: "Design", official: "Produce a plan, simulation or model.", plain: "Plan the experiment or model: method, variables, controls." },
      { term: "Determine", official: "Obtain the only possible answer.", plain: "There\u2019s exactly one right answer. Find it and show how." },
      { term: "Discuss", official: "Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.", plain: "Argue both sides, use evidence, and finish with a clear conclusion." },
      { term: "Evaluate", official: "Make an appraisal by weighing up the strengths and limitations.", plain: "Judge it. Strengths, limitations, then your verdict." },
      { term: "Examine", official: "Consider an argument or concept in a way that uncovers the assumptions and interrelationships of the issue.", plain: "Dig into the idea. Question what it assumes." },
      { term: "Explain", official: "Give a detailed account including reasons or causes.", plain: "Describe it and say why it happens. Use \u201cbecause\u201d." },
      { term: "Formulate", official: "Express precisely and systematically the relevant concept(s) or argument(s).", plain: "Write the idea out precisely, often a hypothesis or research question." },
      { term: "Investigate", official: "Observe, study, or make a detailed and systematic examination, in order to establish facts and reach new conclusions.", plain: "Study it systematically and report what you find." },
      { term: "Justify", official: "Give valid reasons or evidence to support an answer or conclusion.", plain: "Defend your choice. Evidence, not opinion." },
      { term: "Predict", official: "Give an expected result.", plain: "Say what will happen. In level 3 questions, say why too." },
      { term: "Sketch", official: "Represent by means of a diagram or graph (labelled as appropriate). The sketch should give a general idea of the required shape or relationship, and should include relevant features.", plain: "A quick graph that shows the right shape and key features. No exact scale needed." },
      { term: "Suggest", official: "Propose a solution, hypothesis or other possible answer.", plain: "There may be no single right answer. Propose something sensible and back it up." },
      { term: "To what extent", official: "Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.", plain: "How true is this claim? Argue for and against, then take a clear position." }
    ]
  }
];

const MISTAKES = [
  {
    title: "Describe vs explain",
    body: "Describe means give a detailed account. Explain means give a detailed account including reasons or causes. That last part is the whole difference.\n\n\u201cDescribe the trend in the graph\u201d \u2192 \u201cCO\u2082 concentration rises steadily from 1960 to 2020.\u201d Done.\n\n\u201cExplain the trend in the graph\u201d \u2192 \u201cCO\u2082 concentration rises because fossil fuel use increased\u2026\u201d You must give the why. If your explain answer has no \u201cbecause\u201d, it's a describe answer, and it will be marked like one."
  },
  {
    title: "Compare vs contrast vs distinguish",
    body: "Compare = similarities only. Contrast = differences only. Compare and contrast = both. Distinguish = make the differences clear, usually more briefly than contrast.\n\nThe trap: writing one paragraph about item X, then a separate paragraph about item Y. The official definitions say \u201creferring to both (all) of them throughout\u201d. Examiners want linked points: \u201cMitosis produces two identical cells, whereas meiosis produces four genetically different cells.\u201d Every sentence should touch both items."
  },
  {
    title: "Discuss vs evaluate vs to what extent",
    body: "All three are essay-style terms. They differ in what the conclusion must do.\n\nDiscuss: present a range of arguments or factors on more than one side, then state a clear, supported position.\n\nEvaluate: weigh strengths against limitations, then deliver a verdict on overall worth.\n\nTo what extent: test how far a claim holds true, then commit to a degree, fully, partly, barely, and say why.\n\nThe single most common error: answering \u201cto what extent\u201d with a one-sided essay. The term is an invitation to argue both ways. Strong answers agree and disagree with the claim, then land on a defensible position like \u201clargely true, but only under these conditions.\u201d"
  },
  {
    title: "State vs outline vs list",
    body: "State = one brief answer. List = several brief answers. Outline = a brief account, short sentences, key points, no depth.\n\nThese are low-mark questions. The skill here is speed. If \u201cState the value of x\u201d is worth 1 mark, write the value and move on. Every minute saved is a minute for the 15-mark evaluate question later."
  },
  {
    title: "Draw vs sketch vs label vs annotate",
    body: "Draw = accurate and to scale, with labels. Sketch = the general shape with key features, accuracy of scale doesn't matter. Label = add names to parts. Annotate = add names plus brief notes.\n\nIn the sciences, an \u201cannotate\u201d answer that only labels loses half the marks. Each label needs a short working note: not just \u201cmitochondrion\u201d but \u201cmitochondrion \u2014 site of aerobic respiration.\u201d"
  }
];
