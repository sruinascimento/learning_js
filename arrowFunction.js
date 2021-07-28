//Arrow function

const apresenatArro = nome => `meu nome ${nome}`;

//Se usar apenas uma linha, não será necessário return e nem chaves

console.log(apresenatArro('Rui'));

const soma = (num1 , num2) => {
    console.log(num1+' + '+num2);
    console.log(num1 + num2);
}

soma(4, 3);

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 9) return 'Somente números pequenos';
    return num1 + num2; 
}

console.log(somaNumerosPequenos(5, 100));


//Arrow function usada quando forem usadas com objetos e se forem curtas
//arrow function so pode ser usada depois de ser inicializada