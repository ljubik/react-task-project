/*global google */
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(49.82, 24.01),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markers = [],
        myPlaces = [];
    myPlaces.push(new Place('Приватне підприємство ЦІЛЬ', 49.8144011, 24.0188605, 'Переклади, апостиль, робота у Китаї'));
    for (var i = 0, n = myPlaces.length; i < n; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            title: myPlaces[i].name
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<b>' + myPlaces[i].name + '</b><br/>' + myPlaces[i].description
        });
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
}

function makeInfoWindowEvent(map, infowindow, marker) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker, "width=200, height=200");
    });
}

function Place(name, latitude, longitude, description) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.description = description;
}
google.maps.event.addDomListener(window, 'load', initialize);