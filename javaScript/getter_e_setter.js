
class Pessoa{


    _idade = 10;
    passos = 0;

    constructor(nome, sobreNome){
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    dar_um_passo(){
        this.passos++;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobreNome}`;
    }

    get age(){
        return this._idade;
    }

    set age(x){
        if(typeof x == 'number'){
            this._idade = x;
        } else {
            console.log('O que foi digitado não é considerado uma idade. (APENAS NÙMEROS!)')
        }
    }
}

let p1 = new Pessoa("João","Silva");
let p2 = new Pessoa("Maria", "Antonieta");
let p3 = new Pessoa("Pedro", "Alvares");

//Exibindo o nome da pessoa (objeto) junto com o GET (que está retornando algum dado (idade, ou nome e sobre nome))
//OBS: o caso do GET é diferente das açoes, nas açoes é preciso trazer junto a pessoa (objeto) o nome do que se refere (idade, nome, passo)
console.log(`${p1.nomeCompleto} tem ${p1.age} anos.`)


//A variável _idade começa (para todos) com 10, caso o que for setado (digitado) não for um número, entre no else do if e considera 10
//p2.age = "abc";
p2.age = 34;
p2.dar_um_passo();
p2.dar_um_passo();
p2.dar_um_passo();
console.log(`${p2.nomeCompleto} tem ${p2.age} anos e deu ${p2.passos} passos.`);
