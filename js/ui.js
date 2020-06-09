$( function() {
    $('#user').accordion();
});
$( function() {
    $('#tab').tabs();
});
$( function() {
    $('#arrival').datepicker();


    var $amount = $('#amount-range');

     $('#amount-range').slider({
         range : ture ,
         min : 0 ,
         max : 400 ,
         vaules : [1000,500] ,
         slide: function (event,ui) {
             $('#amount').val('$' + ui.vaules[0] + '-$ ' + ui.vaules[1] );
         }
     });
     $amt
     .val ( '$' + $amtran.slider( 'vaules',0) 
     + '-$' + $amtran.slider('vaules',1));
});
