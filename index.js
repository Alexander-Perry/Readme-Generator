// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');


// TODO: Create an array of questions for user input
// title, description, installation, usage,
// licence, contributing, test instructions,  and questions, 
//description, installation instructions, usage information, 
//contribution guidelines, and test instructions
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Your Project Title: '
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project: '
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions: '
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage information: '
},
{
    type: 'input',
    name: 'contribution',
    message: 'Contribution Guidelines: '
},
{
    type: 'input',
    name: 'testing',
    message: 'Test Instructions: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for your project',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'Mozilla Public License 2.0',
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Boost Software License 1.0',
            'The Unlicense',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(generateMarkdown(data));


        });
};

function test() {
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear()
    console.log(currentYear)
}

// Function call to initialize app
init();
// test();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README