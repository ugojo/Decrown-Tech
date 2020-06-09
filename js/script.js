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
    $('#warpper').load( `${url} #warpper`).hide().fadeIn('slow');
});

$( function () {
   $('#form').on('submit' ,function (e) {
      e.preventDefault() ;
   var details = $('#form').serialize() ;
   $.post ( 'https://ugojo.github.io/Decrown-Tech/' , details, function (data) {
      $('#form').html(data)
   });
   });
});
//Exchange Rate
$('#exchangeRates').append( '<div id="rates"></div><div id="reload"></div>');
function  loadRate() {
   $.getJSON('data/rates.json')
   .done( function(data) {
      var d = new Date();
      var hrs = d.getHours();
      var mins = d.getMinutes();
      var msg= '<h2> Exchange Rates </h2>' ;
      $.each( data , function(key,val) {
         msg+= '<div class="' + key + '">' + key + ':' + val + '</div>';
      });
         msg += '<br> last updated :' + hrs + ':' + mins + '<br>';
         $('#rates').html(msg); 
   }).fail( function() {
       $('#aside').append(' Sorry we cant load rates...........................') ;
   }).always( function() {
      var reload = '<a id="refresh" class="refresh">'
         reload += '<button>refresh</button> </a>';
      $('#reload').html(reload);
      $('#refresh').on('click' ,function(e) {
         e.preventDefault();
         loadRates();
      });
   });
};
var elLoc = document.getElementById('loc');
var msg = 'sorry we cant get your location' ;
if (modernizr.geolocation) {
   navigator.geolocation.getCurrentPosition(success,fail);
  elLoc.textContent='checking location..............';
}else { elLoc.textContent= msg ;
}
function success(Position ) {
   msg = '<h3>longittude<br>' ;
   msg += Position.coords.longtitude + '</h3>';
   msg += '<h3> lattitude <br>';
   msg == Position.coords.latitude + '</h3>'
   elloc.innerHTML = msg ;
};
function fail(msg) {
   elLoc.textContent = msg;
   console.log(msg.Code);
}