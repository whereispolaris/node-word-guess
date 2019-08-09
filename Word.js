// Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:

var Letter = require("./Letter.js");


function Word(chosenWord) {
    // An array of new Letter objects representing the letters of the underlying word
    this.newArray = chosenWord.split("");

    this.arrLetters = [];

    this.firstLoad = function () {
        for (i = 0; i < this.newArray.length; i++) {
            this.arrLetters.push(new Letter(this.newArray[i]));
            // console.log(this.arrLetters[i].guessedLetterCheck());
        }
    }

    // A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.displayWord = function () {

        for (i = 0; i < this.newArray.length; i++) {
            console.log(this.arrLetters[i].guessedLetterCheck());
        }
    }

    // A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)
    this.callGuessfun = function (letter) {
        for (var i = 0; i < this.arrLetters.length; i++) {
            this.arrLetters[i].correctLetterCheck(letter);
        }
    }
}

module.exports = Word;