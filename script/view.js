/**
 * Ce code contient les fonctions de génération en front ( VIEW ).
 */



// Moteur de génération
function generateurCartes(){
    var stock = localStorage.getItem('cliches');
    var carte = JSON.parse(stock);

    for (var i = 0; i < carte.length; i++){
        var strVar="";

        strVar += "<div class=\"card \" id=\"'cardn"+i+"\">";
        strVar += "<div class=\"tampon\">";
        strVar += "<img class=\"tampon-right\" src=\"styles\/img\/right.png\" alt=\"Cliché\">";
        strVar += "<img class=\"tampon-left\" src=\"styles\/img\/left.png\" alt=\"Je Passe\">";
        strVar += "<\/div>";
        strVar += "";
        strVar += "<img class=\"quote\" src=\"styles\/img\/quote1.png\" alt=\"quote\">";
        strVar += "<h3>" + carte[i].quote +"<\/h3>";
        strVar += "<img class=\"quote quote2\" src=\"styles\/img\/quote2.png\" alt=\"quote\">";
        strVar += "<div class=\"infos\">" + carte[i].author +"<span class=\"nbcliche\">"+ carte[i].nbvote+"<\/span><img src=\"styles\/img\/checked.png\"";
        strVar += "                                                                              alt=\"clichés\"><\/div>";
        strVar += "";
        strVar += "";
        strVar += "<div class=\"categorie\">";
        strVar += "<p>";
        for (var j = 0; j < carte[i].categories.length; j++ ){
            strVar += "<small>" + carte[i].categories[j] +"<\/small>";
        }
        strVar += "</p>";
        strVar += "<\/div>";
        strVar += "<div class=\"vote\">";
        strVar += "<button id=\"vote-left\">Je passe<\/button>";
        strVar += "<button id=\"vote-right\">Cliché<\/button>";
        strVar += "<\/div>";
        strVar += "<\/div>";

        $(".cardplace").append(strVar);

    }
}
generateurCartes();
