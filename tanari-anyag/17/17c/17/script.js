const prompt = require("prompt-sync")()

//felhasználónév és jelszó bekérő
let correct_username = 'admin';
let correct_password = 'almafa';

//addig-addig kérjük be a felhasználótól a tippjeit, amíg mindkettőt helyesen nem írja be!

let input_username = '';
let input_password = '';

//while(correct_username != input_username || correct_password != input_password){
while(!(correct_username == input_username && correct_password == input_password)){
    input_username = prompt('Felhasználónév: ');
    input_password = prompt('Jelszó: ');
}

console.log('OK');



