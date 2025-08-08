let randomArray = [42, "apple", true, null, 3.14, { name: "Sazzad" }, [1, 2, 3], "purple", false, 99];

//Spread Operator
let copy1 = [...randomArray];
//console.log(copy1);

//from() operator
let copy2 = Array.from(randomArray);
//console.log(copy2);

//concat operator
let copy3 = [].concat(randomArray);

//slice method
let copy4 = randomArray.slice();

