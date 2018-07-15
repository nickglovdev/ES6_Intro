
// The old way would be ES5

// var color = "red";
// var speed = 10;
//
// var car = {color:color, speed:speed};
//
// console.log(car.color);
// console.log(car.speed)

// ES6 treats this in this manner
var color = "red";
var speed = 10;
var drive = "go";

// var car = {
//   color,
//   speed,
//   go() {
//     console.log("vroom");
//   }
// };

//computed property
var car = {
  color,
  speed,
  [drive]: function () {
    console.log("vroom");
  }
};

//

console.log(car.color);
console.log(car.speed)
car.go();
