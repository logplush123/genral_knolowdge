// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Print Functionality
    document.getElementById('printBtn').addEventListener('click', () => {
        window.print();
    });
    
    // Scroll to Top
    document.getElementById('scrollTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show Table of Contents
    document.getElementById('showToc').addEventListener('click', () => {
        document.querySelector('.toc-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    const contentContainer = document.getElementById('contentContainer');
    const tableOfContents = document.getElementById('tableOfContents');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const resultCount = document.getElementById('resultCount');
    
    // Clear search
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        filterContent('');
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        filterContent(e.target.value);
    });
    
    // Create Table of Contents
    function createTableOfContents() {
        tableOfContents.innerHTML = '';
        
        appData.units.forEach((unit, index) => {
            const tocCard = document.createElement('div');
            tocCard.className = 'toc-card';
            tocCard.dataset.unitIndex = index;
            
            const iconClass = getIconForUnit(unit.title);
            
            tocCard.innerHTML = `
                <h3><i class="${iconClass}"></i> ${unit.title}</h3>
                <p>${unit.description}</p>
                <div class="toc-meta">
                    <small>${unit.sections.length} खण्डहरू</small>
                </div>
            `;
            
            tocCard.addEventListener('click', () => {
                // Remove active class from all cards
                document.querySelectorAll('.toc-card').forEach(card => {
                    card.classList.remove('active');
                });
                
                // Add active class to clicked card
                tocCard.classList.add('active');
                
                // Scroll to the unit
                const unitElement = document.getElementById(`unit-${index}`);
                if (unitElement) {
                    unitElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Expand the unit if it's collapsed
                    const unitCard = unitElement.querySelector('.unit-card');
                    if (!unitCard.classList.contains('expanded')) {
                        unitCard.classList.add('expanded');
                    }
                }
            });
            
            tableOfContents.appendChild(tocCard);
        });
    }
    
    // Create Content Sections
    function createContentSections() {
        contentContainer.innerHTML = '';
        
        appData.units.forEach((unit, unitIndex) => {
            const unitElement = document.createElement('div');
            unitElement.className = 'unit-container';
            unitElement.id = `unit-${unitIndex}`;
            
            const iconClass = getIconForUnit(unit.title);
            
            unitElement.innerHTML = `
                <div class="unit-card">
                    <div class="unit-header">
                        <h2><i class="${iconClass}"></i> ${unit.title}</h2>
                        <div class="toggle-icon">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="unit-content">
                        <div class="unit-description">
                            <p>${unit.description}</p>
                        </div>
                        ${unit.sections.map((section, sectionIndex) => `
                            <div class="content-section" id="unit-${unitIndex}-section-${sectionIndex}">
                                <h3>${section.title}</h3>
                                ${section.content}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Add toggle functionality
            const unitHeader = unitElement.querySelector('.unit-header');
            const unitCard = unitElement.querySelector('.unit-card');
            
            unitHeader.addEventListener('click', () => {
                unitCard.classList.toggle('expanded');
            });
            
            contentContainer.appendChild(unitElement);
        });
    }
    
    // Filter content based on search
    function filterContent(searchTerm) {
        const searchLower = searchTerm.toLowerCase().trim();
        let totalResults = 0;
        
        if (!searchLower) {
            // Show all content
            document.querySelectorAll('.unit-container').forEach(unit => {
                unit.style.display = 'block';
            });
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'block';
            });
            resultCount.textContent = 'सबै जानकारी उपलब्ध';
            return;
        }
        
        // Hide all units initially
        document.querySelectorAll('.unit-container').forEach(unit => {
            unit.style.display = 'none';
        });
        
        // Search through units and sections
        appData.units.forEach((unit, unitIndex) => {
            const unitElement = document.getElementById(`unit-${unitIndex}`);
            let unitHasMatch = false;
            let sectionMatches = 0;
            
            // Check unit title and description
            if (unit.title.toLowerCase().includes(searchLower) || 
                unit.description.toLowerCase().includes(searchLower)) {
                unitHasMatch = true;
            }
            
            // Check each section
            unit.sections.forEach((section, sectionIndex) => {
                const sectionElement = unitElement.querySelector(`#unit-${unitIndex}-section-${sectionIndex}`);
                const sectionText = section.title + ' ' + section.content;
                
                if (sectionText.toLowerCase().includes(searchLower)) {
                    unitHasMatch = true;
                    sectionMatches++;
                    sectionElement.style.display = 'block';
                    
                    // Highlight matching text
                    highlightText(sectionElement, searchLower);
                } else {
                    sectionElement.style.display = 'none';
                }
            });
            
            // Show unit if it has matches
            if (unitHasMatch) {
                unitElement.style.display = 'block';
                totalResults++;
                
                // Expand the unit
                const unitCard = unitElement.querySelector('.unit-card');
                if (!unitCard.classList.contains('expanded')) {
                    unitCard.classList.add('expanded');
                }
                
                // Highlight the unit
                unitCard.classList.add('highlighted');
                setTimeout(() => {
                    unitCard.classList.remove('highlighted');
                }, 2000);
            }
        });
        
        resultCount.textContent = `${totalResults} वटा इकाई फेला पर्यो`;
    }
    
    // Highlight matching text in search results
    function highlightText(element, searchTerm) {
        const text = element.innerHTML;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlighted = text.replace(regex, '<mark class="search-highlight">$1</mark>');
        element.innerHTML = highlighted;
    }
    
    // Get appropriate icon for each unit
    function getIconForUnit(unitTitle) {
        const iconMap = {
            'भौगोलिक': 'fas fa-globe-asia',
            'प्राकृतिक': 'fas fa-mountain',
            'हिमशिखर': 'fas fa-mountain',
            'नदीनाला': 'fas fa-water',
            'जनसंख्या': 'fas fa-users',
            'राजमार्ग': 'fas fa-road',
            'कीर्तिमान': 'fas fa-trophy',
            'सामान्य': 'fas fa-info-circle'
        };
        
        for (const [key, icon] of Object.entries(iconMap)) {
            if (unitTitle.includes(key)) {
                return icon;
            }
        }
        
        return 'fas fa-book';
    }
    
    // Initialize the app
    createTableOfContents();
    createContentSections();
    
    // Make first TOC card active
    const firstTocCard = document.querySelector('.toc-card');
    if (firstTocCard) {
        firstTocCard.classList.add('active');
    }
    
    // Make first unit expanded
    const firstUnitCard = document.querySelector('.unit-card');
    if (firstUnitCard) {
        firstUnitCard.classList.add('expanded');
    }
}