function Letter(letter) {
    this.letter = letter;
    this.guessedYet = false;

    this.correctLetterCheck = function (userInput) {
        if (userInput === this.letter) {
            this.guessedYet = true;
        }
        this.guessedLetterCheck();
    }

    this.guessedLetterCheck = function () {
        if (this.guessedYet === false) {
            return "_";
        }
        else {
            this.guessedYet = true;
            return this.letter;
        }
    }
}

module.exports = Letter;