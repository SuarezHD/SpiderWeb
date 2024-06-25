# SPIDER WEB

## Descripción

**SPIDER WEB** es un proyecto web inspirado en el icónico personaje de Spider-Man. Este sitio web proporciona información, imágenes y contenido multimedia relacionados con Spider-Man, ofreciendo una experiencia interactiva y visualmente atractiva para los fans del personaje, desde mi punto de vista.

Puedes visitar el sitio web en el siguiente enlace: [SPIDER WEB](https://suarezhd.github.io/)

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

SPIDER WEB
│
├── .vscode
│ └── settings.json
│
├── assets
│ ├── font
│ │ ├── marvel.eot
│ │ ├── marvel.svg
│ │ ├── marvel.ttf
│ │ ├── marvel.woff
│ │ └── marvel.woff2
│ └── img
│ ├── arania-icono.ico
│ ├── gallery-1.jpg
│ ├── gallery-2.jpg
│ ├── gallery-3.jpeg
│ ├── gallery-4.jpeg
│ ├── gallery-4.jpg
│ ├── gallery-5.jpg
│ ├── gallery-6.jpg
│ ├── spiderman-616.jpeg
│ ├── spiderpunk.jpeg
│ ├── SpiderWeb.png
│ ├── SpiderWeb.svg
│ ├── spidey-colgando.png
│ ├── tiktokLogo.svg
│ └── xLogo.svg
│
├── js
│ └── functions.js
│
├── styles
│ ├── fonts.css
│ ├── generics.css
│ ├── home.css
│ ├── reset.css
│ ├── style.css
│ └── variables.css
│
├── index.html
└── README.md

markdown
Copiar código

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

### Menú de Navegación Desplegable

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


## Cómo Contribuir

Si deseas contribuir al desarrollo de SPIDER WEB, sigue los siguientes pasos:

Realiza un fork del repositorio.
Clona tu fork a tu máquina local.
Crea una nueva rama para tu funcionalidad o corrección.
Realiza tus cambios y realiza commit de los mismos.
Envía un pull request con una descripción detallada de tus cambios.