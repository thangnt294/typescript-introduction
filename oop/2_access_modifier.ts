class Animal {
  private age: number;
  readonly name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
}

const animal = new Animal(10, "dog");
// private and readonly
// getters and setters
