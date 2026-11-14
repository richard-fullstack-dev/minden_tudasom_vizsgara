import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDemoComponent } from './components/child-demo/child-demo.component';
import { HookDemoComponent } from './components/hook-demo/hook-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildDemoComponent,
    HookDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
