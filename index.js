// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;
const getGenMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'For the description section, please describe the what, the why, and the how of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do users operate your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please list any collaborators, third-party assets, or tutorials used.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Please select a license option.',
            name: 'license',
            choices: ['MIT License', 'GNU General Pulic License v3.0', 'Apache License v2.0', 'No license']
        },
        {
            type: 'input',
            message: 'If you have any tests for your project, explain how to run them here.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])};


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((data) => writeFile("./utils/sample/README.md", getGenMarkdown.generateMarkdown(data)))
    .then(() => console.log("Successfully wrote readme"))
    .catch((err) => console.error(err))
}

init()

