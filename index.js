const fruits = [
  { id: 1, item: 'banana', price: 5 },
  { id: 2, item: 'guava', price: 10 },
];

let result = fruits.find((search) => search.item === 'banana');
console.log(result);
