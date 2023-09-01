function soma(x, y) {
    return x + y;
}
console.log(soma(2, 3));


//acessar variáveis fora
let z = 5;
function soma(x, y) {
    return x + y + z;
}
console.log(soma(2, 3));