// number, string, boolean, object, array, tuple, enum, any
// type inference

const addWithTS = (num1: number, num2: number) => {
  console.log(num1 + num2);
};

addWithTS(1, 3);

// type inference
let love = "I love u";

// object
const person = {
  name: "Thomas",
  age: 30,
};

console.log("PERSON NAME: ", person.name);

// array (basic.js)
// tuple
// enum
enum Role {
  ADMIN = "ADMIN",
  USER = 2,
}

const user = {
  name: "Thomas",
  role: Role.ADMIN,
};

console.log("USER ROLE: ", user.role);

// any
let something: any = 1;
something = "Hi";

// union
let somethingUnion: string | number = 1;
somethingUnion = "Hi";

// literal
const x = 15;
