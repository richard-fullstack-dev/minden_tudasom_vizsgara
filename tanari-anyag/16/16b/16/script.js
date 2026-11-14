const prompt = require("prompt-sync")()

//Létrehozunk egy üres tömböt, amibe majd nevek kerülnek a későbbiekben
let names = [];

//Megkérdezzük a felhasználót, hogy hány nevet szeretne eltárolni
let num = parseInt(prompt('Hány nevet fogsz megadni: '));
//Ennyi alkalommal feldobjuk neki azt a kérdést, hogy adja meg a következő (i.) nevet
for(let i = 1; i <= num; i++){
    //A kérdés konkrét feldobása, beleírva, hogy éppen hanyadik nevet kérdezzük
    let name = prompt(i + '.név: ');
    //A felhasználótól kapott nevet elmentjük a tömb következő szabad helyére
    names.push(name);
}

//Kiírjuk a konzolra, hogy "A megadott nevek:"
console.log('A megadott nevek: ');

//Bejárjuk a tömböt úgy, hogy a nulladik (avagy első) indexről indulunk
//Addig megyünk amíg el nem érjük a tömb hosszát (mert a tömb hossza mínusz egyedik elem az utolsó érvényes elem)
//Minden ciklusiterációban eggyel nagyobb tömbindexre lépünk
for(let i = 0; i < names.length; i++){
    //Kiírjuk a names tömb i-edik elemét (4 elemű tömbnél 0..3 az érvényes indexek)
    console.log(names[i]);
}

