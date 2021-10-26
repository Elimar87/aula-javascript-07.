//atividade 03
//01
let frase = 'Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.';
console.log(frase.length);
let fraseTudoGrande = frase.toUpperCase();
console.log(fraseTudoGrande);
//O número de vogais da string.
let fraseTudoNormal = fraseTudoGrande.toLowerCase();
console.log(fraseTudoNormal);
let EncontrarUmaPalavra = frase.indexOf('humanidade')
console.log(EncontrarUmaPalavra);

//02
function numero(){
  for(let i = 0; i <=100; i++){
    if(i % 2 == 0){
      let array = [i];
      let string = array.toString();
      console.log(string);
    }
  }
}