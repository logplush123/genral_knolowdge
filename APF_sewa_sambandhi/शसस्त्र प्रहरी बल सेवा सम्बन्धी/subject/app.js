// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // DOM Elements
    const menuToggle = document.getElementById('menuToggle');
    const searchToggle = document.getElementById('searchToggle');
    const searchClose = document.getElementById('searchClose');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const sideNav = document.getElementById('sideNav');
    const navClose = document.getElementById('navClose');
    const contentArea = document.getElementById('contentArea');
    const bookContent = document.getElementById('bookContent');
    const tocList = document.getElementById('tocList');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPage = document.getElementById('currentPage');
    const totalPages = document.getElementById('totalPages');
    const footerBtns = document.querySelectorAll('.footer-btn');
    const bookmarkModal = document.getElementById('bookmarkModal');
    const settingsModal = document.getElementById('settingsModal');
    const closeBookmark = document.getElementById('closeBookmark');
    const closeSettings = document.getElementById('closeSettings');
    const fontSizeSelect = document.getElementById('fontSize');
    const themeSelect = document.getElementById('theme');
    const resetSettings = document.getElementById('resetSettings');
    
    // App State
    let currentSection = 0;
    let sections = [];
    let bookmarks = JSON.parse(localStorage.getItem('apfBookmarks')) || [];
    let settings = JSON.parse(localStorage.getItem('apfSettings')) || {
        fontSize: 'medium',
        theme: 'light'
    };
    
    // Initialize content from units.js
    initializeContent();
    
    // Apply saved settings
    applySettings();
    
    // Event Listeners
    menuToggle.addEventListener('click', () => {
        sideNav.classList.add('active');
    });
    
    navClose.addEventListener('click', () => {
        sideNav.classList.remove('active');
    });
    
    searchToggle.addEventListener('click', () => {
        searchBar.classList.add('active');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('active');
        searchInput.value = '';
    });
    
    searchInput.addEventListener('input', debounce(function(e) {
        performSearch(e.target.value);
    }, 300));
    
    prevBtn.addEventListener('click', () => {
        navigateToSection(currentSection - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        navigateToSection(currentSection + 1);
    });
    
    footerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Remove active class from all buttons
            footerBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            handleFooterButton(target);
        });
    });
    
    closeBookmark.addEventListener('click', () => {
        bookmarkModal.classList.remove('active');
        // Reset footer buttons
        resetFooterButtons();
    });
    
    closeSettings.addEventListener('click', () => {
        settingsModal.classList.remove('active');
        // Reset footer buttons
        resetFooterButtons();
    });
    
    fontSizeSelect.addEventListener('change', function() {
        updateFontSize(this.value);
    });
    
    themeSelect.addEventListener('change', function() {
        updateTheme(this.value);
    });
    
    resetSettings.addEventListener('click', resetToDefaultSettings);
    
    // Initialize table of contents
    generateTableOfContents();
    
    // Initialize page navigation
    updatePageNavigation();
    
    // Scroll to section when TOC link is clicked
    document.addEventListener('click', function(e) {
        if (e.target.matches('.toc-list a')) {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            const sectionIndex = sections.findIndex(s => s.id === sectionId);
            if (sectionIndex !== -1) {
                navigateToSection(sectionIndex);
                sideNav.classList.remove('active');
            }
        }
        
        // Handle bookmark toggling
        if (e.target.matches('.bookmark-section-btn')) {
            const sectionId = e.target.getAttribute('data-section');
            toggleBookmark(sectionId);
        }
    });
    
    // Update active TOC link on scroll
    window.addEventListener('scroll', debounce(updateActiveTOCLink, 100));
    
    // Handle keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + F for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchBar.classList.add('active');
            searchInput.focus();
        }
        
        // Escape to close modals and search
        if (e.key === 'Escape') {
            searchBar.classList.remove('active');
            bookmarkModal.classList.remove('active');
            settingsModal.classList.remove('active');
            sideNav.classList.remove('active');
            resetFooterButtons();
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowLeft' && currentSection > 0) {
            navigateToSection(currentSection - 1);
        }
        
        if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
            navigateToSection(currentSection + 1);
        }
    });
    
    // Functions
    function initializeContent() {
        // Create sections from the data in units.js
        sections = APF_CONTENT_SECTIONS.map(section => {
            const sectionElement = document.createElement('section');
            sectionElement.className = 'content-section';
            sectionElement.id = section.id;
            
            const headerDiv = document.createElement('div');
            headerDiv.className = 'section-header';
            
            const icon = document.createElement('div');
            icon.className = 'section-icon';
            icon.innerHTML = `<i class="${section.icon}"></i>`;
            
            const title = document.createElement('h2');
            title.textContent = section.title;
            
            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.className = 'bookmark-section-btn';
            bookmarkBtn.setAttribute('data-section', section.id);
            bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i>`;
            bookmarkBtn.title = 'बुकमार्क गर्नुहोस्';
            
            headerDiv.appendChild(icon);
            headerDiv.appendChild(title);
            headerDiv.appendChild(bookmarkBtn);
            sectionElement.appendChild(headerDiv);
            
            // Add content
            section.content.forEach(item => {
                if (item.type === 'paragraph') {
                    const p = document.createElement('p');
                    p.textContent = item.text;
                    sectionElement.appendChild(p);
                } else if (item.type === 'highlight') {
                    const div = document.createElement('div');
                    div.className = 'highlight-box';
                    
                    if (item.title) {
                        const h4 = document.createElement('h4');
                        h4.textContent = item.title;
                        div.appendChild(h4);
                    }
                    
                    const p = document.createElement('p');
                    p.textContent = item.text;
                    div.appendChild(p);
                    
                    sectionElement.appendChild(div);
                } else if (item.type === 'table') {
                    const table = document.createElement('table');
                    table.className = 'data-table';
                    
                    // Create caption if exists
                    if (item.caption) {
                        const caption = document.createElement('caption');
                        caption.textContent = item.caption;
                        table.appendChild(caption);
                    }
                    
                    // Create thead
                    if (item.headers) {
                        const thead = document.createElement('thead');
                        const headerRow = document.createElement('tr');
                        
                        item.headers.forEach(header => {
                            const th = document.createElement('th');
                            th.textContent = header;
                            headerRow.appendChild(th);
                        });
                        
                        thead.appendChild(headerRow);
                        table.appendChild(thead);
                    }
                    
                    // Create tbody
                    const tbody = document.createElement('tbody');
                    
                    item.rows.forEach(rowData => {
                        const row = document.createElement('tr');
                        
                        rowData.forEach(cellData => {
                            const td = document.createElement('td');
                            td.textContent = cellData;
                            row.appendChild(td);
                        });
                        
                        tbody.appendChild(row);
                    });
                    
                    table.appendChild(tbody);
                    sectionElement.appendChild(table);
                } else if (item.type === 'subheading') {
                    const h3 = document.createElement('h3');
                    h3.textContent = item.text;
                    sectionElement.appendChild(h3);
                }
            });
            
            return {
                id: section.id,
                title: section.title,
                element: sectionElement
            };
        });
        
        // Add all sections to the book content
        sections.forEach(section => {
            bookContent.appendChild(section.element);
        });
        
        // Update bookmark buttons
        updateBookmarkButtons();
    }
    
    function generateTableOfContents() {
        tocList.innerHTML = '';
        
        sections.forEach((section, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${section.id}`;
            a.textContent = `${index + 1}. ${section.title}`;
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
        
        // Set total pages
        totalPages.textContent = sections.length.toString();
    }
    
    function navigateToSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        currentSection = index;
        
        // Scroll to section
        sections[index].element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update page navigation
        updatePageNavigation();
        
        // Update active TOC link
        updateActiveTOCLink();
    }
    
    function updatePageNavigation() {
        currentPage.textContent = (currentSection + 1).toString();
        
        prevBtn.disabled = currentSection === 0;
        nextBtn.disabled = currentSection === sections.length - 1;
    }
    
    function updateActiveTOCLink() {
        const tocLinks = document.querySelectorAll('.toc-list a');
        
        // Find which section is currently in view
        let currentInView = 0;
        let maxVisible = 0;
        
        sections.forEach((section, index) => {
            const rect = section.element.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            
            if (visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                currentInView = index;
            }
        });
        
        // Update active link
        tocLinks.forEach((link, index) => {
            if (index === currentInView) {
                link.classList.add('active');
                currentSection = currentInView;
                updatePageNavigation();
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    function handleFooterButton(target) {
        switch(target) {
            case 'cover':
                contentArea.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                break;
            case 'toc':
                sideNav.classList.add('active');
                break;
            case 'bookmark':
                showBookmarks();
                break;
            case 'settings':
                showSettings();
                break;
        }
    }
    
    function resetFooterButtons() {
        // Set the first button (cover) as active
        footerBtns.forEach((btn, index) => {
            if (index === 0) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    function showBookmarks() {
        const bookmarkList = document.getElementById('bookmarkList');
        bookmarkList.innerHTML = '';
        
        if (bookmarks.length === 0) {
            bookmarkList.innerHTML = '<li>कुनै बुकमार्क छैन</li>';
        } else {
            bookmarks.forEach(bookmarkId => {
                const section = sections.find(s => s.id === bookmarkId);
                if (section) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `#${section.id}`;
                    a.innerHTML = `<i class="fas fa-bookmark"></i> ${section.title}`;
                    
                    a.addEventListener('click', (e) => {
                        e.preventDefault();
                        const sectionIndex = sections.findIndex(s => s.id === section.id);
                        navigateToSection(sectionIndex);
                        bookmarkModal.classList.remove('active');
                        resetFooterButtons();
                    });
                    
                    li.appendChild(a);
                    bookmarkList.appendChild(li);
                }
            });
        }
        
        bookmarkModal.classList.add('active');
    }
    
    function showSettings() {
        // Set current values in settings modal
        fontSizeSelect.value = settings.fontSize;
        themeSelect.value = settings.theme;
        
        settingsModal.classList.add('active');
    }
    
    function toggleBookmark(sectionId) {
        const index = bookmarks.indexOf(sectionId);
        const bookmarkBtn = document.querySelector(`.bookmark-section-btn[data-section="${sectionId}"]`);
        
        if (index === -1) {
            // Add bookmark
            bookmarks.push(sectionId);
            bookmarkBtn.innerHTML = `<i class="fas fa-bookmark" style="color: var(--accent-color);"></i>`;
            bookmarkBtn.title = 'बुकमार्क हटाउनुहोस्';
            showNotification('बुकमार्क थपियो', 'success');
        } else {
            // Remove bookmark
            bookmarks.splice(index, 1);
            bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i>`;
            bookmarkBtn.title = 'बुकमार्क गर्नुहोस्';
            showNotification('बुकमार्क हटाइयो', 'info');
        }
        
        // Save to localStorage
        localStorage.setItem('apfBookmarks', JSON.stringify(bookmarks));
    }
    
    function updateBookmarkButtons() {
        sections.forEach(section => {
            const bookmarkBtn = document.querySelector(`.bookmark-section-btn[data-section="${section.id}"]`);
            if (bookmarkBtn) {
                if (bookmarks.includes(section.id)) {
                    bookmarkBtn.innerHTML = `<i class="fas fa-bookmark" style="color: var(--accent-color);"></i>`;
                    bookmarkBtn.title = 'बुकमार्क हटाउनुहोस्';
                } else {
                    bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i>`;
                    bookmarkBtn.title = 'बुकमार्क गर्नुहोस्';
                }
            }
        });
    }
    
    function applySettings() {
        // Apply font size
        document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
        document.body.classList.add(`font-${settings.fontSize}`);
        
        // Apply theme
        document.body.classList.remove('light-theme', 'sepia-theme', 'dark-theme');
        document.body.classList.add(`${settings.theme}-theme`);
    }
    
    function updateFontSize(size) {
        settings.fontSize = size;
        localStorage.setItem('apfSettings', JSON.stringify(settings));
        applySettings();
        showNotification('फन्ट आकार परिवर्तन भयो', 'success');
    }
    
    function updateTheme(theme) {
        settings.theme = theme;
        localStorage.setItem('apfSettings', JSON.stringify(settings));
        applySettings();
        showNotification('थिम परिवर्तन भयो', 'success');
    }
    
    function resetToDefaultSettings() {
        settings = {
            fontSize: 'medium',
            theme: 'light'
        };
        
        localStorage.setItem('apfSettings', JSON.stringify(settings));
        applySettings();
        
        // Update select elements
        fontSizeSelect.value = settings.fontSize;
        themeSelect.value = settings.theme;
        
        showNotification('सेटिङहरू रिसेट भयो', 'success');
    }
    
    function performSearch(query) {
        if (!query.trim()) {
            // Clear search highlights
            clearSearchHighlights();
            return;
        }
        
        const content = bookContent.textContent.toLowerCase();
        const queryLower = query.toLowerCase();
        
        if (content.includes(queryLower)) {
            highlightSearchResults(query);
        }
    }
    
    function highlightSearchResults(query) {
        // Clear previous highlights
        clearSearchHighlights();
        
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        const walker = document.createTreeWalker(
            bookContent,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        const textNodes = [];
        
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        textNodes.forEach(textNode => {
            const parent = textNode.parentNode;
            if (parent.nodeName === 'MARK') return;
            
            const content = textNode.textContent;
            if (regex.test(content)) {
                const span = document.createElement('span');
                span.innerHTML = content.replace(regex, '<mark class="search-highlight">$1</mark>');
                parent.replaceChild(span, textNode);
            }
        });
        
        // Scroll to first highlight
        const firstHighlight = document.querySelector('.search-highlight');
        if (firstHighlight) {
            firstHighlight.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    function clearSearchHighlights() {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background-color: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 500;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        `;
        
        // Add keyframes for animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
            if (style.parentNode) {
                style.remove();
            }
        }, 3000);
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Add search highlight styles
    const style = document.createElement('style');
    style.textContent = `
        .search-highlight {
            background-color: #FFEB3B;
            color: #333;
            padding: 2px 0;
            border-radius: 2px;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}