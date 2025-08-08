let sweets = [
  "Gulab Jamun",
  "Rasgulla",
  "Sandesh",
  "Barfi",
  "Jalebi",
  "Laddu",
  "Kheer",
  "Cham Cham",
  "Halwa",
  "Peda"
];

let reversed = [];

//Reverse with for loops;
for (let i=0 ; i < sweets.length; i++){
  reversed.unshift(sweets[i]);
}
console.log(reversed);

//reverse with reverse method
//Reverse() method change/mutate array
let fruits = [
  "Mango",
  "Apple",
  "Banana",
  "Grapes",
  "Orange",
  "Pineapple",
  "Watermelon",
  "Papaya",
  "Strawberry",
  "Guava"
];
console.log(fruits);
fruits.reverse();

console.log(fruits);