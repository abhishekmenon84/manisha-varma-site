// ============================================
// MANISHA VARMA CAMPAIGN SITE – JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- STICKY NAV ----
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ---- HAMBURGER ----
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (nav.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // ---- CONTACT FORM ----
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submit-btn');
      const successDiv = document.getElementById('form-success');
      const btnText = btn.querySelector('.btn-text');
      const originalText = btnText.textContent;

      // Validate required fields
      const name = form.querySelector('#voter-name').value.trim();
      const phone = form.querySelector('#voter-phone').value.trim();
      const concerns = form.querySelector('#voter-concerns').value.trim();

      if (!name || !phone || !concerns) {
        showValidationError(form, !name ? '#voter-name' : !phone ? '#voter-phone' : '#voter-concerns');
        return;
      }

      // Loading state
      btn.disabled = true;
      btnText.textContent = 'Sending...';
      btn.style.opacity = '0.75';

      try {
        // Try Formspree first; fall back to mailto
        const formData = new FormData(form);
        const action = form.getAttribute('action');

        if (action && action.includes('formspree.io') && !action.includes('{{ site.email }}')) {
          const resp = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          if (resp.ok) {
            showSuccess(form, successDiv);
          } else {
            fallbackMailto(name, phone, concerns);
            showSuccess(form, successDiv);
          }
        } else {
          // Dev/no-formspree: build mailto
          fallbackMailto(name, phone, concerns);
          showSuccess(form, successDiv);
        }
      } catch (err) {
        // Network error – try mailto
        const name2 = form.querySelector('#voter-name').value.trim();
        const phone2 = form.querySelector('#voter-phone').value.trim();
        const concerns2 = form.querySelector('#voter-concerns').value.trim();
        fallbackMailto(name2, phone2, concerns2);
        showSuccess(form, successDiv);
      }

      btn.disabled = false;
      btnText.textContent = originalText;
      btn.style.opacity = '';
    });
  }

  function showSuccess(form, successDiv) {
    form.querySelectorAll('.form-group, #submit-btn').forEach(el => el.style.display = 'none');
    successDiv.style.display = 'block';
  }

  function fallbackMailto(name, phone, concerns) {
    const subject = encodeURIComponent('Ward 7 Voter Message – ' + name);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nConcerns:\n${concerns}`);
    window.location.href = `mailto:vmanisha86@gmail.com?subject=${subject}&body=${body}`;
  }

  function showValidationError(form, selector) {
    const field = form.querySelector(selector);
    field.style.borderColor = '#D01E2A';
    field.focus();
    field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
  }

  // ---- SCROLL REVEAL ----
  const revealElements = document.querySelectorAll('.issue-card, .org-card, .badge, .about-list li');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

});
