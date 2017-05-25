/* aquí tu código */

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`Come on, ${this.name}, let's go outside!`);
  }
}

const CountedDog = withCountClass(Dog);

const pipa = new CountedDog();
console.log(CountedDog.getInstanceCount())

const spot = new CountedDog();
const toby = new CountedDog();
console.log(CountedDog.getInstanceCount())
