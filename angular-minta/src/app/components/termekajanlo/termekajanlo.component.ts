// MIRE JÓ:   újrahasznosítható "widget": kívülről kap adatot (@Input), és megjeleníti.
// MIKOR:     "új komponens paraméterrel", "bárhol elhelyezhető kártya/widget", "opcionális paraméter, alapérték false".
// ÁTÍRNI:    a komponens neve (ng g c termekajanlo -> TermekajanloComponent, selector app-termekajanlo),
//            az @Input-ok nevei/típusai, az alapértékek.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-termekajanlo',
  templateUrl: './termekajanlo.component.html',
  styleUrl: './termekajanlo.component.scss'
})
export class TermekajanloComponent {
  @Input() nev: string = ""             // kötelező jellegű (nincs értelmes alapértéke)
  @Input() ar: number = 0
  @Input() akcio: boolean = false       // OPCIONÁLIS: az alapérték miatt nem kell megadni
}
