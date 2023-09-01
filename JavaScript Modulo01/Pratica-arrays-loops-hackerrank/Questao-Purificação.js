function solução(stringCorrompida) {
	// seu código aqui
    //1 olhar cada um dos caracteres
    //2 ver se pode o caractere em questão
    //3 se o for permitido , escrevo 
    //4 se nao for permitido, ignoro e olho proximo
    //5 quando acabarem os caracteres , e so exibir o que eu escrevi 
    //!@#$%&*().
    let dadoPurificado ='';
    for (let caractere of  stringCorrompida){
        if (caractere === '!' || caractere ==='@' || caractere === '#' || caractere === '$'|| caractere === '%'|| caractere === '&'|| caractere === '*'|| caractere === '()'|| caractere === '.' ) { 
    }else {
        dadoPurificado += caractere;
    }
    } console.log(dadoPurificado);
}

function processData(input) {
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
