// window.onscroll = function () {
//   myFunction();
// };

// const navbar = document.getElementById("navbarJs");
// const sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
window.addEventListener("scroll", navToggel);
const navigationBar = document.querySelector(".bottom_header");
function navToggel() {
  if (window.scrollY > 170) {
    navigationBar.classList.add("sticky");
  } else {
    navigationBar.classList.remove("sticky");
  }
}
