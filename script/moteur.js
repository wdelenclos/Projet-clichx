/**
 * Created by Wladimir on 26/05/2016.
 */

// MODE DEMO --
sleep(0); // Ecran de chargement en secondes
$('.loading').fadeOut(800); // Cache le loading

$('.main').fadeIn(); // Affiche le premier écran







$(function() {


    function gliss(direction) {

        if(direction == "left"){
            $(".tampon-left").fadeIn(120);
            $(".tampon-right").hide();
            $(".card").delay(300).animate({"margin-left": '-700'}).fadeOut(80);
        }
        if(direction == "right"){
            $(".tampon-right").fadeIn(120);
            $(".tampon-left").hide();
            $(".card").delay(300).animate({"margin-left": '+500'}).fadeOut(80);
        }

    }


    // Au clic --------------------------------------------------------

    $("#vote-left").on( "click", function() {
       gliss("left");
    });
    $("#vote-right").on( "click", function() {
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
