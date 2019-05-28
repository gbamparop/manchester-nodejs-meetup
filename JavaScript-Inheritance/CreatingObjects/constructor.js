function Person(name) {
    this.name = name;

    this.greet = function () {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

const bob = new Person("Bob");
bob.greet(); // Hello, I'm Bob!