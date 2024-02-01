document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-element");

  function checkVisibility() {
    elements.forEach(function (element) {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.top <= window.innerHeight * 0.7 && bounding.bottom >= window.innerHeight * 0.3;

      if (isVisible) {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // Initial check on page load
  checkVisibility();
});

/*.elemenl {
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.5s, transform 0.5s;
}*/

/*const elements = document.querySelectorAll('.elemenl');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'scale(99%)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'scale(0.0)';
    }
  });
}, { threshold: 0.3 });

elements.forEach(element => {
  observer.observe(element);
});*/