// Data and Utility Functions Module

// Authors Data
window.authorsData = [
    {
        id: 'bhanubhakta',
        name: 'भानुभक्त आचार्य',
        years: 'वि.सं. १८७१-१९२५',
        description: 'नेपाली भाषाका आदिकवि, रामायणका नेपाली अनुवादक',
        birthPlace: 'तनहुँ जिल्लाको चुँदी रम्घा गाउँ',
        deathPlace: 'रम्घा गाउँ',
        education: 'संस्कृत, हिन्दी (काशीबाट)',
        titles: ['आदिकवि', 'जातीय कवि'],
        works: [
            { title: 'रामायण (महाकाव्य)', year: '१८९८-१९१०', type: 'काव्य' },
            { title: 'प्रश्नोत्तरी', year: '१९१०', type: 'धार्मिक' },
            { title: 'भक्तमाला', year: '१९१०', type: 'भक्ति काव्य' },
            { title: 'बधुशिक्षा', year: '१९१९', type: 'शिक्षाप्रद' },
            { title: 'रामगीता', year: '१९१९', type: 'दार्शनिक' },
            { title: 'कान्तिपुर', year: '१८८९-१९२५', type: 'फुटकर कविता' },
            { title: 'बालाजी वर्णन', year: '१८८९-१९२५', type: 'फुटकर कविता' }
        ],
        contributions: [
            'रामायणको नेपाली भाषामा अनुवाद',
            'नेपाली भाषालाई साहित्यिक भाषाको रूपमा स्थापना',
            'लोकभाषामा कविता लेख्ने परम्पराको सुरुवात'
        ],
        honors: [
            'आदिकवि (मोतीराम भट्टद्वारा प्रदत्त)',
            'नेपाली साहित्यका प्रथम ध्वनि (लक्ष्मीप्रसाद देवकोटा)',
            'आदि प्रतिनिधि कवि (हृदयचन्द्रसिंह प्रधान)'
        ]
    },
    {
        id: 'motiram',
        name: 'मोतीराम भट्ट',
        years: 'वि.सं. १९२३-१९५३',
        description: 'युवक कवि, नेपाली पत्रिकाका प्रथम पत्रकार र सम्पादक',
        birthPlace: 'काठमाडौँको भोसीको टोल',
        deathPlace: 'काठमाडौँ',
        education: 'फारसी, हिन्दी (काशीबाट)',
        titles: ['युवक कवि', 'शृङ्गारिक कवि'],
        works: [
            { title: 'मनोद्वेग प्रवाह', year: 'लेखन: १९४२, प्रकाशन: १९५७', type: 'कवितासङ्ग्रह' },
            { title: 'गजेन्द्रमोक्ष', year: '१९४८', type: 'खण्डकाव्य' },
            { title: 'शकुन्तला', year: '१९४४', type: 'नाटक' },
            { title: 'प्रियदर्शिका', year: '१९४५', type: 'नाटक' },
            { title: 'गुलसनोवर', year: '१९४६', type: 'आख्यान' },
            { title: 'आदिकवि भानुभक्त आचार्यको जीवन चरित्र', year: '१९४८', type: 'जीवनी' }
        ],
        contributions: [
            'भानुभक्त आचार्यको रामायण प्रकाशन',
            'गोर्खा भारतजीवन पत्रिकाको सम्पादन',
            'मोतिमण्डली गठन',
            'मोतीकृष्ण पुस्तकालय स्थापना'
        ],
        honors: [
            'नेपाली पत्रिकाका प्रथम पत्रकार र सम्पादक',
            'भानुभक्तको कृतिको संरक्षक'
        ]
    },
    {
        id: 'devkota',
        name: 'लक्ष्मीप्रसाद देवकोटा',
        years: 'वि.सं. १९६६-२०१६',
        description: 'महाकवि, नेपाली साहित्यका विराट प्रतिभा',
        birthPlace: 'काठमाडौँको धोबीधारा',
        deathPlace: 'काठमाडौँ',
        education: 'एम.ए. (अंग्रेजी साहित्य), बी.एल.',
        titles: ['महाकवि', 'नेपाली साहित्यका विराट प्रतिभा'],
        works: [
            { title: 'मुनामदन', year: '१९९१', type: 'खण्डकाव्य', description: 'सर्वाधिक लोकप्रिय कृति' },
            { title: 'शाकुन्तल', year: '२००२', type: 'महाकाव्य', description: '३ महिनामा लेखिएको' },
            { title: 'सुलोचना', year: '२००३', type: 'महाकाव्य', description: '१० दिनमा लेखिएको' },
            { title: 'पहाडी पुकार', year: '२००५', type: 'कवितासङ्ग्रह' },
            { title: 'भिखारी', year: '२०१०', type: 'कवितासङ्ग्रह' },
            { title: 'चम्पा', year: '२०२४', type: 'उपन्यास' }
        ],
        contributions: [
            'नेपाली कवितामा रोमान्टिक धाराको सूत्रपात',
            'युगवाणी पत्रिकाको सम्पादन',
            'राष्ट्रिय विद्यापीठका उपकुलपति',
            'शिक्षामन्त्री'
        ],
        honors: [
            'त्रिभुवन पुरस्कार (वि.सं. २०२३)',
            'रोयल नेपाल एकेडेमीका आजीवन सदस्य'
        ]
    }
];

// Additional Data for Search and Reference
window.additionalData = {
    honors: [
        { title: 'कवि शिरोमणि', recipient: 'लेखनाथ पौड्याल' },
        { title: 'इतिहास शिरोमणि', recipient: 'बाबुराम आचार्य' },
        { title: 'आशुकवि', recipient: 'शम्भुप्रसाद ढुङ्गेल' },
        { title: 'गद्य कवि', recipient: 'गोपालप्रसाद रिमाल' },
        { title: 'युग कवि', recipient: 'सिद्धिचरण श्रेष्ठ' },
        { title: 'राष्ट्रकवि', recipient: 'माधवप्रसाद घिमिरे' },
        { title: 'स्वर सम्राट', recipient: 'नारायण गोपाल' }
    ],
    timelines: [
        { year: '१८७१', event: 'भानुभक्त आचार्यको जन्म' },
        { year: '१९२३', event: 'मोतीराम भट्टको जन्म' },
        { year: '१९२५', event: 'भानुभक्त आचार्यको निधन' },
        { year: '१९४४', event: 'भानुभक्तको सम्पूर्ण रामायण प्रकाशन' },
        { year: '१९५३', event: 'मोतीराम भट्टको निधन' },
        { year: '१९६६', event: 'लक्ष्मीप्रसाद देवकोटाको जन्म' },
        { year: '१९९१', event: 'मुनामदन प्रकाशन' },
        { year: '२०१६', event: 'लक्ष्मीप्रसाद देवकोटाको निधन' }
    ]
};

// Utility Functions

// Format Nepali date
function formatNepaliDate(vikramYear) {
    return `वि.सं. ${vikramYear}`;
}

// Get author by ID
function getAuthorById(id) {
    return window.authorsData.find(author => author.id === id);
}

// Get works by author ID
function getWorksByAuthorId(id) {
    const author = getAuthorById(id);
    return author ? author.works : [];
}

// Calculate author's age at death
function calculateAge(birthYear, deathYear) {
    return deathYear - birthYear;
}

// Filter works by type
function filterWorksByType(works, type) {
    return works.filter(work => work.type === type);
}

// Sort works by year
function sortWorksByYear(works, ascending = true) {
    return works.sort((a, b) => {
        // Extract year numbers from strings
        const yearA = extractYearNumber(a.year);
        const yearB = extractYearNumber(b.year);
        
        return ascending ? yearA - yearB : yearB - yearA;
    });
}

// Helper function to extract year number from string
function extractYearNumber(yearString) {
    if (!yearString) return 0;
    
    // Try to find first 4-digit number
    const match = yearString.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
}

// Get statistics about authors
function getAuthorsStatistics() {
    const stats = {
        totalAuthors: window.authorsData.length,
        totalWorks: 0,
        averageAge: 0,
        earliestBirthYear: Infinity,
        latestDeathYear: 0,
        workTypes: {}
    };
    
    let totalAge = 0;
    
    window.authorsData.forEach(author => {
        // Calculate birth and death years
        const birthYear = parseInt(author.years.match(/\d{4}/)[0]);
        const deathYear = parseInt(author.years.match(/\d{4}/g)[1]);
        
        // Update stats
        stats.totalWorks += author.works.length;
        totalAge += calculateAge(birthYear, deathYear);
        
        if (birthYear < stats.earliestBirthYear) {
            stats.earliestBirthYear = birthYear;
        }
        
        if (deathYear > stats.latestDeathYear) {
            stats.latestDeathYear = deathYear;
        }
        
        // Count work types
        author.works.forEach(work => {
            if (stats.workTypes[work.type]) {
                stats.workTypes[work.type]++;
            } else {
                stats.workTypes[work.type] = 1;
            }
        });
    });
    
    stats.averageAge = Math.round(totalAge / stats.totalAuthors);
    
    return stats;
}

// Generate timeline data from authors
function generateTimelineData() {
    const timeline = [];
    
    window.authorsData.forEach(author => {
        // Extract years
        const years = author.years.match(/\d{4}/g);
        if (years && years.length >= 2) {
            const birthYear = parseInt(years[0]);
            const deathYear = parseInt(years[1]);
            
            timeline.push({
                year: birthYear,
                event: `${author.name}को जन्म`,
                authorId: author.id
            });
            
            timeline.push({
                year: deathYear,
                event: `${author.name}को निधन`,
                authorId: author.id
            });
        }
        
        // Add significant works
        author.works.forEach(work => {
            const year = extractYearNumber(work.year);
            if (year > 0) {
                timeline.push({
                    year: year,
                    event: `${work.title} प्रकाशन`,
                    authorId: author.id,
                    workTitle: work.title
                });
            }
        });
    });
    
    // Sort timeline by year
    return timeline.sort((a, b) => a.year - b.year);
}

// Export utility functions for use in other modules
window.nepaliLiteratureUtils = {
    formatNepaliDate,
    getAuthorById,
    getWorksByAuthorId,
    calculateAge,
    filterWorksByType,
    sortWorksByYear,
    getAuthorsStatistics,
    generateTimelineData
};

// Initialize some data display on page load
document.addEventListener('DOMContentLoaded', function() {
    // Display statistics in console (for debugging)
    const stats = window.nepaliLiteratureUtils.getAuthorsStatistics();
    console.log('नेपाली साहित्यकार तथ्याङ्क:', stats);
    
    // Generate and log timeline
    const timeline = window.nepaliLiteratureUtils.generateTimelineData();
    console.log('कालक्रम डाटा:', timeline);
});