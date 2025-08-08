let carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Chevrolet",
  "Hyundai",
  "Nissan",
  "Kia"
];
//Traversing means go through each element of array 
//Traversing using for loop
for(let i=0; i < carBrands.length; i++){
 // console.log(carBrands[i]);
}

// traversing with while loop
let carTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Convertible",
  "Coupe",
  "Pickup Truck",
  "Wagon",
  "Van",
  "Sports Car",
  "Electric Car"
];

let j=0;
while (j < carTypes.length) {
  console.log(carTypes[j]);
  j++;
}

//Traverse with for of
let bikeBrands = [
  "Yamaha", 
  "Honda", 
  "Suzuki", 
  "Kawasaki", 
  "Ducati", 
  "Harley-Davidson", 
  "BMW Motorrad", 
  "Royal Enfield", 
  "Triumph", 
  "KTM"
];

for(let bike of bikeBrands){
  console.log(bike);
}