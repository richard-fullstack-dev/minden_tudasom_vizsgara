import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermekekComponent } from './components/termekek/termekek.component';
import { KosarComponent } from './components/kosar/kosar.component';

const routes: Routes = [
  { path: "", redirectTo: "termekek", pathMatch: "full" },
  { path: "termekek", component: TermekekComponent },
  { path: "kosar", component: KosarComponent },
  { path: "**", redirectTo: "termekek", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
