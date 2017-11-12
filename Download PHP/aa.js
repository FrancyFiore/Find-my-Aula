/*
    var check = document.getElementById('basicXHRButton');
    check.onclick = function(){
  */
function send(){
        alert("Francesco!");
        
        // Loading the jQuery code
        request = new XMLHttpRequest();
        request.open("POST", "https://easyroom.unitn.it/Orario/rooms_call.php", true);
        /*
        request.setRequestHeader('X-Referer', 'https://easyroom.unitn.it/Orario/index.php?sede=E0503&date=08-11-2017&view=rooms&include=rooms&_lang=it&empty_box=0&');
        
        request.setRequestHeader("Origin", "https://easyroom.unitn.it");
        request.setRequestHeader("Access-Control-Request-Origin", "https://easyroom.unitn.it");
        */
        request.send("?form-type=rooms&sede=E0503&date=08-11-2017&_lang=it");
        
        request.onreadystatechange = function() {
            if(request.readyState === 4) { // What does this even mean?
                if(request.status === 200) {
                    console.log(request.responseText);
                    alert("Done using XHR!");
                }
            }
        }
    };


/*easyroom.unitn.it*/