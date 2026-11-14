class Animal {
    id;
    name;
    category;
    isAdopted;
    constructor(name, category) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.category = category;
        this.isAdopted = false;
    }
}

categoryUlNames = new Map(
    [
        [1, 'ul_dogs'],
        [2, 'ul_cats'],
        [3, 'ul_rabbits']
    ]
);

animals = [];
load();
display();



function add() {
    animals.push(new Animal(
        document.getElementById('inp_name').value,
        parseInt(document.getElementById('sel_cat').value)
    ));
    display();
}


function toogleAdopted(id){
    let current = animals.find(t => t.id == id);
    current.isAdopted = !current.isAdopted;
    save();
    display();
}

function calculateProgress(){
    let count = animals.filter(x => x.isAdopted).length;
    let result = Math.round((count / animals.length) * 100);
    document.getElementById('div_progress').innerText = result + '%';
}

function display() {
    //mindhárom oszlop kiürítése
    document.getElementById('ul_dogs').innerHTML = '';
    document.getElementById('ul_cats').innerHTML = '';
    document.getElementById('ul_rabbits').innerHTML = '';

    animals.forEach(x => {
        document.getElementById(categoryUlNames.get(x.category)).innerHTML +=
            `<li onclick="toogleAdopted('${x.id}')" class="list-group-item"><i class="fa-${x.isAdopted ? 'solid text-danger' : 'regular text-success'} fa-heart"></i> ${x.name}</li>`;
    });


    save();
    calculateProgress();
}


function load() {
    animals = JSON.parse(localStorage.getItem('animals') ?? '[]');
}

function save() {
    localStorage.setItem('animals', JSON.stringify(animals));
}