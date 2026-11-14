const prompt = require("prompt-sync")()

class Person{
    name;
    age;
    job;
    address;
    constructor(name, age, job, city, street){
        this.name = name;
        this.age = age;
        this.job = job;
        this.address = new Address(city, street);
    }
}

class Address{
    city;
    street;
    constructor(city, street){
        this.city = city;
        this.street = street;
    }
}

people = [];
people.push(new Person('Béla', 44, 'sofőr', 'Budapest', 'Fő'));
people.push(new Person('Eszter', 33, 'tanár', 'Szeged', 'Dob'));
people.push(new Person('Kati', 22, 'szakács', 'Győr', 'Vas'));

let text = JSON.stringify(people);

people2 = JSON.parse(text);
people2.forEach(element => {
    console.log(element.name);
});





