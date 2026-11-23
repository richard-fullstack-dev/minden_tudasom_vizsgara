# Otthoni saját próbafeladatok vizsgafelkészülésre

3 src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KaveComponent } from './kave/kave.component';
import { SutikComponent } from './sutik/sutik.component';

const routes: Routes = [
  { path: '', component: FooldalComponent },
  { path: 'kave', component: KaveComponent },
  { path: 'sutik', component: SutikComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

src/app/fooldal/fooldal.component.html

```
<p>(a feladat3-tartalom.txt főoldali szövege)</p>
```

src/app/kave/kave.component.html

```
<ul>
  <li>(a feladat3-tartalom.txt kávék listájának 1. sora)</li>
  <li>(a feladat3-tartalom.txt kávék listájának 2. sora)</li>
  <li>(a feladat3-tartalom.txt kávék listájának 3. sora)</li>
</ul>
```

src/app/sutik/sutik.component.html

```
<table class="table">
  <tr>
    <th>(a feladat3-tartalom.txt sütik táblázatának 1. oszlopcíme)</th>
    <th>(a feladat3-tartalom.txt sütik táblázatának 2. oszlopcíme)</th>
  </tr>
  <tr>
    <td>(1. sor 1. adat)</td>
    <td>(1. sor 2. adat)</td>
  </tr>
  <tr>
    <td>(2. sor 1. adat)</td>
    <td>(2. sor 2. adat)</td>
  </tr>
</table>
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
        <a class="nav-link" routerLink="/kave">Kávék</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/sutik">Sütik</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-3">
  <router-outlet></router-outlet>
</div>
```

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KaveComponent } from './kave/kave.component';
import { SutikComponent } from './sutik/sutik.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KaveComponent,
    SutikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

4 src/app/termekajanlo/termekajanlo.component.ts

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-termekajanlo',
  templateUrl: './termekajanlo.component.html',
  styleUrl: './termekajanlo.component.scss'
})
export class TermekajanloComponent {
  @Input() nev: string = '';
  @Input() ar: number = 0;
  @Input() akcio: boolean = false;
}
```

src/app/termekajanlo/termekajanlo.component.html

```
<h3>{{ nev }}</h3>
<p [ngClass]="{ akcio: akcio }">{{ ar }} Ft</p>
```

src/app/termekajanlo/termekajanlo.component.scss

```
@import '../colors';

.akcio {
  font-weight: bold;
  font-size: 1.5em;
  color: $kiemeles;
}
```

src/app/app.component.html

```
<app-termekajanlo nev="Espresso" [ar]="700"></app-termekajanlo>
<app-termekajanlo nev="Latte" [ar]="900"></app-termekajanlo>
<app-termekajanlo nev="Flat white" [ar]="850" [akcio]="true"></app-termekajanlo>
```

src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermekajanloComponent } from './termekajanlo/termekajanlo.component';

@NgModule({
  declarations: [
    AppComponent,
    TermekajanloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
