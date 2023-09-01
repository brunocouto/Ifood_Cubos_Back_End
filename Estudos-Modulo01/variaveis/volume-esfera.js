// faca um programa que calcule o volume de sua esfera a partir do seu diâmetro

let diametroD = 10;
let raioR = diametroD / 2;
let volume = (4 / 3) * 3.14 * raioR ** 3;

console.log(volume);

// outra forma de fazer:

let diametro = 10;
let raio = diametroD / 2;
let volume = (4 / 3) * 3.14 * Math.pow(raioR, 3);

console.log(volume);

// outra forma de fazer:

let diametro = 10;
let raio = diametroD / 2;
let volume = (4 / 3) * 3.14 * (raioR ** 3);

console.log(volume);

// outra forma de fazer:

let diametro = 10;
let raio = diametroD / 2;
let volume = (4 / 3) * 3.14 * Math.pow(raioR, 3);

console.log(volume.toFixed(2));


