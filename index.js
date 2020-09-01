const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'name',
            message: 'What is your name?'
        }
]);