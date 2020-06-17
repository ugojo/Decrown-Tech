function moveTo(newIndex) {
    var animateLeft, slideLeft  ;
    

 if ( $group.is(':animated') || currentIndex === newIndex ) {
     return ;
 }
  buttonArray[currentIndex].removeClass('active') ;
  buttonArray[newIndex].addClass('active');
  if (newIndex > currentIndex) {
      slideLeft = '100%' ;
      animateLeft = '-100%' ;
  }else {
      slideLeft = '-100%' ;
      animateLeft = '100%' ;
  } 
  $slides.eq(newIndex).css({ left : slideLeft , display : 'block' }) ;
  $group.animate ( { left: animateLeft , function() {
      $slides.eq(currentIndex).css({display:'none'}) ;
      $slides.eq(newIndex).css({ left :0}) ;
      $group.css( { left:0});
      currentIndex = newIndex ;
  }}) ;
}      