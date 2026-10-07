// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a nav link is clicked
  const links = navLinks.querySelectorAll('.nav-link, .btn');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Navbar scroll background effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
