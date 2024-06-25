# SPIDER WEB

## Description

**SPIDER WEB** is a web project inspired by the iconic character Spider-Man. This website provides information, images and multimedia content related to Spider-Man, offering an interactive and visually appealing experience for fans of the character, in my view.

You can visit the website at the following link: [SPIDER WEB](https://suarezhd.github.io/)

## Project Structure

The project is organized as follows:

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

## Used technology

The project uses the following technologies:

- **HTML**: Structure and content of the website.
- **CSS**: Styling and design of the website, including the use of CSS preprocessors.
  - **fonts.css**: Definition of custom fonts.
  - **generics.css**: Generic styles used on the website.
  - **home.css**: Specific styles for the home page.
  - **reset.css**: Reset default styles to ensure consistency between browsers.
  - **style.css**: Main styles of the website.
  - **variables.css**: Definition of CSS variables for colors and other reusable styles.
- **JavaScript**: Interactive website functionalities.
  - **functions.js**: Archive of JavaScript functions used on the website.
- **Imágenes y Fuentes**: Multimedia resources used on the website.
  - **assets/img**: Folder containing images used on the website.
  - **assets/font**: Folder containing custom fonts used on the website.

## Used Libraries

The project makes use of the following libraries to improve functionality and user experience:

- **[jQuery](https://jquery.com/)**: Fast, small, and feature-rich JavaScript library that simplifies event handling, animation, and AJAX interactions.
- **[Swiper](https://swiperjs.com/)**: Swiper is the most modern free and open source mobile touch slider with hardware accelerated transitions and amazing native behavior.
- **[Font Awesome](https://fontawesome.com/)**: Icon library providing vector icons and social logos for website use.

# Featured Features

The project includes several interactive and dynamic functionalities. Here are some of the notable features:

## JavaScript functions

### Video Popup

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

### Dropdown Navigation Menu

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

### Scroll to Change Header Style

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

### Popup for Videos from Labels

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

## How to Contribute

If you want to contribute to the development of SPIDER WEB, follow the following steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your feature or fix.
4. Make your changes and commit them.
5. Submit a pull request with a detailed description of your changes.