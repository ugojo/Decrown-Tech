( function() {
  var loader = $('<div id="loader"></div>').css( "display" , "none"  );
var bar = $( '<span></span>').css("opacity" , 0.1  ) ;
var loadInterval = null ;
    for (var i = 0; i < 4 ; i++) {
    bar.clone().addClass('bar-' + i ).appendTo(loader);
    }
loader.insertAfter("#run");
function runLoader() {
    var fristBar = loader.children(':first') ,
     secondBar = loader.children().eq(1) ,
     thridBar = loader.children().eq(2) ,
     fourthBar = loader.children(':last') ;

    fristBar.fadeTo( 'fast' , 1 , function() {
      fristBar.fadeTo( 'fast ' , 0.2 , function() {
          secondBar.fadeTo( 'fast' , 1 , function() {
            secondBar.fadeTo('fast' , 0.2 , function() {
              thridBar.fadeTo( 'fast', 1, function() {
                  thridBar.fadeTo('fast' , 0.2 , function() {
                    fourthBar.fadeTo('fast' , 1, function() {
                      fourthBar.fadeTo( 'fast' , 0.2);
                    })
                  })
              } )
            })
          })
      })
    })
} ;
$('#run').on('click' , function() {
if ( !$(loader).is(':visible')) {
    loader.show() ;
    loadInterval = setInterval(function() {
        runLoader();
    }, 1200);
} else {
    loader.hide();
    clearInterval(loadInterval) ;
}
} );
}());