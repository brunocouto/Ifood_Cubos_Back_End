// Codigo ainda com um erro !!
const valorDaCompra =100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1){
    // a vista - com 10% de desconto
   const desconto = valorDaCompra * 10/100;
   const valorApagar = valorDaCompra - desconto ;
    console.log(`O preço da sua compra será de R$ ${valorApagar} com 10% de desconto `);
}else if {
    //parcelado sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);{
    console.log(`voce deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela.toFixed(2)}`);
    //  toFixed(2) para redução de casas decimal 
}else if (numeroDeParcelas >=7 && numeroDeParcelas <=12){
    // parcelado com juros
    const valorAPagarComJuros = valorDaCompra * ( 1+ 1/100) ** numeroDeParcelas;
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Voce deve pagar em ${numeroDeParcelas}x de ${valorDaParcela} totalizando ${valorAPagarComJuros}, devido a incidencia de juros`)
}else {
    //numero de parcelas invalidas
console.error('Numero de Parcelas Invalido');
}
