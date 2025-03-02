/* dia 1
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
}*/

/* Dia 2
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
let language = [];

function saveInfo(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let language = document.getElementById('language').value;
    let text = document.getElementById('message');
    let questions = document.getElementById('content__questions');
    text.innerHTML += `<p> Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!</p>`;
    questions.innerHTML = `
            <h4>Quer uma ajuda para decidir sua carreira? </h4>
            <h5> Responda as perguntas abaixo</h5>
            <p> Qual área você quer seguir?</p>
            <div class='botoes'>
            <button id="button_front" class="content__button__front" onclick="front()">Front-End</button>
            <button id="button_back" class="content__button__back" onclick="back()">Back-End</button>
            </div> 
            `
}

function front(){
        let frontLanguage = prompt('Você quer aprender React ou Vue?');
        let frontSpecialist = prompt('Você quer se especializar em Front-end? Responda SIM ou  NÃO')
        if (frontSpecialist == 1){
            let text = document.getElementById('message');
            let questions = document.getElementById('content__questions');
            text.innerHTML += `<p> Legal então você quer ser um especialista em ${frontLanguage}, boa escolha!</p>`;
            questions.innerHTML = '';
        } else {
            let text = document.getElementById('message');
            let questions = document.getElementById('content__questions');
            text.innerHTML += `<p> Legal então você quer ser um fullstack que desenvolve em ${frontLanguage}, boa escolha!</p>`;
            questions.innerHTML = '<p> Em quais tecnologias gostaria de se especializar ou conhecer?</p>';
            setTimeout(languageList,2000);
}
}

function back(){
    let backLanguage = prompt('Você quer aprender #C ou Java?');
    let backSpecialist = prompt('Você quer se especializar em Back-end? Responda SIM ou  NÃO')
    if (backSpecialist == 1){
        let text = document.getElementById('message');
        let questions = document.getElementById('content__questions');
        text.innerHTML += `<p> Legal então você quer ser um especialista em ${backLanguage}, boa escolha!</p>`;
        questions.innerHTML = '';
    } else {
        let text = document.getElementById('message');
        let questions = document.getElementById('content__questions');
        text.innerHTML += `<p> Legal então você quer ser um fullstack que desenvolve em ${backLanguage}, boa escolha!</p>`;
        questions.innerHTML = '<p> Em quais tecnologias gostaria de se especializar ou conhecer?</p>';
        setTimeout(languageList,2000);
}
}

function languageList (){    
    let text = document.getElementById('message');
    let unitLanguage = prompt('Qual linguagem gostaria de conhecer ou aprender?'); 
    language.push(unitLanguage);
    let questions = document.getElementById('content__questions');
    questions.innerHTML += `<ul> <li> ${unitLanguage} </li></ul>`;
    let answer = prompt('Quer aprender mais alguma linguagem? Responda com SIM ou NÃO');
    while (answer == 'sim'){
        if (answer == 'não'){
            break;
        }
        unitLanguage = prompt('Qual linguagem gostaria de conhecer ou aprender?'); 
        questions = document.getElementById('content__questions');
        questions.innerHTML += `<ul> <li> ${unitLanguage} </li></ul>`;
        language.push(unitLanguage);
        unitLanguage.value = '';
        answer = prompt('Quer aprender mais alguma linguagem? Responda com SIM ou NÃO');
    }
    text.innerHTML += `Então você tem interesse em ${language}? muito bom!`
}