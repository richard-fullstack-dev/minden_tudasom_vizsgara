import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DemoUser } from '../../demo-user';
import { LifecycleLogService } from '../../lifecycle-log.service';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrl: './child-demo.component.sass'
})
export class ChildDemoComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
	@Input() studentName = ""
	@Input() user!: DemoUser

	createdAt: string = new Date().toLocaleTimeString()
	timerValue: number = 0
	doCheckCounter: number = 0
	private previousUserPoints = 0
	private intervalId: ReturnType<typeof setInterval> | null = null

	constructor(private logService: LifecycleLogService) {
		this.logService.add(
			"ChildDemoComponent",
			"constructor",
			"Az osztálypéldány létrejött. @Input értékek itt még nem megbízhatóan használhatók."
		)
	}

	ngDoCheck(): void {
		this.doCheckCounter++

		if (this.user && this.user.points !== this.previousUserPoints) {
			this.logService.add(
				"ChildDemoComponent",
				"ngDoCheck",
				`Egyedi ellenőrzés észrevette a user.points változását: ${this.previousUserPoints} -> ${this.user.points}`
			)

			this.previousUserPoints = this.user.points
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		let changedInputs = Object.keys(changes).join(', ')

		this.logService.add(
			"ChildDemoComponent",
			"ngOnChanges",
			`Megváltozott @Input mezők: ${changedInputs}. Ez az ngOnInit előtt is lefut az első input átadáskor.`
		)
	}

	ngOnDestroy(): void {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId)
		}
		this.logService.add(
			"ChildDemoComponent",
			"ngOnDestroy",
			"A komponens megszűnik, az időzítő törölve lett."
		)
	}

	ngOnInit(): void {
		this.previousUserPoints = this.user.points

		this.intervalId = setInterval(() => {
			this.timerValue++
		}, 1000)

		this.logService.add(
			"ChildDemoComponent",
			"ngOnInit",
			"Kezdő adatok beállítása és időzítő indítása megtörtént."
		)
	}
}
