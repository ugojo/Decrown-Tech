var slideIndexs , i  
 slideIndexs = 0 ;
 myAutoSlide();

function myAutoSlide() {
 var  autoSlideContainer , autoSlide, autodots;
 autoSlideContainer = document.getElementById("autoSlideContainer");
 autoSlide = document.getElementsByClassName("autoSlide");

 for ( i = 0; i < autoSlide.length; i++) {
  autoSlide[i].style.display = "none";
 }

 autodots = document.getElementsByClassName("autodot");
 for ( i = 0; i < autodots.length; i++) {
   
  autodots[i].className = autodots[i].className.replace(" activeslide" , "");
   
 }
  slideIndexs++;
 if (slideIndexs > autoSlide.length ) {
  slideIndexs = 1;
}
 autoSlide[slideIndexs - 1].style.display = "block";
 autodots[slideIndexs - 1].className +=  " activeslide";
 setTimeout( myAutoSlide, 3000);
}