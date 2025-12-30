// lang-manager.js
// Language manager for Nepali Political History App

const LanguageManager = {
    currentLang: 'nep',
    unitsData: null,
    unitOrder: null,
    
    // UI translations
    translations: {
        nep: {
            appTitle: "नेपाली राजनीतिक इतिहास",
            appSubtitle: "नेपालको राजनीतिक यात्रा र निर्वाचन डाटाको विस्तृत अभिलेख",
            navHistory: "ऐतिहासिक घटनाहरू",
            navElections: "निर्वाचन डाटा",
            navAbout: "बारेमा",
            navItems: {
                revolution2007: "२००७ सालको क्रान्ति",
                firstCabinet: "पहिलो प्रजातान्त्रिक मन्त्रिमण्डल",
                politicalParties: "प्रारम्भिक राजनीतिक दलहरू",
                referendum: "२०३७ जनमत संग्रह",
                movement2046: "२०४६ जनआन्दोलन",
                movement2062: "२०६२/६३ जनआन्दोलन II",
                election2015: "पहिलो निर्वाचन २०१५ साल",
                electionComparison: "निर्वाचन तुलना",
                constituencies: "निर्वाचन क्षेत्र वितरण",
                localElections: "स्थानीय निर्वाचन २०७५",
                federalElections: "संघीय निर्वाचन २०७४",
                about: "यो डाटाको बारेमा"
            },
            dataSource: "डाटा स्रोत: नेपाली राजनीतिक इतिहास अभिलेख",
            btnPrint: "प्रिन्ट",
            btnShare: "सेयर",
            btnPrev: "अघिल्लो",
            btnNext: "अर्को",
            pageText: "खण्ड",
            ofText: "मध्ये",
            footerText: "© २०२३ नेपाली राजनीतिक इतिहास अभिलेख। यो अनुप्रयोगले शैक्षिक उद्देश्यको लागि ऐतिहासिक डाटा प्रस्तुत गर्दछ।",
            disclaimerText: "डाटा स्पष्टता र शुद्धताको लागि परिमार्जन गरिएको छ। केही मितिहरू बिक्रम सम्बत (साल) अनुसार छन्।"
        },
        eng: {
            appTitle: "Nepali Political History",
            appSubtitle: "Comprehensive documentation of Nepal's political journey and election data",
            navHistory: "Historical Events",
            navElections: "Elections Data",
            navAbout: "About",
            navItems: {
                revolution2007: "2007 BS Revolution",
                firstCabinet: "First Democratic Cabinet",
                politicalParties: "Early Political Parties",
                referendum: "2037 Referendum",
                movement2046: "2046 People's Movement",
                movement2062: "2062/63 People's Movement II",
                election2015: "First Election 2015 BS",
                electionComparison: "Election Comparison",
                constituencies: "Constituency Distribution",
                localElections: "Local Elections 2075",
                federalElections: "Federal Elections 2074",
                about: "About This Data"
            },
            dataSource: "Data Source: Nepali Political History Records",
            btnPrint: "Print",
            btnShare: "Share",
            btnPrev: "Previous",
            btnNext: "Next",
            pageText: "Section",
            ofText: "of",
            footerText: "© 2023 Nepali Political History Archive. This application presents historical data for educational purposes.",
            disclaimerText: "Data has been refined for clarity and accuracy. Some dates follow the Bikram Sambat (BS) calendar."
        }
    },
    
    // Load language data
    async loadLanguage(lang) {
        try {
            // Remove previous script if exists
            const oldScript = document.getElementById('langDataScript');
            if (oldScript) oldScript.remove();
            
            // Load new language data
            const script = document.createElement('script');
            script.id = 'langDataScript';
            script.src = lang === 'nep' ? 'unitesNep.js' : 'unitsen.js';
            
            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
            
            // Update current language
            this.currentLang = lang;
            
            // Update UI translations
            this.updateUITranslations();
            
            // Update button states
            this.updateLanguageButtons();
            
            // Save preference to localStorage
            localStorage.setItem('preferredLang', lang);
            
            // Notify app to reload content
            if (window.reloadContent) {
                window.reloadContent();
            }
            
            return true;
        } catch (error) {
            console.error('Error loading language:', error);
            return false;
        }
    },
    
    // Update UI translations
    updateUITranslations() {
        const lang = this.translations[this.currentLang];
        
        // Update all translatable elements
        document.getElementById('appTitle').textContent = lang.appTitle;
        document.getElementById('appSubtitle').textContent = lang.appSubtitle;
        document.getElementById('navHistory').textContent = lang.navHistory;
        document.getElementById('navElections').textContent = lang.navElections;
        document.getElementById('navAbout').textContent = lang.navAbout;
        document.getElementById('dataSource').textContent = lang.dataSource;
        document.getElementById('btnPrint').textContent = lang.btnPrint;
        document.getElementById('btnShare').textContent = lang.btnShare;
        document.getElementById('btnPrev').textContent = lang.btnPrev;
        document.getElementById('btnNext').textContent = lang.btnNext;
        document.getElementById('pageText').textContent = lang.pageText;
        document.getElementById('ofText').textContent = lang.ofText;
        document.getElementById('footerText').textContent = lang.footerText;
        document.getElementById('disclaimerText').textContent = lang.disclaimerText;
        
        // Update navigation items
        document.querySelectorAll('.nav-text').forEach(span => {
            const parentLink = span.closest('.nav-link');
            if (parentLink) {
                const unitId = parentLink.getAttribute('data-unit');
                if (unitId && lang.navItems[unitId]) {
                    span.textContent = lang.navItems[unitId];
                }
            }
        });
    },
    
    // Update language buttons
    updateLanguageButtons() {
        const nepBtn = document.getElementById('btnNep');
        const engBtn = document.getElementById('btnEng');
        
        nepBtn.classList.toggle('active', this.currentLang === 'nep');
        engBtn.classList.toggle('active', this.currentLang === 'eng');
    },
    
    // Initialize language
    async init() {
        // Load saved language preference or default to Nepali
        const savedLang = localStorage.getItem('preferredLang') || 'nep';
        
        // Load language data
        await this.loadLanguage(savedLang);
        
        // Set up button event listeners
        document.getElementById('btnNep').addEventListener('click', () => {
            this.loadLanguage('nep');
        });
        
        document.getElementById('btnEng').addEventListener('click', () => {
            this.loadLanguage('eng');
        });
    }
};

// Make LanguageManager available globally
window.LanguageManager = LanguageManager;

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
});