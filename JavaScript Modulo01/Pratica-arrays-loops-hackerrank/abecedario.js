function solucao(letra, palavras) {
	//seu codigo aqui
    let erros =0;
    
    for (let palavra of palavras){
        const primeiraLetra = palavra[0];
        if (primeiraLetra !== letra){
            erros++;
        }
    }
    console.log(erros);
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
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