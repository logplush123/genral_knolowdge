// Geography Content Data (Updated to 2025 standards)
const geographyData = {
    units: [
        {
            id: "introduction",
            title: "भूगोल परिचय",
            icon: "fas fa-book-open",
            cards: [
                {
                    id: "geo-intro",
                    title: "भूगोलको परिचय",
                    icon: "fas fa-globe-asia",
                    content: `
                        <p>पृथ्वीको सतह र यसका वासिन्दाहरूको अध्ययनलाई भूगोल भनिन्छ। ग्रीक भाषामा 'Geo' को अर्थ पृथ्वी र 'graphy' को अर्थ वर्णन हुन्छ। भूगोल पृथ्वीको अध्ययन गर्ने शास्त्र हो।</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-lightbulb"></i> महत्वपूर्ण तथ्य</div>
                            <p>भूगोलका पिता (Father of Geography) इराटोस्थेनिज (Eratosthenes) लाई मानिन्छ। यिनले नै 'Geography' शब्द प्रयोग गरेका थिए।</p>
                        </div>
                        
                        <p>भूगोललाई प्रमुख रूपमा दुई भागमा विभाजन गरिन्छ:</p>
                        <ul class="info-list">
                            <li><strong>भौतिक भूगोल:</strong> पृथ्वीको प्राकृतिक संरचनाको अध्ययन</li>
                            <li><strong>मानव भूगोल:</strong> मानव र उनको वातावरणबीचको सम्बन्धको अध्ययन</li>
                        </ul>
                    `
                },
                {
                    id: "eratos",
                    title: "इराटोस्थेनिज",
                    icon: "fas fa-user-graduate",
                    content: `
                        <p>इराटोस्थेनिज (ई.पू. २७६-१९४) ग्रीक नागरिक थिए जसलाई भूगोल, गणित, खगोलशास्त्र, कविता र संगीतको ज्ञान थियो।</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-star"></i> उनको योगदान</div>
                            <ul class="info-list">
                                <li>पृथ्वीको परिधि पहिलो पटक नापे</li>
                                <li>अक्षांश र देशान्तर प्रणालीको विकास गरे</li>
                                <li>पृथ्वीको अक्षको झुकाव निकाले</li>
                                <li>पहिलो विश्व नक्सा बनाए</li>
                                <li>लीप वर्षको धारणा प्रस्तुत गरे</li>
                            </ul>
                        </div>
                    `
                }
            ]
        },
        {
            id: "continents",
            title: "महादेशहरू",
            icon: "fas fa-globe-americas",
            cards: [
                {
                    id: "asia",
                    title: "एसिया महादेश",
                    icon: "fas fa-mountain",
                    content: `
                        <p><strong>विश्वको सबैभन्दा ठूलो महादेश</strong> (क्षेत्रफल: ४,४५,७९,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> ४.७ अर्ब (विश्वको ५९.५%)</li>
                                <li><strong>देशहरू:</strong> ५०+</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> चीन</li>
                                <li><strong>सबैभन्दा सानो देश:</strong> माल्दिभ्स</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>सगरमाथा (विश्वको अग्लो शिखर)</li>
                            <li>तिब्बतको पठार (विश्वको फराकिलो पठार)</li>
                            <li>बैकाल ताल (विश्वको गहिरो ताल)</li>
                            <li>क्यास्पियन सागर (विश्वको ठूलो ताल)</li>
                        </ul>
                        
                        <p>एसियालाई 'विषमताको महादेश' र 'विविधताको महादेश' पनि भनिन्छ।</p>
                    `
                },
                {
                    id: "africa",
                    title: "अफ्रिका महादेश",
                    icon: "fas fa-sun",
                    content: `
                        <p><strong>विश्वको दोस्रो ठूलो महादेश</strong> (क्षेत्रफल: ३,०३,७०,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> १.४ अर्ब (विश्वको १७.६%)</li>
                                <li><strong>देशहरू:</strong> ५४ (सबैभन्दा बढी)</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> अल्जेरिया</li>
                                <li><strong>सबैभन्दा सानो देश:</strong> सिसेल्स</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>नाइल नदी (विश्वको लामो नदी)</li>
                            <li>सहारा मरुभूमि (विश्वको ठूलो मरुभूमि)</li>
                            <li>किलिमन्जारो (अफ्रिकाको अग्लो शिखर)</li>
                            <li>भिक्टोरिया ताल (अफ्रिकाको ठूलो ताल)</li>
                        </ul>
                        
                        <p>अफ्रिकालाई 'कालो महादेश' र 'मानवताको जन्मस्थान' पनि भनिन्छ।</p>
                    `
                },
                {
                    id: "north-america",
                    title: "उत्तर अमेरिका महादेश",
                    icon: "fas fa-tree",
                    content: `
                        <p><strong>विश्वको तेस्रो ठूलो महादेश</strong> (क्षेत्रफल: २,४७,०९,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> ६० करोड (विश्वको ७.५%)</li>
                                <li><strong>देशहरू:</strong> २३</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> क्यानडा</li>
                                <li><strong>सबैभन्दा बलियो अर्थतन्त्र:</strong> USA</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>सुपेरियर ताल (विश्वको ठूलो ताजा पानीको ताल)</li>
                            <li>रकी पर्वतमाला</li>
                            <li>मिसिसिपी नदी प्रणाली</li>
                            <li>ग्राण्ड क्यान्यन</li>
                        </ul>
                        
                        <p>यसलाई क्रिस्टोफर कोलम्बसले १४९२ मा पत्ता लगाएका थिए। 'नयाँ संसार' को रूपमा पनि चिनिन्छ।</p>
                    `
                },
                {
                    id: "south-america",
                    title: "दक्षिण अमेरिका महादेश",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको चौथो ठूलो महादेश</strong> (क्षेत्रफल: १,७८,४०,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> ४४ करोड (विश्वको ५.५%)</li>
                                <li><strong>देशहरू:</strong> १२+</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> ब्राजिल</li>
                                <li><strong>सबैभन्दा अग्लो शिखर:</strong> माउन्ट एकोन्कागुआ</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>अमेजन नदी (विश्वको ठूलो नदी)</li>
                            <li>एण्डिज पर्वतमाला (विश्वको लामो पर्वतमाला)</li>
                            <li>अमेजन वर्षावन (विश्वको ठूलो वर्षावन)</li>
                            <li>टिटिकाका ताल (विश्वको अग्लो स्थानको नौकायन ताल)</li>
                        </ul>
                        
                        <p>दक्षिण अमेरिकामा विश्वको ४०% जैविक विविधता रहेको छ।</p>
                    `
                },
                {
                    id: "europe",
                    title: "युरोप महादेश",
                    icon: "fas fa-landmark",
                    content: `
                        <p><strong>विश्वको छैटौं ठूलो महादेश</strong> (क्षेत्रफल: १,०४,९८,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> ७५ करोड (विश्वको ९.४%)</li>
                                <li><strong>देशहरू:</strong> ५०+</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> रसिया (युरोपीय भाग)</li>
                                <li><strong>सबैभन्दा अग्लो शिखर:</strong> माउन्ट एल्ब्रुस</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>आल्पस पर्वतमाला</li>
                            <li>डेन्युब नदी (१०+ देश भएर बग्ने)</li>
                            <li>भोल्गा नदी (युरोपको लामो नदी)</li>
                            <li>भल्दाई पर्वत (भोल्गाको उद्गम स्थल)</li>
                        </ul>
                        
                        <p>युरोपलाई 'भित्री समुद्रहरूले घेरिएको महाद्वीप' र 'प्रायद्वीपको प्रायद्वीप' भनिन्छ।</p>
                    `
                },
                {
                    id: "australia",
                    title: "अष्ट्रेलिया महादेश",
                    icon: "fas fa-kiwi-bird",
                    content: `
                        <p><strong>विश्वको सबैभन्दा सानो महादेश</strong> (क्षेत्रफल: ८६,००,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>जनसंख्या:</strong> ४.५ करोड (विश्वको ०.६%)</li>
                                <li><strong>देशहरू:</strong> १४+</li>
                                <li><strong>सबैभन्दा ठूलो देश:</strong> अष्ट्रेलिया</li>
                                <li><strong>सबैभन्दा अग्लो शिखर:</strong> माउन्ट कोसिस्युस्को</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>ग्रेट ब्यारियर रिफ (विश्वको ठूलो मुंगाको ढिस्को)</li>
                            <li>ग्रेट डिभाइडिङ्ग रेन्ज</li>
                            <li>ग्रेट भिक्टोरिया मरुभूमि</li>
                            <li>अष्ट्रेलियाली आउटब्याक</li>
                        </ul>
                        
                        <p>अष्ट्रेलियालाई 'टापु महादेश' र 'विचित्रताको महादेश' पनि भनिन्छ। यहाँ कंगारु, कोआला जस्ता विशिष्ट जीवजन्तु पाइन्छन्।</p>
                    `
                },
                {
                    id: "antarctica",
                    title: "अन्टार्कटिका महादेश",
                    icon: "fas fa-snowflake",
                    content: `
                        <p><strong>विश्वको पाँचौँ ठूलो महादेश</strong> (क्षेत्रफल: १,४०,००,००० वर्ग कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>स्थायी जनसंख्या:</strong> ०</li>
                                <li><strong>देशहरू:</strong> कुनै पनि देश छैन</li>
                                <li><strong>सबैभन्दा अग्लो शिखर:</strong> माउन्ट भिन्सन</li>
                                <li><strong>तापक्रम:</strong> -८९°C (सबैभन्दा चिसो)</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>विश्वको ९०% हिउँ यहीँ रहेको</li>
                            <li>कुनै पनि स्थायी मानव बस्ती छैन</li>
                            <li>विज्ञानीहरूको अनुसन्धान केन्द्र</li>
                            <li>पेङ्गुइनको प्रमुख बासस्थान</li>
                        </ul>
                        
                        <p>अन्टार्कटिकालाई 'हिमचादर' र 'चिसो पानीको महादेश' पनि भनिन्छ। यो सबैभन्दा पछि पत्ता लागेको महादेश हो।</p>
                    `
                }
            ]
        },
        {
            id: "oceans",
            title: "महासागरहरू",
            icon: "fas fa-water",
            cards: [
                {
                    id: "pacific",
                    title: "प्रशान्त महासागर",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको सबैभन्दा ठूलो र गहिरो महासागर</strong></p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>क्षेत्रफल:</strong> १६.५ करोड वर्ग कि.मि.</li>
                                <li><strong>गहिराइ:</strong> १०,९२८ मिटर (मरियाना ट्रेन्च)</li>
                                <li><strong>पृथ्वीको जलमण्डल:</strong> ४५.५%</li>
                                <li><strong>टापुहरू:</strong> २५,०००+</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>प्रशान्त अग्नि मेखला (रिङ अफ फायर)</li>
                            <li>प्रत्येक वर्ष १ इन्च खुम्चिदै</li>
                            <li>सबैभन्दा गहिरो च्यालेञ्जर डीप</li>
                            <li>सबैभन्दा बढी समुद्री भूकम्प</li>
                        </ul>
                        
                        <p>स्पेनिस अन्वेषक फर्डिन्याण्ड म्यागलनले यसको नाम प्रशान्त (शान्त) राखेका थिए।</p>
                    `
                },
                {
                    id: "atlantic",
                    title: "आन्ध्र महासागर",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको दोस्रो ठूलो महासागर</strong></p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>क्षेत्रफल:</strong> १०.६ करोड वर्ग कि.मि.</li>
                                <li><strong>गहिराइ:</strong> ८,४८६ मिटर (पोर्टोरिको ट्रेन्च)</li>
                                <li><strong>पृथ्वीको क्षेत्रफल:</strong> २१%</li>
                                <li><strong>प्रत्येक वर्ष:</strong> १ इन्च फैलिदै</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>वाणिज्य महासागर (Ocean of Commerce)</li>
                            <li>बर्मुडा ट्रायङ्गल</li>
                            <li>मिड अटलान्टिक रिज</li>
                            <li>S-आकारको महासागर</li>
                        </ul>
                        
                        <p>ग्रीक पौराणिक पात्र एटलसको नाममा नामकरण गरिएको। टाइटानिक जहाज यहीँ डुबेको थियो।</p>
                    `
                },
                {
                    id: "indian",
                    title: "हिन्द महासागर",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको तेस्रो ठूलो महासागर</strong></p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>क्षेत्रफल:</strong> ७.० करोड वर्ग कि.मि.</li>
                                <li><strong>गहिराइ:</strong> ७,२५८ मिटर (जाभा ट्रेन्च)</li>
                                <li><strong>पृथ्वीको क्षेत्रफल:</strong> १४%</li>
                                <li><strong>तटीय देशहरू:</strong> एसिया, अफ्रिका, अष्ट्रेलिया</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>मनसुनको महासागर</li>
                            <li>तेल उत्पादन क्षेत्र</li>
                            <li>हिन्दु महासागर</li>
                            <li>गर्म पानीको महासागर</li>
                        </ul>
                        
                        <p>हिन्द महासागरमा लालसागर, अरबसागर, बंगालको खाडी र फारस खाडी पर्दछन्।</p>
                    `
                }
            ]
        },
        {
            id: "rivers",
            title: "नदीहरू",
            icon: "fas fa-river",
            cards: [
                {
                    id: "nile",
                    title: "नाइल नदी",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको सबैभन्दा लामो नदी</strong> (६,६५० कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>देशहरू:</strong> ११ वटा</li>
                                <li><strong>उद्गम:</strong> भिक्टोरिया ताल</li>
                                <li><strong>मुहान:</strong> भूमध्य सागर</li>
                                <li><strong>प्रवाह:</strong> उत्तरतर्फ</li>
                            </ul>
                        </div>
                        
                        <p><strong>महत्वपूर्ण सहरहरू:</strong></p>
                        <ul class="info-list">
                            <li>कायरो (इजिप्ट)</li>
                            <li>खार्तुम (सुडान)</li>
                            <li>जुवा (दक्षिण सुडान)</li>
                            <li>जिन्जा (युगाण्डा)</li>
                        </ul>
                        
                        <p>नाइल नदीलाई इजिप्टको जीवनरेखा भनिन्छ। प्राचीन इजिप्टेली सभ्यता यसै नदीको किनारमा विकसित भएको थियो।</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-info-circle"></i> रोचक तथ्य</div>
                            <p>नाइल नदी विश्वको सबैभन्दा लामो नदी भए पनि अमेजन नदीले बढी पानी बहाउँछ।</p>
                        </div>
                    `
                },
                {
                    id: "amazon",
                    title: "अमेजन नदी",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>विश्वको सबैभन्दा ठूलो नदी</strong> (जलराशीका हिसाबले)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>लम्बाइ:</strong> ६,४०० कि.मि.</li>
                                <li><strong>उद्गम:</strong> एण्डिज पर्वत (पेरु)</li>
                                <li><strong>मुहान:</strong> एटलान्टिक महासागर</li>
                                <li><strong>जल निकासी क्षेत्र:</strong> ७० लाख वर्ग कि.मि.</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>विश्वको २०% ताजा पानी बहाउँछ</li>
                            <li>अमेजन वर्षावनलाई आधार दिन्छ</li>
                            <li>३,००० प्रजातिका माछा</li>
                            <li>गुलाबी डल्फिन रहेको</li>
                        </ul>
                        
                        <p>अमेजन नदीले एटलान्टिक महासागरमा गएर मिसिनुअघि ३२० कि.मि. सम्म फैलिन्छ, जसलाई 'नदी सागर' भनिन्छ।</p>
                    `
                },
                {
                    id: "yangtze",
                    title: "याङ्गजे नदी",
                    icon: "fas fa-water",
                    content: `
                        <p><strong>एसियाको सबैभन्दा लामो नदी</strong> (६,३०० कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>उद्गम:</strong> तिब्बती पठार</li>
                                <li><strong>मुहान:</strong> पूर्वी चीन सागर</li>
                                <li><strong>जलविद्युत उत्पादन:</strong> विश्वको २०%</li>
                                <li><strong>जनसंख्या:</strong> ४० करोड नजिकै</li>
                            </ul>
                        </div>
                        
                        <p><strong>महत्वपूर्ण परियोजनाहरू:</strong></p>
                        <ul class="info-list">
                            <li>थ्री गोर्जेज ड्याम (विश्वको ठूलो)</li>
                            <li>गेझबाउ ड्याम</li>
                            <li>जियान्गपिन ड्याम</li>
                        </ul>
                        
                        <p>याङ्गजे नदी चीनको जीवनरेखा हो। यसले चीनको २०% कृषि योग्य भूमि सिँचाइ गर्दछ र देशको ४०% जनसंख्या यसको क्षेत्रमा बस्छ।</p>
                    `
                }
            ]
        },
        {
            id: "mountains",
            title: "पर्वतहरू",
            icon: "fas fa-mountain",
            cards: [
                {
                    id: "everest",
                    title: "सगरमाथा",
                    icon: "fas fa-mountain",
                    content: `
                        <p><strong>विश्वको सबैभन्दा अग्लो शिखर</strong> (८,८४८.८६ मिटर)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>उचाइ:</strong> ८,८४८.८६ मिटर</li>
                                <li><strong>स्थान:</strong> नेपाल-चीन सीमा</li>
                                <li><strong>पहिलो आरोहण:</strong> १९५३ मे २९</li>
                                <li><strong>पहिलो आरोही:</strong> तेञ्जिङ शेर्पा र एडमण्ड हिलारी</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>हिमालय पर्वतमालाको भाग</li>
                            <li>नेपालीमा सगरमाथा, तिब्बतीमा चोमोलुङ्गमा</li>
                            <li>प्रत्येक वर्ष ४ मिमी उचाइ बढ्दै</li>
                            <li>मृत्यु क्षेत्र: ८,००० मिटर भन्दा माथि</li>
                        </ul>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-info-circle"></i> रोचक तथ्य</div>
                            <p>सगरमाथा शिखरमा हावाको दबाब समुद्री सतहको एक तिहाइ मात्र हुन्छ र तापक्रम -६०°C सम्म पुग्छ।</p>
                        </div>
                    `
                },
                {
                    id: "k2",
                    title: "K२ (गडविन अस्टिन)",
                    icon: "fas fa-mountain",
                    content: `
                        <p><strong>विश्वको दोस्रो अग्लो शिखर</strong> (८,६११ मिटर)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>उचाइ:</strong> ८,६११ मिटर</li>
                                <li><strong>स्थान:</strong> पाकिस्तान-चीन सीमा</li>
                                <li><strong>पहिलो आरोहण:</strong> १९५४ जुलाई ३१</li>
                                <li><strong>मृत्युदर:</strong> २९% (सबैभन्दा खतरनाक)</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>काराकोरम पर्वतमालाको भाग</li>
                            <li>सवेज माउन्टेन को उपनाम</li>
                            <li>तकनीकी रूपमा कठिन</li>
                            <li>शीत युद्धको प्रतिस्पर्धाको केन्द्र</li>
                        </ul>
                        
                        <p>K२ लाई 'जंगली पर्वत' पनि भनिन्छ। यो सगरमाथा भन्दा तकनीकी रूपमा धेरै कठिन र खतरनाक मानिन्छ।</p>
                    `
                },
                {
                    id: "andes",
                    title: "एण्डिज पर्वतमाला",
                    icon: "fas fa-mountain",
                    content: `
                        <p><strong>विश्वको सबैभन्दा लामो पर्वतमाला</strong> (७,००० कि.मि.)</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-chart-bar"></i> तथ्याङ्क</div>
                            <ul class="info-list">
                                <li><strong>लम्बाइ:</strong> ७,००० कि.मि.</li>
                                <li><strong>अग्लो शिखर:</strong> माउन्ट एकोन्कागुआ (६,९६१ मि.)</li>
                                <li><strong>देशहरू:</strong> ७ वटा</li>
                                <li><strong>उचाइ रेखा:</strong> ६,००० मिटर</li>
                            </ul>
                        </div>
                        
                        <p><strong>विशेषताहरू:</strong></p>
                        <ul class="info-list">
                            <li>प्रशान्त अग्नि मेखलाको भाग</li>
                            <li>अल्टिप्लानो उच्च पठार</li>
                            <li>इन्का सभ्यताको केन्द्र</li>
                            <li>समृद्ध खनिज भण्डार</li>
                        </ul>
                        
                        <p>एण्डिज पर्वतमाला दक्षिण अमेरिकाको रीढ हो। यसले महादेशलाई पूर्वी र पश्चिमी भागमा विभाजन गर्दछ र मौसमलाई नियन्त्रण गर्दछ।</p>
                    `
                }
            ]
        },
        {
            id: "countries",
            title: "देशहरूको डाटा",
            icon: "fas fa-flag",
            cards: [
                {
                    id: "top-countries",
                    title: "प्रमुख देशहरू",
                    icon: "fas fa-globe",
                    content: `
                        <p><strong>क्षेत्रफल र जनसङ्ख्याका आधारमा प्रमुख देशहरू</strong></p>
                        
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>देश</th>
                                    <th>राजधानी</th>
                                    <th>क्षेत्रफल (वर्ग कि.मि.)</th>
                                    <th>जनसङ्ख्या (२०२५)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>रसिया</td>
                                    <td>मास्को</td>
                                    <td>१,७१,००,०००</td>
                                    <td>१४.४ करोड</td>
                                </tr>
                                <tr>
                                    <td>क्यानडा</td>
                                    <td>ओटावा</td>
                                    <td>९९,८४,०००</td>
                                    <td>३.९ करोड</td>
                                </tr>
                                <tr>
                                    <td>चीन</td>
                                    <td>बेइजिङ</td>
                                    <td>९५,९६,०००</td>
                                    <td>१४.२ करोड</td>
                                </tr>
                                <tr>
                                    <td>संयुक्त राज्य</td>
                                    <td>वासिङ्गटन</td>
                                    <td>९८,३१,०००</td>
                                    <td>३४.० करोड</td>
                                </tr>
                                <tr>
                                    <td>ब्राजिल</td>
                                    <td>ब्रासिलिया</td>
                                    <td>८५,१४,०००</td>
                                    <td>२१.६ करोड</td>
                                </tr>
                                <tr>
                                    <td>अष्ट्रेलिया</td>
                                    <td>क्यानबेरा</td>
                                    <td>७६,८६,०००</td>
                                    <td>२.६ करोड</td>
                                </tr>
                                <tr>
                                    <td>भारत</td>
                                    <td>नयाँ दिल्ली</td>
                                    <td>३२,८७,०००</td>
                                    <td>१४.३ करोड</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-info-circle"></i> महत्वपूर्ण तथ्य</div>
                            <p>२०२५ को अनुमान अनुसार, भारत विश्वको सबैभन्दा बढी जनसङ्ख्या भएको देश बनेको छ।</p>
                        </div>
                    `
                },
                {
                    id: "landlocked",
                    title: "भू-परिवेष्टित देशहरू",
                    icon: "fas fa-globe-americas",
                    content: `
                        <p><strong>विश्वका ४८ भू-परिवेष्टित देशहरू</strong></p>
                        
                        <p>समुद्रसँग पहुँचका लागि अर्को देशमा भर पर्ने देशहरूलाई भू-परिवेष्टित देश भनिन्छ।</p>
                        
                        <div class="fact-box">
                            <div class="fact-title"><i class="fas fa-star"></i> महत्वपूर्ण भू-परिवेष्टित देशहरू</div>
                            <ul class="info-list">
                                <li><strong>नेपाल:</strong> हिमालयको काखमा</li>
                                <li><strong>मंगोलिया:</strong> विश्वको दोस्रो ठूलो भू-परिवेष्टित देश</li>
                                <li><strong>कजाकस्तान:</strong> विश्वको सबैभन्दा ठूलो भू-परिवेष्टित देश</li>
                                <li><strong>बोलिभिया:</strong> दक्षिण अमेरिकाको भू-परिवेष्टित देश</li>
                                <li><strong>अफगानिस्तान:</strong> एसियाको हृदयस्थल</li>
                            </ul>
                        </div>
                        
                        <p><strong>दोहोरो भू-परिवेष्टित देशहरू (२ वटा मात्र):</strong></p>
                        <ul class="info-list">
                            <li><strong>उज्बेकिस्तान:</strong> केन्द्रीय एसिया</li>
                            <li><strong>लिच्टेन्स्टाइन:</strong> युरोप</li>
                        </ul>
                        
                        <p>भू-परिवेष्टित हुनाले यी देशहरूले अन्तर्राष्ट्रिय व्यापारमा चुनौतीहरू सामना गर्नुपर्छ।</p>
                    `
                }
            ]
        }
    ]
};

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const unitList = document.getElementById('unitList');
const cardsContainer = document.getElementById('cardsContainer');
const currentUnitTitle = document.getElementById('currentUnitTitle');
const breadcrumb = document.getElementById('breadcrumb');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const noResults = document.getElementById('noResults');
const tabButtons = document.querySelectorAll('.tab-btn');

// Current State
let currentUnitId = 'introduction';
let allCards = [];

// Initialize App
function initApp() {
    renderUnits();
    renderCards(currentUnitId);
    setupEventListeners();
    setupSearch();
    setupMobileTabs();
}

// Render Units in Sidebar
function renderUnits() {
    unitList.innerHTML = '';
    
    geographyData.units.forEach(unit => {
        const unitItem = document.createElement('button');
        unitItem.className = `unit-item ${unit.id === currentUnitId ? 'active' : ''}`;
        unitItem.innerHTML = `
            <i class="${unit.icon}"></i>
            <span>${unit.title}</span>
        `;
        
        unitItem.addEventListener('click', () => {
            switchUnit(unit.id);
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
        
        unitList.appendChild(unitItem);
    });
}

// Render Cards for Current Unit
function renderCards(unitId) {
    const unit = geographyData.units.find(u => u.id === unitId);
    if (!unit) return;
    
    currentUnitTitle.textContent = unit.title;
    updateBreadcrumb(unit.title);
    cardsContainer.innerHTML = '';
    noResults.style.display = 'none';
    
    // Store all cards for search functionality
    allCards = unit.cards;
    
    unit.cards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardsContainer.appendChild(cardElement);
    });
}

// Create Card Element
function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.animationDelay = `${index * 0.1}s`;
    
    cardDiv.innerHTML = `
        <div class="card-header">
            <h3>${card.title}</h3>
            <div class="card-icon">
                <i class="${card.icon}"></i>
            </div>
        </div>
        <div class="card-body">
            ${card.content}
        </div>
    `;
    
    return cardDiv;
}

// Switch Unit
function switchUnit(unitId) {
    currentUnitId = unitId;
    renderUnits();
    renderCards(unitId);
    
    // Update active tab
    tabButtons.forEach(btn => {
        if (btn.dataset.unit === unitId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Update Breadcrumb
function updateBreadcrumb(unitTitle) {
    breadcrumb.innerHTML = `
        <span>मुख्य पृष्ठ</span> / <span>${unitTitle}</span>
    `;
}

// Setup Event Listeners
function setupEventListeners() {
    // Menu Toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });
    
    // Close Sidebar
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });
}

// Setup Search Functionality
function setupSearch() {
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Clear search when input is cleared
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            clearSearch();
        }
    });
}

// Perform Search
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        clearSearch();
        return;
    }
    
    // Filter cards based on search term
    const filteredCards = allCards.filter(card => 
        card.title.toLowerCase().includes(searchTerm) ||
        card.content.toLowerCase().includes(searchTerm)
    );
    
    // Display results
    if (filteredCards.length > 0) {
        displaySearchResults(filteredCards, searchTerm);
    } else {
        displayNoResults();
    }
}

// Display Search Results
function displaySearchResults(cards, searchTerm) {
    cardsContainer.innerHTML = '';
    noResults.style.display = 'none';
    
    cards.forEach((card, index) => {
        // Highlight search term in content
        const highlightedContent = highlightSearchTerm(card.content, searchTerm);
        const highlightedTitle = highlightSearchTerm(card.title, searchTerm);
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.animationDelay = `${index * 0.1}s`;
        
        cardDiv.innerHTML = `
            <div class="card-header">
                <h3>${highlightedTitle}</h3>
                <div class="card-icon">
                    <i class="${card.icon}"></i>
                </div>
            </div>
            <div class="card-body">
                ${highlightedContent}
            </div>
        `;
        
        cardsContainer.appendChild(cardDiv);
    });
    
    currentUnitTitle.textContent = `खोज परिणाम: "${searchTerm}"`;
    updateBreadcrumb('खोज परिणाम');
}

// Highlight Search Term
function highlightSearchTerm(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Display No Results
function displayNoResults() {
    cardsContainer.innerHTML = '';
    noResults.style.display = 'block';
    currentUnitTitle.textContent = 'खोज परिणाम';
    updateBreadcrumb('खोज परिणाम');
}

// Clear Search
function clearSearch() {
    searchInput.value = '';
    renderCards(currentUnitId);
}

// Setup Mobile Tabs
function setupMobileTabs() {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const unitId = btn.dataset.unit;
            switchUnit(unitId);
            
            // Update active tab
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add CSS for search highlight
const style = document.createElement('style');
style.textContent = `
    .search-highlight {
        background-color: #ffeb3b;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: bold;
    }
    
    mark {
        background-color: #ffeb3b;
    }
`;
document.head.appendChild(style);