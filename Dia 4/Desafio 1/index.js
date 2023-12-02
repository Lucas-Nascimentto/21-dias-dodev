// Declrando as variáveis e perguntando ao usuário
let fome = prompt("Você está com fome? Digite sim ou não.")
let dinheiro = prompt("Você está com dinheiro? Digite sim ou não.")
let restaurante = prompt("O restaurante está aberto? Digite sim ou não")

if(fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa")
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Peça um delivery!")
}else{
    console.log("Hoje a janta será no restaurante preferido!")
}