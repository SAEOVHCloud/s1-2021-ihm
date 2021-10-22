const title = document.querySelector(".title");
const paragraph = document.querySelector(".description");
const btn = document.querySelector(".first-btn");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 175) {
    title.style.opacity = "0%";
  } else {
    title.style.opacity = "100%";
  }
  if (window.scrollY > 312) {
    paragraph.style.opacity = "0%";
  } else {
    paragraph.style.opacity = "100%";
  }
  if (window.scrollY > 457) {
    btn.style.opacity = "0%";
  } else {
    btn.style.opacity = "100%";
  }
});
