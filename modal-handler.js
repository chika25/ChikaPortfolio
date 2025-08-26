
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

        // get the current language
        const currentLang = localStorage.getItem("lang") || "EN";
        modalDesc.textContent = translations[currentLang][currentKey] || "";
    });
});

// Close modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    currentKey = null;
});


