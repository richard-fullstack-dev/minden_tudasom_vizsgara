import { inject, Injectable } from '@angular/core';
import { Problem } from './problem';
import { Database, onValue, push, ref, update } from '@angular/fire/database';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

	problems$: Observable<Map<string, Problem>> = of(new Map())
	path: string = "problems"
	db = inject(Database)

  constructor() {
		this.problems$ = this.readData()
	}

	sort(select: string) {
		this.problems$ = this.problems$.pipe(

			map(map => Array.from(map.entries())),

			map(entries => entries.sort(([keyA, valueA],[keyB, valueB]) => {
				switch (select) {
					case "upAsc": return valueA.upVote - valueB.upVote
					case "upDesc": return valueB.upVote - valueA.upVote
					case "downAsc": return valueA.downVote - valueB.downVote
					case "downDesc": return valueB.downVote - valueA.downVote
					case "urgent": return valueA.urgent === valueB.urgent ? 0 : valueA.urgent ? -1 : 1
					default: return keyA.localeCompare(keyB)
				}
			})),

			map(sortedEntries => new Map(sortedEntries))
		)
	}

	readData(): Observable<Map<string, Problem>> {
		// adat olvasás DB-ből
		const dbRef = ref(this.db, this.path)
		return new Observable(observer => {
			onValue(dbRef, snapshot => {
				const data = snapshot.val()
				let problems = new Map<string, Problem>()
				if (data !== null) {
					Object.entries(data).map(x => {
						problems.set(x[0], Object.assign(new Problem(), x[1]))
					})
				}
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

	updateData(problem: Problem, key: string) {
		const dbRef = ref(this.db, `${this.path}/${key}`)
		update(dbRef, problem)
	}
}
