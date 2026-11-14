import { Injectable } from '@angular/core';
import { LifecycleLogEntry } from './lifecycle-log-entry';

@Injectable({
  providedIn: 'root'
})
export class LifecycleLogService {
	private nextId: number = 1
	private entries: LifecycleLogEntry[] = []

	get getEntries(): LifecycleLogEntry[] {
		return this.entries
	}

  add(source: string, hook: string, message: string): void {
		let entry: LifecycleLogEntry = {
			id: this.nextId++,
			time: new Date().toLocaleTimeString(),
			source,
			hook,
			message
		}

		this.entries = [entry, ...this.entries]
		console.log(`[${entry.time}]\n${source} - ${hook}:\n${message}\n\n`)
	}

	clear(): void {
		this.entries = []
	}
}
