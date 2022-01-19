type Person = { name: string; age: number };
type User = { username: string; age: number };

const inter: Person & User = {
  name: "John",
  username: "john111",
  age: 30,
};
