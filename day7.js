function adicao(){
    let valor1 = parseFloat(prompt('Digite o primeiro número:'));
    let valor2 = parseFloat(prompt('Digite o segundo número:'));
    if (isNaN(valor1) || isNaN(valor2)){
        alert('Operação cancelada - sem um dos números');
        return;
    } else {
    let resultado = valor1 + valor2;
        alert(`O resultado é ${resultado}`); 
    }
}

function subtracao(){
    let valor1 = parseFloat(prompt('Digite o primeiro número:'));
    let valor2 = parseFloat(prompt('Digite o segundo número:'));
    if (isNaN(valor1) || isNaN(valor2)){
        alert('Operação cancelada - sem um dos números');
        return;
    } else {
    let resultado = valor1 - valor2;
        alert(`O resultado é ${resultado}`); 
    }
}

function multiplicacao(){
    let valor1 = parseFloat(prompt('Digite o primeiro número:'));
    let valor2 = parseFloat(prompt('Digite o segundo número:'));
    if (isNaN(valor1) || isNaN(valor2)){
        alert('Operação cancelada - sem um dos números');
        return;
    } else {
    let resultado = valor1 * valor2;
        alert(`O resultado é ${resultado}`); 
    }
}

function divisao(){
    let valor1 = parseFloat(prompt('Digite o primeiro número:'));
    let valor2 = parseFloat(prompt('Digite o segundo número:'));
    if (isNaN(valor1) || isNaN(valor2)){
        alert('Operação cancelada - sem um dos números');
        return;
    } else {
    let resultado = valor1 / valor2;
        alert(`O resultado é ${resultado}`); 
    }
}

function calculadora (){

let operacao;
    do{
        operacao = parseInt(prompt('Escolha a operação que deseja executar: \n \n 1 - Adição \n 2 - Subtração \n 3 - Multiplacação \n 4 - Divisão \n 5 - Sair')); 
        switch(operacao){
        case 1:
            adicao();
            break;
        case 2:
            subtracao();
            break;
        case 3: 
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            alert('Até a próxima');
            break;
        default:
            alert('Opção inválida');
            break;
    
}
} while(operacao !=5)
}

calculadora();