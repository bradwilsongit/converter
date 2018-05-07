function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function weightConverter(valNum) {
  document.getElementById("outputKilograms").innerHTML=valNum/1000;
}

function weightConverter(valNum) {
  document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
}

function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML=valNum/3.2808;
}
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
