// contagem de 0 até o número desejado pelo o usuário

let numero = Number(prompt("Digite um número para fazer a contagem"))

console.log("A seguir, será demonstrado a contagem de 0 até o número " + numero + ":")

for(let i = 0; i <= numero; i++){
    console.log(i)
}