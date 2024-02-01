const targetElemens = document.getElementById('target2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetElemens.style.opacity = '1';
      targetElemens.style.transform = 'translateY(0)';
    } else {
      targetElemens.style.opacity = '0';
      targetElemens.style.transform = 'translateY(-200px)';
    }
  });
}, { threshold: 0.3 });

observer.observe(targetElemens);