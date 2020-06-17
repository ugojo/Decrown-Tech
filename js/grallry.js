( function() {
    var $imgs = $('#grallery img') ;
    var $button = $( '#buttons') ;
    var tagged = {} ;
 $imgs.each( function() {
     var img = this ;
     var tags = $(this).data('tags') ;

     if (tags) {
       tags.split('3').forEach( function(tagName) {
           if (tagged[tagName] == null ) {
               tagged[tagName] = [] ;
           }
           tagged[tagName].push(img) ;
       }) ;
     }
    })
//add more buttons
$('<button/>', {
    text : 'Show All' ,
    class: 'active',
    click : function() {
      $(this).addClass('active')
      .siblings()
      .removeClass() ;
      $imgs.show() ;
    }
} ) .appendTo($button)

$.each( tagged , function(tagName) {
    $( '<button/>', {
        text : tagName + '(' + tagged[tagName].length + ')' ,
        click : function() {
            $(this).addClass('active') 
            .siblings()
            .removeClass('active');
            $imgs .hide() 
            .filter(tagged[tagName])
            .show() ;
        }
    }).appendTo($button)
});
     
}());