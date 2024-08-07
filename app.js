// Variaveis de atributos do HTML
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const buttoncriar = document.getElementById('criar');
const buttonremover = document.getElementById('remover');
const paragrafo = document.getElementById('paragrafo')
const escondido = document.getElementById('escondido');
const soma = document.getElementById('soma');
const body = document.getElementById('body');
const container2 = document.getElementById('container2')
var cliques = document.getElementById('cliques');
const click = document.getElementById('click')

// Variaveis para executar alguns exercicios
var cliks = 0;
let num1 = 10;
let num2 = 35;
let fontsize = 16;
// Varaiveis Exercicio 5
let h3 = document.createElement('h3');
let texto = document.createTextNode('Ola mundo');
h3.appendChild(texto)

function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
// Ex 1
button.addEventListener('click', (e)=>{
    e.preventDefault();
    paragrafo.style.fontSize = (fontsize + 2) + 'px';
    fontsize += 2;
})

// Ex 2
button2.addEventListener('click', (e)=>{
    e.preventDefault();
    escondido.classList.toggle('escondido');
})

// Ex 3
button3.addEventListener('click', (e)=>{
    e.preventDefault();
    soma.innerHTML = num1 + num2;
})

// Ex 4
button4.addEventListener('click', (e)=>{
    e.preventDefault();
    body.style.backgroundColor = gera_cor();
})

// Ex 5
buttoncriar.addEventListener('click', (e)=>{
    console.log("Foi")
    container2.appendChild(h3)
})

buttonremover.addEventListener('click', (e)=>{
    console.log("Foi")
    container2.removeChild(h3)
})

// Ex 6
click.addEventListener('click', (e)=>{
    cliks = cliks +1;
    cliques.innerHTML = `${cliks}`;
})