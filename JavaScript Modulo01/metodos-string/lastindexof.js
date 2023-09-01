//faz uma busca de traz para frente 

'ricardo'.lastIndexOf('r'); // retorna 4
'ricardo'.lastIndexOf('a', 3); // retorna 3
'ricardo'.lastIndexOf('X'); // retorna -1

//fatia uma strings 
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

//Encontrar se um elemento existe ou não e atualizar o array
function atualizarColecaoVegetais(vegetais, vegetal) {
    if (vegetais.indexOf(vegetal) === -1) {
        vegetais.push(vegetal);
        console.log("Nova coleção de vegetais é : " + vegetais);
    } else if (vegetais.indexOf(vegetal) > -1) {
        console.log(vegetal + " já existe na coleção de vegetais.");
    }
}

var vegetais = ["batata", "tomate", "pimenta", "pimentao"];

atualizarColecaoVegetais(vegetais, "espinafre");
// Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre
atualizarColecaoVegetais(vegetais, "espinafre");
  // espinafre já existe na coleção de vegetais.