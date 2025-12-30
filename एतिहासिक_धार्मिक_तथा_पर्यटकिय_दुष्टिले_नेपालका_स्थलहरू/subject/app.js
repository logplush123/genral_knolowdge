document.addEventListener('DOMContentLoaded', function() {
    const unitsContainer = document.getElementById('unitsContainer');
    const unitSelection = document.getElementById('unit-selection');
    const unitDetail = document.getElementById('unit-detail');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    // Play Store Link
    const APP_SHARE_URL = "https://play.google.com/store/apps/details?id=com.bikram.logplush&pcampaignid=web_share";

    renderList(contentData.getAllUnits());

    function renderList(units) {
        unitsContainer.innerHTML = '';
        units.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card fade-in';
            card.innerHTML = `
                <div class="unit-card-header">
                    <h3>${unit.title}</h3>
                    <div class="unit-location"><i class="fas fa-map-marker-alt"></i> ${unit.location}</div>
                </div>
                <div class="unit-card-body">
                    <p class="unit-description">${unit.paragraphs ? unit.paragraphs[0].substring(0, 80) + '...' : ''}</p>
                    <div class="unit-features">
                        <span class="feature-tag"><i class="fas fa-mountain"></i> ${unit.altitude || 'हिमाल'}</span>
                    </div>
                </div>
            `;
            card.onclick = () => showDetail(unit.id);
            unitsContainer.appendChild(card);
        });
    }

    function showDetail(id) {
        const unit = contentData.getUnitById(id);
        if (!unit) return;

        showLoading(true);

        // Header Info
        document.getElementById('unitTitle').textContent = unit.title;
        document.getElementById('unitLocation').textContent = unit.location;
        document.getElementById('unitCategory').textContent = unit.category;
        
        // Altitude Display
        const altTag = document.getElementById('unitAltitude');
        altTag.parentElement.style.display = unit.altitude ? 'inline-flex' : 'none';
        if(unit.altitude) altTag.textContent = unit.altitude;

        // NEW: Coordinates Display
        const coordsTag = document.getElementById('unitCoords');
        if(unit.coordinates) {
            coordsTag.parentElement.style.display = 'inline-flex';
            coordsTag.textContent = `${unit.coordinates.lat.toFixed(4)}°N, ${unit.coordinates.lng.toFixed(4)}°E`;
        } else {
            coordsTag.parentElement.style.display = 'none';
        }

        const contentArea = document.getElementById('unitContent');
        contentArea.innerHTML = ''; 

        if (unit.subheadings) {
            unit.subheadings.forEach((sh, index) => {
                const h3 = document.createElement('h3');
                h3.className = 'subheading';
                h3.textContent = sh;
                contentArea.appendChild(h3);

                if (unit.paragraphs && unit.paragraphs[index]) {
                    const p = document.createElement('p');
                    p.className = 'paragraph nepali-text';
                    p.textContent = unit.paragraphs[index];
                    contentArea.appendChild(p);
                }
            });
        }

        if (unit.bulletPoints) {
            const ul = document.createElement('ul');
            ul.className = 'bullet-list';
            unit.bulletPoints.forEach(point => {
                const li = document.createElement('li');
                li.className = 'nepali-text';
                li.textContent = point;
                ul.appendChild(li);
            });
            contentArea.appendChild(ul);
        }

        if (unit.factCheck) {
            const factBox = document.createElement('div');
            factBox.className = 'fact-box';
            let factList = unit.factCheck.facts.map(f => `<li>${f}</li>`).join('');
            factBox.innerHTML = `
                <h4><i class="fas fa-lightbulb"></i> रोचक तथ्यहरू (${unit.factCheck.year})</h4>
                <ul class="bullet-list">${factList}</ul>
            `;
            contentArea.appendChild(factBox);
        }

        unitSelection.classList.remove('active');
        unitDetail.classList.add('active');
        window.scrollTo(0, 0);
        setTimeout(() => showLoading(false), 300);
    }
    // ... existing code (renderList, showDetail, etc.)

    // 1. Select all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 2. Add click event listener to each button
    filterButtons.forEach(btn => {
        btn.onclick = () => {
            // Remove 'active' class from the previous button and add to this one
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
        
            const selectedCategory = btn.dataset.filter;
        
            // 3. Logic to filter data
            let filteredData;
            if (selectedCategory === 'all') {
                filteredData = contentData.getAllUnits();
            } else {
                // This calls a helper function in your contentData object
                // or you can use: contentData.getAllUnits().filter(u => u.category === selectedCategory);
                filteredData = contentData.filterByCategory(selectedCategory);
            }
        
            // 4. Re-render the grid with filtered results
            renderList(filteredData);
        };
    });

    // UPDATED: Share Functionality
    document.querySelector('.share-btn').onclick = () => {
        const title = document.getElementById('unitTitle').textContent;
        const text = `नेपालको ${title} को बारेमा जानकारी लिन यो एप डाउनलोड गर्नुहोस्:`;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
                url: APP_SHARE_URL
            }).catch(console.error);
        } else {
            // Fallback for desktop browsers
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + APP_SHARE_URL)}`);
        }
    };

    document.getElementById('backButton').onclick = () => {
        unitDetail.classList.remove('active');
        unitSelection.classList.add('active');
    };

    document.getElementById('searchInput').oninput = (e) => {
        renderList(contentData.searchUnits(e.target.value));
    };

    function showLoading(show) {
        loadingSpinner.style.display = show ? 'flex' : 'none';
    }
});