//Objeto não tem o construtor, apenas CLASSES tem, o que foi feito aqui foi uma EMULAÇÂO do conceito de outra forma.

let pessoa = {
    nome: 'Willian',
    sobre_nome: 'Santos',
    idade: 38,
    getNome_completo() {
        return `${this.nome} ${this.sobre_nome}`;
    },
    start() {
        console.log('deu start na pessoa');
    }
}

pessoa.start();

console.log(pessoa.getNome_completo());