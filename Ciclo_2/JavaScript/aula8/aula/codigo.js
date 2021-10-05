
// // Usando templets string

// let str = `Primeira string`

// let str2 = `Segunda string + a segunda string: ${str}`;

// console.log(str2);


// Array é como uma matriz com indice e valores

// const frutas= ["uva","abacaxi","laranja","abacate","maçã"];
//document.write(frutas[0]);

// let nomeDeFruta = frutas[2];
// let nome= `Voce escolheu a fruta: ${nomeDeFruta}`;
// document.write(`<br>Imprimindo... ${nome}`);
// document.write(frutas);

const pessoa =[
    "Joselito", // indice 0
    23,         // indice 1
    "solteiro", // indice 2
    "bola",
    1.75
];
const frase = `Meu nome é: ${pessoa[0]}, eu tenho ${pessoa[1]} anos, sou 
            ${pessoa[2]}.<br>Eu gosto de jogar ${pessoa[3]} e tenho ${pessoa[4]} de altura`;

// função autoexecutavel
document.write("Esta é uma função autoexecultavel <br><br>");

(function(p){
    // alert(p);
    document.write(p);
})(frase);

// arrays dentro de arrays
const cliente=[
    "Desiree",
    1.80,
    "solteira" ,   
    "estudante",
    endereco =["Monte Carmelo", 537, "Jardim Santos", "Maringá", "Paraná"]
];

//array bidimensional
document.write("<br><br> Esta é uma função autoexecultavel com 'arrays dentro de arrays' <br>");
const clienteCadastro = `Meu nome é: ${cliente[0]}, tenho ${cliente[1]} de altura.
                        Sou ${cliente[2]} e sou ${cliente[3]}.
                        Eu moro na rua: ${cliente[4][0]} número ${cliente[4][1]}
                        bairro ${cliente[4][2]} na cidade de ${cliente[4][3]} no estado do ${cliente[4][4]}`;

(function(cli){
    document.write(cli);
    document.write("<br> <br>");
    document.write(`O tamanho do array desta ultma função é: ${cliente.length}`);
})(clienteCadastro);

// imprimindo o tamanho de uma string
let nomePessoa=`Josecrilda`;
console.log(nomePessoa.length);
console.log(nomePessoa[0]);