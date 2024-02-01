import { hello, goodBye } from "./function.js"; 
hello("siti"); 
goodBye("Bro");




const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName('navbar')[0];

menu.addEventListener('click', function() {
  sidebar.classList.toggle('visi');
  console.log('ok');
});

const elemenSelector = '.elemen';
    const elemenList = document.querySelectorAll(elemenSelector);

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          entry.target.classList.add('tampil');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elemenList.forEach(elemen => {
      observer.observe(elemen);
    });