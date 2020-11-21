"use strict";
// let e const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.789-10';
//cpf = '12345' não deixa alterar pq é const
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)
//ARROW FUNCTION
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 5));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log(pessoa);
falarCom('Dilson');
//this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const especialComThis = normalComThis.bind({nome: 'Dilson'})
// especialComThis()
// //this??
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowEspecialComThis = arrowComThis.bind({nome: 'Dilson'})
// arrowEspecialComThis()
//PARAMETROS PADRAO
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(3);
//Rest e Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ['Dilson', 'Taina', 'Lara'];
const turmaB = ['Yasmin', 'Yuri', ...turmaA];
console.log(turmaA);
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 54, 777, 89876);
console.log(numeros);
console.log(retornaArray(...numbers));
// Rest e Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam(...tupla);
function tuplaParam2(...params) {
    //  console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring  (Array)
const caracteristicas = ['Motor Zetec', 2000];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
// console.log(motor + ', ' + ano)
const [motor, ano] = caracteristicas;
console.log(motor + ', ' + ano);
//Destructuring  (Object)
const item = {
    nome: 'Dilson',
    idade: '34',
    sobrenome: {
        s: 'Votki'
    }
};
const nomeItem = item.nome;
const idadeItem = item.idade;
console.log(nomeItem);
console.log(idadeItem);
const { nome: n, idade: i, sobrenome: { s } } = item;
console.log(n);
console.log(i);
console.log(s);
//Template String
const usuarioId = 'Didio';
const notificacoes = '19';
const boasVindas = 'Bom dia! ' + usuarioId + ' Você tem ' + notificacoes + ' notificações!';
console.log(boasVindas);
const boasVindas2 = `
    Bom dia ${usuarioId}!
    Você tem ${parseInt(notificacoes) > 9 ? '+9' : notificacoes} notificações!
`;
console.log(boasVindas2);
console.log(`${(1 + 1) * 30}`);
console.log(`Tipo: ${caracteristicas[0]}`);
//# sourceMappingURL=ecmascript.js.map