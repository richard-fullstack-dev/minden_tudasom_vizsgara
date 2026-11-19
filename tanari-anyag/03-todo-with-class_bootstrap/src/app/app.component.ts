import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newTodo: ToDo = new ToDo()
  todos: ToDo[] = []

  constructor() {
    this.todos.push(new ToDo("Meg kell etetni a kutyát", true))
    this.todos.push(new ToDo("Be kell vásárolni hétvégére, jön a család"))
    this.todos.push(new ToDo("Csekkeket be kell fizetni"))
  }

  save(): void {
    localStorage.setItem("DB_todos", JSON.stringify(this.todos))
  }

  load(): void {
    this.todos = JSON.parse(localStorage.getItem("DB_todos") ?? "[]").map((x: ToDo) => {
      const todo = Object.assign(new ToDo(), x)
      todo.timeStamp = new Date(x.timeStamp)
      return todo
    })
  }

  countFinishedTodos(): number {
    return this.todos.filter(x => x.done).length
  }

  markTodoAsDone(todo: ToDo): void {
    todo.done = !todo.done
  }

  add(): void {
    if (this.newTodo.content.startsWith('!')) {
      this.newTodo.priority = true
      this.newTodo.content = this.newTodo.content.slice(1)
    }
    this.todos.unshift({ ...this.newTodo })
    this.newTodo.content = ""
    this.newTodo.priority = false
  }

  formatDate(date: Date): string {
    return date.getHours() + ":" + date.getMinutes()
  }
}

