// face um programa que calcule a taxa de juros

let montante = 90000;

let capital = 60000;

let tempo = 24;

let taxa = (montante / capital) ** (1 / tempo) - 1;

console.log(taxa);

// // outra forma de fazer

// // ou

// let mont = valor * Math.pow((1 + taxa), tempo);

// let juros = valor * (taxa * tempo);

// console.log(juros);

// // ou

// let juros = valor * taxa * tempo;

// console.log(juros);


