const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");


toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});



navWrapper.addEventListener("click", e => {
    navWrapper.classList.toggle("show");
    toggleButton.classList.toggle("close");
  
});