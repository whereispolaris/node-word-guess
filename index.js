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
    selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log(selectedAnimal);
    newAnimal = new Word(selectedAnimal);
    newAnimal.firstLoad();
    newAnimal.displayWord();
    askLetter();
}

function wantToContinue() {
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

// Ask for letter
function askLetter() {

    // This checks if user has ran out of guesses and prompts them if they want to play again. 
    if (guessesLeft === 0) {
        console.log("You have lost the game!");
        wantToContinue();
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
                if (newAnimal.arrDisplay.includes(answers.guessedLetter)) {
                    console.log("CORRECT!")
                }
                else {
                    console.log("INCORRECT!");
                    guessesLeft--;
                }
                console.log("You have " + guessesLeft + " guesses left!");
                console.log("Guessed Letters:" + guessedLetters);

                if (newAnimal.arrDisplay.includes("_")) {
                    console.log("The show must go on");
                    askLetter();
                }
                else {
                    console.log("You have won the game");
                    wantToContinue();
                }


            });
    }
}

startGame();

// TO DO
// - Check if any letters contain _ and tell user they've won the game