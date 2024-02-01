const elemenAnda = document.getElementById('elemenAnda');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          elemenAnda.classList.add('tampil');
        } else {
          elemenAnda.classList.remove('tampil');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(elemenAnda);