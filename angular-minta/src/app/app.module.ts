// MIRE JÓ:   az Angular "alaprajza": itt kell felvenni minden komponenst és modult.
// MIKOR:     minden új komponensnél (ng g c ezt magától megteszi) és ha új modul kell (FormsModule, HttpClientModule).
// ÁTÍRNI:    a declarations lista a saját komponenseidre.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                    // [(ngModel)] miatt
import { HttpClientModule } from '@angular/common/http';         // http.get/post miatt
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';               // forint formázás (currency pipe)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { TermekajanloComponent } from './components/termekajanlo/termekajanlo.component';
import { SzuloComponent } from './components/szulo/szulo.component';
import { GyerekComponent } from './components/gyerek/gyerek.component';
import { KonyvUrlapComponent } from './components/konyv-urlap/konyv-urlap.component';

registerLocaleData(localeHu)

@NgModule({
  declarations: [
    AppComponent, NavComponent, ListComponent, CreateComponent, EditComponent,
    LoginComponent, TermekajanloComponent, SzuloComponent, GyerekComponent, KonyvUrlapComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
