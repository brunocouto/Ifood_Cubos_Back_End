const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
];

// const numeroProfessores = professores.filter((professores) => {
//     return professores === backend;
// });

// console.log(professores);


const professoresBackend = professores.filter((professor) => {
    return professor.stack === 'backend';
});

console.log(professoresBackend);

const professoresFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend'
});

console.log(professoresFrontend);