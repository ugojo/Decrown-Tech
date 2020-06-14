( function() {
    var $content = $('#share-options').detach();
    $('#share').on( 'click' , function() {
      modal.open({ content:$content , width:340 , heigth:900} );
    });
}());