
//======Mobile navbar functionality===

function navToggle(){
  const navbar =  document.querySelector("[data-navbar]");
  const navToggler = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  const navLinks = document.querySelectorAll("[data-navbar-link]");

  const navOpen = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  navToggler.forEach((toggler) => {
    toggler.addEventListener("click" , navOpen);
  })

  const navClose = () => {
    navbar.classList.remove("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click" , navClose);
  })
}

navToggle();

