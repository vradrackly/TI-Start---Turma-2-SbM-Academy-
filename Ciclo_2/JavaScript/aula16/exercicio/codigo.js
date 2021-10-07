//// Exercício 15
// Refatore o exercicio anterior, usando a mesma função "tabuada" para receber o valor de um elemento de entrada input

//a) A função será executada quando o usário cliclar no botão
//b) Todas as mensagens de retono deverão ser mostrada na página em um "el" html

// Nota: Não use o método documento.write como método de saída.

// let num = prompt(`Este é um programa de tabuada, escolhe um número de 1 a 10 para fazer o calculo`);
function calculadora(num){
    if(Number(num)){
        if(num > 0 && num <= 10){
            for(let cont = 1; cont < 11; cont++){
                // console.log(`${num} x ${cont} = ${num * cont}`);
                calculo.push((`${num} x ${cont} = ${num * cont}`));
            }
        }else{
            console.log(`O número deve estar ente 1 a 10, você digitou...: ${num}`);
        }
    }else {
        console.log(`O valor "${num}", não é um número válido`);
    }

}
let calculo = [];

window.onload  =function(){
    const botao = document.querySelector('#btn');
    const caixa = document.querySelector('#caixa');
    const result = document.querySelector('#texto');

    botao.addEventListener('click', function(){
        calculadora(result.value);
        for(let i = 1; i < 11; i++){
            caixa.innerHTML += "<br>" + calculo[i-1];
        }
    })
}