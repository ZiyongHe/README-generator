let inquirer = require('inquirer')
let fs = require('fs')
// importing module that generates markdown file content
let generateMD = require('./utils/generateMarkdown') 

// array of questions for user
const questions = [
    'Enter project title:',
    'Enter description:',
    'Enter installation instructions:',
    'Enter usage information:',
    'Enter contribution guildelines:',
    'Enter test instructions:',
    'Choose a license:',
    'Enter your GitHub username:',
    'Enter your email address:',
];

// function to write README file
function writeToFile(fileName, data) {

    const content = generateMD(data)

    fs.writeFile(fileName, content, function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('Success!')
      })
}

// function to initialize program, prompt for inputs
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0]
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1]
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2]
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3]
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[4]
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[5]
      },
      {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: [
          'Academic Free License v3.0',
          'Apache license 2.0', 
          'Artistic license 2.0', 
          'Boost Software License 1.0', 
          'BSD 2-clause "Simplified" license', 
          'BSD 3-clause "New" or "Revised" license', 
          'BSD 3-clause Clear license', 
          'Creative Commons license family', 
          'Creative Commons Zero v1.0 Universal', 
          'Creative Commons Attribution 4.0', 
          'Creative Commons Attribution Share Alike 4.0', 
          'Educational Community License v2.0', 
          'Eclipse Public License 1.0', 
          'Eclipse Public License 2.0', 
          'European Union Public License 1.1', 
          'GNU Affero General Public License v3.0', 
          'GNU General Public License family', 
          'GNU General Public License v2.0', 
          'GNU General Public License v3.0', 
          'GNU Lesser General Public License family', 
          'GNU Lesser General Public License v2.1',
          'GNU Lesser General Public License v3.0', 
          'ISC', 
          'LaTeX Project Public License v1.3c', 
          'Microsoft Public License', 
          'MIT', 
          'Mozilla Public License 2.0', 
          'Open Software License 3.0',
          'PostgreSQL License', 
          'SIL Open Font License 1.1', 
          'University of Illinois/NCSA Open Source License', 
          'The Unlicense', 'zLib License']
      },
      {
        type: 'input',
        name: 'GitHub',
        message: questions[7]
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8]
      }
    ])
    .then(function (data) {
        writeToFile('README.md',data)
    })
}

// function call to initialize program
init();
