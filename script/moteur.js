/**
 * Created by Wladimir on 26/05/2016.
 */

// MODE DEMO --
sleep(0); // Ecran de chargement en secondes
$('.loading').fadeOut(800); // Cache le loading

$('.main').fadeIn(); // Affiche le premier écran
affichageDesCartesSwipe();

$(function() {


    function gliss(direction) {

        if(direction == "left"){

            $(".cardplace .tampon-left").last().fadeIn(120);
            $(".cardplace .tampon-right").last().hide();
            $(".cardplace .card").last().delay(300).animate({"margin-left": '-700'}, function () {
              $(this).remove();
            });
        }
        if(direction == "right"){
            $(".cardplace .tampon-right").last().fadeIn(120);
            $(".cardplace .tampon-left").last().hide();
            $(".cardplace .card").last().delay(300).animate({"margin-left": '+500'}, function () {
                $(this).remove();
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

