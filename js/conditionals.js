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

function numberConf() {
    if(confirm("Would you like to enter a number")) {
        var numb = parseInt(prompt("Please enter a number"));
        alert(isOdd(numb));
        alert(add100(numb));
        alert(isNegative(numb))
    }
}


/* ########################################################################## */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor() {
    var col = parseInt(prompt("Please choose a color: \n1: Red \n2: Orange \n3: Yellow \n4: Green \n5: Blue \n6: Indigo \n7: Violet"));
    console.assert(typeof(col) == "number");
    switch (col) {
        case 1:
            alert("Strawberries are red.");
            break;

        case 2:
            alert("placeholder orange");
            break;

        case 3:
            alert("The sun is a yellow dwarf");
            break;

        case 4:
            alert("Some grass is green");
            break;

        case 5:
            alert("The sky is blue");
            break;

        case 6:
            alert("placeholder for indigo");
            break;

        case 7:
            alert("placeholder for violet");
            break;
    }
}

/* ########################################################################## */

function price(){
    var price = parseInt(prompt("Please enter price"));
    alert(calculateTotal(price));

}
function calculateTotal(price) {
    var discount = 0;
    var luckyNumber = Math.floor(Math.random() * 6);
    switch (luckyNumber) {
        case 0:
            return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". We're sorry but you don't get a discount.";

        case 1:
            discount = price * .10;
            break;

        case 2:
            discount = price * .25;
            break;

        case 3:
            discount = price * .35;
            break;

        case 4:
            discount = price * .50;
            break;

        case 5:
            return "Your lucky number was: " + luckyNumber + ". Congratulations your product is free!!!";
    }

    return "Your lucky number was: " + luckyNumber + ". Your total price (before discount is): $" + price + ". Your price (after discount) is: $" + (price - discount);

}
