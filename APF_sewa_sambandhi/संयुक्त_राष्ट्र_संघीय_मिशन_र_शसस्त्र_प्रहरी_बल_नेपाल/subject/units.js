// units.js - डाटा संरचना र उपयोगी प्रकार्यहरू

// संयुक्त राष्ट्र मिशन सम्बन्धी डाटा संरचना
const UNMissionData = {
  // नेपालको संयुक्त राष्ट्र सदस्यता सम्बन्धी जानकारी
  nepalUNMembership: {
    joiningDate: "सन् १९५५ डिसेम्बर १४",
    currentStatus: "सक्रिय सदस्य",
    membershipNumber: "१९३ मध्ये एक"
  },

  // शान्ति सेनाको उद्देश्यहरू
  peacekeepingObjectives: [
    "सम्बन्धित राष्ट्रले मानवअधिकार मापदण्डहरूको पालना गर्ने कुरा सुनिश्चित गर्न मद्दत गर्ने",
    "स्थानीय प्रहरी सेवा स्थापना गर्न तथा तिनको कामलाई राम्रो बनाउन सहायता गर्ने",
    "स्थानीय प्रहरीलाई सल्लाह दिने",
    "तालिम दिने",
    "जटिल स्थितिबाट पीडित जनताका लागि सहज वातावरण तयार गर्ने",
    "द्वन्द्वलाई प्रभावकारी व्यवस्थापन गर्ने",
    "सुरक्षित वातावरण तयार गर्ने"
  ],

  // सशस्त्र प्रहरी बलको इतिहास
  apfHistory: {
    firstPeacekeeping: {
      year: "सन् १९५८",
      location: "लेवनान",
      forceType: "नेपाली सेना"
    },
    apfFirstParticipation: {
      year: "सन् २००२ अक्टोबर (वि.सं. २०५९)",
      initialStrength: "२४० जना",
      unitType: "अनपोल मनिटर प्रहरी इकाई (FPU)"
    }
  },

  // मिशनहरूको सूची (२०२५ सम्म अद्यावधिक)
  missions: [
    { code: "UNGCI", name: "इराक", type: ["UNPOL"], years: "२००२-२००३" },
    { code: "UNMIK", name: "कोसोभो", type: ["IPO", "FPU"], years: "२००३-वर्तमान" },
    { code: "UNMIL", name: "लाइबेरिया", type: ["IPO", "FPU"], years: "२००३-२०१६" },
    { code: "UNAMSIL", name: "सिएरा लियोन", type: ["IPO"], years: "२००५-२००६" },
    { code: "MINUSTAH", name: "हाइटी", type: ["IPO"], years: "२००६-२०१७" },
    { code: "UNMIS", name: "सुडान", type: ["IPO"], years: "२००६-२०११" },
    { code: "UNAMID", name: "दारफुर", type: ["IPO", "Professional"], years: "२००८-२०२०" },
    { code: "UNMIT", name: "पूर्वी टिमोर", type: ["IPO"], years: "२००८-२०१२" },
    { code: "UNFICYP", name: "साइप्रस", type: ["IPO"], years: "२०१०-वर्तमान" },
    { code: "UNAMI", name: "इराक", type: ["IPO"], years: "२०११-२०१३" },
    { code: "UNMISS", name: "दक्षिण सुडान", type: ["IPO", "FPU"], years: "२०११-वर्तमान" },
    { code: "UNIPSIL", name: "सिएरा लियोन", type: ["IPO"], years: "२०१३" },
    { code: "UNISFA", name: "अबिए", type: ["IPO"], years: "२०१४-वर्तमान" },
    { code: "UNSOM", name: "सोमालिया", type: ["IPO"], years: "२०१४-वर्तमान" },
    { code: "MONUSCO", name: "कंगो लोकतान्त्रिक गणतन्त्र", type: ["IPO"], years: "२०१५-वर्तमान" },
    { code: "UNITAMS", name: "सुडान", type: ["IPO"], years: "२०२१-वर्तमान" },
    { code: "UN Headquarters", name: "न्यूयोर्क", type: ["Professional"], years: "२०२०-वर्तमान" }
  ],

  // सहभागिता तथ्याङ्क (२०२३ सम्म)
  participationStats: {
    totalPersonnel: {
      fpu: 7904,
      ipo: 872,
      professional: 3,
      total: 8779
    },
    femaleParticipation: {
      ipo: 26,
      fpu: 401,
      currentIPO: 4,
      currentFPU: 32,
      percentage: "४.८%"
    },
    fatalities: [
      { name: "निरीक्षक दिलबहादुर कार्की", date: "१९ डिसेम्बर २००४", mission: "UNMIL" },
      { name: "SHC मिलन कुमार कार्की (ख)", date: "२४ सेप्टेम्बर २००९", mission: "UNMIL" }
    ]
  },

  // वर्तमान तैनाथी (२०२५ सम्म)
  currentDeployments: {
    ipoAndProfessional: [
      { mission: "UNMISS", count: 17, note: "१ DIG P-4 सहित" },
      { mission: "MONUSCO", count: 2 },
      { mission: "UNFICYP", count: 1 },
      { mission: "न्यूयोर्क", count: 1, note: "P-3" }
    ],
    fpu: [
      { mission: "UNMISS जुबा-१०", count: 180 }
    ]
  },

  // छनौट मापदण्ड
  selectionCriteria: {
    general: [
      "सेवा अवधि ६ वर्ष पुगेको",
      "शैक्षिक योग्यता कम्तीमा एसएलसी वा सो सरह उत्तीर्ण भएको",
      "कम्प्युटरसम्बन्धी ज्ञान भएको",
      "अङ्ग्रेजी राम्रोसँग लेख्न र पढ्न सक्ने",
      "दर्जा अनुसार गर्नु पर्ने सम्पूर्ण तालिमहरू पूरा गरेको",
      "कारवाही भएको वा कारवाही प्रक्रियामा नरहेको",
      "सवारी चालक अनुमतिपत्र प्राप्त गरी परीक्षणकाल पूरा गरेको",
      "संयुक्त राष्ट्र संघीय मिसनमा पहिला गएको भए मिसनबाट फर्क्रेको २ वर्ष पूरा भएको"
    ],
    professionalPosts: [
      "UNPOL मिसनको अनुभव भएको हुनु पर्ने",
      "पहिला मिसनमा गएको भए मिसनबाट फर्क्रेको १ वर्ष पूरा भएको हुनु पर्ने",
      "विभागीय कारवाहीमा परेका वा कारवाही प्रक्रियामा नभएको"
    ]
  },

  // सुरक्षा परिषद्को प्रस्ताव १३२५ बमोजिमका नियम
  securityCouncilResolution1325: [
    "निर्णय लिने प्रक्रियामा महिलाहरुको पूर्ण सहभागिता सुनिश्चित गर्नु",
    "लैङ्गिक समानताको सिद्धान्तअनुसार काम गर्नु",
    "महिला र बालबालिकाहरूको अधिकार र विशेष आवश्यकता पूरा गर्नु",
    "मानवअधिकार सम्बन्धी सिद्धान्तहरूको पालना गर्नु",
    "जाति, लिङ्ग, भाषा वा धर्मका भिन्नता बिना सबैको लागि मौलिक स्वतन्त्रता र मानवअधिकारको सम्मान गर्नु",
    "संयुक्त राष्ट्रसंघको नीति र आचरण बमोजिम कार्य गर्नु",
    "समुदायलाई सल्लाह दिने तथा कानूनको पालना गर्न उत्साहित गर्नु",
    "सबै मिसनका स्तरीय, क्रियात्मक तथा प्रशासनिक कार्यविधि, नीति, निर्देशिका र जारी भएका अन्य कागजातहरूको पालना गर्नु",
    "संयुक्त राष्ट्रसंघप्रति नकारात्मक छवि बनाउने कुनै प्रकारका कार्य नगर्नु"
  ],

  // "UN FPU मिसन छनौट (दोस्रो संशोधन) निर्देशिका, २०७३" मा भएको संशोधन
  selectionGuidelinesAmendments: {
    serviceRequirement: "अनिवार्य रूपमा १५ वर्ष सेवा अवधि पूरा भएको हुनुपर्ने",
    technicalSelection: "भाषागत एवं प्राविधिक दक्षताको आधारमा मिसनमा छनौट",
    bmiRequirement: "BMI अनिवार्य रूपमा उत्तीर्ण भएको हुनुपर्ने",
    trainingRequirements: "दर्जिगत आधारभूत र व्यवसायिक तालिम अनिवार्य रूपमा पुरा गरेको",
    seniorityBasis: "समान मितिमा भर्ती तथा पदोन्नति भएका कर्मचारीहरूको हकमा ज्येष्ठताक्रम अनुसार छनौट",
    disciplinaryActions: [
      "२ वासो भन्दा बढी विभागीय सजाय भएका: ७ वर्ष पूरा भएको हुनुपर्ने",
      "२ वा सो भन्दा बढी पटक नाम कटाएका: ५ वर्ष पूरा भएको हुनुपर्ने",
      "बढुवाको सम्भावित उम्मेदवार भई बढुवा फाराम नबुझाएका: ३ वर्ष पूरा भएको हुनुपर्ने",
      "१ पटक मात्र विभागीय सजाय भएका: सजाय फुकुवा भएको १ वर्ष पूरा भएको हुनुपर्ने"
    ],
    disqualificationConditions: [
      "UN Mission बाट कारवाहीको लागि सिफारिस भएको",
      "मानवअधिकार, लैंगिक हिंसा र आर्थिक अनियमितता अख्तियार प्राप्त निकायबाट कारवाहीमा परेका",
      "मुलुकी अपराध संहिता, २०७४ लागू हुनु पूर्व बहु-विवाह गरेको",
      "लगातार वा पटक-पटक गरी १२ महिनाभन्दा बढी समय ड्यूटी गर्न नसक्ने भनी चिकित्सकको राय अभिलेखबाट देखिएमा"
    ]
  },

  // शिक्षा र तालिम सम्बन्धी नियम
  trainingAndEducationRules: {
    inspectorSelection: "८०% खुला भर्नाको ज्येष्ठताक्रमबाट र २०% भर्ना मितिको ज्येष्ठताक्रम अनुसार",
    juniorOfficers: {
      deputyInspector: "६७% - स.प्र.ना.नि. (४०% प्रविणता प्रमाणपत्र, ६०% एस.एल.सी.)",
      assistantInspector: "३३% - स.प्र.स.नि. (६०% प्रविणता प्रमाणपत्र, ४०% एस.एल.सी.)"
    },
    otherRanks: "सशस्त्र प्रहरी बरिष्ठ हवल्दार देखि सशस्त्र प्रहरी जवान सम्मको दर्जाबाट भर्ना मितिको ज्येष्ठताक्रमको आधारमा"
  },

  // तालिम र प्रशिक्षण व्यवस्था
  trainingSystem: {
    preFpatExam: "सिनियर अधिकृत तथा प्रविणता प्रमाणपत्र तह उत्तीर्ण जुनियर अधिकृतको छनौट गर्दा Pre-FPAT परीक्षा",
    preDeploymentTraining: "मिशन छनौट पश्चात् संचालन हुने Pre-Deployment तालिममा सैद्धान्तिक र व्यावहारिक विषयहरू",
    trainingAbsencePolicy: "लगातार वा पटक-पटक गरी १५ दिनभन्दा बढी तालिममा अनुपस्थित भएमा मिशन सहभागिता रद्द",
    promotionAfterMission: "मिशन छनौट पश्चात् बढुवा भएकाहरूको हकमा मिशनको कार्यकाल समापन पश्चात् मात्र दज्र्यानी चिन्ह प्रदान"
  }
};

// उपयोगी प्रकार्यहरू
const UtilityFunctions = {
  // नेपाली संख्यालाई शब्दमा रूपान्तरण गर्ने प्रकार्य
  numberToNepaliWords: (num) => {
    const nepaliNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return num.toString().split('').map(digit => nepaliNumbers[digit] || digit).join('');
  },

  // वर्ष गणना प्रकार्य
  calculateYearsSince: (startYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  },

  // मिशनको स्थिति जाँच गर्ने प्रकार्य
  getMissionStatus: (endYear) => {
    if (!endYear || endYear === 'वर्तमान') return 'सक्रिय';
    const currentYear = new Date().getFullYear();
    return parseInt(endYear) >= currentYear ? 'सक्रिय' : 'समाप्त';
  },

  // डाटा फिल्टर गर्ने प्रकार्य
  filterMissionsByType: (type) => {
    return UNMissionData.missions.filter(mission => mission.type.includes(type));
  },

  // कुल सहभागी गणना
  calculateTotalParticipants: () => {
    const stats = UNMissionData.participationStats.totalPersonnel;
    return stats.fpu + stats.ipo + stats.professional;
  }
};

// निर्यात गर्ने
export { UNMissionData, UtilityFunctions };