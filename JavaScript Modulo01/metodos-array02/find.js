const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cerejas", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cerejas";
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cerejas', quantity: 5 }