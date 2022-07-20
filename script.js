const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btnAdd = document.querySelector('#btnCalcularAdd');
const resultado = document.querySelector('#resultado');


h1.innerHTML = "Alejandro <br>Jaramillo Merino";
h1.innerText = "Alejandro <br>Jaramillo Merino";

console.log(h1.getAttribute("class"));

h1.setAttribute("class", "rojo")

h1.classList.add("rojo");
h1.classList.remove("rojo");

input1.value= "704694827";

const img = document.createElement("img");
img.setAttribute("src", "https://www.cyberciti.biz/media/new/faq/2017/06/new-nixcraft-logo-cyberciti.biz_.png");
console.log(img);

pid.appendChild(img);

btnAdd.addEventListener('click', calcular);
//btnAdd.addEventListener('submit', calcular);

function calcular(event){
    console.log("Escuchando");
    event.preventDefault();
    var result = Number(input1.value) + parseInt(input2.value);
    resultado.innerHTML = "Resultado:" + result;
}



