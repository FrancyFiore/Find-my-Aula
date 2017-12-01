/* LETTURA DEL FILE */   
var today = new Date();
var adesso = today.getHours();
/*adesso = 13;*/
document.getElementById("Ora").value = "Ora:" + " " + adesso;

var file3 = new XMLHttpRequest();

file3.open('GET', '../file/PoloB.txt', false);
file3.send(null);

var PoloB = file3.responseText.split('\n');  

var Primo = false;

SetOrario();

function SetOrario(){
    /* POLO B PRIMO PIANO */
    for(var aula=6; aula<8; aula++){
        for(var ora=7; ora<21; ora++){
            /*var element = document.getElementById("B10" + aula + ora);*/
            for(var c=0; c<(PoloB.length-1); c++){
                var fields = PoloB[c].split('?');
                if(fields[1] == aula){
                    if(fields[2] == ora){
                        var Materia = fields[4].split('-');
                        for(var durata=ora; durata<fields[3]; durata++){
                            var element = document.getElementById("B10" + aula + durata);
                            if(fields[0] == 8 && Primo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                            }
                            else if(fields[0] == 5 && Secondo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                            }
                            if(durata == adesso){
                                document.getElementById("B10" + aula).innerHTML = "B10" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                            }
                        }
                    }
                }
            }    
        }
    } 
	Primo = true;
}/* chiudo la funzione */
/* FINE LETTURA DEL FILE */

/* PER PULIRE LA VISUALIZZAZIONE DEGLI ORARI */
function Pulitore(){
    for(aula=6; aula<8; aula++){
        document.getElementById("B10" + aula).innerHTML = "B10" + aula
    }
}
/* FINE PULITORE */