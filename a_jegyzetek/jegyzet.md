//==================== 1. FELADAT ====================

//---------- feladat1/index.html ----------
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bagoly Kávézó</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bagoly Kávézó</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Menü">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#rendeles">Rendelés</a></li>
            <li class="nav-item"><a class="nav-link" href="#arlista">Árlista</a></li>
            <li class="nav-item"><a class="nav-link" href="#galeria">Galéria</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="container my-4">
    <section id="rendeles" class="mb-5">
      <h2>Rendelés</h2>
      <form>
        <div class="row g-3">
          <div class="col-md-6">
            <label for="nev" class="form-label">Név</label>
            <input type="text" class="form-control" id="nev" name="nev" autofocus>
          </div>
          <div class="col-md-6">
            <label for="varos" class="form-label">Város</label>
            <select class="form-select" id="varos" name="varos">
              <option value="Budapest" selected>Budapest</option>
              <option value="Szeged">Szeged</option>
              <option value="Debrecen">Debrecen</option>
            </select>
          </div>
          <div class="col-md-6">
            <span class="form-label d-block">Átvétel módja</span>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="atvetel" id="atvetel-helyben" value="Helyben" checked>
              <label class="form-check-label" for="atvetel-helyben">Helyben</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="atvetel" id="atvetel-futar" value="Futár">
              <label class="form-check-label" for="atvetel-futar">Futár</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="atvetel" id="atvetel-csomagpont" value="Csomagpont">
              <label class="form-check-label" for="atvetel-csomagpont">Csomagpont</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="tejszinhab" name="tejszinhab">
              <label class="form-check-label" for="tejszinhab">Kérek tejszínhabot</label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">Rendelés</button>
          </div>
        </div>
      </form>
    </section>

    <section id="arlista" class="mb-5">
      <h2>Árlista</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Termék</th>
            <th>Méret</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Espresso</td><td>Kicsi</td><td>690 Ft</td></tr>
          <tr><td>Cappuccino</td><td>Közepes</td><td>890 Ft</td></tr>
          <tr><td>Latte</td><td>Nagy</td><td>1090 Ft</td></tr>
          <tr><td>Forró csokoládé</td><td>Közepes</td><td>990 Ft</td></tr>
        </tbody>
      </table>
    </section>

    <section id="galeria" class="mb-5">
      <h2>Galéria</h2>
      <div class="row g-3">
        <div class="col-md-4">
          <img src="https://picsum.photos/400/300?random=1" class="img-fluid" alt="Kávéház belső tere">
        </div>
        <div class="col-md-4">
          <img src="https://picsum.photos/400/300?random=2" class="img-fluid" alt="Egy csésze kávé">
        </div>
        <div class="col-md-4">
          <img src="https://picsum.photos/400/300?random=3" class="img-fluid" alt="Sütemények a pulton">
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">&copy; Bagoly Kávézó</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

//---------- feladat1/style.css ----------
@keyframes th-animacio {
  0% {
    font-size: 1rem;
    color: #000000;
  }
  50% {
    font-size: 1.6rem;
    color: #dc3545;
  }
  100% {
    font-size: 1rem;
    color: #000000;
  }
}

th {
  animation: th-animacio 3s infinite;
}


//==================== 2. FELADAT ====================

//---------- feladat2/script.js ----------
class Rendeles {
  constructor(nev, termek, db, ar) {
    this.nev = nev;
    this.termek = termek;
    this.db = db;
    this.ar = ar;
  }

  osszeg() {
    return this.db * this.ar;
  }
}

function osszesBevetel(lista) {
  return lista.reduce((osszes, rendeles) => osszes + rendeles.osszeg(), 0);
}

function legnagyobbRendeles(lista) {
  if (lista.length === 0) {
    return undefined;
  }
  return lista.reduce((legnagyobb, rendeles) =>
    rendeles.osszeg() > legnagyobb.osszeg() ? rendeles : legnagyobb
  );
}

function torles(lista, nev) {
  return lista.filter((rendeles) => rendeles.nev !== nev);
}

// A 2/c feladat leírása a 2. oldalon folytatódik, ezért a jatt kezelése feltételezés:
// jatt = true/false (10%) vagy százalékos szám
function szamlaosztas(osszeg, fo, jatt) {
  let szazalek = 0;
  if (typeof jatt === 'number') {
    szazalek = jatt;
  } else if (jatt === true) {
    szazalek = 10;
  }
  const vegosszeg = osszeg * (1 + szazalek / 100);
  return Math.round(vegosszeg / fo);
}

if (typeof module !== 'undefined') {
  module.exports = { Rendeles, osszesBevetel, legnagyobbRendeles, torles, szamlaosztas };
}
