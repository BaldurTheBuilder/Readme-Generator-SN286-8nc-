// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//the README.md is titled and has sections for: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title for your README: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project: ',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: '(optional) If your README is long, please add a table of contents here: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use: ',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please include any licenses you are using for this project: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: '(optional) If you want others to be able to contribute to this project, please provide instructions on how they may do so here: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: '(optional) If you want to create tests for your application, please provide examples on how to run them here: ',
    },
    {
        type: 'input',
        name: 'userQuestions',
        message: '(optional) If you wanted to provide answers to common questions concerning this project, please enter the Q/A here: ',
    },
];


// TODO: Create a function to initialize app
function init() {
    inquirer
        //GIVEN a command-line application that accepts user input
        .prompt(questions)
        .then((data) => {
            const readMeTitle = `${data.title.toLowerCase().split(' ').join('')}README.md`;
            console.log(readMeTitle);
            const {title, description, tableOfContents, installation, usage, license, contributing, tests, userQuestions} = data;
            fs.writeFile(readMeTitle, generateReadMe(title, description, tableOfContents, installation, usage, license, contributing, tests, userQuestions), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// TODO: Create a function to write README file
const generateReadMe = (title, description, tableOfContents, installation, usage, license, contributing, tests, userQuestions) => 
    //WHEN I enter my project title it is displayed as the title of the README
    //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions this information is added to various sections.
`# ${title}
## Description
    ${description}
## Table of Contents
    ${tableOfContents}
## Installation
    ${installation}
## Usage
    ${usage}
## License
    ${license}
## How to Contribute
    ${contributing}
## Tests
    ${tests}
## Questions
    ${userQuestions}`;



// Function call to initialize app
init();


/*
//WHEN I am prompted for information about my application repository, a [good] README.md is generated

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username it is added to the Questions section with a link to my GitHub profile

WHEN I enter my email address it is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents I am taken to the corresponding section of the README
*/