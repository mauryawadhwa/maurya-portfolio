// Theme Toggler Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference, otherwise check OS preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
} else if (!prefersDark) {
  htmlElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Mobile Navigation Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu() {
  const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
  mobileNav.classList.toggle('is-open');
  
  if (!isExpanded) {
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  } else {
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

mobileMenuToggle.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('is-open')) {
      toggleMenu();
    }
  });
});

// Contact Form Submission (Mock)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    
    // Simple visual feedback
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      contactForm.reset();
      formStatus.textContent = 'Message sent successfully! (Mock)';
      formStatus.className = 'form-status success';
      
      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    }, 1500);
  });
}
