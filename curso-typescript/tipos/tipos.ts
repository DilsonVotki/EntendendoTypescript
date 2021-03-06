//string 
let nome = "João"
console.log(nome);
//não vai deixar pq acima inplicidamente falei q era string
//nome = 28;

//numbers
let idade = 2
//mesma coisa situação no inverso, atribui um number, ele nao deixa setar string
//idade = 'Ana'
idade = 27.5
console.log(idade);

// Boolean
let possuiHoobies = false
//segue a regra para boolean
//possuiHoobies = 1
console.log(possuiHoobies);

// tipos explicitos (correto), se não colocar explicitamente o tipo, ele entende como um tipo any
let minhaIdade: number
minhaIdade = 33
console.log(typeof minhaIdade);
//minhaIdade = "minha idade é 33"

//Array
let comodos = ["cozinha", "sala", "banheiro"]
console.log(comodos);
console.log(comodos[1]);
console.log(typeof comodos);
//erro nos arrays igual os exemplos acima
//comodos=[100,50,10]
let hobbies: any[] = ["futebol", "tenis"]
console.log(hobbies);
console.log(hobbies[1]);
console.log(typeof hobbies);
//neste caso deixa, pq foi declarado array de any
hobbies=[100,50,10]
console.log(hobbies);

//tuplas
let endereco: [string, number] = ["Avenida Kennedy", 1500]
console.log(endereco);

endereco = ["Avenida quelquer", 99]
console.log(endereco);

// emun
// emuns são valores pre definidos (ex: segunda, terça, quarta...)
enum Cor{
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //1
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

//any
let carro:any = "AUDI"
console.log(carro)

carro = {marca: 'BMW', ano: 2009}
console.log(carro)

//funçoes
function retornaMeuNome(): string{
    return nome
    //se retornar outro tipo, ele reclama
    //return minhaIdade
}
console.log(retornaMeuNome())

function digaOla():void{
    console.log('ola')
    //funçao void nao retorna nada
    //return minhaIdade
}
digaOla()

function mutiplicar(numA:number, numB:number): number {
    return numA * numB;
}
//funcao esta esperando receber dois numbers
//console.log(mutiplicar(2,'bia'))
console.log(mutiplicar(2,2.5))

const teste = function(): boolean {
    return false;
}

// tipo função 
let calculo: (numeroA: number, numeroB:number) => number
// calculo = digaOla
// calculo()

calculo = mutiplicar
console.log(calculo(5,6))

//objetos
let usuario: {nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
console.log(usuario)

//usuario={}

// usuario = {
//     name: 'Maria'
//     age: 31
// }

usuario = {
    idade: 42,
    nome: 'Maria'
}
console.log(usuario)


//DESAFIO
/*
Criar um objeto "funcionário" com:
    -   Array de strings com os nomes dos supervisores
    -   Função de bater ponto que recebe a hora (número) e retorna uma string
    -> Ponto Normal (<=8)
    -> Fora do horário (>8)
*/

let funcionario: {
    supervisores: string[],
    baterPonto:(horas:number) => string
} = {
    supervisores: ['Dilson', 'Pedro'],
    baterPonto(horario:number): string{
        if(horario <= 8){
            return "Ponto Normal"
        }else{
            return "Fora do Horario"
        }

    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))


//TIPOS
type Colaborador = {
    supervisores: string[],
    baterPonto:(horas:number) => string
} 

let colaborador: Colaborador = {
    supervisores: ['Dilson', 'Pedro'],
    baterPonto(horario:number): string{
        if(horario <= 8){
            return "Ponto Normal"
        }else{
            return "Fora do Horario"
        }

    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))

//Union Types (especificar os tipos que vc quer na variavel)
let nota:number | string  = 10
console.log(`Minha nota é ${nota}!`)
nota = "10"
console.log(`Minha nota é ${nota}!`)
// nota = true
// console.log(`Minha nota é ${nota}!`)



// checando tipos de forma manual
let valor = 30

if (typeof valor === "number"){
    console.log("É number")
}else{
    console.log(typeof valor)
}


// Tipo NEVER
function falha(msg: string):never {
    //while(true){}
    throw new Error(msg);
}
const produto ={
    nome: "nome qualquer",
    preco: 1,
    validaProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter nome')
        }
        if(this.preco <= 0){
            falha('Preço invalido')
        }
    }
}
produto.validaProduto()



//strictNullChecks

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "dilson",
    tel1:"135846",
    tel2:null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // tipo any, mas podemos colocar como tipo null (podeSerNulo:null = null)
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = "abc"
console.log(podeSerNulo)

//DESAFIO 2
//tipar o codigo abaixo
type ContaBancaria ={
    saldo: number, 
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}
 
type Correntista ={
    nome: string, 
    contaBancaria: ContaBancaria;
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)