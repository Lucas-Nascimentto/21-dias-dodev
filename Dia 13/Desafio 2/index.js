// Criando a classe corrida
class Carro{
    Nome;
    Potencia;
    VeolicidadeMaxima;
    Acelereacao;

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.VeolicidadeMaxima = velocidadeMaxima;
        this.Acelereacao = aceleracao;
    }
    // calculando quem teve o menor tempo pecorrido
    Tempo(distancia){
        let resultado = distancia / (this.VeolicidadeMaxima / this.Acelereacao);
        return resultado;
    }
}

class Corrida{
    Nome;
    Tipo;
    Distancia;
    Participantes;
    Vencedor;

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }

    // definindo o vencedor a partir do menor tempo pecorrido
    DefinirVencedor(){
        let menorTempo = this.Participantes[0].Tempo(this.Distancia);
        let vencedor = this.Participantes[0];

        for(let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].Tempo(this.Distancia);
            if( tempo < menorTempo){
                menorTempo = tempo;
                vencedor = this.Participantes[i];
            }
        }
        return this.Vencedor = vencedor;
    }
    // função para exibir o vencedor 
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }

}
// adicionando o modo da corrida e os participantes da corrida
let corrida = new Corrida("Monza", "Formula 1", 60000);
corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5);
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9);
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10);

// chamando as funções para exibir o vencedor 
corrida.DefinirVencedor();
corrida.ExibirVencedor();
