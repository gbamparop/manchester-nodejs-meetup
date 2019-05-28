let person = { name: "Bob" };

Object.defineProperty(person, "name", { writable: false });

person.name = "Jon";
console.log(person.name); // Bob