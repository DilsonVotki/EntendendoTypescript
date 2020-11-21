let canal: string = 'Gaveta'
let inscritos: number = 45678765

// canal = inscritos
console.log(`Canal = ${canal}`)

// declarando "nome", ele da erro pq pega a declaração "nome" de algum outro arquivo do projeto, 
//e nao compila o TS pq tem erro

// let nome: string = 'Pedro'
console.log(`Nome = ${nome}`);


function soma(a: any, b: any){
    return a+b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar (isManha: boolean): string {
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia'
    }else{
        saudacao = 'Bom tarde'
    }
    return saudacao
}