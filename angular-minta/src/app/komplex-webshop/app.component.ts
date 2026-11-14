import { Component } from '@angular/core';
import { KosarService } from './services/kosar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public kosarService: KosarService) { }
}
