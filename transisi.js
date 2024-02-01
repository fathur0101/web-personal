const targetElement = document.getElementById('target');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetElement.style.opacity = '1';
      targetElement.style.transform = 'translateX(0)';
    } else {
      targetElement.style.opacity = '0';
      targetElement.style.transform = 'translateX(-100px)';
    }
  });
}, { threshold: 0.3 });

observer.observe(targetElement);