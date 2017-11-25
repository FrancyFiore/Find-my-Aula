var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

// Povo1 page 
app.get('/Povo1', function(req, res) {
    res.render('Povo1');
});

// Povo2 page 
app.get('/Povo2', function(req, res) {
    res.render('Povo2');
});

// Wayfinding page 
app.get('/Wayfinding', function(req, res) {
    res.render('Wayfinding');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

/* Scraping degli Orari */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
today = "23-11-2017"

var url = "https://easyroom.unitn.it/Orario/rooms_call.php?form-type=rooms&sede=E0503&date=" + today +"&_lang=it";
var tmp = 0;
var file1 = fs.createWriteStream("./public/file/PoloAPrimoPiano.txt");
var file2 = fs.createWriteStream("./public/file/PoloASecondoPiano.txt");
var file3 = fs.createWriteStream("./public/file/PoloB.txt");

file1.once('open', function(fd){
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);

            for(var l=1; l<9; l++){ /* Aula da A101 a A107 */
                for(var i=0; i<31; i++){
                    if(body["table"]["E0503/A10" + l][i]["id"] != null){
                        var id = body["table"]["E0503/A10"+l][i]["id"];
                        if(id != tmp){
                            tmp = id;
                            var inizio = body["table"]["E0503/A10"+l][i]["from"];
                            inizio = inizio.substr(0, 2);
                            inizio = Number(inizio);
                            var fine = body["table"]["E0503/A10"+l][i]["to"];
                            fine = fine.substr(0, 2);
                            fine = Number(fine);

                            var aula = body["table"]["E0503/A10"+l][i]["NomeAula"];
                            var materia = body["table"]["E0503/A10"+l][i]["name"];
                            var tipo = body["table"]["E0503/A10"+l][i]["type"];

                            if(body["table"]["E0503/A10" + l][i]["Utenti"][0] != null){
                                var professore_nome = body["table"]["E0503/A10"+l][i]["Utenti"][0]["Nome"];
                                var professore_cognome = body["table"]["E0503/A10"+l][i]["Utenti"][0]["Cognome"];
                                var professore_mail = body["table"]["E0503/A10"+l][i]["Utenti"][0]["Mail"];
                                file1.write(8 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
                            }
                            else{
                                file1.write(5 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "\n");
                            }
                        }
                    }
                }
            }
            file1.end();
            console.log("The file was saved!");
        });
    });
});

file2.once('open', function(fd){
    https.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);

            for(var l=1; l<10; l++){ /* Aula da A201 a A209 */
                for(var i=0; i<31; i++){
                    if(body["table"]["E0503/A20" + l][i]["id"] != null){
                        var id = body["table"]["E0503/A20"+l][i]["id"];
                        if(id != tmp){
                            tmp = id;
                            var inizio = body["table"]["E0503/A20"+l][i]["from"];
                            inizio = inizio.substr(0, 2);
                            inizio = Number(inizio);
                            var fine = body["table"]["E0503/A20"+l][i]["to"];
                            fine = fine.substr(0, 2);
                            fine = Number(fine);

                            var aula = body["table"]["E0503/A20"+l][i]["NomeAula"];
                            var materia = body["table"]["E0503/A20"+l][i]["name"];
                            var tipo = body["table"]["E0503/A20"+l][i]["type"];

                            if(body["table"]["E0503/A20" + l][i]["Utenti"][0] != null){
                                var professore_nome = body["table"]["E0503/A20"+l][i]["Utenti"][0]["Nome"];
                                var professore_cognome = body["table"]["E0503/A20"+l][i]["Utenti"][0]["Cognome"];
                                var professore_mail = body["table"]["E0503/A20"+l][i]["Utenti"][0]["Mail"];
                                file2.write(8 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
                            }
                            else{
                                file2.write(5 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "\n");
                            }
                        }
                    }
                }
            }
            
            for(var l=10; l<25; l++){ /* Aula da A210 a A224 */
                for(var i=0; i<31; i++){
                    if(body["table"]["E0503/A2" + l][i]["id"] != null){
                        var id = body["table"]["E0503/A2"+l][i]["id"];
                        if(id != tmp){
                            tmp = id;
                            var inizio = body["table"]["E0503/A2"+l][i]["from"];
                            inizio = inizio.substr(0, 2);
                            inizio = Number(inizio);
                            var fine = body["table"]["E0503/A2"+l][i]["to"];
                            fine = fine.substr(0, 2);
                            fine = Number(fine);

                            var aula = body["table"]["E0503/A2"+l][i]["NomeAula"];
                            var materia = body["table"]["E0503/A2"+l][i]["name"];
                            var tipo = body["table"]["E0503/A2"+l][i]["type"];

                            if(body["table"]["E0503/A2" + l][i]["Utenti"][0] != null){
                                var professore_nome = body["table"]["E0503/A2"+l][i]["Utenti"][0]["Nome"];
                                var professore_cognome = body["table"]["E0503/A2"+l][i]["Utenti"][0]["Cognome"];
                                var professore_mail = body["table"]["E0503/A2"+l][i]["Utenti"][0]["Mail"];
                                file2.write(8 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
                            }
                            else{
                                file2.write(5 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "\n");
                            }
                        }
                    }
                }
            }
            
            /* Laboratorio  */
            for(var i=0; i<31; i++){
                if(body["table"]["E0503/LD MECCANI"][i]["id"] != null){
                    var id = body["table"]["E0503/LD MECCANI"][i]["id"];
                    if(id != tmp){
                        tmp = id;
                        var inizio = body["table"]["E0503/LD MECCANI"][i]["from"];
                        inizio = inizio.substr(0, 2);
                        inizio = Number(inizio);
                        var fine = body["table"]["E0503/LD MECCANI"][i]["to"];
                        fine = fine.substr(0, 2);
                        fine = Number(fine);

                        var aula = body["table"]["E0503/LD MECCANI"][i]["NomeAula"];
                        var materia = body["table"]["E0503/LD MECCANI"][i]["name"];
                        var tipo = body["table"]["E0503/LD MECCANI"][i]["type"];

                        if(body["table"]["E0503/LD MECCANI"][i]["Utenti"][0] != null){
                            var professore_nome = body["table"]["E0503/LD MECCANI"][i]["Utenti"][0]["Nome"];
                            var professore_cognome = body["table"]["E0503/LD MECCANI"][i]["Utenti"][0]["Cognome"];
                            var professore_mail = body["table"]["E0503/LD MECCANI"][i]["Utenti"][0]["Mail"];
                            file2.write(8 + "?" + 25 + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
                        }
                        else{
                            file2.write(5 + "?" + 25 + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "\n");
                        }
                    }
                }
            }
            
            file2.end();
            console.log("The file was saved!");
        });
    });
});

file3.once('open', function(fd){
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
                                file3.write(8 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "?" + professore_nome + "?" + professore_cognome + "?" + professore_mail + "\n");
                            }
                            else{
                                file3.write(5 + "?" + l + "?" + inizio + "?" + fine + "?" + materia + "?" + tipo + "\n");
                            }
                        }
                    }
                }
            }
            file3.end();
            console.log("The file was saved!");
        });
    });
});