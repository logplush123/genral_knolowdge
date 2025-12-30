// app.js - Main application logic

// DOM Elements
const contentArea = document.getElementById('contentArea');
const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('navMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const trendingQuestions = document.getElementById('trendingQuestions');
const qaContainer = document.getElementById('qaContainer');
const questionInput = document.getElementById('questionInput');
const submitQuestion = document.getElementById('submitQuestion');

// Current state
let currentUnit = 'home';
let currentTheme = 'light';

// Initialize the app
function initApp() {
    // Load initial content
    loadUnit(currentUnit);
    
    // Load trending questions
    loadTrendingQuestions();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('nepalSportsTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
    }
    
    // Check if on mobile and adjust UI
    adjustForMobile();
}

// Load a content unit
function loadUnit(unitId) {
    if (!appData.units[unitId]) {
        unitId = 'home';
    }
    
    currentUnit = unitId;
    
    const unit = appData.units[unitId];
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.unit === unitId) {
            link.classList.add('active');
        }
    });
    
    // Create unit HTML
    const unitHTML = `
        <div class="unit-card">
            <div class="unit-header">
                <i class="${unit.icon}"></i>
                <h2 class="unit-title">${unit.title}</h2>
            </div>
            <div class="unit-content">
                ${unit.content}
            </div>
        </div>
    `;
    
    // Inject into content area
    contentArea.innerHTML = unitHTML;
    
    // If loading QA section, populate questions
    if (unitId === 'qa-section') {
        loadQAQuestions();
    }
    
    // Add additional styles if not already added
    if (!document.getElementById('additional-styles')) {
        const styleEl = document.createElement('div');
        styleEl.id = 'additional-styles';
        styleEl.innerHTML = additionalStyles;
        document.head.appendChild(styleEl.firstChild);
    }
    
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
    }
}

// Load QA questions
function loadQAQuestions() {
    if (!qaContainer) return;
    
    let questionsHTML = '';
    
    appData.qaDatabase.forEach(qa => {
        questionsHTML += `
            <div class="question-card" data-id="${qa.id}">
                <div class="question-header">
                    <div class="question-text">${qa.question}</div>
                    <button class="question-toggle">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="answer-content" id="answer-${qa.id}">
                    <p>${qa.answer}</p>
                    <div class="qa-actions">
                        <button class="qa-action like-btn" data-id="${qa.id}">
                            <i class="fas fa-thumbs-up"></i> मनपर्यो (${qa.likes})
                        </button>
                        <button class="qa-action view-btn" data-id="${qa.id}">
                            <i class="fas fa-eye"></i> हेराइ (${qa.views})
                        </button>
                        <span class="qa-category">श्रेणी: ${qa.category}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    qaContainer.innerHTML = questionsHTML;
    
    // Add event listeners to question cards
    document.querySelectorAll('.question-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.qa-action')) {
                const id = this.dataset.id;
                const answer = document.getElementById(`answer-${id}`);
                const icon = this.querySelector('.question-toggle i');
                
                answer.classList.toggle('show');
                
                if (answer.classList.contains('show')) {
                    icon.className = 'fas fa-chevron-up';
                    // Increment view count
                    const qa = appData.qaDatabase.find(q => q.id == id);
                    if (qa) {
                        qa.views++;
                        this.querySelector('.view-btn').innerHTML = `<i class="fas fa-eye"></i> हेराइ (${qa.views})`;
                    }
                } else {
                    icon.className = 'fas fa-chevron-down';
                }
            }
        });
    });
    
    // Add event listeners to like buttons
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const qa = appData.qaDatabase.find(q => q.id == id);
            
            if (qa) {
                qa.likes++;
                this.innerHTML = `<i class="fas fa-thumbs-up"></i> मनपर्यो (${qa.likes})`;
                
                // Update trending questions if needed
                updateTrendingQuestion(id, qa.likes, qa.views);
            }
        });
    });
}

// Load trending questions for sidebar
function loadTrendingQuestions() {
    if (!trendingQuestions) return;
    
    let trendingHTML = '';
    
    appData.trendingQuestions.forEach(tq => {
        const qa = appData.qaDatabase.find(q => q.id === tq.id);
        if (qa) {
            trendingHTML += `
                <div class="trending-question" data-id="${qa.id}">
                    ${qa.question}
                </div>
            `;
        }
    });
    
    trendingQuestions.innerHTML = trendingHTML;
    
    // Add click events to trending questions
    document.querySelectorAll('.trending-question').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.dataset.id;
            
            // Switch to QA section
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('[data-unit="qa-section"]').classList.add('active');
            
            loadUnit('qa-section');
            
            // Scroll to and expand the clicked question
            setTimeout(() => {
                const questionCard = document.querySelector(`.question-card[data-id="${id}"]`);
                if (questionCard) {
                    questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Expand the answer
                    const answer = document.getElementById(`answer-${id}`);
                    const icon = questionCard.querySelector('.question-toggle i');
                    
                    // Close all other answers first
                    document.querySelectorAll('.answer-content.show').forEach(ans => {
                        if (ans.id !== `answer-${id}`) {
                            ans.classList.remove('show');
                            ans.closest('.question-card').querySelector('.question-toggle i').className = 'fas fa-chevron-down';
                        }
                    });
                    
                    answer.classList.add('show');
                    icon.className = 'fas fa-chevron-up';
                    
                    // Increment view count
                    const qa = appData.qaDatabase.find(q => q.id == id);
                    if (qa) {
                        qa.views++;
                        questionCard.querySelector('.view-btn').innerHTML = `<i class="fas fa-eye"></i> हेराइ (${qa.views})`;
                    }
                }
            }, 100);
        });
    });
}

// Update trending questions when a question gets more engagement
function updateTrendingQuestion(id, likes, views) {
    const engagementScore = likes * 2 + views;
    
    // Check if this question should be in trending
    const trendingIds = appData.trendingQuestions.map(tq => tq.id);
    
    if (!trendingIds.includes(id)) {
        // Find the lowest trending question
        let lowestScore = Infinity;
        let lowestIndex = -1;
        
        appData.trendingQuestions.forEach((tq, index) => {
            const qa = appData.qaDatabase.find(q => q.id === tq.id);
            if (qa) {
                const score = qa.likes * 2 + qa.views;
                if (score < lowestScore) {
                    lowestScore = score;
                    lowestIndex = index;
                }
            }
        });
        
        // Replace if this question has higher engagement
        if (engagementScore > lowestScore && lowestIndex !== -1) {
            appData.trendingQuestions[lowestIndex] = { id: id, views: views };
            loadTrendingQuestions();
        }
    }
}

// Set up event listeners
function setupEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const unitId = this.dataset.unit;
            loadUnit(unitId);
        });
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Search functionality
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Submit question
    if (submitQuestion && questionInput) {
        submitQuestion.addEventListener('click', submitNewQuestion);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.mobile-menu-btn') &&
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', adjustForMobile);
}

// Toggle between light and dark theme
function toggleTheme() {
    if (currentTheme === 'light') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('nepalSportsTheme', currentTheme);
    
    updateThemeIcon();
}

// Update theme toggle icon
function updateThemeIcon() {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        alert('कृपया खोज्नका लागि केहि शब्द लेख्नुहोस्');
        return;
    }
    
    // Search in questions and answers
    const results = appData.qaDatabase.filter(qa => 
        qa.question.toLowerCase().includes(query) || 
        qa.answer.toLowerCase().includes(query) ||
        qa.category.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
        // Switch to QA section and filter
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('[data-unit="qa-section"]').classList.add('active');
        
        loadUnit('qa-section');
        
        // Filter questions to show only results
        setTimeout(() => {
            document.querySelectorAll('.question-card').forEach(card => {
                const id = card.dataset.id;
                const result = results.find(r => r.id == id);
                
                if (result) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show search results info
            const qaContainer = document.getElementById('qaContainer');
            if (qaContainer) {
                const resultsInfo = document.createElement('div');
                resultsInfo.className = 'search-results-info';
                resultsInfo.innerHTML = `
                    <p><strong>${results.length} वटा परिणाम</strong> "${query}" को लागि फेला पर्यो</p>
                    <button id="clearSearch" class="btn-primary">सबै प्रश्न हेर्नुहोस्</button>
                `;
                qaContainer.insertBefore(resultsInfo, qaContainer.firstChild);
                
                // Add event listener to clear search button
                document.getElementById('clearSearch').addEventListener('click', function() {
                    loadUnit('qa-section');
                    searchInput.value = '';
                });
            }
        }, 100);
    } else {
        alert(`"${query}" को लागि कुनै परिणाम फेला परेन`);
    }
}

// Submit a new question
function submitNewQuestion() {
    const question = questionInput.value.trim();
    
    if (!question) {
        alert('कृपया प्रश्न लेख्नुहोस्');
        return;
    }
    
    if (question.length < 10) {
        alert('प्रश्न धेरै छोटो छ। कृपया विस्तृत प्रश्न लेख्नुहोस्');
        return;
    }
    
    // In a real app, this would send to a server
    // For demo, we'll just show a message
    alert('प्रश्न सफलतापूर्वक पेश गरियो! हाम्रो टिमले छिट्टै नै उत्तर दिनेछ।');
    
    // Clear the input
    questionInput.value = '';
    
    // For demo, add a temporary question
    const tempId = Date.now();
    const tempQA = {
        id: tempId,
        question: question,
        answer: 'यो प्रश्नको उत्तर हाम्रो विशेषज्ञ टिमले छिट्टै नै दिनेछन्। धन्यवाद!',
        category: 'नयाँ प्रश्न',
        likes: 0,
        views: 1
    };
    
    appData.qaDatabase.unshift(tempQA);
    
    // Reload QA section to show the new question
    if (currentUnit === 'qa-section') {
        loadQAQuestions();
        
        // Scroll to the new question
        setTimeout(() => {
            const newQuestion = document.querySelector(`.question-card[data-id="${tempId}"]`);
            if (newQuestion) {
                newQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                newQuestion.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    newQuestion.style.backgroundColor = '';
                }, 3000);
            }
        }, 100);
    }
}

// Adjust UI for mobile devices
function adjustForMobile() {
    if (window.innerWidth <= 768) {
        // Ensure mobile menu is hidden initially
        navMenu.classList.remove('active');
        
        // Show search container on mobile
        const searchContainer = document.getElementById('searchContainer');
        if (searchContainer) {
            searchContainer.style.display = 'block';
        }
    } else {
        // Show mobile menu on desktop
        navMenu.classList.remove('active');
        
        // Hide search container on desktop
        const searchContainer = document.getElementById('searchContainer');
        if (searchContainer) {
            searchContainer.style.display = 'none';
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add some sample user questions for demonstration
function addSampleUserQuestions() {
    const sampleQuestions = [
        {
            id: 1001,
            question: "नेपालले ओलम्पिकमा पहिलो पटक कहिले सहभागिता जनायो?",
            answer: "नेपालले ओलम्पिकमा पहिलो पटक सन् १९६४ मा टोकियो ओलम्पिकमा सहभागिता जनायो। त्यसबेला ६ जना खेलाडीले प्रतिनिधित्व गरेका थिए।",
            category: "olympics",
            likes: 24,
            views: 67
        },
        {
            id: 1002,
            question: "नेपाली महिला फुटबल टिमले पहिलो अन्तर्राष्ट्रिय जित कहिले हासिल गर्यो?",
            answer: "नेपाली महिला फुटबल टिमले पहिलो अन्तर्राष्ट्रिय जित सन् १९८६ मा भारतविरुद्ध हासिल गरेको थियो।",
            category: "football",
            likes: 31,
            views: 89
        }
    ];
    
    // Add sample questions to database
    sampleQuestions.forEach(q => {
        if (!appData.qaDatabase.find(existing => existing.id === q.id)) {
            appData.qaDatabase.push(q);
        }
    });
}

// Call this function to add sample questions
addSampleUserQuestions();