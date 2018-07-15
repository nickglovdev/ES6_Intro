function greet(greeting, name = "John"){
//  console.log(greeting + ", " + name);
}

greet("hello", "Bill"); // Default overide


//1
// function recieve(complete) {
//   complete();
// }
//
// recieve(function() {
//   //console.log("complete");
// })
//
// //2
// function recieve(complete = function () {
//   //console.log('complete');
// }) {
//   complete();
// }
// recieve()

//3
function receive(complete = () => console.log("complete")){
  complete();
}
receive();

//4 can do, but not recommended
//let receive = (complete = () => console.log("complete")) => complete();
