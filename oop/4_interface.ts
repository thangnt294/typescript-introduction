interface Vehicle {
  numberOfWheels: number;

  drive: () => void;
}

class Toyota implements Vehicle {
  numberOfWheels: number;

  drive() {
    console.log("Hi");
  }
}

// interface as function type
interface MyFn1 {
  (a: number, b: number): number;
}

type MyFn2 = (a: number, b: number) => number;

let a: MyFn2 = (x: number, y: number) => x + y;
