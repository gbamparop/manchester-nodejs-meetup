let person = { name: "Bob" };

Object.defineProperty(person, "age", { enumerable: false });

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// name: Bob

