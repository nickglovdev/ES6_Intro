/* XXX
However, maps does offer us a few bonuses that we don't get
from objects. For example, an object has a prototype,
so by default, there are keys in the map whether the user
has added them or not. Secondly, an object key has to be a
string, whereas in a map, it can be anything from a function,
to an object, to all other types of primitives.

Lastly, maps have methods on them that allow you to easily
get the size of and keep track of the size of your map,
whereas to objects, there's no innate method that allows
you to quickly get those answers */

//XXX not a weakmap
// var myMap = new Map();

//XXX API
/*
set()
get()
size
clear()
has()
*/
// myMap.set('foo','bar');
// myMap.set('hello', 'world');


// console.log(myMap.get('foo'));

//myMap.clear(); clears out myMap
// console.log(myMap.size);
// console.log(myMap.has('foo'));

//XXX Iterators
/*
keys()
entries()
values
*/

// for(const key of myMap.keys()) {
//   console.log(key);
// }
// for(const values of myMap.values()) {
//   console.log(values)
// }

/* XXX
  What the entries does is it returns to us an array made
 of arrays where the first item in the array is the
 key and the second item is the value.
 If we do for(var [key, value] of myMap.entries())
 and console.log that out, we'll see that we get
 foo = bar and hello = world. */

 // for (const [key,value] of myMap.entries()) {
 //   console.log(`${key} = ${value}`)
 // }

 /* XXX Weak Maps
 Next, I wanted to quickly go over weakMaps in ES6.
 What a weakMap means is that no references are held to the
 keys of the map. With no references being held to the keys
 of the map, it allows it to be available for automatic
 garbage collection that's available to us in JavaScript.

 Because no references are kept to the keys, that means that
 they are innumerable, or we cannot iterate over them.
 Because of this, the options of what is available for us
 to use as keys in our map is limited when using weakMaps.
 */

var myMap = new WeakMap();
var myObj={}
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

for (const [key,value] of myMap.entries()) {
  console.log(`${key} = ${value}`)
}
