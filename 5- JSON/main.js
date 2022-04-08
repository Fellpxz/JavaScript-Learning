const todos = [
  {
    id: 1,
    description: "Estudar Programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

//Convertendo a variável para um JSON
const todosJSON = JSON.stringify(todos);

console.log(todosJSON);

//Convertendo um JSON para uma variável

const todosList = JSON.parse(todosJSON);

console.log(todosList);
