document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('app-content');
    const navButtons = document.querySelectorAll('.nav-link-premium');

    // पेज कंटेंट फंक्शन्स - आता सर्व पेजेस fetch वापरून लोड होतील
    const pages = {
        // होम पेज बाहेरील फाईलमधून
        home: async () => {
            try {
                const response = await fetch('pages/home-content.html');
                if (!response.ok) throw new Error('Home file not found');
                return await response.text();
            } catch (err) {
                return `<div class="py-20 text-center text-red-500">होम पेज लोड करताना त्रुटी आली.</div>`;
            }
        },

        // विमा पेज (आधीप्रमाणेच)
        insurance: async () => {
            try {
                const response = await fetch('pages/insurance-content.html');
                if (!response.ok) throw new Error('Insurance file not found');
                return await response.text();
            } catch (err) {
                console.error(err);
                return `
                    <div class="py-20 text-center text-red-500 fade-in">
                        <p class="text-xl font-bold">त्रुटी: विमा माहिती लोड करता आली नाही.</p>
                        <p class="text-sm">कृपया 'pages/insurance-content.html' फाईल पाथ तपासा.</p>
                    </div>
                `;
            }
        },

        // नोंदणी पेज बाहेरील फाईलमधून
        register: async () => {
            try {
                const response = await fetch('pages/register-content.html');
                if (!response.ok) throw new Error('Register file not found');
                return await response.text();
            } catch (err) {
                return `<div class="py-20 text-center text-red-500">नोंदणी फॉर्म लोड करता आला नाही.</div>`;
            }
        },

        // स्पर्धा पेज बाहेरील फाईलमधून
        competitions: async () => {
            try {
                const response = await fetch('pages/competitions-content.html');
                if (!response.ok) throw new Error('Competitions file not found');
                return await response.text();
            } catch (err) {
                return `<div class="py-20 text-center text-red-500">स्पर्धा माहिती लोड करता आली नाही.</div>`;
            }
        },

        // यशोगाथा पेज बाहेरील फाईलमधून
        achievements: async () => {
            try {
                const response = await fetch('pages/achievements-content.html');
                if (!response.ok) throw new Error('Achievements file not found');
                return await response.text();
            } catch (err) {
                return `<div class="py-20 text-center text-red-500">यशोगाथा लोड करता आली नाही.</div>`;
            }
        }
    };

    // नेव्हिगेशन फंक्शन (Async)
    const navigate = async (page) => {
        contentDiv.style.opacity = '0';
        
        // ॲक्टिव्ह टॅब मार्क करणे
        navButtons.forEach(btn => {
            if(btn.dataset.page === page) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // पेज फंक्शन कॉल करणे
        let content = 'Page not found';
        if (typeof pages[page] === 'function') {
            content = await pages[page]();
        }

        setTimeout(() => {
            contentDiv.innerHTML = content;
            contentDiv.style.opacity = '1';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    window.navigate = navigate;
    navButtons.forEach(btn => btn.onclick = () => navigate(btn.dataset.page));
    
    // सुरुवातीला होम पेज लोड करणे
    navigate('home');
});

const LANG = {
    login: 'प्रवेश करा',
    logout: 'बाहेर पडा',
    submit: 'सबमिट करा'
};