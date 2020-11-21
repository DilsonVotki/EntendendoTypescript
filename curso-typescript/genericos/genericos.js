"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Dilson').length);
console.log(echo(34).length);
console.log(echo({ nome: 'Dilson', idade: 34 }));
// USANDO GENERICS
function echoGenerics(objeto) {
    return objeto;
}
console.log(echoGenerics('Dilson').length);
console.log(echoGenerics(34));
console.log(echoGenerics({ nome: 'Dilson', idade: 34 }).nome);
//GENERICS DISPONIVEL NA API
const avaliacoes = [10, 9, 8];
avaliacoes.push(7);
//avaliacoes.push('6')
console.log(avaliacoes);
// ARRAYS COM GENERICS
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([10, 11, 12]);
imprimir(["Oi", "td bem", "tchau"]);
imprimir([
    { nome: 'Dilson', idade: 34 },
    { nome: 'Taina', idade: 33 }
]);
imprimir([
    { nome: 'Lara', idade: 9 },
    { nome: 'Yasmin', idade: 2 }
]);
const chamaEcho = echoGenerics;
console.log(chamaEcho('Qualquer coisa'));
// CLASSES COM GENERICS
class OperacaoBinaria {
    constructor(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
}
// console.log(new OperacaoBinaria ('Bom', ' Dia').executar())
// console.log(new OperacaoBinaria (3, 7).executar())
// console.log(new OperacaoBinaria (3, ' Opa').executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.op1 + this.op2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(10, 232).executar());
//DESAFIO DIFERENÇA ENTRE DATAS
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.op1);
        const t2 = this.getTime(this.op2);
        const dif = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(dif / dia)} dias`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 5, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// DESAFIO CLASSE FILA
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length > 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Di', 'Tai', 'La', 'Ya');
fila.imprimir();
fila.entrar('Yu');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
// const outraFila = new Fila<boolean>(false, true)
// DESAFIO MAPA
// Array de objetos (chave/valor) -> itens
// Métodos: obter(Chave), colocar ({ C, V })
// limpar(), imprimir()
console.log('DESAFIO MAPA!!!');
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(chaveValor) {
        const encontrato = this.obter(chaveValor.chave);
        if (encontrato) {
            encontrato.valor = chaveValor.valor;
        }
        else {
            this.itens.push(chaveValor);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Dilson' });
mapa.colocar({ chave: 2, valor: 'Taina' });
mapa.colocar({ chave: 3, valor: 'Lara' });
mapa.colocar({ chave: 1, valor: 'Yasmin' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=genericos.js.map