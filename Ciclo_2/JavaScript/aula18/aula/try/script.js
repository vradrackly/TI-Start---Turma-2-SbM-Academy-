// m precisa ser um numero inteiro não fload
let m= 1.6;

try{

    if(typeof m != 'number') throw new Error("Esperava um número");
    if(m < 0 )               throw new Error("Esperava um número positivo");
    if(m % 1 !== 0)          throw new Error("Esperava um número inteiro");

}catch(error)   {
    console.log(`Gerou um erro...: ${error}`);
} finally{
    console.log("Fim");
}
