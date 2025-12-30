// app.js - मुख्य अनुप्रयोग लजिक

import { UNMissionData, UtilityFunctions } from './units.js';

// DOM तत्वहरू
const themeToggle = document.getElementById('themeToggle');
const fontSizeToggle = document.getElementById('fontSizeToggle');
const backToTop = document.getElementById('backToTop');
const printBtn = document.getElementById('printBtn');
const shareBtn = document.getElementById('shareBtn');
const missionsContainer = document.getElementById('missionsContainer');
const missionFilter = document.querySelector('.mission-filter');
const tocLinks = document.querySelectorAll('.contents-nav a');

// थिम प्रबन्धन
let currentTheme = localStorage.getItem('theme') || 'light';
let currentFontSize = localStorage.getItem('fontSize') || 'normal';

// अनुप्रयोग आरम्भ
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  loadMissions();
  setupEventListeners();
  setupMissionFilter();
  updateActiveSection();
});

// अनुप्रयोग आरम्भिकरण
function initializeApp() {
  // थिम सेट गर्ने
  setTheme(currentTheme);
  
  // फन्ट साइज सेट गर्ने
  setFontSize(currentFontSize);
  
  // वर्तमान वर्ष सेट गर्ने
  setCurrentYear();
  
  // स्क्रोल इभेन्ट सेट गर्ने
  window.addEventListener('scroll', handleScroll);
}

// थिम सेट गर्ने प्रकार्य
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // थिम टगल बटन अपडेट गर्ने
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> हल्का थिम';
  } else {
    icon.className = 'fas fa-moon';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> गाढा थिम';
  }
}

// फन्ट साइज सेट गर्ने प्रकार्य
function setFontSize(size) {
  const sizes = {
    'small': '14px',
    'normal': '16px',
    'large': '18px',
    'xlarge': '20px'
  };
  
  document.documentElement.style.fontSize = sizes[size];
  localStorage.setItem('fontSize', size);
  
  // फन्ट साइज बटन अपडेट गर्ने
  const sizesText = {
    'small': 'सानो',
    'normal': 'सामान्य',
    'large': 'ठूलो',
    'xlarge': 'धेरै ठूलो'
  };
  
  fontSizeToggle.innerHTML = `<i class="fas fa-text-height"></i> फन्ट: ${sizesText[size]}`;
}

// वर्तमान वर्ष सेट गर्ने
function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  const nepaliYear = UtilityFunctions.numberToNepaliWords(currentYear);
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(el => {
    el.textContent = `${nepaliYear} सम्म अद्यावधिक`;
  });
}

// मिशनहरू लोड गर्ने
function loadMissions() {
  missionsContainer.innerHTML = '';
  
  UNMissionData.missions.forEach(mission => {
    const missionCard = createMissionCard(mission);
    missionsContainer.appendChild(missionCard);
  });
}

// मिशन कार्ड सिर्जना गर्ने
function createMissionCard(mission) {
  const card = document.createElement('div');
  card.className = 'mission-card';
  
  // मिशनको स्थिति निर्धारण गर्ने
  const status = UtilityFunctions.getMissionStatus(mission.years);
  const statusClass = status === 'सक्रिय' ? 'active' : 'completed';
  
  // प्रकार बेजहरू सिर्जना गर्ने
  const typeBadges = mission.type.map(type => {
    const typeClass = type.toLowerCase();
    return `<span class="type-badge ${typeClass}">${type}</span>`;
  }).join('');
  
  card.innerHTML = `
    <div class="mission-header">
      <div class="mission-code">${mission.code}</div>
      <div class="mission-status ${statusClass}">${status}</div>
    </div>
    <div class="mission-name">${mission.name}</div>
    <div class="mission-types">${typeBadges}</div>
    <div class="mission-years"><i class="fas fa-calendar-alt"></i> ${mission.years}</div>
  `;
  
  // मिशन स्थिति अनुसार कक्षा थप्ने
  if (statusClass === 'active') {
    card.classList.add('active');
  } else {
    card.classList.add('completed');
  }
  
  return card;
}

// मिशन फिल्टर सेटअप
function setupMissionFilter() {
  const filterButtons = missionFilter.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // सक्रिय क्लास हटाउने
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // नयाँ सक्रिय क्लास थप्ने
      button.classList.add('active');
      
      // फिल्टर लागू गर्ने
      const filter = button.getAttribute('data-filter');
      filterMissions(filter);
    });
  });
}

// मिशन फिल्टर गर्ने
function filterMissions(filter) {
  const missionCards = missionsContainer.querySelectorAll('.mission-card');
  
  missionCards.forEach(card => {
    card.style.display = 'block';
    
    // सबै फिल्टर
    if (filter === 'all') return;
    
    // सक्रिय फिल्टर
    if (filter === 'active') {
      if (!card.classList.contains('active')) {
        card.style.display = 'none';
      }
      return;
    }
    
    // प्रकार अनुसार फिल्टर
    let shouldShow = false;
    const typeBadges = card.querySelectorAll('.type-badge');
    
    typeBadges.forEach(badge => {
      if (badge.classList.contains(filter)) {
        shouldShow = true;
      }
    });
    
    if (!shouldShow) {
      card.style.display = 'none';
    }
  });
}

// स्क्रोल व्यवहार प्रबन्धन
function handleScroll() {
  // शीर्षमा जाने बटन प्रदर्शन
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
  
  // सक्रिय सेक्सन अपडेट
  updateActiveSection();
}

// सक्रिय सेक्सन अपडेट गर्ने
function updateActiveSection() {
  const sections = document.querySelectorAll('.book-section');
  const scrollPosition = window.scrollY + 100;
  
  let currentSectionId = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionId = sectionId;
    }
  });
  
  // TOC लिंक अपडेट
  tocLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === currentSectionId) {
      link.classList.add('active');
      link.style.backgroundColor = 'rgba(139, 69, 19, 0.15)';
      link.style.borderLeftColor = 'var(--secondary-color)';
    } else {
      link.style.backgroundColor = '';
      link.style.borderLeftColor = '';
    }
  });
}

// इभेन्ट लिस्नरहरू सेटअप गर्ने
function setupEventListeners() {
  // थिम टगल
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
  });
  
  // फन्ट साइज टगल
  fontSizeToggle.addEventListener('click', () => {
    const sizes = ['small', 'normal', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(currentFontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    currentFontSize = sizes[nextIndex];
    setFontSize(currentFontSize);
  });
  
  // शीर्षमा जाने
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // प्रिन्ट बटन
  printBtn.addEventListener('click', () => {
    window.print();
  });
  
  // सेयर बटन
  shareBtn.addEventListener('click', () => {
    shareContent();
  });
  
  // TOC लिंकहरू
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// सामग्री सेयर गर्ने
function shareContent() {
  const shareData = {
    title: 'संयुक्त राष्ट्र मिशन र सशस्त्र प्रहरी बल नेपाल',
    text: 'विश्व शान्ति सेवामा नेपालको सशस्त्र प्रहरी बलको योगदान - २०२५ सम्म अद्यावधिक',
    url: 'https://play.google.com/store/apps/details?id=com.bikram.logplush&pcampaignid=web_share'
  };
  
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('सामग्री सफलतापूर्वक सेयर गरियो'))
      .catch(error => console.log('सेयर गर्दा त्रुटि:', error));
  } else {
    // वैकल्पिक सेयर विकल्प
    alert('तपाईंको ब्राउजरले सेयर सुविधा समर्थन गर्दैन। लिंक कपी गर्नुहोस्: ' + window.location.href);
  }
}

// तथ्याङ्क अपडेट गर्ने (२०२५ को लागि)
function updateStatisticsFor2025() {
  // कुल सहभागी गणना
  const totalParticipants = UtilityFunctions.calculateTotalParticipants();
  const totalElement = document.createElement('div');
  totalElement.className = 'total-participants';
  totalElement.innerHTML = `
    <h3><i class="fas fa-users"></i> २०२५ सम्म कुल सहभागिता</h3>
    <div class="total-stats">
      <div class="total-stat">
        <span class="stat-number">${UtilityFunctions.numberToNepaliWords(totalParticipants)}</span>
        <span class="stat-label">जना सशस्त्र प्रहरी कर्मचारी</span>
      </div>
    </div>
  `;
  
  // तथ्याङ्क सेक्सनमा थप्ने
  const statisticsSection = document.getElementById('statistics');
  const statsOverview = statisticsSection.querySelector('.stats-overview');
  statsOverview.parentNode.insertBefore(totalElement, statsOverview.nextSibling);
}

// अपडेटहरू स्वचालित रूपमा लोड गर्ने
window.addEventListener('load', () => {
  updateStatisticsFor2025();
  
  // स्थानीय भण्डारणबाट डाटा लोड गर्ने
  const savedTheme = localStorage.getItem('theme');
  const savedFontSize = localStorage.getItem('fontSize');
  
  if (savedTheme) {
    setTheme(savedTheme);
  }
  
  if (savedFontSize) {
    setFontSize(savedFontSize);
  }
});