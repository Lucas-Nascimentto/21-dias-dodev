let opcao;

// ESTRUTURA DE REPETIÇÃO PARA CADASTRAR MAIS DE UMA PESSOA
while(opcao != 0){

    // DECLARANDO AS VARIÁVEIS
    let nome = prompt("Digite o seu nome");
    let idade = Number(prompt("Digite a sua idade"));
    let peso = Number(prompt("Digite o seu peso"));
    let altura = Number(prompt("Digite a sua altura"));
    let profissao = prompt("Digite a sua profissão");

    console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura  e pesa " + peso + "Kg.");

    // VERIFICANDO A IDADE
    if(idade >= 18){
        console.log("Está liberado para tomar umas geladas");
    }else{
        console.log("Sem gelada para você");
    }

    // PRINTANTO A IDADE EM MESES, SEMANAS E DIAS
    console.log("Sua idade em meses é igual a " + (idade * 12) + " meses. Sua idade em semanas é igual a " + (idade * 52) + " semanas. Sua idade em dias é igual a " + (idade * 365) + " dias.");

    // VERIFICANDO O ANO EM QUE VOCÊ NASCEU E MONTANDO O CALCULO DO IMC
    let anoatual = 2023;
    let ano = anoatual - idade;
    let imc = peso / (altura * altura);

    // ANALISANDO O SEU IMC
    if(imc < 18.5){
        console.log(nome + ", você está muito magro");
    } else if(imc >= 18.5 &&  imc <= 24.9){
        console.log(nome + ", você está normal");
    }else if (imc >= 25 && imc <= 30){
        console.log(nome + ", você está acima do peso ideal");
    }else{
        console.log(nome + ", você está obeso");
    }

    // INFORMANDO O ANO EM QUE VOCÊ NASCEU
    console.log("Você nasceu em " + ano);

    // EXIBINDO TODOS OS ANOS QUE VOCÊ JÁ VIVEU
    let idadeAtual = 0;
    for (let i = ano; i <= anoatual; i++) {
        console.log(i + " - " + idadeAtual + " anos de idade");
        idadeAtual++;
    }

    Number(opcao = prompt("Deseja cadastrar outra pessoa? [1] sim ou [0] não"));
}