function solucao(resultados) {
    let pontuacao = 0;
    
    for (let i = 0; i < resultados.length; i++) {
      if (resultados[i] === "V") {
        pontuacao += 3;
      } else if (resultados[i] === "E") {
        pontuacao += 1;
      }
    }
    
    console.log(pontuacao);
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
  
  function processData(input) {
      const resultados = JSON.parse(input);
      solucao(resultados);
  }
  