//---------------------------marquue
//$( function() {
  //  var $mar = $('#marquee') ;
   // var $link =$('a')
  // $mar.on( 'click' , function() {
   //   $link.delay(500*3);    
  // });  
//});

   $('#meun a').on( 'click' ,function (e) {
       e.preventDefult();
       var url = this.href ;
       $('meun a.current').reoveClass();
       $(this).addClass('current');

       $('section').remove();
       $('#warpper').load(url + '#warpper').hide().fadeIn('slow');
   });
