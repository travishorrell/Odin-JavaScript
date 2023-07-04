//Learning Functions

//Assignment 1
//Write a function called add7 that takes one number and returns that number + 7.

alert("These are some assigments that I did. You be asked to input some data for these assignments. Please have fun!");

alert("We added 7 to your number, which gives you: " + add7(prompt("Enter a Number to Add 7 Too")));

function add7(number){
    let total = parseInt(number) + 7;
    return total;
}

//Assignment 2
//Write a function called multiply that takes 2 numbers and returns their product.

let number1 = prompt("Enter your first number");
let number2 = prompt("Enter your second number");

alert("The product of your two numbers are: " + multiply(number1, number2));

function multiply(FirstNumber, SecondNumber){
    let total = parseInt(FirstNumber) * parseInt(SecondNumber);
    return total;
}

//Assignment 3
//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

alert(capitalize(prompt("Enter a word to have the first letter capitalized")));

function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//Assignment 4
//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//----> lastLetter("abcd") should return "d" <----
