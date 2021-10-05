//match() o método match() proucura uma palavra em uma string.
// g/i/m são parametros de todas estas funções abaixo

// let nome = "Fernando Mazureki";

// console.log(nome.match("e"));

//serach() proucura pela ocorrência e retorna a posição na cadeia de string

// console.log(nome.search("e"));
// console.log(nome.search(/f/i)); // i é para não diferenciar maiúscula e minúscula


// //replace() substitui uma string por outra  // esta função é muito utilizada
// let texto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos, laboriosam quam similique modi nihil quisquam perspiciatis quidem maiores rem, a laborum veritatis ea laudantium corporis dignissimos temporibus, at non?`;
// // let textoModificado = texto.replace('i', 'y'); // troca a primeira letra emcontrada somente
// textoModificado = texto.replace(/sit/gi, 'sentimento'); // troca todas as letras encontrada


// console.log(textoModificado);

// localeCompare() compara efetua a comparação entre string

// let animal= "Cachorro"
// let mamifero= "Cachorro"
// console.log(animal.localeCompare(mamifero));

// if (mamifero.localeCompare(animal) == 0){
//     console.log(`São o mesmo animal ${animal}`)
// }else console.log(`Deu ruim`);


//toString() irá converter um valor qualquer em uma string
// let num = Number(`1387`);
// let num2 = 32123;
// let soma= num + num2;
// console.log(soma.toString());

// toUUpperCase() Faz a conversão de uma string em maiúscula
// let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos, laboriosam quam similique modi nihil quisquam perspiciatis quidem maiores rem, a laborum veritatis ea laudantium corporis dignissimos temporibus, at non?`;
// console.log(str.toUpperCase());

// toLowerCase() Faz a conversão de uma string em minúscula
// console.log(str.toLowerCase());


//toLocaleLowerCase / compara em tudo minusculo
// let animal= "Cachorro"
// let mamifero= "CACHORRO"

// if(animal.toLocaleLowerCase() == mamifero.toLocaleLowerCase()){
//     document.write(`São a mesma coisa: " ${mamifero.toLocaleLowerCase()}""`);
// }else {
//     document.write(`Não é a mesma coisa`);
// }

// trim() remove os espaços no inicio e no final de um  srtring especificada

// let strComEspacos = `                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eos, laboriosam quam similique modi nihil quisquam perspiciatis quidem maiores rem, a laborum veritatis ea laudantium corporis dignissimos temporibus, at non?               `;
// let strSemEspaco;
// strSemEspaco = strComEspacos.trim();
// console.log(strSemEspaco);
// console.log(strComEspacos);

//NaN
// Se uma string for passado como numero ou for tentado comverter para numero, e não for possivél converter ela para número então retorna 'NaN'
// Se usar o "isNaN()" para perguntar se uma variavel é 'um não numero', ela vai retornar 'true' se não for um número 
// mas se a variavel não for uma string vai retornar false. 
//Observar que isNaN seguinifica (É um não número ?)
// let num = Number("sete");
// let num2 = Number("758");

// console.log(num);
// console.log(isNaN(num2) );

//toFixes() a funão toFixed() analisa um valor flutuante e retorana uma
//string com um aredondamento conforme o parâmetro de casas

// let valor = 1.556;

// console.log(valor.toFixed(2))

//O médodo toLocaleString irá retornar uma string com um representação
//da moeda definida, moeda corrente currency
//toLocaleString('pt-BR', {stule: 'currency', currency: "BRL'})
let valor = 1250.35;

console.log(valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
