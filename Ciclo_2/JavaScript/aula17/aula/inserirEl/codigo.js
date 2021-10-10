//produto > text
//cadastrar > botão
//listaDeProdutos > ul

window.onload = function(){

    //mapeando os idens
    const cxProduto = document.querySelector(`#produto`);
    const btnCadastrar = document.querySelector(`#cadastrar`);
    const lista = document.querySelector(`#listaDeProdutos`);

    btnCadastrar.addEventListener(`click`, function(){

        let listaDeLi = document.createElement(`li`);
        lista.appendChild(listaDeLi).setAttribute('class', 'listaDefrutas');
        lista.appendChild(listaDeLi).textContent = cxProduto.value;

    })
}