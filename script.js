document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".main-list");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  toggleButton.addEventListener("click", function () {
    this.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent scrolling when menu is open
    if (navbarMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking on overlay
  overlay.addEventListener("click", function () {
    toggleButton.classList.remove("active");
    navbarMenu.classList.remove("active");
    this.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close menu when clicking on a link (optional)
  const navLinks = document.querySelectorAll(".navbar-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      toggleButton.classList.remove("active");
      navbarMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
