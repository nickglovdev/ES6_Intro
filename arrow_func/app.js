var message = "hi";
{
  var message = "bye";
}

console.log(message);

var createGreeting = function(message, name){
  return message + name;
}

//Regular
var arrowGreeting = (message, name) => {
  return message + name;
}

// no line
var arrowGreeting = (message, name) => message + name;

// One parameter
var arrowGreeting = message => message;

var squared = x => x * x;

//XXX OG
var deliveryBoy = {
  name: "John",

  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    var that = this;

    this.handleMessage("Hello, ", function(message) {
      that.name //get the proper name

      console.log(message + that.name);
    })
  }
}
deliveryBoy.receive();

// XX Tranform simple
var deliveryBoy = {
  name: "John",

  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    this.handleMessage("Hello, ", (message) => {
      console.log(message + this.name);
    })
  }
}
deliveryBoy.receive();

//XXX Best
var deliveryBoy = {
  name: "John",

  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name))
  }
}
deliveryBoy.receive();
