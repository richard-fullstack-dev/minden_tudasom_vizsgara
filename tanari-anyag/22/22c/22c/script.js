class Todo {
    todoName;   //string
    todoDuration;  //number
    isActive;  //boolean
    deadline; //Date típusú objektum

    constructor(todoName, todoDuration, deadline_text) {
        this.todoName = todoName;
        this.todoDuration = todoDuration;
        this.deadline = new Date(deadline_text);
        this.isActive = true;
    }
}

todos = [];
load();
display();


function checkExists() {
    //ez a függvény megnézi, hogy a teendő neve input mezőbe írt teendő név
    //szerepel-e már a tömbben
    //ha szerepel, akkor igazat ad vissza
    //ha a find függvény nem undefined-ot ad vissza, akkor van ilyen elemünk már
    let result = todos.find(t => t.todoName == document.getElementById('inp_name').value) != undefined;
    //result == logikai változó, igaz vagy hamis
    if (result) {
        //ha nem rakható be, akkor
        //input mezőt invalidra színezi (piros)
        document.getElementById('inp_name').className = 'form-control is-invalid';
        //nyomógombot letiltja
        document.getElementById('btn_add').disabled = true;
    }
    else {
        //ha berakható, akkor
        //input mezőt validra színezi (zöld)
        document.getElementById('inp_name').className = 'form-control is-valid';
        //nyomógombot kattinthatóvá teszi
        document.getElementById('btn_add').disabled = false;
    }
    return result;
}

function addTodo() {
    //ez a függvény elmenti a teendőt a todos tömbbe
    //először megnézzük, hogy van-e már ilyen nevű teendő
    if (!checkExists()) {
        //a teendő adataid az input mezőkből szedi ki
        let t = new Todo(
            document.getElementById('inp_name').value,
            parseInt(document.getElementById('inp_duration').value),
            document.getElementById('inp_deadline').value
        );
        todos.push(t);
        display();
    }
    else {
        alert('Van már ilyen nevű elem!');
    }
    document.getElementById('inp_name').value = '';
    document.getElementById('inp_duration').value = '';
    document.getElementById('inp_deadline').value = '';
    save();
}

function formatIsInNear(deadline){
    //deadline az egy date típus
    //getTime visszaadja a 1970.01.01 00:00:00 óta eltelt ms-ok számát
    let diff = deadline.getTime() - new Date().getTime();
    //diff jelentése: két dátum közti időkülönbség milliszekundumban
    //millisecundum: 1 másodperc == 1000 ms
    //ha a diff kisebb mint 2 nap, akkor formázott classal térünk vissza
    if (diff <= 1000*60*60*48){ //2 nap = 172 800 000 ms
        return 'badge bg-danger';
    }
    else{
        return 'badge bg-secondary';
    }
}

function getRemainingHours(deadline){
    //a határidőig hátralévő egész órák számát adja vissza
    let diff = deadline.getTime() - new Date().getTime();
    return Math.round(diff/1000/60/60);
}

function display() {
    //ez a függvény konkrétan a tömböt szétválasztja két tömbre
    //első tömb: a még aktív teendők
    //második tömb: a már nem aktív teendők
    let todos_active = todos.filter(t => t.isActive);
    let todos_inactive = todos.filter(t => !t.isActive);

    //a bal oldali hasábot töröljük
    document.getElementById('ul_active').innerHTML = '';
    //a jobb oldali hasábot töröljük
    document.getElementById('ul_inactive').innerHTML = '';

    //ezután a todos_active tömb elemeit a bal hasábba rajzoljuk
    //a foreach végiglépked minden teendőn és egy teendőt az x jelképez
    console.log(todos);
    todos_active.forEach(x => {
        document.getElementById('ul_active').innerHTML +=
            `
                    <li onclick="finishTodo('${x.todoName}')" class="list-group-item d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fw-bold"><i class="fa-regular fa-note-sticky"></i> ${x.todoName}</div>
                            <span class="${formatIsInNear(x.deadline)}">${x.deadline.toLocaleDateString('hu-HU')} ${x.deadline.toLocaleTimeString('hu-HU')}</span>
                            <span class="badge rounded-pill bg-warning text-dark">${getRemainingHours(x.deadline)} óra maradt</span>
                        </div>
                        <span class="badge bg-primary rounded-pill">${x.todoDuration} óra</span>
                    </li>
                `;
    });
    //és a todos_inactive tömb elemeit a jobb hasábba rajzoljuk
    todos_inactive.forEach(x => {
        document.getElementById('ul_inactive').innerHTML +=
            `
                    <li onclick="finishTodo('${x.todoName}')" class="list-group-item d-flex justify-content-between align-items-start">
                        <div>
                            <div class="fw-bold"><i class="fa-regular fa-square-check"></i> ${x.todoName}</div>
                            <span class="badge bg-success">${x.deadline.toLocaleDateString('hu-HU')} ${x.deadline.toLocaleTimeString('hu-HU')}</span>
                        </div>
                        <span class="badge bg-primary rounded-pill">${x.todoDuration} óra</span>
                    </li>
                `;
    });
    calculateProgress();
    createDownloadLink(todos, 'todos.json', 'dwn');
}

function finishTodo(searchedTodoName) {
    //egy adott teendőt készre jelöl (inaktívvá tesz)
    //kikeressük a todos tömbből a megadott nevű todo-t
    let result = todos.find(t => t.todoName == searchedTodoName && t.isActive);
    //a megtalált todo-t inaktívvá tesszük
    result.isActive = false;
    //utána frissítjük a felületen a hasábokat
    display();
    save();
}

function calculateProgress(){
    //százalékos előrehaladás kiszámolása
    //total time == összes idő
    let total_time = 0;
    todos.forEach(x => {
        total_time += x.todoDuration;
    })

    //még nem megcsinált todo-k összideje
    let active_time = 0;
    todos.filter(x => x.isActive).forEach(x => {
        active_time += x.todoDuration;
    })

    //végrehajtott todo-k összideje
    let inactive_time = 0;
    todos.filter(x => !x.isActive).forEach(x => {
        inactive_time += x.todoDuration;
    })

    //ezeket kiszámoljuk %-os formában 0..100 közti egész számként
    let active_progress = Math.round((active_time / total_time) * 100);
    let inactive_progress = Math.round((inactive_time / total_time) * 100);

    //a progressbarok width stílusleírójába beleírjuk egy %jel társaságában
    document.getElementById('pb_active').style.width = active_progress + '%';
    document.getElementById('pb_inactive').style.width = inactive_progress + '%';

    //a h6-os címsorokba beírjuk az óraszámokat
    document.getElementById('h6_active').innerText = 'Hátralévő órák száma: ' + active_time;
    document.getElementById('h6_inactive').innerText = 'Teljesített órák száma: ' + inactive_time;

    document.getElementById('dots_active').innerHTML = '';
    document.getElementById('dots_inactive').innerHTML = '';

    for(let i = 1; i <= active_time; i++){
        document.getElementById('dots_active').innerHTML += 
        '<span class="badge rounded-pill bg-danger m-1">&nbsp;</span>';
    }

    for(let i = 1; i <= inactive_time; i++){
        document.getElementById('dots_inactive').innerHTML += 
        '<span class="badge rounded-pill bg-success m-1">&nbsp;</span>';
    }
}

//save, load, createDownloadLink, upload függvényeket nem kell érteni!
//ezek mindig ugyanígy vannak...

function save(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function load(){
    todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    //ha van az osztályunkban további osztály
    //márpedig van: todo osztályban van date osztály
    //akkor a belső osztályt stringről vissza kell alakítani
    //ez általában a date típusnál fog előjönni
    todos.forEach(x => {
        x.deadline = new Date(x.deadline);
    });
}

function createDownloadLink(array, filename, button_id){
    let text = JSON.stringify(array);
    let dwn = document.getElementById(button_id);
    dwn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    dwn.setAttribute('download', filename);
}

function upload(event){
    let file = event.target.files[0];
    file.text().then(x => {
        todos = JSON.parse(x);
        todos.forEach(x => {
            x.deadline = new Date(x.deadline);
        });
        display();
        save();
    });
}