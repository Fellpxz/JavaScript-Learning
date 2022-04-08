//strings

const FirstName = "Felipe";
const LastName = "Proença";

const names = "Felipe, João, Julia";

console.log("meu nome é " + FirstName + " " + LastName);
console.log(`meu nome é ${FirstName} ${LastName}`);
console.log(`meu nome é ${FirstName.toUpperCase()} ${LastName.toLowerCase()}`);

console.log(names.split(","));

//Numbers

const number = 5;

console.log(number.toString());
console.log(typeof number.toString());

//Booleanos

false;
true;

console.log(2 == 3);

// Null & Undefined

const x = null;
const y = undefined;

//Listas

const lista = [1, 2, 3, 4, 5];
const objetos = { name: "Felipe" };
