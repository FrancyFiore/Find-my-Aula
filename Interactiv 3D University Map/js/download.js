var https = require('https');
var fs = require('fs');

function send(){

    var i=9;
    
    var file = fs.createWriteStream("file.php");
    var request = https.get("https://easyroom.unitn.it/Orario/rooms_call.php?form-type=rooms&sede=E0503&date=0" + i +"-11-2017&_lang=it", function(response) {
        response.pipe(file);
    });
}