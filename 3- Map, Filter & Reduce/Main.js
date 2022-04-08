//Entendendo Map
const numbers = [1, 2, 3, 4, 5];

const NumberMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(NumberMultipliedByTwo);

//Entendendo Filter

const ages = [8, 13, 16, 17, 22, 30, 40];

const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

//Entendendo Reduce

const SumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(evenAges);

console.log(SumOfAges);
