MAPPASTRUKTÚRA
src/
├─ colors.scss                (adott, 4.)
├─ styles.scss                (Bootstrap)
└─ app/
   ├─ app.ts / app.html       (3. nav + 4. + 5. fő komp.)
   ├─ app.routes.ts           (3.)
   ├─ konyv.ts                (5. Konyv osztály)
   ├─ fooldal/  fooldal.ts, fooldal.html   (3.)
   ├─ scifi/    scifi.ts, scifi.html       (3. ul lista)
   ├─ humor/    humor.ts, humor.html       (3. táblázat)
   └─ konyvajanlo/ konyvajanlo.ts, .html, .scss   (4.)

==================== 3. FELADAT ====================
--- app.routes.ts ---
export const routes: Routes = [
  { path: '', component: Fooldal },
  { path: 'scifi', component: Scifi },
  { path: 'humor', component: Humor },
];

--- app.html (imports: Fooldal nem kell, RouterOutlet, RouterLink, RouterLinkActive) ---
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid"><ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Főoldal</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="/scifi" routerLinkActive="active">Sci-Fi</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="/humor" routerLinkActive="active">Humor</a></li>
  </ul></div>
</nav>
<router-outlet />

--- scifi.html ---
<ul><li>…</li></ul>

--- humor.html ---
<table class="table"><tr><th>…</th></tr><tr><td>…</td></tr></table>

--- fooldal.html ---
<p>…</p>

(A tartalom a feladat3-tartalom.txt-ből, a link feliratok az a) alfeladatból.)

==================== 4. FELADAT ====================
--- konyvajanlo.ts ---
@Component({ selector: 'app-konyvajanlo', templateUrl: './konyvajanlo.html', styleUrl: './konyvajanlo.scss' })
export class Konyvajanlo {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}

--- konyvajanlo.html ---
<h3>{{ nev }}</h3>
<p [class.akcio]="akcio">{{ ar }} Ft</p>

--- konyvajanlo.scss (változó nevét a _colors.scss-ből told be) ---
@use '../../colors' as c;
.akcio { font-weight: bold; font-size: 1.5em; color: c.$VALTOZO_NEVE; }

--- app.html (imports: Konyvajanlo) ---
<app-konyvajanlo nev="A Gyűrű Szövetsége" [ar]="2500" [akcio]="false" />
<app-konyvajanlo nev="A Két Torony" [ar]="2000" [akcio]="false" />
<app-konyvajanlo nev="A Király Visszatér" [ar]="999" [akcio]="true" />

==================== 5. FELADAT ====================
--- konyv.ts ---
export class Konyv {
  #cim: string;
  #isbn: string;
  constructor(cim: string, isbn: string) {
    if (!cim || cim.trim() === '') throw new Error('A cím nem lehet üres!');
    if (!/^(\d{10}|\d{13})$/.test(isbn)) throw new Error('Az ISBN 10 vagy 13 számjegy!');
    this.#cim = cim;
    this.#isbn = isbn;
  }
  toString(): string { return `${this.#cim} (${this.#isbn})`; }
}

--- app.ts (imports: FormsModule) ---
cim = '';
isbn = '';
hiba = '';
konyvek: Konyv[] = [];

hozzaad() {
  try {
    this.konyvek.push(new Konyv(this.cim, this.isbn));
    this.cim = '';
    this.isbn = '';
    this.hiba = '';
  } catch (e) {
    this.hiba = (e as Error).message;
  }
}

--- app.html ---
<form (ngSubmit)="hozzaad()">
  <input name="cim" [(ngModel)]="cim">
  <input name="isbn" [(ngModel)]="isbn">
  <button type="submit">Hozzáad</button>
</form>
<p>{{ hiba }}</p>
<ul>
  @for (k of konyvek; track $index) { <li>{{ k.toString() }}</li> }
</ul>

Megjegyzés: régebbi Angularban a fájlok .component.ts/.html/.scss végűek, az osztálynevek ...Component.
