let nome = prompt("Digite o seu nome");
let cpf = prompt("Digite o seu cpf");
let saldo = 1000;
let saque;
let deposito;
let opcao2;
let opcao;
let maior = 0;
let somador = 0;
let contador = 0;

while (opcao2 !== 0) {
    opcao = Number(prompt("[1] Saque ou [2] Depósito"));
    switch (opcao) {
        case 1:
            saque = Number(prompt("Quanto você deseja sacar?"));

            if (saque > saldo) {
                console.log("Seu saldo é insuficiente para sacar esse valor. Seu saldo é de R$" + saldo);
            } else if (saque > 0 && saque <= saldo) {
                saldo -= saque;
                console.log("O seu saldo agora é de R$" + saldo);
                somador += saque;
                contador += 1;
            } else if (saque < 0) {
                console.log("Não é possível sacar um número negativo. Seu saldo é de R$" + saldo);
            }

            if (saque > maior) {
                maior = saque;
            }
            break;

        case 2:
            deposito = Number(prompt("Quanto você deseja depositar?"));
            if (deposito > 0) {
                saldo += deposito;
                console.log("Seu saldo agora é de R$" + saldo);
                somador += deposito;
                contador += 1;
            } else {
                console.log("Não é permitido depositar um valor negativo. Seu saldo é de R$" + saldo);
            }

            if (deposito > maior) {
                maior = deposito;
            }
            break;

        default:
            console.log("Opção inválida");
            break;
    }

    opcao2 = Number(prompt("Deseja continuar? [1] sim, [0] não"));
}

console.log("O maior valor de saque ou depósito foi de R$" + maior);
console.log("A média dos valores inseridos é igual a R$" + (somador / contador));
