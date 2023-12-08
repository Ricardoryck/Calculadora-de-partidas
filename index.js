function nomeHeroi (name) {
    name = " Ricardo"
    return name
}

let nome = nomeHeroi()

function vitoriasDerrotas (vitorias, Derrotas) {
    let media = vitorias-Derrotas
    return media
}

let media = vitoriasDerrotas (250, 45)

function rankingPontos(nivel) {
if(media <= 10){
    nivel = "ferro "
 }  else if( media >= 11 && media <= 20){
    nivel = " Bronze"
 }  else if( media >= 21 && media <= 50){
    nivel = " Prata"
 }  else if( media >= 51 && media <= 80){
    nivel = " Ouro" 
 }  else if( media >= 81 && media <= 90){
    nivel = " Diamante" 
 }  else if( media >= 91 && media <= 100){
    nivel = " Lendário"
 }  else{
    nivel =" Imortal";
 }
 return nivel
}

let nivel = rankingPontos()


console.log("O Herói" + nome + " tem um saldo de " + media + " vitórias e está no RANK de" + nivel)
