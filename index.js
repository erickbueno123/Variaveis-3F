const prompt = require('prompt-sync');
const entrada = prompt();


let idade = 17;
const anoNascimento = 2007
  ;
let anoAtual = 2024;
const nomeCompleto = "Erick Daniel Bonora Bueno,";

console.log("Meu nome é " + nomeCompleto + "nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completei " + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agencia de viagens paris, EUA, Dubai, Maldivas, tokyo
console.log(" ")
console.log("----------------------------");
console.log("<<<<<agencia de viagens>>>>>");
console.log("----------------------------");
console.log(" ");
const listaDeDestinos = new Array(
  "Paris",
  " EUA",
  " Dubai", 
  " Maldivas",
  " Tokyo"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel vivida");
console.log(listaDeDestinos);

listaDeDestinos.push("Curitiba");
console.log(listaDeDestinos);

listaDeDestinos.push("São josé dos pinhais");
console.log(listaDeDestinos);

listaDeDestinos.push("Londrina");
console.log(listaDeDestinos);

const logincerto = "erick";
const senhacerto = "123";

console.log(" ")
console.log("-------------------------");
console.log("<<<<<<area de login>>>>>>");
console.log("-------------------------");
console.log(" ");
var login = entrada("qual seu login: ");
var senha = entrada("digite sua senha: ");

while(login != logincerto || senha != senhacerto ){
  console.log("login ou senha incorretos")
  login = entrada("qual é seu login? ");
  senha = entrada("digite é sua senha? ");
}
var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual sua idade?");

if(idadeComprador >=18) {
  console.log("Ola senhor(a) " + nomeComprador);
  console.log("comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);

  console.log("Escolha seu destino");
  
  var contador = 0;

  while(contador <= 9 ){
    console.log(listaDeDestinos[contador]);
    contador++;
}
  var destino = entrada("digite o numero que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi:
  ${listaDeDestinos[destino]}` );
}else {
  console.log("ola senhor(a) " + nomeComprador);
  console.log("nao foi posivel concluir a compra");
  console.log("voce e menor e idade");
}