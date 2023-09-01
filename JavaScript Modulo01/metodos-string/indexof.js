const possivelEmail = "jose.messias@cubos.academy";

const indexArroba = possivelEmail.indexOf("@");

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("O email é válido!");
} else {
    console.log('Não tem @');
}