const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your project.",
    },

    {
        type: "input",
        name: "description",
        message: "Describe the Purpose of this project.",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please select a license for this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },

    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },

      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt (questions).then((responses) => {
        console.log("Creating Proffessional README.md File...");
        writeToFile("./RM/README.md", generateMarkdown({...responses}));
    });

}

// function call to initialize program
init();
