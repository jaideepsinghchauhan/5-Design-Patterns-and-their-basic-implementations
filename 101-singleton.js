console.log("101-singleton.js");

// Singleton is a special creational design pattern in which only one instance of a class can exist.

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
var singletonInstance1 = Singleton.getInstance();
console.log(singletonInstance1);

var singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance2);

console.log(singletonInstance1 === singletonInstance2); // true
