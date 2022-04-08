//listas
const names = ["Felipe", "João", "Julia"];

//Selecionando Elemento na Lista
const joao = names[1];
console.log(joao);

//Adcionando Elemento na Lista
names.push(20);

console.log(names);

names.unshift("Pedro");

console.log(names);

//Removendo Valores de uma Lista

names.pop();

console.log(names);

//Alterando Valores de uma Lista
names[3] = "Gustavo";

console.log(names);

//Verificando indices de Elementos
console.log(names.indexOf("Gustavo"));

//Verificando a quantidade de Elementos
console.log(names.length);

//Verificando se a lista é uma lista
const namesIsArray = Array.isArray(names);

console.log(namesIsArray);
