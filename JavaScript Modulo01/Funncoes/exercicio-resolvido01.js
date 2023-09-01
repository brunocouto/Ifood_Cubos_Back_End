// function pessoa(nome, idade,profissao,altura ) { // declarei a função
//     //const pessoa = "Jose";
//     console.log(`ola, meu nome e ${nome}, sou um jovem de ${idade} anos,tenho ${altura}m de altura e sou ${profissao}`);
// }

// pessoa("Joao", 12, "estudante",192);

const pessoaObj = {
    nome: "Joao",
    idade: 12,
    altura: 1.40,
    profissao: "estudante",
}

function apresentar(pessoa) {
    console.log(`ola, meu nome e ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos,tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}
apresentar(pessoaObj);