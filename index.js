let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Erick Daniel Bonora Bueno";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agencia de viagens paris, EUA, Dubai, Maldivas, tokyo
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


const idadeComprador = 17;
if(idadeComprador >=18) {
  console.log("comprador maior de idade");
  console.log("destinos disponíveis: " + listaDeDestinos);
}else {
console.log("Não é possivel vender passagem para menores de idade");
console.log("você é menor de idade");
}
