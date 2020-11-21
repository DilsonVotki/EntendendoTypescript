interface Humano{
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá '+ pessoa.nome)
}

function mudarNOme(pessoa: Humano) {
    pessoa.nome='Dilson'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 30,
    saudar(sobrenome: string) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNOme(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome: 'Ana', idade: 27, peso: 60 })
pessoa.saudar('Votki')


// USANDO CLASSES 
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date()
    saudar(sobrenome: string) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Loco'
saudarComOla(meuCliente)
meuCliente.saudar('Abreu')
console.log(meuCliente.ultimaCompra)

// INTEREFACE FUNÇÃO
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia = function (base: number, exp: number): number {
    // para resolver a potencia os calculos são:
    // Math.pow(3,10) ou
    // 3**10 ou
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3,10))


// HERANÇA
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

function testa(b: B) {

}

testa(new RealABC)

abstract class AbstrataABD implements A, B {
    a(): void{}
    b(): void{}
    abstract d(): void
}