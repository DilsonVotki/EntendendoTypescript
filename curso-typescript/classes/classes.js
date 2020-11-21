"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(1, 4, 1986);
aniversario.dia = 20;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // podemos omitir o "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(1, 4, 1986);
aniversarioEsperto.dia = 20;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // podemos omitir o "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
/////////////////////////////////////////////////////////////////////////////////
// DESAFIO CLASSE PRODUTO
// Atributos: nome, preço e desconto
// Criar Construtor
// Obs1: Desconto é opcional (valor padrao 0)
// Obs2: Criar dois produtos: passando dois e tres parametros
class Produtos {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const fruta = new Produtos('Banana', 5.00);
console.log(`
Nome: ${fruta.nome}
Preço: ${fruta.preco}`);
const legumes = new Produtos('Batata', 4.00, 0.5);
if (legumes.desconto != 0) {
    const valorFinal = legumes.preco * legumes.desconto;
    console.log(`
Nome: ${legumes.nome}
Preço: ${legumes.preco}
Desconto: ${legumes.desconto}
Valor Final: ${valorFinal}
    `);
}
else {
    console.log(`
Nome: ${legumes.nome}
Preço: ${legumes.preco}
    `);
}
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Caneta', 4.2);
prod1.desconto = 0.06;
console.log(prod1.resumo());
const prod2 = new Produto('Caderno', 18.80, 0.15);
console.log(prod2.resumo());
/////////////////////////////////////////////////////////////////////////////////
//MODIFICADORES DE ACESSO
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 &&
            novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Focus', 190);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log("Velocidade atual do carro 1 é " + carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log("Carro 1 freou e sua velocidade atual é " + carro1.frear());
//Erros que o JS nao pega, mas o TS acusa q esta errado
// carro1.velocidadeAtual = 300
// console.log("velocidade atual burlada " + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 600
// console.log("velocidade atual burlada " + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log("velocidade atual burlada " + carro1.velocidadeAtual)
/////////////////////////////////////////////////////////////////////////////////
//HERANÇA
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
/////////////////////////////////////////////////////////////////////////////////
// GETTERS & SETERS
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor < 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log("idade pessoa 1 " + pessoa1.idade);
pessoa1.idade = -3;
console.log("idade pessoa 1 " + pessoa1.idade);
/////////////////////////////////////////////////////////////////////////////////
// ATRIBUTOS E METODOS ESTATICOS
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(new Matematica().areaCirc(4))
console.log(Matematica.areaCirc(4));
/////////////////////////////////////////////////////////////////////////////////
//CLASSE ABSTRATA
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
/////////////////////////////////////////////////////////////////////////////////
//CONSTRUTOR PRIVADO E SINGLETON
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico();
//const errado = new Unico()
console.log(Unico.getInstance().agora());
/////////////////////////////////////////////////////////////////////////////////
//ATRIBUTO SOMENTE LEITURA
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-144', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map