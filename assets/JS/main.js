// for navigation purpose
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = 70; // Adjust this value to match the height of your navbar
      
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

  // Scroll to top btn functions
  function ScrolltoTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  window.onscroll=function(){
    const btn=document.getElementById('backtotop');
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100)  btn.classList.add('show');
    else btn.classList.remove('show');
  };
 
  // Initialize Typed.js
  document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.querySelector('.typed');
    const items = typedElement.getAttribute('data-typed-items').split(', ');

    new Typed('.typed', {
      strings: items,       // Items to type
      typeSpeed: 50,        // Typing speed
      backSpeed: 30,        // Backspacing speed
      loop: true            // Loop the animation
    });
  });


// Toggler button hide functions

let Togglerbtn=document.getElementById('navbar-toggler');
let Navmenu=document.getElementById('navbarNav');

const closenavbar = function(){
  if(Navmenu.classList.contains('show')) Navmenu.classList.remove('show');
  else Navmenu.classList.add('show');
};

document.addEventListener('click',function(event) {
  if (Navmenu.classList.contains('show') && !Navmenu.contains(event.target) && event.target !== Togglerbtn) Navmenu.classList.remove('show');
});

let navlink=document.querySelectorAll('.nav-link');
navlink.forEach( link =>{
  link.addEventListener('click',closenavbar)
});

// Animation on scroll function and init

function aosInit() {
 AOS.init({
   duration: 600,
   easing: 'ease-in-out',
   once: true,
   mirror: false
 });
}
window.addEventListener('load', aosInit);

// Animate the skills items on reveal
let skillsAnimation = document.querySelectorAll('.skills-animation');
skillsAnimation.forEach((item) => {
 new Waypoint({
   element: item,
   offset: '80%',
   handler: function(direction) {
     let progress = item.querySelectorAll('.progress .progress-bar');
     progress.forEach(el => {
       el.style.width = el.getAttribute('aria-valuenow') + '%';
     });
   }
 });
});