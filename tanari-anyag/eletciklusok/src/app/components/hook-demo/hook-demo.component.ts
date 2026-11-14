import { Component } from '@angular/core';
import { LifecycleLogService } from '../../lifecycle-log.service';
import { DemoUser } from '../../demo-user';

@Component({
  selector: 'app-hook-demo',
  templateUrl: './hook-demo.component.html',
  styleUrl: './hook-demo.component.sass'
})
export class HookDemoComponent {
	showChild: boolean = true
	studentName: string = "Anna"
	counter: number = 1
	user: DemoUser = {
		name: "Béla",
		points: 10
	}

	constructor(public logService: LifecycleLogService) {
		this.logService.add(
			"HookDemoComponent",
			"constuctor",
			"A 'szülő' komponens osztálypéldánya létrejött, a service DI-n keresztül megérkezett."
		)
	}

	changeInputValue(): void {
		this.counter++
		this.studentName = `Diák ${this.counter}`

		this.logService.add(
			"HookDemoComponent",
			"event",
			"Új @Input() értéket adtam a gyerek komponensnek."
		)
	}

	mutateObjectWithoutNewReference(): void {
		this.user.points += 5

		this.logService.add(
			"HookDemoComponent",
			"event",
			"A user objektum belső értéke módosult, de maga az objektumreferencia nem cserélődött."
		)
	}

	replaceObjectReference(): void {
		this.user = {
			...this.user,
			points: this.user.points + 10
		}

		this.logService.add(
			"HookDemoComponent",
			"event",
			"A user objektum új referenciát kapott, ez már @Input() változásként is látszik."
		)
	}

	toggleChild(): void {
		this.showChild = !this.showChild

		this.logService.add(
			"HookDemoComponent",
			"event",
			this.showChild
				? "A gyerek komponens újra létrejön."
				: "A gyerek komponens eltűnik, ezért lefut az ngOnDestroy"
		)
	}

	clearLogs(): void {
		this.logService.clear()
	}
}
