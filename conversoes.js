//conversão implícita
const number = 456;
const numberString = '456';

console.log(number === numberString);
console.log(number == numberString);

//concatenação
console.log(number + numberString);

//soma com conversão explícita

//Number() String()
console.log(number + Number(numberString)); //soma com conversão explícita
console.log(String(number) + numberString);  //Concatenação com conversão explícita