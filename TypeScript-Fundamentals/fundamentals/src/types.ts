
let isCompleted: boolean = true; // Boolean

let y: number = 20; // Number

let title: string = "Manchester Node Workshop"; // String

let topics: string[] = ["Node.js", "JavaScript"]; // Array

// Don't do that :)
let user: object = { name: "John" }; // Object

let x: [number, string] = [1, "test"]; // Tuple

let n: null = null; // Null

let u: undefined = undefined; // Undefined

// Enum
enum Color {
    green,
    red,
}

// Void
function printMessage(message: string): void {
    console.log(message);
}

// Never
function error(message: string): never {
    throw new Error(message);
}