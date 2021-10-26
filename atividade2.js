//atividade 02
//01 
var palavras01 = 'Apredendo ';
var palavras = 'strings em JavaScript';
console.log(palavras01 + palavras);

//02
var palavra1 = 'palavra1';
var palavra2 = 'palavra2';
var palavra3 = 'palavra3';
let frase1 = 'Esta é a frase com a ';
let frase2 = 'Esta é a frase com a ';
let frase3 = 'Esta é a frase com a ';
console.log(frase1.concat(palavra1));
console.log(frase2 + palavra2);
console.log(frase3.concat(palavra3));

//03
let vetor = ['a', 'b', 'a', 'a', 'c', 'b']
let ordemCrescente = vetor.sort();
console.log(ordemCrescente);
let ordemInversa = ordemCrescente.reverse();
console.log(ordemInversa);