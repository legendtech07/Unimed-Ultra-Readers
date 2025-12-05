// Fill-in-the-Gap Questions Database (30 questions)
const fillQuestions = [
    {
        id: 1,
        sentence: "The hip bone is also known as the __________ bone.",
        correctAnswer: "innominate",
        alternatives: ["pelvic", "coxal"],
        explanation: "The hip bone is commonly called the innominate bone, though it may also be referred to as pelvic or coxal bone."
    },
    {
        id: 2,
        sentence: "The three components of the hip bone are the ilium, ischium, and __________.",
        correctAnswer: "pubis",
        alternatives: ["pubic bone"],
        explanation: "The hip bone consists of three fused bones: ilium (superior), ischium (posteroinferior), and pubis (anterior)."
    },
    {
        id: 3,
        sentence: "The __________ is a deep, cup-shaped socket on the lateral surface of the hip bone.",
        correctAnswer: "acetabulum",
        alternatives: [],
        explanation: "The acetabulum articulates with the femoral head to form the hip joint."
    },
    {
        id: 4,
        sentence: "Located anteroinferior to the acetabulum is the large __________.",
        correctAnswer: "obturator foramen",
        alternatives: ["obturator"],
        explanation: "The obturator foramen is bounded by the pubis and ischium and is mostly covered by the obturator membrane."
    },
    {
        id: 5,
        sentence: "The __________ is the largest and most superior part of the hip bone.",
        correctAnswer: "ilium",
        alternatives: [],
        explanation: "The ilium consists of a body and an ala (wing), and contributes to the acetabulum."
    },
    {
        id: 6,
        sentence: "The __________ supports body weight in the seated position.",
        correctAnswer: "ischial tuberosity",
        alternatives: ["tuberosity"],
        explanation: "The ischial tuberosity is located on the posteroinferior aspect of the ischial ramus."
    },
    {
        id: 7,
        sentence: "The __________ ligament attaches to the ischial spine.",
        correctAnswer: "sacrospinous",
        alternatives: [],
        explanation: "The sacrospinous ligament attaches to the ischial spine and converts the greater sciatic notch into the greater sciatic foramen."
    },
    {
        id: 8,
        sentence: "The __________ crest is often used for bone marrow biopsy.",
        correctAnswer: "iliac",
        alternatives: [],
        explanation: "The iliac crest is easily palpated and lies close to the surface, making it ideal for bone marrow biopsy."
    },
    {
        id: 9,
        sentence: "The moon-shaped articular surface of the acetabulum is called the __________ surface.",
        correctAnswer: "lunate",
        alternatives: [],
        explanation: "The lunate surface articulates with the head of the femur."
    },
    {
        id: 10,
        sentence: "The non-articular central portion of the acetabulum is the __________.",
        correctAnswer: "acetabular fossa",
        alternatives: ["fossa"],
        explanation: "The acetabular fossa is the non-articular, central depression in the acetabulum."
    },
    {
        id: 11,
        sentence: "The __________ forms the anterior portion of the hip bone.",
        correctAnswer: "pubis",
        alternatives: ["pubic bone"],
        explanation: "The pubis is the smallest component of the hip bone and is located anteriorly."
    },
    {
        id: 12,
        sentence: "The __________ membrane covers most of the obturator foramen.",
        correctAnswer: "obturator",
        alternatives: [],
        explanation: "The obturator membrane is a flat connective tissue sheet that covers the obturator foramen."
    },
    {
        id: 13,
        sentence: "The __________ converts the lesser sciatic notch into the lesser sciatic foramen.",
        correctAnswer: "sacrospinous ligament",
        alternatives: ["sacrospinous"],
        explanation: "The sacrospinous ligament, along with the sacrotuberous ligament, converts the notches into foramina."
    },
    {
        id: 14,
        sentence: "The three hip bone components fuse completely during __________.",
        correctAnswer: "puberty",
        alternatives: ["adolescence"],
        explanation: "The ilium, ischium and pubis fuse during puberty, though they develop separately and are connected by cartilage in children."
    },
    {
        id: 15,
        sentence: "The __________ is the center of union for the three hip bone components.",
        correctAnswer: "acetabulum",
        alternatives: [],
        explanation: "The acetabulum is where the ilium, ischium and pubis meet and fuse together."
    },
    {
        id: 16,
        sentence: "The __________ line runs anteroinferiorly from the auricular surface to the acetabulum.",
        correctAnswer: "arcuate",
        alternatives: [],
        explanation: "The arcuate line is a smooth, rounded line on the medial border of the ilium."
    },
    {
        id: 17,
        sentence: "The __________ provides attachment for the medial end of the inguinal ligament.",
        correctAnswer: "pubic tubercle",
        alternatives: ["tubercle"],
        explanation: "The pubic tubercle is located at the lateral end of the pubic crest."
    },
    {
        id: 18,
        sentence: "The __________ is the prominent superior border of the ilium.",
        correctAnswer: "iliac crest",
        alternatives: ["crest"],
        explanation: "The iliac crest is the curved superior border of the ilium and a site for muscle attachment."
    },
    {
        id: 19,
        sentence: "The __________ notch is located immediately below the ischial spine.",
        correctAnswer: "lesser sciatic",
        alternatives: ["lesser"],
        explanation: "The lesser sciatic notch is a small 'C' shaped concavity below the ischial spine."
    },
    {
        id: 20,
        sentence: "The __________ ramus of the pubis joins with the ischial ramus.",
        correctAnswer: "inferior",
        alternatives: ["inferior pubic"],
        explanation: "The inferior pubic ramus projects posteroinferiorly to unite with the ischial ramus."
    },
    {
        id: 21,
        sentence: "The __________ separates the greater pelvis from the lesser pelvis.",
        correctAnswer: "pelvic brim",
        alternatives: ["pelvic inlet"],
        explanation: "The pelvic brim is an imaginary line that delineates the pelvic inlet."
    },
    {
        id: 22,
        sentence: "The __________ is continuous with the pubic crest and arcuate line.",
        correctAnswer: "pecten pubis",
        alternatives: ["pectineal line"],
        explanation: "The pecten pubis (pectineal line) is on the superior pubic ramus."
    },
    {
        id: 23,
        sentence: "The __________ ligament completes the acetabulum inferiorly.",
        correctAnswer: "transverse acetabular",
        alternatives: ["transverse"],
        explanation: "The transverse acetabular ligament bridges the acetabular notch."
    },
    {
        id: 24,
        sentence: "The __________ is the non-articular gap in the inferior acetabular margin.",
        correctAnswer: "acetabular notch",
        alternatives: ["notch"],
        explanation: "The acetabular notch makes the acetabular margin incomplete inferiorly."
    },
    {
        id: 25,
        sentence: "The __________ passes through the obturator canal.",
        correctAnswer: "obturator nerve",
        alternatives: ["obturator vessels", "obturator neurovascular bundle"],
        explanation: "The obturator nerve, artery and vein pass through the obturator canal."
    },
    {
        id: 26,
        sentence: "The __________ surface of the ilium faces medially and contains the iliac fossa.",
        correctAnswer: "medial",
        alternatives: [],
        explanation: "The medial surface of the ilium includes the iliac fossa, auricular surface, and sacropelvic surface."
    },
    {
        id: 27,
        sentence: "The __________ is the rounded upper border of the pubic body.",
        correctAnswer: "pubic crest",
        alternatives: ["crest"],
        explanation: "The pubic crest ends laterally as the pubic tubercle."
    },
    {
        id: 28,
        sentence: "The __________ is the point where the pubis meets the ilium.",
        correctAnswer: "iliopubic eminence",
        alternatives: ["eminence"],
        explanation: "The iliopubic eminence marks the junction of the ilium and pubis."
    },
    {
        id: 29,
        sentence: "The __________ groove crosses the obturator surface of the superior pubic ramus.",
        correctAnswer: "obturator",
        alternatives: [],
        explanation: "The obturator groove transmits the obturator vessels and nerve."
    },
    {
        id: 30,
        sentence: "In a bone marrow biopsy, the needle is passed through the __________ bone of the iliac crest.",
        correctAnswer: "cortical",
        alternatives: ["compact"],
        explanation: "A cutting needle passes through the cortical (compact) bone to reach the bone marrow in the medullary cavity."
    }
];

// Quiz State
let fillCurrentQuestionIndex = 0;
let fillScore = 0;
let fillUserAnswers = new Array(10).fill('');
let fillSelectedQuestions = [];
let fillQuizCompleted = false;

// DOM Elements
const fillQuestionText = document.getElementById('fill-question-text');
const fillInputContainer = document.getElementById('fill-input-container');
const fillCurrentQuestionEl = document.getElementById('fill-current-question');
const fillTotalQuestionsEl = document.getElementById('fill-total-questions');
const fillScoreEl = document.getElementById('fill-score');
const fillFeedbackEl = document.getElementById('fill-feedback');
const fillPrevBtn = document.getElementById('fill-prev-btn');
const fillNextBtn = document.getElementById('fill-next-btn');
const fillSubmitBtn = document.getElementById('fill-submit-btn');

// Initialize Fill-in Quiz
function fillInitQuiz() {
    // Select 10 random questions from the pool of 30
    fillSelectedQuestions = getRandomFillQuestions(fillQuestions, 10);
    
    // Initialize user answers array
    fillUserAnswers = new Array(fillSelectedQuestions.length).fill('');
    
    // Update display
    fillTotalQuestionsEl.textContent = fillSelectedQuestions.length;
    fillScoreEl.textContent = fillScore;
    
    // Load first question
    fillLoadQuestion(fillCurrentQuestionIndex);
}

// Get random questions from array
function getRandomFillQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Load question at specified index
function fillLoadQuestion(index) {
    if (index < 0 || index >= fillSelectedQuestions.length) return;
    
    fillCurrentQuestionIndex = index;
    const question = fillSelectedQuestions[index];
    
    // Update question counter
    fillCurrentQuestionEl.textContent = index + 1;
    
    // Split sentence at the blank (assuming blank is marked with __________)
    const sentenceParts = question.sentence.split('__________');
    
    // Set question text with blank
    fillQuestionText.innerHTML = `
        ${sentenceParts[0]}
        <span style="text-decoration: underline; font-weight: bold;">__________</span>
        ${sentenceParts[1]}
    `;
    
    // Clear previous input
    fillInputContainer.innerHTML = '';
    
    // Create input field
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'blank-input';
    input.id = 'fill-answer-input';
    input.placeholder = 'Type your answer here...';
    input.value = fillUserAnswers[index] || '';
    
    // Add event listener for Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            fillCheckAnswer();
        }
    });
    
    // Create check button
    const checkBtn = document.createElement('button');
    checkBtn.className = 'nav-btn next-btn';
    checkBtn.innerHTML = '<i class="fas fa-check"></i> Check Answer';
    checkBtn.onclick = fillCheckAnswer;
    
    fillInputContainer.appendChild(input);
    fillInputContainer.appendChild(checkBtn);
    
    // Hide feedback
    fillFeedbackEl.style.display = 'none';
    fillFeedbackEl.innerHTML = '';
    
    // Update button states
    fillPrevBtn.disabled = index === 0;
    fillNextBtn.disabled = index === fillSelectedQuestions.length - 1;
    
    // Show submit button on last question
    if (index === fillSelectedQuestions.length - 1) {
        fillSubmitBtn.style.display = 'inline-block';
    } else {
        fillSubmitBtn.style.display = 'none';
    }
    
    // Focus on input
    setTimeout(() => {
        input.focus();
    }, 100);
}

// Check current answer
function fillCheckAnswer() {
    const input = document.getElementById('fill-answer-input');
    const userAnswer = input.value.trim().toLowerCase();
    const question = fillSelectedQuestions[fillCurrentQuestionIndex];
    
    // Save user answer
    fillUserAnswers[fillCurrentQuestionIndex] = userAnswer;
    
    // Check if answer is correct (including alternatives)
    let isCorrect = false;
    const correctAnswers = [question.correctAnswer.toLowerCase(), ...question.alternatives.map(a => a.toLowerCase())];
    
    if (correctAnswers.includes(userAnswer)) {
        isCorrect = true;
        
        // Update score if first time correct
        if (!question.answered) {
            fillScore++;
            fillScoreEl.textContent = fillScore;
            question.answered = true;
        }
    }
    
    // Update input appearance
    input.className = isCorrect ? 'blank-input correct-blank' : 'blank-input incorrect-blank';
    
    // Show feedback
    fillFeedbackEl.style.display = 'block';
    fillFeedbackEl.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
        <strong>Correct answer:</strong> ${question.correctAnswer}<br>
        <em>Explanation:</em> ${question.explanation}
    `;
    fillFeedbackEl.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
    fillFeedbackEl.style.color = isCorrect ? '#155724' : '#721c24';
    fillFeedbackEl.style.border = isCorrect ? '1px solid #c3e6cb' : '1px solid #f5c6cb';
}

// Navigate to next question
function fillNextQuestion() {
    if (fillCurrentQuestionIndex < fillSelectedQuestions.length - 1) {
        fillLoadQuestion(fillCurrentQuestionIndex + 1);
    }
}

// Navigate to previous question
function fillPrevQuestion() {
    if (fillCurrentQuestionIndex > 0) {
        fillLoadQuestion(fillCurrentQuestionIndex - 1);
    }
}

// Submit and show results
function fillSubmitQuiz() {
    if (fillQuizCompleted) return;
    
    // Calculate final score
    fillScore = 0;
    fillSelectedQuestions.forEach((question, index) => {
        const userAnswer = fillUserAnswers[index].toLowerCase();
        const correctAnswers = [question.correctAnswer.toLowerCase(), ...question.alternatives.map(a => a.toLowerCase())];
        
        if (correctAnswers.includes(userAnswer)) {
            fillScore++;
        }
    });
    
    fillQuizCompleted = true;
    
    // Create results page
    const resultsHTML = `
        <div class="results-container">
            <div class="results-card">
                <div class="score-circle">
                    ${fillScore}/${fillSelectedQuestions.length}
                </div>
                <h2>Quiz Completed!</h2>
                <p class="score-text">You scored ${fillScore} out of ${fillSelectedQuestions.length} questions correctly.</p>
                <p>${fillGetPerformanceMessage(fillScore, fillSelectedQuestions.length)}</p>
                
                <div class="answer-review">
                    <h3><i class="fas fa-clipboard-check"></i> Answer Review</h3>
                    ${fillGenerateAnswerReview()}
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="nav-btn home-btn" onclick="location.href='hip232.html'" style="margin-right: 10px;">
                        <i class="fas fa-home"></i> Back to Home
                    </button>
                    <button class="nav-btn next-btn" onclick="location.reload()">
                        <i class="fas fa-redo"></i> Retake Quiz
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.querySelector('.quiz-container').innerHTML = resultsHTML;
}

// Generate performance message
function fillGetPerformanceMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 90) return "Excellent! Your anatomical terminology is precise!";
    if (percentage >= 75) return "Very good! You know your anatomical terms well.";
    if (percentage >= 60) return "Good effort! Review the terminology to improve.";
    return "Keep studying! Practice the anatomical terms from the lecture.";
}

// Generate answer review section
function fillGenerateAnswerReview() {
    let reviewHTML = '';
    
    fillSelectedQuestions.forEach((question, index) => {
        const userAnswer = fillUserAnswers[index];
        const correctAnswers = [question.correctAnswer, ...question.alternatives];
        const isCorrect = correctAnswers.map(a => a.toLowerCase()).includes(userAnswer.toLowerCase());
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                <strong>Question ${index + 1}:</strong> ${question.sentence}<br>
                <strong>Your answer:</strong> ${userAnswer || 'Not answered'}<br>
                <strong>Correct answer:</strong> ${question.correctAnswer} ${question.alternatives.length > 0 ? `(or ${question.alternatives.join(', ')})` : ''}<br>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    });
    
    return reviewHTML;
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', fillInitQuiz);