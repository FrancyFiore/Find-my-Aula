var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

/* Scraping degli Orari */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = "13-12-2017";

function scraping(nome, cognome){
    
    var url = "https://easyroom.unitn.it/Orario/rooms_call.php?form-type=rooms&sede=E0503&date=" + today +"&_lang=it";
    var tmp = 0;
  
	https.get(url, res => {
		res.setEncoding("utf8");
		let body = "";
		res.on("data", data => {
			body += data;
		});
		res.on("end", () => {
			body = JSON.parse(body);

			for(var l=1; l<8; l++){ /* Aula da B101 a B107 */
				for(var i=0; i<31; i++){
					if(body["table"]["E0503/B10" + l][i]["id"] != null){
						var id = body["table"]["E0503/B10"+l][i]["id"];
						if(id != tmp){
							tmp = id;
							var inizio = body["table"]["E0503/B10"+l][i]["from"];
							inizio = inizio.substr(0, 2);
							inizio = Number(inizio);
							var fine = body["table"]["E0503/B10"+l][i]["to"];
							fine = fine.substr(0, 2);
							fine = Number(fine);

							var aula = body["table"]["E0503/B10"+l][i]["NomeAula"];
							var materia = body["table"]["E0503/B10"+l][i]["name"];
							var tipo = body["table"]["E0503/B10"+l][i]["type"];

							if(body["table"]["E0503/B10" + l][i]["Utenti"][0] != null){
								var professore_nome = body["table"]["E0503/B10"+l][i]["Utenti"][0]["Nome"];
								var professore_cognome = body["table"]["E0503/B10"+l][i]["Utenti"][0]["Cognome"];
								var professore_mail = body["table"]["E0503/B10"+l][i]["Utenti"][0]["Mail"];
								if(professore_cognome == cognome){
									if(professore_nome == nome){
										console.log(8 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
									
										si=1;
									}
								}
							}
						}
					}
				}
			}
        });
    }).end();
	return si;
}

module.exports = scraping;