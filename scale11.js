const elements = document.querySelectorAll('.elemenzo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'scale(100%)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'scale(0.0)';
    }
  });
}, { threshold: 0.3 });

elements.forEach(element => {
  observer.observe(element);
});