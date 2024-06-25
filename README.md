# SPIDER WEB

## Descripción

**SPIDER WEB** is a web project inspired by the iconic character Spider-Man. This website provides information, images and multimedia content related to Spider-Man, offering an interactive and visually appealing experience for fans of the character, in my view.

Puedes visitar el sitio web en el siguiente enlace: [SPIDER WEB](https://suarezhd.github.io/)

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
SPIDER WEB
│
├── config
│   └── config.json
│
├── public
│   ├── assets
│   │   ├── fonts
│   │   │   └── marvel
│   │   └── images
│   │       └── gallery
│   ├── js
│   │   └── functions.js
│   └── styles
│       ├── fonts.css
│       ├── generics.css
│       ├── home.css
│       ├── reset.css
│       ├── style.css
│       └── variables.css
│
├── .vscode
│   └── settings.json
│
├── index.html
└── README.md
```

## Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías:

- **HTML**: Estructura y contenido del sitio web.
- **CSS**: Estilización y diseño del sitio web, incluyendo el uso de preprocesadores CSS.
  - **fonts.css**: Definición de fuentes personalizadas.
  - **generics.css**: Estilos genéricos utilizados en el sitio web.
  - **home.css**: Estilos específicos para la página de inicio.
  - **reset.css**: Reinicio de estilos por defecto para asegurar la consistencia entre navegadores.
  - **style.css**: Estilos principales del sitio web.
  - **variables.css**: Definición de variables CSS para colores y otros estilos reutilizables.
- **JavaScript**: Funcionalidades interactivas del sitio web.
  - **functions.js**: Archivo de funciones JavaScript utilizadas en el sitio web.
- **Imágenes y Fuentes**: Recursos multimedia utilizados en el sitio web.
  - **assets/img**: Carpeta que contiene imágenes utilizadas en el sitio web.
  - **assets/font**: Carpeta que contiene fuentes personalizadas utilizadas en el sitio web.

## Librerías Utilizadas

El proyecto hace uso de las siguientes librerías para mejorar la funcionalidad y la experiencia del usuario:

- **[jQuery](https://jquery.com/)**: Librería JavaScript rápida, pequeña y rica en funciones que simplifica el manejo de eventos, la animación y las interacciones AJAX.
- **[Swiper](https://swiperjs.com/)**: Swiper is the most modern free and open source mobile touch slider with hardware accelerated transitions and amazing native behavior.
- **[Font Awesome](https://fontawesome.com/)**: Librería de iconos que proporciona iconos vectoriales y logotipos sociales para el uso en el sitio web.


Claro, aquí está la sección "Funcionalidades Destacadas" con las funciones JavaScript añadidas para que puedas incluirla en tu README.md:

# Funcionalidades Destacadas

El proyecto incluye varias funcionalidades interactivas y dinámicas. Aquí se describen algunas de las funciones más destacadas:

## Funciones JavaScript

### Popup de Video

```javascript
// Selecciona el enlace dentro de un elemento de lista y muestra el video en una ventana emergente (popup)
document.querySelectorAll('.show-more a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const videoUrl = event.target.href;
        showPopup(videoUrl);
    });
});

function showPopup(url) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
    document.body.appendChild(popup);
    popup.addEventListener('click', () => {
        document.body.removeChild(popup);
    });
} 

```

### Menú de Navegación Desplegable

```javascript
// Muestra y oculta el menú de navegación al hacer clic en el icono de hamburguesa
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cierra el menú cuando se hace clic en un enlace del menú
document.querySelectorAll('#nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

```

### Scroll para Cambiar el Estilo del Header

```javascript

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

```

### Popup para Videos desde Labels

```javascript

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

```

### Reveal Animations

```javascript

function reveal() {
    var windowHeight = jQuery(window).height();
    var elementVisible = 150;
    var elementTop;
    var positionYscroll = window.pageYOffset;
    var position;

    jQuery(".reveal").each(function() {
        elementTop = jQuery(this).offset().top;
        positionYscroll = window.pageYOffset;
        position = positionYscroll + windowHeight - elementVisible;
        if (elementTop < position) {
            jQuery(this).addClass("active");
        } else {
            jQuery(this).removeClass("active");
        }
    });
}
jQuery(window).scroll(reveal);
setTimeout(reveal, 100);

```

### Swiper Initialization

```javascript

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: "cards",
    loopAddBlankSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

```

## Cómo Contribuir

Si deseas contribuir al desarrollo de SPIDER WEB, sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Clona tu fork a tu máquina local.
3. Crea una nueva rama para tu funcionalidad o corrección.
4. Realiza tus cambios y realiza commit de los mismos.
5. Envía un pull request con una descripción detallada de tus cambios.