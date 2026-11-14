import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  dataItems: MyObject[] = []
  constructor() {
    this.dataItems.push(new MyObject("alma", 10))
    this.dataItems.push(new MyObject("körte", 74))
    this.dataItems.push(new MyObject("szilva", 4))
    this.dataItems.push(new MyObject("barack", 3))
    this.dataItems.push(new MyObject("dinnye", 33))
    this.dataItems.push(new MyObject("eper", 18))
  }
  hello(message: MyObject): void {
    console.log(message)
  }
}

export class MyObject {
  content: string = ""
  priority: number = 0
  constructor(content: string = "", priority: number = 0) {
    this.content = content
    this.priority = priority
  }
}