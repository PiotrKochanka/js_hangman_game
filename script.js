var text = "jajko czy kura";

var dlugosc = text.length;

var haslo1 = "";
/* zamiana liter w kreski */

for(var i = 0; i < dlugosc; i++)
{
    if(text[i] == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

/* Alfabet */

var tab = new Array();

tab[1] = "A";
tab[2] = "Ą";
tab[3] = "B";
tab[4] = "C";
tab[5] = "Ć";
tab[6] = "D";
tab[7] = "E";
tab[8] = "Ę";
tab[9] = "F";
tab[10] = "G";
tab[11] = "H";
tab[12] = "I";
tab[13] = "J";
tab[14] = "K";
tab[15] = "L";
tab[16] = "Ł";
tab[17] = "M";
tab[18] = "N";
tab[19] = "Ń";
tab[20] = "O";
tab[21] = "Ó";
tab[22] = "P";
tab[23] = "Q";
tab[24] = "R";
tab[25] = "S";
tab[26] = "Ś";
tab[27] = "T";
tab[28] = "U";
tab[29] = "V";
tab[30] = "W";
tab[31] = "X";
tab[32] = "Y";
tab[33] = "Z";
tab[34] = "Ź";
tab[35] = "Ż";

function wypiszHaslo(){
    var plansza = document.getElementById("text");
    plansza.innerHTML = haslo1;
}

window.onload = start;



function start(){
    var tresc_diva = "";

    for(var i = 0; i <= 34; i++)
    {
        tresc_diva += document.getElementById("alphabet").innerHTML = "<div class=\"litera\">" + tab[i + 1] + "</div>";
    }

    document.getElementById("alphabet").innerHTML = tresc_diva;

    wypiszHaslo();
}