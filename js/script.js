//---------------------------marquue
//$( function() {
  //  var $mar = $('#marquee') ;
   // var $link =$('a')
  // $mar.on( 'click' , function() {
   //   $link.delay(500*3);    
  // });  
//});

   var xhr = XMLHttpRequest() ;
   xhr.onload = function () { 
     if (xhr.status==200) {
       document.getElementById ('warpper').innerHTML = xhr.responseText;
     }
   };
   xhr.open ( 'Post' , 'data/data.html', true);
   xhr.send(null);

   $('ul a').on( 'click' ,function (e) {
    e.preventDefault();
    var url = this.href ;

    $('ul a.current').removeClass( 'current');
    $(this).addClass('current');
    $('nav').remove();
    $('#warpper').load( url  + ' #warpper').hide().fadeIn('slow');
});

$( function () {
   $('#form').on('submit' ,function (e) {
      e.preventDefault() ;
   var details = $('#login').serialize() ;
   $.post ( 'https://ugojo.github.io/Decrown-Tech/' , details, function (data) {
      $('#form').html(data)
   });
   });
});