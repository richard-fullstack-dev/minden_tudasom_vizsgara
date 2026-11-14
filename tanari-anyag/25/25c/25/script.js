class Contact{
    name;
    phone;
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }
}

contacts = [];
load();
display();

function add(){
    contacts.push(new Contact(
        document.getElementById('inp_name').value,
        phoneFormatter(document.getElementById('inp_phone').value),
    ));
    display();
}

function display(){
    document.getElementById('tbody').innerHTML = '';
    contacts.forEach(x => {
        document.getElementById('tbody').innerHTML += 
        `<tr><td>${x.name}</td><td>${x.phone}</td></tr>`;
    });
    save();
}

function load(){
    contacts = JSON.parse(localStorage.getItem('contacts') ?? '[]');
}

function save(){
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function phoneFormatter(oldvalue){
    let newvalue = oldvalue
        .replaceAll(' ', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll('+', '')
        .replaceAll('/', '')
        .replaceAll('-', '');
    if (newvalue[0] == '0'){
        newvalue = '+36' + newvalue.substring(2);
    }
    else if (newvalue[0] == '3'){
        newvalue = '+' + newvalue;
    }
    return newvalue;
}