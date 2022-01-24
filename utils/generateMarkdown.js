// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const license = data.license
function renderLicenseBadge(license) {
    return '[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-lightgrey.svg)]'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return '(https://opensource.org/licenses/${data.license})'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license)
    const link = renderLicenseLink(data.license)
    // const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${badge}
  ${link}
  
  ## How to Contribute
  
  ${data.contribution}
  
  ## Tests
  
  ${data.instructions}`;
}

module.exports = generateMarkdown;
