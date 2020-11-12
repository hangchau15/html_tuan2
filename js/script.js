function myFunction() {
  var x = document.getElementById("menu-responsive");
  if (x.className === "menu-responsive") {
    x.className += " responsive";
  } else {
    x.className = "menu-responsive";
  }
}

//slideshow cach 1
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//cach 2
// var $current, $next, $slides = $(".slideshow-container .slide");

// function doSlideShow () {
//   $current = $slides.filter(".slide.current");
//   $next = $current.next(".slide");
//   if ($next.length < 1) {
//     $next = $slides.first();
//   }
//   $slides.removeClass("previous");
//   $current.addClass("previous").removeClass("current");
//   $next.addClass("current");
//   window.setTimeout(doSlideShow, 5000);
// }
// window.setTimeout(doSlideShow, 5000);

//cach 3
// var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous slide controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }