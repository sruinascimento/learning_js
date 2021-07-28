const meuNome = 'Rui';
const idade = 2021 - 1996;
const cidadeNascimento = 'Altamira';
const uf = 'PA';
const apresentacao = 'Meu nome é '+ meuNome + ' minhda idade é '+ idade +
' nasci na cidade ' + cidadeNascimento + ' no estado '+ uf;
console.log(`Sem template`);
console.log(apresentacao);
console.log(`Com template string`);
console.log(`Meu nome é ${meuNome}, minha idade é ${idade}, nasci na cidade ${cidadeNascimento} estado ${uf}`);