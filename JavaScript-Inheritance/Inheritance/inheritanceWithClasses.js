class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello! I'm ${this.name}!`);
    }
}

class Student extends Person {
    constructor(name, favouriteSubject) {
        super(name);
        this.favouriteSubject = favouriteSubject;
    }
}

var bob = new Student("Bob", "JavaScript");
console.log(bob.favouriteSubject); // JavaScript
bob.greet(); // Hello! I'm Bob!