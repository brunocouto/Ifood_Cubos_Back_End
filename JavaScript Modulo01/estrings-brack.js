
const palavra = 'Alemanha';

let encontrado = false;

for (let letra of palavra) {
    //console.log(letra);
    if (letra === 'h') {
        console.log('tem a letra h');
        encontrado = true;
        break;
    }
}
if (encontrado === false) {
    console.log("Não tem a letra H");
}
