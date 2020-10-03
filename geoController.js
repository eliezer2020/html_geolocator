function init() {
  if (navigator.geolocation) {
    document.getElementById("notify").innerHTML = "reading geolocation:";
    document.getElementById("locationText").innerHTML = "waiting....";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    document.getElementById("notify").innerHTML = "please verify conection";
  }
}

function onSuccess(pos) {
    console.log("successs !!");
   
  var Lat = pos.coords.latitude;
  var Long = pos.coords.longitude;
  document.getElementById("locationText").style="color:green";
  document.getElementById("locationText").innerHTML =   " coord  " + Lat + " : " + Long;
 
}

function onError(pos) {
    console.log("failure !!");
  document.getElementById("locationText").innerHTML = "unable to reach";
}

onload = init;
