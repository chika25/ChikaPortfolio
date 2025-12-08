const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const htmlElement = document.documentElement;
const metaDescElement = document.getElementById('meta-desc');

// When page loads, set language from localStorage or default to EN
const savedLang = localStorage.getItem('lang') || 'EN';
lg.textContent = savedLang;
applyLanguage(savedLang);


// Apply translations and styles
function applyLanguage(lang) {
    document.body.classList.remove("lang-EN", "lang-JP");
    document.body.classList.add(`lang-${lang}`);

    if (metaDescElement) {
        metaDescElement.setAttribute(
            'content', 
            translations[lang].metaDescription
        );
    }

    const htmlLangCode = lang === 'EN' ? 'en' : 'ja';
    htmlElement.setAttribute('lang', htmlLangCode);

    Object.keys(translations[lang]).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.innerHTML = translations[lang][key];
    });

}

// When button is clicked
languageBtn.addEventListener('click', () => {
    const current = lg.textContent.trim();
    const newLangText = current === 'JP' ? 'EN' : 'JP';
    lg.textContent = newLangText;

    const newLangCode = newLangText === 'EN' ? 'en' : 'ja';
    htmlElement.setAttribute('lang', newLangCode);

    localStorage.setItem('lang', newLangText); 
    applyLanguage(newLangText);
});