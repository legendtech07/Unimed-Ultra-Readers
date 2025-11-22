// CBT Quiz Questions
const cbtQuestions = [
    {
        question: "What is the primary purpose of a health record?",
        options: [
            "To serve as a legal document for billing purposes",
            "To ensure patients receive proper care by documenting their medical journey",
            "To provide data for hospital administration only",
            "To store financial information about patient payments"
        ],
        correctAnswer: 1,
        explanation: "Health records capture everything important about a patient's medical journey—from illnesses and treatments to outcomes. They ensure proper care during current visits and in the future by providing healthcare professionals access to past medical information."
    },
    {
        question: "Which of the following is NOT a component of health records?",
        options: [
            "Identification and Demographic Information",
            "Administrative and Legal Information",
            "Financial Information",
            "Patient's personal lifestyle preferences"
        ],
        correctAnswer: 3,
        explanation: "While health records contain identification, administrative, legal, financial, and clinical information, they do not typically include personal lifestyle preferences unless directly relevant to medical care."
    },
    {
        question: "What is the essential characteristic that ensures health records belong to the correct patient?",
        options: [
            "Legibility",
            "Clear identification",
            "Consistency in layout",
            "Prompt retrievability"
        ],
        correctAnswer: 1,
        explanation: "Clear identification ensures that the information recorded belongs to the correct person and avoids errors in treatment or care."
    },
    {
        question: "Which of the following is a personal use of health records?",
        options: [
            "Medical research",
            "Public health surveillance",
            "Emergency care",
            "Administrative reporting"
        ],
        correctAnswer: 2,
        explanation: "Emergency care is a personal use as it directly involves individual patient care. Medical research, public health surveillance, and administrative reporting are impersonal uses where personal identifiers are removed."
    },
    {
        question: "What value do health records provide to educators?",
        options: [
            "Legal protection in court cases",
            "Evaluation of hospital performance",
            "Practical tools for teaching medical students",
            "Continuity of care for patients"
        ],
        correctAnswer: 2,
        explanation: "Educators use health records as practical tools for teaching medical and allied health students, providing real-life examples of symptoms, treatments, and disease progression."
    },
    {
        question: "What is the primary goal of Health Information Management (HIM)?",
        options: [
            "To maximize hospital profits through efficient billing",
            "To make health records accessible to authorized users while safeguarding patient confidentiality",
            "To reduce the amount of paperwork in healthcare facilities",
            "To train healthcare professionals in record-keeping"
        ],
        correctAnswer: 1,
        explanation: "The primary goal of HIM is to make health records accessible to authorized users while safeguarding patient confidentiality and supporting efficient healthcare delivery."
    },
    {
        question: "Which of the following is NOT a core function of HIM professionals?",
        options: [
            "Health data collection and documentation",
            "Clinical coding and indexing",
            "Direct patient diagnosis and treatment",
            "Forms design, distribution, and control"
        ],
        correctAnswer: 2,
        correctAnswer: 2,
        explanation: "HIM professionals do not typically perform direct patient diagnosis and treatment, which is the role of clinicians like doctors and nurses. Their functions focus on managing health information systems and records."
    },
    {
        question: "Which principle of HIM practice emphasizes protecting patient information from unauthorized access?",
        options: [
            "Accuracy and Integrity of Information",
            "Confidentiality and Privacy",
            "Legal Compliance",
            "Professional Competence"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality and Privacy principles require that patient information is private and must be protected, with access granted only to authorized personnel."
    },
    {
        question: "What is the regulatory agency for Health Information Management practice in Nigeria?",
        options: [
            "Nigerian Medical Association (NMA)",
            "Health Records Officers' Registration Board of Nigeria (HRORBN)",
            "Federal Ministry of Health",
            "National Health Insurance Scheme (NHIS)"
        ],
        correctAnswer: 1,
        explanation: "The Health Records Officers' Registration Board of Nigeria (HRORBN) is the Federal Government agency established to control and regulate the practice of HIM in Nigeria."
    },
    {
        question: "Which ancient civilization is credited with the Ebers Papyrus, one of the oldest known medical documents?",
        options: [
            "Greek",
            "Roman",
            "Egyptian",
            "Jewish"
        ],
        correctAnswer: 2,
        explanation: "The Ebers Papyrus, dating to 1500 B.C., is among the oldest known medical documents from ancient Egypt, primarily listing prescriptions and treatments."
    },
    {
        question: "Who is often referred to as the 'Father of Medicine'?",
        options: [
            "Galen of Pergamum",
            "Hippocrates",
            "Andreas Vesalius",
            "Florence Nightingale"
        ],
        correctAnswer: 1,
        explanation: "Hippocrates, a Greek physician, is often referred to as the 'Father of Medicine' for developing ethical and practical frameworks for healthcare that persist to this day."
    },
    {
        question: "Which numbering system assigns a new number to a patient each time they visit the hospital?",
        options: [
            "Unit numbering system",
            "Serial numbering system",
            "Serial-unit numbering system",
            "Terminal digit filing system"
        ],
        correctAnswer: 1,
        explanation: "In the serial numbering system, the patient receives a new number each time they are admitted to or visit the hospital for treatment."
    },
    {
        question: "What is the main advantage of the unit numbering system?",
        options: [
            "Easy to control numbers accurately",
            "All patient records are together in one folder",
            "Easily adaptable to microfilm",
            "Easy to detect active records"
        ],
        correctAnswer: 1,
        explanation: "The main advantage of the unit numbering system is that all patient records are together in one folder, providing a complete picture of the patient's medical history."
    },
    {
        question: "Which filing system uses a six-digit number divided into three parts?",
        options: [
            "Alphabetical filing",
            "Straight numeric filing",
            "Terminal digit filing",
            "Middle digit filing"
        ],
        correctAnswer: 2,
        explanation: "Terminal digit filing uses a six-digit number divided into three parts: primary digits (last two), secondary digits (middle two), and tertiary digits (first two)."
    },
    {
        question: "What is the purpose of the Master Patient Index (MPI)?",
        options: [
            "To store financial information about patients",
            "To serve as an alphabetical key reference to numerically filed case notes",
            "To record patient treatment outcomes",
            "To track hospital inventory"
        ],
        correctAnswer: 1,
        explanation: "The MPI is a comprehensive repository that serves as an alphabetical key reference to the numerically filed case notes or folders of patients."
    },
    {
        question: "Which of the following is a challenge of using a Master Patient Index?",
        options: [
            "It eliminates duplication of records",
            "It saves time in locating patient records",
            "It is prone to human errors",
            "It identifies repeat patients quickly"
        ],
        correctAnswer: 2,
        explanation: "A challenge of using MPI is that it's prone to human errors, as the accuracy depends on the competency of the filing staff who may misfile or incorrectly retrieve index cards."
    },
    {
        question: "According to Nigerian guidelines, how long should adult patient records typically be retained?",
        options: [
            "5 years after the last treatment",
            "10 years after the last treatment",
            "15 years after the last treatment",
            "Until the patient's death"
        ],
        correctAnswer: 1,
        explanation: "In Nigeria, adult patient records are often retained for 10 years after the last treatment, while pediatric records are kept until the child reaches adulthood plus additional years."
    },
    {
        question: "Which method of health record destruction involves cutting paper-based records into small, unreadable fragments?",
        options: [
            "Incineration",
            "Shredding",
            "Electronic deletion",
            "Microfilming"
        ],
        correctAnswer: 1,
        explanation: "Shredding involves using specialized equipment to cut paper-based records into small, unreadable fragments, ensuring patient information cannot be reconstructed."
    },
    {
        question: "What is microfilming?",
        options: [
            "The process of digitizing health records",
            "The process of capturing documents on photographic film at a reduced size",
            "The process of encrypting electronic health records",
            "The process of backing up data to cloud storage"
        ],
        correctAnswer: 1,
        explanation: "Microfilming refers to the process of capturing documents, particularly health records, on photographic film at a reduced size for space-efficient archiving."
    },
    {
        question: "Which of the following is an advantage of microfilming?",
        options: [
            "Instant retrieval of records",
            "Space efficiency for storing large volumes of records",
            "No specialized equipment required",
            "Easy to update records"
        ],
        correctAnswer: 1,
        explanation: "Microfilm can store hundreds of thousands of records in a small space, making it ideal for large healthcare institutions seeking space efficiency."
    },
    {
        question: "What does the clinical section of a health record typically include?",
        options: [
            "Patient's financial information and payment details",
            "Consent forms and legal documentation",
            "Medical history, physical examinations, and treatment records",
            "Demographic information and next of kin details"
        ],
        correctAnswer: 2,
        explanation: "The clinical section documents the patient's medical history, physical examinations, diagnosis, treatments, and progress, including clinical notes, lab reports, and discharge notes."
    },
    {
        question: "Which characteristic of a good health record ensures that healthcare providers can reach out for clarification if needed?",
        options: [
            "Legible and understandable",
            "Contributor identification",
            "Comprehensive and relevant information",
            "Prompt retrievability"
        ],
        correctAnswer: 1,
        explanation: "Contributor identification ensures that each health record includes the names or identifiers of those who contributed to it, allowing healthcare providers to reach out for clarification if needed."
    },
    {
        question: "In which context are health records used for public health surveillance?",
        options: [
            "Personal use",
            "Impersonal use",
            "Both personal and impersonal use",
            "Neither personal nor impersonal use"
        ],
        correctAnswer: 1,
        explanation: "Public health surveillance is an impersonal use of health records, where data is used for broader purposes like tracking disease outbreaks and health trends with personal identifiers removed."
    },
    {
        question: "How do health records provide value to medical researchers?",
        options: [
            "By serving as legal evidence in court cases",
            "By ensuring continuity of care for patients",
            "By offering reliable data for case and group studies",
            "By evaluating the performance of medical staff"
        ],
        correctAnswer: 2,
        explanation: "Health records are indispensable for scientific research, offering reliable data for case and group studies that provide insights into diseases, treatments, and outcomes."
    },
    {
        question: "Which HIM function involves assigning standardized codes to diagnoses and procedures?",
        options: [
            "Health data collection and documentation",
            "Clinical coding and indexing",
            "Forms design, distribution, and control",
            "Data analysis and reporting"
        ],
        correctAnswer: 1,
        explanation: "Clinical coding and indexing involves assigning standardized codes to diagnoses, treatments, and procedures using classification systems like ICD, supporting billing and healthcare data analysis."
    },
    {
        question: "Which principle of HIM practice requires professionals to stay current with knowledge and skills?",
        options: [
            "Accuracy and Integrity of Information",
            "Confidentiality and Privacy",
            "Professional Competence",
            "Adaptability to Technology"
        ],
        correctAnswer: 2,
        explanation: "Professional Competence requires HIM professionals to be skilled and up-to-date in their knowledge through continuing education like seminars on digital health tools."
    },
    {
        question: "According to the HIM Professional Code of Ethics in Nigeria, what should HIM professionals place before material gain?",
        options: [
            "Personal advantage",
            "Service",
            "Financial interests",
            "Employer loyalty"
        ],
        correctAnswer: 1,
        explanation: "The code states that HIM professionals should place service before material gain, the honour of the profession before personal advantage, and the health of the patient above all."
    },
    {
        question: "During which historical period did monasteries and convents become centers for healing?",
        options: [
            "Egyptian period",
            "Greek period",
            "Medieval period",
            "Renaissance"
        ],
        correctAnswer: 2,
        explanation: "During the Medieval period, after the fall of Rome, monasteries and convents became centers for healing, often maintaining rudimentary health records."
    },
    {
        question: "Which century saw the professionalization of medical records management?",
        options: [
            "17th century",
            "18th century",
            "19th century",
            "20th century"
        ],
        correctAnswer: 2,
        explanation: "The 19th century saw the professionalization of medical records, driven by individuals like Dr. Cowan who advocated for standardized data collection."
    },
    {
        question: "In which type of hospitals is the serial numbering system commonly used?",
        options: [
            "University teaching hospitals",
            "Small hospitals without ambulatory services",
            "Specialized hospitals",
            "Centralized system hospitals"
        ],
        correctAnswer: 1,
        explanation: "Serial numbering is commonly used in small hospitals without ambulatory services, TB hospitals, mental hospitals, and terminal patient hospitals."
    },
    {
        question: "What is the main disadvantage of the serial-unit numbering system?",
        options: [
            "All charts are in different locations",
            "It necessitates the back shifting of health records",
            "Difficult to estimate space for readmissions",
            "It is not economical due to printing of stationery"
        ],
        correctAnswer: 1,
        explanation: "A main disadvantage of serial-unit numbering is that it necessitates the back shifting of health records, which can be time-consuming."
    },
    {
        question: "Which filing system arranges records by surname first, followed by middle names and given names?",
        options: [
            "Straight numeric filing",
            "Terminal digit filing",
            "Alphabetical filing",
            "Middle digit filing"
        ],
        correctAnswer: 2,
        explanation: "Alphabetical filing arranges records by surname first, followed by middle names and given names."
    },
    {
        question: "What is a disadvantage of straight numerical filing?",
        options: [
            "It requires complex indexing systems",
            "It is difficult to understand and use",
            "High risk of misfiling due to transposition of digits",
            "It is not cost-effective for small institutions"
        ],
        correctAnswer: 2,
        explanation: "A disadvantage of straight numerical filing is the high risk of misfiling, as staff must consider all digits of the record number, increasing the chance for errors."
    },
    {
        question: "In terminal digit filing, which digits are considered primary?",
        options: [
            "The first two digits",
            "The middle two digits",
            "The last two digits",
            "The first and last digits"
        ],
        correctAnswer: 2,
        explanation: "In terminal digit filing, the primary digits are the last two digits on the right-hand side."
    },
    {
        question: "Which information is typically NOT included on a Master Patient Index card?",
        options: [
            "Patient's surname and first name",
            "Hospital number",
            "Date of birth",
            "Patient's social media handles"
        ],
        correctAnswer: 3,
        explanation: "MPI cards include identifying details like name, hospital number, date of birth, date of registration, attending physician, clinic, next of kin, address, nationality, and occupation, but not social media handles."
    },
    {
        question: "How does the MPI help reduce duplication of records?",
        options: [
            "By automatically merging similar records",
            "By ensuring existing records are updated instead of creating new files",
            "By deleting old records when new ones are created",
            "By using biometric data to identify patients"
        ],
        correctAnswer: 1,
        explanation: "The MPI helps avoid creating duplicate medical records for the same patient by ensuring that existing records are updated instead of creating new files when a patient revisits."
    },
    {
        question: "What is a key consideration when developing record retention policies?",
        options: [
            "The color of the filing cabinets",
            "The preferences of hospital administrators",
            "Legal requirements and professional guidelines",
            "The availability of storage space only"
        ],
        correctAnswer: 2,
        explanation: "Record retention policies are governed by legal, institutional, and professional requirements, which vary from country to country."
    },
    {
        question: "Which method of destruction guarantees total destruction of physical records?",
        options: [
            "Shredding",
            "Incineration",
            "Electronic deletion",
            "Recycling"
        ],
        correctAnswer: 1,
        explanation: "Incineration guarantees total destruction of physical records through controlled burning at high temperatures, leaving no chance of recovery."
    },
    {
        question: "What is a disadvantage of electronic record deletion?",
        options: [
            "It produces environmental waste",
            "It requires trained IT personnel and appropriate software",
            "It is not effective for bulk disposal",
            "It leaves physical remnants of records"
        ],
        correctAnswer: 1,
        explanation: "A disadvantage of electronic record deletion is that it requires trained IT personnel and appropriate software, which some healthcare institutions may lack."
    },
    {
        question: "How is microfilming used as a backup system?",
        options: [
            "By storing duplicate paper records",
            "By serving as an emergency backup in case EHR systems fail",
            "By creating digital copies of records",
            "By encrypting electronic records"
        ],
        correctAnswer: 1,
        explanation: "Microfilming serves as an emergency backup in case electronic health records (EHR) systems fail, providing a physical backup for important records."
    },
    {
        question: "What is a disadvantage of microfilming?",
        options: [
            "It requires significant physical storage space",
            "Records cannot be stored for long periods",
            "It is expensive for short-term storage",
            "It requires no specialized equipment"
        ],
        correctAnswer: 0,
        explanation: "While more efficient than paper, microfilm still requires significant storage space compared to modern digital records, and it requires specialized equipment for viewing and processing."
    },
    {
        question: "Which component of health records includes signed consent forms?",
        options: [
            "Identification and Demographic Information",
            "Administrative and Legal Information",
            "Financial Information",
            "Clinical Information"
        ],
        correctAnswer: 1,
        explanation: "Administrative and Legal Information includes legal documentation such as signed consent forms for treatment, surgeries, or other procedures."
    },
    {
        question: "What does 'prompt retrievability' mean in the context of health records?",
        options: [
            "Records should be easy to read and understand",
            "Records must be easily accessible when required",
            "Records should follow a consistent format",
            "Records should include all relevant details"
        ],
        correctAnswer: 1,
        explanation: "Prompt retrievability means health records must be easily retrievable when required, whether for emergency care, follow-up treatment, or administrative purposes."
    },
    {
        question: "Which use of health records involves analyzing data to determine areas with high infection rates during an epidemic?",
        options: [
            "Administrative uses",
            "Study and teaching",
            "Research purposes",
            "Public health surveillance"
        ],
        correctAnswer: 3,
        explanation: "Public health surveillance uses health records to track disease outbreaks and health trends, such as analyzing which areas have the highest infection rates during an epidemic."
    },
    {
        question: "How do health records provide value to hospitals?",
        options: [
            "By ensuring continuity of care for patients",
            "By serving as practical teaching tools",
            "By providing a factual basis for evaluating staff performance",
            "By offering data for medical research"
        ],
        correctAnswer: 2,
        explanation: "For hospitals, health records provide a factual basis for evaluating the performance of medical staff and hospital resources, and assist in planning future services."
    },
    {
        question: "Which HIM function involves preparing records for outpatient clinics and hospital wards?",
        options: [
            "Health data collection and documentation",
            "Clinical coding and indexing",
            "Clinic preparation and record availability",
            "Storage and organization"
        ],
        correctAnswer: 2,
        explanation: "Clinic preparation and record availability involves preparing and organizing records for outpatient clinics and hospital wards, ensuring records are accessible for healthcare providers."
    },
    {
        question: "Which principle of HIM practice emphasizes the ability of systems to exchange information?",
        options: [
            "Data Security",
            "Legal Compliance",
            "Patient-Centered Approach",
            "Quality Improvement"
        ],
        correctAnswer: 2,
        explanation: "The Patient-Centered Approach includes interoperability—the ability of systems or organisations to exchange information—ensuring health records can be shared seamlessly when patients move between facilities."
    },
    {
        question: "According to the HIM Code of Ethics, what should professionals do if they find evidence of violation of established rules?",
        options: [
            "Disclose it to everyone in the organization",
            "Report to proper authorities but disclose to no one else",
            "Ignore it if it doesn't affect patient care directly",
            "Discuss it only with colleagues"
        ],
        correctAnswer: 1,
        explanation: "The code states that HIM professionals should report to the proper authorities but disclose to no one else any evidence of conduct that indicates possible violation of established rules."
    },
    {
        question: "Which organization introduced Western healthcare systems and record-keeping in Nigeria?",
        options: [
            "Government agencies",
            "Missionary organizations",
            "International corporations",
            "Local traditional healers"
        ],
        correctAnswer: 1,
        explanation: "In Nigeria, the role of missionary organizations was pivotal in introducing Western healthcare systems, with facilities like Sacred Heart Hospital in Abeokuta becoming centers for healthcare delivery and rudimentary record-keeping."
    },
    {
        question: "What transformation has occurred in health records management in the digital era?",
        options: [
            "Movement from electronic to paper-based systems",
            "Movement from paper-based to electronic systems",
            "Elimination of the need for health records",
            "Standardization of handwritten records"
        ],
        correctAnswer: 1,
        explanation: "The digital era has transformed health records, moving from paper-based systems to Electronic Health Records (EHRs) that improve accessibility, accuracy, and data analysis capabilities."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let quizCompleted = false;

// DOM Elements
const quizContent = document.getElementById('quiz-content');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// Initialize Quiz
function initQuiz() {
    // Select 10 random questions
    const selectedQuestions = [];
    const questionIndices = new Set();
    
    while (questionIndices.size < 10) {
        const randomIndex = Math.floor(Math.random() * cbtQuestions.length);
        questionIndices.add(randomIndex);
    }
    
    questionIndices.forEach(index => {
        selectedQuestions.push(cbtQuestions[index]);
    });
    
    // Update global questions array
    window.quizQuestions = selectedQuestions;
    
    // Initialize user answers array
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    // Update UI
    totalQuestionsElement.textContent = selectedQuestions.length;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    scoreElement.textContent = score;
    
    // Display first question
    displayQuestion(currentQuestionIndex);
    
    // Set up event listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
}

// Display Question
function displayQuestion(index) {
    const question = window.quizQuestions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, optionIndex) => {
        const isSelected = userAnswers[index] === optionIndex;
        const optionClass = isSelected ? 'option selected' : 'option';
        
        optionsHTML += `
            <div class="${optionClass}" data-option="${optionIndex}">
                ${option}
            </div>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="question-container">
            <div class="question-number">Question ${index + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        </div>
    `;
    
    // Add event listeners to options
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach(option => {
        option.addEventListener('click', () => selectOption(option.dataset.option));
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = parseInt(optionIndex);
    
    // Update UI to show selected option
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelector(`.option[data-option="${optionIndex}"]`).classList.add('selected');
    
    // Enable next button if not already enabled
    if (currentQuestionIndex < window.quizQuestions.length - 1) {
        nextBtn.disabled = false;
    } else {
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
    }
}

// Update Navigation Buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex < window.quizQuestions.length - 1) {
        nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.display = 'none';
        submitBtn.style.display = userAnswers[currentQuestionIndex] !== null ? 'inline-block' : 'none';
    }
}

// Go to Previous Question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        displayQuestion(currentQuestionIndex);
    }
}

// Go to Next Question
function goToNextQuestion() {
    if (currentQuestionIndex < window.quizQuestions.length - 1) {
        currentQuestionIndex++;
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        displayQuestion(currentQuestionIndex);
    }
}

// Submit Quiz
function submitQuiz() {
    quizCompleted = true;
    
    // Calculate score
    score = 0;
    window.quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Display results
    displayResults();
}

// Display Results
function displayResults() {
    let resultsHTML = `
        <div class="results-container">
            <div class="results-header">
                <h2>Quiz Results</h2>
            </div>
            <div class="score ${getScoreClass(score)}">
                Your Score: ${score}/${window.quizQuestions.length}
            </div>
            <div class="review-section">
                <h3>Review Your Answers</h3>
    `;
    
    window.quizQuestions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === question.correctAnswer;
        const userAnswerText = userAnswerIndex !== null ? question.options[userAnswerIndex] : "Not answered";
        const correctAnswerText = question.options[question.correctAnswer];
        
        resultsHTML += `
            <div class="review-item">
                <div class="review-question">${index + 1}. ${question.question}</div>
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    Your answer: ${userAnswerText}
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct">
                        Correct answer: ${correctAnswerText}
                    </div>
                ` : ''}
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    
    // Hide navigation buttons
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

// Get Score Class for Styling
function getScoreClass(score) {
    const percentage = (score / window.quizQuestions.length) * 100;
    
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'average';
    return 'poor';
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);