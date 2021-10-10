window.onload = function(){
    const ulPai = document.querySelectorAll("#ulPai");

    // console.log(ulPai);

    ulPai.forEach(function(listar_ul){

        listar_ul.addEventListener('click',function(elemento){

            alert(elemento.target.innerHTML);
        })
    })


}