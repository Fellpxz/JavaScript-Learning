//TODO: Escutando o evento de envio de formulário
const botton = document.querySelector("#submit-button");
const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const item = document.querySelector(".items");
const body = document.querySelector("body");

botton.addEventListener("click", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    return alert("Please fill out all the fields!");
  }

  item.children[0].textContent = nameValue;
  item.children[1].textContent = emailValue;

  myform.style.background = "red";
  body.style.background = "white";
});

//TODO: Escutando o evento de mundaça de um imput
//nameInput.addEventListener("change", function (event) {
//console.log(event.target.value);
//});
