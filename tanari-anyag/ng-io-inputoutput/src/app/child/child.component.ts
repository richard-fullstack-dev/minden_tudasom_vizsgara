import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyObject } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item: MyObject = new MyObject()
  @Output() message: EventEmitter<MyObject> = new EventEmitter<MyObject>()

  childHello(): void {
    this.item.content += " __ !"
    this.message.emit(this.item)
  }
}
