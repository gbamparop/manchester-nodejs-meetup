class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

let person = new Person("Bob");
person.greet(); // Hello, I'm Bob!



