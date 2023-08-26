function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui

 
  let result = [];


  for (let i = 0; i < palavras.length; i++) {

    if (palavras[i][0] === primeiraLetra && palavras[i][1] === segundaLetra) {
      result.push(palavras[i]);
    }
  }


  if (result.length === 0) {
    console.log("NENHUMA");
  } 

  else {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
}

// let primeiraLetra = "c";
// let segundaLetra = "v";
// let palavras = ["aveia","manha", "ave"];

// solucao(primeiraLetra, segundaLetra, palavras);
    
    
    


function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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