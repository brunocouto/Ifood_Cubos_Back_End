// const carros = [

//     {marca: 'Ford', ano: 1999, cor : verde,}
//     {modelo: 'Fiesta', ano: 2000, cor: azul,}

// ];

// const carro = carros.find((carro) => {
//     return carro.marca === 'Ford';
// },

// console.log(carro);


//outra forma

// const carros = [
//     {
//         marca: 'Uno',
//         modelo: 'Fiat',
//         ano: 1999,
//         cor: 'verde',
//     },
//     {
//         marca: 'Ford',
//         modelo: 'Fiesta',
//         ano: 2000,
//         cor: 'azul',
//     },
// ];

// const carro = carros.find((carro) => {
//     return carro.marca === 'Ford';
// });

// console.log(carro); // { marca: 'Ford', ano: 1999, cor: 'verde' }

//Forma do professor
const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });

    console.log(resultado);
}

buscarCarro('ford', carros);