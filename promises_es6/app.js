
//Promises have resolved or rejected
//allow you to perform asynchronous operations in a synchronous-like manner.
//1. XXX basic
var d = new Promise((resolve, reject) => {
  if (true){
    resolve('hello world');
  } else {
    reject('no bueno');
  }
});

// Resolved this will fire
d.then((data) => console.log('success : ', data));

// Reject will fire
d.catch((error) => console.error('error : ', error));

//2. XXX asynchronous
var a = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true){
      resolve('aello world');
    } else {
      reject('ao bueno');
    }
  }), 2000;
});

// chained
a.then((data) => {
  console.log('success : ', data)
  return 'foo bar';
}).
  then((data) => console.log('success2 : ', data)).
  catch((error) => console.error('error : ', error));
