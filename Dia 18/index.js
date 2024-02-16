// Criando a Classe Livro

class Livro{
    Titulo;
    Autor;
    Editora;
    AnoDePublicacao;
    Disponibilidade = true;

    constructor(titulo, autor, editora, anoDePublicacao){
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDePublicacao = anoDePublicacao;
    }
}

// Criando Objetos da Classe Livro
let livrosCriados = [];
livrosCriados.push(new Livro("livro1", "lucas", "editora1", 2002));
livrosCriados.push(new Livro("livro2", "julia", "editora2", 2004));
livrosCriados.push(new Livro("livro3", "leticia", "editora3", 2000));
livrosCriados.push(new Livro("livro4", "luiza", "editora4", 2008));
livrosCriados.push(new Livro("livro5", "davi", "editora5", 2005));

// Criando a Classe Biblioteca
class Biblioteca{
    Nome;
    Endereco;
    Telefone;
    AcervoDeLivros = [];

    constructor(nome, endereco, telefone, acervoDeLivros){
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoDeLivros = acervoDeLivros;
    }

    // Método para Buscar um Livro
    buscarLivro(titulo){
        for(let i = 0; i < livrosCriados.length; i++){
            if(titulo == livrosCriados[i].Titulo){
                console.log("Titulo: ", livrosCriados[i].Titulo);
                console.log("Autor: ", livrosCriados[i].Autor);
                console.log("Editora: ", livrosCriados[i].Editora);
                console.log("Ano de Publicação: ", livrosCriados[i].AnoDePublicacao);
                console.log("Disponibilidade: ", livrosCriados[i].Disponibilidade);
            }
        }
    }

    // Método para Reservar um Livro
    emprestimoDeLivro(titulo){
        livrosCriados.forEach(livro =>{
            if(titulo == livro.Titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false;
                    return true;
                } else{
                    return false;
                }
            }
        });
    }

    // Método para Devolver o Livro
    devolucaoDoLivro(titulo){
        livrosCriados.forEach(livro =>{
            if(titulo == livro.Titulo){
                livro.Disponibilidade = true;
            }
        });
    }
    
}

// Criando um Objeto da Classe Biblioteca
let biblioteca = new Biblioteca("B1", "R1", 75, livrosCriados);

let continuar = true;

do {
    let opcao = parseInt(prompt("1- Buscar um livro \n 2- Reservar um livro \n 3- Devolver um livro \n 4- Encerrar o programa"));

    switch (opcao) {

        case 1:
            biblioteca.buscarLivro(prompt("Qual o título do livro?"));
            break;

        case 2:
            biblioteca.emprestimoDeLivro(prompt("Qual o título do livro?"));
            break;

        case 3:
            biblioteca.devolucaoDoLivro(prompt("Qual o título do livro?"));
            break;

        case 4:
            console.log("Finalizando o programa!");
            continuar = false;
            break;

        default:
            console.log("Opção inválida!");
            break;

    }
} while (continuar);
