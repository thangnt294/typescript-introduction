function Logger(target: Function) {
  console.log("Logging...");
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating a person object...");
  }
}

const per = new Person();

console.log(per);

// Decorator factory
// Property decorator
// function Log(target: any, propertyName: string)
// Accessor & Parameter decorators... (not mentioned)
