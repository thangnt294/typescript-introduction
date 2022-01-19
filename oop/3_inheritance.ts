class Member {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  static print() {
    console.log("HI");
  }
}

class Admin extends Member {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

const admin = new Admin("John", 10);
Admin.print();

// abstract
