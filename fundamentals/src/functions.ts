// Named function
function namedFunction(x: number, y: number): number {
    return x + y;
}

// Anonymous function
let anonymousFunction = function (x: number, y: number): number {
    return x + y;
};

// Arrow function
let arrowFunction = (x: number, y: number): number => {
    return x + y;
}



// Optional parameter
function optionalParameter(title: string, type?: string) {
    // ...
}

// Default parameters
function defaultParameter(title: string, type = "default") {
    // ...
}

// Overloads
function overload(x: { title: string; }): void;
function overload(x: string): void;
function overload(x): any {
    if (typeof x == "object") {
        console.log(x.title)
    }
    else if (typeof x == "string") {
        console.log(x);
    }
}