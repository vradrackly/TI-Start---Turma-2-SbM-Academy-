// // exercicio 14
// Crie uma função que receba um parâmetro com um valor entre 1 e 10 e efetue a tabuada.
// a) A funão deverá verificar se o parâmetro é um número.
// b) A função deverá verificar se o parâmetro esta entre 1 a 10.
// c) O resultado sairá no console


let num = prompt(`Este é um programa de tabuada, escolhe um número de 1 a 10 para fazer o calculo`);
(function(){
    if(Number(num)){
        if(num > 0 && num < 10){
            for(let cont = 1; cont < 11; cont++){
                console.log(`${num} x ${cont} = ${num * cont}`);
            }
        }else{
            console.log(`O número deve estar ente 1 a 10, você digitou...: ${num}`);
        }
    }else {
        console.log(`O valor "${num}", não é um número válido`);
    }

})(num);
