// Fill in the Gap Questions
const fillQuestions = [
    {
        question: "Cells were first described in 1665 by a British scientist named __________.",
        answer: "Robert Hooke",
        explanation: "Robert Hooke was the British scientist who first described cells in 1665 after examining a thin slice of tree cork with a microscope."
    },
    {
        question: "Hooke examined a thin slice of tree cork with a microscope and observed that it contained many small open spaces, which he called __________.",
        answer: "cells",
        explanation: "Hooke called the small open spaces he observed in cork 'cells' because they reminded him of the small rooms in a monastery."
    },
    {
        question: "The cell theory states that all plants and animals are composed of __________.",
        answer: "cells",
        explanation: "One of the fundamental principles of cell theory is that all plants and animals are composed of cells."
    },
    {
        question: "According to cell theory, all cells come from __________ cells.",
        answer: "preexisting",
        explanation: "The cell theory states that all cells come from preexisting cells, which contradicts the earlier idea of spontaneous generation."
    },
    {
        question: "Cells are the smallest living units that perform physiological __________.",
        answer: "functions",
        explanation: "Cells are considered the basic unit of life because they are the smallest structures capable of performing all physiological functions necessary for life."
    },
    {
        question: "__________ is the result of the coordinated activities of all the cells in an organism.",
        answer: "Homeostasis",
        explanation: "Homeostasis, the maintenance of a stable internal environment, is achieved through the coordinated activities of all cells in an organism."
    },
    {
        question: "Cells must reproduce if an organism is to grow and repair damaged __________.",
        answer: "tissue",
        explanation: "Cell division allows organisms to grow and repair damaged tissues by producing new cells."
    },
    {
        question: "During cell reproduction, a cell divides its __________ equally and then splits into two identical cells.",
        answer: "genes",
        explanation: "During cell division, the genetic material (genes) is equally divided between the two daughter cells."
    },
    {
        question: "The division involves two major events: __________ and cytokinesis.",
        answer: "mitosis",
        explanation: "Cell division consists of two main processes: mitosis (division of the nucleus) and cytokinesis (division of the cytoplasm)."
    },
    {
        question: "Cell division happens when a parent cell divides into two or more cells called __________ cells.",
        answer: "daughter",
        explanation: "The cells resulting from cell division are called daughter cells."
    },
    {
        question: "All cells reproduce by splitting into two, where each parental cell gives rise to two __________ cells.",
        answer: "daughter",
        explanation: "The process of binary fission, where a cell splits into two identical daughter cells, is the fundamental method of cell reproduction."
    },
    {
        question: "During mitosis, the chromatin in the nucleus condenses into __________.",
        answer: "chromosomes",
        explanation: "During mitosis, the DNA and proteins that make up chromatin condense into visible chromosomes."
    },
    {
        question: "Toward the end of mitosis, __________ separates the cytoplasm to produce the two daughter cells.",
        answer: "cytokinesis",
        explanation: "Cytokinesis is the process that divides the cytoplasm and organelles between the two daughter cells."
    },
    {
        question: "The daughter cells have the same number of __________ as the parent cell.",
        answer: "chromosomes",
        explanation: "In mitosis, the daughter cells are genetically identical to the parent cell and have the same number of chromosomes."
    },
    {
        question: "Human cells have 23 pairs of __________ that carry the genetic code.",
        answer: "chromosomes",
        explanation: "Human cells are diploid, meaning they have 23 pairs of chromosomes, for a total of 46 chromosomes."
    },
    {
        question: "There are two primary phases in the cell cycle: Interphase and __________.",
        answer: "M Phase",
        explanation: "The cell cycle consists of two main phases: Interphase (when the cell grows and prepares for division) and M Phase (when actual cell division occurs)."
    },
    {
        question: "__________ is not a resting period for the cell; the cell carries out various functions and prepares for the next cell division.",
        answer: "Interphase",
        explanation: "Although once thought to be a resting stage, interphase is actually a very active period when the cell grows, carries out its functions, and prepares for division."
    },
    {
        question: "During the G0 phase, the cell performs its specialized functions and is not preparing to __________.",
        answer: "divide",
        explanation: "The G0 phase is a quiescent stage where cells carry out their specialized functions but are not actively preparing for division."
    },
    {
        question: "G1 phase is a time for protein synthesis, growth and replication of __________, including the centriole pair.",
        answer: "organelles",
        explanation: "During G1 phase, the cell grows and replicates its organelles in preparation for division."
    },
    {
        question: "__________ phase is a period for DNA replication.",
        answer: "S",
        explanation: "The S (synthesis) phase is when DNA replication occurs, resulting in each chromosome having two identical chromatids."
    },
    {
        question: "After DNA replication, each chromosome is double stranded and consists of two __________.",
        answer: "chromatids",
        explanation: "After DNA replication in S phase, each chromosome consists of two identical sister chromatids joined at the centromere."
    },
    {
        question: "The chromatids are held together by a __________.",
        answer: "centromere",
        explanation: "The centromere is the region where the two sister chromatids are joined together."
    },
    {
        question: "The G2 phase is another time for protein synthesis; at this time, replication of the __________ pair is completed.",
        answer: "centriole",
        explanation: "During G2 phase, the cell completes preparation for division, including replication of the centrioles that will help form the spindle apparatus."
    },
    {
        question: "__________ Phase is where the actual cell division occurs.",
        answer: "M",
        explanation: "The M (mitotic) Phase is when nuclear division (mitosis) and cytoplasmic division (cytokinesis) occur."
    },
    {
        question: "After chromosomes are duplicated in the S phase of interphase, the double stranded chromosomes migrate to the middle of the cell, and __________ fibers attach to each chromatid.",
        answer: "spindle",
        explanation: "Spindle fibers, made of microtubules, attach to the centromeres of chromosomes and help move them during cell division."
    },
    {
        question: "Chromosomes are divided when the spindle fibers drag sister __________ to opposite ends of the cell.",
        answer: "chromatids",
        explanation: "During anaphase, spindle fibers pull the sister chromatids apart to opposite poles of the cell."
    },
    {
        question: "The four stages of mitosis are prophase, metaphase, anaphase, and __________.",
        answer: "telophase",
        explanation: "Mitosis consists of four sequential stages: prophase, metaphase, anaphase, and telophase."
    },
    {
        question: "Mitosis starts with __________, when chromosomes become visible in the nucleus.",
        answer: "prophase",
        explanation: "Prophase is the first stage of mitosis, characterized by the condensation of chromosomes and breakdown of the nuclear envelope."
    },
    {
        question: "__________ occurs when the chromosomes line up in the middle of the cell at the metaphase plate.",
        answer: "Metaphase",
        explanation: "During metaphase, chromosomes align at the equator of the cell, forming the metaphase plate."
    },
    {
        question: "In this type of cell division, sperm or egg cells are produced instead of identical daughter cells as in mitosis.",
        answer: "Meiosis",
        explanation: "Meiosis is a specialized type of cell division that produces gametes (sperm or egg cells) with half the number of chromosomes."
    }
];

// Fill in the Gap Quiz Logic
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
        currentQuestions = getRandomQuestions(fillQuestions, 10);
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill('');
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
        
        const userAnswer = userAnswers[currentQuestionIndex];
        let inputClass = 'fill-input';
        if (quizSubmitted) {
            const isCorrect = userAnswer.toLowerCase().trim() === question.answer.toLowerCase();
            inputClass += isCorrect ? ' correct' : ' incorrect';
        }
        
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
                <input type="text" class="${inputClass}" value="${userAnswer}" ${quizSubmitted ? 'disabled' : ''}>
                ${explanationHtml}
            </div>
        `;
        
        // Add event listener to input if quiz not submitted
        if (!quizSubmitted) {
            const input = quizContent.querySelector('.fill-input');
            input.addEventListener('input', function() {
                userAnswers[currentQuestionIndex] = this.value;
            });
            
            // Focus on input
            input.focus();
        }
        
        // Update counters
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
        scoreDisplay.textContent = `Score: ${score}/${currentQuestions.length}`;
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
            if (userAnswers[index].toLowerCase().trim() === question.answer.toLowerCase()) {
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
            const userAnswer = userAnswers[index] || 'Not answered';
            const isCorrect = userAnswer.toLowerCase().trim() === question.answer.toLowerCase();
            
            breakdownHtml += `
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="result-question">${index + 1}. ${question.question}</div>
                    <div class="result-answer"><strong>Your answer:</strong> ${userAnswer}</div>
                    <div class="result-answer"><strong>Correct answer:</strong> ${question.answer}</div>
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