let frutas = [];
let vegetais = [];
let laticinios = [];
let sobremesas = [];
let mercearia = [];

let checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');

function check(){
checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
while (checagem == 'sim'){
    let item = prompt('Qual item você quer adicionar?');
    let categoria = prompt('Digite a categoria do grupo: Frutas, Vegetais, Laticinios, Sobremesas, Mercearia');
    if (checagem == 'sim'){
        includeItem (categoria,item);
        } else if (checagem == 'não'){
        alert(`Aqui está sua lista de compras \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia}`);
        }
    if (checagem == 'excluir'){
        item = prompt(`Qual item quer excluir? Essa é sua lista de compras: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia}`);
        if (frutas.includes(item) || vegetais.includes(item) || laticinios.includes(item) || sobremesas.includes(item) || sobremesas.includes(item) || mercearia.includes(item)){
            excludeItem (item);
        } else {
            alert('Não foi possível encontrar o item dentro da lista!');
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
            check();
        }
    }
    }
}

    function includeItem (categoria, item){
        if (categoria == 'frutas'){
            frutas.push(item);
            item = '';
            categoria = '';
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
        } else if (categoria == 'vegetais'){
            vegetais.push(item);
            item = '';
            categoria = '';
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
        } else if (categoria == 'laticinios'){
            laticinios.push(item);
            item = '';
            categoria = '';
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
        } else if (categoria == 'sobremesas'){
            sobremesas.push(item);
            item = '';
            categoria = '';
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
        } else if (categoria == 'mercearia'){
            mercearia.push(item);
            item = '';
            categoria = '';
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
        } else {
            alert('Digite uma das categorias aceitas')
        }

    }

    function excludeItem (item){
        if (frutas.includes(item)){
           let indice = frutas.indexOf(item);
           let deletedItem = frutas.splice(indice,1);
           alert(`O item ${deletedItem} foi removido. Essa é sua nova lista: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia} `);
           checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
           check();
        } else if (vegetais.includes(item)){
            indice = vegetais.indexOf(item);
            deletedItem = vegetais.splice(indice,1);
            alert(`O item ${deletedItem} foi removido. Essa é sua nova lista: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia} `);
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
            check();
        } else if (laticinios.includes(item)){
            indice = laticinios.indexOf(item);
            deletedItem = laticinios.splice(indice,1);
            alert(`O item ${deletedItem} foi removido. Essa é sua nova lista: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia} `);
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
            check();
        } else if (sobremesas.includes(item)){
            indice = sobremesas.indexOf(item);
            deletedItem = sobremesas.splice(indice,1);
            alert(`O item ${deletedItem} foi removido. Essa é sua nova lista: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia} `);
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
            check();
        } else {
            indice = mercearia.indexOf(item);
            deletedItem = mercearia.splice(indice,1);
            alert(`O item ${deletedItem} foi removido. Essa é sua nova lista: \n \n Frutas: ${frutas} \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Sobremesas: ${sobremesas} \n Mercearia: ${mercearia} `);
            checagem = prompt('Você gostaria de adicionar algum item na sua lista de compras? Responda SIM ou NÃO. Para excluir responda EXCLUIR');
            check();
        }
    }

