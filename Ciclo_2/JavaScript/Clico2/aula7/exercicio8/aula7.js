// (function(a, b){
//     document.write("O valor de do primerio número é: " + a + " o valor do segundo número é: " + b);

// })(15, 3.5);

// //função autoexecultavel
// (function(a, b, c){
//      document.write("O resultado foi: " + Number(a + b + c));
// })(5.73219, 5, 3.36971);

// //////////////////
// alert("Esta rodando");
let num1 = prompt("Digite um valor");
let num2 = prompt("Digite outro valor para somar com o primeiro");
let num3 = prompt("Digite mais um valor");

// função arrow
const somaNumero = (a, b, c)=>{
    let result = Number(Number(a)+Number(b)+Number(c));
    document.write("O resultado foi: " + result);
    console.log(result);
}

somaNumero(num1, num2, num3);

alert("Esta rodando ate aqui");