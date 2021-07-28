Math

let listaFuncionarios = ['Jose', 'Ana', 'Luiza', ];
let listaIdade = [22, 19, 33];

const exibeLista = (lista, descricao) => {
    e = '';
    for (let i = 0; i < lista.length; i++) {
        e += '\n' + descricao + lista[i];
    }

    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '));
console.log(exibeLista(listaIdade, 'Idade: '));