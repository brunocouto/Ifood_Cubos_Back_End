// faca uma função que que recebe parametros do tipo estring e imprime na tela 
// essa string invertida ,

// function imprimeStringInvertida(string){
//     const stringInvertida = string.split("").reverse().join("");
//     console.log(stringInvertida);
// }

// imprimeStringInvertida("Bruno");

function inverterString(texto) {
    const arrayDEletras = texto.split("");// quebrando texto
    arrayDEletras.reverse();//invertendo texto

    let textoInvertido = "";
    for (let letra of arrayDEletras) { //percorrendo o texto
        //textoInvertido += letra;
        textoInvertido = letra + textoInvertido;

    }
    console.log(textoInvertido);
}
inverterString("Cubos Academy");//chamando a função 