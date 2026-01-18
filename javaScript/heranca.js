/*Lembrando que, se a variável está fora do construtor e ja está inicializada,
    quer dizer que todo objeto vai começar com o mesmo VALOR caso não seja alterada. */ 
class Pessoa{
    idade = 0;

    constructor(nome){
        this.nome = nome;
    }

    diga_ola(){
        console.log(`${this.nome} diz ola!`);
    }

}

// A classe Estudante está herdando OBRIGATÒRIAMENTE tudo da classe Pessoa (IDADE e NOME)
// A classe tem o atributo MATRICULA (que só pertence a ela) e o nome que pertence a classe pai (PESSOA).
// SUPER aponta para uma variável DIRETAMENTE da a classe PAI (no caso, a classe pai de ESTUDANTE é PESSOA)
class Estudante extends Pessoa{

    constructor(nome, matricula){
        super(nome);
        this.matricula = matricula
    }

    //Sobreescrevendo uma função da classe pai
    diga_ola(){
        console.log(`${this.nome} é um estudante e diz OI!`)
    }

    //Como a função foi da classe PAI foi reescrita, foi criada outra função que indique a herança com SUPER
    sayHello(){
        super.diga_ola();
    }
}

//Criando ESTUDANTE/objeto (que também é uma PESSOA (Classe Pessoa))
//Lembrando que esse objeto está herdando o nome da classe Pessoa por conta do SUPER dentro do construtor da classe ESTUDANTE.
let p1 = new Estudante("Willian",1);
p1.idade = 20;
console.log(`${p1.nome} tem ${p1.idade} anos e sua matrícula é ${p1.matricula}.`)

let p2 = new Estudante("Pedro", 2);
console.log(`${p2.nome} tem a matrícula ${p2.matricula}.`)

//Mostrando pessoa (objeto) com a função de dizer OLA que foi criada dentro da classe pai (Pessoa).
//Está função foi sobreescrita na classe FILHO (Estudante).  
p2.diga_ola();
p1.diga_ola();

//Mostrando pessoa (objeto) com uma função da classe Estudante (filho) que herda outra função da classe Pessoa (pai) com o SUPER.
p1.sayHello();
p2.sayHello();