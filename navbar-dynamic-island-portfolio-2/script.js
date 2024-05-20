
// sticky header 
window.addEventListener('scroll', function() {

const header = document.querySelector('header');
const atBottom = window.innerHeight + window.scrollY + 30 >= document.body.offsetHeight;

header.classList.toggle('sticky', window.scrollY > 20)

if (atBottom) {
  header.classList.add('header-bottom');
} else {
  header.classList.remove('header-bottom')
}
});

// scroll section active 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

let manuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

manuIcon.onclick = () => {
  manuIcon.classList.toggle('bx-x-circle');
  navbar.classList.toggle('active');
}


// swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scroll reveal 
ScrollReveal({ 
  reset: true,
  distance: '0rem',
  duration: 1000,
  delay: 600
});

ScrollReveal().reveal('.home-content, .heading, .logo', { origin: 'right' });
ScrollReveal().reveal('.portfolio-box, .contact form, .home-content h1',  {origin: 'left'});
ScrollReveal().reveal('.home-content h1, .social-media', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .about-img', { origin: 'right'});
