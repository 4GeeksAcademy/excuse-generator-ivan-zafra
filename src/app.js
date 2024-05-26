/* eslint-disable */
import "bootstrap";
import "./style.css";




//Defino las partes de mis excusas

const quien = ["Luis", "Lia", "Isa"];
const hizo = ["se comió", "me robó", "se fumó"];
const que = ["mi proyecto", "mi ordenador", "mis ganas de estudiar"];
const cuando = ["ayer", "hoy", "la semana pasada"];

//Creo la funcion que randomiza

function random(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function() {
  console.log("Hola Mundo");
};

//Creo mi excusa final concatenado aleatoriamente las excusas definidas anteriormente

const excusa =
quien[random(quien.length)] +
" " +
hizo[random(hizo.length)] +
" " +
que[random(que.length)] +
" " +
cuando[random(cuando.length)];

// Elijo el elemento del HTML que quiero modificar

document.querySelector("p").innerText = excusa;