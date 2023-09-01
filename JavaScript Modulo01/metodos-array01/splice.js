
const lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(1, 2, 'f');
console.log(lista);
// ['a','f','d','e']



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//explicação
// array.splice(indice de modicação[, deleteCount[, elemento1[, ...[, elementoN]]])

// array.splice(indice) // SpiderMonkey/Firefox extension

// Parâmetros
// indice
// Índice o qual deve iniciar a alterar a lista. Se maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.

// deleteCount
// Um inteiro indicando o número de antigos elementos que devem ser removidos.

// Se o parâmetro deleteCount não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.

// Se deleteCount é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.

// elemento1, ..., elementoN
// Os elementos a adicionar na lista. Se você não especificar nenhum elemento, splice simplesmente removerá elementos da mesma.