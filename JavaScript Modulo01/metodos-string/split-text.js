const nomeCompleto = "Jose messias Perreira";
const array = nomeCompleto.split(" ");
const nomeDoMeio = array[1];
console.log(nomeDoMeio);



// exemplo de um split(text)?
// function split(text) {
//     // Cria um array vazio para armazenar as palavras.
//     const words = [];
  
//     // Divide o texto em palavras, usando o espaço como separador.
//     const wordList = text.split(" ");
  
//     // Adiciona cada palavra ao array.
//     for (const word of wordList) {
//       words.push(word);
//     }
  
//     // Retorna o array de palavras.
//     return words;
//   }