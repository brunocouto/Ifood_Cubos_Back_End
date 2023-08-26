const pessoa = {

    nome: "Jose",
    idade: 40,
    altura: 1.73,
    temCNH: true,
    peso: 80,
    apelidos: ["Grande ", "Negao"],
};

let textoCNH = pessoa.temCNH ? "possui CNH" : "nao possui CNH";
console.log(`${pessoa.nome} tem ${pessoa.idade}anos,${pessoa.altura}m de altura, possui ${pessoa.temCNH}e seguintes apelidos ${pessoa.apelidos}`);


console.log(`${pessoa.nome} tem ${pessoa.idade}anos,${pessoa.altura}m de altura, possui ${pessoa.temCNH}e seguintes apelidos ${pessoa.apelidos[0]} e ${pessoa.apelidos[1]}`)
for (let apelido of pessoa.apelidos){
    console.log(` - ${apelido}`);
}