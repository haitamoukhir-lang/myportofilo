// ===== menu toggle for small screens =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
menuToggle?.addEventListener('click', () => {
  navbar.classList.toggle('open');
  menuToggle.querySelector('i').classList.toggle('fa-times');
});

// ===== theme toggle (kept for user) =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('theme-dark');
  // swap icon
  const i = themeToggle.querySelector('i');
  i.classList.toggle('fa-moon');
  i.classList.toggle('fa-sun');
});

// ===== typed.js for subtitle =====
if (window.Typed) {
  new Typed('.typed-target', {
    strings: ['Microélectronique', 'Radiofréquence', 'Systèmes embarqués', 'Télécommunications'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
  });
}

// ===== scroll reveal (subtle) =====
if (window.ScrollReveal) {
  ScrollReveal().reveal('.home-left', { origin: 'left', distance: '60px', duration: 900, delay: 150 });
  ScrollReveal().reveal('.home-right', { origin: 'right', distance: '60px', duration: 900, delay: 200 });
  ScrollReveal().reveal('.card, .project, .skill', { origin: 'bottom', distance: '20px', duration: 800, interval: 80 });
}

// ===== contact form (demo) =====
const contactForm = document.getElementById('contact-form') || document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name')?.value || '';
    alert(`Merci ${name} — votre message a bien été reçu. Je vous répondrai dès que possible.`);
    contactForm.reset();
  });
}

// ===== smooth active nav on scroll =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  const scrollPos = window.scrollY + 200;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll();
