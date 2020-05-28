//https://stackoverflow.com/questions/21809815/change-content-of-a-div-on-another-page
//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
//window.localStorage.getItem("dot01start");
//https://stackoverflow.com/questions/26509475/button-required-to-start-stop-javascript
//https://www.w3schools.com/php/php_ajax_database.asp
//https://www.youtube.com/watch?v=crtwSmleWMA
//https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript

var minBattery = 0;
var maxBattery = 100;
var minSpeed = 0;
var maxSpeed = 8;
var minXcoords = 12.504315;
var maxXcoords = 12.5722932;
var minYcoords = 41.7656441;
var maxYcoords = 41.89764;
var minTilt = -60;
var maxTilt = 60;

var attitude = $.flightIndicator("#attitude", "attitude", {
  roll: 50,
  pitch: -20,
  size: 200,
  showBox: true,
});
var altimeter = $.flightIndicator("#altimeter", "altimeter");
var increment = 0;

var speed = document.getElementById("speedRT");
var battery = document.getElementById("batteryRT");
var xCoords = document.getElementById("xCoordsRT");
var yCoords = document.getElementById("yCoordsRT");
var tilt = document.getElementById("cameraTiltRT");

// Attitude initialized
attitude.setRoll(10 * Math.sin(increment / 2));
attitude.setPitch(10 * Math.sin(increment / 4));

// Altimeter initialized
altimeter.setAltitude(10 * increment);
altimeter.setPressure(1000 + 3 * Math.sin(increment / 50));

function roverData() {
  // Battery update
  maxBattery = maxBattery - 0.05;
  battery.innerHTML = Math.ceil(maxBattery) + " %";

  // Speed update
  var randomSpeed = Math.random() * (+maxSpeed - +minSpeed) + +minSpeed;
  randomSpeed = Math.round(randomSpeed * 100) / 100;
  speed.innerHTML = randomSpeed + " km/h";

  // x-coords update
  var randomX = Math.random() * (+maxXcoords - +minXcoords) + +minXcoords;
  randomX = Math.round(randomX * 1000000) / 1000000;
  xCoords.innerHTML = randomX;

  // y-coords update
  var randomY = Math.random() * (+maxYcoords - +minYcoords) + +minYcoords;
  randomY = Math.round(randomY * 1000000) / 1000000;
  yCoords.innerHTML = randomY;

  // camera tilt update
  var randomTilt = Math.random() * (+maxTilt - +minTilt) + +minTilt;
  randomTilt = Math.round(randomTilt * 1) / 1;
  tilt.innerHTML = randomTilt + "°";

  // Attitude update
  attitude.setRoll(10 * Math.sin(increment / 2));
  attitude.setPitch(10 * Math.sin(increment / 4));

  // Altimeter update
  altimeter.setAltitude(10 * increment);
  altimeter.setPressure(1000 + 3 * Math.sin(increment / 50));
  increment++;

  /*$(document).ready(function () {
    var roverID = 1;
    var roverStatus = $("#rover01status").val();
    var battery = $("#batteryRT").val();
    var speed = $("#speedRT").val();
    var coordsx = $("#xCoordsRT").val();
    var coordsy = $("#yCoordsRT").val();
    var cameraTilt = $("#cameraTiltRT").val();
    var mode = $("#modeRT").val();
    $.ajax({
      url: "php/roverAuto.php",
      type: "POST",
      data: {
        roverID: roverID,
        roverStatus: roverStatus,
        battery: battery,
        speed: speed,
        coordsx: coordsx,
        coordsy: coordsy,
        cameraTilt: cameraTilt,
        mode: mode,
      },
      cache: false,
      success: console.log("ciao grazie non sapevo"),
    });
  });*/

  setTimeout(roverData, 500);
}

function roverAuto(bool) {
  while (bool == 1) {
    roverData();
    document.getElementById("autoRover01").disabled = true;
    window.localStorage.setItem("rover01status", "Running (auto)");
    document.getElementById(
      "rover01status"
    ).innerText = window.localStorage.getItem("rover01status");
    //updateMap()
    if (bool == 0) window.localStorage.setItem("rover01status", "Idle");
    document.getElementById(
      "rover01status"
    ).innerText = window.localStorage.getItem("rover01status");
    break;
  }
}

function startRoverAuto() {
  roverAuto(1);
}

function startRoverAuto() {
  roverAuto(0);
}

/*var condition01, mysqli = require('mysqli');
var connection = mysqli.createConnection({
  host: "localhost",
  database: "sasa"
})
connection.connect(function(err) {
  if (err) throw err;
  var result = con.query("SELECT roverID, status FROM rover ORDER BY id DESC LIMIT 1;");
  if (err) throw err;
  if (result == "stop") condition01 = false;
  else condition01 = true; 
})*/
