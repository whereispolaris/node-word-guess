var Letter = require("./Letter.js");

function Word(chosenWord) {
    this.newArray = chosenWord.split("");

    this.arrLetters = [];

    this.firstLoad = function () {
        for (i = 0; i < this.newArray.length; i++) {
            this.arrLetters.push(new Letter(this.newArray[i]));
        }
    }

    this.displayWord = function () {
        this.arrDisplay = [];
        for (i = 0; i < this.newArray.length; i++) {
            this.arrDisplay.push(this.arrLetters[i].guessedLetterCheck());
        }
        console.log(this.arrDisplay.join(" "));
    }

    this.callGuessfun = function (letter) {
        for (var i = 0; i < this.arrLetters.length; i++) {
            this.arrLetters[i].correctLetterCheck(letter);
        }
    }
}

module.exports = Word;