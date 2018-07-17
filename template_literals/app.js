// var salutation = "Hello";
// var greeting = salutation + ", World";
//
// console.log(greeting);

// Strings
var salutation = "Hello";
var greeting = `${salutation}, World`;
console.log(greeting);

// Expressions

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${x + y}`
console.log(equation); // "1 + 2 = 3"

// Tagging String templates

// var message = `Its ${new Date().getHours()} Im sleepy`;
// console.log(message); // "It's 15 I'm sleepy"

//parse out for whem I'm actually sleepy

//writing the function of tag
function tag(strings, ...values){
    console.log(strings);
    console.log(values);
    if(values[0] < 20) {
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}


var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);
