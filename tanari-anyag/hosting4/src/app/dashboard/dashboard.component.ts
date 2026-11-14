import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';
import { KeyValue } from '@angular/common';
import { map, Observable } from 'rxjs';
import { MyAuthService } from '../my-auth.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {

	problem: Problem = new Problem()
	select: string = ""
	isLoggedIn$: Observable<boolean> = new Observable<boolean>()
	currentUser$: Observable<User> = new Observable<User>()
	isAdmin$: Observable<boolean> = new Observable<boolean>()

	constructor(public service: ProblemService, public myAuth: MyAuthService) {}

	ngOnInit(): void {
		this.isLoggedIn$ = this.myAuth.isLoggedInWithGoogle()
		this.myAuth.getCurrentUserFromService().subscribe(loggedInUser => this.problem.author = loggedInUser)
		this.currentUser$ = this.myAuth.getCurrentUserFromService()
		this.isAdmin$ = this.myAuth.isAdmin()
	}

	constant = (): number => { return 0 }

  submit(): void {
		this.service.writeData(this.problem)
		this.problem = new Problem()
	}

	sort(): void {
		this.service.sort(this.select)
	}

	upVote(problem: KeyValue<string, Problem>): void {
		this.myAuth.getCurrentUserFromService().subscribe(user => {
			if (problem.value.voters.find(x => x.email === user.email) === undefined) {
				// még nem szavaztam, tehát érvényes
				problem.value.voters.push(user)
				problem.value.upVote++
				this.service.updateData(problem.value, problem.key)
			}
		})
	}

	downVote(problem: KeyValue<string, Problem>): void {
		this.myAuth.getCurrentUserFromService().subscribe(user => {
			if (problem.value.voters.find(x => x.email === user.email) === undefined) {
				// még nem szavaztam, tehát érvényes
				problem.value.voters.push(user)
				problem.value.downVote++
				this.service.updateData(problem.value, problem.key)
			}
		})
	}

	votedAlreadyForThisProblem(problem: KeyValue<string, Problem>, user: User | null): boolean {
		return problem.value.voters.find(x => x.email === user?.email) !== undefined ? true : false
	}

	markSolved(problem: KeyValue<string, Problem>): void {
		problem.value.solved = true
		this.service.updateData(problem.value, problem.key)
	}
}
