var closeBtn ,search 
closeBtn = document.getElementById("closeNav");

openNav.onclick = function() {
   var fullWidth ,openNav 
   fullWidth = document.getElementById("header").style.width = "80%";
   openNav = document.getElementById('openNav').style.display = "none";
}
closeBtn.onclick = function () {
    var fullWidth ,openNav
    fullWidth = document.getElementById("header").style.width = "0";
    openNav = document.getElementById("openNav").style.display = "block";
}
/* Search Meun   */
function mySearch() {
    var input ,i ,ul ,li ,a ,txtVaule ,filter ;
    
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName("li");

    for ( i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtVaule = a.textContent || a.innerText;
        if (txtVaule.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "" ;
        } else {
            li[i].style.display = "none";
        }
        
    }
}

