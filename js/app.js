addEventListener('click',function finMe(){
  var output =  document.getElementById('map');

  if(navigator.geolocation){
    output.innerHTML = "<p>Tu navegador soporta Geolocalización</p>";
  }else {
    output.innerHTML = "<p>Tu navegador no soporta Geolocalización</p>"; 
  }

  function location (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = "<p>Latitud: "+ latitude +" <br>Longitud: " +longitude+"</p>"
  }

  function error(){
    output.innerHTML = "<p>No se puede obtener tu ubicación</p>"
  }

  navigator.geolocation.getCurrentPosition(location,error);
}) 
