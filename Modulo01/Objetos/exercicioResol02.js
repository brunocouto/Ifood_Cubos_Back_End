const produtosConsumidos = [
    {
        nome: "Pao de alho",
        precoUnit: 1500,
        quantidadeComprada: 2,
    },
    {
        nome: "Cerveja",
        precoUnit: 1000,
        quantidadeComprada: 2,

    },
    {
        nome: "Agua",
        precoUnit: 500,
        quantidadeComprada: 1,
    }
]



const cartaoConsumo = {
    nomeDoCliente: "Jose",
    idadeDoCliente: 30,
    produtosConsumidos

};

console.log(cartaoConsumo.nomeDoCliente);
console.log(cartaoConsumo.idadeDoCliente);
cartaoConsumo.idadeDoCliente = 31;
console.log(cartaoConsumo.idadeDoCliente);
console.log(cartaoConsumo.produtosConsumidos[0]);
console.log(cartaoConsumo.produtosConsumidos[2].precoUnit);
console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);
