import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    HttpClientModule,
		FormsModule,
		BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'webler-project',
        appId: '1:674092148660:web:b0f462be1e880e9a1934e1',
        databaseURL: 'https://webler-project-default-rtdb.firebaseio.com',
        storageBucket: 'webler-project.firebasestorage.app',
        apiKey: 'AIzaSyCuYWPTUs749KH9GtJV6ALA8Sas0ZM1s7Q',
        authDomain: 'webler-project.firebaseapp.com',
        messagingSenderId: '674092148660'
      }),
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
