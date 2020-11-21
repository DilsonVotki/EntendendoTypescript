class Data {
    //publico por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data (1, 4, 1986)
aniversario.dia = 20
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // podemos omitir o "()"
casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta (1, 4, 1986)
aniversarioEsperto.dia = 20
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // podemos omitir o "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

/////////////////////////////////////////////////////////////////////////////////
// DESAFIO CLASSE PRODUTO
// Atributos: nome, preço e desconto
// Criar Construtor
// Obs1: Desconto é opcional (valor padrao 0)
// Obs2: Criar dois produtos: passando dois e tres parametros

class Produtos {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}

const fruta = new Produtos ('Banana', 5.00)
console.log(`
Nome: ${fruta.nome}
Preço: ${fruta.preco}`
)

const legumes = new Produtos ('Batata', 4.00, 0.5)
if (legumes.desconto != 0) {
    const valorFinal: number = legumes.preco * legumes.desconto  
    console.log(`
Nome: ${legumes.nome}
Preço: ${legumes.preco}
Desconto: ${legumes.desconto}
Valor Final: ${valorFinal}
    `)

}else{
    console.log(`
Nome: ${legumes.nome}
Preço: ${legumes.preco}
    `)
}


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    public precoComDesconto(): number{
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}

const prod1 = new Produto ('Caneta', 4.2)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto ('Caderno', 18.80, 0.15)
console.log(prod2.resumo())

/////////////////////////////////////////////////////////////////////////////////
//MODIFICADORES DE ACESSO

class Carro {
    private velocidadeAtual: number = 0

    constructor (public marca: string, public modelo: string, 
        private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade (delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 &&
            novaVelocidade <= this.velocidadeMaxima
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 
        }
        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }

}

const carro1 = new Carro ('Ford', 'Focus', 190)

Array(50).fill(0).forEach(() => carro1.acelerar())

console.log("Velocidade atual do carro 1 é " + carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log("Carro 1 freou e sua velocidade atual é " + carro1.frear())


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
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }

}

const f40 = new Ferrari ('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

/////////////////////////////////////////////////////////////////////////////////
// GETTERS & SETERS

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor < 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log("idade pessoa 1 " + pessoa1.idade)

pessoa1.idade = -3
console.log("idade pessoa 1 " + pessoa1.idade)

/////////////////////////////////////////////////////////////////////////////////
// ATRIBUTOS E METODOS ESTATICOS

class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return this.PI * raio * raio
    }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

// console.log(new Matematica().areaCirc(4))
console.log(Matematica.areaCirc(4))

/////////////////////////////////////////////////////////////////////////////////
//CLASSE ABSTRATA
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicar()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

/////////////////////////////////////////////////////////////////////////////////
//CONSTRUTOR PRIVADO E SINGLETON

class Unico {
    private static instance = new Unico()
    private constructor() {}
    
    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

//const errado = new Unico()
console.log (Unico.getInstance().agora())

/////////////////////////////////////////////////////////////////////////////////
//ATRIBUTO SOMENTE LEITURA

class Aviao {
    public readonly modelo: string
    
    constructor (modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-144', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)