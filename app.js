// Geolocalizzazione e visualizzazione mappa

// Controllo presenza API
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geolocalizzazione non supportata');
}

// Posizione ottenuta
function success(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  var coords = new google.maps.LatLng(lat, long);

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: coords,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });
}

// log
function error(e) {
  console.error(e);
}
