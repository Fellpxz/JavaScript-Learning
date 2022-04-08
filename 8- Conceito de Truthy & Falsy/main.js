//Verificnado se uma variável é truthy ou Falsy
const x = "";
console.log(!!x);
//FALSE

const y = 0;
console.log(!!y);
//FALSE

const a = null;
const b = undefined;
console.log(!!a);
//FALSE

//ESSE TIPO DE VARIAVEL NÃO É EXECUTADA.

const list = [];
const object = {};
console.log(!![]);
//TRUE

if (list.lenght > 0) {
  console.log(list);
}

//Invertendo Valores True & False

const list2 = [];

console.log(!list2);
