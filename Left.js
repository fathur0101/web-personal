const elements = document.querySelectorAll('.elemenl');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateX(-100px)';
    }
  });
}, { threshold: 0.3 });

elements.forEach(element => {
  observer.observe(element);
});