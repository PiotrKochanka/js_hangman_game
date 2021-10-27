var text = "jajko czy kura";

var dlugosc = text.length;

var haslo1 = "";
/* zamiana liter w kreski */

for(var i = 0; i < dlugosc; i++)
{
    if(text[i] == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypiszHaslo(){
    var plansza = document.getElementById("text");
    plansza.innerHTML = haslo1;
}

wypiszHaslo();