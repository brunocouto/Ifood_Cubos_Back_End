// function determinarFaixaEtaria(idade) {
//     if (idade <= 21) {
//         return "Jovem";
//     } else if ((idade >= 22 && idade <= 65)) {
//         return "pessoa adulta";
//     } else if (idade > 65) {
//         return "idoso";
//     }
// }

// function apresentar(pessoa) {
// const faixaEtarias = determinarFaixaEtaria(pessoa.idade);
// console.log(`Meu nome e ${pessoa.nome},sou uma ${faixaEtarias} de ${pessoa.idade} anos e sou um ${pessoa.profissao}`);
//}


const pessoa1 = {
    nome: 'Pedro',
    idade: 30,
    profissao: "Medico",
    apresentar: function () {
        const faixaEtarias = this.determinarFaixaEtaria(this.idade);
        console.log(`Meu nome e ${this.nome},sou uma ${faixaEtarias} de ${this.idade} anos e sou um ${this.profissao}`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "Jovem";
        } else if ((this.idade >= 22 && this.idade <= 65)) {
            return "pessoa adulta";
        } else if (this.idade > 65) {
            return "idoso";
        }
    }
}
pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());
