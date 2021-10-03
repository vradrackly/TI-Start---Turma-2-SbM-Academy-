//Exercício de numero8
function verificaMaiorMenor(a, b){
    if(a > b){
        document.write("O primeiro número: " + a + " é maior que o segundo: " + b );
    }if(a < b){
        document.write("O primeiro número: " + a + " é menor que o segundo: " + b );
    }if(a == b){
        document.write("Os número são iguais: " + a + " - " + b );
    }
}
let num1 = prompt("Digite um número para começar");
let num2 = prompt("Digite um segundo número para comparar");
verificaMaiorMenor(num1, num2);
