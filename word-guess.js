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