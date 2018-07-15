
// XXX OG
/* var message = "hi";
// {
//   var message = "bye";
// }
 console.log(message); */

// XXX With Let
/* let message = "hi";
// {
//   let message = "bye";
// }
 console.log(message); */

//XXX let in a loop
var fs = [];

// Run without let it will just say 10 over and over with let it will go through 1-9
/*for(let i=0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  })
}

fs.forEach(function (f){
  f();
}) */

//



function letFunc(){
  let previous = 0;
  let current = 1;

  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }
}

/* let allows you to declare variables that are limited in scope to the block,
statement, or expression on which it is used. This is unlike the var
keyword, which defines a variable globally, or locally to an entire
function regardless of block scope. An explanation of why the name
"let" was chosen can be found here. *?
