const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais =true;

// tem ingresso
// ter idade maior ou igual a censura ou esta acompanhado dos pais

if (temIngresso  ){
    if (idade >= censura || estaComOsPais === true){
    console.log("pode entrar ");
}else {
    console.log("Barrada");
}
}else {
    console.log ("Não pode entrar") ;
}