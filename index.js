import {fetchComponent} from './fetch.js';
import {createTable} from './table.js';
let confTipologie=[];
let prenotazioni = [[],[],[],[],[]]
let current;
const cardiologia = document.querySelector("#Cardiologia")
const oncologia = document.querySelector("#Oncologia")
const psicologia = document.querySelector("#Psicologia")
const ortopedia = document.querySelector("#Ortopedia")
const neurologia = document.querySelector("#Neurologia")
const prenotaButton = document.querySelector("#prenotaButton")
const idNominativo = document.querySelector("#idNominativo")
const f = document.querySelector("#f")
const d = document.querySelector("#d")
const tabellaHTML=document.querySelector("#table1");
const templateTabellaHTML=`<tr><td> </td> <td>Lunedì </td> <td>Martedì </td> <td>Mercoledì </td> <td>Giovedì </td> <td>Venerdì </td></tr> <tr> <td>8</td> <td>%NOME1</td> <td>%NOME2</td> <td>%NOME3</td> <td>%NOME4</td> <td>%NOME5</td></tr> <tr> <td>9</td> <td>%NOME6</td> <td>%NOME7</td> <td>%NOME8</td> <td>%NOME9</td> <td>%NOME10</td></tr> <tr> <td>10</td> <td>%NOME11</td> <td>%NOME12</td> <td>%NOME13</td> <td>%NOME14</td> <td>%NOME15</td></tr> <tr> <td>11</td> <td>%NOME16</td> <td>%NOME17</td> <td>%NOME18</td> <td>%NOME19</td> <td>%NOME20</td></tr> <tr> <td>12</td> <td>%NOME21</td> <td>%NOME22</td> <td>%NOME23</td> <td>%NOME24</td> <td>%NOME25</td></tr>` //``

const componenteFetch= fetchComponent();
const table = createTable;
fetch("./config.json")
.then(r => r.json())
.then(data => {
    let conf = data;
    componenteFetch.build(conf["cacheToken"]);
})
prenotaButton.onclick=()=>{
    let data ={
        "giorno": d.value,
        "nome": idNominativo.value,
        "ora":  f.value
    }
    switch(current){
        case 0 :{
            prenotazioni[0].push(data)
            tabellaHTML.innerHTML=templateTabellaHTML;

            break;
        }
        case 1 :{
            prenotazioni[1].push(data)
            break;
        }
        case 2 :{
            prenotazioni[2].push(data)
            break;
        }
        case 3 :{
            prenotazioni[3].push(data)
            break;
        }
        case 4 :{
            prenotazioni[4].push(data)
            break;
        }
    }
    componenteFetch.setData("pren",prenotazioni);
    console.log(prenotazioni)
}
 cardiologia.onclick = ()=>{
    current = 0;
    console.log(current)
 }
 oncologia.onclick = ()=>{
    
    current = 1;
    console.log(current)
 }
 psicologia .onclick=()=>{
   
    current = 2;
    console.log(current)
 }
 ortopedia.onclick = ()=>{
  
    current =3;
    console.log(current)
 }
 neurologia . onclick=()=>{
    
    current=4;
    console.log(current)
 }
