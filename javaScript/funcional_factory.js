function criacaoPessoa(nome, sobre_nome, idade){
    return{
        nome,
        sobre_nome,
        idade
    }
}

let pessoa1 = criacaoPessoa('Willian', 'Santos', 38);
let pessoa2 = criacaoPessoa('Arthur', 'Marques', 18)
let pessoa3 = criacaoPessoa('Gael', 'Marques', 4);
let pessoa4 = criacaoPessoa('Miguel', 'Marques', 0);

console.log(`Primeira pessoa criada é ${pessoa1.nome}, seu sobre nome é ${pessoa1.sobre_nome} e sua idade é ${pessoa1.idade} anos.`);
console.log(`Segunda pessoa criada é ${pessoa2.nome}, seu sobre nome é ${pessoa2.sobre_nome} e sua idade é ${pessoa2.idade} anos.`);
console.log(`Terceira pessoa criada é ${pessoa3.nome}, seu sobre nome é ${pessoa3.sobre_nome} e sua idade é ${pessoa3.idade} anos.`);
console.log(`Quarta pessoa criada é ${pessoa4.nome}, seu sobre nome é ${pessoa4.sobre_nome} e sua idade é ${pessoa4.idade} anos e 9 meses.`);