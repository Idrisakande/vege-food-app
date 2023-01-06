const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);




// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const menuMenu = document.querySelector('#menu-page');
  const contactMenu = document.querySelector('#contact-page');
  const scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1165) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1602) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.add('highlight');
    menuMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }else if (window.innerWidth > 960 && scrollPos < 2143) {
    servicesMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    menuMenu.classList.add('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }else if (window.innerWidth > 960 && scrollPos < 2424) {
    servicesMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    menuMenu.classList.remove('highlight');
    contactMenu.classList.add('highlight');
    return;
  }
  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);




// scroll-to-top 
// Get the element
const scrollToTop = document.querySelector(".scroll-to-top");

// On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
scrollToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => window.scrollY > 500 ? scrollToTop.style.opacity = 1 :scrollToTop.style.opacity = 0

// var btt = document.getElementById( "scroll-to-top" ),
//     body = document.body,
//     docElem = document.documentElement,
//     offset = 100,
//     scrollPos = window.scrollY, docHeight;

//     // Calculate the document height
//     docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
//     if ( docHeight != 'undefined' ){
//       offset = docHeight / 4;
//     }
//     // Add scroll event listener
//     window.addEventListener("scroll", function(event){
//       scrollPos = body.scrollTop || docElem.scrollTop;

//       btt.className = (scrollPos > offset) ? "visible" : "";
//     });

// --========== SCROLL REVEAL ANIMATION ==========

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(`.home_data, .home_img,
           .about_data, .about_img, 
           .services_content, .menu_content, 
           .contact_data, .contact_button, 
           .footer_content`, {
    interval: 200
})

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }



// window.addEventListener('scroll', scrollActive)

// function scrollHeader(){
//   const nav = document.getElementById('header')
//   // when the scroll is grater than the viewport 200 height, add the scrolll-header class to the nav tag 
//   if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }

// window.addEventListener('scroll', scrollHeader)