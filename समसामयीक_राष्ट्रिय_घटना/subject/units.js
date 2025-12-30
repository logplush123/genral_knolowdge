/**
 * units.js - Complete Data Structure
 * सम्पूर्ण डाटा संरचना
 */

const appData = {
    appInfo: {
        name: "समसामयिक घटनाहरू",
        version: "1.0.0",
        year: "२०८०/८१",
        totalUnits: 20,
        developer: "LogPlus"
    },

    // Navigation Units
    units: [
        {
            id: "unit-1",
            title: "नेपाल पर्यटन तथ्याङ्क २०२३-२४",
            subtitle: "पर्यटक आगमन र आर्थिक योगदानको विस्तृत विवरण",
            icon: "fas fa-plane-departure",
            layout: "layout-2",
            content: `
                <div class="unit-header">
                    <h1 class="unit-title">नेपाल पर्यटन तथ्याङ्क २०२३-२४</h1>
                    <p class="unit-subtitle">कोभिड-१९ पछिको पुनरुत्थान र ऐतिहासिक वृद्धि</p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value">१०,१४,८८२</div>
                        <div class="stat-label">कुल पर्यटक (२०२३)</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">९९.९%</div>
                        <div class="stat-label">पुनरुत्थान दर (Recovery)</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">१२.५ दिन</div>
                        <div class="stat-label">औसत बसाइ अवधि</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">$४१</div>
                        <div class="stat-label">प्रतिदिन औसत खर्च</div>
                    </div>
                </div>
                
                <div class="content-section">
                    <h2 class="section-title">
                        <i class="fas fa-chart-line"></i>
                        आगमनको मुख्य प्रवृत्ति (Main Trends)
                    </h2>

                    <div class="content-text">
                        सन् २०२३ मा नेपालले १० लाखको आँकडा पार गर्दै कुल १०,१४,८८२ अन्तर्राष्ट्रिय पर्यटकलाई स्वागत गर्‍यो। यो संख्या २०१९ (ऐतिहासिक वर्ष) को तुलनामा लगभग १००% को रिकभरी हो। २०२४ को पहिलो ६ महिनामै ५ लाखभन्दा बढी पर्यटक भित्रिएकाले यो वर्ष अहिलेसम्मकै उच्च रेकर्ड कायम हुने प्रक्षेपण गरिएको छ।
                    </div>

                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>क्र.सं.</th>
                                <th>प्रमुख स्रोत देशहरू</th>
                                <th>पर्यटक सङ्ख्या (२०२३)</th>
                                <th>बजार हिस्सा (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>१</td><td>भारत</td><td>३,१९,९३६</td><td>३१.५२%</td></tr>
                            <tr><td>२</td><td>संयुक्त राज्य अमेरिका</td><td>१,००,३५७</td><td>९.८९%</td></tr>
                            <tr><td>३</td><td>चीन</td><td>६०,८७८</td><td>५.९९%</td></tr>
                            <tr><td>४</td><td>संयुक्त अधिराज्य (UK)</td><td>५२,८८६</td><td>५.२१%</td></tr>
                            <tr><td>५</td><td>अस्ट्रेलिया</td><td>३८,७९७</td><td>३.८२%</td></tr>
                            <tr><td>६</td><td>बङ्गलादेश</td><td>३६,४८३</td><td>३.५९%</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="content-card">
                    <h3 class="card-title">
                        <i class="fas fa-hiking"></i>
                        पर्यटनको उद्देश्य र गतिविधि
                    </h3>
                    <div class="content-text">
                        नेपाल आउने पर्यटकमध्ये सबैभन्दा बढी <b>६५% बिदा मनाउन र मनोरञ्जनका लागि</b> आउने गरेका छन्। <b>ट्रेकिङ र पर्वतारोहण</b>का लागि १५% पर्यटकहरू आउँछन् भने १०% धार्मिक यात्रा (विशेष गरी लुम्बिनी र पशुपतिनाथ) का लागि आउने गरेका छन्। सगरमाथा क्षेत्रमा २०२३ मा मात्रै ५७,००० भन्दा बढी पदयात्रीहरू पुगेका थिए।
                    </div>
                </div>

                <div class="content-card">
                    <h3 class="card-title">
                        <i class="fas fa-coins"></i>
                        आर्थिक योगदान
                    </h3>
                    <div class="content-text">
                        पर्यटन क्षेत्रले नेपालको कुल गार्हस्थ्य उत्पादन (GDP) मा करिब <b>६.७%</b> योगदान पुर्‍याएको छ। विदेशी मुद्रा आर्जनतर्फ २०२३ मा नेपालले करिब <b>८० अर्ब रुपैयाँ</b> भन्दा बढी संकलन गरेको छ, जसले देशको शोधनान्तर स्थितिमा महत्वपूर्ण भूमिका खेलेको छ।
                    </div>
                </div>
            `
        },








        {
            id: "unit-2",
            title: "जनसङ्ख्या विश्लेषण २०२५",
            subtitle: "सहरी, ग्रामीण र प्रादेशिक वितरण",
            icon: "fas fa-users",
            layout: "layout-4",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">जनसङ्ख्या विश्लेषण २०२५</h1>
            <p class="unit-subtitle">नेपालको जनगणना २०७८ र हालको जनसाङ्ख्यिकीय प्रवृत्ति</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">२,९१,६४,५७८</div>
                <div class="stat-label">कुल जनसङ्ख्या (२०७८)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">०.९२%</div>
                <div class="stat-label">वार्षिक वृद्धिदर</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">६६.१७%</div>
                <div class="stat-label">नगरपालिका (सहरी)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">१९८</div>
                <div class="stat-label">जनघनत्व (प्रति कि.मी.)</div>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-city"></i>
                सहरीकरण र बसाइसराइको अवस्था
            </h2>
            
            <div class="content-text">
                राष्ट्रिय तथ्याङ्क कार्यालयको अन्तिम प्रतिवेदन अनुसार, नेपालको जनसङ्ख्या वितरणमा तीव्र परिवर्तन देखिएको छ। हाल नेपालको ६६.१७% जनसङ्ख्या नगरपालिका क्षेत्रमा बसोबास गर्छन् भने ३३.८३% गाउँपालिकामा रहेका छन्। यद्यपि, पूर्वाधारका आधारमा वास्तविक सहरी क्षेत्र (Core Urban) २७.०७% मात्र रहेको छ। पहाडी र हिमाली क्षेत्रबाट तराईतर्फको बसाइसराइ उच्च हुँदा तराईमा मात्रै कुल जनसङ्ख्याको ५३.६१% हिस्सा पुगेको छ। सन् २०२५ सम्मको प्रक्षेपण अनुसार काठमाडौँ उपत्यकाको जनघनत्व अत्यधिक बढ्दो छ भने हिमाली क्षेत्रका ३४ जिल्लाहरूमा जनसङ्ख्या वृद्धिदर ऋणात्मक देखिएको छ।
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>भौगोलिक क्षेत्र</th>
                        <th>जनसङ्ख्या हिस्सा (%)</th>
                        <th>लैङ्गिक अनुपात (M:F)</th>
                        <th>साक्षरता दर (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>तराई (Madhesh & Plains)</td><td>५३.६१%</td><td>९५.९३</td><td>७३.१%</td></tr>
                    <tr><td>पहाड (Hill Region)</td><td>४०.३१%</td><td>९४.३४</td><td>८०.९%</td></tr>
                    <tr><td>हिमाल (Mountain Region)</td><td>६.०८%</td><td>९७.२८</td><td>७२.८%</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-section">
            <h3 class="section-title">
                <i class="fas fa-chart-pie"></i>
                प्रादेशिक जनसङ्ख्या र विशेषता
            </h3>
            <div class="content-text">
                बागमती प्रदेश सबैभन्दा धेरै जनसङ्ख्या (२०.९७%) भएको प्रदेश बनेको छ भने कर्णाली प्रदेशमा सबैभन्दा कम (५.७९%) जनसङ्ख्या रहेको छ। युवा जनसङ्ख्या (१५-५९ वर्ष) को हिस्सा ६१.९६% पुग्नु नेपालका लागि 'जनसाङ्ख्यिक लाभांश' (Demographic Dividend) को अवसर हो। तर, २१ लाख भन्दा बढी नेपालीहरू विदेशमा अक्सर बसोबास गर्ने गरेको तथ्याङ्कले श्रम बजारमा जनशक्तिको अभावलाई पनि संकेत गर्दछ।
            </div>
        </div>
        
        <div class="tags-container">
            <span class="tag">जनगणना २०७८</span>
            <span class="tag">सहरीकरण</span>
            <span class="tag">बसाइसराइ</span>
            <span class="tag">जनसाङ्ख्यिक लाभांश</span>
            <span class="tag">लैङ्गिक अनुपात</span>
        </div>
    `
        },
        {
            id: "unit-3",
            title: "टिकटक र सामाजिक सञ्जाल संकट",
            subtitle: "प्रतिबन्ध, फुकुवा र २०८२ को नयाँ डिजिटल नीति",
            icon: "fas fa-shield-alt",
            layout: "layout-3",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">टिकटक प्रतिबन्ध र २०८२ को घटनाक्रम</h1>
            <p class="unit-subtitle">नेपालमा डिजिटल प्लेटफर्म नियमनको पूर्ण इतिहास</p>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-history"></i>
                निर्णय समयरेखा (Timeline)
            </h2>
            
            <div class="timeline-item">
                <h3>२०८० कार्तिक २७</h3>
                <p><b>पहिलो प्रतिबन्ध:</b> पुष्पकमल दाहाल 'प्रचण्ड' नेतृत्वको मन्त्रिपरिषद्द्वारा सामाजिक सद्भाव बिगारेको भन्दै टिकटकमा पूर्ण रोक।</p>
            </div>
            
            <div class="timeline-item">
                <h3>२०८१ भदौ ६</h3>
                <p><b>ससर्त फुकुवा:</b> केपी शर्मा ओली नेतृत्वको सरकारद्वारा नेपालमा दर्ता हुनुपर्ने र नियमन मान्नुपर्ने सर्तमा टिकटक खुला।</p>
            </div>

            <div class="timeline-item" style="border-left: 4px solid #d63031; background: #22d352ff; padding: 10px;">
                <h3>२०८२ भदौ १९ (डिजिटल ब्ल्याकआउट)</h3>
                <p><b>महा-प्रतिबन्ध:</b> सरकारको 'सामाजिक सञ्जाल व्यवस्थापन निर्देशिका' अनुसार दर्ता नभएका <b>फेसबुक, युट्युब र एक्स (X)</b> सहित २६ वटा प्लेटफर्ममाथि प्रतिबन्धको घोषणा। टिकटक दर्ता भइसकेकाले सुचारु रह्यो।</p>
            </div>
            
            <div class="timeline-item">
                <h3>२०८२ भदौ २३</h3>
                <p><b>नागरिक दबाब:</b> देशभर युवाहरूको विशाल आन्दोलन र 'डिजिटल राइट्स' को मागपछि सरकारले सबै प्रतिबन्धहरू हटाउन बाध्य भएको।</p>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-globe-asia"></i>
                अन्तर्राष्ट्रिय र स्थानीय स्थिति (२०२५)
            </h2>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>राष्ट्र/प्लेटफर्म</th>
                        <th>अवस्था</th>
                        <th>२०८२ भदौको प्रभाव</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>भारत</td><td>पूर्ण प्रतिबन्ध</td><td>२०२० देखि कायम</td></tr>
                    <tr><td><b>टिकटक (नेपाल)</b></td><td><span style="color: green;">सफल दर्ता</span></td><td>प्रतिबन्धबाट जोगिएको</td></tr>
                    <tr><td><b>फेसबुक/मेटा</b></td><td>प्रक्रियामा</td><td>५ दिन पूर्ण अवरुद्ध</td></tr>
                    <tr><td><b>एक्स (Twitter)</b></td><td>अवरुद्ध</td><td>नियमनमा चुनौती</td></tr>
                </tbody>
            </table>
        </div>
        
        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-exclamation-triangle"></i>
                नियमनका आधार र २०८२ को चुनौती
            </h3>
            <ul class="styled-list">
                <li><b>स्थानीय दर्ता:</b> सबै विदेशी कम्पनीले नेपालमा सम्पर्क कार्यालय खोल्न अनिवार्य।</li>
                <li><b>आर्थिक क्षति:</b> २०८२ भदौको ५ दिने प्रतिबन्धले नेपालको डिजिटल विज्ञापन बजारमा करिब २ अर्बको क्षति।</li>
                <li><b>सामग्री नियन्त्रण:</b> घृणा फैलाउने (Hate Speech) सामग्री २४ घण्टाभित्र हटाउनुपर्ने।</li>
                <li><b>कर प्रणाली:</b> नेपालमा विज्ञापन गर्ने कम्पनीहरूले अनिवार्य VAT दर्ता गर्नुपर्ने।</li>
            </ul>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                अद्यावधिक निष्कर्ष
            </h3>
            <div class="content-text">
                सन् २०२५ (२०८२) सम्म आइपुग्दा नेपालमा टिकटक केवल मनोरञ्जनको साधन मात्र नभई राजनीतिक र सामाजिक चेतनाको मञ्च बनेको छ। भदौ १९ को घटनाले नेपालमा <b>"सामाजिक सञ्जाल व्यवस्थापन ऐन २०८२"</b> को आवश्यकता र अभिव्यक्तिको स्वतन्त्रता बीचको बहसलाई नयाँ उचाइमा पुर्‍याएको छ।
            </div>
        </div>
    `
        },
        {
            id: "unit-4",
            title: "रुक्साना कपाली र प्रभावशाली नेपाली महिला",
            subtitle: "बीबीसी १०० प्रभावशाली महिलाको सूचीमा नेपाल",
            icon: "fas fa-award",
            layout: "layout-1",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">रुक्साना कपाली</h1>
            <p class="unit-subtitle">बीबीसी १०० प्रभावशाली महिला २०२३ र मानव अधिकारको यात्रा</p>
        </div>
        
        <div class="content-section">
            <div class="content-text">
                बेलायती सञ्चार माध्यम बीबीसीले हरेक वर्ष विश्वभरका प्रेरणादायी र प्रभावशाली महिलाहरूको सूची सार्वजनिक गर्दछ। सन् २०२३ को सूचीमा नेपालकी ट्रान्सजेन्डर अधिकारकर्मी <strong>रुक्साना कपाली</strong> स्थान पाउन सफल भइन्। उनले विशेष गरी नेपालमा कानुनी पहिचान र 'क्वेयर' (Queer) समुदायको अधिकारका लागि लामो समयदेखि वकालत गर्दै आएकी छिन्।
            </div>
            
            <div class="info-card">
                <h3 class="card-title">
                    <i class="fas fa-user-check"></i>
                    व्यक्तित्व र योगदान
                </h3>
                <div class="content-text">
                    <strong>पेशा/भूमिका:</strong> मानव अधिकार र यौनिक अल्पसंख्यक अभियन्ता<br>
                    <strong>नेपालको प्रतिनिधित्व:</strong> नेपाल भाषा र संस्कृति संरक्षणमा पनि सक्रिय<br>
                    <strong>मुख्य मुद्दा:</strong> तेस्रो लिङ्गी व्यक्तिको कानुनी अधिकार र शिक्षामा पहुँच<br>
                    <strong>पछिल्लो उपलब्धि:</strong> बीबीसी १०० महिला २०२३ (विश्वव्यापी सूची)
                </div>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-medal"></i>
                मुख्य उपलब्धि र कार्यहरू
            </h2>
            
            <ul class="styled-list">
                <li><b>क्वेयर युथ ग्रुप (Queer Youth Group):</b> नेपालमा यौनिक तथा लैङ्गिक अल्पसंख्यक युवाहरूको अधिकारका लागि संस्थाको नेतृत्व।</li>
                <li><b>कानुनी लडाइँ:</b> ट्रान्सजेन्डर महिलाका रूपमा कानुनी कागजात र शैक्षिक प्रमाणपत्र सच्याउन सर्वोच्च अदालतसम्मको सफल वकालत।</li>
                <li><b>अन्तर्राष्ट्रिय मञ्च:</b> संयुक्त राष्ट्र संघ लगायतका अन्तर्राष्ट्रिय मञ्चहरूमा नेपालको एलजीबीटीक्यू+ समुदायको प्रतिनिधित्व।</li>
                <li><b>नेपाल भाषा (Nepal Bhasa):</b> नेवा: समुदायको भाषा र सम्पदा संरक्षणमा सक्रिय सहभागिता र लेखन।</li>
            </ul>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-users-viewfinder"></i>
                बीबीसी सूचीमा हालसम्मका नेपाली महिलाहरू
            </h2>
            <div class="content-text">
                बीबीसीको १०० प्रभावशाली महिलाको सूचीमा सन् २०१२ देखि २०२४ सम्म विभिन्न विधामा नेपाली महिलाहरूले स्थान पाएका छन्।
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>वर्ष</th>
                        <th>नाम</th>
                        <th>प्रमुख कार्य क्षेत्र</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>२०२३</td><td><strong>रुक्साना कपाली</strong></td><td>मानव अधिकार (LGBTQ+)</td></tr>
                    <tr><td>२०२०</td><td>सपना रोक्का मगर</td><td>बेवारिसे शव व्यवस्थापन</td></tr>
                    <tr><td>२०१९</td><td>बोनिता शर्मा</td><td>पोषण र स्वास्थ्य (Social Entrepreneur)</td></tr>
                    <tr><td>२०१८</td><td>उमादेवी बादी</td><td>बादी समुदायको उत्थान र अधिकार</td></tr>
                    <tr><td>२०१७</td><td>इन्दिरा रानामगर</td><td>कैदीका बालबालिकाको शिक्षा</td></tr>
                    <tr><td>२०१६</td><td>सपना प्रधान मल्ल</td><td>कानुन र न्याय</td></tr>
                    <tr><td>२०१२</td><td>पुष्पा बस्नेत</td><td>समाजसेवा (CNN Hero)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                २०२४-२५ को सन्दर्भ
            </h3>
            <div class="content-text">
                बीबीसीले २०२४ को सूचीमा जलवायु परिवर्तन (Climate Change) र लचिलोपन (Resilience) मा काम गर्ने महिलाहरूलाई प्राथमिकता दिएको छ। रुक्साना कपालीको सफलताले नेपालमा सीमान्तकृत समुदायको मुद्दालाई विश्वव्यापी बनाउन सहयोग पुर्‍याएको छ। उनी हाल कानुनकी विद्यार्थीका रूपमा नेपालको न्याय प्रणालीमा सुधारका लागि सक्रिय छिन्।
            </div>
        </div>
    `
        },
        {
            id: "unit-5",
            title: "इन्टिग्रिटी आइकन नेपाल",
            subtitle: "सदाचारी र जिम्मेवार राष्ट्रसेवकहरूको सम्मान",
            icon: "fas fa-medal",
            layout: "layout-4",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">इन्टिग्रिटी आइकन</h1>
            <p class="unit-subtitle">प्रशासनिक क्षेत्रका 'रकस्टार' कर्मचारीहरू</p>
        </div>

        <div class="content-text" style="margin-bottom: 20px;">
            अकाउन्टेबिलिटी ल्याब नेपालले हरेक वर्ष सार्वजनिक प्रशासनमा रहेर इमानदारीपूर्वक काम गर्ने ५ जना उत्कृष्ट कर्मचारीहरूलाई 'इन्टिग्रिटी आइकन' बाट सम्मान गर्दै आएको छ। यसले कर्मचारीतन्त्रमा सकारात्मक सोच र सदाचारको प्रवर्द्धन गर्दछ।
        </div>
        
        <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            <div class="grid-item" style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
                <h3 style="margin: 0; color: #2c3e50;">सुजनकुमारी बर्देवा</h3>
                <p style="margin: 5px 0; font-size: 0.9em; color: #7f8c8d;">प्रमुख प्रशासकीय अधिकृत, नाम्चे</p>
                <small>इमानदार सेवा प्रवाहका लागि चर्चित</small>
            </div>
            
            <div class="grid-item" style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
                <h3 style="margin: 0; color: #2c3e50;">कल्पना अधिकारी</h3>
                <p style="margin: 5px 0; font-size: 0.9em; color: #7f8c8d;">इन्जिनियर, सडक विभाग</p>
                <small>पूर्वाधार विकासमा पारदर्शिता</small>
            </div>
            
            <div class="grid-item" style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
                <h3 style="margin: 0; color: #2c3e50;">मोहनकृष्ण महर्जन</h3>
                <p style="margin: 5px 0; font-size: 0.9em; color: #7f8c8d;">खाद्य अनुसन्धान अधिकृत</p>
                <small>खाद्य स्वच्छता र गुणस्तर नियन्त्रण</small>
            </div>
            
            <div class="grid-item" style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
                <h3 style="margin: 0; color: #2c3e50;">राजेश साह जयसवाल</h3>
                <p style="margin: 5px 0; font-size: 0.9em; color: #7f8c8d;">प्रहरी निरीक्षक (Inspector)</p>
                <small>अपराध नियन्त्रण र जनमैत्री प्रहरी</small>
            </div>
        </div>

        <div class="info-card" style="margin-top: 25px;">
            <h3 class="card-title"><i class="fas fa-lightbulb"></i> अभियानको प्रभाव</h3>
            <div class="content-text">
                यो सम्मान सन् २०१४ देखि सुरु भएको हो। यसले 'नेम एन्ड शेम' (Name and Shame) को सट्टा 'नेम एन्ड फेम' (Name and Fame) को अवधारणामा काम गर्छ। २०२४ सम्म आइपुग्दा यसले ५५ भन्दा बढी राष्ट्रसेवकहरूलाई सम्मानित गरिसकेको छ, जसले गर्दा युवा पुस्तामा निजामती सेवाप्रतिको आकर्षण र विश्वास बढेको छ।
            </div>
        </div>
    `
        }, {
            id: "unit-6",
            title: "नेपाल सम्वत: राष्ट्रिय मान्यता",
            subtitle: "मौलिक क्यालेन्डरको सरकारी प्रयोग",
            icon: "fas fa-calendar-alt",
            layout: "layout-2",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">नेपाल सम्वत</h1>
            <p class="unit-subtitle">राष्ट्रिय गौरव र सरकारी कार्यान्वयन</p>
        </div>
        
        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-check-circle"></i>
                ऐतिहासिक निर्णय २०२५ अपडेट
            </h3>
            <div class="content-text">
                नेपाल सरकारले <b>वि.सं. २०८० कार्तिक २७</b> गते नेपाल सम्वतलाई सरकारी कामकाजको भाषामा विक्रम सम्वत सरह उल्लेख गर्ने निर्णय गरेको थियो। सन् २०२५ (वि.सं. २०८१/८२) सम्म आइपुग्दा सबै सरकारी लेटरहेड, छाप र आधिकारिक वेबसाइटहरूमा नेपाल सम्वत अनिवार्य रूपमा लेखिन थालिएको छ।
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-history"></i> पृष्ठभूमि र महत्व</h2>
            <div class="content-text">
                नेपाल सम्वत नेपालको मौलिक सम्वत हो, जसको सुरुवात राष्ट्रिय विभूति <b>शंखधर साख्वा</b>ले वि.सं. ९३६ (ई.सं. ८७९) मा जनतालाई ऋणमुक्त गराई गरेका थिए। 
            </div>
            <ul class="styled-list">
                <li><b>राष्ट्रिय सम्वत घोषणा:</b> २०६५ सालमा प्रधानमन्त्री पुष्पकमल दाहालको पालामा।</li>
                <li><b>शंखधर साख्वा:</b> वि.सं. २०५६ मंसिर २ मा राष्ट्रिय विभूति घोषित।</li>
                <li><b>प्रयोग:</b> विशेष गरी नेवा: समुदाय र सांस्कृतिक पर्वहरूमा प्रचलित भए तापनि अब यो प्रशासनिक पहिचान बनेको छ।</li>
            </ul>
        </div>

        <div class="content-card" style="background: #eef2f3;">
            <h3 class="card-title"><i class="fas fa-info-circle"></i> २०८१ को नयाँ वर्ष</h3>
            <div class="content-text">
                नेपाल सम्वत <b>११४५</b> को सुरुवात २०८१ कार्तिक महिनाको म्ह पूजाका दिनदेखि भएको छ। हाल सरकारी संयन्त्रले आधिकारिक पत्राचारमा <i>"वि.सं. २०८१/ने.सं. ११४५"</i> उल्लेख गर्ने अभ्यासलाई कडाइका साथ लागू गरेका छन्।
            </div>
        </div>
    `
        },
        {
            id: "unit-7",
            title: "जाजरकोट भूकम्प र पुनःनिर्माण",
            subtitle: "विनाशकारी भूकम्प २०८० र वर्तमान अवस्था",
            icon: "fas fa-house-damage",
            layout: "layout-3",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">जाजरकोट भूकम्प २०८०</h1>
            <p class="unit-subtitle">२०८० कार्तिक १७ गते राति ११:४७ बजे, ६.४ म्याग्निच्युड</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">१५४</div>
                <div class="stat-label">कुल मृत्यु</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">३६६</div>
                <div class="stat-label">गम्भीर घाइते</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">६२,०००+</div>
                <div class="stat-label">क्षतिग्रस्त घरहरू</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७ अर्ब+</div>
                <div class="stat-label">अनुमानित आर्थिक क्षति</div>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-exclamation-circle"></i>
                मुख्य विवरण र प्रभाव
            </h2>
            <div class="content-text">
                रामीडाँडा केन्द्रविन्दु भएर गएको यस भूकम्पले कर्णाली प्रदेशका जाजरकोट र रुकुम पश्चिममा अपूरणीय क्षति पुर्‍यायो। यो २०१५ (२०७२) को भूकम्प पछिको सबैभन्दा घातक भूकम्प हो। चिसो मौसममा गएको यस भूकम्पका कारण अस्थायी टहरामा बस्ने क्रममा थप मानिसहरूको (विशेष गरी वृद्धवृद्धा र सुत्केरी) निमोनियाका कारण मृत्यु भएको थियो।
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-map-marked-alt"></i>
                जिल्लागत क्षति विवरण
            </h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>जिल्ला</th>
                        <th>मृत्यु सङ्ख्या</th>
                        <th>पूर्ण क्षति (घर)</th>
                        <th>आंशिक क्षति</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>जाजरकोट</td><td>१०१</td><td>२४,७०७</td><td>११,०००+</td></tr>
                    <tr><td>रुकुम पश्चिम</td><td>५३</td><td>१६,५७०</td><td>९,०००+</td></tr>
                    <tr><td>सल्यान</td><td>०</td><td>१३५</td><td>६००+</td></tr>
                    <tr><td>बाजुरा/अन्य</td><td>०</td><td>आंशिक</td><td>कम प्रभाव</td></tr>
                </tbody>
            </table>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-tools"></i>
                पुनःनिर्माण र सरकारी राहत (२०८२ सम्मको अपडेट)
            </h3>
            <div class="content-text">
                भूकम्प पीडितहरूका लागि सरकारले 'अस्थायी आवास निर्माण अनुदान' अन्तर्गत प्रति परिवार ५० हजार रुपैयाँ (दुई किस्तामा) वितरण गरेको छ। स्थायी पुनःनिर्माणका लागि राष्ट्रिय विपद् जोखिम न्यूनीकरण तथा व्यवस्थापन प्राधिकरणले 'पुनःनिर्माण कार्यविधि २०८१' लागू गरी निजी आवासका लागि ५ लाख रुपैयाँसम्मको अनुदान सहयोग सुनिश्चित गरेको छ।
            </div>
            <ul class="styled-list">
                <li><b>अस्थायी आवास:</b> ५०,००० भन्दा बढी टहरा निर्माण सम्पन्न।</li>
                <li><b>विश्व बैंक सहयोग:</b> पुनःनिर्माणका लागि १५० मिलियन डलरको ऋण सम्झौता।</li>
                <li><b>चुनौती:</b> भौगोलिक विकटता र हिउँदको चिसोले पुनःनिर्माणमा ढिलाइ।</li>
            </ul>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-shield-alt"></i>
                भूकम्पीय जोखिम र सचेतना
            </h3>
            <div class="content-text">
                नेपालको पश्चिम क्षेत्रमा विगत ५०० वर्षदेखि ठूलो भूकम्प नगएकाले जाजरकोट भूकम्पलाई विज्ञहरूले "ठूलो भूकम्पको पूर्वसंकेत" का रूपमा लिएका छन्। यसले पहाडी क्षेत्रमा ढुङ्गा र माटोले बनेका घरहरूको निर्माण संहिता (Building Code) सुधार गर्नुपर्ने आवश्यकतालाई जोड दिएको छ।
            </div>
        </div>
    `
        },
        {
            id: "unit-8",
            title: "संयुक्त राष्ट्र महासचिवको नेपाल भ्रमण",
            subtitle: "एन्टेनियो गुटेरेस: जलवायु र शान्तिको सन्देश",
            icon: "fas fa-globe-asia",
            layout: "layout-2",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">एन्टेनियो गुटेरेसको ऐतिहासिक भ्रमण</h1>
            <p class="unit-subtitle">वि.सं. २०८० कार्तिक १२ - १५ (सन् २०२३ अक्टोबर २९ - नोभेम्बर १)</p>
        </div>
        
        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-calendar-check"></i>
                भ्रमणको मुख्य उद्देश्य र सन्देश
            </h3>
            <div class="content-text">
                महासचिव गुटेरेसको यो भ्रमण मुख्यतया दुईवटा विषयमा केन्द्रित थियो: <b>जलवायु परिवर्तनको गम्भीर असर</b> र नेपालको <b>शान्ति प्रक्रिया</b>को अन्तिम चरण। उनले सगरमाथा क्षेत्र र अन्नपूर्ण आधार शिविरबाट विश्वलाई "हिमाल रोइरहेको" र "हिउँ पग्लिरहेको" भन्दै जलवायु न्यायका लागि कडा सन्देश दिएका थिए।
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-route"></i>
                विस्तृत भ्रमण तालिका र कार्यक्रम
            </h3>
            <ul class="styled-list">
                <li><b>कार्तिक १२:</b> नेपाल आगमन र उच्चस्तरीय राजनीतिक भेटवार्ता।</li>
                <li><b>कार्तिक १३:</b> सगरमाथा क्षेत्र (स्याङबोचे) र पोखरा भ्रमण।</li>
                <li><b>कार्तिक १४:</b> अन्नपूर्ण आधार शिविर र भगवान बुद्धको जन्मस्थल लुम्बिनी भ्रमण।</li>
                <li><b>कार्तिक १४ (अपरान्ह):</b> संघीय संसदको संयुक्त सदनलाई सम्बोधन।</li>
                <li><b>कार्तिक १५:</b> भ्रमण सम्पन्न गरी प्रस्थान।</li>
            </ul>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-microphone-alt"></i>
                संसदमा विशेष सम्बोधनका प्रमुख बुँदाहरू
            </h2>
            <div class="content-text">
                महासचिव गुटेरेसले नेपालको संसदलाई सम्बोधन गर्ने क्रममा निम्न विषयहरूमा जोड दिएका थिए:
            </div>
            <ul class="styled-list">
                <li>नेपालले शान्ति प्रक्रियामा हासिल गरेको सफलता विश्वका लागि नमूना रहेको।</li>
                <li>संक्रमणकालीन न्याय (TRC) लाई अन्तर्राष्ट्रिय मापदण्ड अनुसार पीडितमैत्री बनाउन सुझाव।</li>
                <li>विकसित राष्ट्रहरूका कारण नेपाल जस्ता मुलुकले जलवायु परिवर्तनको मार खेप्नु परेकोले विकसित देशले क्षतिपूर्ति दिनुपर्ने।</li>
                <li>नेपालको अतिकम विकसित मुलुक (LDC) बाट स्तरोन्नति हुने लक्ष्यमा राष्ट्र संघको पूर्ण सहयोग रहने।</li>
            </ul>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                विशेष रोचक तथ्यहरू
            </h3>
            <div class="content-text">
                - १३ वर्षपछि संयुक्त राष्ट्र संघका कुनै महासचिवले नेपालको भ्रमण गरेका हुन् (यसअघि सन् २००८ मा वान की मुन आएका थिए)।<br>
                - गुटेरेसले खुम्बु क्षेत्रमा रहँदा स्थानीय समुदायसँग जलवायु परिवर्तनले उनीहरूको जीवनमा पारेको प्रभावबारे प्रत्यक्ष संवाद गरेका थिए।<br>
                - उनले लुम्बिनीमा 'शान्ति दीप' प्रज्वलन गर्दै विश्व शान्तिको अपील गरेका थिए।
            </div>
        </div>
    `
        }, {
            id: "unit-9",
            title: "नेपालका स्मारिका सिक्का र असर्फी",
            subtitle: "नेपाल राष्ट्र बैंक, टक्सार महाशाखा",
            icon: "fas fa-coins",
            layout: "layout-4",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">चाँदीका सिक्का र असर्फी</h1>
            <p class="unit-subtitle">नेपाल राष्ट्र बैंकद्वारा जारी विशेष मुद्राहरू</p>
        </div>
        
        <div class="content-text" style="margin-bottom: 20px;">
            नेपाल राष्ट्र बैंक, टक्सार महाशाखाले विभिन्न अवसरमा स्मारिका सिक्का (Commemorative Coins) र असर्फीहरू जारी गर्दै आएको छ। विशेष गरी २०८० असोजमा 'गाई' अंकित सिक्का र २०८१ मा थप नयाँ दरका सिक्काहरू प्रचलनमा ल्याइएका छन्।
        </div>

        <div class="stats-grid">
            <div class="grid-item">
                <i class="fas fa-cow" style="font-size: 1.5rem; color: #718093;"></i>
                <h3>१० ग्राम चाँदी</h3>
                <p><b>अंकित:</b> गाई (राष्ट्रिय जनावर)</p>
                <p><b>मूल्य:</b> १६०० रु.</p>
            </div>
            
            <div class="grid-item">
                <i class="fas fa-cow" style="font-size: 1.5rem; color: #718093;"></i>
                <h3>२५ ग्राम चाँदी</h3>
                <p><b>अंकित:</b> गाई (राष्ट्रिय जनावर)</p>
                <p><b>मूल्य:</b> ४००० रु.</p>
            </div>

            <div class="grid-item">
                <i class="fas fa-sun" style="font-size: 1.5rem; color: #f1c40f;"></i>
                <h3>सुनको असर्फी</h3>
                <p><b>तौल:</b> २.५ ग्राम, ५ ग्राम र १० ग्राम</p>
                <p><b>मूल्य:</b> बजार मूल्य अनुसार (दैनिक निर्धारण)</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-info-circle"></i>
                पछिल्लो अपडेट र नयाँ सिक्काहरू (२०८१/८२)
            </h2>
            <div class="content-text">
                नेपाल राष्ट्र बैंकले स्मारिका सिक्काको माग बढेपछि बबरमहलस्थित टक्सार महाशाखाबाट नियमित बिक्री वितरणको व्यवस्था मिलाएको छ।
            </div>
            <ul class="styled-list">
                <li><b>सार्क सिक्का:</b> सार्क स्थापनाको अवसरमा जारी गरिएका चाँदीका सिक्काहरू।</li>
                <li><b>लिपिबद्ध सिक्का:</b> नेपाल सम्वत र रञ्जना लिपि अंकित विशेष सिक्काहरू।</li>
                <li><b>असर्फी बिक्री:</b> धनतेरस र तिहारको अवसरमा विशेष रूपमा सुन र चाँदीका सिक्काहरू (मेडल) को बिक्री गरिन्छ।</li>
                <li><b>अनलाइन बुकिङ:</b> हाल राष्ट्र बैंकले असर्फी र स्मारिका सिक्काका लागि अनलाइन प्रणालीबाट आवेदन लिने व्यवस्था सुरु गरेको छ।</li>
            </ul>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-university"></i>
                टक्सार महाशाखाको स्थानान्तरण
            </h3>
            <div class="content-text">
                पहिले सुन्धारामा रहेको टक्सार महाशाखा हाल काठमाडौँको <b>बबरमहल</b> (औषधि व्यवस्था विभागको पुरानो भवन) मा सरेको छ। यहीँबाट नयाँ सिक्काहरूको टकमारी (Minting) र पुराना सिक्काहरूको प्रमाणीकरण गरिन्छ।
            </div>
        </div>
    `
        }, {
            id: "unit-10",
            title: "चन्द्रयान-३: ऐतिहासिक सफलता",
            subtitle: "चन्द्रमाको दक्षिणी ध्रुवमा पुग्ने पहिलो राष्ट्र",
            icon: "fas fa-rocket",
            layout: "layout-1",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">चन्द्रयान-३ र भारतको अन्तरिक्ष शक्ति</h1>
            <p class="unit-subtitle">२०२३ अगस्ट २३: अन्तरिक्ष इतिहासकै सुनौलो दिन</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">४</div>
                <div class="stat-label">सफल राष्ट्र (चन्द्र अवतरण)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">१</div>
                <div class="stat-label">दक्षिणी ध्रुवमा पुग्ने पहिलो</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">६१५ करोड</div>
                <div class="stat-label">अनुमानित खर्च (भारु)</div>
            </div>
        </div>
        
        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-satellite"></i> मुख्य प्राविधिक पक्ष</h2>
            <table class="data-table">
                <thead>
                    <tr><th>भाग</th><th>नाम</th><th>कार्य</th></tr>
                </thead>
                <tbody>
                    <tr><td><b>ल्यान्डर</b></td><td>विक्रम (Vikram)</td><td>चन्द्रमामा सुरक्षित अवतरण गराउने</td></tr>
                    <tr><td><b>रोभर</b></td><td>प्रज्ञान (Pragyan)</td><td>सतहमा गुडेर अनुसन्धान गर्ने (६ पाङ्ग्रा)</td></tr>
                    <tr><td><b>शक्ति</b></td><td>LVM3-M4</td><td>बाहुबली रकेट (प्रक्षेपण वाहन)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="info-card">
            <h3 class="card-title"><i class="fas fa-map-marker-alt"></i> विशेष उपलब्धिहरू</h3>
            <ul class="styled-list">
                <li><b>शिव शक्ति विन्दु:</b> चन्द्रयान-३ ओर्लिएको ठाउँलाई भारतले 'शिव शक्ति विन्दु' नाम दिएको छ।</li>
                <li><b>राष्ट्रिय अन्तरिक्ष दिवस:</b> अगस्ट २३ लाई भारतले 'National Space Day' घोषणा गरेको छ।</li>
                <li><b>नयाँ रेकर्ड:</b> अमेरिका, रूस र चीन पछि चन्द्रमामा सफ्ट ल्यान्डिङ गर्ने भारत चौथो मुलुक बन्यो।</li>
            </ul>
        </div>
    `
        }, {
            id: "unit-11",
            title: "हिमाल आरोहण कीर्तिमान",
            subtitle: "तेञ्जेन शेर्पा र क्रिस्तिन हरिला",
            icon: "fas fa-mountain",
            layout: "layout-2",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">विश्वको तीव्रतम आरोहण इतिहास</h1>
            <p class="unit-subtitle">९२ दिनमा विश्वका सबै १४ वटा ८,००० मिटरका हिमाल</p>
        </div>
        
        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-trophy"></i>
                ऐतिहासिक उपलब्धि
            </h3>
            <div class="content-text">
                नेपाली पर्वतारोही <strong>तेञ्जेन शेर्पा (लामा)</strong> र नर्वेजियन आरोही <strong>क्रिस्तिन हरिला</strong>ले मात्र <strong>९२ दिन (३ महिना १ दिन)</strong> मा विश्वका ८,००० मिटरभन्दा अग्ला सबै १४ वटा हिमाल आरोहण गरी विश्व कीर्तिमान कायम गरे। यसअघि यो रेकर्ड निर्मल पुर्जा (निम्स दाई) को नाममा १८९ दिनको थियो।
            </div>
        </div>

        

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-list-ol"></i>
                आरोहण तालिका र मुख्य हिमालहरू
            </h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>हिमाल</th>
                        <th>उचाई (मिटर)</th>
                        <th>आरोहण मिति (२०२३)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>शिशापाङ्मा (सुरुवात)</td><td>८,०२७</td><td>अप्रिल २६</td></tr>
                    <tr><td>सगरमाथा</td><td>८,८४८.८६</td><td>मे २३</td></tr>
                    <tr><td>नङ्गा पर्वत</td><td>८,१२६</td><td>जुन २६</td></tr>
                    <tr><td><b>K2 (अन्तिम हिमाल)</b></td><td>८,६११</td><td>जुलाई २७ (२०८० साउन ११)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="info-card" style="border-left: 5px solid #e74c3c;">
            <h3 class="card-title">
                <i class="fas fa-exclamation-triangle"></i>
                दुःखद अपडेट (२०८० असोज)
            </h3>
            <div class="content-text">
                कीर्तिमान कायम गरेको केही महिनापछि नै, २०८० असोज २० गते तिब्बतको <strong>शिशापाङ्मा</strong> हिमालमा आएको हिमपहिरोमा परी तेञ्जेन शेर्पा लामाको निधन भयो। उनले अमेरिकी पर्वतारोहीलाई विश्व रेकर्ड बनाउन सहयोग गर्ने क्रममा ज्यान गुमाएका थिए।
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                महत्वपूर्ण तथ्यहरू
            </h3>
            <ul class="styled-list">
                <li><b>सुरुवात:</b> २०२३ अप्रिल २६ (शिशापाङ्मा, तिब्बत)</li>
                <li><b>अन्त्य:</b> २०२३ जुलाई २७ (के-टु, पाकिस्तान)</li>
                <li><b>सहयात्री:</b> सेभेन समिट ट्रेक्सको टिम।</li>
                <li><b>सन्देश:</b> यस आरोहणले नेपाली शेर्पाहरू केवल सहयोगी मात्र नभई विश्वकै उत्कृष्ट पर्वतारोही हुन् भन्ने प्रमाणित गरेको छ।</li>
            </ul>
        </div>
    `
        }, {
            id: "unit-12",
            title: "लम्पी स्किन डिजिज",
            subtitle: "पशुधनमा महामारी र नियन्त्रण",
            icon: "fas fa-virus",
            layout: "layout-3",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">लम्पी स्किन डिजिज (LSD)</h1>
            <p class="unit-subtitle">गाई-भैँसीमा लाग्ने घातक भाइरस रोग</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">१५ लाख+</div>
                <div class="stat-label">संक्रमित पशु</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७७</div>
                <div class="stat-label">प्रभावित जिल्ला</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">५२ हजार+</div>
                <div class="stat-label">मृत्यु</div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-history"></i>
                ऐतिहासिक पृष्ठभूमि र नेपाल आगमन
            </h2>
            <div class="content-text">
                सन् १९२९ मा अफ्रिकाको जाम्बियाबाट सुरु भएको यो रोग नेपालमा पहिलो पटक <b>वि.सं. २०७७ असार (सन् २०२० जुलाई)</b> मा मोरङ जिल्लामा देखिएको थियो। सन् २०२३ मा यसले नेपालमा महामारीको रूप लियो।
            </div>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-microscope"></i>
                रोगको प्रकृति र लक्षण
            </h3>
            <div class="content-text">
                यो <b>'क्याप्रिपक्स' (Capripox)</b> भाइरसका कारण लाग्ने सरुवा रोग हो।
            </div>
            <ul class="styled-list">
                <li><b>लक्षण:</b> उच्च ज्वरो (१०४°F भन्दा माथि), शरीरमा गिर्खा/गाँठा आउने, मुख र नाकबाट र्‍याल बग्ने।</li>
                <li><b>प्रसार:</b> लामखुट्टे, झिँगा र किर्नाको टोकाइबाट तथा संक्रमित पशुको ओसारपसारबाट सर्ने।</li>
                <li><b>खोप:</b> यो रोग विरुद्ध 'Lumpy-vax' जस्ता खोपहरू प्रयोग गरिन्छ।</li>
            </ul>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-chart-line"></i>
                २०२५ को अद्यावधिक अवस्था
            </h2>
            <div class="content-text">
                नेपाल सरकारले हाल ७ वटै प्रदेशमा 'जोखिममा आधारित खोप अभियान' सञ्चालन गरेको छ। हालसम्म करिब <b>१३ लाख ५० हजार</b> भन्दा बढी पशुलाई खोप लगाइसकिएको छ।
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>विवरण</th>
                        <th>तथ्याङ्क (अनुमानित)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>कुल आर्थिक क्षति</td><td>करिब ४० अर्ब रुपैयाँ</td></tr>
                    <tr><td>प्रभावित मुख्य क्षेत्र</td><td>कोशी र कर्णाली प्रदेश</td></tr>
                    <tr><td>हालको स्थिति</td><td>नियन्त्रण उन्मुख (खोपका कारण)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-card" style="background: #e8f5e9; border-left: 5px solid #2e7d32;">
            <p><b>नोट:</b> यो रोग पशुबाट मानिसमा सर्दैन (Non-Zoonotic), तर पशुधनको मृत्यु र दूध उत्पादनमा आउने ७०% सम्मको गिरावटले किसानको आर्थिक अवस्थामा ठूलो चोट पुर्‍याउँछ।</p>
        </div>
    `
        }, {
            id: "unit-13",
            title: "नेपालको मानार्थ नागरिकता",
            subtitle: "विशिष्ट विदेशी मित्रहरूको कदर",
            icon: "fas fa-passport",
            layout: "layout-4",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">मानार्थ नागरिकता प्राप्त व्यक्तित्वहरू</h1>
            <p class="unit-subtitle">नेपालको ख्याति र विकासमा योगदान पुर्‍याउने विशिष्ट विदेशीहरू</p>
        </div>

        <div class="content-text" style="margin-bottom: 20px;">
            नेपाल सरकारले नेपालको भौगोलिक, सामाजिक, वैज्ञानिक वा पर्वतारोहण क्षेत्रमा असाधारण योगदान दिने विदेशी नागरिकलाई सम्मानस्वरूप <b>मानार्थ नागरिकता</b> प्रदान गर्ने गर्दछ। हालसम्म यो सम्मान पाउने मुख्य व्यक्तिहरू निम्नुअनुसार छन्:
        </div>
        
        <div class="stats-grid">
            <div class="grid-item" style="border-top: 4px solid #3498db;">
                <h3 style="color: #2c3e50;">१. सर एडमण्ड हिलारी</h3>
                <p><b>देश:</b> न्युजिल्याण्ड</p>
                <p><b>सम्मान मिति:</b> २०६० साल (सगरमाथा आरोहणको स्वर्ण जयन्तीमा)</p>
                <small>सगरमाथाका प्रथम आरोही र सोलुखुम्बुमा शिक्षा/स्वास्थ्यका प्रणेता।</small>
            </div>
            
            <div class="grid-item" style="border-top: 4px solid #3498db;">
                <h3 style="color: #2c3e50;">२. टोनी हेगन</h3>
                <p><b>देश:</b> स्विट्जरल्याण्ड</p>
                <p><b>योगदान:</b> नेपालको पहिलो भौगर्भिक सर्वेक्षण (Geological Survey)</p>
                <small>नेपाललाई पदयात्रा पर्यटनको नक्सामा ल्याउने र पदयात्रा मार्ग पहिचान गर्ने।</small>
            </div>
            
            <div class="grid-item" style="border-top: 4px solid #3498db;">
                <h3 style="color: #2c3e50;">३. कोलिन स्मिथ (पुतली बाजे)</h3>
                <p><b>देश:</b> बेलायत</p>
                <p><b>सम्मान मिति:</b> २०७६ मंसिर १६</p>
                <small>नेपालका २२५ भन्दा बढी प्रजातिका पुतलीहरूको अनुसन्धान। (निधन: २०८० माघ २१ मा पोखरामा)</small>
            </div>
            
            <div class="grid-item" style="border-top: 4px solid #3498db;">
                <h3 style="color: #2c3e50;">४. उम होङ्ग गिल</h3>
                <p><b>देश:</b> दक्षिण कोरिया</p>
                <p><b>सम्मान मिति:</b> २०७६ मंसिर १६</p>
                <small>१६ वटा हिमचुचुरा आरोही र नेपालमा स्कूल/अस्पताल निर्माणमा सक्रिय।</small>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-scroll"></i> कानुनी र ऐतिहासिक पक्ष</h2>
            <div class="content-text">
                नेपालमा मानार्थ नागरिकता प्राप्त गर्ने <b>पहिलो व्यक्ति सर एडमण्ड हिलारी</b> हुन्। उनीपछि टोनी हेगनलाई यो सम्मान दिइएको थियो। २०७६ सालमा सरकारले कोलिन स्मिथ र उम होङ्ग गिललाई एकैसाथ यो सम्मान प्रदान गरेको थियो।
            </div>
        </div>

        <div class="info-card">
            <h3 class="card-title"><i class="fas fa-award"></i> अन्य उल्लेखनीय विदेशीहरू</h3>
            <div class="content-text">
                नागरिकता नभए पनि नेपाल सरकारले विभिन्न समयमा कदर पत्र र राष्ट्रिय पदकबाट सम्मानित गरेका अन्य व्यक्तित्वहरू:
            </div>
            <ul class="styled-list">
                <li><b>जुन्को ताबेई:</b> सगरमाथा चढ्ने पहिलो महिला (जापान)।</li>
                <li><b>डा. सन्दुक रुइतका सहकर्मीहरू:</b> आँखा उपचारमा योगदान पुर्‍याउने विभिन्न विदेशी चिकित्सकहरू।</li>
            <li><b>पिटर हिल्लारी:</b> एडमण्ड हिलारीका छोरा, जसले बाबुको सामाजिक कार्यलाई निरन्तरता दिइरहेका छन्।</li>
            </ul>
        </div>

        <div class="content-card" style="background: #f8f9fa;">
            <p><b>अद्यावधिक नोट (२०८२):</b> पछिल्लो समयमा नेपालको पर्यटन प्रवर्द्धनमा विशेष योगदान दिने विदेशी आरोहीहरूलाई पनि मानार्थ नागरिकता दिने विषयमा बहस भइरहेको छ।</p>
        </div>
    `
        },
        {
            id: "unit-14",
            title: "रु १००० को नोट",
            subtitle: "राम-लक्ष्मण हात्ती र सुरक्षा विशेषता",
            icon: "fas fa-money-bill-wave",
            layout: "layout-2",
            content: `
                <div class="unit-header">
                    <h1 class="unit-title">नेपाली रु १००० को नोट</h1>
                    <p class="unit-subtitle">डिजाईन, सुरक्षा विशेषता र ऐतिहासिक परिवर्तन</p>
                </div>

                <div class="content-card">
                    <h3 class="card-title">
                        <i class="fas fa-elephant"></i>
                        राम-लक्ष्मण हात्ती (पृष्ठ भाग)
                    </h3>
                    <div class="content-text">
                        पहिलेको नोटमा अफ्रिकी हात्तीको चित्र रहेको भनी आलोचना भएपछि नेपाल राष्ट्र बैंकले नयाँ नोटमा नेपाली हात्तीको चित्र राखेको हो।
                    </div>
                    <ul class="styled-list">
                        <li><b>हात्तीको नाम:</b> जुम्ल्याहा हात्ती राम र लक्ष्मण।</li>
                        <li><b>जन्मस्थल:</b> चितवन राष्ट्रिय निकुञ्जको खोरसोरस्थित हात्ती प्रजनन् केन्द्र (जन्म: २०६५ मंसिर)।</li>
                        <li><b>महत्व:</b> नेपालमा पहिलो पटक हात्तीको जुम्ल्याहा बच्चा जन्मिएको ऐतिहासिक घटनालाई नोटमार्फत सम्मान गरिएको।</li>
                    </ul>
                </div>



                <div class="content-card">
                    <h3 class="card-title">
                        <i class="fas fa-shield-alt"></i>
                        अग्र भाग र सुरक्षा विशेषताहरू
                    </h3>
                    <div class="content-text">
                        नोटको अग्र भागमा विश्वको सर्वोच्च शिखर <b>सगरमाथा</b>को चित्र रहेको छ।
                    </div>
                    <ul class="styled-list">
                        <li><b>डिजाइनर:</b> सुन्दर श्रेष्ठ।</li>
                        <li><b>सुरक्षा धागो:</b> चलायमान (Windowed Security Thread) जसमा 'NRB' र '1000' लेखिएको देखिन्छ।</li>
                        <li><b>दृष्टिविहीनका लागि:</b> नोटको दायाँतर्फ तीनवटा उभिएका थोप्लाहरू (Tactile marks) छन्, जसले छामेर नोट चिन्न मद्दत गर्छ।</li>
                        <li><b>गभर्नर:</b> यो नयाँ डिजाइनको नोट गभर्नर <b>महाप्रसाद अधिकारी</b>को हस्ताक्षरमा जारी गरिएको हो।</li>
                    </ul>
                </div>

                <div class="info-card">
                    <h3 class="card-title">
                        <i class="fas fa-exclamation-circle"></i>
                        २०८१/८२ को नयाँ अपडेट (चुच्चे नक्सा)
                    </h3>
                    <div class="content-text">
                        नेपाल सरकारले हालै (२०८१ वैशाख) रु १०० को नोटमा नेपालको नयाँ राजनीतिक नक्सा (लिम्पियाधुरा, कालापानी र लिपुलेक समेटिएको) राख्ने निर्णय गरेको छ। आगामी संस्करणका अन्य नोटहरू (रु १००० सहित) मा पनि क्रमशः यो परिवर्तन हुने सम्भावना छ।
                    </div>
                </div>

                <div class="content-section">
                    <h2 class="section-title">
                        <i class="fas fa-info-circle"></i>
                        अन्य रोचक तथ्य
                    </h2>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>विशेषता</th>
                                <th>विवरण</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>नोटको साइज</td><td>१७२ x ७० मि.मि.</td></tr>
                            <tr><td>प्रमुख रंग</td><td>नीलो र खैरोको सम्मिश्रण</td></tr>
                            <tr><td>पानी छाप (Watermark)</td><td>लालीगुराँसको चित्र</td></tr>
                            <tr><td>मुद्रण</td><td>पछिल्लो समयमा चिनियाँ कम्पनीले मुद्रण गर्दै आएको</td></tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: "unit-15",
            title: "नेपालको नयाँ नक्सा र क्षेत्रफल",
            subtitle: "लिम्पियाधुरा, कालापानी र लिपुलेक",
            icon: "fas fa-map-marked",
            layout: "layout-1",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">नेपालको नयाँ राजनीतिक नक्सा</h1>
            <p class="unit-subtitle">राष्ट्रिय स्वाभिमान र सुगौली सन्धिमा आधारित सिमाना</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">१,४७,५१६</div>
                <div class="stat-label">नयाँ क्षेत्रफल (व.कि.मि.)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">३३५</div>
                <div class="stat-label">थपिएको भूमि (व.कि.मि.)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७७</div>
                <div class="stat-label">जिल्ला कायमै</div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-calendar-alt"></i>
                मुख्य ऐतिहासिक मितिहरू
            </h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>विवरण</th>
                        <th>मिति (वि.सं.)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>मन्त्रिपरिषदबाट नक्सा पारित</td><td>२०७७ जेठ ५</td></tr>
                    <tr><td><b>नयाँ नक्सा सार्वजनिक</b></td><td><b>२०७७ जेठ ७</b></td></tr>
                    <tr><td>प्रतिनिधि सभाबाट पारित (निशान छाप संशोधन)</td><td>२०७७ जेठ ३१</td></tr>
                    <tr><td>राष्ट्रपतिबाट प्रमाणीकरण (राजपत्रमा प्रकाशित)</td><td>२०७७ असार ४</td></tr>
                </tbody>
            </table>
        </div>

        

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-expand-arrows-alt"></i>
                क्षेत्रफल र विवादित क्षेत्र
            </h2>
            <div class="content-text">
                नेपाल सरकारले सुगौली सन्धिको मर्म अनुरूप महाकाली नदीको मुहान <b>लिम्पियाधुरा</b>लाई मान्दै नयाँ नक्सा जारी गरेको हो। यसले दार्चुला जिल्लाको ब्याँस गाउँपालिकाका विभिन्न भागहरू समेट्छ।
            </div>
            <ul class="styled-list">
                <li><b>पुरानो क्षेत्रफल:</b> १,४७,१८१ वर्ग कि.मि.।</li>
                <li><b>थपिएको भूमि:</b> गुन्जी, नाबी र कुटी गाउँसहित करिब ३३५ वर्ग कि.मि.।</li>
                <li><b>संवैधानिक संशोधन:</b> संविधानको अनुसूची-३ मा रहेको निशान छापलाई नयाँ नक्सा अनुसार परिवर्तन गर्न 'संविधानको दोस्रो संशोधन' गरिएको थियो।</li>
            </ul>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                २०२५ को अद्यावधिक सन्दर्भ
            </h3>
            <div class="content-text">
                हालसम्म पनि संयुक्त राष्ट्र संघ र अन्तर्राष्ट्रिय मञ्चहरूमा आधिकारिक क्षेत्रफलको विषयमा प्राविधिक कामहरू भइरहेका छन्। नेपाल राष्ट्र बैंकले जारी गर्ने १०० को नोटमा समेत नयाँ नक्सा समावेश गर्ने निर्णय २०८१ मा भएको छ। लोक सेवाको तयारीका लागि "चुच्चे नक्सा" सार्वजनिक भएको मिति (२०७७ जेठ ७) अति महत्वपूर्ण मानिन्छ।
            </div>
        </div>
    `
        }, {
            id: "unit-16",
            title: "कोभिड-१९ र जनस्वास्थ्य",
            subtitle: "भाइरस, खोप र महत्वपूर्ण मितिहरू",
            icon: "fas fa-virus",
            layout: "layout-4",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">कोरोना भाइरस (COVID-19)</h1>
            <p class="unit-subtitle">विश्वव्यापी महामारी र नेपालको अवस्था</p>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <div class="grid-item">
                <h4 style="margin: 0;">COVID-19</h4>
                <p style="font-size: 0.85em;">Corona Virus Disease 2019</p>
            </div>
            <div class="grid-item">
                <h4 style="margin: 0;">PCR</h4>
                <p style="font-size: 0.85em;">Polymerase Chain Reaction</p>
            </div>
            <div class="grid-item">
                <h4 style="margin: 0;">SARS-CoV-2</h4>
                <p style="font-size: 0.85em;">Severe Acute Respiratory Syndrome Corona Virus 2</p>
            </div>
            <div class="grid-item">
                <h4 style="margin: 0;">COVAX</h4>
                <p style="font-size: 0.85em;">COVID-19 Vaccines Global Access</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-history"></i> महत्वपूर्ण ऐतिहासिक मितिहरू</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>घटना</th>
                        <th>मिति (ई.सं.)</th>
                        <th>मिति (वि.सं.)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>चीनमा पहिलो पटक देखिएको</td><td>२०१९ डिसेम्बर ३१</td><td>-</td></tr>
                    <tr><td>विश्व स्वास्थ्य संगठन (WHO) द्वारा महामारी घोषणा</td><td>२०२० मार्च ११</td><td>२०७६ फागुन २८</td></tr>
                    <tr><td>नेपालमा पहिलो संक्रमित पुष्टि</td><td>२०२० जनवरी २४</td><td>२०७६ माघ १०</td></tr>
                    <tr><td>नेपालमा पहिलो मृत्यु (सिन्धुपाल्चोक)</td><td>२०२० मे १६</td><td>२०७७ जेठ ३</td></tr>
                    <tr><td>WHO द्वारा स्वास्थ्य संकटकाल अन्त्य घोषणा</td><td>२०२३ मे ५</td><td>२०८० वैशाख २२</td></tr>
                </tbody>
            </table>
        </div>

        

        <div class="content-section">
            <h2 class="section-title"><i class="fas fa-syringe"></i> खोप र भेरियन्टहरू</h2>
            <div class="content-text">
                नेपालमा <b>२०७७ माघ १४</b> गतेदेखि खोप अभियान सुरु भएको थियो। पहिलो पटक लगाइएको खोप <b>'कोभिसिल्ड' (Covishield)</b> थियो।
            </div>
            <ul class="styled-list">
                <li><b>भेरियन्टहरू:</b> अल्फा (Alpha), डेल्टा (Delta), ओमिक्रोन (Omicron - पछिल्लो संक्रामक रूप)।</li>
                <li><b>खोपका प्रकारहरू:</b> भेरोसेल (चीन), एस्ट्राजेनेका, जोन्सन एन्ड जोन्सन, मोडर्ना, फाइजर।</li>
                <li><b>स्मार्ट कार्ड:</b> नेपाल सरकारले विदेश जानेका लागि क्यूआर कोडसहितको विद्युतीय खोप प्रमाणीकरण सुरु गरेको छ।</li>
            </ul>
        </div>

        <div class="info-card">
            <h3 class="card-title"><i class="fas fa-info-circle"></i> विशेष शब्दावली (Terminologies)</h3>
            <ul class="styled-list">
                <li><b>Quarantine:</b> सम्भावित संक्रमितलाई समूहबाट अलग राख्ने अवधि।</li>
                <li><b>Isolation:</b> संक्रमित व्यक्तिलाई अन्य स्वस्थ व्यक्तिबाट अलग राख्ने प्रक्रिया।</li>
                <li><b>Ventilator:</b> कृत्रिम रूपमा श्वासप्रश्वास गराउने मेसिन।</li>
                <li><b>Zoonotic:</b> जनावरबाट मानिसमा सर्ने रोग।</li>
            </ul>
        </div>
    `
        }, {
            id: "unit-17",
            title: "भाषा र पहिचान",
            subtitle: "भाषा आयोग र जनजातिको पछिल्लो अवस्था",
            icon: "fas fa-language",
            layout: "layout-2",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">भाषा आयोग र भाषिक विवरण</h1>
            <p class="unit-subtitle">राष्ट्रिय जनगणना २०७८ र भाषा आयोगको प्रतिवेदनमा आधारित</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">१२४</div>
                <div class="stat-label">बोलिने भाषाहरू (२०७८ अनुसार)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">६०</div>
                <div class="stat-label">सूचीकृत जनजाति</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७</div>
                <div class="stat-label">आयोगले थपेका नयाँ भाषा</div>
            </div>
        </div>
        
        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-plus-circle"></i>
                थपिएका भाषाहरू र पछिल्लो संख्या
            </h3>
            <div class="content-text">
                राष्ट्रिय जनगणना २०७८ को नतिजा अनुसार नेपालमा <b>१२४ भाषा</b> बोलिने पाइएको छ। तर, भाषा आयोगले आफ्नो पछिल्लो प्रतिवेदनमा थप नयाँ भाषाहरू पहिचान गरेको छ।
            </div>
            <ul class="styled-list">
                <li><b>थपिएका प्रमुख भाषा:</b> मारेक याख्खा, नावा शेर्पा, नहँ, र्याक, सेके, ताङ्बे र ल्होमी।</li>
                <li><b>पहिलो थप (६ भाषा):</b> २०७६ मा आयोगले सिन्ताली, सेरोके, ताङ्बे, माराङ, ल्होमी र तिलुङ पहिचान गरेको थियो।</li>
                <li><b>सरकारी कामकाजको भाषा:</b> भाषा आयोगले सातै प्रदेशमा नेपाली भाषाका अतिरिक्त सम्बन्धित प्रदेशमा धेरै बोलिने भाषाहरूलाई सरकारी कामकाजको भाषा बनाउन सिफारिस गरेको छ।</li>
            </ul>
        </div>

        
        
        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-users"></i>
                आदिवासी जनजाति सूचीकरण
            </h3>
            <div class="content-text">
                नेपाल सरकारले <b>राणा थारू</b>लाई २०७६ जेठ ५ गते (राजपत्रमा प्रकाशित माघ २०) छुट्टै आदिवासी जनजातिको रूपमा सूचीकृत गरेपछि कुल संख्या <b>६०</b> पुगेको छ।
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>क्षेत्र</th>
                        <th>जनजाति संख्या</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>हिमाली क्षेत्र</td><td>१८</td></tr>
                    <tr><td>पहाडी क्षेत्र</td><td>२४</td></tr>
                    <tr><td>भित्री मधेश</td><td>७</td></tr>
                    <tr><td>तराई क्षेत्र</td><td>११ (राणा थारूसहित)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="info-card">
            <h3 class="card-title"><i class="fas fa-university"></i> भाषा आयोगको गठन</h3>
            <div class="content-text">
                नेपालको संविधानको धारा २८७ अनुसार भाषा आयोगको गठन भएको हो। यसका प्रथम अध्यक्ष <b>डा. लवदेव अवस्थी</b> हुन्। आयोगले लोपोन्मुख भाषाहरूको संरक्षणका लागि "बहुभाषिक शिक्षा" र "भाषा अभिलेखीकरण" को कार्य गरिरहेको छ।
            </div>
        </div>

        <div class="content-card" style="background: #f1f8ff; border-left: 5px solid #2980b9;">
            <p><b>अद्यावधिक नोट:</b> जनगणना २०७८ अनुसार नेपालमा सबैभन्दा धेरै बोलिने ५ भाषाहरू क्रमशः: १. नेपाली (४४.८६%), २. मैथिली (११.०५%), ३. भोजपुरी (६.२४%), ४. थारू (५.८८%) र ५. तामाङ (४.८८%) रहेका छन्।</p>
        </div>
    `
        }, {
            id: "unit-18",
            title: "राष्ट्रिय परिचयपत्र (National ID)",
            subtitle: "डिजिटल पहचान और अनिवार्य सेवाएँ",
            icon: "fas fa-id-card",
            layout: "layout-3",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">राष्ट्रिय परिचयपत्र एवं पञ्जीकरण</h1>
            <p class="unit-subtitle">नेपाल का बायोमेट्रिक डिजिटल पहचान पत्र</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">१०</div>
                <div class="stat-label">अंकों का व्यक्तिगत परिचय नंबर (NIN)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७७</div>
                <div class="stat-label">जिल्लों में पंजीकरण उपलब्ध</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">१६+</div>
                <div class="stat-label">वर्ष की आयु अनिवार्य</div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-history"></i>
                ऐतिहासिक पृष्ठभूमि
            </h2>
            <div class="timeline-item">
                <h3>२०७५ मंसिर ३</h3>
                <p><b>पाँचथर</b> जिले से वितरण की शुरुआत (प्रथम प्राप्तकर्ता: १०१ वर्षीया <b>भगवती देवी भण्डारी</b>)।</p>
            </div>
            <div class="timeline-item">
                <h3>सिंहदरबार</h3>
                <p>सरकारी अधिकारियों के लिए २०७५ माघ २६ से वितरण शुरू हुआ।</p>
            </div>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-microchip"></i>
                कार्ड की मुख्य विशेषताएँ
            </h3>
            <ul class="styled-list">
                <li><b>बायोमेट्रिक डेटा:</b> १० उंगलियों के निशान (Fingerprints), आंखों की पुतली (Iris) और डिजिटल फोटो।</li>
                <li><b>चिप आधारित:</b> इसमें इलेक्ट्रॉनिक चिप होती है जिसमें नागरिक की व्यक्तिगत और पारिवारिक जानकारी सुरक्षित रहती है।</li>
                <li><b>बहुउद्देशीय:</b> यह मतदाता पहचान पत्र, पैन कार्ड और सामाजिक सुरक्षा कार्ड के रूप में भी भविष्य में एकीकृत होगा।</li>
            </ul>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-exclamation-circle"></i>
                २०८१/८२ का नया अपडेट (अनिवार्यता)
            </h2>
            <div class="content-text">
                नेपाल सरकार ने विभिन्न सार्वजनिक सेवाओं के लिए राष्ट्रिय परिचयपत्र को अनिवार्य कर दिया है:
            </div>
            <ul class="styled-list">
                <li><b>राहदानी (Passport):</b> पासपोर्ट बनाने या नवीनीकरण के लिए राष्ट्रिय परिचयपत्र नंबर (NIN) अनिवार्य है।</li>
                <li><b>सामाजिक सुरक्षा भत्ता:</b> वृद्ध भत्ता और अन्य सामाजिक सुरक्षा लाभ प्राप्त करने के लिए इसे अनिवार्य बनाया गया है (चरणबद्ध तरीके से)।</li>
                <li><b>सिम कार्ड और बैंक:</b> भविष्य में नया सिम कार्ड लेने और बैंक खाता खोलने के लिए भी इसे अनिवार्य करने की योजना है।</li>
                <li><b>मोबाइल ऐप:</b> 'नागरिक ऐप' (Nagarik App) में भी राष्ट्रिय परिचयपत्र को लिंक करना संभव हो गया है।</li>
            </ul>
        </div>

        <div class="content-card" style="background: #fff9db; border-left: 5px solid #fab005;">
            <p><b>विशेष जानकारी:</b> राष्ट्रिय परिचयपत्र का प्रबंधन <b>'राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभाग'</b> (गृह मंत्रालय के अंतर्गत) द्वारा किया जाता है। इसका मुख्य नारा <b>"सुशासन और सुरक्षा के लिए डिजिटल पहचान"</b> है।</p>
        </div>
    `
        }, {
            id: "unit-19",
            title: "प्रदेश विवरण २०८२",
            subtitle: "नेपालका ७ प्रदेशको पूर्ण र अद्यावधिक जानकारी",
            icon: "fas fa-map-marked-alt",
            layout: "layout-1",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">नेपालका ७ प्रदेशहरू (२०८२ अपडेट)</h1>
            <p class="unit-subtitle">संघीय संरचना, प्रशासनिक विभाजन र भौगोलिक तथ्याङ्क</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">७५३</div>
                <div class="stat-label">स्थानीय तह</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">७७</div>
                <div class="stat-label">जिल्ला</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">३</div>
                <div class="stat-label">तह (संघ, प्रदेश, स्थानीय)</div>
            </div>
        </div>

        

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-table"></i>
                प्रादेशिक प्रोफाइल (२०२५ तथ्याङ्क)
            </h2>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>प्रदेश</th>
                        <th>स्थायी राजधानी</th>
                        <th>जिल्ला</th>
                        <th>स्थानीय तह</th>
                        <th>ठूलो जिल्ला (क्षेत्रफल)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><b>कोशी</b></td><td>विराटनगर</td><td>१४</td><td>१३७</td><td>ताप्लेजुङ</td></tr>
                    <tr><td><b>मधेस</b></td><td>जनकपुरधाम</td><td>८</td><td>१३६</td><td>सप्तरी</td></tr>
                    <tr><td><b>बागमती</b></td><td>हेटौँडा</td><td>१३</td><td>११९</td><td>सिन्धुपाल्चोक</td></tr>
                    <tr><td><b>गण्डकी</b></td><td>पोखरा</td><td>११</td><td>८५</td><td>गोरखा</td></tr>
                    <tr><td><b>लुम्बिनी</b></td><td>देउखुरी (दाङ)</td><td>१२</td><td>१०९</td><td>दाङ</td></tr>
                    <tr><td><b>कर्णाली</b></td><td>वीरेन्द्रनगर</td><td>१०</td><td>७९</td><td>डोल्पा</td></tr>
                    <tr><td><b>सुदूरपश्चिम</b></td><td>गोदावरी (कैलाली)</td><td>९</td><td>८८</td><td>बझाङ</td></tr>
                </tbody>
            </table>
        </div>

        <div class="content-section">
            <h2 class="section-title">
                <i class="fas fa-history"></i>
                नामाकरणको ऐतिहासिक क्रम
            </h2>
            <div class="content-text">
                नेपालका सातै प्रदेशले आफ्नो स्थायी नाम र राजधानी प्राप्त गरिसकेका छन्। नामाकरण हुने पहिलो प्रदेश <b>कर्णाली</b> हो भने अन्तिम प्रदेश <b>कोशी</b> हो।
            </div>
            <ul class="styled-list">
                <li><b>१. कर्णाली:</b> २०७४ फागुन १२ (राजधानी: वीरेन्द्रनगर)</li>
                <li><b>२. गण्डकी:</b> २०७५ असार २२ (राजधानी: पोखरा)</li>
                <li><b>३. सुदूरपश्चिम:</b> २०७५ असोज १२ (राजधानी: गोदावरी)</li>
                <li><b>४. बागमती:</b> २०७६ पुस २७ (राजधानी: हेटौँडा)</li>
                <li><b>५. लुम्बिनी:</b> २०७७ असोज २० (राजधानी: देउखुरी)</li>
                <li><b>६. मधेस:</b> २०७८ माघ ३ (राजधानी: जनकपुरधाम)</li>
                <li><b>७. कोशी:</b> २०७९ फागुन १७ (राजधानी: विराटनगर)</li>
            </ul>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-chart-pie"></i>
                २०८२ का लागि महत्वपूर्ण तथ्यहरू
            </h3>
            <ul class="styled-list">
                <li><b>क्षेत्रफलमा ठूलो/सानो:</b> कर्णाली (ठूलो), मधेस (सानो)।</li>
                <li><b>जनसंख्यामा ठूलो/सानो:</b> बागमती (ठूलो), कर्णाली (सानो)।</li>
                <li><b>धेरै/थोरै स्थानीय तह:</b> कोशी (१३७), कर्णाली (७९)।</li>
                <li><b>साक्षरता दरमा पहिलो:</b> बागमती प्रदेश (८२.१% - जनगणना २०७८)।</li>
                <li><b>मानव विकास सूचकांक (HDI):</b> बागमती प्रदेश सबैभन्दा अगाडि छ।</li>
            </ul>
        </div>

        <div class="content-card" style="background: #19dc2dff; border-left: 5px solid #2196f3;">
            <p><b>अद्यावधिक नोट (२०२५):</b> लुम्बिनी प्रदेशको मुख्यमन्त्री कार्यालय र मन्त्रालयहरू पूर्ण रूपमा बुटवलबाट <b>देउखुरी (राप्ती उपत्यका)</b> मा स्थानान्तरण भइसकेका छन्। सुदूरपश्चिमको राजधानी गोदावरी घोषणा भए पनि भौतिक संरचना अभावका कारण अझै अस्थायी रूपमा धनगढीबाटै काम भइरहेको छ।</p>
        </div>
    `
        }, {
            id: "unit-20",
            title: "NRNA विवरण",
            subtitle: "गैर आवासीय नेपाली संघ र नागरिकता",
            icon: "fas fa-globe-americas",
            layout: "layout-2",
            content: `
        <div class="unit-header">
            <h1 class="unit-title">गैर आवासीय नेपाली संघ (NRNA)</h1>
            <p class="unit-subtitle">"नेपालीका लागि नेपाली" - विश्वभरका नेपालीहरूको साझा सञ्जाल</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">८०+</div>
                <div class="stat-label">आबद्ध देशहरू (NCC)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">२०६०</div>
                <div class="stat-label">स्थापना (वि.सं.)</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">असोज २४</div>
                <div class="stat-label">गैर आवासीय नेपाली दिवस</div>
            </div>
        </div>

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-id-card"></i>
                ऐतिहासिक कोसेढुङ्गा: NRNA नागरिकता
            </h3>
            <div class="content-text">
                नेपालको इतिहासमा पहिलो पटक <b>वि.सं. २०८० असोज ३०</b> गतेदेखि गैर आवासीय नेपाली नागरिकता वितरण सुरु गरियो।
            </div>
            <ul class="styled-list">
                <li><b>पहिलो प्राप्तकर्ता:</b> कुल आचार्य र बद्री केसी।</li>
                <li><b>अधिकार:</b> आर्थिक, सामाजिक र सांस्कृतिक अधिकार उपभोग गर्न पाउने (तर राजनीतिक अधिकार नहुने)।</li>
                <li><b>संवैधानिक आधार:</b> नेपालको संविधानको धारा १४।</li>
            </ul>
        </div>

        

        <div class="content-card">
            <h3 class="card-title">
                <i class="fas fa-user-tie"></i>
                नेतृत्व र ११ औं महाधिवेशन
            </h3>
            <div class="content-text">
                २०२३ अक्टोबरमा काठमाडौँमा सम्पन्न ११ औं महाधिवेशनबाट <b>डा. बद्री केसी</b> अध्यक्षमा निर्वाचित भए पनि नेतृत्व चयनमा केही विवादहरू देखिएका छन्।
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>अवधि</th>
                        <th>अध्यक्ष</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>२००३ - २००९</td><td>डा. उपेन्द्र महतो (संस्थापक अध्यक्ष)</td></tr>
                    <tr><td>२००९ - २०११</td><td>देवमान हिराचन</td></tr>
                    <tr><td>२०११ - २०१३</td><td>जीवा लामिछाने</td></tr>
                    <tr><td>२०१३ - २०१७</td><td>शेष घले (दुई कार्यकाल)</td></tr>
                    <tr><td>२०१७ - २०१९</td><td>भवन भट्ट</td></tr>
                    <tr><td>२०१९ - २०२२</td><td>कुमार पन्त</td></tr>
                    <tr><td>२०२२ - २०२३</td><td>कुल आचार्य / रबिना थापा / बद्री केसी (बहु-अध्यक्ष प्रणाली)</td></tr>
                    <tr><td>२०२३ - वर्तमान</td><td>डा. बद्री केसी</td></tr>
                </tbody>
            </table>
        </div>

        <div class="info-card">
            <h3 class="card-title">
                <i class="fas fa-info-circle"></i>
                महत्वपूर्ण जानकारी
            </h3>
            <ul class="styled-list">
                <li><b>नारा:</b> "नेपालीका लागि नेपाली" (For Nepali by Nepali)।</li>
                <li><b>मुख्यालय:</b> बालुवाटार, काठमाडौँ, नेपाल।</li>
                <li><b>परिभाषा:</b> दक्षिण एसियाली क्षेत्रीय सहयोग संगठन (SAARC) सदस्य राष्ट्र बाहेकका देशमा कम्तीमा २ वर्ष बसोबास गर्ने नेपाली नागरिक वा नेपाली मूलका विदेशी नागरिक।</li>
                <li><b>विधान:</b> परराष्ट्र मन्त्रालयमा दर्ता भई सञ्चालन हुने।</li>
            </ul>
        </div>

        <div class="content-card" style="background: #11e855ff; border-top: 4px solid #1a365d;">
            <p><b>अद्यावधिक नोट २०२५:</b> NRNA ले हाल नेपालमा <b>'NRNA नेपाल फाउन्डेसन'</b> मार्फत परोपकारी कार्यहरू र लाप्राक नमुना वस्ती जस्ता पुनर्निर्माणका परियोजनाहरू सञ्चालन गरिरहेको छ।</p>
        </div>
    `
        }
    ],

    // Search Index
    searchIndex: [],

    // Initialize search index
    initSearchIndex: function () {
        this.searchIndex = [];
        this.units.forEach(unit => {
            // Add unit to search index
            this.searchIndex.push({
                id: unit.id,
                title: unit.title,
                subtitle: unit.subtitle,
                content: unit.content.replace(/<[^>]*>/g, ' ') // Remove HTML tags
            });
        });
    }
};

// Initialize search index
appData.initSearchIndex();