const author = {
    name: "Stephen King",
    age: 77,
    education: {
        university: "University of Maine",
        age: "1970",
        get authorEducation(){
            return `${this.university} at ${this.age}`;
        }
    },
    books: ["Green Mile", "Doctor Sleep", "It"],
    intro: function() {
        console.log(`The name of the author is ${this.name}. He studied at ${this.education.university} at year ${this.education.age}`);
    },
    get fullInformation() {
        return `Author name: ${this.name}. His age: ${this.age}. His education: ${this.education.authorEducation}`;
    },
    set updateAge(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this.age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    },
    set addBook(newBook){
        if(!this.books.includes(newBook)){
            this.books.push(newBook);
        } else {
            console.log("This book is already in the list");
        }
    }
};

console.log(author.fullInformation);
author.updateAge = 78;
console.log(author.fullInformation);
author.addBook = "Dark Tower";
console.log(author.books);
author.addBook = "It";
