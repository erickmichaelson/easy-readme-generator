// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let appLicenses = ['Academic Free License v3.0', 'Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'Unlicense', 'N/A']

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Please enter the title of your application: ',
            name: 'appTitle'
        },
        {
            type: 'input',
            message: 'Enter a description of your application: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions: ',
            name: 'install'
        },  {
            type: 'input',
            message: 'Enter usage information: ',
            name: 'usage'
        },  {
            type: 'input',
            message: 'Enter contributor names, separated by commas: ',
            name: 'contributors'
        }, {
            type: 'input',
            message: 'Enter application testing processes: ',
            name: 'test'
        }, {
            type: 'list',
            message: 'Please select licenses used in your application',
            list: appLicenses,
            name: 'license'
        }, {
            type: 'input',
            message: 'Enter Github username: ',
            name: 'git'
        }, {
            type: 'input',
            message: 'Enter email address:',
            name: 'email'
        }
    ])



// TODO: Create a function to write README file
.then(function (responses) {
    const readMe = `
    
    `
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
