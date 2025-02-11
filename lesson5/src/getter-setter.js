const author = {
    name: "Stephen King",
    _age: 77,
    education: {
        university: "University of Maine",
        age: "1970",
        get authorEducation(){
            return `${this.university} at ${this.age}`;
        }
    },
    books: ["Green Mile", "Doctor Sleep", "It"],
    fullInformation: function() {
        return `Author name: ${this.name}. His age: ${this.age}. His education: ${this.education.authorEducation}`;
    },
    get age() {
        return this._age;
    },
    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    },
    get booksList() {
        return this.books.join(", ");
    },
    addBook(newBook) {
        if (!this.books.includes(newBook)) {
            this.books.push(newBook);
        } else {
            console.log("This book is already in the list");
        }
    }
};

console.log(author.fullInformation());
author.age = 78;
console.log(author.fullInformation());
author.addBook("Dark Tower");
console.log(`Updated books: ${author.booksList}`);
author.addBook("It");
