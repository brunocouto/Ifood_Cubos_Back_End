function solucao(precos) {
    // seu codigo aqui
      //varrer todas as possibilidades de compra e venda 
      //ver para cada um se e prejuizo
      //se for , anotar o valor
      //depois ver qual foi o menor prejuizo
      let menorPrejuizo = 999999999;
      for (let i = 0 ; i < precos.length; i++ ){
          for ( let j = i + 1; j< precos.length; j++){
              const compra = precos [i];
              const venda = precos[j];
              const prejuizo = compra - venda;
              
              if (prejuizo > 0) {
                  //realmente e prejuizo
                  if (prejuizo < menorPrejuizo){
                      menorPrejuizo = prejuizo;
                  }
              }
          }
      }
      console.log(menorPrejuizo);
  
  }
  
  function processData(input) {
      const precos = input.split(" ").map(x => parseInt(x));
        solucao(precos);
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