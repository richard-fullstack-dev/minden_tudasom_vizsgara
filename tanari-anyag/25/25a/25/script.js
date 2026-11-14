class ShopItem{
    name;
    amount;
    unit;
    category;
    id;
    constructor(name, amount, unit, category){
        this.id = crypto.randomUUID();
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.category = category;
    }
}

items = [];
load();
display();

function add(){
    items.push(new ShopItem(
        document.getElementById('inp_name').value,
        parseInt(document.getElementById('inp_amount').value),
        document.getElementById('sel_unit').value,
        document.getElementById('sel_cat').value,
    ));
    display();
}

function display(){
    document.getElementById('ul_result').innerHTML = '';

    items.sort((a,b) => {
        return a.category - b.category;
    });
    
    items.forEach(x => {
        document.getElementById('ul_result').innerHTML += 
        `<li class="list-group-item list-group-item-${getColor(x.category)} d-flex justify-content-between align-items-center">
        <i class="fa-regular fa-circle-check"></i>
        <span>${x.amount} ${x.unit} ${x.name}</span>
        <button onclick="remove('${x.id}')" class="btn btn-sm btn-danger">Törlés</button>
        </li>`;
    });
    save();
}

function remove(id){
    items = items.filter(t => t.id != id);
    display();
}

function load(){
    items = JSON.parse(localStorage.getItem('items') ?? '[]');
}

function save(){
    localStorage.setItem('items', JSON.stringify(items));
}

function getColor(category_number){
    if (category_number == 1){
        return 'warning';
    }
    else if (category_number == 2){
        return 'danger';
    }
    else if (category_number == 3){
        return 'primary';
    }
    else {
        return 'success';
    }
}