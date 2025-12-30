// app.js - Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const unitsContainer = document.getElementById('unitsContainer');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const unitSelect = document.getElementById('unitSelect');
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.querySelector('.theme-toggle');
    const prevBtn = document.getElementById('prevUnit');
    const nextBtn = document.getElementById('nextUnit');
    const currentUnitDisplay = document.getElementById('currentUnitDisplay');
    const noResults = document.getElementById('noResults');
    const totalUnits = document.getElementById('totalUnits');
    const totalCards = document.getElementById('totalCards');
    
    // State Variables
    let currentUnitId = 1;
    let filteredUnits = [...unitsData];
    let searchTerm = '';
    let selectedUnitFilter = 'all';
    let isDarkTheme = false;
    
    // Initialize the application
    function init() {
        populateUnitSelect();
        renderUnits();
        updateStats();
        setupEventListeners();
        updateNavigationButtons();
        setInitialTheme();
    }
    
    // Populate unit select dropdown
    function populateUnitSelect() {
        unitSelect.innerHTML = '<option value="all">सबै इकाईहरू</option>';
        
        unitsData.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit.id;
            option.textContent = `${unit.id}. ${unit.title}`;
            unitSelect.appendChild(option);
        });
    }
    
    // Render units based on current filter and search
    function renderUnits() {
        unitsContainer.innerHTML = '';
        
        if (filteredUnits.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        filteredUnits.forEach(unit => {
            const unitSection = createUnitSection(unit);
            unitsContainer.appendChild(unitSection);
        });
        
        // Update current unit display if showing single unit
        if (selectedUnitFilter !== 'all' && filteredUnits.length > 0) {
            currentUnitDisplay.textContent = `इकाई ${filteredUnits[0].id}`;
        } else {
            currentUnitDisplay.textContent = `सबै इकाईहरू`;
        }
    }
    
    // Create a unit section element
    function createUnitSection(unit) {
        const unitSection = document.createElement('div');
        unitSection.className = 'unit-section';
        unitSection.setAttribute('data-unit-id', unit.id);
        
        const unitHeader = document.createElement('div');
        unitHeader.className = 'unit-header';
        
        const unitTitle = document.createElement('h2');
        unitTitle.className = 'unit-title';
        unitTitle.textContent = unit.title;
        
        const unitNumber = document.createElement('div');
        unitNumber.className = 'unit-number';
        unitNumber.textContent = `इकाई ${unit.id}`;
        
        unitHeader.appendChild(unitTitle);
        unitHeader.appendChild(unitNumber);
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container';
        
        unit.cards.forEach(card => {
            const cardElement = createCardElement(card);
            cardsContainer.appendChild(cardElement);
        });
        
        unitSection.appendChild(unitHeader);
        unitSection.appendChild(cardsContainer);
        
        return unitSection;
    }
    
    // Create a card element
    function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        
        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card-title';
        
        const icon = document.createElement('i');
        icon.className = card.icon;
        
        const titleText = document.createElement('span');
        titleText.textContent = card.title;
        
        cardTitle.appendChild(icon);
        cardTitle.appendChild(titleText);
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardContent.innerHTML = card.content;
        
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        
        const cardId = document.createElement('span');
        cardId.textContent = `कार्ड ${card.id}`;
        
        const cardInfo = document.createElement('span');
        cardInfo.innerHTML = `<i class="fas fa-info-circle"></i> जानकारी`;
        
        cardFooter.appendChild(cardId);
        cardFooter.appendChild(cardInfo);
        
        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardContent);
        cardElement.appendChild(cardFooter);
        
        return cardElement;
    }
    
    // Filter units based on search term and unit filter
    function filterUnits() {
        filteredUnits = unitsData.filter(unit => {
            // Filter by unit selection
            if (selectedUnitFilter !== 'all' && unit.id.toString() !== selectedUnitFilter) {
                return false;
            }
            
            // If no search term, return true
            if (!searchTerm.trim()) {
                return true;
            }
            
            // Search in unit title and subtitle
            const unitText = `${unit.title} ${unit.subtitle}`.toLowerCase();
            if (unitText.includes(searchTerm.toLowerCase())) {
                return true;
            }
            
            // Search in card titles and content
            const hasMatchingCard = unit.cards.some(card => {
                const cardText = `${card.title} ${card.content}`.toLowerCase();
                return cardText.includes(searchTerm.toLowerCase());
            });
            
            return hasMatchingCard;
        });
        
        renderUnits();
        updateStats();
        updateNavigationButtons();
    }
    
    // Update statistics
    function updateStats() {
        let totalCardsCount = 0;
        filteredUnits.forEach(unit => {
            totalCardsCount += unit.cards.length;
        });
        
        totalUnits.textContent = `${filteredUnits.length} इकाईहरू`;
        totalCards.textContent = `${totalCardsCount} कार्डहरू`;
    }
    
    // Update navigation buttons state
    function updateNavigationButtons() {
        if (selectedUnitFilter === 'all') {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }
        
        const currentId = parseInt(selectedUnitFilter);
        prevBtn.disabled = currentId <= 1;
        nextBtn.disabled = currentId >= unitsData.length;
        
        // Update current unit id for navigation
        currentUnitId = currentId;
    }
    
    // Navigate to previous unit
    function navigateToPreviousUnit() {
        if (currentUnitId > 1) {
            selectedUnitFilter = (currentUnitId - 1).toString();
            unitSelect.value = selectedUnitFilter;
            filterUnits();
        }
    }
    
    // Navigate to next unit
    function navigateToNextUnit() {
        if (currentUnitId < unitsData.length) {
            selectedUnitFilter = (currentUnitId + 1).toString();
            unitSelect.value = selectedUnitFilter;
            filterUnits();
        }
    }
    
    // Set initial theme based on user preference
    function setInitialTheme() {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        isDarkTheme = prefersDarkScheme.matches;
        applyTheme();
    }
    
    // Toggle theme
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        applyTheme();
    }
    
    // Apply current theme
    function applyTheme() {
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-moon';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-sun';
        }
        
        // Save preference to localStorage
        localStorage.setItem('themePreference', isDarkTheme ? 'dark' : 'light');
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', function() {
            searchTerm = this.value.trim();
            
            // Show/hide clear button
            if (searchTerm) {
                clearSearchBtn.classList.add('active');
            } else {
                clearSearchBtn.classList.remove('active');
            }
            
            filterUnits();
        });
        
        // Clear search button
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            searchTerm = '';
            clearSearchBtn.classList.remove('active');
            filterUnits();
            searchInput.focus();
        });
        
        // Unit select filter
        unitSelect.addEventListener('change', function() {
            selectedUnitFilter = this.value;
            filterUnits();
        });
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Navigation buttons
        prevBtn.addEventListener('click', navigateToPreviousUnit);
        nextBtn.addEventListener('click', navigateToNextUnit);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + F to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                searchInput.focus();
            }
            
            // Escape to clear search
            if (e.key === 'Escape' && searchInput.value) {
                searchInput.value = '';
                searchTerm = '';
                clearSearchBtn.classList.remove('active');
                filterUnits();
            }
            
            // Arrow keys for navigation when a single unit is selected
            if (selectedUnitFilter !== 'all') {
                if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
                    navigateToPreviousUnit();
                } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
                    navigateToNextUnit();
                }
            }
        });
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            isDarkTheme = savedTheme === 'dark';
            applyTheme();
        }
    }
    
    // Initialize the app
    init();
    
    // Expose functions to global scope for debugging if needed
    window.app = {
        filterUnits,
        renderUnits,
        navigateToPreviousUnit,
        navigateToNextUnit,
        toggleTheme,
        unitsData
    };
});