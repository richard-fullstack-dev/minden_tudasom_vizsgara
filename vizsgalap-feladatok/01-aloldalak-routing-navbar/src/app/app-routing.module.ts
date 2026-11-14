import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ScifiComponent } from './scifi/scifi.component';
import { HumorComponent } from './humor/humor.component';

const routes: Routes = [
  { path: "", component: FooldalComponent },          // Főoldal ( / )
  { path: "scifi", component: ScifiComponent },       // Sci-Fi ( /scifi )
  { path: "humor", component: HumorComponent },       // Humor ( /humor )
  { path: "**", redirectTo: "", pathMatch: "full" },  // ismeretlen cím -> főoldal (legyen az utolsó)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
