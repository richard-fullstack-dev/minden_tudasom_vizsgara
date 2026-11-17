Egyszerű lépésekben magánóráról:
4. feladat colors.scss 4/d rész

Készítsen egy SCSS fájlt, amelyben definiálja a fent említett akcio class-t.
– Félkövér
– Az alapértelmezettnél nagyobb betűméretű
– A betűszín a _colors.scss fájlban definiált kiemeles változó legyen.
– A definiált class legyen része a kimeneti CSS fájlnak.

Kezdet:
Amit feladat ír colors.scss-ba van $kiemeles 

A sajat css-ben (vagy amit a feladat kér) "Készítsen egy css fájlt" a .akcio class-t létrehozom és a sajat cssben fent a @use-val hivatkozom a vizsgán kapott colors.scss fájlra

@use "./_colors" as *;

![alt text](image.png)

Itt az számit a vizsgán hogy a nagy globális fájlból be tudom huzni azt amire szükségem van.

Tagváltozó: 

az osztály adata a .ts fájlban, pl. cim: string = 'Szia'.
Adatkötés (interpolation): a {{ cim }} a HTML-ben, ami a tagváltozó értékét kiírja, és ha az érték változik, a kiírás is vele változik.

Objektum Orientált Programozás: OOP: egységbe zárás

Van egy adott csoport amit létrehozok pl class developer és ennek vannak tulajdonságai dev.name dev.age... ezekre igy tudok osztályszinten hivatkozni
pl Dog name age aztan dog.name és dog.age...

Az extends (kiterjesztett) származtatás egy ősosztályra mutat vissza pl export class Dog extends Animal. Meglévő osztályból új osztály létrehozása.