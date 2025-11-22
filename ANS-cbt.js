// ANS CBT Quiz JavaScript

// Question bank for CBT format
const cbtQuestions = [
    {
        question: "What is the primary function of the Autonomic Nervous System (ANS)?",
        options: [
            "Control voluntary movements",
            "Regulate involuntary body functions",
            "Process sensory information",
            "Coordinate cognitive functions"
        ],
        correctAnswer: 1,
        explanation: "The ANS is the part of the peripheral nervous system that controls involuntary body functions such as heart rate, digestion, and respiratory rate."
    },
    {
        question: "Which division of the ANS is responsible for the 'fight or flight' response?",
        options: [
            "Parasympathetic division",
            "Sympathetic division",
            "Enteric division",
            "Somatic division"
        ],
        correctAnswer: 1,
        explanation: "The sympathetic division prepares the body for emergency situations by increasing heart rate, dilating pupils, and inhibiting digestion."
    },
    {
        question: "Where does the sympathetic division originate in the spinal cord?",
        options: [
            "Cervical region (C1-C8)",
            "Thoracolumbar region (T1-L2)",
            "Craniosacral region (CN III, VII, IX, X, S2-S4)",
            "Lumbosacral region (L1-S5)"
        ],
        correctAnswer: 1,
        explanation: "The sympathetic division originates from the thoracolumbar region of the spinal cord (T1 to L2)."
    },
    {
        question: "Which neurotransmitter is released by all preganglionic neurons in the ANS?",
        options: [
            "Norepinephrine",
            "Dopamine",
            "Acetylcholine",
            "Serotonin"
        ],
        correctAnswer: 2,
        explanation: "All preganglionic neurons in both the sympathetic and parasympathetic divisions release acetylcholine (ACh)."
    },
    {
        question: "What is the primary neurotransmitter for most sympathetic postganglionic neurons?",
        options: [
            "Acetylcholine",
            "Norepinephrine",
            "Dopamine",
            "Epinephrine"
        ],
        correctAnswer: 1,
        explanation: "Most sympathetic postganglionic neurons release norepinephrine, except for those innervating sweat glands which release acetylcholine."
    },
    {
        question: "Which cranial nerves are associated with the parasympathetic division?",
        options: [
            "CN I, II, VIII",
            "CN III, VII, IX, X",
            "CN V, VI, XI, XII",
            "CN II, IV, VI, XI"
        ],
        correctAnswer: 1,
        explanation: "The parasympathetic division originates from cranial nerves III (oculomotor), VII (facial), IX (glossopharyngeal), and X (vagus), as well as the sacral spinal cord (S2-S4)."
    },
    {
        question: "What type of receptors are activated by acetylcholine in autonomic ganglia?",
        options: [
            "Muscarinic receptors",
            "Nicotinic receptors",
            "Adrenergic receptors",
            "Dopaminergic receptors"
        ],
        correctAnswer: 1,
        explanation: "Nicotinic receptors are ligand-gated ion channels found in autonomic ganglia and at neuromuscular junctions, activated by acetylcholine."
    },
    {
        question: "Which of the following is a function of the parasympathetic division?",
        options: [
            "Increase heart rate",
            "Dilate pupils",
            "Promote digestion",
            "Inhibit salivation"
        ],
        correctAnswer: 2,
        explanation: "The parasympathetic division promotes 'rest and digest' functions, including stimulating digestion, slowing heart rate, and constricting pupils."
    },
    {
        question: "What enzyme breaks down acetylcholine in the synaptic cleft?",
        options: [
            "Monoamine oxidase (MAO)",
            "Catechol-O-methyl transferase (COMT)",
            "Acetylcholinesterase (AChE)",
            "Tyrosine hydroxylase"
        ],
        correctAnswer: 2,
        explanation: "Acetylcholinesterase rapidly breaks down acetylcholine into acetate and choline, terminating its action."
    },
    {
        question: "Which adrenergic receptor subtype is primarily found in the heart?",
        options: [
            "α₁ receptors",
            "α₂ receptors",
            "β₁ receptors",
            "β₂ receptors"
        ],
        correctAnswer: 2,
        explanation: "β₁ receptors are located primarily in the heart and are responsible for increasing heart rate and contractility."
    },
    {
        question: "What is the 'second brain' sometimes used to refer to in the ANS?",
        options: [
            "Sympathetic chain ganglia",
            "Enteric nervous system",
            "Parasympathetic cranial outflow",
            "Adrenal medulla"
        ],
        correctAnswer: 1,
        explanation: "The enteric nervous system (ENS) is a complex network of neurons in the GI tract wall that can function independently and is sometimes called the 'second brain'."
    },
    {
        question: "Which of the following is NOT a effect of sympathetic activation?",
        options: [
            "Bronchodilation",
            "Increased heart rate",
            "Pupil constriction",
            "Inhibition of digestion"
        ],
        correctAnswer: 2,
        explanation: "Sympathetic activation causes pupil dilation (mydriasis), not constriction. Pupil constriction is a parasympathetic function."
    },
    {
        question: "Where are muscarinic receptors primarily found?",
        options: [
            "Autonomic ganglia",
            "Neuromuscular junctions",
            "Target organs of parasympathetic division",
            "Sympathetic chain ganglia"
        ],
        correctAnswer: 2,
        explanation: "Muscarinic receptors are G-protein coupled receptors found on target organs of the parasympathetic division and some sympathetic targets like sweat glands."
    },
    {
        question: "What is the origin of the parasympathetic division?",
        options: [
            "Thoracolumbar",
            "Craniosacral",
            "Cervicothoracic",
            "Lumbopelvic"
        ],
        correctAnswer: 1,
        explanation: "The parasympathetic division originates from cranial nerves (III, VII, IX, X) and sacral spinal cord (S2-S4), hence the term 'craniosacral'."
    },
    {
        question: "Which of the following is synthesized from tyrosine?",
        options: [
            "Acetylcholine",
            "Norepinephrine",
            "Serotonin",
            "GABA"
        ],
        correctAnswer: 1,
        explanation: "Norepinephrine is synthesized from tyrosine through a series of enzymatic steps: tyrosine → DOPA → dopamine → norepinephrine."
    },
    {
        question: "What is the primary function of the Autonomic Nervous System (ANS)?",
        options: [
            "Control voluntary movements",
            "Regulate involuntary body functions",
            "Process sensory information",
            "Coordinate reflex actions"
        ],
        correctAnswer: 1,
        explanation: "The ANS is the part of the peripheral nervous system that controls involuntary body functions such as heart rate, digestion, and respiration."
    },
    {
        question: "Which division of the ANS is responsible for the 'fight or flight' response?",
        options: [
            "Parasympathetic division",
            "Sympathetic division",
            "Enteric division",
            "Somatic division"
        ],
        correctAnswer: 1,
        explanation: "The sympathetic division prepares the body for stressful situations by increasing heart rate, dilating pupils, and inhibiting digestion."
    },
    {
        question: "Where does the sympathetic division originate in the spinal cord?",
        options: [
            "Cervical region (C1-C8)",
            "Thoracolumbar region (T1-L2)",
            "Craniosacral region",
            "Lumbosacral region (L3-S5)"
        ],
        correctAnswer: 1,
        explanation: "The sympathetic division originates from the thoracolumbar region of the spinal cord (T1 to L2)."
    },
    {
        question: "Which neurotransmitter is released by all preganglionic autonomic neurons?",
        options: [
            "Norepinephrine",
            "Dopamine",
            "Acetylcholine",
            "Serotonin"
        ],
        correctAnswer: 2,
        explanation: "All preganglionic neurons in both the sympathetic and parasympathetic divisions release acetylcholine (ACh)."
    },
    {
        question: "What is the primary neurotransmitter for most sympathetic postganglionic neurons?",
        options: [
            "Acetylcholine",
            "Norepinephrine",
            "Dopamine",
            "Epinephrine"
        ],
        correctAnswer: 1,
        explanation: "Most sympathetic postganglionic neurons release norepinephrine, except for those innervating sweat glands which use acetylcholine."
    },
    {
        question: "Which cranial nerves are associated with the parasympathetic division?",
        options: [
            "CN I, II, VIII",
            "CN III, VII, IX, X",
            "CN V, VI, XI, XII",
            "CN IV, VI, X, XII"
        ],
        correctAnswer: 1,
        explanation: "The parasympathetic division originates from cranial nerves III (oculomotor), VII (facial), IX (glossopharyngeal), and X (vagus), as well as sacral segments S2-S4."
    },
    {
        question: "What enzyme breaks down acetylcholine in the synaptic cleft?",
        options: [
            "Monoamine oxidase (MAO)",
            "Catechol-O-methyl transferase (COMT)",
            "Acetylcholinesterase (AChE)",
            "Choline acetyltransferase"
        ],
        correctAnswer: 2,
        explanation: "Acetylcholinesterase (AChE) rapidly breaks down acetylcholine into acetate and choline, terminating its action."
    },
    {
        question: "Which type of receptor is activated by acetylcholine at autonomic ganglia?",
        options: [
            "Muscarinic receptors",
            "Nicotinic receptors (Nₙ)",
            "Alpha receptors",
            "Beta receptors"
        ],
        correctAnswer: 1,
        explanation: "Nicotinic receptors of the neuronal type (Nₙ) are found in autonomic ganglia and are activated by acetylcholine."
    },
    {
        question: "What is the effect of parasympathetic stimulation on the heart?",
        options: [
            "Increases heart rate",
            "Decreases heart rate",
            "Has no effect on heart rate",
            "Increases contractility only"
        ],
        correctAnswer: 1,
        explanation: "Parasympathetic stimulation via the vagus nerve decreases heart rate (negative chronotropic effect)."
    },
    {
        question: "Which receptor subtype is primarily responsible for increasing heart rate and contractility?",
        options: [
            "α₁ receptors",
            "α₂ receptors",
            "β₁ receptors",
            "β₂ receptors"
        ],
        correctAnswer: 2,
        explanation: "β₁ receptors in the heart are responsible for increasing both heart rate (chronotropy) and contractility (inotropy) when activated by catecholamines."
    },
    {
        question: "What is the 'second brain' sometimes used to refer to in the ANS?",
        options: [
            "Sympathetic chain ganglia",
            "Enteric nervous system",
            "Parasympathetic cranial outflow",
            "Adrenal medulla"
        ],
        correctAnswer: 1,
        explanation: "The enteric nervous system (ENS) is sometimes called the 'second brain' because it can function independently of the CNS to control gastrointestinal functions."
    },
    {
        question: "Which of the following is NOT a function of the sympathetic division?",
        options: [
            "Dilating pupils",
            "Increasing heart rate",
            "Stimulating digestion",
            "Inhibiting salivation"
        ],
        correctAnswer: 2,
        explanation: "The sympathetic division inhibits digestion, while the parasympathetic division stimulates it. Sympathetic activation prepares the body for emergency situations, not for digestion."
    },
    {
        question: "Where are muscarinic receptors primarily found?",
        options: [
            "Autonomic ganglia",
            "Neuromuscular junctions",
            "Target organs of parasympathetic division",
            "Sympathetic chain ganglia"
        ],
        correctAnswer: 2,
        explanation: "Muscarinic receptors are found on the target organs of the parasympathetic division and are activated by acetylcholine released from postganglionic parasympathetic neurons."
    },
    {
        question: "What is the effect of sympathetic stimulation on bronchial smooth muscle?",
        options: [
            "Bronchoconstriction",
            "Bronchodilation",
            "No effect",
            "Increased mucus production"
        ],
        correctAnswer: 1,
        explanation: "Sympathetic stimulation causes bronchodilation via β₂ receptors, allowing for increased air flow to the lungs during 'fight or flight' responses."
    },
    {
        question: "Which of the following is a collateral ganglion of the sympathetic division?",
        options: [
            "Ciliary ganglion",
            "Superior cervical ganglion",
            "Celiac ganglion",
            "Otic ganglion"
        ],
        correctAnswer: 2,
        explanation: "The celiac ganglion is a collateral (prevertebral) ganglion of the sympathetic division that innervates abdominal organs."
    },
    {
        question: "What is the primary mechanism for terminating norepinephrine action?",
        options: [
            "Enzymatic degradation only",
            "Reuptake only",
            "Both reuptake and enzymatic degradation",
            "Diffusion away from the synapse"
        ],
        correctAnswer: 2,
        explanation: "Norepinephrine action is terminated primarily by reuptake into the presynaptic neuron, with some enzymatic degradation by MAO and COMT."
    },
    {
        question: "Which receptor subtype when activated leads to vasoconstriction?",
        options: [
            "β₁ receptors",
            "β₂ receptors",
            "α₁ receptors",
            "M₂ receptors"
        ],
        correctAnswer: 2,
        explanation: "α₁ receptors cause vasoconstriction when activated by norepinephrine, increasing blood pressure."
    },
    {
        question: "What is the origin of the parasympathetic division in the spinal cord?",
        options: [
            "Thoracic region (T1-T12)",
            "Cervical region (C1-C8)",
            "Craniosacral region",
            "Lumbar region (L1-L5)"
        ],
        correctAnswer: 2,
        explanation: "The parasympathetic division originates from the craniosacral region - cranial nerves III, VII, IX, X and sacral segments S2-S4."
    },
    {
        question: "Which of the following is an exception to the general rule that sympathetic postganglionic neurons release norepinephrine?",
        options: [
            "Heart",
            "Sweat glands",
            "Blood vessels",
            "Bronchial smooth muscle"
        ],
        correctAnswer: 1,
        explanation: "Sweat glands are innervated by sympathetic cholinergic fibers that release acetylcholine instead of norepinephrine."
    },
    {
        question: "What is the effect of parasympathetic stimulation on the pupils?",
        options: [
            "Dilation",
            "Constriction",
            "No effect",
            "Alternating dilation and constriction"
        ],
        correctAnswer: 1,
        explanation: "Parasympathetic stimulation causes pupillary constriction (miosis) via contraction of the circular muscle of the iris."
    },
    {
        question: "Which division of the ANS is dominant during restful conditions?",
        options: [
            "Sympathetic division",
            "Parasympathetic division",
            "Enteric division",
            "Somatic division"
        ],
        correctAnswer: 1,
        explanation: "The parasympathetic division is dominant during restful conditions, promoting 'rest and digest' functions like digestion and energy conservation."
    },
    {
        question: "What type of receptor are nicotinic receptors?",
        options: [
            "G-protein coupled receptors",
            "Ligand-gated ion channels",
            "Tyrosine kinase receptors",
            "Nuclear receptors"
        ],
        correctAnswer: 1,
        explanation: "Nicotinic receptors are ligand-gated ion channels that allow sodium influx when activated by acetylcholine, leading to depolarization."
    },
    {
        question: "Which of the following is a function of the enteric nervous system?",
        options: [
            "Regulating heart rate",
            "Controlling gastrointestinal motility",
            "Dilating bronchioles",
            "Constricting pupils"
        ],
        correctAnswer: 1,
        explanation: "The enteric nervous system controls gastrointestinal functions including motility, secretion, and blood flow within the GI tract."
    },
    {
        question: "What is the primary neurotransmitter released by the adrenal medulla?",
        options: [
            "Norepinephrine only",
            "Acetylcholine only",
            "Epinephrine and norepinephrine",
            "Dopamine only"
        ],
        correctAnswer: 2,
        explanation: "The adrenal medulla releases both epinephrine (80%) and norepinephrine (20%) directly into the bloodstream as hormones."
    },
    {
        question: "Which muscarinic receptor subtypes are coupled to Gq proteins?",
        options: [
            "M₁, M₃, M₅",
            "M₂, M₄",
            "M₁, M₂, M₃",
            "M₄, M₅ only"
        ],
        correctAnswer: 0,
        explanation: "M₁, M₃, and M₅ muscarinic receptors are coupled to Gq proteins, which activate the IP₃/DAG pathway leading to increased intracellular calcium."
    },
    {
        question: "What is the effect of sympathetic stimulation on blood glucose levels?",
        options: [
            "Decreases blood glucose",
            "Increases blood glucose",
            "No effect on blood glucose",
            "Stabilizes blood glucose"
        ],
        correctAnswer: 1,
        explanation: "Sympathetic stimulation increases blood glucose levels by promoting glycogenolysis and gluconeogenesis in the liver."
    },
    {
        question: "Which cranial nerve provides the majority of parasympathetic innervation to thoracic and abdominal organs?",
        options: [
            "Oculomotor nerve (CN III)",
            "Facial nerve (CN VII)",
            "Glossopharyngeal nerve (CN IX)",
            "Vagus nerve (CN X)"
        ],
        correctAnswer: 3,
        explanation: "The vagus nerve (CN X) provides about 75% of all parasympathetic outflow, innervating the heart, lungs, and most abdominal organs."
    },
    {
        question: "What is the effect of β₂ receptor activation on blood vessels?",
        options: [
            "Vasoconstriction",
            "Vasodilation",
            "No effect",
            "Vasospasm"
        ],
        correctAnswer: 1,
        explanation: "β₂ receptor activation causes vasodilation in certain vascular beds, such as skeletal muscle, during 'fight or flight' responses."
    },
    {
        question: "Which of the following is NOT a characteristic of the autonomic nervous system?",
        options: [
            "Involuntary control",
            "Two-neuron chain (preganglionic and postganglionic)",
            "Innervates skeletal muscle",
            "Maintains homeostasis"
        ],
        correctAnswer: 2,
        explanation: "The autonomic nervous system innervates smooth muscle, cardiac muscle, and glands, but not skeletal muscle (which is controlled by the somatic nervous system)."
    },
    {
        question: "What is the primary function of α₂ receptors?",
        options: [
            "Cause vasoconstriction",
            "Increase heart rate",
            "Inhibit norepinephrine release",
            "Cause bronchodilation"
        ],
        correctAnswer: 2,
        explanation: "α₂ receptors are primarily presynaptic autoreceptors that inhibit further norepinephrine release, providing negative feedback control."
    },
    {
        question: "Which division of the ANS has longer preganglionic fibers?",
        options: [
            "Sympathetic division",
            "Parasympathetic division",
            "They are equal in length",
            "Depends on the target organ"
        ],
        correctAnswer: 1,
        explanation: "Parasympathetic preganglionic fibers are generally longer than sympathetic preganglionic fibers because parasympathetic ganglia are located near or within the target organs."
    },
    {
        question: "What is the effect of parasympathetic stimulation on salivary glands?",
        options: [
            "Inhibits saliva production",
            "Stimulates thick, viscous saliva",
            "Stimulates watery saliva",
            "Has no effect on saliva production"
        ],
        correctAnswer: 2,
        explanation: "Parasympathetic stimulation promotes the production of watery saliva, while sympathetic stimulation produces thicker, more viscous saliva."
    },
    {
        question: "Which of the following is a function of the sympathetic division during exercise?",
        options: [
            "Decreasing heart rate",
            "Constricting bronchioles",
            "Redirecting blood flow to skeletal muscles",
            "Stimulating digestion"
        ],
        correctAnswer: 2,
        explanation: "During exercise, the sympathetic division redirects blood flow away from the skin and digestive organs toward skeletal muscles to support increased activity."
    },
    {
        question: "What is the enzyme responsible for synthesizing acetylcholine?",
        options: [
            "Acetylcholinesterase",
            "Choline acetyltransferase",
            "Monoamine oxidase",
            "Catechol-O-methyl transferase"
        ],
        correctAnswer: 1,
        explanation: "Choline acetyltransferase is the enzyme that synthesizes acetylcholine from choline and acetyl-CoA in cholinergic neurons."
    },
    {
        question: "Which receptor subtype is primarily involved in lipolysis?",
        options: [
            "α₁ receptors",
            "α₂ receptors",
            "β₁ receptors",
            "β₃ receptors"
        ],
        correctAnswer: 3,
        explanation: "β₃ receptors are primarily found in adipose tissue and are involved in lipolysis (breakdown of fats) when activated."
    },
    {
        question: "What is the effect of parasympathetic stimulation on urinary bladder function?",
        options: [
            "Relaxes detrusor muscle",
            "Contracts internal urethral sphincter",
            "Contracts detrusor muscle",
            "Has no effect on bladder function"
        ],
        correctAnswer: 2,
        explanation: "Parasympathetic stimulation contracts the detrusor muscle of the urinary bladder, promoting urination (micturition)."
    },
    {
        question: "Which of the following is a characteristic of the somatic nervous system but NOT the autonomic nervous system?",
        options: [
            "Uses acetylcholine as a neurotransmitter",
            "Has a single neuron between CNS and effector",
            "Can be excitatory or inhibitory",
            "Innervates muscle tissue"
        ],
        correctAnswer: 1,
        explanation: "The somatic nervous system has a single neuron between the CNS and skeletal muscle, while the ANS has a two-neuron chain (preganglionic and postganglionic)."
    },
    {
        question: "What is the effect of sympathetic stimulation on the liver?",
        options: [
            "Inhibits glycogenolysis",
            "Promotes glycogenesis",
            "Promotes glycogenolysis and gluconeogenesis",
            "Has no effect on liver metabolism"
        ],
        correctAnswer: 2,
        explanation: "Sympathetic stimulation promotes glycogenolysis (breakdown of glycogen) and gluconeogenesis (production of glucose from non-carbohydrates) in the liver."
    },
    {
        question: "Which muscarinic receptor subtype is primarily found in the heart?",
        options: [
            "M₁",
            "M₂",
            "M₃",
            "M₄"
        ],
        correctAnswer: 1,
        explanation: "M₂ muscarinic receptors are primarily found in the heart and are responsible for the parasympathetic slowing of heart rate."
    },
    {
        question: "What is the primary function of the autonomic nervous system?",
        options: [
            "Control voluntary movements",
            "Process conscious sensations",
            "Maintain homeostasis",
            "Coordinate complex cognitive functions"
        ],
        correctAnswer: 2,
        explanation: "The primary function of the ANS is to maintain homeostasis by regulating involuntary bodily functions such as heart rate, blood pressure, digestion, and respiration."
    },
    {
        question: "Which division of the ANS has ganglia located closer to the spinal cord?",
        options: [
            "Sympathetic division",
            "Parasympathetic division",
            "Enteric division",
            "Both are equally distant"
        ],
        correctAnswer: 0,
        explanation: "Sympathetic ganglia are located closer to the spinal cord in the sympathetic chain or collateral ganglia, while parasympathetic ganglia are located near or within the target organs."
    },
    {
        question: "What is the effect of parasympathetic stimulation on gastrointestinal motility?",
        options: [
            "Inhibits motility",
            "Stimulates motility",
            "Has no effect on motility",
            "Causes spasmodic contractions"
        ],
        correctAnswer: 1,
        explanation: "Parasympathetic stimulation promotes gastrointestinal motility, secretion, and digestion as part of the 'rest and digest' response."
    },
    // Additional questions would continue here to reach 50 total
    // For brevity, I'm showing 15 questions as an example
];

// Quiz state variables
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizQuestions = [];

// DOM elements
const quizContent = document.getElementById('quiz-content');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// Initialize the quiz
function initQuiz() {
    // Select 10 random questions
    quizQuestions = getRandomQuestions(cbtQuestions, 10);
    userAnswers = new Array(quizQuestions.length).fill(null);
    
    // Update UI
    totalQuestionsElement.textContent = quizQuestions.length;
    scoreElement.textContent = score;
    
    // Display first question
    displayQuestion(currentQuestionIndex);
    
    // Set up event listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
}

// Get random questions from the question bank
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display a question
function displayQuestion(index) {
    const question = quizQuestions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
        const isSelected = userAnswers[index] === i;
        const optionClass = isSelected ? 'option selected' : 'option';
        optionsHTML += `
            <div class="${optionClass}" data-index="${i}">
                ${String.fromCharCode(65 + i)}. ${option}
            </div>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="question-card">
            <div class="question-text">${index + 1}. ${question.question}</div>
            <div class="options-container">
                ${optionsHTML}
            </div>
            ${userAnswers[index] !== null ? `
                <div class="explanation">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => selectOption(option, index));
    });
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update question counter
    currentQuestionElement.textContent = index + 1;
}

// Select an option
function selectOption(optionElement, questionIndex) {
    const optionIndex = parseInt(optionElement.getAttribute('data-index'));
    
    // Deselect all options for this question
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select the clicked option
    optionElement.classList.add('selected');
    
    // Store the answer
    userAnswers[questionIndex] = optionIndex;
    
    // Check if answer is correct
    const isCorrect = optionIndex === quizQuestions[questionIndex].correctAnswer;
    
    // Update score if this is the first time answering this question
    if (userAnswers[questionIndex] !== null && userAnswers[questionIndex] !== undefined) {
        // For simplicity, we'll calculate score at the end
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

// Go to next question
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

// Submit the quiz
function submitQuiz() {
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correctAnswer) {
            score++;
        }
    });
    
    // Display results
    showResults();
}

// Show quiz results
function showResults() {
    let resultsHTML = `
        <div class="results-container">
            <h2>Quiz Complete!</h2>
            <div class="score-circle">
                <div class="score-percentage">${Math.round((score / quizQuestions.length) * 100)}%</div>
                <div class="score-text">Your Score</div>
            </div>
            <p>You answered ${score} out of ${quizQuestions.length} questions correctly.</p>
            
            <div class="question-review">
                <h3>Question Review</h3>
    `;
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const correctAnswerText = question.options[question.correctAnswer];
        const userAnswerText = userAnswer !== null ? question.options[userAnswer] : "Not answered";
        
        resultsHTML += `
            <div class="question-card ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="question-text">${index + 1}. ${question.question}</div>
                <p><strong>Your answer:</strong> ${userAnswerText}</p>
                <p><strong>Correct answer:</strong> ${correctAnswerText}</p>
                <div class="explanation">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
            <div class="results-actions">
                <button class="btn-primary" onclick="location.reload()">Take Quiz Again</button>
                <button class="btn-secondary" onclick="location.href='ANS.html'">Back to Main Menu</button>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    
    // Hide navigation buttons
    document.querySelector('.navigation-buttons').style.display = 'none';
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);