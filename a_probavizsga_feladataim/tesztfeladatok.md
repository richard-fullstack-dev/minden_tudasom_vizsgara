# Otthoni saját próbafeladatok vizsgafelkészülésre

3 src/app/app.routes.ts

```
import { Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';

export const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'scifi', component: ScifiComponent },
  { path: 'humor', component: HumorComponent },
];
```

src/app/fooldal/fooldal.component.html

```
<p>Üdvözöljük az antikváriumban! Könyvbemutatót szervezünk, ahol régi és új kedvenceinket mutatjuk be a látogatóknak.</p>
```

src/app/scifi/scifi.component.html

```
<ul>
  <li>Dűne</li>
  <li>Alapítvány</li>
  <li>A Marsi</li>
  <li>Neuromancer</li>
  <li>2001: Űrodisszeia</li>
</ul>
```

src/app/humor/humor.component.html

```
<table class="table">
  <tr>
    <th>Cím</th>
    <th>Szerző</th>
  </tr>
  <tr>
    <td>Galaxis útikalauz stopposoknak</td>
    <td>Douglas Adams</td>
  </tr>
  <tr>
    <td>Svejk</td>
    <td>Jaroslav Hašek</td>
  </tr>
  <tr>
    <td>Három ember egy csónakban</td>
    <td>Jerome K. Jerome</td>
  </tr>
  <tr>
    <td>Micimackó</td>
    <td>A. A. Milne</td>
  </tr>
</table>
```

src/app/app.component.ts

```
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
```

src/app/app.component.html

```
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Főoldal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/scifi">Sci-Fi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/humor">Humor</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-3">
  <router-outlet />
</div>
```

4 src/app/konyvajanlo/konyvajanlo.component.ts

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-konyvajanlo',
  standalone: true,
  templateUrl: './konyvajanlo.component.html',
  styleUrl: './konyvajanlo.component.scss'
})
export class KonyvajanloComponent {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}
```

src/app/konyvajanlo/konyvajanlo.component.html

```
<h3>{{ nev }}</h3>
<p [class.akcio]="akcio">{{ ar }} Ft</p>
```

src/app/konyvajanlo/konyvajanlo.component.scss

```
@use '../colors';

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: colors.$kiemeles;
}
```

src/app/app.component.ts

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KonyvajanloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
```

src/app/app.component.html

```
<app-konyvajanlo nev="A Gyűrű Szövetsége" [ar]="2500"></app-konyvajanlo>
<app-konyvajanlo nev="A Két Torony" [ar]="2000"></app-konyvajanlo>
<app-konyvajanlo nev="A Király Visszatér" [ar]="999" [akcio]="true"></app-konyvajanlo>
```
