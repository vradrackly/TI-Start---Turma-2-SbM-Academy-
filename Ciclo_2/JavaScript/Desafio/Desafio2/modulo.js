function BuscarCEP(){
    window.onload = ()=>{
        
            const btnBuscarCep      = document.querySelector('#buscarCep');
            const caixaCep          = document.querySelector('#cep');
            
            let dadosCep = async function(cep){

                let url = `https://viacep.com.br/ws/${cep}/json`;
                
                try{
                    let dadosFetch = await fetch(url);
                    let dadosJson = await dadosFetch.json();
                    resultadoCep(dadosJson);
                }catch(error){
                    alert(`Encontrou um erro...: ${error}`);
                }
            }

            btnBuscarCep.addEventListener('click', ()=>{
                dadosCep(caixaCep.value);
            })

            function resultadoCep(CEP){
                for(let campo in CEP){
                    if(document.querySelector(`#${campo}`)){
                        document.querySelector(`#${campo}`).value = CEP[campo];
                    }
                }
            }  
        }
    }
export {BuscarCEP}