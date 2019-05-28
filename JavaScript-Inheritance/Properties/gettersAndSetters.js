let person = { firstName: "Bob", lastName: "Jones" };

Object.defineProperty(person, "fullName", {
    get: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    set: function(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

console.log(person.fullName); // Bob Jones

person.fullName = "Nick Smith";
console.log(person.firstName); // Nick
console.log(person.lastName); // Smith


