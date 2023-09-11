// elements selection
const formElm = document.querySelector("#cover");
const supportBtn = document.querySelector("#support");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");

// open form in big screen
supportBtn.addEventListener("click", () => {
  formElm.style.display = "block";
  overlay.style.display = "block";

  // if (formElm.style.display === "block") {
  //   let body = document.querySelector("body");
  //   body.style.overflow = "hidden";
  // }
});

// form closing function
function closeform() {
  formElm.style.display = "none";
  overlay.style.display = "none";
}

// close the query form
closeBtn.addEventListener("click", closeform);

let mobileNav = document.querySelector(".nav-mobile");
let openMobiles = document.querySelector("#navbar .contact");

// open nav-menu in small screen
mobileNav.addEventListener("click", () => {
  openMobiles.classList.toggle("open-mobile");
});
