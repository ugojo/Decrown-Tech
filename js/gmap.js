function init() {
    var mapOption = { 
    center : new google.maps.LatLng(45,782710,-75,96310),
    mapTypeId : google.maps.mapTypeId.ROADMAP ,
    zoom :13
    };
    var veuneMap;
     veuneMap = new google.maps.map(document.getElementById('gMap'),mapOption);
}
function loadScript() {
    var script = document.createElement ('script');
    script.src = 'http://maps.googleapis.com/maps/api/jas? sensor=fasle&callback = initialize' ;
    document.body.appendChild(script);
}
window.onload = loadScript ;