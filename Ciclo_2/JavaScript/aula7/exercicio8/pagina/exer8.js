//Exercício de numero8

let num1 = prompt("Digite um número para começar");
let num2 = prompt("Digite um segundo número para comparar");

// verificaMaiorMenor(num1, num2);

// function verificaMaiorMenor(valor1, valor2){
//     if(valor1 >= valor2){
//         if(valor1 > valor2){
//             document.write("O primeiro número: " + valor1 + " é maior que o segundo valor <br>" + "O segundo valor é: " + valor2 );
//             console.log("O primeiro número: " + valor1 + " é maior que o segundo valor, o segundo valor é: " + valor2 );
//         }else{
//             document.write("Os valores são iguais: " + valor1 + " é igual a: " + valor2 );
//             console.log("Os valores são iguais: " + valor1 + " é igual a: " + valor2 );
//             }
//         }else{
//             document.write("O primeiro é menor que o segundo <br> " + "Primeiro valor: " + valor1 + "<br> Segundo valor: " + valor2 );
//             console.log("O primeiro é menor que o segundo, o primeiro valor é: " + valor1 + " e o segundo valor é: " + valor2 );
//         }
        
//     }

    // uma segunda maneira, usando a função arrow, não vejo utilidade neste tipo de função

let verificaNumero = (prim, segn)=>{
    if(prim >= segn){
        if(prim > valor2){
            document.write("O primeiro número: " + prim + " é maior que o segundo valor <br>" + "O segundo valor é: " + segn );
            console.log("O primeiro número: " + prim + " é maior que o segundo valor, o segundo valor é: " + segn );
        }else{
            document.write("Os valores são iguais: " + prim + " é igual a: " + segn );
            console.log("Os valores são iguais: " + prim + " é igual a: " + segn );
            }
        }else{
            document.write("O primeiro é menor que o segundo <br> " + "Primeiro valor: " + prim + "<br> Segundo valor: " + segn );
            console.log("O primeiro é menor que o segundo, o primeiro valor é: " + prim + " e o segundo valor é: " + segn );
        }
        
    }
verificaNumero(num1, num2);