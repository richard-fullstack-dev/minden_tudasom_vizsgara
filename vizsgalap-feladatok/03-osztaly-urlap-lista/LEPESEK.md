# 03 · Osztály privát mezőkkel, ellenőrzés, űrlap, lista  (5. feladat, 20 pont)

> **Nyers, összevissza szöveget látsz (`**`, `###`, backtick)?** VS Code-ban nyomd meg: **Ctrl + Shift + V** (szebb, formázott nézet). GitHubon magától szép.

**A feladat szavai:** űrlap már elkészült, de nem funkcionális, tegye interaktívvá, adatszerkezet, Konyv osztály, két privát tagváltozó #cim #isbn, konstruktor ellenőrzi, a cím nem lehet üres, ISBN pontosan 10 vagy 13 számjegy, kivétellel jelezze, toString Cím (ISBN), fő komponens lista, új adat a lista végéhez, a formot ürítse.

## Lépések (kb. 15 perc)

1. **Osztály** (`konyv.ts`): `#cim`, `#isbn`, a konstruktorban sorban az ellenőrzések (`throw new Error(...)`), a végén beírás, `toString()`
2. `app.module.ts`: `FormsModule` az `imports`-ban
3. **Fő komponens** (`app.component.ts`): `cim`, `isbn` (az űrlap mezői), `konyvek: Konyv[] = []`, `add()` metódus `try / catch`-csel
4. **Űrlap** (`app.component.html`): a kész űrlap mezőire `[(ngModel)]="cim"` és `[(ngModel)]="isbn"`, a gombra `(click)="add()"`, alá a lista `*ngFor`-ral
5. **Teszt:** írj be érvényes adatot -> bekerül a lista végére, az űrlap kiürül; üres cím vagy rossz ISBN -> a lista nem változik, az űrlap sem ürül

## A feladatlap mondata → mit írsz

| Mondat | Megoldás |
|---|---|
| "Készítse el a Konyv osztályt" | `export class Konyv { ... }` a `konyv.ts` fájlban |
| "két privát tagváltozó: #cim: szöveg, #isbn: szöveg" | `#cim: string` és `#isbn: string` (a `#` a valódi privát jel) |
| "a címnek üresnek kell lennie" (a fotón így olvasható, értelme szerint **nem** lehet üres; ha kétséged van, a teszt fájl mutatja) | `if (cim.trim().length === 0) throw new Error("...")` |
| "az ISBN pontosan 10 vagy 13 számjegy karakterből álljon" | `if (isbn.length !== 10 && isbn.length !== 13) throw ...` és a számjegy-ellenőrzés |
| "hibás paraméterek esetén kivétellel jelezze" | `throw new Error("üzenet")` |
| "toString metódus, Cím (ISBN) formában" | ``return `${this.#cim} (${this.#isbn})` `` |
| "az oldal fő komponensét egészítse ki, hogy képes legyen a lista tárolására" | `konyvek: Konyv[] = []` az `AppComponent`-ben |
| "a form kitöltésével a lista végéhez ... új adat" | `this.konyvek.push(new Konyv(this.cim, this.isbn))` |
| "új könyv hozzáadásakor a formot ürítse" | `this.cim = ""; this.isbn = ""` a `push` UTÁN (siker esetén) |

## Fájlok (másold a projektedbe)
`src/app/konyv.ts`, `src/app/app.component.ts`, `src/app/app.component.html`, az `app.module.ts` `FormsModule` sora

## Gyakori hiba
- `Can't bind to 'ngModel'` -> `FormsModule` hiányzik az `app.module.ts`-ből
- az űrlap hibás adatnál is kiürül -> az ürítés a `push` ELŐTT van (a `try`-on belül, a `push` után legyen)
- a `#cim` nem látszik kívülről: ez a cél; ha a lista elemeit kiírod, a `toString()`-et használd (`{{ k.toString() }}`)
