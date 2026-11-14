import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoIfComponent } from './demo-if/demo-if.component';
import { DemoForComponent } from './demo-for/demo-for.component';
import { DemoSwitchComponent } from './demo-switch/demo-switch.component';
import { DemoDiagramComponent } from './demo-diagram/demo-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoIfComponent,
    DemoForComponent,
    DemoSwitchComponent,
    DemoDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
