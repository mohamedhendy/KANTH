$(function () {
  $('#hendi1').on('click', function () {
    google.maps.event.trigger(gmarkers[0], 'click');
  })
  $('#hendi2').on('click', function () {
    google.maps.event.trigger(gmarkers[1], 'click');
  })
  $('#hendi3').on('click', function () {
    google.maps.event.trigger(gmarkers[2], 'click');
  })
  $('#hendi4').on('click', function () {
    google.maps.event.trigger(gmarkers[3], 'click');
  })

});


// custom functions
var gmarkers = [];
var locations = []
for (var i = 0; i < dataItem.length; i++) {
  locations.push(dataItem[i])
}

function initMap() {

  var mapOptions = {
    center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,

  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //Create and open InfoWindow.
  var infoWindow = new google.maps.InfoWindow();

  for (var i = 0; i < locations.length; i++) {

    var data = locations[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.title,
    });

    gmarkers.push(marker);
    //Attach click event to the marker.
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.

        infoWindow.setContent("<div style='height:200px;width:250px'><img src='images/" + data.img + "'></div>" + "<div style='height:100px;width:250px;text-align:center;'>" + data.title + "</div>")

        infoWindow.open(map, marker);
      });
    })(marker, data);
  }

}

function triggreButtonAction(btnNumber) {
  google.maps.event.trigger(gmarkers[btnNumber - 1], 'click');
}