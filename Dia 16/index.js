// Função para o usuário escolher o que ele deseja fazer
function escolha(){
    let escolha = Number(prompt("O que você deseja fazer? [1] cadastrar, [2] login, [3] exlcuir ou [4] encerrar?"));

    return escolha;
}

// Declaração das variáveis
let i = 0;
let arrayNomes = []
let arraySenhas = []
let opcao = 0;
let nome;
let senha;

// Função para cadastrar o usuário
function cadastro(){
    nome = prompt("Digite o nome");
    senha = Number(prompt("Digite a senha"));
    arrayNomes[i] = nome;
    arraySenhas[i] = senha;
    i++;

    //Outra opção:
    //arrayNomes.push(prompt("Digite o seu nome"))
    //arraySenhas.push(prompt("Digite a sua senha"))
}

// Função para o usuário fazer o login
function login(nome, senha){
    nome = prompt("Digite o nome");
    senha = Number(prompt("Digite a senha"));
    
    // Essa condição vai rodar se o nome e a senha digitada pelo o usuário está presente nos arrays
    if(arrayNomes.includes(nome) && arraySenhas.includes(senha)){
        return console.log("Login feito com sucesso!");
    }else{
        return console.log("Nome ou senha incorretos!");
    }
}

// Função para excluir uma pessoa cadastrada
function exlcuir(nome){
    nome = prompt("Digite o nome que você deseja excluir")
    // Essa condição irá rodar apenas se achar o nome que o usuário digitou no arrayNome. Caso não tenha, ele retorna -1 e vai para a condição else
    if(arrayNomes.indexOf(nome) !== -1){
        arrayNomes.splice(arrayNomes.indexOf(nome), 1);
        arraySenhas.splice(arraySenhas.indexOf(senha), 1);
        console.log("Nome e senha excluidos com sucesso!");
    }else{
        console.log("Nome ou senha inválida");
    }
}

// Lopp para o usuário rodar o código o quanto ele quiser. A cada case, chama-se uma função, e a case 4 é para o encerramento do códido.
while( opcao !== 1){
    switch (escolha()){

        case 1:
            cadastro();
            break;

        case 2:
            login();
            break;

        case 3:
            exlcuir();
            break;

        case 4:
            console.log("Programa encerrado!");
            opcao = 1;
            break;

        default:
            prompt("Opção inválida!");
    }

}
