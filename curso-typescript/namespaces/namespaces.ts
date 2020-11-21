//NAMESPACES SIMPLES

// namespace Area{
//     const PI = 3.14
    
//     export function circunferencia (raio: number): number {
//         return PI * Math.pow(raio, 2)
//     }
    
//     export function retangulo (altura: number, largura: number): number {
//         return altura * largura
//     }
// }

// const PI = 2.99
// console.log("NameSpace Simples")
// console.log(Area.circunferencia(10))
// console.log(Area.retangulo(10, 20))

// console.log(PI)


//NAMESPACES ANINHADOS

// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14

//         export function circunferencia(raio: number): number {
//             return PI * Math.pow(raio, 2)
//         }

//         export function retangulo(altura: number, largura: number): number {
//             return altura * largura
//         }
//     }
// }


///<reference path="geoCircunferencia.ts"/>
///<reference path="geoRetangulo.ts"/>


console.log("NameSpace Aninhado")
console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(20, 20))
