function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
    }
  }
  tick();
}
//Slideshow
var slide_Index = 1;
showSlides(slide_Index);

function next_Slide(n) {
  showSlides(slideIndex += n);
}

function current_Slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("	active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//