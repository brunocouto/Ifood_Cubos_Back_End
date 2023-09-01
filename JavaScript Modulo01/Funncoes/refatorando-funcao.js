function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Meu nome e ${pessoa.nome},sou um jovem tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    } else if (pessoa.idade < 65) {
        console.log(`Meu nome e ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    } else {
        console.log(`Meu nome e ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    }
}



const pessoa0 = {
    nome: 'Jose',
    idade: 30,
    profissao: "professor"
}
// if (pessoa.idade < 25) {
//     console.log(`Meu nome e ${pessoa.nome},sou um jovem tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else if (pessoa.idade < 65) {
//     console.log(`Meu nome e ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else {
//     console.log(`Meu nome e ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// }
apresentar(pessoa0);

const pessoa1 = {
    nome: 'Pedro',
    idade: 65,
    profissao: "Medico"
}
// if (pessoa.idade < 25) {
//     console.log(`Meu nome e ${pessoa.nome},sou um jovem tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else if (pessoa.idade < 65) {
//     console.log(`Meu nome e ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else {
//     console.log(`Meu nome e ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// }
apresentar(pessoa1);

const pessoa2 = {
    nome: 'Anna',
    idade: 19,
    profissao: "Estudante"
}
// if (pessoa.idade < 25) {
//     console.log(`Meu nome e ${pessoa.nome},sou um jovem tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else if (pessoa.idade < 65) {
//     console.log(`Meu nome e ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// } else {
//     console.log(`Meu nome e ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
// }
apresentar(pessoa2);
