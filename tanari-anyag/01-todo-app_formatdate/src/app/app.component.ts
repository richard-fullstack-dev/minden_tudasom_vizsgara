import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: ToDo[] = []

  add(todoInput: HTMLInputElement): void {
    let newTodo: ToDo = new ToDo()
    newTodo.content = todoInput.value

    this.todos.unshift(newTodo)
    todoInput.value = ""
  }

  formatDate(date: Date): string {
    return date.getHours() + ":" + date.getMinutes()
  }
}

class ToDo {
  content: string = ""
  timeStamp: Date = new Date()
}