

function sortTable(n) {
    var i , switching , shouldSwitch  , dir ,rows ,table ,x ,y,switchCount = 0 ;
    
    table = document.getElementById("myTable");
   
     switching = true;
     dir = "asc";

     while (switching) {
          /* the while loop continues when the condition is set to false */
         switching = false;
         
         rows = table.rows;

         for ( i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;
         
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            
           if (dir == "asc") {
               
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                
                shouldSwitch = true;
                break;
            }
           } else if ( dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    
                 shouldSwitch = true;
                 break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1],rows[i]);
            switching = true;
           
            switchCount ++;
        }else{
            if (switchCount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
           
     }
    }
   