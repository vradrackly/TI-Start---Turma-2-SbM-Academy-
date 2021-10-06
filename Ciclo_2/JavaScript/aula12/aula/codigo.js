//incremento usando o for

let frutas=['Macã','Pera','Uva','Goiaba','Pineapple','Nevascaranga'];
frutas.push('Manga', "Acerola");
// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }
//decremento
console.log(frutas.length);
for(let i = frutas.length -1; i >= 0; i--){
    console.log(frutas[i]);
}