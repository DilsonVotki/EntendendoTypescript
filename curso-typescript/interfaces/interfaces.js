"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNOme(pessoa) {
    pessoa.nome = 'Dilson';
}
const pessoa = {
    nome: 'João',
    idade: 30,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNOme(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Ana', idade: 27, peso: 60 })
pessoa.saudar('Votki');
// USANDO CLASSES 
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Loco';
saudarComOla(meuCliente);
meuCliente.saudar('Abreu');
console.log(meuCliente.ultimaCompra);
let potencia = function (base, exp) {
    // para resolver a potencia os calculos são:
    // Math.pow(3,10) ou
    // 3**10 ou
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function testa(b) {
}
testa(new RealABC);
class AbstrataABD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map