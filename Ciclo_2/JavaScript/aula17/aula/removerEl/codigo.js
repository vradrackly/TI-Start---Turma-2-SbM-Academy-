window.onload = function(){

   //calcular 
    function calcular(idProduto, resultado){

        const preco          = document.querySelectorAll(`#${idProduto} > li`);
        const valorResultado = document.querySelector(`#${resultado}`);
        let totalGeral =0;

        for(let i of preco){
            totalGeral += Number(i.dataset.preco);
        }
        valorResultado.value = totalGeral;
    }
    function removerProdutos(idP){

        const lista = document.querySelectorAll(`#${idP} > li`);

        for (let produto of lista){
            produto.addEventListener('click', function(){
                produto.remove();
                calcular('produtos','somaTotal');
            })
        }
    }
    removerProdutos('produtos');
    calcular('produtos','somaTotal');
}