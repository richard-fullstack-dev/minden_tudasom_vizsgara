import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermekekComponent } from './components/termekek/termekek.component';
import { KosarComponent } from './components/kosar/kosar.component';

registerLocaleData(localeHu)

@NgModule({
  declarations: [AppComponent, TermekekComponent, KosarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
