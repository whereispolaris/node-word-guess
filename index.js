// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');

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