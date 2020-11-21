"use strict";
let canal = 'Gaveta';
let inscritos = 45678765;
// canal = inscritos
console.log(`Canal = ${canal}`);
// declarando "nome", ele da erro pq pega a declaração "nome" de algum outro arquivo do projeto, 
//e nao compila o TS pq tem erro
// let nome: string = 'Pedro'
console.log(`Nome = ${nome}`);
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Bom tarde';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map