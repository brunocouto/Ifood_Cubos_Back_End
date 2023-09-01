// faca uma função que, dado o um determinado conjunto de dados, descarta os primeiros 
// e os ultimos 10 % dados , aproveitando apenas 80%


function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10 / 100);
    const endIndex = Math.floor(dados.length * 90 / 100);
    const resultado = dados.slice(startIndex, endIndex);
    console.log(resultado);;

}
const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

filtrar80(dados);

