function escolha(){
    let escolha = Number(prompt("O que você deseja fazer? [1] cadastrar, [2] login, [3] exlcuir ou [4] encerrar?"));

    return escolha;
}

let i = 0;
let arrayNomes = []
let arraySenhas = []
let opcao = 0;
let nome;
let senha;

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

function login(nome, senha){
    nome = prompt("Digite o nome");
    senha = Number(prompt("Digite a senha"));
    
    if(arrayNomes.includes(nome) && arraySenhas.includes(senha)){
        return console.log("Login feito com sucesso!");
    }else{
        return console.log("Nome ou senha incorretos!");
    }
}

function exlcuir(nome){
    nome = prompt("Digite o nome que você deseja excluir")
    if(arrayNomes.indexOf(nome) !== -1){
        arrayNomes.splice(arrayNomes.indexOf(nome), 1);
        arraySenhas.splice(arraySenhas.indexOf(senha), 1);
        console.log("Nome e senha excluidos com sucesso!");
    }else{
        console.log("Nome ou senha inválida");
    }
}

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
