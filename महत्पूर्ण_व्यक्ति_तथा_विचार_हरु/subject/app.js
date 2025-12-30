// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mainContent = document.getElementById('mainContent');
    const tocList = document.getElementById('tocList');
    const tocToggle = document.getElementById('tocToggle');
    const closeToc = document.getElementById('closeToc');
    const tableOfContents = document.querySelector('.table-of-contents');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSectionEl = document.getElementById('currentSection');
    const totalSectionsEl = document.getElementById('totalSections');
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const loadingScreen = document.getElementById('loadingScreen');
    
    // State variables
    let currentSectionIndex = 0;
    let sections = [];
    let filteredSections = [];
    let isSearching = false;
    
    // Initialize the application
    function initApp() {
        // Show loading screen
        loadingScreen.classList.remove('hidden');
        
        // Load sections from units.js
        sections = window.sectionsData || [];
        filteredSections = [...sections];
        
        // Set total sections count
        totalSectionsEl.textContent = sections.length;
        
        // Generate table of contents
        generateTableOfContents();
        
        // Generate content sections
        generateContentSections();
        
        // Set initial active section
        setActiveSection(0);
        
        // Hide loading screen after a short delay
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 800);
        
        // Initialize event listeners
        initEventListeners();
    }
    
    // Generate table of contents
    function generateTableOfContents() {
        tocList.innerHTML = '';
        
        filteredSections.forEach((section, index) => {
            const tocItem = document.createElement('li');
            tocItem.className = 'toc-item';
            if (index === currentSectionIndex) tocItem.classList.add('active');
            tocItem.textContent = section.title;
            tocItem.dataset.index = index;
            
            tocItem.addEventListener('click', () => {
                setActiveSection(index);
                closeTableOfContents();
            });
            
            tocList.appendChild(tocItem);
        });
    }
    
    // Generate content sections
    function generateContentSections() {
        mainContent.innerHTML = '';
        
        filteredSections.forEach((section, index) => {
            const sectionEl = document.createElement('section');
            sectionEl.className = 'section';
            sectionEl.id = `section-${index}`;
            sectionEl.dataset.index = index;
            
            // Create section header
            const headerHtml = `
                <div class="section-header">
                    <h2>${section.title}</h2>
                    ${section.subtitle ? `<div class="section-subtitle">${section.subtitle}</div>` : ''}
                    <div class="section-meta">
                        ${section.period ? `<span><i class="fas fa-calendar-alt"></i> ${section.period}</span>` : ''}
                        ${section.category ? `<span><i class="fas fa-tag"></i> ${section.category}</span>` : ''}
                    </div>
                </div>
            `;
            
            // Create section body
            let bodyHtml = '<div class="section-body">';
            
            // Add introduction if exists
            if (section.introduction) {
                bodyHtml += `<p>${section.introduction}</p>`;
            }
            
            // Add content sections
            if (section.content) {
                section.content.forEach(contentItem => {
                    if (contentItem.type === 'paragraph') {
                        bodyHtml += `<p>${contentItem.text}</p>`;
                    } else if (contentItem.type === 'heading') {
                        bodyHtml += `<h3>${contentItem.text}</h3>`;
                    } else if (contentItem.type === 'subheading') {
                        bodyHtml += `<h4>${contentItem.text}</h4>`;
                    } else if (contentItem.type === 'list') {
                        bodyHtml += `<ul>`;
                        contentItem.items.forEach(item => {
                            bodyHtml += `<li>${item}</li>`;
                        });
                        bodyHtml += `</ul>`;
                    } else if (contentItem.type === 'table') {
                        bodyHtml += `<table class="info-table">`;
                        bodyHtml += `<thead><tr><th>${contentItem.headers[0]}</th><th>${contentItem.headers[1]}</th></tr></thead>`;
                        bodyHtml += `<tbody>`;
                        contentItem.rows.forEach(row => {
                            bodyHtml += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
                        });
                        bodyHtml += `</tbody></table>`;
                    } else if (contentItem.type === 'quote') {
                        bodyHtml += `<div class="quote">${contentItem.text}</div>`;
                    } else if (contentItem.type === 'highlight') {
                        bodyHtml += `<div class="highlight-box"><p>${contentItem.text}</p></div>`;
                    }
                });
            }
            
            // Add key facts if exists
            if (section.keyFacts && section.keyFacts.length > 0) {
                bodyHtml += `<h3>मुख्य तथ्यहरू</h3>`;
                bodyHtml += `<ul>`;
                section.keyFacts.forEach(fact => {
                    bodyHtml += `<li>${fact}</li>`;
                });
                bodyHtml += `</ul>`;
            }
            
            // Add legacy if exists
            if (section.legacy) {
                bodyHtml += `<h3>विरासत</h3>`;
                bodyHtml += `<p>${section.legacy}</p>`;
            }
            
            bodyHtml += '</div>';
            
            sectionEl.innerHTML = headerHtml + bodyHtml;
            mainContent.appendChild(sectionEl);
        });
    }
    
    // Set active section
    function setActiveSection(index) {
        // Validate index
        if (index < 0 || index >= filteredSections.length) return;
        
        // Update current section index
        currentSectionIndex = index;
        
        // Remove active class from all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all TOC items
        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current section
        const currentSection = document.getElementById(`section-${index}`);
        if (currentSection) {
            currentSection.classList.add('active');
            
            // Scroll to top of the section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Add active class to current TOC item
        const currentTocItem = document.querySelector(`.toc-item[data-index="${index}"]`);
        if (currentTocItem) {
            currentTocItem.classList.add('active');
        }
        
        // Update page indicator
        currentSectionEl.textContent = index + 1;
        
        // Update button states
        updateNavigationButtons();
    }
    
    // Update navigation buttons
    function updateNavigationButtons() {
        prevBtn.disabled = currentSectionIndex === 0;
        nextBtn.disabled = currentSectionIndex === filteredSections.length - 1;
    }
    
    // Toggle table of contents
    function toggleTableOfContents() {
        tableOfContents.classList.toggle('active');
    }
    
    // Close table of contents
    function closeTableOfContents() {
        tableOfContents.classList.remove('active');
    }
    
    // Navigate to previous section
    function goToPrevSection() {
        if (currentSectionIndex > 0) {
            setActiveSection(currentSectionIndex - 1);
        }
    }
    
    // Navigate to next section
    function goToNextSection() {
        if (currentSectionIndex < filteredSections.length - 1) {
            setActiveSection(currentSectionIndex + 1);
        }
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        
        // Update theme toggle icon
        const themeIcon = themeToggle.querySelector('i');
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        // Save theme preference to localStorage
        localStorage.setItem('appTheme', newTheme);
    }
    
    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Reset to all sections
            filteredSections = [...sections];
            isSearching = false;
        } else {
            // Filter sections based on search term
            filteredSections = sections.filter(section => {
                // Search in title
                if (section.title.toLowerCase().includes(searchTerm)) return true;
                
                // Search in subtitle
                if (section.subtitle && section.subtitle.toLowerCase().includes(searchTerm)) return true;
                
                // Search in introduction
                if (section.introduction && section.introduction.toLowerCase().includes(searchTerm)) return true;
                
                // Search in content
                if (section.content) {
                    for (const contentItem of section.content) {
                        if (contentItem.text && contentItem.text.toLowerCase().includes(searchTerm)) return true;
                        if (contentItem.items) {
                            for (const item of contentItem.items) {
                                if (item.toLowerCase().includes(searchTerm)) return true;
                            }
                        }
                        if (contentItem.rows) {
                            for (const row of contentItem.rows) {
                                for (const cell of row) {
                                    if (cell.toLowerCase().includes(searchTerm)) return true;
                                }
                            }
                        }
                    }
                }
                
                // Search in key facts
                if (section.keyFacts) {
                    for (const fact of section.keyFacts) {
                        if (fact.toLowerCase().includes(searchTerm)) return true;
                    }
                }
                
                // Search in legacy
                if (section.legacy && section.legacy.toLowerCase().includes(searchTerm)) return true;
                
                return false;
            });
            
            isSearching = true;
        }
        
        // Reset to first section
        currentSectionIndex = 0;
        
        // Regenerate TOC and content
        generateTableOfContents();
        generateContentSections();
        setActiveSection(0);
    }
    
    // Initialize event listeners
    function initEventListeners() {
        // TOC toggle
        tocToggle.addEventListener('click', toggleTableOfContents);
        closeToc.addEventListener('click', closeTableOfContents);
        
        // Navigation
        prevBtn.addEventListener('click', goToPrevSection);
        nextBtn.addEventListener('click', goToNextSection);
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Search
        searchInput.addEventListener('input', performSearch);
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Left arrow key for previous section
            if (e.key === 'ArrowLeft' && !searchInput.matches(':focus')) {
                e.preventDefault();
                goToPrevSection();
            }
            
            // Right arrow key for next section
            if (e.key === 'ArrowRight' && !searchInput.matches(':focus')) {
                e.preventDefault();
                goToNextSection();
            }
            
            // Escape key to close TOC
            if (e.key === 'Escape') {
                closeTableOfContents();
            }
            
            // Ctrl+F or Cmd+F to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                searchInput.focus();
            }
        });
        
        // Close TOC when clicking outside on mobile
        if (window.innerWidth <= 768) {
            document.addEventListener('click', (e) => {
                if (tableOfContents.classList.contains('active') && 
                    !tableOfContents.contains(e.target) && 
                    !tocToggle.contains(e.target)) {
                    closeTableOfContents();
                }
            });
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Close TOC on mobile when switching to desktop
            if (window.innerWidth > 768 && tableOfContents.classList.contains('active')) {
                closeTableOfContents();
            }
        });
    }
    
    // Load saved theme preference
    function loadThemePreference() {
        const savedTheme = localStorage.getItem('appTheme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            const themeIcon = themeToggle.querySelector('i');
            themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Initialize the application
    loadThemePreference();
    initApp();
    
    // Expose functions to global scope for debugging if needed
    window.app = {
        setActiveSection,
        goToPrevSection,
        goToNextSection,
        toggleTheme,
        performSearch,
        sections: () => sections,
        filteredSections: () => filteredSections
    };
});