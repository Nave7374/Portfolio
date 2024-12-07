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
      typeSpeed: 100,        // Typing speed
      backSpeed: 60,        // Backspacing speed
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
   offset: '90%',
   handler: function(direction) {
     let progress = item.querySelectorAll('.progress .progress-bar');
     progress.forEach(el => {
       el.style.width = el.getAttribute('aria-valuenow') + '%';
     });
   }
 });
});

emailjs.init("mSH3ZqAm7O_ltQmAP");

function SendEmail(e){
  // e.preventDefault();
  let proms={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("Subject").value,
    message : document.getElementById("message").value
  }

  emailjs.send("service_ea05fk3","template_agcr2xr",proms).then(()=> {
    alert("Send Email")
    // document.getElementById("submit-form").reset();
  }).catch((error)=>{
    console.error("Error sending email:", error);
    alert("Failed to send email. Please check your connection or try again later.");
    });
}
//AE1C39737F74B87492CDEC7124CE8677A38B