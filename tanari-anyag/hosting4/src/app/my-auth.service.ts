import { Injectable } from '@angular/core';
import { User } from './user';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User as FireUser, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

	user$: Observable<FireUser | null>

  constructor(private auth: Auth, private router: Router) {
		this.user$ = user(this.auth)
	}

	isAdmin(): Observable<boolean> {
		return this.user$.pipe(
			map(user => {
				if (user) return user.email === environment.adminEmail
				return false
			})
		)
	}

	getCurrentUserFromService(): Observable<User> {
		return this.user$.pipe(
			map(user => {
				if (user) {
					let u = new User()
					u.displayName = user.displayName!
					u.email = user.email!
					u.photoURL = user.photoURL!
					return u
				} else {
					return new User()
				}
			})
		)
	}

	isLoggedInWithGoogle(): Observable<boolean> {
		return this.user$.pipe(
			map(user => {
				// console.log(user)
				if (user) {
					return user.providerData.some(provider => provider.providerId === "google.com")
				}
				return false
			})
		)
	}

	getCurrentUserFromLocalStorage():  User {
		let u = new User()
		u.displayName = localStorage.getItem("google-user-name")!
		u.email = localStorage.getItem("google-user-email")!
		u.photoURL = localStorage.getItem("google-user-photo")!
		return u
	}

	isLoggedIn(): boolean {
		return localStorage.getItem("google-user-name") !== null &&
		localStorage.getItem("google-user-email") !== null &&
		localStorage.getItem("google-user-photo") !== null
	}

	async loginWithGoogle() {
		const provider = new GoogleAuthProvider()
		await signInWithPopup(this.auth, provider).then(result => {
			// console.log(result)
			localStorage.setItem("google-user-name", result.user.displayName!)
			localStorage.setItem("google-user-email", result.user.email!)
			localStorage.setItem("google-user-photo", result.user.photoURL!)
		})
		await this.router.navigate(["/"])
	}

	async logout() {
		return await signOut(this.auth).then(() => {
			localStorage.removeItem("google-user-name")
			localStorage.removeItem("google-user-email")
			localStorage.removeItem("google-user-photo")
		})
	}
}
