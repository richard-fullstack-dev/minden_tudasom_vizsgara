// MIRE JÓ:   az URL és a komponens összepárosítása.
// MIKOR:     "három aloldal", "navigáció routinggal", "szerkesztő oldal paraméterrel".
// ÁTÍRNI:    a path-ok és a komponensek. A "**" (bármi más) MINDIG az utolsó legyen.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { SzuloComponent } from './components/szulo/szulo.component';
import { KonyvUrlapComponent } from './components/konyv-urlap/konyv-urlap.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },    // üres cím -> átirányítás a listára
  { path: "list", component: ListComponent },
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },         // :id = paraméter (az edit komponens olvassa ki)
  { path: "login", component: LoginComponent },
  { path: "szulo", component: SzuloComponent },
  { path: "konyvek", component: KonyvUrlapComponent },
  { path: "**", redirectTo: "list", pathMatch: "full" },  // ismeretlen cím -> lista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
