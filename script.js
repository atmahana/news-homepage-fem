const navLink = document.querySelector(".navbar__links");
const navToggle = document.querySelector(".menu-toggle");
const mainContent = document.querySelector("#main");

navToggle.addEventListener("click", () => {
  const visibility = navLink.getAttribute("data-visible");
  if (visibility === "false") {
    navLink.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    mainContent.addEventListener('wheel', preventScrolling);
    mainContent.addEventListener('touchmove', preventScrolling);
    navLink.addEventListener('wheel', preventScrolling);
    navLink.addEventListener('touchmove', preventScrolling);
  } else {
    navLink.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    mainContent.removeEventListener('wheel', preventScrolling);
    mainContent.removeEventListener('touchmove', preventScrolling);
    navLink.removeEventListener('wheel', preventScrolling);
    navLink.removeEventListener('touchmove', preventScrolling);
  }
});

function preventScrolling(e){
    e.preventDefault();
}