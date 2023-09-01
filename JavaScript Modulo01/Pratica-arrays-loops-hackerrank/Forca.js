function solucao(palpite, palavra) {
    let acertos = 0;
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === palpite) {
        acertos++;
      }
    }
    console.log(acertos);
  }
  
  function processData(input) {
    const [palpite, palavra] = input.split(" ");
    solucao(palpite, palavra);
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
  