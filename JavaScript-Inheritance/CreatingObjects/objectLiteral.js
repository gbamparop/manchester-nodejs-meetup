const bob = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, I'm ${this.name}!`);
    }
};

bob.greet(); // Hello, I'm Bob!