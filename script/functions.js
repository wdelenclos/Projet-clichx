/**
 * Created by Wladimir on 29/05/2016.
 */

$( document ).ready(function() { // Informations dans la console
    var modif = document.lastModified;
    console.log( "Jquery chargé, version " +jQuery.fn.jquery + " Dernière modif:" + modif );
});


// Functions de Démo ------------------------------------


// Pause pour la démo
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}


