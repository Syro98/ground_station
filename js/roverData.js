//https://stackoverflow.com/questions/21809815/change-content-of-a-div-on-another-page
//https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
//window.localStorage.getItem("dot01start");
//https://stackoverflow.com/questions/26509475/button-required-to-start-stop-javascript
//https://www.w3schools.com/php/php_ajax_database.asp
//https://www.youtube.com/watch?v=crtwSmleWMA

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

var speed = document.getElementById("speedRT");
var battery = document.getElementById("batteryRT");
var xCoords = document.getElementById("xCoordsRT");
var yCoords = document.getElementById("yCoordsRT");

function roverData() {
  maxBattery = maxBattery-1
  battery.innerHTML = maxBattery+' %';

  var randomSpeed = Math.random() * (+maxSpeed - +minSpeed) + +minSpeed;
  randomSpeed = Math.round(randomSpeed * 100) / 100;
  speed.innerHTML = randomSpeed+' km/h';

  var randomX = Math.random() * (+maxXcoords - +minXcoords) + +minXcoords;
  randomX = Math.round(randomX * 1000000) / 1000000;
  xCoords.innerHTML = randomX;

  var randomY = Math.random() * (+maxYcoords - +minYcoords) + +minYcoords;
  randomY = Math.round(randomY * 1000000) / 1000000;
  yCoords.innerHTML = randomY;

  setTimeout(roverData, 5000);
}

for(i=0; i<1; i++)
{
  roverData();
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