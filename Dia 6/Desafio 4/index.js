// Tabuada de um número e de seus dois próximos números 

let numero = Number(prompt("Digite o número que você deseja ter a tabuáda"))

for(let i = numero; i <= numero + 2; i++){
    console.log("Tabuada do número: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}
