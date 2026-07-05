// =========================================================
// NATCO CROP HEALTH SCIENCES — SCRIPT
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Product catalog: Formulations / Technicals tabs ---- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Hook point: filter product-grid by btn.dataset.tab ('formulations' | 'technicals')
    });
  });

  /* ---- Product catalog: category filter pills ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Hook point: filter product-grid by btn.dataset.filter
    });
  });

  /* ---- Scroll reveal animations ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- Contact / enquiry form handling (placeholder) ---- */
  window.handleSubmit = function (event) {
    event.preventDefault();
    alert('Thank you! Your enquiry has been received.');
    event.target.reset();
  };

});