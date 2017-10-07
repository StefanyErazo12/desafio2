
 function initialize() {
        // Configuración del mapa
        var mapProp = {
          center: new google.maps.LatLng(13.794185, -88.896529999999),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        // Agregando el mapa al tag de id googleMap
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        
        // Creando un marker en el mapa  el de la UDB Soyapango.
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(13.715917975408844 , -89.15368022695316),
          map: map,
          title: "Universidad Don Bosco, Soyapango.",
          icon: "icons/favicon.png" // icono para UDB Soyapango
        });

        //otro marker para UDB de PostGrados
var marker = new google.maps.Marker({
          position: new google.maps.LatLng(13.6739996, -89.2367663),
          map: map,
          title: "Universidad Don Bosco(Campus de PostGrados), Calle Los Claveles.",
          icon: "icons/udb.jpg" // icono para UDB Soyapango
        });


       
      }
        
      // Inicializando el mapa cuando se carga la página
      window.onload = initialize;