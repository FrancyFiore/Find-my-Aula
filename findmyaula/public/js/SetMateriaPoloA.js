/* LETTURA DEL FILE */
var today = new Date();
var adesso = today.getHours();
/*adesso = 13;*/
document.getElementById("Ora").value = "Ora:" + " " + adesso;

var file1 = new XMLHttpRequest();
var file2 = new XMLHttpRequest();

file1.open('GET', '../file/PoloAPrimoPiano.txt', false);
file1.send(null);

file2.open('GET', '../file/PoloASecondoPiano.txt', false);
file2.send(null);

var PrimoPiano = file1.responseText.split('\n');
var SecondoPiano = file2.responseText.split('\n');

var Primo = false;
var Secondo = false;

SetOrario();

function SetOrario(){
    if(selectedLevel == 1){
        SetOrarioPrimoPiano();
    }
    else if(selectedLevel == 2){
        SetOrarioSecondoPiano();
    }
    else{
        SetOrarioPrimoPiano();
        SetOrarioSecondoPiano();
    }
}

function SetOrarioPrimoPiano(){
    /* POLO A PRIMO PIANO */
    for(var aula=1; aula<9; aula++){
        for(var ora=7; ora<21; ora++){
            /*var element = document.getElementById("A10" + aula + ora);*/
            for(var c=0; c<(PrimoPiano.length-1); c++){
                var fields = PrimoPiano[c].split('?');
                if(fields[1] == aula){
                    if(fields[2] == ora){
                        var Materia = fields[4].split('-');
                        for(var durata=ora; durata<fields[3]; durata++){
                            var element = document.getElementById("A10" + aula + durata);
                            if(fields[0] == 8 && Primo == false){;
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                            }
                            else if(fields[0] == 5 && Primo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                            }
                            if(durata == adesso){
                                document.getElementById("A10" + aula).innerHTML = "A10" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                            }
                        }
                    }
                }
            }    
        }
    }
	Primo = true;
}
function SetOrarioSecondoPiano(){
    /* POLO A SECONDO PIANO A201 - A209 */
    for(var aula=1; aula<10; aula++){
        for(var ora=7; ora<21; ora++){
            for(var c=0; c<(SecondoPiano.length-1); c++){
                var fields = SecondoPiano[c].split('?');
                if(fields[1] == aula){
                    if(fields[2] == ora){
                        var Materia = fields[4].split('-');
                        for(var durata=ora; durata<fields[3]; durata++){
                            var element = document.getElementById("A20" + aula + durata);
                            if(fields[0] == 8 && Secondo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                            }
                            else if(fields[0] == 5 && Secondo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                            }
                            if(durata == adesso){
                                document.getElementById("A20" + aula).innerHTML = "A20" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                            }
                        }
                    }
                }
            }    
        }
    }


    /* POLO A SECONDO PIANO A210 - A224 */
    for(var aula=10; aula<25; aula++){
        for(var ora=7; ora<21; ora++){
            for(var c=0; c<(SecondoPiano.length-1); c++){
                var fields = SecondoPiano[c].split('?');
                if(fields[1] == aula){
                    if(fields[2] == ora){
                        var Materia = fields[4].split('-');
                        for(var durata=ora; durata<fields[3]; durata++){
                            var element = document.getElementById("A2" + aula + durata);
                            if(fields[0] == 8 && Secondo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                            }
                            else if(fields[0] == 5 && Secondo == false){
                                element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                            }
                            if(durata == adesso){
                                document.getElementById("A2" + aula).innerHTML = "A2" + aula + "  -  " + '<font color="darkorange">' + Materia[0] +     '</font>';
                            }
                        }
                    }
                }
            }    
        }
    }


    /* LABORATORIO SECONDO PIANO */
    for(var ora=7; ora<21; ora++){
        for(var c=0; c<(SecondoPiano.length-1); c++){
            var fields = SecondoPiano[c].split('?');
            if(fields[1] == 25){
                if(fields[2] == ora){
                    for(var durata=ora; durata<fields[3]; durata++){
                        var element = document.getElementById("A225" + durata);
                        if(fields[0] == 8 && Secondo == false){
                            element.innerHTML = "<strong>" + fields[4] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                        }
                        else if(fields[0] == 5 && Secondo == false){
                            element.innerHTML = "<strong>" + fields[4] + "</strong>";
                        }
                        if(durata == adesso){
                            document.getElementById("A225").innerHTML = "LD Meccanica" + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                        }
                    }
                }
            }
        }    
    } 
    Secondo = true;
}/* chiudo la funzione */
/* FINE LETTURA DEL FILE */

/* PER PULIRE LA VISUALIZZAZIONE DEGLI ORARI */
function Pulitore(){
    if(selectedLevel == 1){
        PulitorePrimoPiano();
    }
    else if(selectedLevel == 2){
        PulitoreSecondoPiano();
    }
    else{
        PulitorePrimoPiano();
        PulitoreSecondoPiano();
    }
}

function PulitorePrimoPiano(){
    for(aula=1; aula<9; aula++){
        document.getElementById("A10" + aula).innerHTML = "A10" + aula
    }
}

function PulitoreSecondoPiano(){
    for(aula=1; aula<10; aula++){
        document.getElementById("A20" + aula).innerHTML = "A20" + aula
    }
    for(aula=10; aula<25; aula++){
        document.getElementById("A2" + aula).innerHTML = "A2" + aula
    }
	document.getElementById("A225").innerHTML = "LD Meccanica"
}
/* FINE PULITORE */

var check = document.getElementById('ProssimaOra');
check.onclick = function(){    
    if(adesso < 20){
		Pulitore();
        adesso = adesso+1;
        SetOrario();
        
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "js/main.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
        
        document.getElementById("Ora").value = "Ora:" + " " + adesso;
    }
}

var check2 = document.getElementById('Ora');
check2.onclick = function(){
    adesso = today.getHours();
   /* adesso = 13; */
    Pulitore();
    SetOrario();
    
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/main.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    
    document.getElementById("Ora").value = "Ora:" + " " + adesso;
}

var check3 = document.getElementById('OraPrecedente');
check3.onclick = function(){
    if(adesso > 8){
		Pulitore();
        adesso = adesso-1;
        SetOrario();
        
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "js/main.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
        
        document.getElementById("Ora").value = "Ora:" + " " + adesso;
    }
}