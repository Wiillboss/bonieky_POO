/*Atenção! Quando se usa uma variavel ESTATICA (static),
    ela pertence a classe (Pessoa), não ao objeto criado (Willian). Ela é um dado GERAL
  A forma correta de se chamar uma variavel estatica é chamar a classe primeiro e em seguida a variavel.  
*/

class Pessoa{

    //variavel estatica.
    static maos = 2;
    static filhos = 0;
    idade = 0;

    constructor(nome){
        this.nome = nome;
    }

    //This aponta para o objeto criado (Willian), Pessoa.maos aponta para varivel ESTATICA (static) criada dentro da classe Pessoa.
    //This aponta para um dado ESPECIFICO (no caso nome) de um objeto (WILLIAN), já a VAR static aponta para dados GERAL da classe. 
    diga_ola(){
        console.log(`Ola, eu sou o ${this.nome} e tenho ${Pessoa.maos} mãos e ${Pessoa.filhos} filhos. Hoje ele possui ${this.idade} anos.`)
    }

}

//Criando um objeto
let p1 = new Pessoa("Willian");

//Alterando uma variavel estatica, primeiro chamar a classe e depois a variavel
Pessoa.filhos = 3;

//Alterando uma variavel para um objeto
p1.idade = 38;

//Objeto e a função criada dentro da classe Pessoa.
p1.diga_ola();
