# Project Landing Page
This project is inspired by a personal interest in Software engineering and cybersecurity. The idea originated from the need to create a tool that could simplify the monitoring and analysis of cybersecurity threats in real-time. The development timeline spanned seven days, driven by a passion for improving cybersecurity practices through innovative techniques.This project is a Portfolio Project for Holberton School. You can learn more about Holberton School and their programs <a href="https://www.holbertonschool.com/" target="_blank">here</a>.

## Table of Contents

- [Features](#features)
- [Deployed Application](#deployed-application)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Credits](#credits)
- [Contacts](#contacts)

## Features

- Responsive Design.
- Navigation Menu.
- Header.
- Home Section.
- About Section.
- Animations.

## Deployed Landing Page

Check out the live application [here](https://heshbon.github.io/IgctelViz/).

## Technologies Used

- HTML
- CSS
- JavaScript
- Box Icons (via CDN)
- Google Fonts (Poppins)
- GSAP (GreenSock Animation Platform)
- Responsive Design (Media Queries)
- Backdrop Filter (CSS)
- Placeholder URLs
- Semantic HTML Elements
- Parallax Effect

2. Navigate to the project directory
   + cd igctelviz-platform
4. Open index.html in your browser

## Usage
Navigate through the landing page sections by clicking on the menu links (Home, About, Products, Contact) located in the header. Scroll through each section to explore information about IgctelViz, including its mission in cybersecurity visualization and its developer's profiles. Engage with interactive elements such as the "Get Started" button for further exploration or networking opportunities. The page adapts seamlessly to different screen sizes for a consistent user experience.

## HTML Structure

The HTML file contains the structure of the landing page:
```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Box Icons -->
  <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
  
  
  <!-- CSS -->
  <link rel="stylesheet" href="style.css">

  <title>IgctelViz</title>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <nav class="nav bd-grid">
      <div>
        <a href="#" class="nav__logo">IgctelViz</a>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class='bx bx-menu'></i>
      </div>

      <div class="nav__menu" id="nav-menu">
        <div class="nav__close" id="nav-close">
          <i class='bx bx-x'></i>
        </div>

        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Products</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="main">
    <!-- Home -->
     <section class="home" id="home">
      <div class="home__container bd-gr">
        <div class="home__img">
          <img src="img/VisImg1.jpg" alt="" data-speed="-2" class="move">
          <img src="img/logVizImg2.jpg" alt="" data-speed="2" class="move">
          <img src="img/NetVizImg3.png" alt="" data-speed="2" class="move">
          <img src="img/ThreatVizImg4.jpeg" alt="" data-speed="-2" class="move">
          <img src="img/DigiVizImg5.png" alt="" data-speed="-2" class="move">
          <img src="img/IncidentVizImg6.jpeg" alt="" data-speed="2" class="move">
        </div>

        <div class="home__data">
          <h1 class="home__title">IgctelViz<br> Seeing Beyond The Surface</h1>
          <p class="home__description">Vizualizing cybersecurity for <br> a safer digital World.</p>
          <a href="#" class="home__button">Get Started</a>
        </div>
        
        <!-- About Section -->
    <section class="about" id="about">
      <div class="about__container bd-grid">
        <div class="about__content">
          <h2 class="about__title">About IgctelViz</h2>
          <p class="about__description">
            This project is inspired by a personal interest in Software engineering and cybersecurity. The idea originated from the need to create a tool that could simplify the monitoring and analysis of cybersecurity threats in real-time. The development timeline spanned seven days, driven by a passion for improving cybersecurity practices through innovative techniques.</p>.
            <br><br>
            This project is a Portfolio Project for Holberton School. You can learn more about Holberton School and their programs <a href="https://www.holbertonschool.com/" target="_blank">here</a>.
          </p>
        </div>
      </div>
      </div>

      <!--Profile Links-->
      <div class="profile-links">
        <a href="https://www.linkedin.com/in/hesbon-kipchirchir-a28460245" target="_blank">LinkedIn</a>
        <a href="https://github.com/Heshbon" target="_blank">GitHub</a>
        <a href="https://twitter.com/hesbonkyp" target="_blank">Twitter</a>
        <p><a href="https://github.com/Heshbon" target="_blank">GitHub Repository</a></p>
      </div>
     </section>
  </section>
  </main>
  <!-- GSAP -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

  <!-- main.js -->
  <script src="main.js"></script>
</body>
</html>
```

## CSS Styling

The CSS file contains the styles for the landing page:
```/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
/* Variables CSS */
:root{
  --header-height: 4rem;
  
  /* Colors */
  --first-color: #FCA4A6;
  --first-color-dark: #C1576A;
  --first-color-darken: #A83E51;
  --white-color: #FCF8F8;
  
  /* Font and typography */
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2.5rem;
  --normal-font-size: .938rem;
  
  /* z-index */
  --z-fixed: 100;
}

@media screen and (min-width: 768px){
  :root{
    --big-font-size: 5rem;
    --normal-font-size: 1rem;
  }
}

/* Base */
*,::before,::after{
  box-sizing: border-box;
}

body{
  margin: var(--header-height) 0 0 0;
  padding: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: 500;
}

h1,p,ul{
  margin: 0;
}

ul{
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
  height: auto;
}

/* Layout */
.bd-grid{
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
}

.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-color);
}

/* Nav */
.nav{
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px){
  .nav__menu{
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100%;
    padding: 3.5rem 1.5rem 0;
    background: rgba(255,255,255,.3);
    backdrop-filter: blur(10px);
    transition: .5s;
  }
}

.nav__close{
  position: absolute;
  top: .75rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav__item{
  margin-bottom: 2rem;
}

.nav__close, .nav__link, .nav__logo, .nav__toggle{
  color: var(--white-color);
}

.nav__link:hover{
  color: var(--first-color-dark);
}

.nav__toggle{
  font-size: 1.5rem;
  cursor: pointer;
}

/* show menu*/
.show{
  right: 0;
}

/* Home */
.home{
  background-color: var(--first-color);
  overflow: hidden;
}

.home__container{
  height: calc(100vh - var(--header-height));
  grid-template-rows: repeat(2, max-content);
  row-gap: 1.5rem;
}

.home__img{
  position: relative;
  padding-top: 1.5rem;
  justify-self: center;
  width: 302px;
  height: 233px;
}

.home__img img{
  position: absolute;
  top: 0;
  left: 0;
}

.home__data{
  color: var(--white-color);
}

.home__title{
  font-size: var(--big-font-size);
  line-height: 1.3;
  margin-bottom: 1rem;
}

.home__description{
  margin-bottom: 2.5rem;
}

.home__button{
  display: inline-block;
  background-color: var(--first-color-dark);
  color: var(--white-color);
  padding: 1.125rem 2rem;
  border-radius: .5rem;
}

.home__button:hover{
  background-color: var(--first-color-darken);
}

/* About */
.about{
  background-color: #f3f4f6;
  padding: 2rem 1;
  text-align: center;
  margin-bottom: 2rem;
}

.about__container{
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.about__title{
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.about__description{
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 1rem;
}

.about__note{
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #777;
}

.about__note a{
  color: var(--first-color-dark);
  text-decoration: none;
}

.about__note a:hover{
  text-decoration: underline;
}

/* Profile Links Section */
.profile-links{
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.profile-links a{
  margin-right: 1rem;
  color: #333;
  text-decoration: none;
}

.profile-links a:hover{
  color: #C1576A;
  text-decoration: underline;
}

/* Media Query */
@media screen and (min-width: 768px){
  body{
    margin: 0;
  }
  
  .nav{
    height: calc(var(--header-height) + 1.5rem);
  }

  .nav__toggle, .nav__close{
    display: none;
  }

  .nav__list{
    display: flex;
  }

  .nav__item{
    margin-left: 3rem;
    margin-bottom: 0;
  }

  .home__container{
    height: 100vh;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    row-gap: 0;
    align-items: center;
    justify-content: center;
  }

  .home__img{
    order: 1;
    width: 375px;
    height: 289px;
  }

  .home__img img{
    width: 375px;
  }
}

@media screen and (min-width: 1024px){
  .bd-grid{
    margin-left: auto;
    margin-right: auto;
  }

  .home__container{
    justify-content: initial;
    column-gap: 4.5rem;
  }

  .home__img{
    width: 604px;
    height: 466px;
  }

  .home__img img{
    width: 604px;
  }
}
```
## JavaScript Functionality

The JavaScript file contains the functionality for the landing page:
```/* To show the Y menu */
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

  // show
  toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
  })

  // hidden
  closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
  })

  /* mousemove home img */
  document.addEventListener('mousemove', move)

  function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
      const speed = layer.getAttribute('data-speed')

      const x = (window.innerWidth - e.pageX * speed)/120
      const y = (window.innerHeight - e.pageY * speed)/120

      layer.style.transform = 'translateX(${x}px translateY(${y}px)'
    })
  }

  /* Gsap Animation */
  // Nav
  gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay: 2, y:10})
  gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y:30, stagger: 0.2})

  // Home
  gsap.from('.home__title', {opacity: 0, duration: 1, delay: 1.6, y:30})
  gsap.from('.home__description', {opacity: 0, duration: 1, delay: 1.8, y:30})
  gsap.from('.home__button', {opacity: 0, duration: 1, delay: 2.1, y:30})
  gsap.from('.home__img', {opacity: 0, duration: 1, delay: 1.3, y:30})
```
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

## Contributing

    1. Fork the repository
    2. Create your feature branch
    3. Commit your changes
    4. Push to the branch
    5. Open a pull request

## Credits

- Built by Hesbon Kipchirchir <[Heshbon](https://github.com/Heshbon)>

## Contacts
<u>hesskip@gmail.com</u>



