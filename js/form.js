( function() {
    var form = document.getElementById('login')
    var elements = form.elements ;
    var elUsername = elements.username ;
    var elmain = document.getElementById('main')
    addEvent( form , 'submit', function(e) {
        e.preventDefault() ;
        var msg = 'Hello ' + elUsername.value ;
        elmain.textContent = msg ;
        
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
  
  var comment = document.getElementById('comment') ;
  var bio = document.getElementById('count') ;

      addEvent(comment , 'focus' , bioCount ) ;
      addEvent( comment , 'input', bioCount ) ;
       
      addEvent( comment , 'blur' , function() {
        if (comment.value.length <= 140) {
            bio.className = 'hide' ;
        }
     } ) ;
      function bioCount(e) {
    var target = e.target || e.srcElement ;
    var count =  140 - target.value.length ;
    if (count < 0) {
        bio.className = 'error' ;
    } else if(count <= 15)  {
        bio.className = 'warn' ;
    }else {
        bio.className = 'good' ;
    }    
    var bioMsg = '<em>' + count +  '</em>' + ' characters left' ;
    bio.innerHTML = bioMsg ;
      }
    
      var password = document.getElementById('pwd') ;
      var conPwd = document.getElementById('con-pwd');

      function setError(e) {
          var target = e.target || e.srcElement ;
          if ( target.value.length < 8  ) {
              target.className = 'fail'
          } else {
              target.className = 'pass'
          }
      }
      function removeError(e) {
          var target = e.target || e.srcElement ;
          if (target.className = 'fail') {
              target.className = ''
          }
      }
      function matchPwd(e) {
          var target = e.target || e.srcElement ;
          if ((pwd.value === target.value) && target.value.length >= 8 ) {
              target.className = 'pass'
          } else {
              target.className = 'fail'
              e.preventDefault()
          }
      }
      addEvent( password , 'focus', removeError);
      addEvent( password , 'blur' , setError) ;
      addEvent ( conPwd , 'focus' , removeError);
      addEvent( conPwd , 'blur', matchPwd);
}());