// Adicionando os valores no array
let arrayA = [13, 20, 10, 22, 24, 22, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function EmComum(arrayA, arrayB) {
    let i, j, k = 0;
    let arrayC = [];

    // Adicionando os elementos em comum do arrayA e o arrayB no arrayC
    for (i = 0; i < arrayA.length; i++) {
        for (j = 0; j < arrayB.length; j++) {
            if (arrayA[i] === arrayB[j] && !arrayC.includes(arrayA[i])) { //o includes vai analisar se o elemento que vai ser adicionado no arrayC ja está presente nele
                arrayC[k] = arrayA[i];
                k++;
            }
        }
    }

    for (i = 0; i < arrayC.length; i++) { // demonstração dos elementos em comum
        console.log(arrayC[i]);
    }
}

EmComum(arrayA, arrayB); // chamada da função com parâmetro
