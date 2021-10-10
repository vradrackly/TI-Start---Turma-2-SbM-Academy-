//// Exercicio 16
// Crie uma função que some dois valores

//a) Os valores serão adicionados em dois elementos input
//b) O resultado será aparesentado em um terceiro elemnto input
//c) A soma será efetuada quendo perder o foco do segundo input


//usar o blur para saida de foco do elemento html do tipo text

function somarDoisNumeros(num1, num2){
    return ( Number(num1) + Number(num2) );
}

window.onload = function(){
    const valor1 = document.querySelector(`#priCampo`);
    const valor2 = document.querySelector(`#segCampo`);
    const saida = document.querySelector(`#saidaDados`);

    valor2.addEventListener('blur', function(){   
        saida.innerHTML = somarDoisNumeros(valor1.value, valor2.value);
    })
}
