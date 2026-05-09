const menuIcon = document.getElementById("menuIcon");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuIcon.addEventListener("click", () => {
  mobileSidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileSidebar.classList.remove("active");
  overlay.classList.remove("active");
});