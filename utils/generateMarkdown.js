var unlicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"

var mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

var mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

var ibm = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"

var gnu3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

var eclipse = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"

var boost = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

var apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"


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
  Use \`${data.installation}\` to install the dependencies.
  ## Usage
  ${data.usage}
  ## License
  This project is covered by the ${data.license}. For more information on available licenses, visit [https://choosealicense.com/](https://choosealicense.com/).
  ## Contributing
  ${data.contributors}
  https://github.com/firstcontributions/first-contributions
  ## Tests
  Use \`${data.test}\` to test the application.
  ## Questions?
  https://github.com/${data.name}
  \n ${data.email}
`;
}

module.exports = generateMarkdown;