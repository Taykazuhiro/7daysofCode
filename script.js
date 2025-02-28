let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm){
    console.log (`As variáveis ${numeroUm} e ${stringUm} tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log (`As variáveis ${numeroUm} e ${stringUm} não tem o mesmo valor`);
}

if (numeroTrinta === stringTrinta){
    console.log (`As variáveis ${numeroTrinta} e ${stringTrinta} tem o mesmo valor e o mesmo tipo`);
} else if (numeroTrinta == stringTrinta){
    console.log (`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo tipo`);
} else {
    console.log (`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo valor`);
}


if (numeroDez == stringDez && (numeroDez===stringDez)==false ){
    console.log (`As variáveis ${numeroDez} e ${stringDez} tem o mesmo valor mas tipos diferentes`);
} else {
    console.log (`As variáveis ${numeroDez} e ${stringDez} não tem o mesmo valor`);
}

/*
function compararVariaveis(numero,string){
    if (numero === string){
        console.log (`As variáveis ${numero} e ${string}tem o mesmo valor e o mesmo tipo`);
    } else if (numero == string){
        console.log (`As variáveis ${numero} e ${string} tem o mesmo valor mas tipos diferentes`);
    } else {
        console.log (`As variáveis ${numero} e ${string} não tem o mesmo valor`);
    }
}

compararVariaveis(numeroUm,stringUm);
compararVariaveis(numeroTrinta, stringTrinta);
compararVariaveis(numeroDez, stringDez);*/
function saveInfo(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let language = document.getElementById('language').value;
    let text = document.getElementById('message');
    text.innerHTML += `<p> Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!</p>`;
}
