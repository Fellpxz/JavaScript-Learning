//Entedendo If & Else & Else if
const sum = 1 + 2;

if (sum === 2) {
  console.log("Sum is 2!");
} else if (sum === 3) {
  console.log("Sum is 3!");
} else {
  console.log("sum is not 2!");
}

//Operadores and (&&) e or (||)
//&&
//||
const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {
  console.log("Sum is 4 and Sum2 is 6");
}

if (sum1 === 4 || sum2 === 6) {
  console.log("Sum is 4 and Sum2 is 6");
}

//ternary Operator
let number = sum === 2 ? 2 : 4;

//if (sum === 2) {
//number = 2;
//} else {
//number = 4;
//}

console.log(number);

//Entendendo Switch
const car = "Mercedes";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautifull");
    break;
  case "Ferrari":
    console.log("Ferrari is very red");
    break;
  case "Tesla":
    console.log("Tesla is smart");
    break;
}
