//Boa pratica fazer a classe nesta ordem de 
// 1) Variáveis comuns a todo mundo - idade e passos.
// 2) Construtor
// 3) Ações 

//OBS: O THIS aponta diretamente para um objeto, sem ele (nas CLASSES) não é possível.

class Pessoa{
    
    //1)
    idade = 0;
    passos = 0;

    //2)
    constructor(nome) {
        this.nome = nome;
    }

    //3)
    deUmPasso(){
        this.passos++;
    }

    //verificando se o número digitado para a idade é reamente um número
    escrevendo_idade(nova_idade){
        if(typeof nova_idade == 'number'){
            this.idade = nova_idade;
        } else{
            console.log('Idade não aceita. (Só números.)')
        }
    }

}

//instaciando as pessoas (objetos)
let pessoa1 = new Pessoa("Arthur");
let pessoa2 = new Pessoa("Gael");
let pessoa3 = new Pessoa("Miguel");

//Fazendo a pessoa (Arthur) dar um passo
pessoa1.deUmPasso();

//exibindo a nome da pessoa e quantos passos deu.
console.log(`${pessoa1.nome} deu ${pessoa1.passos} passo(s).`);

//exibindo outra pessoa e mostrando que ela não deu nenhuma passo
console.log(`${pessoa2.nome} deu ${pessoa2.passos} passo(s).`)

//Fazendo a pessoa (Arthur) dar outro passo
pessoa1.deUmPasso();

//exibindo novamente a quantidade de passos da primeira pessoa
console.log(`${pessoa1.nome} deu ${pessoa1.passos} passo(s).`)

//escrevendo nova idade para pessoa
pessoa2.escrevendo_idade(4);
//exibindo a idade e quantos passos deu a pessoa
console.log(`${pessoa2.nome} deu ${pessoa2.passos} passo(s) e tem ${pessoa2.idade} anos.`);

//adicionando passos
pessoa3.deUmPasso();
pessoa3.deUmPasso();
pessoa3.deUmPasso();
//exibindo a pessoa e passos
console.log(`${pessoa3.nome} deu ${pessoa3.passos} passo(s).`);

//tendando adicionar uma idade a outra pessoa.
pessoa3.escrevendo_idade('asddkf');
//exibindo idade da pessoa
console.log(`${pessoa3.nome} tem ${pessoa3.idade}.`)