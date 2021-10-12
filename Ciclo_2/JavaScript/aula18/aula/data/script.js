let meses =[
    'janeiro', 'fevereiro', 'março', 'abril', 'maio',
    'junho', 'julho', 'agosto','setembro'
];
let diaSemana =[
    'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
    'quinta-feira', 'sexta-feira','sabado'
];
let data = new Date();
// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(meses[data.getMonth() ] );
// console.log(meses[1]);
// document.write(meses[data.getMonth()]);
// document.write(meses[0]);
console.log(`Hoje é ${diaSemana[data.getDate()]}`);


// get pega dados

// getDate(): que traz o resultado do dia
// getMonth(): retorna o mês utilizado
// getFullYear(): retorna o ano em 4 digitos, o ano completo
// getHours() retona o valor das horas
//getMinutes() retorna os minutos informados

//set setta dados (coloca dados)

// setDate(): modifica um valor dia
// setMonth()
// setFullyer()
// setHours()
// setMinutes()