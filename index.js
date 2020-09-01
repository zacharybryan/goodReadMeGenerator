const fs = require('fs');
const util = require('util');

const inquirer = require('inquirer');

const thenableWriteFile = util.promisify(fs.writeFile);

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
            name: 'githubLink',
            message: 'What is the Github url?'
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
            type: "list",
            name: 'licence',
            message: 'What licence would you like to use?',
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense",
            ]
        },
        {
            name: 'contributorsName',
            message: 'What are names of your contributors?'
        }, 
        {
            name: 'contributorsGithub',
            message: 'What are their Github Usernames?'
        },        
        {
            name: 'homeScreenLocation',
            message: 'Please enter the location of a screenshot of your home screen?'
        }
])
.then(function(answers) {
    const readMeOutput = getReadMeOutput(answers);

    thenableWriteFile('./README.md', readMeOutput)
        .then(function(error) {
        if(error) {
            console.log('Something went wrong!', error);
        } else {
            console.log('README.md Complete!');
        }
    })
});

function getReadMeOutput(answers) {
    const name = answers.name;
    const email = answers.email;
    const githubUserName = answers.githubUserName;
    const projectTitle = answers.projectTitle;
    const githubLink = answers.githubLink;
    const description = answers.description;
    const videoLink = answers.videoLink;
    const installation = answers.installation;
    const usage = answers.usage;
    const testingSteps = answers.testingSteps;
    const licence = answers.licence;
    const contributorsName = answers.contributorsName;
    const contributorsGithub = answers.contributorsGithub;
    const homeScreenLocation = answers.homeScreenLocation;

    const readMeOutput = `# ${projectTitle}

[Github link](${githubLink})
![screenshot of home screen](${homeScreenLocation})

## Description

${description}

### Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#licence)

### Installation

[Watch the demo here!](${videoLink})
${installation}

### Usage

[Watch the demo here!](${videoLink})
${usage}

### Contributing

[${contributorsName}](https://www.github.com/${contributorsGithub})

### Tests

${testingSteps}

### Questions

For any additional questions or update requests please contact me at ${email}

Find some of my other projects here!
[${githubUserName}](https://www.github.com/${githubUserName})

### License

${licence}

---
Copyright (c) 2020 ${name}
`;
    return readMeOutput;
}
