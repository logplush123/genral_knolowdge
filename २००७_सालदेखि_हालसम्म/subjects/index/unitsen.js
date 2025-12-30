// units.js
// Structured data for the Nepali Political History application

const unitsData = {
    // Unit 1: 2007 BS Revolution
    revolution2007: {
        id: "revolution2007",
        title: "2007 BS Democratic Revolution",
        subtitle: "The establishment of democracy in Nepal",
        icon: "star-of-life",
        sections: [
            {
                type: "text",
                content: "The 2007 BS Revolution marked the establishment of democracy in Nepal's political history. This movement ended the Rana autocracy and introduced democratic governance."
            },
            {
                type: "highlight",
                content: "Key Event: On Kartik 21, 2007 BS, King Tribhuvan, along with family members (except grandson Gyanendra), sought refuge in the Indian Embassy under the pretext of going hunting, with the consent of Sri 3 Mohan Shamsher."
            },
            {
                type: "text",
                content: "Following King Tribhuvan's departure for India on Kartik 25, 2007 BS, armed movements began in various places under the leadership of the Nepali Congress. Despite efforts to bring King Tribhuvan back to the palace, Sri 3 Mohan Shamsher failed and on Kartik 22, 2007 BS, declared Gyanendra as the King of Nepal. However, no country granted official recognition to the child king Gyanendra."
            },
            {
                type: "text",
                content: "To conclude the 2007 BS revolution, a tripartite agreement was reached between the King, Congress, and Ranas under the mediation of then Indian Prime Minister Jawaharlal Nehru. This agreement, also known as the Delhi Agreement, included the following points:"
            },
            {
                type: "list",
                items: [
                    "To hold elections for a Constituent Assembly to prepare a new constitution",
                    "To form an interim government including representatives from Ranas and Nepali Congress (formed under the leadership of King Tribhuvan with Mohan Shamsher as Prime Minister)",
                    "Acceptance of King Sri 5 Tribhuvan"
                ]
            },
            {
                type: "text",
                content: "After the Delhi Agreement, on Poush 24, 2007 BS, the armed movement was declared ended. King Tribhuvan returned to Nepal on Falgun 4, 2007 BS. On Falgun 7, 2007 BS, the Rana rule ended in Nepal, democracy was achieved, and an interim government was announced."
            }
        ]
    },
    
    // Unit 2: First Democratic Cabinet
    firstCabinet: {
        id: "firstCabinet",
        title: "First Democratic Cabinet (2007 BS)",
        subtitle: "The cabinet formed after establishment of democracy",
        icon: "users",
        sections: [
            {
                type: "text",
                content: "After the establishment of democracy in Nepal in 2007 BS, the following cabinet was formed:"
            },
            {
                type: "table",
                headers: ["Minister", "Portfolio", "Representation"],
                rows: [
                    ["Sri 3 Mohan Shamsher JBR", "Prime Minister & Foreign Minister", "Rana"],
                    ["Sri Baber Shamsher JBR", "Defense Minister", "Rana"],
                    ["Sri Bisheshwar Prasad Koirala", "Home Minister", "Congress"],
                    ["Sri Suvarna Shamsher JBR", "Finance Minister", "Congress"],
                    ["Sri Chudaraj Shamsher JBR", "Forest Department Minister", "Rana"],
                    ["Sri Ganesh Man Singh", "Industry & Commerce Minister", "Congress"],
                    ["Sri Nripjang Rana", "Education Minister", "Rana"],
                    ["Sri Bhadrakali Mishra", "Transport Minister", "Congress"],
                    ["Sri Yagya Bahadur Basnet", "Health, Autonomous Governance Minister", "Rana"],
                    ["Sri Bharatmani Sharma", "Food & Agriculture Minister", "Congress"]
                ]
            }
        ]
    },
    
    // Unit 3: Early Political Parties
    politicalParties: {
        id: "politicalParties",
        title: "Early Political Organizations",
        subtitle: "Political parties established before democracy",
        icon: "flag",
        sections: [
            {
                type: "text",
                content: "The following political organizations were established before the establishment of democracy in Nepal:"
            },
            {
                type: "table",
                headers: ["S.N.", "Party Name", "Establishment Year", "Leaders"],
                rows: [
                    ["1", "Praja Parishad", "1993 BS (Jestha 20)", "Merged with CPN-UML on Kartik 23, 2074 BS"],
                    ["2", "Akhil Bharatiya Nepali Rashtriya Congress", "October 11, 1946", "Shri Tanka Prasad Acharya (Chairman)"],
                    ["3", "Nepali Rashtriya Congress", "January 25-26, 1947", "Deviprasad Sapkota (President), Tanka Prasad Acharya (Chairman), Bisheshwar Prasad Koirala (Executive Chairman)"],
                    ["4", "Nepali Congress", "2006 BS (Chaitra)", "Shri Matrika Prasad Koirala (External), Shri Bisheshwar Prasad Koirala (Internal)"],
                    ["5", "Nepal Communist Party", "April 22, 1949 (2010 BS Baishakh)", "Pushpa Lal Shrestha (Founding General Secretary)"],
                    ["6", "Gorkha Dal or Khukuri Dal", "2007 BS (Mangsir)", "Bharat Shamsher (Operator)"]
                ]
            }
        ]
    },
    
    // Unit 4: 2037 Referendum
    referendum: {
        id: "referendum",
        title: "Historic Referendum of 2037 BS",
        subtitle: "Public opinion poll on political system",
        icon: "vote-yea",
        sections: [
            {
                type: "text",
                content: "The historic referendum was conducted on Baishakh 20, 2037 BS based on adult franchise. The announcement was made by King Birendra on Jestha 10, 2036 BS, giving people the choice between continuing the reformed Panchayat system or introducing a multi-party system."
            },
            {
                type: "list",
                items: [
                    "A 15-member National Election Commission was formed under the chairmanship of former Chief Justice Bhagwati Prasad Singh",
                    "Total voters: 7,192,451",
                    "Voter turnout: 66.92%",
                    "Invalid votes: 7.73%",
                    "Panchayat system received 2,433,452 votes",
                    "Multi-party system received 2,007,965 votes",
                    "Panchayat side won in 55 out of 75 districts",
                    "Multi-party side won in 20 districts",
                    "Total voting centers: 10,025 (10,006 in Nepal and 19 abroad)"
                ]
            },
            {
                type: "text",
                content: "The Panchayat system continued based on the referendum results until the People's Movement of 2046 BS."
            }
        ]
    },
    
    // Unit 5: 2046 People's Movement
    movement2046: {
        id: "movement2046",
        title: "2046 BS People's Movement",
        subtitle: "Restoration of multi-party democracy",
        icon: "fist-raised",
        sections: [
            {
                type: "text",
                content: "In 2046 BS, the Nepali Congress and United Left Front jointly declared a United People's Movement. This movement alerted national and international communities about events in Nepal."
            },
            {
                type: "list",
                items: [
                    "The movement was led by leader Ganesh Man Singh",
                    "A United Left Front of 8 communist components was formed under the chairmanship of Sahana Pradhan",
                    "A United National People's Movement Front of five communist components was formed under the chairmanship of Tulsi Lal Amatya",
                    "The United People's Movement started on Falgun 7, 2046 BS",
                    "The movement lasted for 49 days",
                    "On Chaitra 26, 2046 BS, the ban on political parties was lifted, marking the end of the movement"
                ]
            },
            {
                type: "text",
                content: "This movement restored multi-party democracy in Nepal after 30 years of the Panchayat system."
            }
        ]
    },
    
    // Unit 6: 2062/63 People's Movement II
    movement2062: {
        id: "movement2062",
        title: "2062/63 BS People's Movement II",
        subtitle: "Establishment of republic and peace process",
        icon: "peace",
        sections: [
            {
                type: "text",
                content: "The People's Movement II began on Jestha 8, 2062 BS with the alliance of seven political parties. This movement led to the establishment of a republic in Nepal."
            },
            {
                type: "list",
                items: [
                    "On Mangsir 7, 12-point agreement was reached with CPN Maoist",
                    "The final phase of movement started on Chaitra 24, 2062 BS",
                    "After the movement turned violent, King Gyanendra issued a royal proclamation on Baishakh 8 inviting seven parties to form government as per Constitution of Nepal 2047, Article 35 (this didn't affect the movement)",
                    "On Baishakh 11, King Gyanendra handed over sovereignty to people and announced restoration of House of Representatives as per seven parties' roadmap",
                    "On Baishakh 14, Girija Prasad Koirala was appointed Prime Minister by seven-party agreement",
                    "On Baishakh 15, 2063 BS, House of Representatives meeting was held at Singha Durbar"
                ]
            },
            {
                type: "text",
                content: "The Comprehensive Peace Agreement between Nepal Government and CPN Maoist was signed on Mangsir 5, 2063 BS in Kathmandu, marking the end of the Maoist insurgency that started on Falgun 1, 2052 BS."
            }
        ]
    },
    
    // Unit 7: First Election 2015 BS
    election2015: {
        id: "election2015",
        title: "First General Election of 2015 BS",
        subtitle: "Historic first parliamentary election in Nepal",
        icon: "calendar-alt",
        sections: [
            {
                type: "text",
                content: "The first general election in Nepal was held from Falgun 7, 2015 BS to Baishakh, 2016 BS. This marked the beginning of electoral democracy in the country."
            },
            {
                type: "table",
                headers: ["Description", "Details"],
                rows: [
                    ["Total voters", "4,246,468"],
                    ["Voters who participated", "1,791,381 (42.16%)"],
                    ["Election constituencies", "109"],
                    ["Political parties registered", "9"],
                    ["Independent candidates", "14"],
                    ["Total candidates", "786"],
                    ["Highest votes received winner", "Kashi Prasad Srivastav"],
                    ["Only elected woman representative", "Dwarika Devi Thakurani (Dadeldhura)"],
                    ["Nepali Congress seats won", "74 out of 109 (extraordinary majority)"],
                    ["First result declared", "Gulmi (earliest)"],
                    ["Last result declared", "Baglung (latest)"],
                    ["First elected Prime Minister", "Bisheshwar Prasad Koirala"],
                    ["Government formation date", "Jestha 13, 2016 BS"]
                ]
            },
            {
                type: "text",
                content: "The government under BP Koirala lasted for 18 months and implemented significant reforms including abolition of Birta system, land reform acts, establishment of Tribhuvan University, and diplomatic relations with 24 countries."
            }
        ]
    },
    
    // Unit 8: Election Comparison
    electionComparison: {
        id: "electionComparison",
        title: "Election Comparison: 2015, 2048, 2051 BS",
        subtitle: "Comparative analysis of parliamentary elections",
        icon: "chart-bar",
        sections: [
            {
                type: "text",
                content: "Comparative details of parliamentary elections held in 2015, 2048, and 2051 BS:"
            },
            {
                type: "table",
                headers: ["S.N.", "Description", "2015 BS", "2048 BS", "2051 BS"],
                rows: [
                    ["1", "Election constituencies", "109", "205", "205"],
                    ["2", "Registered political parties", "9", "44", "65"],
                    ["3", "Parties participating", "9", "20", "24"],
                    ["4", "Successful parties", "9", "8", "2"],
                    ["5", "Major winning party (seats & %)", "Nepali Congress: 74 (67.88%)", "Nepali Congress: 110 (53.65%)", "CPN-UML: 88 (42.92%)"],
                    ["6", "Major opposition party (seats & %)", "Gorkha Parishad: 19 (17.43%)", "CPN-UML: 69 (27.98%)", "Nepali Congress: 83 (33.38%)"],
                    ["7", "Election date", "2015/11/07", "2048/01/29", "2051/07/29"],
                    ["8", "Minimum age for candidate", "25 years", "25 years", "25 years"],
                    ["9", "Voting age", "21 years", "18 years", "18 years"],
                    ["10", "Candidate expenditure limit", "5 thousand", "75 thousand", "1 lakh"],
                    ["11", "Candidate deposit", "250", "3000", "3000"],
                    ["12", "Parties forming government", "4", "4", "3"],
                    ["13", "Total candidates", "786", "1345", "1442"],
                    ["14", "Party candidates", "518", "1126", "1057"],
                    ["15", "Total women candidates", "7", "80", "86"],
                    ["16", "Party women candidates", "2", "72", "74"],
                    ["17", "Independent women candidates", "5", "8", "12"],
                    ["18", "Total independent candidates", "268", "219", "385"],
                    ["19", "Successful independent candidates", "4", "3", "7"],
                    ["20", "Total voters", "4,246,468", "12,296,219", "12,296,219"],
                    ["27", "Election staff", "17,000", "66,000", "74,473"]
                ]
            }
        ]
    },
    
    // Unit 9: Constituency Distribution
    constituencies: {
        id: "constituencies",
        title: "Constituency Distribution by Province",
        subtitle: "House of Representatives and Provincial Assembly seats",
        icon: "map-marked-alt",
        sections: [
            {
                type: "text",
                content: "Distribution of constituencies for House of Representatives and Provincial Assembly as determined by the commission under former Justice Kamal Narayan Das (report submitted on Bhadra 14, 2074 BS). The determination considered 90% weight to population and 10% to geography."
            },
            {
                type: "table",
                headers: ["Province", "House of Representatives", "Provincial Assembly"],
                rows: [
                    ["Province 1", "28", "56"],
                    ["Province 2", "32", "64"],
                    ["Bagmati Province", "33", "66"],
                    ["Gandaki Province", "18", "36"],
                    ["Province 5", "26", "52"],
                    ["Karnali Province", "12", "24"],
                    ["Sudurpashchim Province", "16", "32"],
                    ["Total", "165", "330"]
                ]
            },
            {
                type: "text",
                content: "District-wise constituency distribution (selected examples):"
            },
            {
                type: "list",
                items: [
                    "1 HoR seat & 2 Provincial seats: 35 districts including Taplejung, Panchthar, Dhanusha, Solukhumbu, Dolakha, Rasuwa, Manang, Mustang, etc.",
                    "2 HoR seats & 4 Provincial seats: 21 districts including Ilam, Udayapur, Sindhuli, Bhaktapur, Makwanpur, Dhading, Gorakha, etc.",
                    "3 HoR seats & 6 Provincial seats: 7 districts including Lalitpur, Chitwan, Kaski, Kapilvastu, Dang, Banke, Kanchanpur",
                    "4 HoR seats & 8 Provincial seats: 9 districts including Sunsari, Saptari, Siraha, Dhanusha, Mahottari, Sarlahi, Rautahat, Bara, Parsa",
                    "5 HoR seats & 10 Provincial seats: 3 districts (Jhapa, Rupandehi, Kailali)",
                    "6 HoR seats & 12 Provincial seats: 1 district (Morang)",
                    "10 HoR seats & 20 Provincial seats: 1 district (Kathmandu)"
                ]
            }
        ]
    },
    
    // Unit 10: Local Elections 2075
    localElections: {
        id: "localElections",
        title: "Local Level Elections 2075 BS",
        subtitle: "Second local elections under federal system",
        icon: "city",
        sections: [
            {
                type: "text",
                content: "The second local level elections under Nepal's constitution were held on Baishakh 30, 2079 BS in a single phase. Elected officials' tenure started from Jestha 6, 2079 BS."
            },
            {
                type: "table",
                headers: ["Description", "Details"],
                rows: [
                    ["Total voters", "1 crore 77 lakh 33 thousand 723"],
                    ["Women voters", "87 lakh 41 thousand 530"],
                    ["Men voters", "89 lakh 92 thousand 10"],
                    ["Third gender voters", "183"],
                    ["Registered parties", "50 parties applied to Election Commission"],
                    ["Parties participating", "79 parties received approval"],
                    ["Voting time", "7:00 AM to 5:00 PM"]
                ]
            },
            {
                type: "text",
                content: "Districts with highest and lowest voters:"
            },
            {
                type: "table",
                headers: ["Highest Voters (District)", "Number", "Lowest Voters (District)", "Number"],
                rows: [
                    ["Morang", "7,15,223", "Manang", "6,496"],
                    ["Jhapa", "6,46,234", "Mustang", "10,485"],
                    ["Kathmandu", "6,37,775", "Dolpa", "22,440"]
                ]
            },
            {
                type: "text",
                content: "Candidate deposit amounts for local elections:"
            },
            {
                type: "list",
                items: [
                    "Ward Member: Rs. 5,000",
                    "Ward Chairperson: Rs. 1,000",
                    "Chair/Deputy Chair, Mayor/Deputy Mayor: Rs. 1,500",
                    "Rural/Municipal Executive Member: Rs. 500",
                    "District Coordination Committee Member: Rs. 1,500",
                    "DCC Chair/Deputy Chair: Rs. 2,000"
                ]
            }
        ]
    },
    
    // Unit 11: Federal Elections 2074
    federalElections: {
        id: "federalElections",
        title: "Federal Elections 2074 BS",
        subtitle: "House of Representatives and Provincial Assembly Elections",
        icon: "university",
        sections: [
            {
                type: "text",
                content: "According to Nepal's constitution, elections for House of Representatives and Provincial Assembly were held on Mangsir 4, 2079 BS in a single phase."
            },
            {
                type: "table",
                headers: ["Election Type", "Direct Seats", "Proportional Seats", "Total"],
                rows: [
                    ["House of Representatives", "165", "110", "275"],
                    ["Provincial Assembly (All 7 Provinces)", "330", "220", "550"]
                ]
            },
            {
                type: "table",
                headers: ["Voter Category", "Number"],
                rows: [
                    ["Men voters", "91,40,806"],
                    ["Women voters", "88,47,579"],
                    ["Other gender", "185"],
                    ["Total voters", "1,79,88,570"]
                ]
            },
            {
                type: "text",
                content: "Election infrastructure:"
            },
            {
                type: "list",
                items: [
                    "Polling stations: 10,891",
                    "Polling centers: 22,226",
                    "Ballot papers: White background with red ink for direct election, white background with black ink for proportional election"
                ]
            },
            {
                type: "text",
                content: "Notable election records:"
            },
            {
                type: "list",
                items: [
                    "Highest votes: KP Sharma Oli (52,319 votes, Jhapa)",
                    "Highest victory margin: Rabi Lamichhane (34,312 margin)",
                    "Lowest votes for victory: Tek Bahadur Gurung (2,575 votes, Manang)",
                    "Smallest victory margin: Basant Kumar Nembang (46 votes more than opponent)",
                    "Oldest elected MP: Pashupati Shamsher JB Rana (81 years)"
                ]
            },
            {
                type: "text",
                content: "Nationally recognized parties (7): CPN-UML, Nepali Congress, Maoist Centre, Rastriya Swatantra Party, Rastriya Prajatantra Party, Janata Samajwadi Party, Janamat Party"
            }
        ]
    },
    
    // Unit 12: About
    about: {
        id: "about",
        title: "About This Data",
        subtitle: "Nepali Political History Archive",
        icon: "book",
        sections: [
            {
                type: "text",
                content: "This application presents comprehensive data on Nepal's political history and election records from 2007 BS to the present federal democratic system."
            },
            {
                type: "highlight",
                content: "Note: All dates follow the Bikram Sambat (BS) calendar unless otherwise specified. Some dates have been converted to Common Era (CE) for reference where relevant."
            },
            {
                type: "text",
                content: "The data has been compiled from various historical sources, election commission records, and government publications. The content has been refined for clarity, grammatical accuracy, and factual consistency while maintaining the original meaning and context."
            },
            {
                type: "text",
                content: "Key historical milestones covered:"
            },
            {
                type: "list",
                items: [
                    "2007 BS: Democratic Revolution and end of Rana rule",
                    "2015 BS: First parliamentary elections",
                    "2037 BS: Historic referendum on political system",
                    "2046 BS: People's Movement and restoration of multi-party democracy",
                    "2062/63 BS: People's Movement II and establishment of republic",
                    "2074 BS: First federal elections under new constitution"
                ]
            },
            {
                type: "text",
                content: "This application is designed for educational and reference purposes. Users are encouraged to consult primary sources for research and academic work."
            }
        ]
    }
};

// Define the order of units for navigation
const unitOrder = [
    "revolution2007",
    "firstCabinet", 
    "politicalParties",
    "referendum",
    "movement2046",
    "movement2062",
    "election2015",
    "electionComparison",
    "constituencies",
    "localElections",
    "federalElections",
    "about"
];