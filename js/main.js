/*============ MENU SHOW Y  HIDDEN ==============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW ======*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN ======*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*============ remove menu mobile ==============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*============ MENU SHOW Y  HIDDEN ==============*/
/*========== SERVICES MODAL ========== */
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}    

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*============ TESTIMONIALS ==============*/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        1000:{
            slidesPerView: 2,
        }
    }
  });
/*============ SCROLL SECTIONS ACTIVE LINK ==============*/  
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)   

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*============ MENU SHOW Y  HIDDEN ==============*/
ScrollReveal().reveal('.home-title1, .portfolio-description, .about-button, .subtitle, .testimonial-sub, .contact-sub', { delay: 500, origin:'right' });
ScrollReveal().reveal('.button, .btn, .service, .home, .home-image, .about .about-border, .portfolio-img, .contact', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.pro, .service-title, .home-content, .home-description, .portfolio-title, .about-heading, .testimonial-title, .contact-title', { delay: 600, origin:'left' });
ScrollReveal().reveal('.home-sci', { delay: 500, origin:'bottom'});
ScrollReveal().reveal('.project, .about-data, .testimonial, .contact-information', { delay: 500, origin:'top'});
ScrollReveal().reveal('.service-container .service-content, .testimonial-content', { delay: 700, origin:'bottom', interval: 200 });