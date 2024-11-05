import { fetchComponent } from './fetch.js';
import { createTable } from './table.js';

let confTipologie = [];
let prenotazioni = [[], [], [], [], []];
let current;
const cardiologia = document.querySelector("#Cardiologia");
const oncologia = document.querySelector("#Oncologia");
const psicologia = document.querySelector("#Psicologia");
const ortopedia = document.querySelector("#Ortopedia");
const neurologia = document.querySelector("#Neurologia");
const prenotaButton = document.querySelector("#prenotaButton");
const idNominativo = document.querySelector("#idNominativo");
const f = document.querySelector("#f");
const d = document.querySelector("#d");


const componenteFetch = fetchComponent();
const table = createTable(document.querySelector("#tabelle"));

fetch("./config.json")
.then(r => r.json())
.then(data => {
    let conf = data;
    componenteFetch.build(conf["cacheToken"]);
});

function aggiornaTabella() {
    table.build(prenotazioni[current]);
    table.render();
}

prenotaButton.onclick = () => {
    let data = {
        "giorno": d.value,
        "nome": idNominativo.value,
        "ora": parseInt(f.value, 10)
    };
    
    if (current !== undefined) {
        prenotazioni[current].push(data);
        componenteFetch.setData("pren", prenotazioni);
        aggiornaTabella();
    }
};

cardiologia.onclick = () => {
    current = 0;
    aggiornaTabella();
};
oncologia.onclick = () => {
    current = 1;
    aggiornaTabella();
};
psicologia.onclick = () => {
    current = 2;
    aggiornaTabella();
};
ortopedia.onclick = () => {
    current = 3;
    aggiornaTabella();
};
neurologia.onclick = () => {
    current = 4;
    aggiornaTabella();
};
