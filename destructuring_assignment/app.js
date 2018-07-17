// XXX 1. OJ
var obj = {
  color: "blue"
}
// console.log(obj.color);

// XXX 2. Deconstruct simple
var {color} = {
  color: "purple"
}
// console.log(color);

// XXX 3. With multiple properties
var {color, position} = {
  color: "red",
  name: "John",
  state: "New York",
  position: "Forward"
}
// console.log(color);
// console.log(position);

// XXX 4. Common place to see this.
function generateObj(){
  return {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
  }
}
// var {name, state} = generateObj();
// console.log(`${name} ${state}`);

// XXX 5. With an array. Those commas are skipping over elements of the array
var [first,,,,fifth] = ["red,", "yellow", "green", "blue", "orange"]
// console.log(first);
// console.log(fifth);

// XXX 6.
var people = [
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
]

// people.forEach(({firstName})=> console.log(firstName))

var [,Skyler] = people;
function logEmail({email}) {
  console.log(email);
}
logEmail(Skyler)
