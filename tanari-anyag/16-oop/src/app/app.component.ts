import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
	constructor() {
		let x: XYZ = {
			lorem: "...",
			ipsum: 444,
		}

		let animals: IAnimal[] = []

		animals.push(new Dog("Lajos", "Buksi"))
		animals.push(new Dog("Ferenc", "Mizse"))
		animals.push(new Cat("Cirmi"))
		animals.push(new SiamiCat("Siamiau"))

		console.log(animals)
		console.log("\n\n")

		animals.forEach(x => {
			x.hello()
		})
	}
}

export interface IAnimal {
	lorem: string
	ipsum: number
	hello(): void
}

export class Animal implements IAnimal {
	lorem: string = ""
	ipsum: number = 0
	protected id: string = "000-000"
	public name: string = ""
	public age: number = 0

	constructor(name: string) {
		this.name = name
	}

	hello(): void { }

	public get Id() : string {
		return this.id.toUpperCase()
	}
	public set Id(value : string) {
		if (value.includes('-') && value.split('-')[0].length === 3) {
			this.id = value;
		}
	}

}

export class Dog extends Animal {
	public ownerName: string = ""

	constructor(ownerName: string, name: string) {
		super(name)
		this.ownerName = ownerName
	}

	public override hello(): void {
		console.log("szia kutya vagyok : " + this.name)
	}
}

export class Cat extends Animal {
	public lives: number = 9

	constructor(name: string) {
		super(name)
	}

	public override hello(): void {
		console.log("szia macska vagyok : " + this.name)
	}
}

export class SiamiCat extends Cat {
	public something: string = ""

	public override hello(): void {
		console.log("szia sziámi macska vagyok : " + this.name)
	}
}


export interface ICat {
	someNewProperty: string
	meow(): void
}

export interface IDog {
	bark(): void
}

export class Hibrid implements ICat, IDog {
	someNewProperty: string = ""
	meow(): void { }
	bark(): void { }
}

export class XY implements ICat {
	someNewProperty: string = ""
	meow(): void {
		throw new Error('Method not implemented.');
	}
}

export interface XYZ {
	lorem: string
	ipsum: number
}