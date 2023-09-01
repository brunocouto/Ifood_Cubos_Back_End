const população = 1000;
const quantPessoas = 4;
const tempo = 100;

const resultado1 = população * quantPessoas ** (tempo / 7);
console.log(resultado1);

const resultado = Math.ceil(população / quantPessoas * tempo);
console.log(resultado);
