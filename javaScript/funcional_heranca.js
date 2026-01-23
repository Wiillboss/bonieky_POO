// Usuario comun - GENERALISTA (PAI)
const default_usuario = {
    nome: '',
    email: '',
    level: 1
}

/* Aquele que Herda pode usar os atributos que herdou, criar os seus e substituir os herdados.
    No exemplo, o PAI possui os atributos NOME e EMAIL, entretanto eles estão vazios, e no FILHO está sendo atribuídos valores.
*/
const usuario1 = {
    ...default_usuario,
    nome: 'Willian',
    email: 'will@b7.com.br'
}

const adm1 = {
    ...default_usuario,
    nome: 'Admin Boladão',
    email: 'adm@adm_boladao.com.br',
    level: 2
}

console.log(usuario1);
console.log(adm1);