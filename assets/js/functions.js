const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const links = document.querySelectorAll(".nav-list li a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});


// Function Scroll

const elemento = document.querySelector('#header');
const aElements = document.getElementsByTagName('a');

function manejarScroll() {
  if (window.scrollY >= 100) {
    elemento.classList.add('scrolled');
    for (let a of aElements) {
      a.classList.add('scrolled');
    }
  } else {
    elemento.classList.remove('scrolled');
    for (let a of aElements) {
      a.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', manejarScroll);

// 

function showPopup(videoUrl) {
  var popup = document.getElementById('popupContainer');
  var popupVideo = document.getElementById('popupVideo');
  
  popupVideo.src = videoUrl; 
  
  popup.style.display = 'block'; 
}

function closePopup() {
  var popup = document.getElementById('popupContainer');
  var popupVideo = document.getElementById('popupVideo');
  
  popupVideo.src = '';
  
  popup.style.display = 'none';
}


// 

