// DECLARANDO AS VARIÁVEIS
let arrayNomes = [];
let arraySenhas = [];
let opcao;
let continuar = true;
let nome;
let senha;
let i = 0;

// LOOP PARA CONTINUAR OU NÃO
while(continuar){

    // OPÇÕES DE ESCOLHA DO USUÁRIO
    opcao = Number(prompt("Digite o número da opção que você deseja? [1] cadastrar, [2] login, [3] excluir ou [4] encerrar"));

    // FUNCIONAMENTO DE CADA ESCOLHA
    switch(opcao){

        // CADASTRANDO O USUÁRIO 
        case 1:
            nome = prompt("Digite o nome que deseja cadastrar");
            senha = prompt("Digite a senha que deseja cadastrar");
            arrayNomes[i] = nome;
            arraySenhas[i] = senha;
            i++;
            break;
        
        // FAZENDO O LOGIN
        case 2:
            nome = prompt("Digite o nome");
            senha = prompt("Digite a senha");

            for(i = 0; i < nome.length; i++){
                if(nome == arrayNomes[i]){
                    if(senha == arraySenhas[i]){
                        console.log("SUCESSO!");
                    }
                }
            }
            break;

        // EXCLUINDO O USUÁRIO
        case 3:
            nome = prompt("Digite o nome");

            for (i = 0; i < arrayNomes.length; i++) {
                if (nome === arrayNomes[i]) {
                    // Movendo os elementos para frente para preencher o espaço vazio. Esse i tem o valor da posição em que vai ser excluído o nome. Dessa forma, o elemento sucessor do elemento que foi excluído vai ocupar a sua posição. Caso seja excluído o último elemento, ele não entra no for, mas é excluído pq no final do código é reduzido o tamanho dos arrays.
                    for (let j = i; j < arrayNomes.length - 1; j++) {
                        arrayNomes[j] = arrayNomes[j + 1];
                        arraySenhas[j] = arraySenhas[j + 1];
                    }

                    // Reduzindo o tamanho dos arrays. Aqui é removido a ultima posição do array
                    arrayNomes.length--;
                    arraySenhas.length--;

                    console.log("Usuário excluído com sucesso!");
                    break;
                }
            }
            break;

        // ENCERRANDO O CÓDIGO
        case 4:
            continuar = false;
            break;

        default:
            console.log("Opção inválida");
            break;
    }
}