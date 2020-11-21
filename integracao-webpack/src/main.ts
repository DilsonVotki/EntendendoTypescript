import $ from 'jquery';
import Livro from "./modelo/livro";

const livro = new Livro('Dom Quixote', 100.00, 0.10)
//console.log(livro.precoComDesconto())

$('body').append(`<h1>Livro: ${livro.nome}</h1>`)
$('body').append(`<h2>Preço: ${livro.precoComDesconto()}</h2>`)

