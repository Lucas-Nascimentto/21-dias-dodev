let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Qual é a sua idade?"))
let habilitacao = prompt("Você possui a carteira de motorista? Digite sim ou não")
let carro = prompt("Você possui algum carro? Digite sim ou não")

if(idade < 18 || habilitacao === "não"){
    console.log(nome + ", você não pode dirigir")
}else if (idade >= 18 && habilitacao === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir, mas não tem um carro")
}else{
    console.log(nome + ", você será motorista!")
}