document.getElementById("text").innerHTML = "<h2>Dnes je krásně.</h2>";
/* Získá ID elementu "text", .innerHTML přepisuje html obsah*/

document.querySelector("h1").style.color = "blue";
/*Vybere selektor a přepíše barvu textu*/

document.querySelector("h1").innerHTML = "<h1>Už je úterý</h1>";
/*Vybere selektor a přepíše text*/

document.getElementById("text2").innerHTML = "<h3>Magie</h3>";
/* Získá ID elementu "text2", .innerHTML přepisuje html obsah*/

let odstavecP = document.getElementById("zmena");
odstavecP.innerText = "<p>Nový odstavec</p>";
