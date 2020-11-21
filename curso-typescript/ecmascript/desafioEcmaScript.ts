// Exercicio 1
const dobro = (valor: number) => valor * 2
console.log(dobro(10))
 
// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa'): void {
    console.log("Ola, " + nome)
}
 
dizerOla()
dizerOla('Anna')
 
// Exercicio 3
const nums = [-3, 33, 38, 5]
// imprimir o menor valor
console.log(Math.min(...nums))
 
// Exercicio 4
const array = [55, 20]
// adicionar todos os elementos de "nums" em "array"
array.push(...nums)
console.log(array)
 
// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [ nota1, nota2, nota3 ] = notas
console.log(nota1, nota2, nota3)
 
// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)


// Callback
function esperar3s(callback : (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...')
    }, 3000)
}

esperar3s(function(resultado: string) {
    console.log(resultado)
})

// Promisse
function esperar3sPromisse() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois com promisse...')
        }, 3000)
    })
}

esperar3sPromisse()
    .then(dado => console.log(dado))


fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(persongem => persongem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!! ' + err))