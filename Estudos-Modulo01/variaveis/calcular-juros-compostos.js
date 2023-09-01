
const Ccapital = 1000;
const itaxa = 12.5 / 100;
const tperiodoDeTempo = 5;

const Cmontante = Ccapital * (1 + itaxa) ** tperiodoDeTempo;
// const Cmontante  = Ccapital * Math.pow((1+itaxa),tperiodoDeTempo);
console.log(Cmontante);



