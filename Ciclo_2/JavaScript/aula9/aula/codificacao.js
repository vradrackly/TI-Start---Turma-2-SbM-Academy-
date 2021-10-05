// concat() junda dois ou mais arraus;
let PriNome = ["Fernando", "João", "Maria"];
let SegNome = ["Pedro", "Silvia", "Joselito", "Suelen"];
let concatenado = PriNome.concat(SegNome);

// console.log(concatenado);
// console.log(concatenado[5]);
// console.log(`O array possue ${concatenado.length} elementos`);

// // indexOF() Proucura um determinado elemento de um array e retorna sua posição

console.log(SegNome.indexOf("Joselito"));

// let buscaNome = prompt(`Digite o nome pra fazer uma busca`);

// if(concatenado.indexOf(buscaNome) != (-1)){
//     alert(`O nome: ${buscaNome} foi encontrado na variavel interna, 
//     o nome esta na posição ${concatenado.length}`)
// }else{
//     alert(`O nome: ${buscaNome} não foi encontrado`);
// }

// // join() Transfroma um array em string
// console.log(concatenado);
// console.log(concatenado.join());

// // push() insere elementos no fim de um array
// let frutas = [];
// frutas.push(`Maçã`, "Banana");
// console.log(frutas);
// let outraFruta = prompt("Digite um nome de fruta");

// if(frutas.indexOf(outraFruta)!= (-1)){
//     console.log("Esta fruta esta na lista");
// }else{
//     console.log("esta fruta não estava na lista, inserindo agora");
//     frutas.push(outraFruta);
// }
// console.log(frutas);

// //pop() Remove o último elemento em uma array
// let frutas = ["pera", "uva", "maçã","salada-mista"];

// frutas.pop();
// console.log(frutas);

// // reverse() inverte a posição dos elementos de um arrays
// let frutas = ["pera", "uva", "maçã","salada-mista"];
// frutas.reverse();

// console.log(frutas);
// console.log(frutas[0]);

// // shift() remove o primeiro elemento de um array
// let frutas = ["pera", "uva", "maçã","salada-mista"];
// frutas.shift();
// console.log(frutas);

// sort() ordena elementos de um array, nem sempre é preciso (Ordena porcaria nehuma, fica muito mal ordenado, ele ordena o primeiro digito, excluindo os demais digitos de uma mesmo numeor)

// let num = [15, 2,68, 3, 79, 100, 95, 5, 17];
// let alfabeto = ["d", "x", "a", "c", "e"];
// console.log(num.sort());

// console.log(alfabeto.sort());

// //toString() Converte um array em uma string e ja retorna esta string
// let frutas = ["pera", "uva", "maçã","salada-mista"];
// console.log(frutas.toString());

// unshift() insere um elemento no icinio do array

// //splice() corta ou remove um elemnto de um array em um pondo indicado
// let listaNomes = ["Fernando", "João", "Maria", "Pedro", "Silvia", "Joselito", "Suelen"];
// console.log(listaNomes); // mostra todos os nomes antes da exclusão

// let nomesExcluidos = listaNomes.splice(1,3);//excluindo os nomes apardir da 3º posição mas deixando o primeiro e neste caso coloca os nomes exluidos na variavel 
// listaNomes; // esta variavel agora tem menos dados, pois foi exluido

// console.log(listaNomes);
// console.log(`Nomes excluidos: ${nomesExcluidos}`);

// let indece = listaNomes.indexOf("Joselito");
// let nLista = listaNomes.splice(indece, 1);
// console.log(`Nome removido ${nLista}`);
// console.log(`restante dos nomes ${listaNomes}`);

