function Pessoa(nome){
    this.nome =  nome;
    this.msg = function(){
        alert("Hello");
    }
}

let cliente = new Pessoa("Joselito");

cliente.msg();
console.log(cliente.nome);
console.log(cliente)
