
const pessoa = {
    nome: "Jose",
    idade: 20,
    cidade: "Salvador",
    profissão: "Dev"
};

const endereco ={
    rua: "Rua do Abacaxi",
    numero: 138,
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP"
}

// juntar todos os pedidos 

const objetoFundido ={

    ...pessoa,
    ...endereco 
};

console.log(objetoFundido);