// Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:

var Letter = require("./Letter.js");

testWord = "santiago";


function Word(chosenWord) {
    // An array of new Letter objects representing the letters of the underlying word
    newArray = chosenWord.split("");

    // A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.displayWord = function (arr) {
        var constructWord = " ";
        arr.array.forEach(element => {
            var newLetter = new Letter(element);
            constructWord.push(newLetter)
        });
        console.log(constructWord);
    }

    // A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)
    this.callGuessfun = function (letter) {
        Letter.correctLetterCheck(letter);
    }
}
