import { Component } from '@angular/core';
import { Problem } from '../problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent {
  problem: Problem = new Problem()

	constructor(public service: ProblemService) {}

  submit(): void {
		this.service.writeData(this.problem)
		this.problem = new Problem()
	}
}
