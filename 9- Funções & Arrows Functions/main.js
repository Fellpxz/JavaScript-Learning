//Entendendo Funções
function sum(a, b) {
  console.log(a + b);
}

sum(4, 6);

//Retornando uma Função
function sum2(a, b) {
  return a + b;
}
const Sum2Value = sum2(2, 2);

console.log(Sum2Value);

//Passando valores padrões para Parâmetros
function sum3(a, b = 5) {
  return a + b;
}
const Sum3Value = sum3(2);

console.log(Sum3Value);

//Entendendo Arrow Functions
//const sumArrow = (a, b = 12) => {
//return a + b;
//};
const sumArrow = (a, b = 12) => a + b;

const sumValue = sumArrow(4);

console.log(sumValue);
