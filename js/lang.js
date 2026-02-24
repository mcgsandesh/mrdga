document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('app-content');
    const navButtons = document.querySelectorAll('.nav-link-premium');

    // Pages Data
    const pages = {
        home: () => `
            <div class="text-center mb-16 px-4" style="animation: fadeIn 0.5s ease-out;">
                <div class="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-8 border border-orange-200">
                     <span class="animate-pulse">🚩</span> <span>Sanskriti & Suraksha</span>
                </div>
                
                <div class="mb-10">
                    <!-- Title Line 1 -->
                    <h2 class="hero-subtitle text-xl md:text-4xl font-extrabold text-indigo-900 mb-4 tracking-tight">
                        शौर्य, उत्साह आणि परंपरेचा मान
                    </h2>
                    <!-- Main Association Name (Fixed for Desktop wrapping) -->
                    <h1 class="hero-title text-3xl md:text-6xl lg:text-7xl font-black text-indigo-950 mb-8 leading-tight">
                        <span class="orange-gradient-text block lg:inline">महाराष्ट्र राज्य दहीहंडी</span> 
                        <span class="orange-gradient-text block lg:inline">गोविंदा असोसिएशन</span>
                    </h1>
                </div>

                <div class="h-1.5 w-40 bg-orange-500 mx-auto mb-10 rounded-full shadow-sm"></div>

                <p class="text-gray-500 max-w-3xl mx-auto text-lg md:text-2xl mb-12 leading-relaxed font-medium">
                    तुमचे स्वागत आहे. सुरक्षित मनोरे आणि गोविंदांचे कल्याण हे आमचे ध्येय.
                </p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-6 items-center">
                    <button onclick="navigate('register')" class="btn-premium w-full sm:w-auto text-white px-12 py-5 rounded-2xl font-bold shadow-2xl text-lg transition-all">
                        सदस्य म्हणून नोंदणी करा
                    </button>
                    <button onclick="navigate('events')" class="bg-white w-full sm:w-auto text-indigo-950 px-12 py-5 rounded-2xl font-bold shadow-xl hover:bg-gray-50 transition border border-gray-100 text-lg">
                        कार्यक्रम पहा
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div class="premium-card p-8 sm:p-10">
                    <div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-8 text-3xl shadow-sm">🛡️</div>
                    <h3 class="text-2xl font-bold mb-4 text-indigo-950">सुरक्षा (Safety)</h3>
                    <p class="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">प्रत्येक गोविंदाचा विमा आणि हेल्मेट वापर अनिवार्य आहे. सुरक्षेचे नियम पाळणे ही सर्वांची जबाबदारी आहे.</p>
                </div>
                <div class="premium-card p-8 sm:p-10">
                    <div class="w-16 h-16 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mb-8 text-3xl shadow-sm">🤝</div>
                    <h3 class="text-2xl font-bold mb-4 text-indigo-950">एकता (Unity)</h3>
                    <p class="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">नोंदणीकृत पथकांना असोसिएशनमार्फत आर्थिक आणि कायदेशीर मदत दिली जाते.</p>
                </div>
                <div class="premium-card p-8 sm:p-10">
                    <div class="w-16 h-16 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mb-8 text-3xl shadow-sm">🏆</div>
                    <h3 class="text-2xl font-bold mb-4 text-indigo-950">सन्मान (Honor)</h3>
                    <p class="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">उत्कृष्ट आणि शिस्तबद्ध कामगिरी करणाऱ्या पथकांना राज्यस्तरावर सन्मानित केले जाते.</p>
                </div>
            </div>

           
        `,
        register: () => `
            <div class="max-w-4xl mx-auto flex flex-col md:flex-row premium-card overflow-hidden" style="animation: fadeIn 0.5s ease-out;">
                <div class="md:w-1/3 bg-indigo-950 p-10 text-white">
                    <h3 class="text-2xl font-bold mb-4">Registration</h3>
                    <p class="text-indigo-300 text-sm mb-8">तुमच्या पथकाची नोंदणी करून अधिकृत सदस्य व्हा.</p>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-center space-x-2"><span>✅</span> <span>विमा फायदे (Insurance)</span></li>
                        <li class="flex items-center space-x-2"><span>✅</span> <span>अधिकृत प्रमाणपत्र (Certification)</span></li>
                    </ul>
                </div>
                <div class="md:w-2/3 p-10 bg-white">
                    <form onsubmit="event.preventDefault(); alert('नोंदणी प्रक्रिया सुरू करण्यासाठी लवकरच संपर्क साधला जाईल.');" class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-2">पथकाचे नाव (Pathak Name)</label>
                            <input type="text" class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-500" required>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase mb-2">संपर्क क्रमांक (Contact Number)</label>
                            <input type="tel" class="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-500" required>
                        </div>
                        <button class="btn-premium w-full text-white py-4 rounded-xl font-bold transition-all">नोंदणी करा</button>
                    </form>
                </div>
            </div>
        `,
        events: () => `
            <div class="space-y-8" style="animation: fadeIn 0.5s ease-out;">
                <h2 class="text-3xl sm:text-4xl font-black text-indigo-950">येणारे <span class="orange-gradient-text">कार्यक्रम</span></h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="premium-card p-8">
                        <div class="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-lg text-sm font-bold inline-block mb-4">१५ ऑगस्ट २०२५</div>
                        <h3 class="text-2xl font-bold mb-2">सुरक्षा कार्यशाळा (Safety Workshop)</h3>
                        <p class="text-gray-500">मंडळाच्या संघप्रमुखांसाठी अनिवार्य सुरक्षा मार्गदर्शन शिबिर.</p>
                    </div>
                    <div class="premium-card p-8">
                        <div class="bg-orange-50 text-orange-600 px-4 py-1 rounded-lg text-sm font-bold inline-block mb-4">२८ ऑगस्ट २०२५</div>
                        <h3 class="text-2xl font-bold mb-2">भव्य दहीहंडी स्पर्धा (Grand Finale)</h3>
                        <p class="text-gray-500">राज्यस्तरीय दहीहंडी स्पर्धा - ठाणे केंद्र.</p>
                    </div>
                </div>
            </div>
        `
    };

    const navigate = (page) => {
        contentDiv.style.opacity = '0';
        setTimeout(() => {
            contentDiv.innerHTML = pages[page]();
            contentDiv.style.opacity = '1';
            
            navButtons.forEach(btn => {
                if(btn.dataset.page === page) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    window.navigate = navigate;
    navButtons.forEach(btn => btn.onclick = () => navigate(btn.dataset.page));
    navigate('home');
});