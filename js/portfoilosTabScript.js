
function myTab(tabName,elent,color) {
    
    var tabLinks ,tabcontent ,i ;

      tabcontent = document.getElementsByClassName("tabcontent");
      for ( i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";     
      }
      tabLinks = document.getElementsByClassName("tabLinks");
      for ( i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";     
      }

      document.getElementById(tabName).style.display = "block";
      
      elent.style.backgroundColor = color ;
}
document.getElementById("defultOpen").onclick();

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

/* Auto slide */
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