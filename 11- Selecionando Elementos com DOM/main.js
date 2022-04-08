//Selecionando Elementos pelo seu ID
const AddUser = document.getElementById("add-user");
AddUser.innerText = "Adicionar usuário";

//Entendendo querySelector
const myForm = document.querySelector(".container #my-form");

//***.textcontent = "adicionar usuário"

console.log(myForm);

//Selecionando multiplos elementos

const allItems = document.querySelectorAll(".item");

console.log(allItems);

//Tambem temos outra forma de pegar todos os elementos

//const allItems = document.getElementsByClassName("item");
//console.log(allItems);
