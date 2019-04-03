class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greeting(): void {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

const person = new Person("John");
person.greeting(); // Hello, I'm John!


class Developer extends Person {
    skills: string[];

    constructor(name: string, skills: string[]) {
        super(name);
        this.skills = skills;
    }

    greeting(): void {
        console.log(`First I need a coffee!`);
    }
}

const developer = new Developer("Bob", ["Node.js"]);
developer.greeting() // First I need a coffee!

// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }

// class Developer extends Person {
//     private skill: string;

//     constructor(name: string, skill: string) {
//         super(name);
//         this.skill = skill;
//     }

//     greeting(): void {
//         console.log(`Hello, I'm ${this.name}! I like ${this.skill}!`);
//     }
// }

// const person = new Person("John");
// console.log(person.name); // Error: Property name is protected

// const developer = new Developer("Bob", "Node.js");
// console.log(developer.skill); // Error: Property skill is private
// developer.greeting(); // Hello, I'm Bob! I like Node.js!





