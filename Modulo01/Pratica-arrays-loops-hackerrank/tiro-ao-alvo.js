function solucao(disparos) {
	//seu codigo aqui
      const acertos = disparos.filter(pontuacao => pontuacao > 70);
  
  if (acertos.length >= 3) {
    console.log(acertos.length);
  } else {
    console.log("ELIMINADO");
  }
}
    


function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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