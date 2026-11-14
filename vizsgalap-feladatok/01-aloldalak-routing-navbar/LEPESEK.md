# 01 · Aloldalak, routing, navigációs sáv  (3. feladat, 20 pont)

> **Nyers, összevissza szöveget látsz (`**`, `###`, backtick)?** VS Code-ban nyomd meg: **Ctrl + Shift + V** (szebb, formázott nézet). GitHubon magától szép.

**A feladat szavai:** három aloldal, frontend routing, URL, Főoldal ( / ), Sci-Fi ( /scifi ), Humor ( /humor ), a tartalom a txt fájlban, bekezdés, sorszámozás nélküli lista, táblázat (első sor címsor), vízszintes navigációs sáv, bootstrap, oldal újratöltése nélkül.

## Lépések (kb. 10 perc)

1. `ng g c fooldal --skip-tests`, `ng g c scifi --skip-tests`, `ng g c humor --skip-tests`
2. `app-routing.module.ts`: a három útvonal (`""`, `"scifi"`, `"humor"`), az importok a tetejére
3. `app.component.html`: a Bootstrap navbar `routerLink`-ekkel és a `<router-outlet>`
4. a tartalom a txt-ből: **fooldal** = `<p>`, **scifi** = `<ul><li>`, **humor** = `<table>` (első sor `<th>`)
5. Bootstrap CDN az `src/index.html`-be (ha a váz még nem tartalmazza)
6. **Teszt:** kattints végig a menün: az oldal nem töltődik újra, a három tartalom megjelenik

## A feladatlap mondata → mit írsz

| Mondat | Megoldás |
|---|---|
| "három aloldalt ... frontend routing" | három komponens + `routes` tömb a `app-routing.module.ts`-ben |
| "Főoldal ( / ), Sci-Fi ( /scifi ), Humor ( /humor )" | `path: ""`, `path: "scifi"`, `path: "humor"` |
| "a főoldalt egy bekezdésben" | `<p>szöveg</p>` |
| "a sci-fi oldalt egy sorszámozás nélküli listában" | `<ul><li>...</li></ul>` (az `<ol>` számozott, az NEM jó) |
| "a humor oldalt egy táblázatban (első sor címsor)" | `<table><thead><tr><th>..</th></tr></thead><tbody>..` |
| "vízszintes navigációs sáv, bootstrap segítségével" | `<nav class="navbar navbar-expand bg-body-tertiary">` + `nav-link` |
| "a linkek pontos megnevezése az a) részben" | a linkek szövege: **Főoldal**, **Sci-Fi**, **Humor** (pontosan így) |
| "az oldal újratöltése nélkül" | `routerLink="/scifi"` (NEM `href`!) |

## A tartalom fájl

A `feladat3-tartalom.txt` ebben a mappában van (MINTA: kitalált tartalom a gyakorláshoz). A vizsgán a váz mellett kapod meg: nyisd meg, és a **FŐOLDAL** részt `<p>`-be, a **SCI-FI** sorait `<ul><li>`-ba, a **HUMOR** sorait `<table>`-be másold (az első sor a táblázat címsora).

## Fájlok ebben a mappában (másold a projektedbe ugyanarra a helyre)

`src/index.html`, `src/app/app.module.ts`, `src/app/app-routing.module.ts`, `src/app/app.component.html` (+ `app.component.ts`, ha nincs), `src/app/fooldal|scifi|humor/*`

## Gyakori hiba
- `is not a known element` -> a komponens nincs az `app.module.ts` `declarations`-ben (a `ng g c` felveszi, kézzel másolt fájlnál nem)
- a link újratölti az oldalt -> `href` van `routerLink` helyett
- üres oldal -> hiányzik a `<router-outlet></router-outlet>` az `app.component.html`-ből
