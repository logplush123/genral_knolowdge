/**
 * app.js - Mobile Application Logic
 * मोबाइल अनुप्रयोग तर्क
 */

class NepalEventsApp {
    constructor() {
        // App State
        this.state = {
            currentUnit: 0,
            totalUnits: appData.units.length,
            theme: 'light',
            menuOpen: false,
            searchOpen: false,
            searchQuery: '',
            searchResults: []
        };
        
        // DOM Elements
        this.elements = {
            // Header
            menuBtn: document.getElementById('menuBtn'),
            themeBtn: document.getElementById('themeBtn'),
            searchBtn: document.getElementById('searchBtn'),
            
            // Menu
            sideMenu: document.getElementById('sideMenu'),
            closeMenu: document.getElementById('closeMenu'),
            menuList: document.getElementById('menuList'),
            
            // Search
            searchOverlay: document.getElementById('searchOverlay'),
            closeSearch: document.getElementById('closeSearch'),
            searchInput: document.getElementById('searchInput'),
            searchResults: document.getElementById('searchResults'),
            
            // Content
            contentContainer: document.getElementById('contentContainer'),
            
            // Navigation
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            currentUnit: document.getElementById('currentUnit'),
            totalUnitsBottom: document.getElementById('totalUnitsBottom'),
            totalUnits: document.getElementById('totalUnits'),
            
            // Footer
            appLogo: document.querySelector('.app-logo')
        };
        
        // Initialize app
        this.init();
    }
    
    // Initialize app
    init() {
        this.loadUserPreferences();
        this.setupEventListeners();
        this.createMenuItems();
        this.loadUnit(this.state.currentUnit);
        this.updateUI();
    }
    
    // Load user preferences from localStorage
    loadUserPreferences() {
        const savedTheme = localStorage.getItem('nepalEventsTheme');
        if (savedTheme) {
            this.state.theme = savedTheme;
            document.documentElement.setAttribute('data-theme', this.state.theme);
            this.updateThemeIcon();
        }
    }
    
    // Setup event listeners
    setupEventListeners() {
        // Menu buttons
        this.elements.menuBtn.addEventListener('click', () => this.toggleMenu());
        this.elements.closeMenu.addEventListener('click', () => this.toggleMenu());
        
        // Theme toggle
        this.elements.themeBtn.addEventListener('click', () => this.toggleTheme());
        
        // Search buttons
        this.elements.searchBtn.addEventListener('click', () => this.openSearch());
        this.elements.closeSearch.addEventListener('click', () => this.closeSearch());
        
        // Navigation buttons
        this.elements.prevBtn.addEventListener('click', () => this.previousUnit());
        this.elements.nextBtn.addEventListener('click', () => this.nextUnit());
        
        // Search input
        this.elements.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // ESC to close menu/search
            if (e.key === 'Escape') {
                if (this.state.menuOpen) this.toggleMenu();
                if (this.state.searchOpen) this.closeSearch();
            }
            
            // Arrow keys for navigation
            if (e.key === 'ArrowLeft' && !this.state.searchOpen) {
                this.previousUnit();
            }
            if (e.key === 'ArrowRight' && !this.state.searchOpen) {
                this.nextUnit();
            }
            
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
        });
        
        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (this.state.menuOpen && 
                !this.elements.sideMenu.contains(e.target) && 
                !this.elements.menuBtn.contains(e.target)) {
                this.toggleMenu();
            }
        });
    }
    
    // Create menu items
    createMenuItems() {
        this.elements.menuList.innerHTML = '';
        this.elements.totalUnits.textContent = this.state.totalUnits;
        this.elements.totalUnitsBottom.textContent = this.state.totalUnits;
        
        appData.units.forEach((unit, index) => {
            const li = document.createElement('li');
            li.className = 'menu-item';
            if (index === this.state.currentUnit) {
                li.classList.add('active');
            }
            
            li.innerHTML = `
                <i class="${unit.icon}"></i>
                <span>${unit.title}</span>
            `;
            
            li.addEventListener('click', () => {
                this.loadUnit(index);
                this.toggleMenu();
            });
            
            this.elements.menuList.appendChild(li);
        });
    }
    
    // Load a specific unit
    loadUnit(index) {
        if (index < 0 || index >= this.state.totalUnits) return;
        
        this.state.currentUnit = index;
        const unit = appData.units[index];
        
        // Create content with layout
        const contentDiv = document.createElement('div');
        contentDiv.className = `content-unit active ${unit.layout}`;
        contentDiv.innerHTML = unit.content;
        
        this.elements.contentContainer.innerHTML = '';
        this.elements.contentContainer.appendChild(contentDiv);
        
        // Update UI
        this.updateUI();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Update UI elements
    updateUI() {
        // Update current unit indicator
        this.elements.currentUnit.textContent = this.state.currentUnit + 1;
        
        // Update navigation buttons
        this.elements.prevBtn.disabled = this.state.currentUnit === 0;
        this.elements.nextBtn.disabled = this.state.currentUnit === this.state.totalUnits - 1;
        
        // Update menu active state
        document.querySelectorAll('.menu-item').forEach((item, index) => {
            if (index === this.state.currentUnit) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Update URL hash
        window.history.replaceState(null, null, `#${appData.units[this.state.currentUnit].id}`);
    }
    
    // Navigate to next unit
    nextUnit() {
        if (this.state.currentUnit < this.state.totalUnits - 1) {
            this.loadUnit(this.state.currentUnit + 1);
        }
    }
    
    // Navigate to previous unit
    previousUnit() {
        if (this.state.currentUnit > 0) {
            this.loadUnit(this.state.currentUnit - 1);
        }
    }
    
    // Toggle side menu
    toggleMenu() {
        this.state.menuOpen = !this.state.menuOpen;
        this.elements.sideMenu.classList.toggle('active', this.state.menuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.state.menuOpen ? 'hidden' : '';
    }
    
    // Open search overlay
    openSearch() {
        this.state.searchOpen = true;
        this.elements.searchOverlay.classList.add('active');
        this.elements.searchInput.focus();
        document.body.style.overflow = 'hidden';
    }
    
    // Close search overlay
    closeSearch() {
        this.state.searchOpen = false;
        this.elements.searchOverlay.classList.remove('active');
        this.elements.searchInput.value = '';
        this.state.searchResults = [];
        this.displaySearchResults();
        document.body.style.overflow = '';
    }
    
    // Perform search
    performSearch(query) {
        this.state.searchQuery = query.toLowerCase().trim();
        
        if (!this.state.searchQuery) {
            this.state.searchResults = [];
            this.displaySearchResults();
            return;
        }
        
        // Search through index
        this.state.searchResults = appData.searchIndex.filter(item => {
            return item.title.toLowerCase().includes(this.state.searchQuery) ||
                   item.subtitle.toLowerCase().includes(this.state.searchQuery) ||
                   item.content.toLowerCase().includes(this.state.searchQuery);
        });
        
        this.displaySearchResults();
    }
    
    // Display search results
    displaySearchResults() {
        if (!this.state.searchQuery) {
            this.elements.searchResults.innerHTML = `
                <div class="search-placeholder">
                    <i class="fas fa-search"></i>
                    <p>खोज्नको लागि टाइप गर्नुहोस्</p>
                </div>
            `;
            return;
        }
        
        if (this.state.searchResults.length === 0) {
            this.elements.searchResults.innerHTML = `
                <div class="search-placeholder">
                    <i class="fas fa-search-minus"></i>
                    <p>"${this.state.searchQuery}" को लागि कुनै परिणाम फेला परेन</p>
                </div>
            `;
            return;
        }
        
        let resultsHTML = '<div class="search-results-list">';
        
        this.state.searchResults.forEach(result => {
            const unitIndex = appData.units.findIndex(u => u.id === result.id);
            resultsHTML += `
                <div class="search-result-item" data-index="${unitIndex}">
                    <h3>${result.title}</h3>
                    <p>${result.subtitle}</p>
                    <span class="search-result-badge">युनिट ${unitIndex + 1}</span>
                </div>
            `;
        });
        
        resultsHTML += '</div>';
        this.elements.searchResults.innerHTML = resultsHTML;
        
        // Add click listeners to result items
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'));
                this.loadUnit(index);
                this.closeSearch();
            });
        });
    }
    
    // Toggle theme
    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.state.theme);
        localStorage.setItem('nepalEventsTheme', this.state.theme);
        this.updateThemeIcon();
    }
    
    // Update theme icon
    updateThemeIcon() {
        const icon = this.elements.themeBtn.querySelector('i');
        icon.className = this.state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Load unit from URL hash
    loadFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const unitIndex = appData.units.findIndex(unit => unit.id === hash);
            if (unitIndex !== -1) {
                this.loadUnit(unitIndex);
            }
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new NepalEventsApp();
    
    // Load unit from URL hash
    app.loadFromHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        app.loadFromHash();
    });
    
    // Make app globally available for debugging
    window.app = app;
});

// Add CSS for search results
const searchStyles = document.createElement('style');
searchStyles.textContent = `
    .search-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60vh;
        color: var(--text-secondary);
        text-align: center;
    }
    
    .search-placeholder i {
        font-size: 48px;
        margin-bottom: var(--spacing-md);
        opacity: 0.5;
    }
    
    .search-results-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .search-result-item {
        background-color: var(--surface-color);
        border-radius: var(--radius-md);
        padding: var(--spacing-md);
        cursor: pointer;
        transition: background-color var(--transition-fast);
        border: 1px solid var(--border-color);
    }
    
    .search-result-item:hover {
        background-color: var(--border-color);
    }
    
    .search-result-item h3 {
        font-size: var(--font-size-base);
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
        color: var(--text-primary);
    }
    
    .search-result-item p {
        font-size: var(--font-size-sm);
        color: var(--text-secondary);
        margin-bottom: var(--spacing-xs);
    }
    
    .search-result-badge {
        display: inline-block;
        background-color: var(--primary-color);
        color: white;
        padding: 2px 8px;
        border-radius: var(--radius-full);
        font-size: var(--font-size-xs);
        font-weight: 500;
    }
`;
document.head.appendChild(searchStyles);