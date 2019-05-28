let person = Object.create(Object.prototype, {
    name: {
        value: "Bob",
        enumerable: true,
        writable: true,
        configurable: true
    },
    age: {
        value: 20,
        enumerable: true,
        writable: true,
        configurable: true
    },

    greet: function() {
        console.log("Hello!");
    }
});

console.log(person.name); // Bob
console.log(person.age); // 20
bob.greet(); // Hello!
