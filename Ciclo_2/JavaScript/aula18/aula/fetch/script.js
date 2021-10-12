// https://viacep.com.br/ws/"variavelColocaAqui"/json;

window.onload = ()=>{

    function resultCep(dCep){
        for(let campoDados in dCep){
            if(document.querySelector(`#${campoDados}`)){
                document.querySelector(`#${campoDados}`).value = dCep[campoDados];
            }
        }

    }


    let dadosCep = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json`;
        
        try{
            // console.log(url);
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            // console.log(dadosJson);
            resultCep(dadosJson);
        }catch(error){
            alert(`Encontrou um erro...: ${error}`);
        }
    }
    // dadosCep('87024050');
    const btnBuscarCep = document.querySelector('#buscarCep');
    const caixaTextoCep = document.querySelector('#numeroCep');

    btnBuscarCep.addEventListener('click', ()=>{
        // alert("Funcionando");
        dadosCep(caixaTextoCep.value);

    })

}