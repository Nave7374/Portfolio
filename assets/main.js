// for navigation purpose
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetElement = document.querySelector(this.getAttribute('href'));
      const offset = 35; // Adjust this value to match the height of your navbar
      
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