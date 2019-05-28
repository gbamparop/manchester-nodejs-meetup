const meetups = ["Node.js", "JavaScript", ".NET"];

// for..of statement
for (let meetup of meetups) {
    console.log(meetup); // "Node.js", "JavaScript", ".NET"
}

// for..in statement
for (let meetup in meetups) {
    console.log(meetup); // "0", "1", "2"
}