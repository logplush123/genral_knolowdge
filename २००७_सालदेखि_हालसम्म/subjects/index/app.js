// app.js - Nepali Political History Application
// Main application logic with error handling and improved mobile support

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contentBody = document.getElementById('contentBody');
    const contentTitle = document.getElementById('contentTitle');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    const navLinks = document.querySelectorAll('.nav-link');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const themeToggle = document.getElementById('themeToggle');
    const printBtn = document.getElementById('printBtn');
    const shareBtn = document.getElementById('shareBtn');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    // State variables
    let currentUnitIndex = 0;
    let currentUnitId = '';
    let unitOrder = [];
    
    // Initialize the application
    function initApp() {
        try {
            // Check if unitsData exists
            if (typeof unitsData === 'undefined') {
                throw new Error('unitsData is not defined. Please check unitesNep.js');
            }
            
            // Check if unitOrder exists or create it
            if (typeof unitOrder === 'undefined') {
                unitOrder = Object.keys(unitsData);
            } else {
                unitOrder = window.unitOrder || Object.keys(unitsData);
            }
            
            // Set initial unit
            currentUnitId = unitOrder[0] || '';
            
            // Check if we have units to load
            if (unitOrder.length === 0) {
                showError('No content units found. Please check the data file.');
                return;
            }
            
            // Load the first unit
            loadUnit(currentUnitId);
            updatePagination();
            
            // Set up event listeners
            setupEventListeners();
            
            // Initialize theme
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            
            // Handle URL hash for direct linking
            handleUrlHash();
            
            // Update total pages
            totalPagesSpan.textContent = unitOrder.length;
            
        } catch (error) {
            console.error('Error initializing app:', error);
            showError('Failed to initialize application. Please check the console for details.');
        }
    }
    
    // Show error message
    function showError(message) {
        contentBody.innerHTML = `
            <div class="content-card error-card">
                <div class="card-header">
                    <div class="card-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div>
                        <h2 class="card-title">Error</h2>
                        <p class="card-subtitle">Unable to load content</p>
                    </div>
                </div>
                <div class="content-text">
                    <p>${message}</p>
                    <p>Please refresh the page or check your internet connection.</p>
                </div>
            </div>
        `;
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const unitId = this.getAttribute('data-unit');
                if (unitId) {
                    navigateToUnit(unitId);
                }
            });
        });
        
        // Previous button
        prevBtn.addEventListener('click', function() {
            navigateToPrevious();
        });
        
        // Next button
        nextBtn.addEventListener('click', function() {
            navigateToNext();
        });
        
        // Theme toggle
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
        
        // Print button
        printBtn.addEventListener('click', function() {
            window.print();
        });
        
        // Share button
        shareBtn.addEventListener('click', function() {
            shareContent();
        });
        
        // Mobile menu toggle
        mobileMenuToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // Sidebar overlay
        sidebarOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                navigateToPrevious();
            } else if (e.key === 'ArrowRight') {
                navigateToNext();
            } else if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
        
        // Close sidebar on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                closeMobileMenu();
            }
        });
    }
    
    // Mobile menu functions
    function toggleMobileMenu() {
        const isActive = sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
        mobileMenuToggle.setAttribute('aria-expanded', isActive);
        
        // Update menu icon
        const menuIcon = mobileMenuToggle.querySelector('i');
        if (isActive) {
            menuIcon.className = 'fas fa-times';
        } else {
            menuIcon.className = 'fas fa-bars';
        }
    }
    
    function closeMobileMenu() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        // Update menu icon
        const menuIcon = mobileMenuToggle.querySelector('i');
        menuIcon.className = 'fas fa-bars';
    }
    
    // Navigate to a specific unit
    function navigateToUnit(unitId) {
        try {
            // Close mobile menu on navigation
            if (window.innerWidth < 768) {
                closeMobileMenu();
            }
            
            // Update current unit index
            currentUnitIndex = unitOrder.indexOf(unitId);
            if (currentUnitIndex === -1) {
                console.warn(`Unit ${unitId} not found in unitOrder, defaulting to first unit`);
                currentUnitIndex = 0;
                unitId = unitOrder[0];
            }
            
            // Update current unit ID
            currentUnitId = unitId;
            
            // Load the unit
            loadUnit(unitId);
            
            // Update active nav link
            updateActiveNavLink(unitId);
            
            // Update pagination
            updatePagination();
            
            // Update URL hash
            updateUrlHash();
            
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            console.error('Error navigating to unit:', error);
            showError('Failed to navigate to the selected section.');
        }
    }
    
    // Navigate to previous unit
    function navigateToPrevious() {
        if (currentUnitIndex > 0) {
            const prevUnitId = unitOrder[currentUnitIndex - 1];
            navigateToUnit(prevUnitId);
        }
    }
    
    // Navigate to next unit
    function navigateToNext() {
        if (currentUnitIndex < unitOrder.length - 1) {
            const nextUnitId = unitOrder[currentUnitIndex + 1];
            navigateToUnit(nextUnitId);
        }
    }
    
    // Load a unit into the content area
    function loadUnit(unitId) {
        try {
            const unit = unitsData[unitId];
            
            if (!unit) {
                throw new Error(`Unit ${unitId} not found in unitsData`);
            }
            
            // Show loading state
            contentBody.innerHTML = `
                <div class="content-loading">
                    <div class="loading-spinner">
                        <i class="fas fa-spinner fa-spin"></i>
                        <p>Loading content...</p>
                    </div>
                </div>
            `;
            
            // Update title
            contentTitle.textContent = unit.title;
            
            // Build content HTML
            let contentHTML = `
                <div class="content-card">
                    <div class="card-header">
                        <div class="card-icon">
                            <i class="fas fa-${unit.icon || 'book'}"></i>
                        </div>
                        <div>
                            <h2 class="card-title">${unit.title}</h2>
                            <p class="card-subtitle">${unit.subtitle || ''}</p>
                        </div>
                    </div>
            `;
            
            // Add sections
            if (unit.sections && Array.isArray(unit.sections)) {
                unit.sections.forEach(section => {
                    if (section.type === 'text') {
                        contentHTML += `<div class="content-text"><p>${section.content || ''}</p></div>`;
                    } else if (section.type === 'highlight') {
                        contentHTML += `<div class="highlight-text"><p>${section.content || ''}</p></div>`;
                    } else if (section.type === 'list' && section.items) {
                        let listHTML = `<ul class="content-list">`;
                        section.items.forEach(item => {
                            listHTML += `<li>${item}</li>`;
                        });
                        listHTML += `</ul>`;
                        contentHTML += listHTML;
                    } else if (section.type === 'table') {
                        let tableHTML = `<div class="table-container"><table class="data-table">`;
                        
                        // Add headers
                        if (section.headers && Array.isArray(section.headers)) {
                            tableHTML += `<thead><tr>`;
                            section.headers.forEach(header => {
                                tableHTML += `<th>${header}</th>`;
                            });
                            tableHTML += `</tr></thead>`;
                        }
                        
                        // Add rows
                        if (section.rows && Array.isArray(section.rows)) {
                            tableHTML += `<tbody>`;
                            section.rows.forEach(row => {
                                tableHTML += `<tr>`;
                                row.forEach(cell => {
                                    tableHTML += `<td>${cell}</td>`;
                                });
                                tableHTML += `</tr>`;
                            });
                            tableHTML += `</tbody>`;
                        }
                        
                        tableHTML += `</table></div>`;
                        contentHTML += tableHTML;
                    }
                });
            }
            
            contentHTML += `</div>`;
            
            // Set content with a small delay to show loading spinner
            setTimeout(() => {
                contentBody.innerHTML = contentHTML;
            }, 100);
            
        } catch (error) {
            console.error('Error loading unit:', error);
            contentBody.innerHTML = `
                <div class="content-card">
                    <div class="content-text">
                        <p>Unable to load the content for this section.</p>
                        <p>Error: ${error.message}</p>
                    </div>
                </div>
            `;
        }
    }
    
    // Update active navigation link
    function updateActiveNavLink(unitId) {
        navLinks.forEach(link => {
            const linkUnitId = link.getAttribute('data-unit');
            if (linkUnitId === unitId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }
    
    // Update pagination information
    function updatePagination() {
        try {
            currentPageSpan.textContent = currentUnitIndex + 1;
            
            // Disable/enable buttons
            prevBtn.disabled = currentUnitIndex === 0;
            nextBtn.disabled = currentUnitIndex === unitOrder.length - 1;
            
            // Update button styles
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
            prevBtn.setAttribute('aria-disabled', prevBtn.disabled);
            
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
            nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
            nextBtn.setAttribute('aria-disabled', nextBtn.disabled);
            
        } catch (error) {
            console.error('Error updating pagination:', error);
        }
    }
    
    // Theme functionality
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    
    function setTheme(theme) {
        try {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Update theme toggle icon and label
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                themeToggle.setAttribute('aria-label', 'Switch to light theme');
            } else {
                icon.className = 'fas fa-moon';
                themeToggle.setAttribute('aria-label', 'Switch to dark theme');
            }
            
        } catch (error) {
            console.error('Error setting theme:', error);
        }
    }
    
    // Share functionality
    async function shareContent() {
        try {
            const unit = unitsData[currentUnitId];
            if (!unit) {
                throw new Error('Current unit not found');
            }
            
            const shareText = `Check out "${unit.title}" from Nepali Political History: ${unit.subtitle || 'Learn about Nepal\'s political journey'}`;
            const shareUrl = window.location.origin + window.location.pathname + '#' + currentUnitId;
            
            // Use Web Share API if available
            if (navigator.share) {
                await navigator.share({
                    title: unit.title,
                    text: shareText,
                    url: shareUrl
                });
            } else {
                // Fallback: Copy to clipboard
                await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                
                // Show temporary feedback
                const originalText = shareBtn.querySelector('.btn-text').textContent;
                shareBtn.querySelector('.btn-text').textContent = 'Copied!';
                setTimeout(() => {
                    shareBtn.querySelector('.btn-text').textContent = originalText;
                }, 2000);
            }
        } catch (error) {
            console.error('Error sharing content:', error);
            
            // Fallback for browsers without clipboard API
            const unit = unitsData[currentUnitId];
            const shareUrl = window.location.origin + window.location.pathname + '#' + currentUnitId;
            prompt('Copy this link to share:', shareUrl);
        }
    }
    
    // Handle URL hash for direct linking
    function handleUrlHash() {
        const hash = window.location.hash.substring(1);
        if (hash && unitsData[hash]) {
            navigateToUnit(hash);
        }
    }
    
    // Update URL hash when navigating
    function updateUrlHash() {
        try {
            window.history.replaceState(null, null, '#' + currentUnitId);
        } catch (error) {
            // Some browsers may block replaceState in certain contexts
            console.warn('Could not update URL hash:', error);
        }
    }
    
    // Initialize the application
    initApp();
    
    // Handle URL hash changes
    window.addEventListener('hashchange', handleUrlHash);
    
    // Handle back/forward navigation
    window.addEventListener('popstate', handleUrlHash);
    
    // Close mobile menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth < 768 && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            closeMobileMenu();
        }
    });
});

// Add CSS for error states and loading
const style = document.createElement('style');
style.textContent = `
    .error-card {
        border-left: 4px solid #ef4444;
    }
    
    .content-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
    }
    
    .loading-spinner {
        text-align: center;
    }
    
    .loading-spinner i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .loading-spinner p {
        color: var(--text-secondary);
    }
    
    @media (max-width: 768px) {
        .sidebar {
            transition: transform 0.3s ease;
        }
        
        .sidebar.active {
            transform: translateX(0);
        }
        
        .sidebar:not(.active) {
            transform: translateX(-100%);
        }
    }
`;
document.head.appendChild(style);