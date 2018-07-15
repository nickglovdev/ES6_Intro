// XXX 1.
//console.log([1,2,3])

// XXX 2. Spread Operator
//console.log(...[1,2,3])

// XXX 3. ES6 makes it easier to push into another arrays

let first = [1,2,3];
let second = [4,5,6];

// Old way
// first.push(second)
// console.log(first)

// New way
// first.push(...second);
// console.log(first);

function addThreeThings( a, b, c){
  let result = a + b + c;
  console.log(result); // 6
}

addThreeThings(...first);
addThreeThings(...second);
