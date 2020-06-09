if (window.localStorage) {
   var txtuse = document.getElementById ('username');
   var txtans = document.getElementById('answer') ;
   txtuse.Value = localStorage.getItem('username');
   txtans.Value = localStorage.getItem('answer');

   txtuse.addEventListener('input' ,function() {
       localStorage.setItem('username', txtuse.Value);
   } ,false);
   txtans.addEventListener('input', function () {
       localStorage.setItem('username',answer);
   },false);
}