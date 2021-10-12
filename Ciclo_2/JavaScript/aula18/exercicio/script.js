window.onload = function(){
    let frutas=['Abacaxi', 'Banana','Acerola', 'Jabuticaba'];
    const btnBusca = document.querySelector("#geradorDeLista");
    const lista = document.querySelector("#frutaria");

    btnBusca.addEventListener('click',()=>{
        for(frut of frutas){
            let li = document.createElement('li');
            lista.appendChild(li).textContent = frut;
        }
    })
}