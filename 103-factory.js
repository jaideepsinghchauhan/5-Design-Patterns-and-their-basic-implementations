// Factory design pattern

class Car {
  constructor(engine, doors, color) {
    this.engine = engine;
    this.doors = doors;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "civic":
        return new Car("V4", 2, "red");
      case "honda":
        return new Car("V6", 4, "blue");
    }
  }
}

const factory = new CarFactory();
const myCivic = factory.createCar("civic");
const myHonda = factory.createCar("honda");

console.log(myCivic);
console.log(myHonda);
