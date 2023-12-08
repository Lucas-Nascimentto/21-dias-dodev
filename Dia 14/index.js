// Informações de nome e salário do usuário
function informacao(){
    let nome = prompt("Digite o seu nome");
    let salario = Number(prompt("Digite o seu salário")); 
    aumento(nome,salario);  
}

// função para calcular o aumento e o reajuste de salário e printar todas as informações
function aumento(nome,salario){
    let aumento
    let porcentagem;
    let reajuste;
    if(salario <= 1500){
        porcentagem = 0.2;
        aumento = salario * porcentagem;
        reajuste = salario + aumento;
    } else if(salario > 1500 &&  salario <= 2000){
        porcentagem = 0.15;
        aumento = salario * porcentagem;
        reajuste = salario + aumento;
    } else if(salario > 2000 && salario <= 3000){
        porcentagem = 0.1;
        aumento = salario * porcentagem;
        reajuste = salario + aumento;
    } else{
        porcentagem = 0.05;
        aumento = salario * porcentagem;
        reajuste = salario + aumento;
    }

    console.log(nome + ", o seu antigo salário era de R$" + salario + ". Você ganhou um aumento de " + (porcentagem * 100)+ "%. Seu salário agora é R$" + reajuste);
    // chamada da função para cadastrar novamente o usuário ou não
    novamente();
}

// função para repetir o cadastro do usuário
function novamente(){
    
    let opcao = prompt("Deseja calcular com novas informações? (s/n)");
    if(opcao == "s"){
        informacao();
    } else{
      console.log("Programa encerrado");
    }
}

// chamada da função para o funcionamento do código
informacao();
