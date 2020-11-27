
function iconAnimate() {

var icon ;

icon = document.getElementsByClassName("count")[0];
icon.innerHTML = "&#xf251;";

setTimeout(() => {
    icon.innerHTML = "&#xf252;";
}, 1000);
setTimeout(() => {
    icon.innerHTML = "&#xf253;";
}, 2000);
}
iconAnimate();
setInterval( iconAnimate, 3000 );

function countDown() {


    var  opendate = new Date( "dec 25, 2020 18:59:00").getTime();
    
    var x = setInterval(() => {
        
      var  now = new Date().getTime();
       var distance = opendate - now ; 
      
       var sec = Math.floor( distance % (1000 * 60 ) / (1000) );
       var min = Math.floor( distance % (1000 * 60 * 60) / (1000 * 60) );
       var hrs = Math.floor( distance % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60) );
       var day = Math.floor ( distance / (1000 * 60 * 60 * 24));

       var exDate = document.getElementsByClassName("exDate")[0].innerHTML = day+ "d" +" " + hrs 
       + "h" +" " + min + "m"+ " " + sec  + "s" ;

       if ( distance < 0) {
          
        clearInterval(x);
        var exDate = document.getElementsByClassName("exDate")[0].innerHTML = "EXPIRED" ;
       }

    }, 1000);
     
    
}
countDown();
