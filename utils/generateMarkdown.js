// function to generate markdown for README
function generateMarkdown(data) {
  return `![License Badge](https://img.shields.io/badge/license-${data.license}-blue)
  # ${data.title} 
  ## Description
  ${data.description}
  ## Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  ## Installation
  Use + \`${data.installation}\` + to install the dependencies.
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributors}
  ## Tests
  Use + \`${data.test}\` + to test the application.
  ## Questions?
  https://github.com/${data.name}
  \n ${data.email}
`;
}

module.exports = generateMarkdown;