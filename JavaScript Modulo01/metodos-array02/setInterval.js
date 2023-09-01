// const imprimir = () => {
//     console.log('Ola alunos e alunas');
//     clearInterval(interval)


// }

// const interval = setInterval(imprimir, 2000)

let numero = 10

const contador = setInterval(function () {
    console.log(numero)
    numero--

    if (numero === 0) {
        console.log('boooooom!')
        clearInterval(contador)
    }


}, 1000)