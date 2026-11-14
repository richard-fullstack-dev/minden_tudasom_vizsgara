import { Component } from '@angular/core';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';
import { KeyValue } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent {
  problem: Problem = new Problem()
	select: string = ""

	constructor(public service: ProblemService) {}

	constant = (): number => { return 0 }

  submit(): void {
		this.service.writeData(this.problem)
		this.problem = new Problem()
	}

	sort(): void {
		this.service.problems$ = this.service.problems$.pipe(

			map(map => Array.from(map.entries())),

			map(entries => entries.sort(([keyA, valueA],[keyB, valueB]) => {
				switch (this.select) {
					case "upAsc": return valueA.upVote - valueB.upVote
					case "upDesc": return valueB.upVote - valueA.upVote
					case "downAsc": return valueA.downVote - valueB.downVote
					case "downDesc": return valueB.downVote - valueA.downVote
					// case "urgent": // TODO: befejezni
					default: return keyA.localeCompare(keyB)
				}
			})),

			map(sortedEntries => new Map(sortedEntries))

		)
	}

	upVote(problem: KeyValue<string, Problem>): void {
		problem.value.upVote++
		this.service.updateData(problem.value, problem.key)
	}

	downVote(problem: KeyValue<string, Problem>): void {
		problem.value.downVote++
		this.service.updateData(problem.value, problem.key)
	}
}
