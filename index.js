// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
var Word = require("./Word.js");
var animals = require('./wordBank.js');
var inquirer = require('inquirer');
var guessedLetters = [];
var guessedInput = false;
var guessesLeft;
var newAnimal;

function startGame() {
    guessesLeft = 5;
    guessedLetters = [];
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
        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["PLAY AGAIN", "EXIT"],
                name: "whatToDo"
            }
        ]).then(function (answers) {
            switch (answers.whatToDo) {
                case "PLAY AGAIN":
                    startGame()
                    break;
                case "EXIT":
                    console.log("Thanks for playing!!")
                    break;
            }
        });
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
                guessesLeft--;
                console.log("You have " + guessesLeft + " guesses left!");
                console.log("Guessed Letters:" + guessedLetters);
                askLetter();
            });
    }
}

startGame();

// TO DO
// Ask user if they want to play again. 
// - if the letter is correct, don't substract from guessesLeft