// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter the description for your project README.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the installation procedure for your project README.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter the usage information for your project README.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter the contribution guidelines for your project README.',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter the test instructions for your project README.',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'Enter your work email.',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username.',
      name: 'github',
    },
    {
      type: 'list',
      message: 'Select your desired licenses to be displayed on your README.',
      choices: ['Apache-2.0', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Hippocratic', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', new inquirer.Separator('----END OF CHOICES----')],
      name: 'license',
    },
])
.then((response)=> {
    writeToFile(response)
    // generateMarkdown(response)
})

// TODO: Create a function to write README file
function writeToFile(data) {
    // console.log(data);
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err)=> 
    err ? console.error(err) : console.log('Responses logged!'));
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
