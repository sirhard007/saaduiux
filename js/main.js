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
/*============ Mixitup ==============*/
const mixer = mixitup('.project__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});
/*============ Mixitup ==============*/
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

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

/*============ ACCORDION SKILLS ==============*/
/*const skillsContent = document.getElementsByClassName('.skills__content');
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})*/

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
ScrollReveal().reveal('.home-title1, .about-button, .subtitle, .testimonial-sub, .contact-sub', { delay: 300, origin:'top' });
ScrollReveal().reveal('.btn, .service, .home, .home-image, .about .about-border, .contact, .home-description', { delay: 400, origin:'bottom' });
ScrollReveal().reveal('.service-title, .home-content, .about-heading, .testimonial-title, .contact-title', { delay: 300, origin:'top' });
ScrollReveal().reveal('.home-sci, .project-pictures', { delay: 300, origin:'bottom'});
ScrollReveal().reveal('.about-data, .testimonial, .contact-information', { delay: 300, origin:'top'});
ScrollReveal().reveal('.service-container', { delay: 300, origin:'bottom' });
ScrollReveal().reveal('.pro, .project1', { delay: 400, origin:'top'});
ScrollReveal().reveal('.portfolio__nav, .project, .portfolio__content, .project-headings', { delay: 400, origin:'bottom'});
ScrollReveal().reveal('.video', { delay: 300, origin:'top'});


/*============ CONTACT FORM ==============*/
/*const form = document.querySelector("form");
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.email.com",
        Username : "saadadam009@gmail.com",
        Password : "98F8EA0A08399CAB041416C7E13310126A66",
        To : 'saadadam009@gmail.com',
        From : "saadadam009@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail()
});*/