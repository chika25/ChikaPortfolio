const fName = document.getElementById('fName');
const lName = document.getElementById('lName');

// When page loads, set language from localStorage or default to EN
const savedLang = localStorage.getItem('lang') || 'EN';
lg.textContent = savedLang;
applyLanguage(savedLang);


// Apply translations and styles
function applyLanguage(lang) {
    document.body.classList.remove("lang-EN", "lang-JP");
    document.body.classList.add(`lang-${lang}`);

    Object.keys(translations[lang]).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.innerHTML = translations[lang][key];
    });
}

// When button is clicked
languageBtn.addEventListener('click', () => {
    const current = lg.textContent.trim();
    const newLang = current === 'JP' ? 'EN' : 'JP';
    lg.textContent = newLang;

    localStorage.setItem('lang', newLang); 
    applyLanguage(newLang);
});