function showMenu(el) {
  s = el.children[1];
  s.style.visibility = "visible";
  s.style.opacity = "1";
  s.addEventListener("mouseleave", () => {
    s.style.visibility = "hidden";
    s.style.opacity = "0";
  });
}
navBar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    navBar.style.position = "sticky"
    navBar.style.backgroundImage = "var(--background-gradient)";
})

console.log(window.scrollBy(0, -window.innerHeight));