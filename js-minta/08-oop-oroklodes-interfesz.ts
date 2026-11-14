// MIRE JÓ:   OOP TypeScriptben: osztály, öröklődés (extends, super, override), interfész (implements),
//            protected mező, getter/setter. A 4 alapelv: egységbezárás, absztrakció (adatrejtés), öröklődés, polimorfizmus.
// MIKOR:     "öröklődés", "leszármazott osztály", "interfész", "felülírja a metódust", "közös ős".
// FUTTATÁS:  tsc 08-oop-oroklodes-interfesz.ts && node 08-oop-oroklodes-interfesz.js
// ÁTÍRNI:    az osztályok és a mezők.

// INTERFÉSZ: szerződés. Aki implementálja, annak MEG KELL valósítania ezeket.
interface IAnimal {
    name: string
    hello(): void
}

// ŐSOSZTÁLY
class Animal implements IAnimal {
    protected id: string = "000-000"       // protected: az osztály és a leszármazottai látják, kívülről nem
    public name: string = ""

    constructor(name: string) {
        this.name = name
    }

    hello(): void { }                      // a leszármazottak felülírják

    // getter/setter: kívülről mezőnek látszik (animal.Id), de lehet benne logika
    public get Id(): string {
        return this.id.toUpperCase()
    }
    public set Id(value: string) {
        if (value.includes('-') && value.split('-')[0].length === 3) {     // ellenőrzés beíráskor
            this.id = value
        }
    }
}

// LESZÁRMAZOTT: extends = örökli az ős mezőit és metódusait
class Dog extends Animal {
    public ownerName: string = ""

    constructor(ownerName: string, name: string) {
        super(name)                        // super(...) = az ős konstruktorát hívja; KÖTELEZŐ az első sor
        this.ownerName = ownerName
    }

    public override hello(): void {        // override = felülírja az ős metódusát
        console.log("szia kutya vagyok: " + this.name)
    }
}

class Cat extends Animal {
    public override hello(): void {
        console.log("szia macska vagyok: " + this.name)
    }
}

// POLIMORFIZMUS: ugyanazon a típuson (IAnimal) keresztül mindegyik a SAJÁT módján szól
let animals: IAnimal[] = [new Dog("Lajos", "Buksi"), new Cat("Cirmi")]
animals.forEach(x => x.hello())

let d = new Dog("Lajos", "Buksi")
d.Id = "abc-123"
console.log(d.Id)                          // ABC-123 (a getter nagybetűssé alakít)
