
// let x: Array<string> = new Array<string>()

export class User {
	name: string = ""
}

export class Tomb<T> {
	items: T[] = []

	berak(elem: T): void {
		this.items.push(elem)
	}

	keres(index: number): T {
		return this.items[index]
	}
}

let t: Tomb<string> = new Tomb<string>()
t.berak("alma")
t.berak("körte")

let t2: Tomb<User> = new Tomb<User>()
t2.berak(new User())
t2.berak(new User())
