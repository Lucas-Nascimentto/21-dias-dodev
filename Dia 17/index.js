// criando uma classe hoteis

class Hotel{
    Id
    Nome
    Categoria
    Endereco
    Telefone

        constructor(id, nome, categoria, endereco, telefone){
            this.Id = id;
            this.Nome = nome;
            this.Categoria = categoria;
            this.Endereco = endereco;
            this.Telefone = telefone;
        }
}

// criando uma classe Reservas

class Reserva{
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida

        constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
            this.Id = id;
            this.IdHotel = idHotel;
            this.Responsavel = responsavel;
            this.DiaEntrada = diaEntrada;
            this.DiaSaida = diaSaida;
        }
}

// Criando arrays
let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

// criando uma função para cadastrar hoteis

function CadastraHotel(){
   let nome = prompt("Qual o nome do hotel?");
   let categoria = parseInt(prompt("Qual a categoria do hotel?"));
   let endereco = prompt("Qual o endereço do hotel?");
   let telefone = prompt("Qual o telefone do hotel?");

   let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
   idHotel++;
   hoteis.push(hotel);
}

// criando uma função para cadastrar reservas

function CadastraReserva(){
    let idHotel;
    let existe = false;
    
    do{
        idHotel = parseInt(prompt("Qual o id do hotel?"));
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                existe = true;
            } else if (i === hoteis.length - 1){
                console.log("Id do hotel não cadastrado");
            }
        }
    }while(!existe);

    let nome = prompt("Qual é o seu nome?");
    let diaEntrada = parseInt(prompt("Qual o dia da entrada"));
    let diaSaida
    do{
        diaSaida = parseInt(prompt("Qual o dia da saida?"));

        if(diaSaida < diaEntrada){
            console.log("O dia da saida não pode ser menor do que o dia da entrada");
        }
    }while(diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++;
    reservas.push(reserva);
}

function ProcurarReservaPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1;
            console.log("Hotel: " , hoteis[i].Nome);
            console.log("Responsável: " , reserva.Responsavel);
            console.log("Dia da entrada: " , reserva.DiaEntrada);
            console.log("Dia da saída: " , reserva.DiaSaida);
        }
    });
}

function ProcurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva - 1].IdHotel;
    console.log("Hotel: " , hoteis[idHotel - 1].Nome);
    console.log("Endereço: " , hoteis[idHotel - 1].Endereco);
    console.log("Dia da entrada: " , reservas[idReserva - 1].DiaEntrada);
    console.log("Dia da saída: " , reservas[idReserva - 1].DiaSaida);

}

function ProcurarReservaPeloNome(nome){
    for(let i = 0; i < reservas.length; i++){
        if(nome == reservas[i].Responsavel){
            console.log("Id da reserva: " , reservas[i].Id);
            console.log("Hotel: " , hoteis[(reservas[i].IdHotel) - 1].Nome);
        }
    }
}

function ProcurarHotelPelaCategoria(categoria){
    let hoteisProcurados = [];
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome);
        }
    }
    return hoteisProcurados;
}

function AlterandoNumeroDeTelefone(idHotel, telefone){
    hoteis[idHotel - 1].Telefone = telefone;
    console.log("Número alterado com sucesso!");
}

let continua = true;
while(continua){
    opcao = parseInt(prompt("1- Cadastrar Hotel \n 2- Fazer uma reserva \n 3- Procurar reserva pelo hotel \n 4- Procurar hotel pela reserva \n 5- Procurar reserva pelo nome \n 6- Procurar hotel pela categoria \n 7- Alterar o telefone do hotel \n 8- Desejo encerrar o programa"));

    switch(opcao){
        case 1:
            CadastraHotel();
            break;
        
        case 2:
            CadastraReserva();
            break;

        case 3:
            ProcurarReservaPeloHotel(parseInt(prompt("Digite o id do hotel")));
            break;

        case 4:
            ProcurarHotelPelaReserva(parseInt(prompt("Digite o id da reserva")));
            break;

        case 5:
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável da reserva"));
            break;

        case 6:
           let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria do hotel")));
            console.log(hoteisProcurados);
            break;

        case 7:
            let idHotel = parseInt(prompt("Digite o id do hotel:"));
            let telefone = prompt("Digite o novo telefone:");
            AlterandoNumeroDeTelefone(idHotel, telefone);
            break;

        case 8:
            continua = false;
            break;

        default:
            console.log("Opção inválida!");
    }
}