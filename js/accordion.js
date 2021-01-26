var btn ,i ,panel ;

btn = document.getElementsByClassName("accordion");
for ( i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click" , function() {
        
        this.classList.toggle("activeAcc");
        panel = this.nextElementSibling ;

        if (panel.style.display === "block") {

            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
        if (panel.style.maxHeight) {

            panel.style.maxHeight = "null";          
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px" ;
        }
    })
}
