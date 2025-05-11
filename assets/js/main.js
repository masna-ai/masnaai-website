document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Form validation for contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let valid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const messageInput = document.getElementById('message');
      
      // Reset previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
      
      // Validate name
      if (!nameInput.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required';
        valid = false;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Valid email is required';
        valid = false;
      }
      
      // Validate message
      if (!messageInput.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required';
        valid = false;
      }
      
      if (valid) {
        // In a real application, you would submit the form data to a server here
        // For now, just show a success message
        contactForm.reset();
        document.getElementById('form-success').classList.remove('hidden');
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          document.getElementById('form-success').classList.add('hidden');
        }, 3000);
      }
    });
  }

  // Add scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  }
  
  // Initial check on load
  window.addEventListener('load', checkScroll);
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
});
