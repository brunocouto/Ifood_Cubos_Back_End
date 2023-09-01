function verificarMaioridade(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if ((idade >= 22 && idade <= 65)) {
        return "pessoa adulta";
    } else if (idade > 65) {
        return "idoso";
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(65);
console.log(valorRetornadoPelaFuncao)

// outra forma de fazer colocando a variável direto na chamada da função 
console.log(verificarMaioridade(70));

