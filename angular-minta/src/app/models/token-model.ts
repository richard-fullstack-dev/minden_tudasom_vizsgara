// MIRE JÓ:   a szervertől VISSZAJÖVŐ válasz alakja (a "karszalag").
// MIKOR:     login feladatnál: http.post<TokenModel>(...)
// ÁTÍRNI:    a mező neve a válasz szerint (token / accessToken / jwt). Nézd meg: console.log(response)
export class TokenModel {
    token: string = ""
}
