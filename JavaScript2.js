//Learning Functions

alert("These are some assigments that I did. You be asked to input some data for these assignments. Please have fun!");
let UserInput = prompt("Select what you want to do: \n Enter 1 for Add7, \n Enter 2 for Multiply two numbers\n Enter 3 for Capitalize \n Enter 4 for Last Letter.");

if(UserInput == 1)
{
//Assignment 1
//Write a function called add7 that takes one number and returns that number + 7.
    alert("We added 7 to your number, which gives you: " + add7(prompt("Enter a Number to Add 7 Too")));

    function add7(number)
    {
        let total = parseInt(number) + 7;
        return total;
    }
}
else if(UserInput == 2)
{
    //Assignment 2
    //Write a function called multiply that takes 2 numbers and returns their product.

    let number1 = prompt("Enter your first number");
    let number2 = prompt("Enter your second number");

    alert("The product of your two numbers are: " + multiply(number1, number2));

    function multiply(FirstNumber, SecondNumber)
    {
        let total = parseInt(FirstNumber) * parseInt(SecondNumber);
        return total;
    }   
}
else if (UserInput == 3)
{
    //Assignment 3
    //Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

    alert(capitalize(prompt("Enter a word to have the first letter capitalized")));

    function capitalize(input)
    {
        //Converts all words to lower caser then capitalizes the first letter of the word
        let lowerCaseInput = input.toLowerCase();
        return lowerCaseInput.charAt(0).toUpperCase() + lowerCaseInput.slice(1);
    }
}
else if (UserInput == 4)
{
    //Assignment 4
    //Write a function called lastLetter that takes a string and returns the very last letter of that string:
    //----> lastLetter("abcd") should return "d" <----
    
    alert(lastLetter(prompt("Enter a word and this will return the last letter on that word.")));

    function lastLetter(input)
    {
        return input.slice(-1);
    }
}








