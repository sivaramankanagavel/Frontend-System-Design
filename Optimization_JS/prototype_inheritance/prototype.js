// General object representing a book
const book = {
    title: "Default Title",
    getDetails() {
        return `Title: ${this.title}`;
    }
};

// Specific book that inherits from 'book'
const myBook = Object.create(book);
myBook.title = "JavaScript Guide";

console.log(myBook); // Output: Title: JavaScript Guide

// Creating a constructor function
function Animal() {}
Animal.prototype.sound = "Generic sound"; // Adding property to prototype

// Creating an instance
const dog = new Animal();

console.log(dog.sound); // Output: "Generic sound"
console.log(dog.__proto__ === Animal.prototype); // Output: true
console.log(dog);
