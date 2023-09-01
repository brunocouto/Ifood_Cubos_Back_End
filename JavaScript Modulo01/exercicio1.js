const valorDaCompra =100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1){
    // a vista - com 10% de desconto
   const desconto = valorDaCompra * 10/100;
   const valorApagar = valorDaCompra - desconto ;
    console.log(`O preço da sua compra será de R$ ${valorApagar} com 10% de desconto `);
}else {
    //parcelado sem juros
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`voce deve pagar ${numeroDeParcelas} parcelas de R$${valorDaParcela.toFixed(2)}`);
    //  toFixed(2) para redução de casas decimal 
}