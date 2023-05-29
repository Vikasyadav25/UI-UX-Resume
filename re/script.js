var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 +'%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +'%';
        },3);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
    animationDone = false;
    initialiseBars();
    }
}

//  Js for pointer 
const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.forEach((el) => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      });
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      });
    });
  });
});







let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

