/* LETTURA DEL FILE */
    
var today = new Date();
var adesso = today.getHours();
adesso = 13;

var file1 = new XMLHttpRequest();
var file2 = new XMLHttpRequest();

file1.open('GET', '../file/PoloAPrimoPiano.txt', false);
file1.send(null);

file2.open('GET', '../file/PoloASecondoPiano.txt', false);
file2.send(null);

var PrimoPiano = file1.responseText.split('\n');
var SecondoPiano = file2.responseText.split('\n');

/* POLO A PRIMO PIANO */
for(var aula=1; aula<9; aula++){
    for(var c=0; c<(PrimoPiano.length-1); c++){
        var fields = PrimoPiano[c].split('?');
        if(fields[1] == aula){
            var Materia = fields[4].split('-');
            for(var durata=fields[2]; durata<fields[3]; durata++){
                if(durata == adesso){
                    document.getElementById("A10" + aula).innerHTML = "A10" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                }
            }
        }
    }    
}    

/* POLO A SECONDO PIANO A201 - A209 */
for(var aula=1; aula<10; aula++){
    for(var c=0; c<(SecondoPiano.length-1); c++){
        var fields = SecondoPiano[c].split('?');
        if(fields[1] == aula){
            var Materia = fields[4].split('-');
            for(var durata=fields[2]; durata<fields[3]; durata++){
                if(durata == adesso){
                    document.getElementById("A20" + aula).innerHTML = "A20" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                }
            }
        }
    }   
}
/* POLO A SECONDO PIANO A210 - A224 */
for(var aula=10; aula<25; aula++){
    for(var c=0; c<(SecondoPiano.length-1); c++){
        var fields = SecondoPiano[c].split('?');
        if(fields[1] == aula){
            var Materia = fields[4].split('-');
            for(var durata=fields[2]; durata<fields[3]; durata++){
                if(durata == adesso){
                    document.getElementById("A2" + aula).innerHTML = "A2" + aula + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
                }
            }
        }
    }    
}
/* LABORATORIO SECONDO PIANO */
for(var c=0; c<(SecondoPiano.length-1); c++){
    var fields = SecondoPiano[c].split('?');
    if(fields[1] == 25){
        for(var durata=fields[2]; durata<fields[3]; durata++){
            if(durata == adesso){
                document.getElementById("A225").innerHTML = "A225" + "  -  " + '<font color="darkorange">' + Materia[0] + '</font>';
            }
        }
    }
}      

/* FINE LETTURA DEL FILE */