// Main Application Logic
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const contentArea = document.getElementById('contentArea');
    const dashboard = document.querySelector('.dashboard');
    const backToTopBtn = document.createElement('div');
    
    // Create back to top button
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    // Navigation Toggle for Mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Navigation Link Click Handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Get unit id from href
            const unitId = this.getAttribute('href').substring(1);
            
            // Show dashboard or load unit content
            if (unitId === 'home') {
                dashboard.classList.add('active');
                contentArea.style.display = 'none';
                window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
                dashboard.classList.remove('active');
                contentArea.style.display = 'block';
                loadUnitContent(unitId);
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });
    });
    
    // Load Unit Content
    function loadUnitContent(unitId) {
        // Find the unit in units data
        const unit = unitsData.find(u => u.id === unitId);
        
        if (!unit) {
            contentArea.innerHTML = `
                <div class="unit-content">
                    <div class="unit-header">
                        <h1 class="unit-title"><i class="fas fa-exclamation-circle"></i> सामग्री भेटिएन</h1>
                    </div>
                    <p>यो एकाइको सामग्री अहिलेसम्म उपलब्ध छैन।</p>
                </div>
            `;
            return;
        }
        
        // Build content HTML
        let contentHTML = `
            <div class="unit-content">
                <div class="unit-header">
                    <h1 class="unit-title"><i class="${unit.icon}"></i> ${unit.title}</h1>
                    <div class="unit-meta">
                        <span><i class="fas fa-clock"></i> अद्यावधिक: ${unit.updated}</span>
                    </div>
                </div>
        `;
        
        // Add sections
        unit.sections.forEach(section => {
            contentHTML += `
                <div class="content-section" id="section-${section.id}">
                    <h3>${section.title}</h3>
                    <div class="section-content">${section.content}</div>
                </div>
            `;
        });
        
        // Add tables if they exist
        if (unit.tables && unit.tables.length > 0) {
            unit.tables.forEach(table => {
                contentHTML += `
                    <div class="content-section">
                        <h3>${table.title}</h3>
                        <div class="table-responsive">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        ${table.headers.map(h => `<th>${h}</th>`).join('')}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${table.rows.map(row => 
                                        `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
                                    ).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            });
        }
        
        // Add highlights if they exist
        if (unit.highlights && unit.highlights.length > 0) {
            contentHTML += `
                <div class="content-section">
                    <h3><i class="fas fa-star"></i> महत्वपूर्ण तथ्यहरू</h3>
                    <div class="highlight-box">
                        <ul class="content-list">
                            ${unit.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
        
        contentHTML += `</div>`;
        contentArea.innerHTML = contentHTML;
    }
    
    // Search Functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            alert('कृपया खोज शब्द प्रविष्ट गर्नुहोस्');
            return;
        }
        
        // Hide dashboard, show content area
        dashboard.classList.remove('active');
        contentArea.style.display = 'block';
        
        // Search through all units
        let searchResults = [];
        
        unitsData.forEach(unit => {
            // Search in unit title
            if (unit.title.toLowerCase().includes(query)) {
                searchResults.push({
                    unit: unit.id,
                    title: unit.title,
                    match: unit.title,
                    type: 'शीर्षक'
                });
            }
            
            // Search in sections
            unit.sections.forEach(section => {
                if (section.title.toLowerCase().includes(query) || 
                    section.content.toLowerCase().includes(query)) {
                    searchResults.push({
                        unit: unit.id,
                        title: `${unit.title} - ${section.title}`,
                        match: section.content.substring(0, 150) + '...',
                        type: 'सामग्री'
                    });
                }
            });
            
            // Search in highlights
            if (unit.highlights) {
                unit.highlights.forEach(highlight => {
                    if (highlight.toLowerCase().includes(query)) {
                        searchResults.push({
                            unit: unit.id,
                            title: `${unit.title} - महत्वपूर्ण तथ्य`,
                            match: highlight,
                            type: 'महत्वपूर्ण तथ्य'
                        });
                    }
                });
            }
        });
        
        // Display search results
        if (searchResults.length > 0) {
            let resultsHTML = `
                <div class="search-results">
                    <h2><i class="fas fa-search"></i> खोज परिणाम: "${query}"</h2>
                    <p>${searchResults.length} वटा परिणाम भेटियो</p>
                    <div class="results-list">
            `;
            
            searchResults.forEach(result => {
                const highlightedMatch = result.match.replace(
                    new RegExp(query, 'gi'), 
                    match => `<span class="search-highlight">${match}</span>`
                );
                
                resultsHTML += `
                    <div class="search-result-item" data-unit="${result.unit}">
                        <h4>${result.title}</h4>
                        <p><strong>प्रकार:</strong> ${result.type}</p>
                        <p>${highlightedMatch}</p>
                    </div>
                `;
            });
            
            resultsHTML += `
                    </div>
                </div>
            `;
            
            contentArea.innerHTML = resultsHTML;
            
            // Add click event to result items
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const unitId = this.getAttribute('data-unit');
                    
                    // Update nav active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector(`.nav-link[href="#${unitId}"]`).classList.add('active');
                    
                    // Load unit content
                    loadUnitContent(unitId);
                    
                    // Scroll to top
                    window.scrollTo({top: 0, behavior: 'smooth'});
                });
            });
        } else {
            contentArea.innerHTML = `
                <div class="unit-content">
                    <div class="unit-header">
                        <h1 class="unit-title"><i class="fas fa-search"></i> खोज परिणाम</h1>
                    </div>
                    <p>"${query}" को लागि कुनै परिणाम भेटिएन।</p>
                    <p>कृपया अर्को शब्द प्रयोग गर्नुहोस् वा हाम्रो नेभिगेसनबाट एकाइहरू ब्राउज गर्नुहोस्।</p>
                </div>
            `;
        }
        
        // Clear search input
        searchInput.value = '';
    }
    
    // Back to top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    // Initialize - Load first unit if URL hash exists
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const navLink = document.querySelector(`.nav-link[href="#${hash}"]`);
        
        if (navLink) {
            navLink.click();
        }
    }
});