document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Mobile Menu Toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Add scroll animations using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.reveal-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // FAQ accordion toggles
  const faqToggles = document.querySelectorAll('.faq-toggle');
  if (faqToggles && faqToggles.length) {
    faqToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        // Optionally close others for accordion behavior
        document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach(openBtn => {
          if (openBtn !== btn) {
            openBtn.setAttribute('aria-expanded', 'false');
            const openPanel = openBtn.parentElement.nextElementSibling;
            if (openPanel && openPanel.classList.contains('faq-panel')) {
              openPanel.classList.add('hidden');
            }
          }
        });

        // Toggle current
        btn.setAttribute('aria-expanded', String(!expanded));
        const panel = btn.parentElement.nextElementSibling;
        if (panel && panel.classList.contains('faq-panel')) {
          panel.classList.toggle('hidden');
        }
      });
    });
  }
});
