// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
var Word = require("./Word.js");
var animals = require('./wordBank.js');
var inquirer = require('inquirer');
var guessedLetters = [];

var testAnimal = new Word("santiago");

testAnimal.firstLoad();
testAnimal.displayWord();

function startGame() {
    // console.log("Game has started");
    // // Pick  random word
    selectedAnimal = animals[Math.floor(Math.random() * animals.length)];

    // Use Word constructor to store it
    // Word(selectedAnimal);
    askLetter();
}

// Ask for letter
function askLetter() {
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
            // testAnimal.displayWord();
            testAnimal.callGuessfun(answers.guessedLetter);
            testAnimal.displayWord();
            askLetter();
        });
}

startGame();