/**
 * Ce script gère uniquement la manipulation du DOM ainsi que des fonctions annexes (CONTROLER)
 */



// Fonction annexes -------------------------------------------------------------------------------------------------


$( document ).ready(function() { // Affichage d'nformations dans la console
    var modif = document.lastModified;
    console.log( "Jquery chargé, version " +jQuery.fn.jquery + " Dernière modif:" + modif );
});

function sleep(milliseconds) {var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

// -----------------------------------------------------------------------------------------------------------------

// Fonction de manipulation du DOM -------------------------------------------------------------------------------------------------

sleep(900); // Ecran de chargement en secondes
$('.loading').fadeOut(800); // Cache le loading

$('.main').fadeIn(); // Affiche le premier écran


// Boutons standards:
$( "#menu" ).click(function() {
    $(".categories").animate({"margin-left": '+0vw'});
});
$( "#closemenu" ).click(function() {
    $(".categories").animate({"margin-left": '-45vw'});
});

$(function() {
    function isEmpty(){
        var card = $(".card");
        if(card.length){
            // Do nothing
        }
        else{
            $('.empty').fadeIn(800); // Cache le loading
        }
    }
    function gliss(direction) {

        if(direction == "left"){
            $(".cardplace .tampon-left").last().fadeIn(120);
            $(".cardplace .tampon-right").last().hide();
            $(".cardplace .card").last().delay(300).animate({"margin-left": '-700'}, function () {
              $(this).remove();
                isEmpty();
            });
        }
        if(direction == "right"){
            $(".cardplace .tampon-right").last().fadeIn(120);
            $(".cardplace .tampon-left").last().hide();
            $(".cardplace .card").last().delay(300).animate({"margin-left": '+500'}, function () {
                $(this).remove();
                isEmpty();
            });
        }
    }


    // Au clic --------------------------------------------------------

    $( ".cardplace" ).delegate( "#vote-left", "click", function() {
        gliss("left");
    });
    $( ".cardplace" ).delegate( "#vote-right", "click", function() {
        gliss("right");
    });



    // AU SWAP ---------------------------------------------------------
    $(".card").swipe( {

        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

            if(direction == "left"){
                gliss("left");
            }
            if(direction == "right"){
                gliss("right");
            }
        }
    });

});
