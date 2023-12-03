let opcao = Number(prompt("Escolha uma das três opções. [1] gasolina, [2] álcool, [3] calibrar os pneus"))

switch (opcao){
    case 1:
        // o litro da gasolina é R$ 5,00
        let valorGasolina = Number(prompt("Quantos reais de gasolina você deseja?"))
        let litroGasolina= valorGasolina/5
        console.log("Foi abastecido " + litroGasolina + "L de gasolina")
        break;
        
     case 2:
        // o litro do álcool é R$ 3,00
        let valorAlcool = Number(prompt("Quantos reais de álcool você deseja?"))
        let litroAlcool = valorAlcool/3
        console.log("Foi abastecido " + litroAlcool + "L de álcool")
        break;

     case 3:
        console.log("Pneus calibrados com sucesso!")
        break;

     default:
        console.log("Opção inválida!")
        break;
}