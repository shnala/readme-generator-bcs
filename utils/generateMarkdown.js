// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-lightgrey.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    return `(https://opensource.org/licenses/${data.license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    return `This app is covered under the ${data.license} license. Click on the badge at the top of this README for more information about this license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license)
    const link = renderLicenseLink(data.license)
    const info = renderLicenseSection(data.license)

  return `# ${data.title}

  ${badge}
  ${link}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${info}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.instructions}
  
  ## Questions
  
  Have any questions? Reach out to me via email, (${data.email}), and I will get back to you as soon as I can.
  
  Check out my repo in the mean time: (https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
