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


// Contact Form E-mail Send Verification

let displaymsg=document.getElementById('display-msg');
let errmsg=document.getElementById('err-msg');

function SendEmail(event){

  event.preventDefault();

  let name = document.getElementById("name").value;
  let mail = document.getElementById("email").value;
  let subject = document.getElementById("Subject").value;
  let message = document.getElementById("message").value;
  
  if (!name || !mail || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }


  let proms={
    from_subject:subject,
    from_name:name,
    from_message:message,
    from_email:mail
  };

  emailjs.send("service_0va32pi","template_agcr2xr",proms).then(function(response) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("Subject").value = "";
      document.getElementById("message").value = "";

      // alert(response);
      displaymsg.textContent="Message Sent Succesfullly";
      errmsg.textContent="";
      console.log(response);
      // document.getElementById("submit-form").reset();
    }).catch((error)=>{
      console.error("Error sending email:", error);
      // alert("Failed to send email. Please check your connection or try again later.");
      displaymsg.textContent="";
      errmsg.textContent="Something went wrong Please try again Later!";
      // alert(error);
    });
}
//AE1C39737F74B87492CDEC7124CE8677A38B