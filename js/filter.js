/* FILTER */
 filterDiv("all");
function filterDiv(n) {
    var x , i  ;

 x = document.getElementsByClassName("filterElet");
   
    if ( n == "all") { n = " "};

  for ( i = 0; i < x.length; i++) {
    
    ucRemoveClass( x[i],"show");
   if (x[i].className.indexOf(n) > -1) {
    ucAddClass( x[i] ,"show");
   }
  }
  /* Create the addClass and removeClass */

  function ucAddClass( element , name) {
      var arr1 , arr2 , i ;

      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for ( i = 0; i < arr2.length; i++) {
          if ( arr1.indexOf(arr2[i]) == -1) {
              element.className += " " + arr2[i];
          } 
      }
  }
  /* End of AddClass */
   function ucRemoveClass( element , name) {
       var arr1 , arr2 ,i;
       
       arr1 = element.className.split(" ");
       arr2 = name.split(" ");
       for ( i = 0; i < arr2.length; i++) {
               
             while (arr1.indexOf(arr2[i]) > -1) {
                 
                arr1.splice(arr1.indexOf(arr2[i]) , 1);
             }
       }
       element.className = arr1.join(" ");
   };
   /* End od ucrmoveClass */

   var btnCon = document.getElementById("myContainerBtn");
   var btn = btnCon.getElementsByClassName("btn");

    for ( i = 0; i < btn.length; i++) {
        
        btn[i].addEventListener("click" , function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active" , " ");
            this.className += " active";
        })
        
    }
}
