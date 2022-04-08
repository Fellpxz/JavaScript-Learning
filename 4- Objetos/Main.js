//Criando Objeto

const person = {
  FirstName: "Felipe",
  LastName: "Proença",
  Age: "17",
  Hobbies: ["jogar R6", "Sonhar"],
  Dog: {
    Name: "Vick",
    Age: 8,
  },
};

//acessando Propriedades do Objeto

//Entendendo Destructuring

const {
  FirstName: PrimeiroNome,
  LastName,
  Age,
  Hobbies,
  Dog: { Name: DogName },
} = person;

//Isso e os códigos a baixo são a mesma coisa

//const FirstName = person.FirstName;
//const LastName = person.LastName;
//const Age = person.Age;
//const Hobbies = person.Hobbies;

console.log(PrimeiroNome);
console.log(LastName);
console.log(Age);
console.log(Hobbies);

//Acessando a lista dentro do Objeto

const Sonhar = person.Hobbies[1];
console.log(Sonhar);

//Adicionando Propriedades a um Objeto
//person.Dog = "Vick";

console.log(DogName);
console.log(person.Dog.Age);

//TODO: Listas contendo Objetos

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

const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo);
