// let nome = 'Laranja'; //string
// let boo = true; // booleano
// let num = '0'; // numérico

// //o typeof verifica qual o tipo da variavel
// // console.log(typeof num);

// if(typeof num === 'number'){
//     console.log(`Esta variável é um 'number' ${num}`);    
// } else{
//     console.log(`Esta variável não é um 'número'. ${num} : Este dado é ou esta como...: ${typeof num}`);   
// }



// //Evendo click

window.onload=function(){
    const botao = document.getElementById('btn');
    const textBox = document.querySelector("#textBox");
    const caixa = document.querySelector("#caixa");
    botao.addEventListener('click', function(){
        // alert("Fui cliclado");
        // alert(textBox.value);

        //Para concatenar é so usar um sinal de '+' antes do sinal de '=', isto me parece ser mais eficiente
        caixa.innerHTML += " " + textBox.value;
    });
}
















// window.onload = function(){
//     const nBotao = document.getElementById('btn2');
//     nBotao.addEventListener('click', function(){
//         document.write("Sucesso!!");
//      });
// }

