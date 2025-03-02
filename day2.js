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
compararVariaveis(numeroDez, stringDez);