const pessoa = {

    nome: "Jose",
    altura: 1.73,
    peso: 80,
};

// primeira forma de inserir dados 
pessoa.nome = "Pedro"

//segunda forma de inserir dados 
pessoa['nome'] = "Pedro"
pessoa['altura'] = 1.80;
pessoa['peso'] = 80;

console.log(`Meu nome e ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`);