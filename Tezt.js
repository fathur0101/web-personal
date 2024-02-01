// Remove the transition class
const square = document.querySelector('.square2');
square.classList.remove('square-transition2');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition2');
      return;
    }

    square.classList.remove('square-transition2');
  });
});

observer.observe(document.querySelector('.square-wrapper2'));