import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAuthService } from './my-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
	isLoggedIn$: Observable<boolean> = new Observable<boolean>()

	constructor(public myAuth: MyAuthService) {}

	ngOnInit(): void {
		this.isLoggedIn$ = this.myAuth.isLoggedInWithGoogle()
	}
}
