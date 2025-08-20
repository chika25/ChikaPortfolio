
// Get modal elements
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.querySelector(".close");


let currentKey = null; // keep track of which image is open

// Open modal when image clicked
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        currentKey = img.getAttribute("data-key");
        modalDesc.textContent = translations[savedLang][currentKey] || "";
    });
});

// Close modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    currentKey = null;
});

// Called from translations.js when language changes
function updateModalDescription(lang) {
    if (modal.style.display === "flex" && currentKey) {
        modalDesc.textContent = translations[lang][currentKey] || "";
    }
}
