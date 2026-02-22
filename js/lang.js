const content = {
  mr: {
    siteTitle: "महाराष्ट्र राज्य दहीहंडी गोविंदा असोसिएशन",
    menuHome: "Home",
    menuAbout: "About",
    menuPrograms: "Programs",
    menuMembers: "Members",
    menuDistricts: "Districts",
    heroTitle: "गोविंदा परंपरेचा अभिमान",
    heroDesc: "महाराष्ट्रातील गोविंदा पथकांसाठी अधिकृत राज्यस्तरीय संघटना",
    aboutTitle: "आमच्याबद्दल",
    aboutText: "महाराष्ट्र राज्य दहीहंडी गोविंदा असोसिएशन ही गोविंदा पथकांच्या सुरक्षितता, स्पर्धा आणि हक्कांसाठी कार्यरत आहे.",
    programsTitle: "कार्यक्रम",
    programsText: "आजपर्यंत विविध जिल्ह्यांमध्ये दहीहंडी स्पर्धांचे आयोजन.",
    membersTitle: "कार्यकारिणी",
    membersText: "अध्यक्ष, सचिव, खजिनदार व इतर सदस्यांची माहिती.",
    districtsTitle: "जिल्हा संघटना",
    districtsText: "मुंबई शहर, मुंबई उपनगर व इतर जिल्हा संघटना."
  },
  en: {
    siteTitle: "Maharashtra State Dahi Handi Govinda Association",
    menuHome: "Home",
    menuAbout: "About",
    menuPrograms: "Programs",
    menuMembers: "Members",
    menuDistricts: "Districts",
    heroTitle: "Pride of Govinda Tradition",
    heroDesc: "Official state-level association for Govinda teams of Maharashtra",
    aboutTitle: "About Us",
    aboutText: "The association works for safety, competitions, and rights of Govinda teams.",
    programsTitle: "Programs",
    programsText: "Organized multiple Dahi Handi competitions across districts.",
    membersTitle: "Committee",
    membersText: "President, Secretary, Treasurer and executive members.",
    districtsTitle: "District Associations",
    districtsText: "Mumbai City, Mumbai Suburbs and other districts."
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = content[lang][key];
  });
}
