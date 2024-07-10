/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
  // when you click on each nav__link, it removes the show menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/* Add Shadow Header */
const shadowHeader = ()=>{
  const header = document.getElementById('header')
  // add a class if the bottom offset is > than 50 of the viewpoint
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* Show Scroll Up */ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewpoint height, add the show-scroll class to the scrollUp element
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll Section Active Links */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/* Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true, // Animations repeat
})

sr.reveal('.home__data, .footer')
sr.reveal('.home__defense', {delay: 500, distance: '100px', origin:'bottom'})
sr.reveal('.home__cybersecurity', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.home__response', {delay: 1600, interval: 100})
sr.reveal('.about__img, .deployment__img, .contact__image', {origin:'left'})
sr.reveal('.about__data, .deployment__data, .contact__data', {origin:'right'})
sr.reveal('.popular__card', {interval: 100})
