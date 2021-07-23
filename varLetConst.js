/*
const usuarioLogado = true;
const contaPaga = false;

//Truthy or falsy

// 1--True, 0--False

console.log(0 == false);
console.log(''==false);

console.log(`1 == true --> ${1==true}`);

//null, undefined

let var1 = null;
let var2;

console.log(`Tipo de dado var1 ${typeof(var1)}`);
console.log(`Tipo de dado var2 ${typeof(var2)}`);

*/

//Var
//calculando a area 
var altura = 5;
var comprimento = 7;
area = altura * comprimento;
console.log(`Área = ${area}`);
var area;


//Let
//Calculando area
let h = 10;
let c = 12;
let  a;
console.log(a);
let forma = 'retângulo';
//Usando condicional para poder calcular a area
if (forma === 'retângulo') {
   a = h * c;
}else {
    a = h * c / 2;
}

console.log(a);


//Usando const 