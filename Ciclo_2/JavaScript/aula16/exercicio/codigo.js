//// Exercício 15 refatorado
// Refatore o exercicio anterior, usando a mesma função "tabuada" para receber o valor de um elemento de entrada input

//a) A função será executada quando o usário cliclar no botão
//b) Todas as mensagens de retono deverão ser mostrada na página em um "el" html

// Nota: Não use o método documento.write como método de saída.

// let num = prompt(`Este é um programa de tabuada, escolhe um número de 1 a 10 para fazer o calculo`);


function calculadora(num){ // Esta função so faz o calculo e acresenta o resultado em um array

            for(let cont = 1; cont < 11; cont++){
                calculo.push((`${num} x ${cont} = ${num * cont}`));
            }
}

let calculo = []; //varialvel global para transportar o resultado de uma função para outra

// aqui de fato iniciar a brincadeira
window.onload  = function(){
    const botao = document.querySelector('#btn'); // recebe o clic no botão da pagina
    const entrada = document.querySelector('#caixaTexto'); // recebe o valor digitado no campo de texto da pagina
    const saida = document.querySelector('#caixaDiv'); // recebe os dados ja calculados para ser exibidos no campo de uma Div da pagina

    botao.addEventListener('click', function(){        
        if(Number(entrada.value)){
            if(entrada.value > 0 && entrada.value <= 10){
                calculadora(entrada.value);
                for(let i = 1; i < 11; i++){
                    saida.innerHTML += '<br>' + calculo[i-1];
                }
            } else{
                saida.innerHTML = `O número deve estar ente 1 a 10, você digitou...: ${entrada.value}`;
            }                          
        }else{
            saida.innerHTML = `O valor "${entrada.value}", não é um número válido`;
        }                           
    })
}