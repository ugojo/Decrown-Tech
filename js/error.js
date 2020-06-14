console.log ('and we\'er off...............');
var $form ,width , height , area ;
   $form = $('#calculator') ;
   
$('form input[type="text"]').on( 'blur' , function() {
    console.log('you enter' , this.value);
});
$('#calculator').on('submit' , function(e) {
    e.preventDefault() ;
    console.log('clicked submit............');
});

width = $('#width').val();
 console.log('width' + width);
length = $('#height').val();
 console.log('height' + height );
 area = (width * height) ;
 console.log (area);

 $form.append('<p>' + area +'</p>');
