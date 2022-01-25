//These license functions are used to create the elements for the badge at the top of the README.
function renderLicenseBadge(license, color) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-${color}.svg)]`
}

function renderLicenseLink(license) {
    return `(https://opensource.org/licenses/${license})`
}

function renderLicenseSection(license) {
    return `This app is covered under the ${license} license. Click on the badge at the top of this README for more information about this license.`
}
//This function generates the contents of the README.
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license, data.color)
    const link = renderLicenseLink(data.license)
    const info = renderLicenseSection(data.license)

  return `# ${data.title}

  ${badge}${link}

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
//Export what was generated as a product of this module.
module.exports = generateMarkdown;
