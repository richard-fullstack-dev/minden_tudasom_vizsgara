import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-diagram',
  templateUrl: './demo-diagram.component.html',
  styleUrl: './demo-diagram.component.sass'
})
export class DemoDiagramComponent implements OnInit {
  isReady: boolean = false
  ngOnInit(): void {
    setTimeout(() => {
      this.isReady = true
    }, 3000);
  }
}
