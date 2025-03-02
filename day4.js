let numeroSecreto = Math.floor(Math.random() * (10-1) + 1);
/*parseInt(Math.random() * 10 + 1)*/

for (var i=2; i!=-1; i--){
    tentativa = prompt('Digite um chute entre 1 e 10 de qual é o número secreto:');
    if (tentativa == numeroSecreto){
        alert(`Parabéns você acertou, o número secreto é ${numeroSecreto}.`);
    } else {
        alert(`Você errou. Tentativas restantes: ${i}`);
    }
}
alert(`O número secreto era ${numeroSecreto}`);