// Singleton in TypeScript

class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Initialization code
    this.property1 = "Singleton Property";
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public property1: string;
}

// Usage
let singletonInstance1 = Singleton.getInstance();
console.log(singletonInstance1.property1); // Singleton Property

let singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance2.property1); // Singleton Property

console.log(singletonInstance1 === singletonInstance2); // true
