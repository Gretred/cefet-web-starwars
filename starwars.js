// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const API_ENDPOINT = 'https://swapi.dev/api'

//Exercicio 1

import { play } from "./music.js"

let audioUrl = 'audio/tema-sw.mp3';
let coverImageUrl = 'imgs/logo.svg';
let title= 'Intro';
let artist = 'John Williams';
let documentEl = document.querySelector('body');
let obj = {audioUrl, coverImageUrl, title, artist};
let player = play(obj,documentEl);


//Exercicio 2
import { roman } from "./roman.js";
import {restartAnimation} from "./restart-animation.js";
try{
const filmes = await fetch('https://swapi.dev/api/films')
const dados = await filmes.json()
for(let i = 0 ; i<7; i++){
    
    let titulo = dados.results[i].title;
    let episodio = dados.results[i].episode_id;
    let conteudo = dados.results[i].opening_crawl;
    let romano = roman(episodio);
    let texto = 'Episode ' + romano + ' - ' + titulo;
    let containerEl = document.querySelector("#filmes ul");
    let liEl = document.createElement('li');
    liEl.innerHTML = texto;
    let texto2 = 'Episode ' + romano + '\n'+ titulo + '\n\n'+ conteudo;
    liEl.addEventListener('click', function (){
        let introEl = document.querySelector('pre.introducao');
        introEl.innerHTML="";
        introEl.innerHTML =texto2;
        let restart = restartAnimation(introEl);
        
    
    })
    containerEl.appendChild(liEl);
 }

}catch(erro) {
    console.error(`Deu ruim: ${erro}`)
}
//Exercicio 3

