// App Data and State
const appState = {
    currentSection: '2007-revolution',
    theme: 'light',
    searchQuery: '',
    searchResults: []
};

// App Content Data
const appContent = {
    sections: {
        '2007-revolution': {
            title: '२००७ सालको क्रान्ति',
            content: []
        },
        'elections': {
            title: 'निर्वाचन',
            content: []
        },
        'timeline': {
            title: 'समयरेखा',
            content: []
        },
        'parties': {
            title: 'राजनीतिक दल',
            content: []
        },
        'more': {
            title: 'थप जानकारी',
            content: []
        }
    }
};

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const showMoreButtons = document.querySelectorAll('.show-more-btn');
const scrollToTopBtn = document.getElementById('scrollToTop');
const shareAppBtn = document.getElementById('shareApp');
const searchResultsSection = document.getElementById('search-results');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const resultCount = document.getElementById('resultCount');

// Searchable content for the app
const searchableContent = [
    {
        id: 1,
        title: '२००७ क्रान्ति',
        content: 'नेपालको राजनीतिक इतिहासमा २००७ सालको क्रान्तिबाट नेपालमा प्रजातन्त्रको स्थापना भएको थियो।',
        section: '2007-revolution',
        keywords: ['२००७', 'क्रान्ति', 'प्रजातन्त्र', 'स्थापना', 'राजा त्रिभुवन']
    },
    {
        id: 2,
        title: 'दिल्ली सम्झौता',
        content: 'तत्कालीन भारतीय प्रधानमन्त्री जवाहरलाल नेहरुको मध्यस्थतामा राजा, काङ्ग्रेस र राणाहरूका बीचमा त्रिपक्षीय सम्झौता भएको।',
        section: '2007-revolution',
        keywords: ['दिल्ली सम्झौता', 'नेहरु', 'त्रिपक्षीय', 'सम्झौता']
    },
    {
        id: 3,
        title: 'प्रथम आम निर्वाचन',
        content: 'वि.सं. २०१५ फागुन ७ गतेदेखि २०१६ वैशाखसम्म भएको। मतदाताहरूको संख्या ४२,४६,४६८ भएकोमा १७,९१,३८१ (४२.१६ प्रतिशत) मतदाताहरूले मात्र मतदानमा भाग लिएका।',
        section: 'elections',
        keywords: ['प्रथम आम निर्वाचन', '२०१५', 'मतदान', 'नेपाली काङ्ग्रेस', 'वी.पी. कोइराला']
    },
    {
        id: 4,
        title: 'वी.पी. कोइरालाको सरकार',
        content: 'वीपी कोइरालाको प्रधानमन्त्रित्वमा गठित सरकारले १८ महिना समयसम्म सरकारमा रहेको। बिर्ता उन्मूलन ऐन २०१६ लागू गरी बिर्ताप्रथाको अन्त्य, भूमिसम्बन्धी ऐन २०१६ लागू गरी जमिन्दारी प्रथाको अन्त्य।',
        section: 'more',
        keywords: ['वी.पी. कोइराला', 'बिर्ता उन्मूलन', 'जमिन्दारी', 'त्रिभुवन विश्वविद्यालय']
    },
    {
        id: 5,
        title: 'जनमत संग्रह २०३७',
        content: 'बालिग मताधिकारको आधारमा नेपालभर गोप्य जनमत लिइने कुराको घोषणा राजा वीरेन्द्रबाट २०३६ जेष्ठ १० मा। पञ्चायत व्यवस्थाले २४,३३,४५२ मत र बहुदल पक्षले २०,०७,९६५ मत प्राप्त।',
        section: 'timeline',
        keywords: ['जनमत संग्रह', '२०३७', 'राजा वीरेन्द्र', 'पञ्चायत', 'बहुदल']
    },
    {
        id: 6,
        title: 'जनआन्दोलन २०४६',
        content: '२०४६ मा नेपाली काङ्ग्रेस र संयुक्त वाममोर्चा मिलेर संयुक्त जनआन्दोलन घोषणा। जनआन्दोलनको नेतृत्व नेता गणेशमान सिंहले गरेका।',
        section: 'timeline',
        keywords: ['जनआन्दोलन', '२०४६', 'गणेशमान सिंह', 'बहुदलीय', 'प्रजातन्त्र']
    },
    {
        id: 7,
        title: 'जनआन्दोलन २ (२०६२/६३)',
        content: 'सात राजनीतिक दल मिलेर २०६२ जेठ ८ गते जनआन्दोलन २ को सुरुवात। आन्दोलनले उग्र रूप लिएपछि राजा ज्ञानेन्द्रबाट वैशाख ८ गते शाही घोषणा।',
        section: 'timeline',
        keywords: ['जनआन्दोलन २', '२०६२', '२०६३', 'राजा ज्ञानेन्द्र', 'सात दल']
    },
    {
        id: 8,
        title: 'शान्ति सम्झौता',
        content: 'नेपाल सरकार र नेकपा माओबादीले ५ मंसिर २०६३ मा काठमाडौँमा एक विस्तृत शान्ति सम्झौता हस्ताक्षर गरी वि.सं. २०५२ फागुन १ गतेबाट सुरु भएको माओबादी जनयुद्धको अन्त्य भएको घोषणा।',
        section: 'timeline',
        keywords: ['शान्ति सम्झौता', '२०६३', 'माओवादी', 'जनयुद्ध', 'पुष्पकमल दाहाल']
    },
    {
        id: 9,
        title: 'प्रजापरिषद्',
        content: 'प्रजातन्त्र स्थापनाभन्दा अघि खुलेको राजनीतिक संगठन। स्थापना वर्ष: १९९३ जेष्ठ २०। वि.सं. २०७४ कार्तिक २३ गते नेकपा एमालेमा विलय भएको।',
        section: 'parties',
        keywords: ['प्रजापरिषद्', '१९९३', 'राजनीतिक दल', 'एमाले']
    },
    {
        id: 10,
        title: 'नेपाली काङ्ग्रेस',
        content: 'स्थापना वर्ष: २००६ चैत्र। नेता: श्री मातृकाप्रसाद कोइराला (बाह्य), श्री विश्वेश्वर प्रसाद कोइराला (आन्तरिक)।',
        section: 'parties',
        keywords: ['नेपाली काङ्ग्रेस', '२००६', 'मातृकाप्रसाद कोइराला', 'विश्वेश्वरप्रसाद कोइराला']
    },
    {
        id: 11,
        title: 'नेपाल कम्युनिष्ट पार्टी',
        content: 'स्थापना: सन् १९४९ अप्रिल २२ (वि.सं. २०१० वैशाख)। संस्थापक महासचिव: पुष्पलाल श्रेष्ठ।',
        section: 'parties',
        keywords: ['नेपाल कम्युनिष्ट पार्टी', '१९४९', 'पुष्पलाल श्रेष्ठ', 'कम्युनिष्ट']
    },
    {
        id: 12,
        title: 'स्थानीय तह निर्वाचन २०७९',
        content: 'स्थानीय तहको निर्वाचन दोस्रो पटक वि.सं. २०७९ वैशाख ३० गते एकै चरणमा सम्पन्न। कुल १ करोड ७७ लाख ३३ हजार ७२३ मतदाता थिए।',
        section: 'more',
        keywords: ['स्थानीय तह', 'निर्वाचन', '२०७९', 'मतदाता']
    },
    {
        id: 13,
        title: 'नेपाल-चीन सम्बन्ध',
        content: 'सगरमाथा/चोमोलोङ्‌मा विवाद: वी.पी. कोइरालाको दावीपछि चीनले सगरमाथा नेपालमा परेको नक्सालाई मान्यता दिए।',
        section: 'more',
        keywords: ['नेपाल-चीन', 'सगरमाथा', 'चोमोलोङ्‌मा', 'वी.पी. कोइराला']
    }
];

// Initialize the app
function initApp() {
    // Set initial theme
    const savedTheme = localStorage.getItem('nepalHistoryTheme');
    if (savedTheme) {
        appState.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', appState.theme);
        updateThemeIcon();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize navigation
    setActiveSection(appState.currentSection);
    
    // Set current year in footer if needed
    // setCurrentYear();
}

// Set up all event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            setActiveSection(sectionId);
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    clearSearch.addEventListener('click', clearSearchInput);
    
    // Show more buttons
    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            toggleMoreContent(targetId, button);
        });
    });
    
    // Scroll to top
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Share app
    shareAppBtn.addEventListener('click', shareApp);
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('#search-results')) {
            if (appState.searchQuery) {
                // Keep search results open if there's a query
                return;
            }
            hideSearchResults();
        }
    });
}

// Set active section
function setActiveSection(sectionId) {
    // Update state
    appState.currentSection = sectionId;
    
    // Update navigation buttons
    navButtons.forEach(button => {
        if (button.getAttribute('data-section') === sectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Show active section
    contentSections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    // Hide search results if they're showing
    hideSearchResults();
    
    // Clear search
    clearSearchInput();
    
    // Scroll to top of content
    document.querySelector('.content-area').scrollTop = 0;
}

// Toggle theme
function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', appState.theme);
    localStorage.setItem('nepalHistoryTheme', appState.theme);
    updateThemeIcon();
}

// Update theme icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (appState.theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Handle search
function handleSearch(e) {
    const query = e.target.value.trim();
    appState.searchQuery = query;
    
    if (query.length === 0) {
        clearSearchInput();
        return;
    }
    
    // Show clear button
    clearSearch.style.display = 'flex';
    
    // Perform search
    performSearch(query);
}

// Perform search
function performSearch(query) {
    const searchTerm = query.toLowerCase();
    
    // Filter searchable content
    appState.searchResults = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const contentMatch = item.content.toLowerCase().includes(searchTerm);
        const keywordMatch = item.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTerm)
        );
        
        return titleMatch || contentMatch || keywordMatch;
    });
    
    // Display results
    displaySearchResults();
}

// Display search results
function displaySearchResults() {
    // Show search results section
    searchResultsSection.classList.remove('hidden');
    
    // Hide other sections
    contentSections.forEach(section => {
        if (section.id !== 'search-results') {
            section.classList.remove('active');
        }
    });
    
    // Update result count
    resultCount.textContent = `${appState.searchResults.length} नतिजा फेला पर्यो`;
    
    // Clear previous results
    searchResultsContainer.innerHTML = '';
    
    // Display results
    if (appState.searchResults.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-light);">कुनै नतिजा फेला परेन</h3>
                <p style="color: var(--text-light);">अन्य शब्दहरू प्रयोग गरेर खोज्नुहोस्</p>
            </div>
        `;
        return;
    }
    
    // Add each result
    appState.searchResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result-item';
        resultElement.innerHTML = `
            <div class="search-result-title">
                <i class="fas fa-file-alt"></i>
                ${result.title}
            </div>
            <div class="search-result-content">
                ${result.content.substring(0, 150)}...
            </div>
            <div class="search-result-section" data-section="${result.section}">
                ${appContent.sections[result.section].title}
            </div>
        `;
        
        // Add click event to navigate to the section
        resultElement.addEventListener('click', () => {
            setActiveSection(result.section);
            // Highlight the search term in the section
            highlightSearchTerm(appState.searchQuery);
        });
        
        searchResultsContainer.appendChild(resultElement);
    });
}

// Highlight search term in active section
function highlightSearchTerm(term) {
    // Remove previous highlights
    const previousHighlights = document.querySelectorAll('.search-highlight');
    previousHighlights.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    if (!term) return;
    
    // Highlight in active section
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) return;
    
    const regex = new RegExp(`(${term})`, 'gi');
    highlightTextNodes(activeSection, regex);
}

// Recursive function to highlight text nodes
function highlightTextNodes(element, regex) {
    const childNodes = element.childNodes;
    
    for (const node of childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.match(regex)) {
            const span = document.createElement('span');
            span.className = 'search-highlight';
            span.style.backgroundColor = 'yellow';
            span.style.color = 'black';
            span.style.padding = '2px 0';
            
            const newHtml = node.textContent.replace(regex, '<mark>$1</mark>');
            span.innerHTML = newHtml;
            
            node.parentNode.replaceChild(span, node);
        } else if (node.nodeType === Node.ELEMENT_NODE && 
                   !['SCRIPT', 'STYLE', 'MARK', 'SEARCH-HIGHLIGHT'].includes(node.tagName)) {
            highlightTextNodes(node, regex);
        }
    }
}

// Hide search results
function hideSearchResults() {
    searchResultsSection.classList.add('hidden');
    
    // Show the active section again
    const activeSection = document.getElementById(appState.currentSection);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Clear search input
function clearSearchInput() {
    searchInput.value = '';
    appState.searchQuery = '';
    clearSearch.style.display = 'none';
    hideSearchResults();
    
    // Remove highlights
    const highlights = document.querySelectorAll('.search-highlight, mark');
    highlights.forEach(el => {
        const parent = el.parentNode;
        if (parent) {
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        }
    });
}

// Toggle more content
function toggleMoreContent(targetId, button) {
    const content = document.getElementById(targetId);
    const icon = button.querySelector('i');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.className = 'fas fa-chevron-up';
        button.innerHTML = '<i class="fas fa-chevron-up"></i> कम हेर्नुहोस्';
    } else {
        content.classList.add('hidden');
        icon.className = 'fas fa-chevron-down';
        button.innerHTML = '<i class="fas fa-chevron-down"></i> पूर्ण सूची हेर्नुहोस्';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Share app
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'LogPlus ',
            text: 'नेपालको इतिहास (२००७ सालदेखि हालसम्म) को जानकारी LogPlus app  यहाँ पाउन सकिन्छ।',
            url: 'https://play.google.com/store/apps/details?id=com.bikram.logplush&pcampaignid=web_share'

        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('लिङ्क क्लिपबोर्डमा कपी गरियो! साझा गर्नको लागि टाँस्नुहोस्।');
        });
    }
}

// Set current year in footer (if needed)
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        const nepaliYear = currentYear + 57; // Approximate conversion
        yearElement.textContent = nepaliYear;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);