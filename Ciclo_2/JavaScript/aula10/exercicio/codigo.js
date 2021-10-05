//Exercício 11
let nomes = ["Fernando", "Mariana","Rose", "Stephania", "Joselito", "Roger"];

// esta função receme um array com os nomes inseridos antes através da variável 'nomes'
//insere um novo nome e verifica se existe nome na posição escolhida
function executaAlteracoes(arrayDeNomes, novoNome, indice){
    console.log(`Quantidade de elementos do array...: ${arrayDeNomes.length}`);
    nomes.push(novoNome);
    console.log(`Você inseriu um novo nome...: ${nomes[nomes.length - 1]}`);

    if(arrayDeNomes.indexOf(arrayDeNomes[indice]) != (-1)){
        console.log(`Voce escolheu o indice...: ${indice}, este indice corresponde ao nome...: ${arrayDeNomes[indice]}`);
    }else{
        console.log(`Voce escolheu o indice...: ${indice}, este indice NÃO coresponde a nenhum nome`);
    }    
    console.log(`A quandidade atual de elementos do array são...: ${nomes.length}`);
}
let novoN = `Marcela`;
let num = 3;
executaAlteracoes(nomes, novoN, num);