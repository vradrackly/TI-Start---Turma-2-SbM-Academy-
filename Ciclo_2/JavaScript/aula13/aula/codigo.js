// ////imprimeindo números ímpares
// for(let x=1; x <=15; x = x + 2){
//     console.log(`Imprimento numeros impares...: ${x}`);
// }

// //// usando o for in, é usado para percorrer um objeto
// //criando um objeto
// let Pessoas = {
//     nome: "Joselito",
//     idade: 90,
//     rg: 3219749,
//     cpf: 13365445687,
//     endereco: "Mario da Silva, número 150"
// }

// for(let prop in Pessoas){
//     console.log(Pessoas[prop]);
// }




// // usando o for of
// let frutas=["Abacaxi","Abacate","Acerola","Banana","Bergamota","Cacau","Caju","Damasco","Dendê"];

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }




// array de objetos se usa o 'for of'
let Cliente =[
    {
        nome: "Joselito",
        sexo:"m"
    },

    {
        nome: "Silvana",
        sexo:"f"
    },

    {
        nome: "Marta",
        sexo:"f"
    }
];
//eu posso acrescentar um novo cliente 'objeto' segue abaixo
Cliente.push({nome:"Gisele", sexo:"f"});

// O 'for in' lê os objetos diretamente (lê as propiedades do objeto), o 'for of' lista os objetos 
for(let cli of Cliente){
    // console.log(cli); //este for lista
    for(let c in cli){
        console.log(` ${c} -> ${cli[c]}`); // este for abre o objeto e imprime todos sos dados
    }
}
