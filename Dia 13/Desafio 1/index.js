// classe para as informações do computador
class Computador{
    Tipo; 
    Processador; 
    Video; 
    Armazenamento; 
    MemoriaRam;
    Ssd;

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }

    Exibirinformacoes(){
        console.log("Informações do computador:");
        console.log("Tipo: " + this.Tipo);
        console.log("Processador: " + this.Processador);
        console.log("Vídeo: " + this.Video);
        console.log("Armazenamento: " + this.Armazenamento);
        console.log("MemoriaRam: " + this.MemoriaRam);
        console.log("Ssd: " + this.Ssd);
    }
}

// declranado as variáveis
let continuar = true;
let arrayComputadores = [];
let i = 0;
quantidade = 0;

// loop para cadastrar quantos computadores o usuário quiser
while(continuar){
    let tipo = prompt("Digite o seu tipo de máquina");
    let processador = prompt("Digite o seu processador");
    let video = prompt("Digite a sua placa de vídeo");
    let armazenamento = parseInt(prompt("Digite o seu armazenamento"));
    let memoriaRam = parseInt(prompt("Digite a sua memoriaRam"));
    let ssd = prompt("Digite o seu sdd");

    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd);

    arrayComputadores[i] = computador;

    let desejaContinuar = prompt("Deseja continuar? (s/n)");

    if(desejaContinuar == "n"){
        continuar = false;
    }else{
        i++;
    }
    quantidade++;
}

// mostrando as informações dos computadores
for(i = 0; i < quantidade; i++){
    console.log("Informações do " + (i + 1) + "° computador:");
    arrayComputadores[i].Exibirinformacoes();
}

