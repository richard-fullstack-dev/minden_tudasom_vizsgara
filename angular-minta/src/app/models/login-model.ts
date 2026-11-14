// MIRE JÓ:   a bejelentkezéskor BEKÜLDENDŐ adatok egy csomagban.
// MIKOR:     login feladatnál. Az űrlap ebbe ír: [(ngModel)]="loginModel.username"
// ÁTÍRNI:    a mezők neve azt kövesse, amit a szerver vár (username/password vagy email/password...).
export class LoginModel {
    username: string = ""
    password: string = ""
}
