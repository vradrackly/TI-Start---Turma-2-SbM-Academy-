// exercicio 10
// pedir o nome, altura e peso de uma pessoa
// imprimir o imc no navegador
(function(){
    alert(`Este é um program para calcular o seu imc.`);
    const nome = prompt(`Digite seu nome`);
    let peso = Number(prompt(`Digite seu peso`));
    let altura = Number(prompt(`Digite sua altura`));
    const imc = peso / (2*altura);
    document.write(`Seu nome é: ${nome}. <br>
                    Sua altura é: ${altura}. <br>
                    Seu peso é: ${peso}. <br>
                    O seu IMC é: ${imc} `);
})()