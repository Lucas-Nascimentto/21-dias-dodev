// DECLARANDO AS VARIÁVEIS
let opcao;
let aumento;
let salario;
let idade;
let nome; 
let porcentagem = 0.015;
let ano = 10;
let anoatual = 2023;

// LOOP DE CADASTRO
while(opcao != "sim"){
 
     nome = prompt("Digite o seu nome");
     idade = Number(prompt("Digite a sua idade"));
     salario = Number(prompt("Digite o seu salário"));

    console.log("Olá " + nome + ", você tem " + idade + " anos e seu salário é de R$" + salario + ".");

    opcao = prompt("As informações digitadas estão corretas? (sim/não)");
}

// PROJEÇÃO DE SALÁRIO DO 1° ANO ATÉ O 10° ANO
for(let i = 0; i < ano; i++){
    aumento = salario * porcentagem;
    console.log("Em " + (anoatual + 1) + " você terá um aumento de R$" + aumento);
    porcentagem *= 2;
    anoatual++;
}


