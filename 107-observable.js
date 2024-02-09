// Subject (Observable)
class Subject {
  constructor() {
    this.observers = []; // List of observers
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }

  // Example: Subject changes its state
  changeState() {
    console.log("Subject is changing its state...");
    // Notify all observers about the state change
    this.notifyObservers();
  }
}

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(
      `${this.name} received notification: Subject's state has changed.`
    );
  }
}

// Example usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.changeState();
// Output:
// Subject is changing its state...
// Observer 1 received notification: Subject's state has changed.
// Observer 2 received notification: Subject's state has changed.

subject.removeObserver(observer1);

subject.changeState();
// Output:
// Subject is changing its state...
// Observer 2 received notification: Subject's state has changed.
