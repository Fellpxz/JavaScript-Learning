//Entendendo For Loops
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

//Utilizando For Loops com Listas
const cars = ["Ferrari", "Testa", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Entendendo o For OF Loops
for (let car of cars) {
  console.log(car);
}

//Entendendo ForEach
cars.forEach(function (car, index) {
  console.log(car);
  console.log(index);
});

//TODO: While Loops
let index = 0;

while (index < 10) {
  console.log("index é menor do que 10!");
  //index = index + 1;
  //index += 1

  //Mesma coisa
  index++;
}

//Entendendo o For in
const person = {
  name: "jane",
  age: 21,
};

for (property in person) {
  console.log(person[property]);
}
