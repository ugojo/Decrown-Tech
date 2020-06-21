( function() {
    var form = document.getElementById('login')
    var elements = form.elements ;
    var elUsername = elements.username ;
    var elmain = document.getElementById('main')
    addEvent( form , 'submit', function(e) {
        e.preventDefault() ;
        var msg = 'Hello ' + elUsername.value ;
        elmain.textContent = msg ;
        form.remove();
    } );
  var pwd = document.getElementById ('pwd') ;
  var chk = document.getElementById( 'showpwd') ;
  addEvent( chk , 'change' , function(e) {
      var target = e.target || e.srcElement ;
      try {
          if (target.checked) {
              pwd.type = 'text'
          } else {
              pwd.type = 'password'
          }
      } catch (error) {
          alert( ' your broswer cant support this event');
      }
  });
}());