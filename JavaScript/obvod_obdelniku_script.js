function Obvod(a, b){
    let obvodObdel = 2 *a + 2*b;

    console.log(obvodObdel);

    return obvodObdel;
}

Obvod(3, 3);

function Prevod(){
    let m = Obvod(3, 3);
    let cm = m * 100;
    console.log(`Obvod v centimetrech je  ${cm} cm.`);
}

Prevod()
