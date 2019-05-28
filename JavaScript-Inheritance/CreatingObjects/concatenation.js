const base = {
    greet: function () {
        console.log(`Hello, I'm ${this.name}!`);
    }
};

const object = {};

const person = Object.assign(object, base, { name: "Bob" });
person.greet(); // Hello, I'm Bob!