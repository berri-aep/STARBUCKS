const header = document.querySelector(".joinBanner");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
