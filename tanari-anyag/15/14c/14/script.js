const prompt = require("prompt-sync")()


let a = parseInt(prompt('Add meg az A számot: '));

if (a % 2 == 1)
{
    console.log('A megadott szám páratlan!');
}
else if (a == 0)
{
    console.log('A szám nulla');
}
else
{
    console.log('A megadott szám páros!');
}

console.log('Program vége!');

