items = [];
load();

function add(){
    let item = document.getElementById('inp').value;
    items.push(item);
    display();
    save();
}

function display(){
    document.getElementById('ul').innerHTML = '';
    items.forEach(x => {
        document.getElementById('ul').innerHTML += 
        `<li>${x}</li>`;
    });
}

function save(){
    //a localstorage items kulcsába
    //JSON formába egy darab stringként beleírja a teljes tömb tartalmát
    localStorage.setItem('items', JSON.stringify(items));
}

function load(){
    //elmegy a localstorage-be és megkeresi az items kulcshoz tartozó értéket
    //ez az érték egy string, amiben JSON formátumban vannak az adatok
    //ha nem talál ilyet, akkor üres tömböt hoz létre
    //ha talál ilyet, akkor a JSON -> tömb átalakítást elvégzi
    items = JSON.parse(localStorage.getItem('items') ?? '[]');
    display();
}

