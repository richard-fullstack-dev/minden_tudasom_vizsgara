// MIRE JÓ:   programozási tételek tömbökön: sorozatszámítás (összeg/átlag), eldöntés, megszámlálás, keresés,
//            min/max kiválasztás, kiválogatás, rendezés. Mindegyik KÉTFÉLEKÉPPEN: kézi ciklussal ÉS egysorosan.
// MIKOR:     "számolja meg hány...", "van-e olyan...", "hanyadik helyen van...", "legnagyobb / legkisebb",
//            "válogassa ki...", "az osztály átlaga", "igaz-e, hogy mindenki...".
// FUTTATÁS:  node 05-programozasi-tetelek.js
// ÁTÍRNI:    a tömb, a feltétel (x > 50), a függvény neve.
let nums = [10, 23, 17, 5, 42, 65, 37, 2];

// --- SOROZATSZÁMÍTÁS: összeg és átlag -------------------------------------------------------
function osszeg(t) {
    let s = 0;                               // az összeg kezdőértéke 0
    for (let i = 0; i < t.length; i++) {     // végigmegyünk a tömbön
        s += t[i];
    }
    return s;
}
let atlag = osszeg(nums) / nums.length;
let atlag2 = nums.reduce((a, x) => a + x, 0) / nums.length;     // egysorosan

// --- ELDÖNTÉS: van-e olyan elem / igaz-e mindenre ---------------------------------------------
let vanNagyobbMint50 = nums.some(x => x > 50);       // legalább egy elemre igaz
let mindenPozitiv = nums.every(x => x >= 0);         // minden elemre igaz

// --- MEGSZÁMLÁLÁS: hány elemre igaz a feltétel ----------------------------------------------
function hanyDarabKisebbMint(t, hatar) {
    let db = 0;                              // a számláló kezdőértéke 0
    t.forEach(x => {
        if (x < hatar) {
            db++;                            // minden találatnál eggyel több
        }
    });
    return db;
}
let db2 = nums.filter(x => x < 20).length;           // egysorosan: szűrés, majd a darabszám

// --- LINEÁRIS KERESÉS: hol van a keresett elem? (-1 = nincs) -------------------------------
function hol(t, keresett) {
    let index = -1;                          // kezdetben feltételezzük, hogy nincs benne
    for (let i = 0; i < t.length; i++) {
        if (t[i] === keresett) {
            index = i;
            break;                           // megtaláltuk, nem kell tovább
        }
    }
    return index;
}
let hely = nums.indexOf(17);                         // egysorosan (egyszerű értéknél)
let elem = nums.find(x => x > 40);                   // az első találat ÉRTÉKE (vagy undefined)
let helye = nums.findIndex(x => x > 40);             // az első találat HELYE (vagy -1)

// --- MAXIMUMKIVÁLASZTÁS: legnagyobb elem értéke és helye ---------------------------------------
function maximumHelye(t) {
    let maxIndex = 0;                        // az első az "eddigi legnagyobb"
    for (let i = 1; i < t.length; i++) {
        if (t[i] > t[maxIndex]) {            // ha találunk nagyobbat, cserélünk
            maxIndex = i;
        }
    }
    return maxIndex;
}
let maximum = Math.max(...nums);                     // egysorosan az érték (a ... szétteríti a tömböt)
let minimum = Math.min(...nums);

// --- KIVÁLOGATÁS: azok az elemek, amikre igaz a feltétel -----------------------------------------
let nagyok = nums.filter(x => x > 20);               // új tömb a megfelelőkből

// --- RENDEZÉS ---------------------------------------------------------------------------------------
let novekvo = [...nums].sort((a, b) => a - b);       // [...nums] = másolat, hogy az eredeti ne változzon
let csokkeno = [...nums].sort((a, b) => b - a);
let forditva = [...nums].reverse();

// --- CIKLUSOK ---------------------------------------------------------------------------------------
let i = 0;
while (i < 3) {                                      // addig ismétel, amíg a feltétel igaz
    i++;
}
do {                                                 // legalább egyszer lefut, a feltételt UTÁNA nézi
    i--;
} while (i > 0);
for (const x of nums) {                              // for...of: az ELEMEKEN megy végig
    if (x > 60) console.log("nagy elem:", x);
}

console.log("összeg", osszeg(nums), "átlag", atlag, atlag2);
console.log("van >50:", vanNagyobbMint50, "mind pozitív:", mindenPozitiv);
console.log("20-nál kisebb:", hanyDarabKisebbMint(nums, 20), db2);
console.log("17 helye:", hol(nums, 17), hely, "| első >40:", elem, "helye:", helye);
console.log("max helye:", maximumHelye(nums), "max:", maximum, "min:", minimum);
console.log("20-nál nagyobbak:", nagyok.join(","));
console.log("növekvő:", novekvo.join(","), "| csökkenő:", csokkeno.join(","), "| fordítva:", forditva.join(","));
