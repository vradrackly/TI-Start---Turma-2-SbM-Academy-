function Pessoa(nome){
    this.nome =  nome;
    this.msg = function(){
        alert("Hello");
    }
}

// let cliente = new Pessoa("Joselito");

// cliente.msg();
// console.log(cliente.nome);
// console.log(cliente)

// // outra maneira de criar um objeto

// let Pessoa2 ={
//     'nome':'',
//     'idade':''
// }

// Pessoa2.__proto__.msg = function(){
//     alert("ola!!!" + Pessoa2.nome);
// }
// let P= Pessoa2;
// P.nome = "Marcelo"
// P.msg();
// console.log(P);

// um opjeto com várias pessoas
let Cliente = [
    {
        'nome': 'Fernando',
        'idade': 36,
        'sexo': 'M'
    },
    {
    'nome': 'Gisele',
    'idade': 47,
    'sexo': 'M'
    },
]

let Npessoa = Cliente;

console.log(Npessoa[0].nome, Npessoa[1].nome)
console.log(Npessoa.length);