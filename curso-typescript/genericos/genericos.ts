function echo(objeto: any) {
    return objeto
}

console.log(echo('Dilson').length)
console.log(echo(34).length)
console.log(echo({ nome: 'Dilson', idade: 34 }))

// USANDO GENERICS

function echoGenerics<TipoGenerico>(objeto: TipoGenerico): TipoGenerico {
    return objeto
}

console.log(echoGenerics('Dilson').length)
console.log(echoGenerics<number>(34))
console.log(echoGenerics({ nome: 'Dilson', idade: 34 }).nome)

//GENERICS DISPONIVEL NA API

const avaliacoes: Array<number> = [10, 9, 8]
avaliacoes.push(7)
//avaliacoes.push('6')
console.log(avaliacoes)

// ARRAYS COM GENERICS
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([10, 11, 12])
imprimir<string>(["Oi", "td bem", "tchau"])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Dilson', idade: 34 },
    { nome: 'Taina', idade: 33 }
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Lara', idade: 9 },
    { nome: 'Yasmin', idade: 2 }
])

//TIPO GENERICO
type Echo = <T>(data: T) => T
const chamaEcho: Echo = echoGenerics
console.log(chamaEcho('Qualquer coisa'))

// CLASSES COM GENERICS
abstract class OperacaoBinaria<T, R> {
    constructor(public op1: T, public op2: T) { }

    abstract executar(): R
}

// console.log(new OperacaoBinaria ('Bom', ' Dia').executar())
// console.log(new OperacaoBinaria (3, 7).executar())
// console.log(new OperacaoBinaria (3, ' Opa').executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.op1 + this.op2
    }
}

console.log(new SomaBinaria(3, 7).executar())
console.log(new SomaBinaria(10, 232).executar())

//DESAFIO DIFERENÇA ENTRE DATAS
class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.op1)
        const t2 = this.getTime(this.op2)
        const dif = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(dif / dia)} dias`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 5, 2022)
console.log(new DiferencaEntreDatas(d1, d2).executar())


// DESAFIO CLASSE FILA
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir

class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if (this.fila.length > 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Di', 'Tai', 'La', 'Ya')

fila.imprimir()
fila.entrar('Yu')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(false, true)




// DESAFIO MAPA
// Array de objetos (chave/valor) -> itens
// Métodos: obter(Chave), colocar ({ C, V })
// limpar(), imprimir()

console.log('DESAFIO MAPA!!!')

type ChaveValor<C, V> = {chave: C, valor: V}

class Mapa<C, V> {
    
    itens: Array< ChaveValor<C, V>> = new Array< ChaveValor<C, V>>()
    
    obter(chave: C): ChaveValor<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave)        
        return resultado ? resultado[0] : null
    }

    colocar(chaveValor: ChaveValor<C, V>) {
        const encontrato = this.obter(chaveValor.chave)
        if(encontrato) {
            encontrato.valor = chaveValor.valor
        } else {
            this.itens.push(chaveValor)
        }
    }

    limpar() {    
        this.itens = new Array< ChaveValor<C, V>>()
    }

    imprimir() {
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Dilson' })
mapa.colocar({ chave: 2, valor: 'Taina' })
mapa.colocar({ chave: 3, valor: 'Lara' })
mapa.colocar({ chave: 1, valor: 'Yasmin' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()