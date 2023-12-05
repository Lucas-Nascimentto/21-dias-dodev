// DECLARANDO AS VARIÁVEIS
let num;
let array = [];
let i = 0;
let quantidade = Number(prompt("Quantos números você deseja adicionar no array?"));

// LOOP PARA ADICIONAR A QUANTIDADE DE NÚMEROS DESEJADOS NO ARRAY 
while(i < quantidade){
    num = Number(prompt("Digite o " + (i + 1) + "° número"));
    array[i] = num;
    i++;
}

// DEMONSTRAÇÃO DO ARRAY NA FORMA CRESCENTE
console.log("Array na ordem correta.");
for(i = 0; i < quantidade; i++){
    console.log(array[i]);
}

// DEMONSTRAÇÃO DO ARRAY NA FORMA DECRESCENTE
console.log("Array na ordem invertida.")
for(i = (quantidade - 1); i >= 0; i--){
    console.log(array[i]);
}