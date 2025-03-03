let frutas = [];
let vegetais = [];
let laticinios = [];
let sobremesas = [];
let mercearia = [];

let checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');

while (checagem == 'sim'){
    let item = prompt('Qual item você quer adicionar?');
    let categoria = prompt('Digite a categoria do grupo: Frutas, Vegetais, Laticinios, Sobremesas, Mercearia');
    if (categoria == 'frutas'){
        frutas.push(item);
        item = '';
        categoria = '';
        checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');
    } else if (categoria == 'vegetais'){
        vegetais.push(item);
        item = '';
        categoria = '';
        checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');
    } else if (categoria == 'laticinios'){
        laticinios.push(item);
        item = '';
        categoria = '';
        checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');
    } else if (categoria == 'sobremesas'){
        sobremesas.push(item);
        item = '';
        categoria = '';
        checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');
    } else {
        mercearia.push(item);
        item = '';
        categoria = '';
        checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO');
    }
    if (checagem == 'não'){
        alert(`Aqui está sua lista de compras \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia}`);
        }
}