const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  //TODO: Validandno Nome e Email
  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Please fill out the fields!";
    errorMessage.classList = "error";

    //TODO: Criando um Timeout da mensagem
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);

    return;
  }

  //TODO: Criando uma LI e adicionando na lista de itens
  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br/>Email: ${emailValue}`;

  //TODO: Adicionando a LI ao Items
  items.appendChild(li);

  //TODO: Esvaziando o valor após o executar
  nameInput.value = "";
  emailInput.value = "";
});
