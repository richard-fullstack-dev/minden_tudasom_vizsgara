const prompt = require("prompt-sync")()

let nums = [10,23,17,5,42,65,37,2];

//elemek bejárása pl. kiírás soronként
nums.forEach(x => console.log(x));

//elemek bejárása és kiírása egy sorban
let text = '';
nums.forEach(x => text += x + ',');
console.log(text);

//tömb összes elemének kiírása a konzolra valamilyen elválasztó jellel
console.log(nums.join(';'));

//tömb összes elemének kiírása a konzolra vesszővel elválasztva
console.log(nums.toString());

//eldöntés tétel: van-e a tömbben 50-nél nagyobb elem?
let t = nums.some(x => x > 50);
console.log(t);

//minden elemre igaz-e, hogy pozitív
let t2 = nums.every(x => x >= 0);
console.log(t2);

//keresett konkrét elem indexének visszaadása
let index = nums.indexOf(17);
console.log(index);

//szerepel-e a tömbben a konkrét elem
let t3 = nums.includes(17);
console.log(t3);

//adott tulajdonságú első elem visszaadása
let value = nums.find(x => x > 40);
console.log(value);

//adott tulajdonságú első elem INDEXÉNEK visszaadása
let index2 = nums.findIndex(x => x > 40);
console.log(index2);

//új tömb létrehozása a régi tömb elemein műveletvégzéssel
let nums2 = nums.map(x => x + 10);
console.log(nums2.toString());

//adott tulajdonságú elemek kiválogatása egy új tömbbe (pl. páros elemek)
let nums3 = nums.filter(x => x % 2 == 0);
console.log(nums3.toString());

//tömb elemeinek összeadása
let sum = nums.reduce((x,y) => x += y);
console.log(sum);

//tömb rendezése növekvő sorrendbe (ALAPBÓL ABC SZERINT RENDEZ SZÁMOKAT IS!)
nums.sort();
console.log(nums.toString());

//tömb rendezése növekvő sorrendbe (szám szerinti rendezési elven)
nums.sort((a,b) => a - b);
console.log(nums.toString());

//tömb csökkenő sorrendbe rendezése
//először rendezzük növekvőbe
nums.sort((a,b) => a - b);
nums = nums.reverse();
console.log(nums.toString());