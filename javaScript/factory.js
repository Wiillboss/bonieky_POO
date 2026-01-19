//Factory (neste caso) é uma função que cria uma instancia (objeto) daquilo que se deseja criar.

class Pessoa{
    idade = 0;

    constructor(nome){
        this.nome = nome;
    }

}


//Função que cria pessoas e tem seus parametros o nome e a idade
//Função que auxilia no processo de instancia (criar um objeto) uma classe (PESSOA).
function criando_pessoa (nome, idade){
    let p = new Pessoa(nome);
    p.idade = idade;
    return p;
}

//Instaciando (criando objeto - Pessoa) com a função
let p1 = criando_pessoa("Willian", 38);
console.log(`Meu nome é ${p1.nome} e minha idade é ${p1.idade}.`)