const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

//The README.md is titled and has sections for: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: ',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project name: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your project: ',
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

function init() {
    inquirer
        //GIVEN a command-line application that accepts user input
        //WHEN I am prompted for information about my application repository, a README.md is generated
        .prompt(questions)
        .then((data) => {
            const readMeTitle = `${data.title.toLowerCase().split(' ').join('')}README.md`;
            console.log(readMeTitle);
            //const {username, email, title, description, tableOfContents, installation, usage, license, contributing, tests, userQuestions} = data;
            fs.writeFile(readMeTitle, generateMarkdown(data)/*generateReadMe(title, description, tableOfContents, installation, usage, license, contributing, tests, userQuestions)*/, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

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
    ${userQuestions}
    `;

// Function call to initialize app
init();


/*
WHEN I enter my GitHub username it is added to the Questions section with a link to my GitHub profile

WHEN I enter my email address it is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents I am taken to the corresponding section of the README
*/