// CBT Quiz Questions
const cbtQuestions = [
    {
        question: "Who first described cells in 1665?",
        options: [
            "Anton van Leeuwenhoek",
            "Robert Hooke",
            "Matthias Schleiden",
            "Theodor Schwann"
        ],
        correctAnswer: 1,
        explanation: "Robert Hooke was the British scientist who first described cells in 1665 after examining a thin slice of tree cork with a microscope."
    },
    {
        question: "Which of the following is NOT part of the cell theory?",
        options: [
            "All plants and animals are composed of cells",
            "All cells come from preexisting cells",
            "Cells are the smallest living units that perform physiological functions",
            "Cells can spontaneously generate under the right conditions"
        ],
        correctAnswer: 3,
        explanation: "The cell theory states that all cells come from preexisting cells, which contradicts the idea of spontaneous generation."
    },
    {
        question: "What is the purpose of cell division?",
        options: [
            "To create energy for the cell",
            "To allow organisms to grow and repair damaged tissue",
            "To eliminate waste products",
            "To communicate with other cells"
        ],
        correctAnswer: 1,
        explanation: "Cells must reproduce if an organism is to grow and repair damaged tissue."
    },
    {
        question: "During cell reproduction, a cell divides its _____ equally and then splits into two identical cells.",
        options: [
            "organelles",
            "cytoplasm",
            "genes",
            "proteins"
        ],
        correctAnswer: 2,
        explanation: "During cell reproduction, a cell divides its genes equally and then splits into two identical cells."
    },
    {
        question: "What are the two major events involved in cell division?",
        options: [
            "Transcription and translation",
            "Mitosis and cytokinesis",
            "Diffusion and osmosis",
            "Respiration and photosynthesis"
        ],
        correctAnswer: 1,
        explanation: "The division involves two major events: mitosis and cytokinesis."
    },
    {
        question: "What happens during mitosis?",
        options: [
            "The cell grows and carries out normal functions",
            "The cytoplasm divides",
            "The chromatin condenses into chromosomes and is equally divided",
            "DNA replication occurs"
        ],
        correctAnswer: 2,
        explanation: "During mitosis, the chromatin in the nucleus condenses into chromosomes and is equally divided between the two forming cells."
    },
    {
        question: "How many pairs of chromosomes do human cells have?",
        options: [
            "22",
            "23",
            "24",
            "46"
        ],
        correctAnswer: 1,
        explanation: "Human cells have 23 pairs of chromosomes that carry the genetic code of approximately 20,000 to 25,000 genes."
    },
    {
        question: "Which phase of the cell cycle is NOT a resting period?",
        options: [
            "G0 phase",
            "Interphase",
            "M phase",
            "All of the above"
        ],
        correctAnswer: 1,
        explanation: "Interphase is not a resting period for the cell; the cell carries out various functions and prepares for the next cell division."
    },
    {
        question: "During which phase does DNA replication occur?",
        options: [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        correctAnswer: 1,
        explanation: "S phase is a period for DNA replication. After DNA replication, each chromosome is double stranded and consists of two chromatids."
    },
    {
        question: "What holds the chromatids together?",
        options: [
            "Spindle fibers",
            "Nuclear envelope",
            "Centromere",
            "Centrioles"
        ],
        correctAnswer: 2,
        explanation: "The chromatids are held together by a centromere."
    },
    {
        question: "Which phase is another time for protein synthesis and when replication of the centriole pair is completed?",
        options: [
            "G1 phase",
            "S phase",
            "G2 phase",
            "M phase"
        ],
        correctAnswer: 2,
        explanation: "The G2 phase is another time for protein synthesis; at this time, replication of the centriole pair is completed."
    },
    {
        question: "What is the M Phase?",
        options: [
            "The phase when the cell is metabolically active",
            "The phase when DNA replication occurs",
            "The phase when actual cell division occurs",
            "The resting phase of the cell"
        ],
        correctAnswer: 2,
        explanation: "M Phase is where the actual cell division occurs. It is a period when the nuclear material divides."
    },
    {
        question: "After chromosomes are duplicated in the S phase, what happens to them during mitosis?",
        options: [
            "They unwind and become chromatin",
            "They migrate to the middle of the cell",
            "They are broken down and recycled",
            "They leave the nucleus"
        ],
        correctAnswer: 1,
        explanation: "After chromosomes are duplicated in the S phase of interphase, the double stranded chromosomes migrate to the middle of the cell."
    },
    {
        question: "How are chromosomes divided during mitosis?",
        options: [
            "They are randomly distributed",
            "They are broken into fragments",
            "Spindle fibers drag sister chromatids to opposite ends",
            "They dissolve and reform in each daughter cell"
        ],
        correctAnswer: 2,
        explanation: "Chromosomes are divided when the spindle fibers drag sister chromatids to opposite ends of the cell."
    },
    {
        question: "What marks the completion of cell division?",
        options: [
            "When chromosomes become visible",
            "When the nuclear envelope breaks down",
            "When the cell undergoes cytokinesis",
            "When DNA replication is complete"
        ],
        correctAnswer: 2,
        explanation: "The division is complete when cell undergoes cytokinesis and pinches inward to distribute the cytosol and chromosomes into two new daughter cells."
    },
    {
        question: "What are the four stages of mitosis?",
        options: [
            "G1, S, G2, M",
            "Interphase, prophase, metaphase, anaphase",
            "Prophase, metaphase, anaphase, telophase",
            "Cytokinesis, karyokinesis, synthesis, division"
        ],
        correctAnswer: 2,
        explanation: "The four stages of mitosis are prophase, metaphase, anaphase, and telophase."
    },
    {
        question: "During which stage of mitosis do chromosomes become visible in the nucleus?",
        options: [
            "Metaphase",
            "Anaphase",
            "Telophase",
            "Prophase"
        ],
        correctAnswer: 3,
        explanation: "Mitosis starts with prophase, when chromosomes become visible in the nucleus."
    },
    {
        question: "What happens during early prophase?",
        options: [
            "Chromosomes line up in the middle of the cell",
            "Chromosomes separate and move to opposite poles",
            "Chromosomes are long and disorganized",
            "The nuclear envelope reforms"
        ],
        correctAnswer: 2,
        explanation: "In early prophase, the chromosomes are long and disorganized, but as prophase continues the nuclear envelope breaks down."
    },
    {
        question: "Where do the centriole pairs move during prophase?",
        options: [
            "To the center of the cell",
            "To opposite sides of the cell",
            "To the nuclear envelope",
            "They remain stationary"
        ],
        correctAnswer: 1,
        explanation: "In the cytosol, the two centriole pairs begin moving to opposite sides of the cell."
    },
    {
        question: "What forms between the centrioles during prophase?",
        options: [
            "The nuclear envelope",
            "Chromosomes",
            "Spindle fibers",
            "The cleavage furrow"
        ],
        correctAnswer: 2,
        explanation: "In between the centrioles, microtubules fan out as spindle fibers and extend across the cell."
    },
    {
        question: "What defines metaphase?",
        options: [
            "Chromosomes become visible",
            "Chromosomes line up in the middle of the cell",
            "Chromosomes separate",
            "The nuclear envelope reforms"
        ],
        correctAnswer: 1,
        explanation: "Metaphase occurs when the chromosomes line up in the middle of the cell at the metaphase plate."
    },
    {
        question: "What attaches to the centromeres of the chromosomes during metaphase?",
        options: [
            "The nuclear envelope",
            "Other chromosomes",
            "Spindle fibers",
            "The cytoplasm"
        ],
        correctAnswer: 2,
        explanation: "Spindle fibers extend across the cell from one pole to the other and attach to the centromeres of the chromosomes."
    },
    {
        question: "What event defines anaphase?",
        options: [
            "Chromosomes become visible",
            "Chromosomes line up in the middle",
            "Separation of the chromosomes",
            "Formation of the nuclear envelope"
        ],
        correctAnswer: 2,
        explanation: "Separation of the chromosomes is the event that defines anaphase."
    },
    {
        question: "What happens to individual chromatids once they are apart during anaphase?",
        options: [
            "They are considered chromosomes",
            "They disintegrate",
            "They rejoin with other chromatids",
            "They leave the cell"
        ],
        correctAnswer: 0,
        explanation: "Once apart, individual chromatids are considered chromosomes."
    },
    {
        question: "What marks the end of anaphase?",
        options: [
            "The chromosomes become visible",
            "The nuclear envelope breaks down",
            "A cleavage furrow develops",
            "The centrioles replicate"
        ],
        correctAnswer: 2,
        explanation: "Cytokinesis marks the end of anaphase as a cleavage furrow develops along the metaphase plate and the plasma membrane pinches."
    },
    {
        question: "What happens during telophase?",
        options: [
            "Chromosomes condense and become visible",
            "Chromosomes line up at the metaphase plate",
            "Chromosomes separate and move to poles",
            "Cytokinesis partitions the cytoplasm"
        ],
        correctAnswer: 3,
        explanation: "In telophase, cytokinesis partitions the cytoplasm of the cell and mitosis nears completion as each batch of chromosomes unwinds inside a newly formed nuclear envelope."
    },
    {
        question: "What does each daughter cell have at the end of telophase?",
        options: [
            "Half the organelles and half the chromosomes",
            "A set of organelles and a complete set of genes",
            "Only cytoplasm without organelles",
            "Double the number of chromosomes"
        ],
        correctAnswer: 1,
        explanation: "Each daughter cell has a set of organelles and a nucleus containing a complete set of genes."
    },
    {
        question: "How does telophase end?",
        options: [
            "With the formation of spindle fibers",
            "With the breakdown of the nuclear envelope",
            "With the cleavage furrow deepening and separating the cell",
            "With DNA replication"
        ],
        correctAnswer: 2,
        explanation: "Telophase ends as the cleavage furrow deepens along the metaphase plate and separates the cell into two identical daughter cells."
    },
    {
        question: "What type of cells are produced in meiosis?",
        options: [
            "Identical daughter cells as in mitosis",
            "Sperm or egg cells",
            "Skin and hair cells",
            "Muscle cells"
        ],
        correctAnswer: 1,
        explanation: "In meiosis, sperm or egg cells are produced instead of identical daughter cells as in mitosis."
    },
    {
        question: "Which cells use mitosis to make exact replicas of themselves?",
        options: [
            "Only sperm and egg cells",
            "Almost all the body's cells",
            "Only plant cells",
            "Only animal cells"
        ],
        correctAnswer: 1,
        explanation: "Mitosis is observed in almost all the body's cells, including eyes, skin, hair, and muscle cells."
    },
    {
        question: "What was interphase previously thought to represent?",
        options: [
            "The most active phase of the cell cycle",
            "The phase when cell division occurs",
            "The resting stage between cell divisions",
            "The phase when DNA is replicated"
        ],
        correctAnswer: 2,
        explanation: "Interphase was thought to represent the resting stage between subsequent cell divisions, but new research has shown that it is a very active phase."
    },
    {
        question: "What are the two key steps in the M Phase?",
        options: [
            "Interphase and mitosis",
            "G1 and S phase",
            "Cytokinesis and karyokinesis",
            "Prophase and metaphase"
        ],
        correctAnswer: 2,
        explanation: "There are two key steps in the M Phase, namely cytokinesis and karyokinesis."
    },
    {
        question: "What happens during the G0 phase?",
        options: [
            "The cell grows and replicates organelles",
            "DNA replication occurs",
            "The cell neither divides nor prepares for division",
            "Protein synthesis happens"
        ],
        correctAnswer: 2,
        explanation: "The G0 Phase is the Resting Phase where the cell neither divides nor prepares itself for the division."
    },
    {
        question: "What occurs during the G1 phase?",
        options: [
            "DNA replication",
            "The cell is metabolically active and grows",
            "Protein synthesis",
            "Cell division"
        ],
        correctAnswer: 1,
        explanation: "G1 Phase is when the cell is metabolically active and grows continuously during this phase."
    },
    {
        question: "What happens during the S phase?",
        options: [
            "The cell grows",
            "Protein synthesis occurs",
            "DNA replication or synthesis occurs",
            "The cell divides"
        ],
        correctAnswer: 2,
        explanation: "S phase is when DNA replication or synthesis occurs."
    },
    {
        question: "What happens during the G2 phase?",
        options: [
            "DNA replication",
            "The cell grows",
            "Protein synthesis happens",
            "The cell rests"
        ],
        correctAnswer: 2,
        explanation: "G2 phase is when protein synthesis happens."
    },
    {
        question: "What is the quiescent stage?",
        options: [
            "The most active phase of the cell cycle",
            "The phase when DNA replication occurs",
            "The stage when cells do not undergo further division",
            "Another name for mitosis"
        ],
        correctAnswer: 2,
        explanation: "The quiescent stage (G0) is when cells that do not undergo further division exit the G1 phase and enter an inactive stage."
    },
    {
        question: "What did Robert Hooke observe when he examined cork under a microscope?",
        options: [
            "Moving organisms",
            "Small open spaces he called cells",
            "The nucleus of cells",
            "Chromosomes"
        ],
        correctAnswer: 1,
        explanation: "Hooke examined a thin slice of tree cork with a microscope and observed that it contained many small open spaces, which he called cells."
    },
    {
        question: "Over what period did scientists examine cells from plants and animals to formulate the cell theory?",
        options: [
            "A few years",
            "The next two centuries",
            "A decade",
            "A month"
        ],
        correctAnswer: 1,
        explanation: "During the next two centuries, scientists examined cells from plants and animals and formulated the cell theory."
    },
    {
        question: "According to cell theory, what is homeostasis?",
        options: [
            "The process of cell division",
            "The result of coordinated activities of all cells",
            "The resting state of cells",
            "The replication of DNA"
        ],
        correctAnswer: 1,
        explanation: "Homeostasis is the result of the coordinated activities of all the cells in an organism."
    },
    {
        question: "What do we call cells that result from cell division?",
        options: [
            "Parent cells",
            "Sister cells",
            "Daughter cells",
            "Clone cells"
        ],
        correctAnswer: 2,
        explanation: "Cell division happens when a parent cell divides into two or more cells called daughter cells."
    },
    {
        question: "How do all cells reproduce?",
        options: [
            "By splitting into two",
            "By budding",
            "By fragmentation",
            "By spores"
        ],
        correctAnswer: 0,
        explanation: "All cells reproduce by splitting into two, where each parental cell gives rise to two daughter cells."
    },
    {
        question: "What carries the genetic code in human cells?",
        options: [
            "Proteins",
            "Chromosomes",
            "Centrioles",
            "Spindle fibers"
        ],
        correctAnswer: 1,
        explanation: "Human cells have 23 pairs of chromosomes that carry the genetic code of approximately 20,000 to 25,000 genes."
    },
    {
        question: "What are the two primary phases in the cell cycle?",
        options: [
            "Mitosis and meiosis",
            "Prophase and metaphase",
            "Interphase and M phase",
            "G1 and G2 phase"
        ],
        correctAnswer: 2,
        explanation: "There are two primary phases in the cell cycle: Interphase and M Phase."
    },
    {
        question: "During which phase does the nucleus become visible?",
        options: [
            "G0 phase",
            "S phase",
            "Interphase",
            "M phase"
        ],
        correctAnswer: 2,
        explanation: "During interphase, the nucleus becomes visible."
    },
    {
        question: "What happens during the G0 phase?",
        options: [
            "The cell performs specialized functions",
            "DNA replication occurs",
            "The cell divides",
            "Protein synthesis happens"
        ],
        correctAnswer: 0,
        explanation: "During the G0 phase, the cell performs its specialized functions and is not preparing to divide."
    },
    {
        question: "What occurs during the G1 phase?",
        options: [
            "DNA replication",
            "Protein synthesis, growth and replication of organelles",
            "Cell division",
            "The cell rests"
        ],
        correctAnswer: 1,
        explanation: "G1 phase is a time for protein synthesis, growth and replication of organelles, including the centriole pair."
    },
    {
        question: "After DNA replication, what does each chromosome consist of?",
        options: [
            "One chromatid",
            "Two chromatids",
            "Four chromatids",
            "Multiple fragments"
        ],
        correctAnswer: 1,
        explanation: "After DNA replication, each chromosome is double stranded and consists of two chromatids."
    },
    {
        question: "What is the relationship between the two chromatids after DNA replication?",
        options: [
            "They are completely different",
            "One is the original strand and the other is an identical copy",
            "They come from different chromosomes",
            "They have different genetic information"
        ],
        correctAnswer: 1,
        explanation: "After DNA replication, one chromatid is the original strand and the other is an identical copy."
    }
];

// CBT Quiz Logic
document.addEventListener('DOMContentLoaded', function() {
    const quizContent = document.getElementById('quiz-content');
    const questionCounter = document.getElementById('question-counter');
    const scoreDisplay = document.getElementById('score-display');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results-container');
    const finalScore = document.getElementById('final-score');
    const scorePercentage = document.getElementById('score-percentage');
    const resultsBreakdown = document.getElementById('results-breakdown');
    const retakeBtn = document.getElementById('retake-btn');
    
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    let quizSubmitted = false;
    
    // Initialize quiz
    function initQuiz() {
        // Select 10 random questions
        currentQuestions = getRandomQuestions(cbtQuestions, 10);
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);
        score = 0;
        quizSubmitted = false;
        
        // Hide results, show quiz
        resultsContainer.style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        
        // Load first question
        loadQuestion();
        updateNavigation();
    }
    
    // Get random questions from the pool
    function getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Load current question
    function loadQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        
        let optionsHtml = '';
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestionIndex] === index;
            const isCorrect = quizSubmitted && index === question.correctAnswer;
            const isIncorrect = quizSubmitted && userAnswers[currentQuestionIndex] === index && index !== question.correctAnswer;
            
            let optionClass = 'option';
            if (isSelected) optionClass += ' selected';
            if (isCorrect) optionClass += ' correct';
            if (isIncorrect) optionClass += ' incorrect';
            
            optionsHtml += `
                <div class="${optionClass}" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </div>
            `;
        });
        
        let explanationHtml = '';
        if (quizSubmitted) {
            explanationHtml = `
                <div class="explanation show">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            `;
        }
        
        quizContent.innerHTML = `
            <div class="question-container">
                <div class="question-number">Question ${currentQuestionIndex + 1}</div>
                <div class="question-text">${question.question}</div>
                <div class="options-container">
                    ${optionsHtml}
                </div>
                ${explanationHtml}
            </div>
        `;
        
        // Add event listeners to options
        if (!quizSubmitted) {
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function() {
                    selectOption(parseInt(this.getAttribute('data-index')));
                });
            });
        }
        
        // Update counters
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
        scoreDisplay.textContent = `Score: ${score}/${currentQuestions.length}`;
    }
    
    // Select an option
    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        loadQuestion();
    }
    
    // Update navigation buttons
    function updateNavigation() {
        prevBtn.disabled = currentQuestionIndex === 0;
        
        if (currentQuestionIndex === currentQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }
    
    // Go to next question
    function nextQuestion() {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
            updateNavigation();
        }
    }
    
    // Go to previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
            updateNavigation();
        }
    }
    
    // Submit quiz and show results
    function submitQuiz() {
        quizSubmitted = true;
        
        // Calculate score
        score = 0;
        currentQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        
        // Show results
        document.querySelector('.quiz-container').style.display = 'none';
        resultsContainer.style.display = 'block';
        
        finalScore.textContent = score;
        const percentage = Math.round((score / currentQuestions.length) * 100);
        scorePercentage.textContent = `${percentage}%`;
        
        // Generate results breakdown
        let breakdownHtml = '';
        currentQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            const userAnswerText = userAnswer !== null ? 
                `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}` : 
                'Not answered';
            const correctAnswerText = `${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}`;
            
            breakdownHtml += `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="result-question">${index + 1}. ${question.question}</div>
                    <div class="result-answer"><strong>Your answer:</strong> ${userAnswerText}</div>
                    <div class="result-answer"><strong>Correct answer:</strong> ${correctAnswerText}</div>
                    <div class="result-explanation">${question.explanation}</div>
                </div>
            `;
        });
        
        resultsBreakdown.innerHTML = breakdownHtml;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    retakeBtn.addEventListener('click', initQuiz);
    
    // Initialize the quiz
    initQuiz();
});