// //Exercício 14
let VariedadesDeFrutas = [
    {
        nome: "Abacaxi",
        preco: 2.5,
    },
    {
        nome: "Abacate", 
        preco: 3.17,    
    },

    {
        nome: "Acerola",
        preco: 1.5,
    },

    {
        nome: "Banana",
        preco: 0.75,
    },

    {
        nome: "Bergamota",
        preco: 6.5,
    },

    {
        nome:  "Cacau",
        preco: 7.65,
    },

    {
        nome: "Caju",
        preco: 5.23,
    },
    {
        nome: "Damasco",
        preco: 2.75,
    },
    {
        nome: "Dendê",
        preco: 3.5,
    }     
];




// resolução normal
// function verFrutas (Mercado){
//     //'for of' varre o objeto somente listando-o
//     for(let fruta of Mercado ){
//         // console.log(fruta); // exemplo de como o 'for of' lista cada objeto
//         //'for in' varre o interior de cada objeto passado para ele
//         for(let i in fruta ){
//             // console.log(i); //exemplo de como o 'for in' percorre os campos dentro do objeto
//             console.log(fruta[i]); 
//         }
//     }
// }
// verFrutas(VariedadesDeFrutas);




// outra resolução do mesmo exercicio
// formatando os preços em Real
(function(){
    for(let fruta of VariedadesDeFrutas){
        for(let i in fruta){
            console.log(`Fruta de nome...: ${fruta.nome}`);
            console.log("Preço por Kg...: " + (fruta.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
                }
    }
})(VariedadesDeFrutas)

