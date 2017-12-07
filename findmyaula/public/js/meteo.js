var file1 = new XMLHttpRequest();

file1.open('GET', '../file/data.txt', false);
file1.send(null);

var Meteo = file1.responseText.split('\n');
var Situazione = Meteo[1].split('_');

document.getElementById("Meteo").innerHTML = "<strong>" + Situazione[1] + "°</strong>";

if(Situazione[0] == "rain"){
	Simbolo = "wi-rain"
}
else if(Situazione[0] == "snow"){
	Simbolo = "wi-snow"
}
else if(Situazione[0] == "sleet"){
	Simbolo = "wi-sleet"
}
else if(Situazione[0] == "hail"){
	Simbolo = "wi-hail"
}
else if(Situazione[0] == "wind"){
	Simbolo = "wi-strong-wind"
}
else if(Situazione[0] == "fog"){
	Simbolo = "wi-fog"
}
else if(Situazione[0] == "cloudy"){
	Simbolo = "wi-cloudy"
}
else if(Situazione[0] == "partly-cloudy-day"){
	Simbolo = "wi-day-sunny-overcast"
}
else if(Situazione[0] == "clear-day"){
	Simbolo = "wi-day-sunny"
}
else if(Situazione[0] == "clear-night"){
	Simbolo = "wi-night-clear"
}	

document.getElementById("simbolo").className = "wi " + Simbolo + " meteo";
