const usuarios = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 31 },
    { nome: 'Daniel', sobrenome: 'Lopes', idade: 29 },
    { nome: 'Vitor', sobrenome: 'Vidal', idade: 28 },
];

const novoArray = usuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade
    }
});

console.log(novoArray);
console.log(usuarios);