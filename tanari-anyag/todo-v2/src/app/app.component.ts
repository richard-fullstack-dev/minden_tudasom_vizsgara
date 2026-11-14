import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // newTodo: string = ""
  newTodo2: ToDo = new ToDo()
  todos: ToDo[] = []

  add(): void {
    // let newTodo: ToDo = new ToDo()
    // newTodo.content = this.newTodo
    this.todos.unshift({...this.newTodo2})
    this.newTodo2.content = ""
  }

  formatDate(date: Date): string {
    return date.getHours() + ":" + date.getMinutes()
  }
}

