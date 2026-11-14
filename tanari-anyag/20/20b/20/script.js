const prompt = require("prompt-sync")()

class Person{
    name;
    age;
    job;

    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

let people = [];
people.push(new Person('Peter', 30, 'policeman'));
people.push(new Person('Kate', 55, 'manager'));
people.push(new Person('Stephen', 25, 'football player'));
people.push(new Person('Sarah', 40, 'traveller'));

people.forEach(x => {
    console.log(x.name + ' ' + x.age);
})

//legidősebb ember neve
console.log(people.sort((a,b) => b.age - a.age)[0]);






