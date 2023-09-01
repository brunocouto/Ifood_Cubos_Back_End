//exercicio - slice
// quero obter apenas os dois digitos
//do estado de uma cidade

// const cidade = "Salvador-BA"; 
//const estado = cidade.slice(9);
// const estado = cidade.slice(-2);
// console.log(estado); // BA


// forma correta de pegar todo array de tras para frente 
const cidade = "Salvador-BA";
const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado); // BA
