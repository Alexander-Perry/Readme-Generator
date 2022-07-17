// Required Files 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for user prompt
// Project Title, Description, Installation Instructions, Usage Information, Contribution Guidelines
// Test Instructions, License List, Github username, email address. 
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

// initialise the app and run the functions
function init() {
    // inquirer prompt for questions 
    inquirer.prompt(questions)
        .then((data) => {
            // run the generatemarkdown function
            const answers = generateMarkdown(data);
            //write the readme file
            fs.writeFile('README.MD', answers, (err) =>
                err ? console.log(err) : console.log('README.MD generated'))
        });
};

// Function call to initialize app
init();