
/*-------( function() {
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
}()); ------*/

currentTab = 0 ;

   showTab(currentTab);

   function showTab(n){
     var t ;
     t = document.getElementsByClassName("tab");
    
     t[n].style.display = "block";  
     
      if( n == 0 ){
         document.getElementById("prev").style.display = "none";  
      }else{
         document.getElementById("prev").style.display = "inline";
      }
      if( n >= (t.length - 1)){
         document.getElementById("next").innerHTML = "Submit";
      }else{
         document.getElementById("next").innerHTML = "Next";
      }
     finishBtn(n);

   }
   function prevNext(n){
    var t = document.getElementsByClassName("tab");
     
      if(n == 1 && !validateFrom()){ return false;}
      
      t[currentTab].style.display = "none";

    currentTab = currentTab + n ;

   if ( currentTab >= t.length) {
       document.getElementById("myFrom").submit();
       return false;
   }
    showTab(currentTab);

   }
   
   function validateFrom(){
     var t , x, i ,valid ;
         valid = true;

    t = document.getElementsByClassName("tab");
    x = t[currentTab].getElementsByTagName("input");
    psw = document.getElementById("psw");
    retypePsw = document.getElementById("rePsw");
     
     for ( i = 0; i < x.length; i++) {
       
       if ( x[i].value == "") {
        
         x[i].className += " invalid";
         valid = false;
       }
      if (x[i].type === "password") {

         var pass , passOne 
             pass = /[a-z]/g;
             passOne = /[A-Z]/g;
             passTh = /[0-9]/g;

          if (!x[i].value.match(pass)) {
            x[i].className += " invalid";
            document.getElementsByClassName("msg").innerHTML = "Password word must contain <strong> lowerCase </strong> charaters";
            valid = false ;
          }else if (!x[i].value.match(passOne)) {

            x[i].className += " invalid";
            document.getElementsByClassName("msg")[0].innerHTML = "Password word must contain <strong>  Uppercase </strong> charaters";
            valid = false ;
          }else if (!x[i].value.match(passTh)) {
            
            x[i].className += " invalid";
            document.getElementsByClassName("msg")[0].innerHTML = "Password word must contain <strong> Number <strong> ";
            valid = false ;
          }else if ( x[i].value.length <= 8) {
            
            x[i].className += " invalid";
            document.getElementsByClassName("msg")[0].innerHTML = "Charaters must not be less than eight(8)";
            valid = false ;
          }else if ( psw.value !== retypePsw.value) {
             
            x[i].className += " invalid";
            document.getElementsByClassName("msg")[0].innerHTML = "Password Mismatch";
            valid = false ;
          }
       }
       
     }
     if (valid) {
    
          document.getElementsByClassName("steps")[currentTab].className += " finish";

       }
       return valid;
   
   }
   function finishBtn(n){
      
      var span ,i ;
       span = document.getElementsByClassName("steps");
      
      for ( i = 0; i < span.length; i++) {
        
       span.className = span[i].className.replace( " active" , " ");
      }
      span[n].className += " active";
   }