
let przycisk = document.querySelector("button");
let imie = document.getElementById("imieF");
let nazwisko = document.getElementById("nazwiskoF");
let numer = document.getElementById("numerF");
let dane1 = document.getElementById('name');
let dane2 = document.getElementById('surname');
let dane3 = document.getElementById('phone');
przycisk.onclick= function() {
    dane1.textContent=(imie.value);
    dane2.textContent=(nazwisko.value);
    dane3.textContent=(numer.value);
};
