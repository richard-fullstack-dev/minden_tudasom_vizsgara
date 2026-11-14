const prompt = require("prompt-sync")()

let teljes = parseInt(prompt('Teljes összeg: '));
let fo = parseInt(prompt('Létszám: '));
let jatt = prompt('Legyen-e 15% jatt? igen/nem: ') == 'igen';

let perfo = szetoszto(teljes, fo, jatt);
console.log('Összeg/fő: ' + perfo);

function szetoszto(teljes_osszeg, letszam, legyen_e_jatt){
    if (legyen_e_jatt == true){
        return Math.round((teljes_osszeg * 1.15) / letszam);
    }
    else{
        return teljes_osszeg / letszam;
    }
}

