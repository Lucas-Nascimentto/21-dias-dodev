// DECLARANDO AS VARIÁVEIS
let num = Number(prompt("Digite um número"));
let array = [];
let i;

// ESTRUTURA BASE PARA O CÁLCULO DE FABONACCI
array[0] = (num - 1);
array [1] = num;

// REALIZAÇÃO DO CÁLCULO ATÉ 10 POSIÇÕES
for(i = 2; i < 10; i++){
    array[i] = array[i -1] + array[i - 2];
}

// PRINTANDO OS NÚMEROS
console.log("Números de fibonacci até 10 posições do número " + num + ": " + array);