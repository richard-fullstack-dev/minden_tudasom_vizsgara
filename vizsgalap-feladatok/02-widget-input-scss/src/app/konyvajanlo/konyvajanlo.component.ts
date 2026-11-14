import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  templateUrl: './konyvajanlo.component.html',
  styleUrl: './konyvajanlo.component.scss'
})
export class KonyvajanloComponent {
  @Input() nev: string = ""
  @Input() ar: number = 0
  @Input() akcio: boolean = false      // opcionális: az alapérték (false) miatt nem kötelező megadni
}
