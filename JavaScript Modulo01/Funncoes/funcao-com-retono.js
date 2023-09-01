function verificarMaioridade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(20);
console.log(valorRetornadoPelaFuncao)
