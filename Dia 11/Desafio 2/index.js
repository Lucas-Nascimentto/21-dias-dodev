// DECLARANDO AS VARIÁVEIS
let  arrayModelos = [];
let arrayAnos = [];
let arrayValores = [];
let modelo;
let ano;
let valor;
let quantidade = 0;
let opcao;
let i = 0;

// LOOP PARA O USUÁRIO CADASTRAR OS CARROS
while(opcao != "não"){
    modelo = prompt("Digite o modelo do veículo");
    ano = Number(prompt("Digite o ano do veículo"));
    valor = Number(prompt("Digite o valor do veículo"));
    arrayModelos[i] = modelo;
    arrayAnos[i] = ano;
    arrayValores[i] = valor;
    i++;
    quantidade++;
    opcao = prompt("Deseja continuar? (sim/não)");
}

// PRINTANDO NA TELA AS INFORMAÇÕES
for(i = 0; i < quantidade; i++){
    console.log(arrayModelos[i] + ", " + arrayAnos[i] + " Valor: R$" + arrayValores[i])
}

// ORDENANDO POR PREÇO
for(let k = 0; k < quantidade - 1; k++){
    for(let j = 0; j < quantidade - 1; j++){
        if(arrayValores[j] > arrayValores[j + 1]){

            let modeloMaiorValor = arrayModelos[j];
            arrayModelos[j] = arrayModelos[j + 1];
            arrayModelos[ j + 1] = modeloMaiorValor;

            let anoMaiorValor = arrayAnos[j];
            arrayAnos[j] = arrayAnos[j + 1];
            arrayAnos[ j + 1] = anoMaiorValor;

            let maiorValor = arrayValores[j];
            arrayValores[j] = arrayValores[j + 1];
            arrayValores[ j + 1] = maiorValor;
        }
    }
}

// PRINTANDO NA TELA
console.log("Carros ordenados pelo preço:");
for(let j = 0; j < quantidade; j++){
    console.log(arrayModelos[j] + " - " + arrayAnos[j] + " - " + arrayValores[j]);
}
