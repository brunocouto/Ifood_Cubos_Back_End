
// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];
var citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']

// Usando slice para criar novoCarro a partir de meuCarro.
var meuHonda = {
    cor: "vermelho",
    rodas: 4,
    motor: { cilindros: 4, tamanho: 2.2 },
};
var meuCarro = [meuHonda, 2, "perfeitas condições", "comprado em 1997"];
var novoCarro = meuCarro.slice(0, 2);

// Exibe os valores de meuCarro, novoCarro, e a cor de meuHonda
//  referenciado de ambos arrays.
console.log("meuCarro = " + meuCarro.toSource());
console.log("novoCarro = " + novoCarro.toSource());
console.log("meuCarro[0].cor = " + meuCarro[0].cor);
console.log("novoCarro[0].cor = " + novoCarro[0].cor);

// Altera a cor de meuHonda.
meuHonda.cor = "roxo";
console.log("A nova cor do meu Honda é " + meuHonda.cor);

// Exibe a cor de meuHonda referenciado de ambos arrays.
console.log("meuCarro[0].cor = " + meuCarro[0].cor);
console.log("novoCarro[0].cor = " + novoCarro[0].cor);