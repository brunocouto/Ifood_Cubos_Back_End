
// const numero = "1,350,000";
// const numeroComVirgula = numero.replace(",", ".").replace(',', '.');
// console.log(numeroComVirgula);  


// let numero1 = "1,350,000";

// while(numero1 !== numero1.replace(",", ".")){
//     numero1 = numero1.replace(",", ".");
// }
// console.log(numero1);

///com um função para acao 

function replaceALL(original, text, newtext) {
    while (original !== original.replace(text, newtext)) {
        original = original.replace(text, newtext);

    }
    return original;
}
let numero = "1,350,000";
console.log(replaceALL(numero, ",", "."));

