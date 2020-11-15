
function myTab(tabName,elent,color) {
    
    var tabLinks ,tabcontent ,i ;

      tabcontent = document.getElementsByClassName("tabcontent");
      for ( i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";     
      }
      tabLinks = document.getElementsByClassName("tabLinks");
      for ( i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";     
      }

      document.getElementById(tabName).style.display = "block";
      
      elent.style.backgroundColor = color ;
}
document.getElementById("defultOpen").onclick();