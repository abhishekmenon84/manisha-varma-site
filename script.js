// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky nav background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 50 
    ? "rgba(0,0,0,0.9)" 
    : "rgba(0,0,0,0.6)";
});