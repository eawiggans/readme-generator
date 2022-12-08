const getData = require("../index.js");


function renderLicenseBadge(data) {
  const liBadgeType = data.license;
  let badgeLink = ""

  switch (liBadgeType) {
    case "MIT License" : 
    badgeLink = `![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)` ;
    break;
    case "GNU General Pulic License v3.0" : 
    badgeLink = `![License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
    break;
    case "Apache License v2.0" : 
    badgeLink = `![License Badge](https://img.shields.io/badge/license-Apache_2.0-brightgreen)`;
    break;
    case "No license" : 
    badgeLink = "";
    break;
    default : 
    badgeLink = "" ;
  }
  return badgeLink
 }


function renderLicenseLink(data) { 
  const liType = data.license;
  let liLink = ""
  switch (liType) {
    case "MIT License" : 
    liLink = `This application is covered under the MIT License. See more info [here]("https://spdx.org/licenses/MIT.html")` ;
    break;
    case "GNU General Pulic License v3.0" : 
    liLink = `This application is covered under the GNU General Public License v3.0. See more info [here]("https://spdx.org/licenses/GPL-3.0-or-later.html")`;
    break;
    case "Apache License v2.0" : 
    liLink = `This application is covered under the Apache License v2.0. See more info [here]("https://spdx.org/licenses/Apache-2.0.html")`;
    break;
    case "No license" : 
    liLink = "";
    break;
    default : 
    liLink = "" ;
  }
  return liLink
}


function renderLicenseSection(data) {
  let renderLiSec = ""
  if (data.license === "") {
    return ""
  }
  else {
    renderLiSec =
`
## License
${renderLicenseLink(data)}
    
`
    return renderLiSec
  }
 }


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
${renderLicenseSection(data)}
## Tests
${data.tests}

## Questions
If you have any questions, you can reach me [here](mailto:${data.email})

You can view my GitHub profile and repository [here](https://github.com/${data.github})

`;

module.exports = {
  generateMarkdown
};
