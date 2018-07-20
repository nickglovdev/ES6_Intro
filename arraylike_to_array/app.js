//1 comes up with node list. Not an array
// const products = document.querySelectorAll('.product');

//2 is an array and can use array methods
const products =
  Array.from(document.querySelectorAll('.product'));

products
  .filter(product => parseFloat(product.innerHTML) < 10)
  .forEach(product => product.style.color = 'red');
console.log(products);
