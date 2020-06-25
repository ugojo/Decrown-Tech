( function() {
 var $images = $('#slider img') ;
 var imgNum = $images.length ;
 var activeSlide = 0 ;
 var speed = 2000 ;
 var fade = 1000 ;
 var pause ;
 var paging = "" ;
 var timer = setInterval(rotate , speed )  ;
 $images.eq(activeSlide).show() ;

 for (var page = 0; page < imgNum; page++) {
     paging += '<a rel = \" " + (page + 1) + "\">' + (page + 1) + '</a>\n'   ;
 }
 $('#pagination').html(paging);

 $('#slider , #prev , #next , #pagination ').hover( function() {
     clearInterval( timer) ;
     pause = true ;
 } , function() {
     timer = setInterval( rotate , speed) ;
     pause = false ;
 });

 $('#prev').click ( function(e) {
    activeSlide -- ;
    rotate() ;
    e.preventDefault() ;
});
$('#next').click( function(e) {
    activeSlide ++ ;
    rotate() ;
    e.preventDefault() ;
});
$('#pagination a').click ( function(e) {
    e.preventDefault()  ;
    activeSlide = $(this).attr("rel") -1 ;
    rotate() ;
});
function rotate() {
     //activeSlide ++ ;
if (!pause == true) {
        activeSlide ++ ;
    }
if (activeSlide === imgNum) {
    activeSlide = 0 ;
}
if (activeSlide < 0) {
    activeSlide = imgNum - 1;
}
$images.not(activeSlide).fadeOut(fade) ;
$images.eq(activeSlide).fadeIn(fade) ;
 }
}());