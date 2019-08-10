// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
var Word = require("./Word.js");
var animals = require('./wordBank.js');
var inquirer = require('inquirer');
var guessedLetters = [];
var guessesLeft;
var newAnimal;


function startGame() {
    guessesLeft = 5;
    console.log("Game has started");
    // // Pick  random word
    selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log(selectedAnimal);
    newAnimal = new Word(selectedAnimal);
    newAnimal.firstLoad();
    newAnimal.displayWord();

    askLetter();
}

// Ask for letter
function askLetter() {
    if (guessesLeft === 0) {
        console.log("You have lost the game!");
    }
    else {
        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: "input",
                    message: "Please Guess a letter:",
                    name: "guessedLetter"
                }
            ])
            .then(answers => {
                // Use user feedback for... whatever!!
                console.log("the guessed letter is: " + answers.guessedLetter);
                newAnimal.callGuessfun(answers.guessedLetter);
                newAnimal.displayWord();
                guessedLetters.push(answers.guessedLetter);
                console.log("You have " + guessesLeft + " guesses left!");
                guessesLeft--;
                console.log("Guessed Letters:" + guessedLetters);

                askLetter();
            });
    }
}

startGame();