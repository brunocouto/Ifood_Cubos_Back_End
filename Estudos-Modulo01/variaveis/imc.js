peso = 90;

altura = 1.92;

//const imc = peso / altura **2  ;
// outra forma
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log("Abaixo do peso");
}

else if (imc < 25) {
    console.log("Peso normal");
}

else if (imc < 30) {
    console.log("Acima do peso");
}

else {
    console.log("Obesidade grau 3");
}




