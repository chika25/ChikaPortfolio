
// Get modal elements
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

// Add click event for each gallery image
document.querySelectorAll(".gallery img").forEach(img => {
img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalDesc.textContent = img.getAttribute("data-description");
});
});

// Close modal
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

// Close if clicking outside content
window.addEventListener("click", e => {
if (e.target === modal) {
    modal.style.display = "none";
}
});