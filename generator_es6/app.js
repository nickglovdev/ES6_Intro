//XXX 1. generator starts function*
/* function* greet() {
    console.log(`you called 'next()'`);
    yield "hello"
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done); */

//XXX 2. multipe yeilds
// function* greet(){
//   console.log(`Generators are "lazy"`);
//   yield "How";
//   console.log(`I'm not called until the second next`);
//   yield "are";
//   console.log(`Call me before "you?"`);
//   yield "you?";
//   console.log(`Called when "done"`);
// }
//   var greeter = greet();
//   console.log(greeter.next()); //log
//   console.log(greeter.next()); //yield
//   console.log(greeter.next());
//   console.log(greeter.next());
//   for(let word of greeter) { // same as above.
//     console.log(word);
//   }
//
// console.log(greeter.next().value); // Generators are "lazy"
//                                    // How
// console.log(greeter.next().value); // I'm not called until the second next
//                                    // are
// console.log(greeter.next().value); // Call me before "you?"
//                                    // you?
// console.log(greeter.next().value);

//XXX 3.
// function* greet() {
//   let friendly = yield "how";
//   friendly = yield friendly + "are";
//   yield friendly + "you?";
// }
// var greeter = greet();
// console.log(greeter.next().value);
// console.log(greeter.next(" the heck ").value);
// console.log(greeter.next(" Silly Ol ").value);

//XXX 4.
function* graph(){
  let x = 0;
  let y = 0;
  while(true){
    yield  {x:x, y:y} // since there is a yield the wile loop will be pause and not go on.
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
