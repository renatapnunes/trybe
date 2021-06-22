//           BLOCO 4 - DIA 2 - JavaScript: Array e For - Exercicios de Fixação
//-------------------------------------------------------------------------------------------------
// **************************************** ARRAYS ************************************************

// Dado o array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// 1 - Obtenha o valor "Serviços" do array menu:

let menuServices = menu[1];
console.log(menuServices);

// 2 - Procure o índice do valor "Portfólio" do array menu:

let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);

// 3 - Adicione o valor "Contato" no final do array menu:

menu.push("Contato");
console.log(menu);

//-------------------------------------------------------------------------------------------------
// **************************************** FOR ***************************************************

// 1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}

//-------------------------------------------------------------------------------------------------
// **************************************** FOR OF ************************************************

// 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for ( let listNames of names) {
    console.log(listNames);
}