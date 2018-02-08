function initMap() {
  var latitud,longitud, marker;
  var cityUbication = {lat:-12.023545 , lng: -77.014166};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cityUbication,
    zoom: 6
  });
  var miUbicacion = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: cityUbication
    });
    marker.addListener('click',function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });
  
    map.setZoom(13);
    map.setCenter(cityUbication);
  }
  var error = function (error) {
    window.alert("No se puede obtener tu localización");
  }

  function search() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(miUbicacion,error);
    }
  }

  var pointStart = document.getElementById("point-start");
  var pointDestination = document.getElementById("point-destination");
  new google.maps.places.Autocomplete(pointStart);
  new google.maps.places.Autocomplete(pointDestination);

  var directionService = new google.maps.DirectionsService;
  var directionRendere= new google.maps.DirectionsRenderer;

  document.getElementById('button-myUbication').addEventListener("click",function(){
    pointStart.value = latitud + ' ' +longitud
  });

  var route = function (direccionService, direccionDisplay) {
    var request = {
      origin: pointStart.value,
      destination: pointDestination.value,
      travelMode: 'DRIVING'
    };
    direccionService.route(request, function(result, status) {
      if (status == 'OK') {
        directionRendere.setDirections(result);
      }
    });
    directionRendere.setMap(map);
    marker.setMap(null);
  }

  window.addEventListener("load", search);
  document.getElementById('button-router').addEventListener("click",function(){
    route(directionService, directionRendere);
  });

}