// Abstract Factory design pattern

class Car {
  constructor(engine, doors, color) {
    this.engine = engine;
    this.doors = doors;
    this.color = color;
  }
}

// this is my concrete factory
class CarFactory {
  createCar(type) {
    switch (type) {
      case "nexon":
        return new Car("V4", 2, "red");
      case "honda":
        return new Car("V6", 4, "blue");
    }
  }
}

class SUV {
  constructor(engine, doors, color) {
    this.engine = engine;
    this.doors = doors;
    this.color = color;
  }
}

// this is my concrete factory
class SUVFactory {
  createSUV(type) {
    switch (type) {
      case "Thar":
        return new SUV("V4", 4, "red");
      case "fortuner":
        return new SUV("V6", 6, "blue");
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

// this is my abstract factory
const autoManufacturer = (type, model) => {
  switch (type) {
    case "car":
      return carFactory.createCar(model);
    case "suv":
      return suvFactory.createSUV(model);
  }
};
const myCar = autoManufacturer("car", "honda");
console.log(myCar);


const mySuv = autoManufacturer("suv", "fortuner");
console.log(mySuv);

