// menor de 18 > menor de idade 
//maior de 18 . maior de idade , >=65 adulto 
// acima de 65 -> idoso 

const idade =19;

if (idade < 18){
    console.log('menor de idade')
}else {
    // tem 18 ou mais

    if(idade <=65){
        console.log ('adulta');
    }else {
        console.log("idosa");
    }
    
}

// outra forma de fazer sem chaves 
if (idade < 18){
    console.log('menor de idade')
}else if(idade <=65){
        console.log ('adulta');
    }else {
        console.log("idosa");
    }
    
