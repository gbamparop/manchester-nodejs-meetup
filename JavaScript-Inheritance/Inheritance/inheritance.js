function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello! I'm ${this.name}!`);
};

function Student(name, favouriteSubject) {
    Person.call(this, name);
    this.favouriteSubject = favouriteSubject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var bob = new Student("Bob", "JavaScript");
console.log(bob.favouriteSubject); // JavaScript
bob.greet(); // Hello! I'm Bob!