// Packages and modules needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Questions used to generate readme.
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
      choices: ['Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'BSD_2--Clause', 'EPL_1.0', 'GPLv3', 'GPL_v2', 'ISC', 'MIT', 'MPL_2.0', 'Perl', 'Artistic_2.0', 'Unlicense', 'WTFPL', 'Zlib', new inquirer.Separator('----END OF CHOICES----')],
      name: 'license',
    },
    {
      type: 'list',
      message: 'Select the color for your license badge.',
      choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet', 'ff69b4', '9cf', new inquirer.Separator('----END OF CHOICES----')],
      name: 'color',
    },
])
.then((response)=> {
    writeToFile(response)
})
//This function will create the markdown file and use the generateMarkdown module to generate its contents based on the input from the user.
function writeToFile(data) {
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err)=> 
    err ? console.error(err) : console.log('Responses logged!'));
}
