# 02 · Widget paraméterrel (@Input) és SCSS class  (4. feladat, 15 pont)

> **Nyers, összevissza szöveget látsz (`**`, `###`, backtick)?** VS Code-ban nyomd meg: **Ctrl + Shift + V** (szebb, formázott nézet). GitHubon magától szép.

**A feladat szavai:** új komponens konyvajanlo néven, kis-nagybetűs használata, fájlneve, paraméterek: nev string, ar number, akcio bool (opcionális, alapértéke false), név 3-as szintű címsor, ár bekezdés, akcio class, SCSS fájl, félkövér, nagyobb betűméret, _colors.scss kiemeles változó, kimeneti CSS, három példány a fő komponensben.

## Lépések (kb. 10 perc)

1. `ng g c konyvajanlo --skip-tests`  (ez adja: `konyvajanlo.component.ts`, `KonyvajanloComponent`, selector `app-konyvajanlo`: a "keretrendszerben elvárt" elnevezés)
2. `.ts`: `@Input() nev: string = ""`, `@Input() ar: number = 0`, `@Input() akcio: boolean = false`
3. `.html`: `<h3>{{ nev }}</h3>` és `<p [class.akcio]="akcio">{{ ar }} Ft</p>`
4. `.scss`: `@use` a `_colors.scss`-re, majd az `.akcio` class (félkövér, nagyobb betű, `colors.$kiemeles`)
5. a komponens stílusfájlja legyen `.scss`: `styleUrl: './konyvajanlo.component.scss'` (ha CSS-t generált: nevezd át, és írd át a hivatkozást)
6. a fő komponens html-jébe három példány a megadott adatokkal
7. **Teszt:** az akciós ár (A Király Visszatér) félkövér, nagyobb és színes; a másik kettő sima

## A feladatlap mondata → mit írsz

| Mondat | Megoldás |
|---|---|
| "új komponenst konyvajanlo néven" | `ng g c konyvajanlo` |
| "kis-nagybetűs használata, fájlneve feleljen meg a keretrendszerben elvártaknak" | a generátor jó nevet ad, ne nevezd át |
| "nev: string, ar: number" | `@Input() nev: string = ""`, `@Input() ar: number = 0` |
| "akcio: bool ... Opcionális, az alapértéke false" | `@Input() akcio: boolean = false` (az alapérték teszi opcionálissá) |
| "a név 3-as szintű címsorként" | `<h3>{{ nev }}</h3>` |
| "az ár bekezdésként, alapértelmezett formázással" | `<p>{{ ar }} Ft</p>` (nincs extra class/pipe) |
| "ha az akcio true, alkalmazza az ár bekezdésére az akcio class-t" | `<p [class.akcio]="akcio">` |
| "SCSS fájl, amelyben definiálja az akcio class-t" | a komponens `.scss` fájlja |
| "félkövér" | `font-weight: bold;` |
| "az alapértelmezettnél nagyobb betűméretű" | `font-size: 1.4rem;` |
| "a betűszín a _colors.scss ... kiemeles változó" | `@use '../colors';` + `color: colors.$kiemeles;` |
| "a definiált class legyen része a kimeneti CSS fájlnak" | a komponens `.scss`-ében van, az `ng serve` / `ng build` lefordítja |
| "három példányt ... az alábbi adatokkal" | három `<app-konyvajanlo ...>` az `app.component.html`-ben |

## Fájlok (másold a projektedbe)
`src/app/_colors.scss` (ha a váz tartalmazza, ezt NE írd felül), `src/app/konyvajanlo/*`, az `app.component.html` részlete, az `app.module.ts` `declarations` része

## Gyakori hiba
- `@use` hiba -> az út a **fájltól számítva** értendő; keresd meg, hol van a `_colors.scss` (ha az `src/app/` alatt: `'../colors'`, ha az `src/`-ben: `'../../colors'`), az aláhúzás és a `.scss` nélkül
- az `[ar]="2500"` helyett `ar="2500"` -> szöveg lesz belőle (a szám és az igaz/hamis szögletes zárójelet kér)
