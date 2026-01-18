//Boa pratica começar a classe com letra maiuscula.
//Construtor é uma função e serve para indicar as propriedades

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}


//criando as pessoas (objetos INSTANCIAS)
let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);


//exibindo as pessoas (objetos) e seus atributos (nome e idade)
console.log(p1.name);
console.log(p2.name);
console.log(p3.name);
console.log(p1.age);
console.log(p2.age);
console.log(p3.age);

//exibindo as pessoas e seus atributos usando template
console.log(`O nome da primeira pessoa é: ${p1.name}, e ele(a) tem ${p1.age} anos.`); //Usando template.


//Caso queria que o construtor tenha apenas o nome, mas TODAS idade de cada objeto comece com zero(0)
//No caso abaixo, a propriedade idade existe, somente não foi preenchida no construtor
class Person_idade_zero{

    idade = 0;

    constructor(nome){
        this.nome = nome;
    }
}

let pessoa1 = new Person_idade_zero("Arthur");
let pessoa2 = new Person_idade_zero("Gael");
let pessoa3 = new Person_idade_zero("Miguel");

//Preenchendo uma idade
pessoa1.idade = 2026 - 2007;
pessoa2.idade = 4;

console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos.`)
console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos.`)
console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos.`)