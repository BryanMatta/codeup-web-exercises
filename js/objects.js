(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {firstName: 'Bryan', lastName: 'Matta'};
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = `Hello from ${person.firstName} ${person.lastName}!`;
    console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
     shoppers.applyDiscount = function (client) {//after the ternary condition passes true this applies the discount.
             var price = client.amount;
             var discount = price * .12;
             return `Price before discount $${price} the discount is: $${discount} total after discount: $${price - discount}`;
     };
     shoppers.checkForDiscount = function () {
         shoppers.forEach(function (client) {
             var price = client.amount;
             //Finished Exercise this way but made a refactor to utilize a ternary condition.
             // if (client.amount >= 200) {
             //     console.log(`Client's name: ${client.name}. ${shoppers.applyDiscount(client)}`);
             // }
             // else {
             //     console.log(`Client's name: ${client.name}. We're sorry but you're not applicable for the discount. Your total is: $${price}`);
             // }
             //This makes it easier to read.
             (client.amount >= 200) ? console.log(`Client's name: ${client.name}. ${shoppers.applyDiscount(client)}`) :
                 console.log(`Client's name: ${client.name}. We're sorry but you're not applicable for the discount. Your total is: $${price}`);
         });
     };
    shoppers.checkForDiscount();
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [];
    function createBook(bookTitle, author) {
        var name = author.split(' ');
        books.push({
            title:bookTitle,
            author:{
                firstName: name[0],
                lastName: name[1]
            }
        });
        console.log(`Adding Book: ${bookTitle} by: ${name[0]} ${name[1]}`);
    }
    function showBookInfo(number) {
        console.log(`Book # ${number+1} \nTitle: ${books[number].title} \nAuthor: ${books[number].author.firstName} ${books[number].author.lastName}\n---`);
    }
    createBook('The Mist', 'Stephen King');
    createBook('Rant', 'Chuck Palahniuk');
    createBook('Harry Potter', 'J.K Rowling');
    createBook('Debt of Honor', 'Tom Clancy');
    createBook('Blood of Elves', 'Andzrej Sapkowski');
    createBook('The Lord of the Rings', 'J.R.R Tolkien');
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for(var i = 0; i <= books.length-1; i++){
        showBookInfo(i);
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
})();
