//Entendendo Classes
class Person {
  constructor(FirstName, lastName, Age) {
    this.FirstName = FirstName;
    this.lastName = lastName;
    this.Age = Age;
  }

  //Entendendo Métodos
  getFullName() {
    console.log(`${this.FirstName} ${this.lastName}`);
  }

  //Criando Métodos estáticos
  static speak() {
    console.log("Hello Wolrd!");
  }
}

const person = new Person("Jane", "Doe", 40);
console.log(person);

person.getFullName();

Person.speak();

//Entendendo Herança
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();
