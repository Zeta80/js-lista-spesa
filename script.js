const listaSpesa = ["pane", "latte", "uova", "cipolle", "amido"];


const listaContainer = document.getElementById("lista-container");
let itemsList = "";
let cont = 0;

do {
    itemsList += `<li>${listaSpesa[cont]}</li>`;
    listaContainer.innerHTML = itemsList;
    cont++
    console.log(itemsList, cont);
} while (cont < listaSpesa.length);