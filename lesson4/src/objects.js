const author = {
    name: "Stephen King",
    age: 77,
    education: {
        university: "University of Maine",
        age: "1970"
    },
    books: ["Green Mile", "Doctor Sleep", "It"],
    intro: function() {
        console.log(`The name of the author is ${this.name}. He studied at ${this.education.university} at year ${this.education.age}`);
    }
};

author.intro();
console.log("Books that he wrote:", author.books);
console.log("-------------------------------------------");

// Second object
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    features: {
        autopilot: true,
        electric: true
    },
    owners: ["Alice", "Bob"],
    displayInfo() {
        console.log(`This is a ${this.year} ${this.brand} ${this.model}.`);
    }
};

car.displayInfo();
console.log("Owners:", car.owners);
