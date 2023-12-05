//DECLARANDO AS VARIÁVEIS
let arrayNotas = [];
let arrayNomes = [];
let opcao;
let nome;
let nota;
let i = 0;
let quantidade = 0;
let soma = 0;

// LOOP PARA O USUÁRIO ADICIONAR OS NOMES E AS NOTAS DOS ALUNOS 
while(opcao != "não"){
    nome = prompt("Digite o seu nome");
    nota = Number(prompt("Digite a sua nota"));
    arrayNomes[i] = nome;
    arrayNotas[i] = nota;
    i++;
    quantidade++;
    soma += nota;
    opcao = prompt("Deseja continuar? (sim/não)");
}

// PRINTANDO NA TELA O NOME E A NOTA DE CADA ALUNO 
for(i = 0; i < quantidade; i++){
    console.log(arrayNomes[i] + " tirou " + arrayNotas[i] + " na prova");
}
// PRINTANDO A SOMA DAS NOTAS E A MÉDIA 
console.log("A soma das notas de todos os alunos é igual a: " + soma + ".");
console.log("A média dos alunos é igual a: " + (soma / quantidade + "."));