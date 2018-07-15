// XXX 1. Old way of say not to reassign a variable

// var VALUE = 'hello world';
// VALUE ='foo bar';
// console.log('value: ', VALUE);

// XXX 2. With ES6

// const value = 'xehello world';
// VALUE ='foo bar';
// console.log('value: ', value);

// XXX 3.

// const VALUE = {};
// VALUE.foo = 'bar';
// console.log('value', VALUE)

// XXX 4. ready only error

// const VALUE = {};
// VALUE = 'bar';
// console.log('value', VALUE)

// const adhere to the block scope

// XXX will not work
if(true){
   const foo = 'bar';
}
console.log('foo', foo)

//correct

if(true){
   const foo = 'bar';
   console.log('foo', foo)
}
