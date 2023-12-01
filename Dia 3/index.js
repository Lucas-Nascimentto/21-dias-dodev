// declaração das variáveis junto com a resposta do usuário

let nome = prompt("Digite o seu nome")
let idade = parseInt(prompt("Digite a sua idade"))
let altura = Number(prompt("Digite a sua altura"))
let peso = Number(prompt("Digite o seu peso"))
let anoDeNascimento = (2023 - idade)
let imc = peso / (altura * altura)

// demonstração no console
console.log("Olá Lucas, você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg e seu imc é de " + imc + "kg/m2")