// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Content
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)
<hr>

## Description
${data.description}


## Installation
${data.installation }


## Usage
${data.usage}


## Contributing
${data.contribution}


## Tests
${data.tests}


## License
This application is covered under ${data.license} 


## Questions
GitHub link: https://github.com/${data.GitHub}

Feel free to contact me at ${data.email} if you have anything questions
`;
}

module.exports = generateMarkdown;
