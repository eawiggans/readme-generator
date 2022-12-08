const getData = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const liBadgeType = data.license;
  console.log(liBadgeType)
  let string = ""

  switch (liBadgeType) {
    case "MIT License" : 
    string = "https://img.shields.io/badge/license-MIT-brightgreen" ;
    break;
    case "GNU General Pulic License v3.0" : 
    string = "https://img.shields.io/badge/license-GNU-brightgreen";
    break;
    case "Apache License v2.0" : 
    string = "https://img.shields.io/badge/license-Apache_2.0-brightgreen";
    break;
    case "No license" : 
    string = "";
    break;
    default : "" ;
  }
  return string
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  const liType = data.license;
  switch (liType) {
    case "MIT License" : 
    "https://spdx.org/licenses/MIT.html" ;
    break;
    case "GNU General Pulic License v3.0" : 
    "https://spdx.org/licenses/GPL-3.0-or-later.html";
    break;
    case "Apache License v2.0" : 
    "https://spdx.org/licenses/Apache-2.0.html";
    break;
    default : "" ;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license) {

  }
  else {

  }
 }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}

${renderLicenseBadge(data)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me [here](mailto:${data.email})

You can view my GitHub profile and repositories [here](https://github.com/${data.github})

`;

module.exports = {
  generateMarkdown
};
