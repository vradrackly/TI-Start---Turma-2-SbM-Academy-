window.onload = function(){

    let produtos = [
        {descricao: 'Bolacha Mirabel', preco: 2.25},
        {descricao: 'Sabonete', preco: 0.75},
        {descricao: 'Creme Dental', preco: 3.39},
        {descricao: 'Escova de  Dente', preco: 12.35},
    ]

    const listaProdutos = document.querySelector("#listaProdutos");
    const  totalGeral = document.querySelector('#total');
    
    ( ()=>{
        let total = 0;

        for(let pro of produtos){ // 'for of' le arrays, entra dentro dos array
            const filhoLi = document.createElement('li');

            for(listaP in pro){ // 'for in' le objetos, entra dentro do objeto
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    total += pro[listaP];
                } else {                    
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
                }
            }
        } 
        totalGeral.value = total.toFixed(2);
    } )(produtos);
}