// Exercício 13
//Crie uma função que receba uma palavra como parâmetro e inverta esta palavra.

let nome = "Fernando";

//função autoexecultavel
(function(){
    let inverter = [];
    let Nnome = nome;
    document.write(`A palavra a ser invertida é...: ${nome}<br>`);
    for(let i = nome.length -1; i >= 0; i--){
        inverter.push(nome[i]);
    }
    document.write(`A palavra ficou...: ${inverter.toString()}`);
})(nome)

