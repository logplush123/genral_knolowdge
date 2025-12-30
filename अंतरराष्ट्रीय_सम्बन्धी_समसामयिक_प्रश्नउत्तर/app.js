// Game State Variables
let currentSet = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let totalTime;
let questions = [];
let selectedOptions = new Array(69).fill(null);
let correctAnswers = new Array(69).fill(false);
let answeredQuestions = 0;
let totalQuestions = 0;

// DOM Elements
const screens = {
    menu: document.getElementById('menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

// Set Names in Nepali
const setNames = {
    set1: 'सेट १: अभ्यास',
    set2: 'सेट २: मानक',
    set3: 'सेट ३: विशेषज्ञ'
};

// Initialize the application
function init() {
    // Make sure all screens are properly hidden/showing
    screens.menu.classList.add('active');
    screens.quiz.classList.remove('active');
    screens.results.classList.remove('active');
    
    // Reset game state
    resetGameState();
}

// Start Quiz Function
function startQuiz(set) {
    currentSet = set;
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    
    // Get questions for the selected set
    questions = quizData[currentSet];
    totalQuestions = questions.length;
    
    // Initialize selected options array
    selectedOptions = new Array(totalQuestions).fill(null);
    correctAnswers = new Array(totalQuestions).fill(false);
    
    // Set timer based on set
    if (currentSet === 'set1') {
        // 5 minutes total for the whole set
        timeLeft = 300; // 5 minutes in seconds
        totalTime = 300;
    } else if (currentSet === 'set2') {
        // 15 seconds per question
        timeLeft = 15;
        totalTime = 15;
    } else {
        // 10 seconds per question
        timeLeft = 10;
        totalTime = 10;
    }
    
    // Update UI
    document.getElementById('current-set-name').textContent = setNames[currentSet];
    document.getElementById('score').textContent = '0';
    
    // Switch to quiz screen
    screens.menu.classList.remove('active');
    screens.quiz.classList.add('active');
    screens.results.classList.remove('active');
    
    // Start timer and load first question
    updateProgressBar();
    startTimer();
    loadQuestion();
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Update question counter
    document.getElementById('question-counter').textContent = 
        `प्रश्न ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('q-number').textContent = `प्रश्न ${currentQuestionIndex + 1}`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.प्रश्न;
    
    // Clear previous options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Add new options
    const options = question.विकल्पहरू;
    for (const key in options) {
        const option = document.createElement('div');
        option.className = 'option';
        option.textContent = `${String.fromCharCode(65 + parseInt(key))}: ${options[key]}`;
        option.dataset.option = key;
        
        // Check if this option was previously selected
        if (selectedOptions[currentQuestionIndex] === key) {
            if (correctAnswers[currentQuestionIndex]) {
                option.classList.add('correct');
            } else {
                option.classList.add('wrong');
            }
            option.style.pointerEvents = 'none';
        } else {
            option.addEventListener('click', () => selectOption(key, option));
        }
        
        optionsContainer.appendChild(option);
    }
    
    // Reset timer for this question (for sets 2 and 3)
    if (currentSet !== 'set1') {
        resetQuestionTimer();
    }
}

// Select Option
function selectOption(optionKey, optionElement) {
    const question = questions[currentQuestionIndex];
    
    // Disable all options
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Check if answer is correct
    const isCorrect = optionKey === question.सही_उत्तर_विकल्प;
    
    // Update selected options
    selectedOptions[currentQuestionIndex] = optionKey;
    
    // Visual feedback
    if (isCorrect) {
        optionElement.classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
        optionElement.classList.add('pulse');
        correctAnswers[currentQuestionIndex] = true;
    } else {
        optionElement.classList.add('wrong');
        optionElement.classList.add('shake');
        
        // Highlight correct answer
        const correctOption = document.querySelector(`[data-option="${question.सही_उत्तर_विकल्प}"]`);
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        
        correctAnswers[currentQuestionIndex] = false;
    }
    
    answeredQuestions++;
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Timer Functions
function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetQuestionTimer() {
    if (currentSet === 'set2') {
        timeLeft = 15;
        totalTime = 15;
    } else if (currentSet === 'set3') {
        timeLeft = 10;
        totalTime = 10;
    }
    updateTimerDisplay();
    updateProgressBar();
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    updateProgressBar();
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        
        // Mark as wrong if time runs out
        if (selectedOptions[currentQuestionIndex] === null) {
            selectedOptions[currentQuestionIndex] = 'timeout';
            correctAnswers[currentQuestionIndex] = false;
        }
        
        // Move to next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            if (currentSet !== 'set1') {
                resetQuestionTimer();
            }
            loadQuestion();
            startTimer();
        } else {
            endQuiz();
        }
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    if (currentSet === 'set1') {
        // For set1, show progress of total time
        const percentage = (timeLeft / totalTime) * 100;
        progressFill.style.width = `${percentage}%`;
    } else {
        // For sets 2 and 3, show progress per question
        const percentage = (timeLeft / totalTime) * 100;
        progressFill.style.width = `${percentage}%`;
    }
}

// End Quiz
function endQuiz() {
    clearInterval(timer);
    
    // Calculate final results
    const correctCount = correctAnswers.filter(Boolean).length;
    const wrongCount = answeredQuestions - correctCount;
    const skippedCount = totalQuestions - answeredQuestions;
    
    // Update results screen
    document.getElementById('set-result-name').textContent = setNames[currentSet];
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('skipped-count').textContent = skippedCount;
    
    // Format time left
    const minutesLeft = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;
    document.getElementById('time-left').textContent = 
        `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    
    // Set result message
    const resultMessage = document.getElementById('result-message');
    const resultDescription = document.getElementById('result-description');
    
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) {
        resultMessage.textContent = 'उत्कृष्ट प्रदर्शन!';
        resultDescription.textContent = 'तपाईंको ज्ञान अद्वितीय छ!';
    } else if (percentage >= 70) {
        resultMessage.textContent = 'राम्रो प्रदर्शन!';
        resultDescription.textContent = 'तपाईंले राम्रो ज्ञान प्रदर्शन गर्नुभयो।';
    } else if (percentage >= 50) {
        resultMessage.textContent = 'साधारण प्रदर्शन';
        resultDescription.textContent = 'अझ अभ्यास गर्नुपर्छ।';
    } else {
        resultMessage.textContent = 'प्रयास जारी राख्नुहोस्';
        resultDescription.textContent = 'अरु अभ्यास गर्नुपर्छ।';
    }
    
    // Switch to results screen
    screens.quiz.classList.remove('active');
    screens.results.classList.add('active');
}

// Restart Quiz
function restartQuiz() {
    startQuiz(currentSet);
}

// Go to Menu
function goToMenu() {
    resetGameState();
    screens.results.classList.remove('active');
    screens.menu.classList.add('active');
}

// Quit Quiz
function quitQuiz() {
    if (confirm('के तपाईं निश्चित हुनुहुन्छ? यसले तपाईंको प्रगति हराउनेछ।')) {
        resetGameState();
        screens.quiz.classList.remove('active');
        screens.menu.classList.add('active');
    }
}

// Reset Game State
function resetGameState() {
    currentSet = '';
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 0;
    questions = [];
    selectedOptions = [];
    correctAnswers = [];
    answeredQuestions = 0;
    totalQuestions = 0;
    
    clearInterval(timer);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);