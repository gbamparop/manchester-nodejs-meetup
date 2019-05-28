function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}!`);
}

let person = new Person("Bob", 20);
person.greet(); // Hello, I'm Bob!