const hello = (nama) => { 
 console.log(`halo ${nama}`); 
}; 
const goodBye = (nama) => { 
 console.log(`Goodbye ${nama}`); 
}; 
export { hello, goodBye };



const menu = document.getElementById('menu-label2');
const sidebar = document.getElementsByClassName('navbar2')[0];

menu.addEventListener('click', function() {
  sidebar.classList.toggle('visi');
  console.log('ok');
})