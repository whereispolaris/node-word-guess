var Word = require("./Word.js");
var animals = require('./wordBank.js');
var inquirer = require('inquirer');
var chalk = require('chalk');
var guessedLetters = [];
var guessesLeft;
var newAnimal;

function startGame() {
    guessesLeft = 5;
    guessedLetters = [];

    console.log(chalk.magenta("------------------"));
    console.log(chalk.magenta(" GUESS THE ANIMAL"));
    console.log(chalk.magenta("------------------ \n"));
    selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
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
                console.log(chalk.magenta("Thanks for playing!"));
                break;
        }
    });
}

// Ask for letter
function askLetter() {

    // This checks if user has ran out of guesses and prompts them if they want to play again. 
    if (guessesLeft === 0) {
        console.log(chalk.red("BOO! YOU LOST! \n"));
        wantToContinue();
    }
    else {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please Guess a letter:",
                    name: "guessedLetter"
                }
            ])
            .then(answers => {
                newAnimal.callGuessfun(answers.guessedLetter);
                newAnimal.displayWord();
                if (newAnimal.arrDisplay.includes(answers.guessedLetter)) {
                    console.log(chalk.green("\nCORRECT!\n"))
                }
                else {
                    console.log(chalk.red("\nINCORRECT!\n"));
                    guessedLetters.push(answers.guessedLetter);
                    console.log("Incorrect guessed Letters: " + chalk.red(guessedLetters) + "\n");
                    guessesLeft--;
                }
                console.log(chalk.yellow("You have ") + chalk.red(guessesLeft) + chalk.yellow(" guesses left! \n"));


                if (newAnimal.arrDisplay.includes("_")) {
                    askLetter();
                }
                else {
                    console.log(chalk.green("YAY! YOU WON THE GAME!\n"));
                    wantToContinue();
                }
            });
    }
}

startGame();
