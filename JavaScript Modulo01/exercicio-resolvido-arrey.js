const paises = ['Brasil','Argentina','Espanha','EUA','Chile'];
console.log(paises);

//remova um pais do fim da fila 
paises.pop();
console.log(paises);

//adicionar um pais ao inicio da lista
paises.unshift('chile');
console.log(paises);
//removendo um pais ao inicio da lista
paises.shift();
console.log(paises);

//imprimir o ultimo item da lista
const ultimo = paises[paises.length-1];
console.log(ultimo);

const segundo = paises[paises.length-2];
console.log(segundo);

console.log(paises[1]);

console.log(paises[2]);