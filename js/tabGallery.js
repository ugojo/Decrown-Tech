
function openModal() {
    var myModal = document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    var closeModal = document.getElementById("myModal").style.display = "none";
}
 var slide = 1;
  modalSlide(slide) 
     

function modalCon(s) {
    modalSlide(slide += s);
}
function currentSlide(s) {
    modalSlide(slide = s); 
}
function  modalSlide(s) {
    var mySlides,i , dots , caption;
    caption = document.getElementsByClassName("myCaption");
    mySlides = document.getElementsByClassName("mySlide");
    for (i = 0; i < mySlides.length; i++) {
       mySlides[i].style.display = "none";
    } 
    dots = document.getElementsByClassName("modaldot");
      for ( i = 0; i < dots.length; i++) {
           
        dots[i].className = dots[i].className.replace("activeModal", " ");      
    }
    if ( s > mySlides.length) {
        slide = 1;
    }
    if (s < 1) {
        slide = mySlides.length;
    }
    mySlides[slide - 1].style.display = "block";
    dots[slide - 1].className += " activeModal";
    caption = dots[slide -1].innerHTML = dots.alt ;
}