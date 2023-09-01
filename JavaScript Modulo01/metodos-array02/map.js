const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]

var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
    return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]