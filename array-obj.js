let sportspersons = [
  { name: "Lionel Messi", age: 36, country: "Argentina", sportName: "Football" },
  { name: "Serena Williams", age: 41, country: "USA", sportName: "Tennis" },
  { name: "Virat Kohli", age: 35, country: "India", sportName: "Cricket" },
  { name: "Usain Bolt", age: 36, country: "Jamaica", sportName: "Sprinting" },
  { name: "Roger Federer", age: 42, country: "Switzerland", sportName: "Tennis" },
  { name: "Michael Jordan", age: 59, country: "USA", sportName: "Basketball" },
  { name: "Cristiano Ronaldo", age: 38, country: "Portugal", sportName: "Football" },
  { name: "Simone Biles", age: 26, country: "USA", sportName: "Gymnastics" },
  { name: "Sachin Tendulkar", age: 50, country: "India", sportName: "Cricket" },
  { name: "Mikaela Shiffrin", age: 27, country: "USA", sportName: "Alpine Skiing" }
];

for(let sportyGuy of sportspersons){
  
  let guy = sportyGuy;
  let guyInfo = guy.name + ' ' + guy.country + '--> '+guy.sportName;
  console.log(guyInfo);
}