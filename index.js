const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'name',
            message: 'What is your name?'
        },
        {
            name: 'email',
            message: 'What is your email?'
        },
        {
            name: 'githubUserName',
            message: 'What is your Github user name?'
        },
        {
            name: 'projectTitle',
            message: 'What is the name of your project?'
        },
        {
            name: 'description',
            message: 'Describe your project'
        },
        {
            name: 'videoLink',
            message: 'What is the url of your projects demo video?'
        },
        {
            name: 'installation',
            message: 'What are the steps to install?'
        },
        {
            name: 'usage',
            message: 'What are usage instructions?'
        },
        {
            name: 'testingSteps',
            message: 'What are the steps to test your app?'
        },
        {
            name: 'licence',
            message: 'What licence would you like to use?'
        },
        {
            name: 'contributorsName',
            message: 'What are names of your contributors?'
        }, 
        {
            name: 'contributorsGithub',
            message: 'What are their Github Usernames?'
        }
]);