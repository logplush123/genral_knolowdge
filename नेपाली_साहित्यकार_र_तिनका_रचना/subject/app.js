// Main Application Logic

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initSidebar();
    initThemeToggle();
    initSearch();
    initProgressTracker();
    initScrollToTop();
    initPrintFunctionality();
    initShareFunctionality();
    initChapterNavigation();
    
    console.log('नेपाली साहित्यकार अनुप्रयोग सुरु भयो');
});

// Sidebar Navigation
function initSidebar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    // Toggle sidebar
    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close sidebar when clicking on a link (for mobile)
    tocLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                sidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // Update active link
            tocLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Theme Toggle (Light/Dark)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Search Functionality
function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    // Toggle search overlay
    searchToggle.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchInput.focus();
        document.body.style.overflow = 'hidden';
    });
    
    closeSearch.addEventListener('click', function() {
        closeSearchOverlay();
    });
    
    // Close search overlay on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });
    
    // Close search overlay when clicking outside
    searchOverlay.addEventListener('click', function(event) {
        if (event.target === searchOverlay) {
            closeSearchOverlay();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        
        if (searchTerm.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Search in authors and works data
        const results = performSearch(searchTerm);
        displaySearchResults(results);
    });
    
    function closeSearchOverlay() {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
}

// Perform search in the data
function performSearch(term) {
    const results = [];
    
    // Search in authors data
    window.authorsData.forEach(author => {
        // Check author name
        if (author.name.toLowerCase().includes(term)) {
            results.push({
                type: 'author',
                title: author.name,
                subtitle: `(${author.years})`,
                link: `#${author.id}`,
                description: author.description
            });
        }
        
        // Check author's works
        author.works.forEach(work => {
            if (work.title.toLowerCase().includes(term) || 
                (work.description && work.description.toLowerCase().includes(term))) {
                results.push({
                    type: 'work',
                    title: work.title,
                    subtitle: author.name,
                    link: `#${author.id}`,
                    description: work.year ? `वर्ष: ${work.year}` : ''
                });
            }
        });
    });
    
    // Search in additional data (honors, etc.)
    window.additionalData.honors.forEach(honor => {
        if (honor.title.toLowerCase().includes(term) || 
            honor.recipient.toLowerCase().includes(term)) {
            results.push({
                type: 'honor',
                title: honor.title,
                subtitle: honor.recipient,
                link: '#honors',
                description: ''
            });
        }
    });
    
    return results;
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item" style="text-align: center; padding: 2rem;">
                <p>कुनै परिणाम फेला परेन</p>
                <p style="font-size: 0.9rem; color: #6c757d;">अन्य शब्द प्रयोग गर्नुहोस्</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    results.slice(0, 10).forEach(result => {
        const icon = result.type === 'author' ? 'fas fa-user' : 
                     result.type === 'work' ? 'fas fa-book' : 
                     'fas fa-award';
        
        html += `
            <div class="search-result-item" data-link="${result.link}">
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="font-size: 1.2rem; color: #3498db;">
                        <i class="${icon}"></i>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 0.2rem;">${result.title}</h4>
                        <p style="color: #6c757d; font-size: 0.9rem; margin-bottom: 0.3rem;">${result.subtitle}</p>
                        ${result.description ? `<p style="font-size: 0.85rem;">${result.description}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    searchResults.innerHTML = html;
    
    // Add click event to result items
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
            document.querySelector('.search-overlay').classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Highlight the section
            const targetElement = document.querySelector(link);
            targetElement.style.transition = 'background-color 0.5s';
            targetElement.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            
            setTimeout(() => {
                targetElement.style.backgroundColor = '';
            }, 2000);
        });
    });
}

// Reading Progress Tracker
function initProgressTracker() {
    const progressFill = document.getElementById('readingProgress');
    const progressPercentage = document.getElementById('progressPercentage');
    const chapters = document.querySelectorAll('.chapter');
    
    if (chapters.length === 0) return;
    
    // Calculate total scrollable height
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const progress = Math.min(100, (scrollPosition / totalHeight) * 100);
        
        progressFill.style.width = `${progress}%`;
        progressPercentage.textContent = `${Math.round(progress)}%`;
        
        // Update active TOC link
        updateActiveTocLink();
    });
}

// Update active TOC link based on scroll position
function updateActiveTocLink() {
    const chapters = document.querySelectorAll('.chapter');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    let currentChapterId = '';
    
    // Find which chapter is currently in view
    chapters.forEach(chapter => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            currentChapterId = chapter.id;
        }
    });
    
    // Update active TOC link
    if (currentChapterId) {
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentChapterId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Print Functionality
function initPrintFunctionality() {
    const printBtn = document.getElementById('printBtn');
    
    printBtn.addEventListener('click', function() {
        // Create a print-friendly version
        const originalTitle = document.title;
        document.title = 'नेपाली साहित्यकारहरू - प्रिन्ट संस्करण';
        
        // Hide interactive elements before printing
        const elementsToHide = document.querySelectorAll('.menu-toggle, .theme-toggle, .search-toggle, .sidebar, .footer-actions, .toc-link i, .stat-icon, .honor-icon');
        elementsToHide.forEach(el => {
            el.style.display = 'none';
        });
        
        // Print the document
        window.print();
        
        // Restore original display after printing
        elementsToHide.forEach(el => {
            el.style.display = '';
        });
        
        document.title = originalTitle;
    });
}

// Share Functionality
function initShareFunctionality() {
    const shareBtn = document.getElementById('shareBtn');
    
    shareBtn.addEventListener('click', function() {
        const shareData = {
            title: 'नेपाली साहित्यकारहरू',
            text: 'नेपाली साहित्यकारहरूको जीवनी र कृतिहरूको अध्ययन गर्नुहोस्',
            url: "https://play.google.com/store/apps/details?id=com.bikram.logplush&pcampaignid=web_share"
        };
        
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('सेयर सफल भयो'))
                .catch(error => console.log('सेयरमा त्रुटि:', error));
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    alert('लिंक क्लिपबोर्डमा कपी गरियो!');
                })
                .catch(err => {
                    console.error('क्लिपबोर्ड कपी गर्दा त्रुटि:', err);
                });
        }
    });
}

// Chapter Navigation with Keyboard
function initChapterNavigation() {
    document.addEventListener('keydown', function(event) {
        // Check if we're not in an input field
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }
        
        // Left/Right arrow keys for chapter navigation
        if (event.key === 'ArrowRight') {
            navigateToNextChapter();
        } else if (event.key === 'ArrowLeft') {
            navigateToPreviousChapter();
        }
    });
}

function navigateToNextChapter() {
    const chapters = document.querySelectorAll('.chapter');
    const currentScroll = window.scrollY;
    
    for (let i = 0; i < chapters.length; i++) {
        const chapterTop = chapters[i].offsetTop;
        
        if (chapterTop > currentScroll + 100) {
            chapters[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function navigateToPreviousChapter() {
    const chapters = document.querySelectorAll('.chapter');
    const currentScroll = window.scrollY;
    
    for (let i = chapters.length - 1; i >= 0; i--) {
        const chapterTop = chapters[i].offsetTop;
        
        if (chapterTop < currentScroll - 100) {
            chapters[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.chapter, .stat-card, .honor-card, .work-card').forEach(el => {
        observer.observe(el);
    });
}

// Call scroll animations after page load
window.addEventListener('load', function() {
    initScrollAnimations();
});