
/* Slides javascript slide */
var slideIndex , i  
 slideIndex = 1 ;
 mySlide(slideIndex);

function slideCon(n) {
  mySlide(slideIndex += n);
}
function currentSlide(n) {
   mySlide(slideIndex = n)
}

function mySlide(m) {
 var  slideContainer , slideContents,dots;
 slideContainer = document.getElementById("slideContainer");
 slideContents = document.getElementsByClassName("slideContent");

 for ( i = 0; i < slideContents.length; i++) {
  slideContents[i].style.display = "none";
 }
 if (m > slideContents.length ) {
    slideIndex = 1;
 }
 if ( m < 1) {
    slideIndex = slideContents.length;
 }
 dots = document.getElementsByClassName("dot");
 for ( i = 0; i < dots.length; i++) {
   
  dots[i].className = dots[i].className.replace("active" , "");
   
 }
 slideContents[slideIndex - 1].style.display = "block";
 dots[slideIndex -1].className +=  " active";
}
