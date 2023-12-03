let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
let opcao = Number(prompt("Escolha uma opção de 1 a 4"))

switch (opcao){
     case 1:
        let soma = num1 + num2
        console.log("A soma dos dois números é: " + soma)
        break;
    
     case 2:
        let subtracao = num1 - num2
        console.log("A subtração dos dois números é: " + subtracao)
        break;
     
     case 3:
        let multiplicacao = num1 * num2
        console.log("A multiplicação dos dois números é: " + multiplicacao)
        break;

     case 4:
        let divisao = num1 / num2
        console.log("A divisão dos dois números é: " + divisao)
        break;

     default:
        console.log("Essa não é uma opção!")
        break;
}
