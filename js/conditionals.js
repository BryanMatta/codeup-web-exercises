"use strict";
function isOdd(numb) {
    if(numb == 0) {
        return "Number is zero";
    }
    else if(numb % 2 == 0){
        return "Number is even";
    }
    else
        return "Number is odd";
}

function add100(numb) {
    return numb + 100;
}

function isNegative(numb) {
    if(numb > 0){
        return "Number is positive";
    }
    else if (numb < 0) {
        return "Number is negative";
    }
    else{
        return "Number is zero";
    }
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numberConf() {
    if(confirm("Would you like to enter a number")) {
        var numb = parseInt(prompt("Please enter a number"));
        alert(isOdd(numb));
        alert(add100(numb));
        alert(isNegative(numb))
    }
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor() {
    var col = parseInt(prompt("Please choose a color: \n1: Red \n2: Orange \n3: Yellow \n4: Green \n5: Blue \n6: Indigo \n7: Violet") - 1);
    switch (colors[col]) {
        case 0:
            alert("Strawberries are red.");
            break;

        case 1:
            alert("placeholder orange");
            break;

        case 2:
            alert("The sun is a yellow dwarf");
            break;

        case 3:
            alert("Some grass is green");
            break;

        case 4:
            alert("The sky is blue");
            break;

        case 5:
            alert("placeholder for indigo");
            break;

        case 6:
            alert("placeholder for violet");
            break;
    }
}
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function price(){
    var price = parseInt(prompt("Please enter price"));
    alert(calculateTotal(price));
}
function calculateTotal(price) {
    var discount;
    var luckyNumber = Math.floor(Math.random() * 6);
    switch (luckyNumber) {
        case 0:
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". We're sorry but you don't get a discount.";

        case 1:
            discount = price * .10;
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". Your price (after discount) is: $" + price - discount;

        case 2:
            discount = price * .25;
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". Your price (after discount) is: $" + price - discount;

        case 3:
            discount = price * .35;
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". Your price (after discount) is: $" + price - discount;

        case 4:
            discount = price * .50;
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". Your price (after discount) is: $" + price - discount;

        case 5:
            return "Your lucky number was: " + luckyNumber + ". Congratulations your product is free!!!";
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

