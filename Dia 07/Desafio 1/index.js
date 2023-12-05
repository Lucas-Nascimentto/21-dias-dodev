
let sexo;
let nota;
let opcao;
let contadorNota = 0;
let contadorDeAluno = 0;
let contadorDeSexoMasculino = 0;
let contadorDeSexoFeminino = 0;
let maior = 0; 

while (opcao !== "não") {
    sexo = prompt("Qual é o seu sexo?");
    nota = Number(prompt("Digite sua nota"));
    contadorNota += nota;
    contadorDeAluno += 1;

    if (sexo === "masculino" && nota > maior) {
        maior = nota; 
    }

    if (sexo === "masculino") {
        contadorDeSexoMasculino += 1;
    } else if (sexo === "feminino" && nota > 7) {
        contadorDeSexoFeminino += 1;
    }

    opcao = prompt("Deseja cadastrar mais alguém?");
}

console.log("A média da turma é de " + (contadorNota / contadorDeAluno));
console.log(contadorDeSexoMasculino + " homens enviaram as notas");
console.log(contadorDeSexoFeminino + " mulheres tiraram a nota acima de 7");
console.log("A maior nota entre os homens é " + maior);
