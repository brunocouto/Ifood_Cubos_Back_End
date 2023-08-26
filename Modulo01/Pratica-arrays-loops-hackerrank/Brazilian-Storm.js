function solucao(notas) {
    const notasOrdenadas = notas.sort((a, b) => a - b);
    const notasDescartadas = notasOrdenadas.slice(1, -1);
    const somaNotas = notasDescartadas.reduce((acc, nota) => acc + nota, 0);
    const media = somaNotas / notasDescartadas.length;
    console.log(media.toFixed(0));
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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
