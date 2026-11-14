import { inject, Injectable } from '@angular/core';
import { Problem } from './problem';
import { Database, get, onValue, push, ref, set } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

	problems$: Observable<Problem[]> = of([])
	path: string = "problems"
	db = inject(Database)

  constructor() {
		this.problems$ = this.readData()
	}

	readData(): Observable<Problem[]> { // TODO: rxjs
		// adat olvasás DB-ből
		const dbRef = ref(this.db, this.path)
		return new Observable(observer => {
			onValue(dbRef, snapshot => {
				const data = snapshot.val()
				const problems = data ? Object.keys(data).map(key => {
					let p = new Problem()
					p.key = key
					p.author = data[key].author
					p.title = data[key].title
					p.description = data[key].description
					return p
				}) : []
				observer.next(problems)
			}, error => {
				observer.error(error)
			})
		})
	}

	writeData(problem: Problem) {
		// adat mentése DB-be
		const dbRef = ref(this.db, this.path)
		push(dbRef, problem)
	}
}
