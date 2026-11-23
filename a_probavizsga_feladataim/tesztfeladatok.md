# Otthoni saját próbafeladatok vizsgafelkészülésre

```
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Antikvárium</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Antikvárium</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Menü">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#konyveink">Könyveink</a></li>
            <li class="nav-item"><a class="nav-link" href="#kapcsolat">Kapcsolat</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container my-4">
    <section id="konyveink">
      <h2>Könyveink</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">A Gyűrű Szövetsége</h5>
              <p class="card-text">2500 Ft</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">A Két Torony</h5>
              <p class="card-text">2000 Ft</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">A Király Visszatér <span class="badge bg-danger">AKCIÓ</span></h5>
              <p class="card-text">999 Ft</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="kapcsolat" class="mt-4">
      <h2>Kapcsolat</h2>
      <form>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="nev" class="form-label">Név</label>
            <input type="text" id="nev" name="nev" class="form-control" autofocus>
          </div>
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" id="email" name="email" class="form-control" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="uzenet" class="form-label">Üzenet</label>
            <textarea id="uzenet" name="uzenet" class="form-control" rows="4"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-success">Küldés</button>
      </form>
    </section>
  </main>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">Antikvárium</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

```
body {
  background-color: red;
}

@media (max-width: 992px) {
  body {
    background-color: blue;
  }
}

@media (max-width: 599px) {
  body {
    background-color: green;
  }
}

.card {
  transition: transform 0.5s;
}

.card:hover {
  transform: scale(1.05);
}
```

```
const konyvek = [
  { cim: "A Gyűrű Szövetsége", ar: 2500, akcio: false },
  { cim: "A Két Torony", ar: 2000, akcio: false },
  { cim: "A Király Visszatér", ar: 999, akcio: true },
  { cim: "Dűne", ar: 3200, akcio: true },
  { cim: "Alapítvány", ar: 1800, akcio: false },
];

function atlagar(lista) {
  if (lista.length === 0) {
    return 0;
  }
  let osszeg = 0;
  for (const konyv of lista) {
    osszeg += konyv.ar;
  }
  return Math.round(osszeg / lista.length);
}

function legdragabb(lista) {
  let legdragabbKonyv = lista[0];
  for (const konyv of lista) {
    if (konyv.ar > legdragabbKonyv.ar) {
      legdragabbKonyv = konyv;
    }
  }
  return legdragabbKonyv;
}

function akciosDarab(lista) {
  return lista.filter(konyv => konyv.akcio).length;
}

function keres(lista, szoveg) {
  return lista.filter(konyv => konyv.cim.toLowerCase().includes(szoveg.toLowerCase()));
}

function rendez(lista) {
  return [...lista].sort((a, b) => a.ar - b.ar);
}

function ajandek(lista, osszeg) {
  let talalat = null;
  for (const konyv of lista) {
    if (konyv.ar > osszeg && (talalat === null || konyv.ar < talalat.ar)) {
      talalat = konyv;
    }
  }
  return talalat;
}

function betoltes(szoveg) {
  return JSON.parse(szoveg);
}

function mentes(lista) {
  return JSON.stringify(lista);
}

module.exports = { konyvek, atlagar, legdragabb, akciosDarab, keres, rendez, ajandek, betoltes, mentes };
```
