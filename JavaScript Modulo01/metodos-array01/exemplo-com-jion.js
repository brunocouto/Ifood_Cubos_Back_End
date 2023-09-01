function inverterString(texto) {
    const arrayDEletras = texto.split("");// quebrando texto
    arrayDEletras.reverse();//invertendo texto

    const textoInvertido = arrayDEletras.join("");
    console.log(textoInvertido);

}


inverterString("Cubos Academy");//chamando a função 