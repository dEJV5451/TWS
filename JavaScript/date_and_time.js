function zobrazDatum() {
    let datum = Date();

    document.getElementById("demo").innerHTML = datum;
}

document.getElementById("showDate").addEventListener("click", zobrazDatum);
