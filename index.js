const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'If desired, add a table of contents here: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Please provide step-by-step installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use of your project: ',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please include the license you are using for this project: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions on how others may contribute to this project: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please describe any tests that can be conducted for your project: ',
    },
];

function init() {
    inquirer
        //GIVEN a command-line application that accepts user input
        //WHEN I am prompted for information about my application repository, a README.md is generated
        .prompt(questions)
        .then((data) => {
            const readMeTitle = `${data.title.toLowerCase().split(' ').join('')}README.md`;
            fs.writeFile(readMeTitle, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();

/*
WHEN I click on the links in the Table of Contents I am taken to the corresponding section of the README
*/