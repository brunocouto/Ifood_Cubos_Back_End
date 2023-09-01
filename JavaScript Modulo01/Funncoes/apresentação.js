function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Meu nome e ${pessoa.nome},sou um jovem tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    } else if (pessoa.idade < 65) {
        console.log(`Meu nome e ${pessoa.nome},sou um adulto tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    } else {
        console.log(`Meu nome e ${pessoa.nome},sou um idoso tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    }
}

const pessoa01 = {
    nome: 'Jose',
    idade: 30,
    profissao: "professor"
}
apresentar(pessoa01);

const pessoa02 = {
    nome: 'Pedro',
    idade: 65,
    profissao: "Medico"
}
apresentar(pessoa02);

const pessoa03 = {
    nome: 'Anna',
    idade: 19,
    profissao: "Estudante"
}
apresentar(pessoa03);

