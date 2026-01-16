
class Pessoa{


    _idade = 10;
    passos = 0;

    constructor(nome){
        this.nome = nome;
    }

    dar_um_passo(){
        this.passos++;
    }

    get age(){
        return this._idade;
    }

}

let p1 = new Pessoa("João");
let p2 = new Pessoa("Maria");
let p3 = new Pessoa("Pedro");

console.log(`${p1.nome} tem ${p1.age} anos.`)
