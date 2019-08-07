// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var animals = require('./wordBank.js');
var inquirer = require('inquirer');
var guessedLetters = [];


function startGame() {
    // console.log("Game has started");
    // // Pick  random word
    // selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    // console.log(selectedAnimal);
    var theWord = "santiago";
    // Use Word constructor to store it

    // Ask for letter
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
            console.log("the guessed letter is:" + answers.guessedLetter);
        });
    // if letter is correct
    //      Update constructor
    //      Add to Guessed letters
    // If letter is incorrect
    //      Add to Guessed letters
    //      -1 to guesses left?

}

startGame();