function solucao(preços) {
    //seu codigo aqui
    //ver se tem promoção ( ter 5 ou mais item)
    //se nao tiver promoção
    //somar tudo varrer o array somando item por item 
    // se tiver promoção 
    // identificar o item mais barato 
    // total a pagar = soma - desconto 

    //encontrar o menor 
    //percorrer o array
    // verificar se o item e menor de todos
    // senao segue em frente 
    let soma =0
    // percorre todos os itens do array para somar tudo 
    for (let preço of preços){
        soma += preço
    }
    // achar o menor preco 
    if (preços.length >=5) {
        //tem promoção
        let menor=preços[0];
        for (let preco of preços){
        // se item atual for menor que o menor ate agora
        if (preco < menor ){
        menor = preco ;
        }
    }

    }else{
        console(soma)
    }
        
}