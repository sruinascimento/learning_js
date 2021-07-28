function mult(num1=1, num2=1){
    return num1 * num2;
}

function sqrt(num=1){
    return num ** (1/2);
}

console.log(mult(4));
console.log(sqrt(144));

//definindo valor padrão para parâmetro basta atribuir um valor à varial no argumento da função


function cumprimentar(){
    console.log(`Oi`);
}

cumprimentar();

function cumprimentarPessoa(nome){
    return `Oi ${nome}`
}
console.log(cumprimentarPessoa('Rui'));