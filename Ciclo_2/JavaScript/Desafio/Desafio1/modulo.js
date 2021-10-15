window.onload = function(){    

    let frutas = [
        {nome:'Goiaba', preco: 3.25 },
        {nome:'Banana', preco: 0.75 },
        {nome:'Melancia', preco: 5.39 },
        {nome:'Abacaxi', preco: 1.87 },
        {nome:'Acerola', preco: 3.50 },
        {nome:'Româ', preco: 7.25 },
        {nome:'Abil', preco: 3.75 },
    ]

        const ul_ListaDinamica  = document.querySelector("#produtos");
        const TotalGeral        = document.querySelector("#mostraTotalCompra");

    // // ////// coloca o array e soma

    // ( ()=>{        
    //     let totalCompra = 0;

    //     for(let frut of frutas){
    //         const filhoLi = document.createElement('li');
    //             for(listaFruta in frut){
    //                 if(listaFruta == 'preco'){
    //                     ul_ListaDinamica.appendChild(filhoLi).setAttribute('data-preco', frut[listaFruta]);
    //                     totalCompra += frut[listaFruta];
    //                 } else{
    //                     ul_ListaDinamica.appendChild(filhoLi).textContent = `${frut[listaFruta]}`;
    //                 }
    //             }
    //     }
    //     TotalGeral.value = totalCompra.toFixed(2);
    // } )(frutas)


    ////////////////////////////// função que so coloca o array dinamico 'li'
    ( ()=>{
        let controle =0;
        for(let frut of frutas){
            const filhoLi = document.createElement('li');
                for(listaFruta in frut){
                    if(listaFruta !== 'preco'){    
                        controle ++;     
                        ul_ListaDinamica.appendChild(filhoLi).setAttribute('data-codigo', controle);                                                              
                        ul_ListaDinamica.appendChild(filhoLi).textContent = `${frut[listaFruta]}`;                        
                    } else{
                        ul_ListaDinamica.appendChild(filhoLi).setAttribute('data-preco', frut[listaFruta]); 
                    }
                }
        }
    } )(frutas)
////////////////////////////////////////////////
// calcula produtos na cesta do cliente
    function calcular(idProduto, resultado){
        const preco     = document.querySelectorAll(`#${idProduto} > li`);
        const cxresultado = document.querySelector(`#${resultado}`);
        let total = 0;

        for(let cont of preco){
            total += Number(cont.dataset.preco);
        }
        resultado.value = total;
    }
    



    /////////////////////////////////////////////////////////////
    // exclui elemento
    function removerProdutos(id){

        const lista = document.querySelectorAll(`3${id} > li`);
        for(let produto of lista){
            produto.addEventListener('click', function(){
                produto.remove();
                calcular('cestaDoCliente','mostraTotalCompra');
            })
        }
    }


    // removerProdutos('cestaDoCliente');
    // calcular('cestaDoCliente','mostraTotalCompra');


    /////////////////////////////////////////////////////////
    // inserir produto

    // ul = cestaDoCliente
    //caixa resutlado soma = mostraTotalCompra
    // produtos lista de cima = produtos

    const entrada = document.querySelector('#produtos');
    const saida = document.querySelector('#cestaDoCliente');
    const lancar = document.querySelector('#produtos');

    lancar.addEventListener('click', function(){
    for(let prodFruta of frutas){
        for(let f in prodFruta ){

            let lista = document.createElement('li');
            saida.appendChild(lista).textContent = prodFruta[f].nome;
        }

    }

        // let lista = document.createElement('li');
        // saida.appendChild(lista).textContent = entrada;
        // saida.appendChild(lista).textContent = 'falta resolver isto';     

    })
}

