let person = {};

Object.defineProperty(person, "name", { value: "Bob", configurable: false });

console.log(person.name); // Bob
delete person.name;
console.log(person.name); // Bob

Object.defineProperty(person, "name", { value: "John", configurable: false }); // Throws error

Object.defineProperty(person, "name", { configurable: true }); // Throws error



