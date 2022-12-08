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