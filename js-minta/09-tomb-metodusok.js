// MIRE JÓ:   az összes fontos tömbmetódus KONKRÉT példával és a várt eredménnyel (a // után).
// MIKOR:     bármikor, amikor tömbbel dolgozol: hozzáadás, törlés, keresés, szűrés, számolás, rendezés.
// FUTTATÁS:  node 09-tomb-metodusok.js
// SZABÁLY:   forEach / map / filter / find / findIndex / some / every / reduce / sort: a nyíl (=>) előtt az x az ELEM.
const szamok = [4, 8, 15, 16, 23, 42];
const nevek = ["Anna", "Béla", "Csilla"];
const termekek = [
    { nev: "Alma", ar: 300, akcio: false },
    { nev: "Körte", ar: 450, akcio: true },
    { nev: "Szilva", ar: 600, akcio: true },
];

// ---------- HOZZÁADÁS, ELVÉTEL (ezek MÓDOSÍTJÁK a tömböt) ----------
let t = [1, 2, 3];
t.push(4);                         // végére tesz        -> [1, 2, 3, 4]
t.unshift(0);                      // elejére tesz       -> [0, 1, 2, 3, 4]
let utolso = t.pop();              // utolsót elveszi    -> 4        t = [0, 1, 2, 3]
let elso = t.shift();              // elsőt elveszi      -> 0        t = [1, 2, 3]
t.splice(1, 1);                    // 1. helyről 1 elem törlése -> t = [1, 3]
t.splice(1, 0, 2);                 // 1. helyre beszúr (0 törlés) -> t = [1, 2, 3]
console.log("módosítók:", t, utolso, elso);

// ---------- ÚJ TÖMBÖT ADNAK (az eredeti marad) ----------
console.log(szamok.slice(1, 3));                  // [8, 15]   (1. indextől a 3.-ig, a 3. már nincs benne)
console.log(nevek.concat(["Dóra"]));               // ["Anna", "Béla", "Csilla", "Dóra"]
console.log([...nevek, "Dóra"]);                   // ugyanez spread-del
console.log([...szamok].reverse());                // [42, 23, 16, 15, 8, 4] (másolatot fordítunk meg)
console.log([[1, 2], [3]].flat());                 // [1, 2, 3]
console.log(Array.from(new Set([1, 1, 2, 3, 3]))); // [1, 2, 3]  (ismétlődés nélkül)

// ---------- KERESÉS ----------
console.log(nevek.indexOf("Béla"));                // 1   (-1, ha nincs)
console.log(nevek.includes("Dóra"));               // false
console.log(szamok.find(x => x > 15));             // 16  (az első találat ÉRTÉKE, vagy undefined)
console.log(szamok.findIndex(x => x > 15));        // 3   (az első találat HELYE, vagy -1)
console.log(termekek.find(x => x.nev === "Körte")); // { nev: 'Körte', ar: 450, akcio: true }

// ---------- SZŰRÉS, ÁTALAKÍTÁS ----------
console.log(szamok.filter(x => x % 2 === 0));      // [4, 8, 16, 42]   (csak a párosak)
console.log(szamok.map(x => x * 2));               // [8, 16, 30, 32, 46, 84]
console.log(termekek.map(x => x.nev));             // ["Alma", "Körte", "Szilva"]
console.log(termekek.filter(x => x.akcio).map(x => x.nev)); // ["Körte", "Szilva"]   (láncolható)

// ---------- ELDÖNTÉS ----------
console.log(szamok.some(x => x > 40));             // true   (legalább egy elemre igaz)
console.log(szamok.every(x => x > 0));             // true   (minden elemre igaz)
console.log(termekek.every(x => x.akcio));         // false

// ---------- SZÁMOLÁS: reduce ----------
// reduce((eddigi, x) => újEddigi, kezdőérték)
console.log(szamok.reduce((a, x) => a + x, 0));    // 108   (összeg)
console.log(termekek.reduce((a, x) => a + x.ar, 0) / termekek.length); // 450  (átlagár)
console.log(termekek.reduce((a, b) => a.ar > b.ar ? a : b).nev);       // "Szilva" (legdrágább)
console.log(Math.max(...szamok), Math.min(...szamok));                  // 42 4
console.log(termekek.filter(x => x.akcio).length);                      // 2   (hány db akciós)

// ---------- RENDEZÉS ----------
console.log([...szamok].sort((a, b) => b - a));    // [42, 23, 16, 15, 8, 4]  (csökkenő)
console.log([...termekek].sort((a, b) => a.ar - b.ar).map(x => x.nev)); // ["Alma", "Körte", "Szilva"] (ár szerint növekvő)
console.log(["Zita", "Anna", "Béla"].sort());       // ["Anna", "Béla", "Zita"]  (szöveg: ábécé; számnál NEM jó!)
console.log([10, 9, 1].sort());                     // [1, 10, 9]  <- HIBA: számnál mindig kell (a, b) => a - b

// ---------- EGYÉB ----------
console.log(nevek.join(" - "));                     // "Anna - Béla - Csilla"
console.log("a,b,c".split(","));                    // ["a", "b", "c"]
console.log(nevek.length, Array.isArray(nevek));    // 3 true
nevek.forEach((x, i) => console.log(i + ". " + x)); // 0. Anna  1. Béla  2. Csilla   (nem ad vissza semmit)
for (const nev of nevek) console.log(nev);          // for...of: az ELEMEKEN megy végig
