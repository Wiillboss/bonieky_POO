let pessoa = {
    nome: 'Willian',
    sobre_nome: 'Santos',
    idade: 38,
    getNome_completo() {
        return `${this.nome} ${this.sobre_nome}`;
    } 
}

console.log(pessoa.getNome_completo());