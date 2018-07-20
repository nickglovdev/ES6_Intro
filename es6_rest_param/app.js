//rest parameters vs arguesments keywords

// returens objects of arrays
// since it is array like we can use properties for arrays

// 1. XXX
// function myFunc() {
//   arguements.forEach(function(v, i, a){
//     console.log(v) // this won't work because it doesn't have all of the methods that an array prototype has
//   })
//   console.log(arguments.length)
// }
//
// myFunc(1, 2, 3);

// XXX 2. to fix with a constructor
//rest parameters vs arguments keyword

function Store() {
  var aisle = {
    fruit: [],
    vegetalbe: []
  }
  return {
    //Store().add('category', 'item1', 'item2');
    add: function(category, ...items) {
      //var items = [].splice.call(arguments, 1);
      console.log(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);
