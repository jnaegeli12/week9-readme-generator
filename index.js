var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What is your Github profile name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation"
  },
  {
    type: "input",
    message: "What command should be used to run tests on this application?",
    name: "test"
  },
  {
    type: "input",
    message: "How do you use this application?",
    name: "usage"
  },
  {
    type: "input",
    message: "Who contributed to your project?",
    name: "contributors"
  },
  {
    type: "list",
    message: "What license is your project under?",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense"
    ]
  }

]).then(answers => {

  fs.writeFile("README.md", 
    "# " + answers.title + 
    '\n' + "## Description" + 
    '\n' + answers.description + 
    '\n' + "## Table of Contents" + 
    '\n' + "* Installation" + 
    '\n' + "* Usage" + 
    '\n' + "* License" + 
    '\n' + "* Contributing" + 
    '\n' + "* Tests" + 
    '\n' + "* Questions" + 
    '\n' + "## Installation" + 
    '\n' + "Use `" + answers.installation + "` to install the dependencies." + 
    '\n' + "## Usage" + 
    '\n' + answers.usage + 
    '\n' + "## License" + 
    '\n' + answers.license + 
    '\n' + "## Contributing" + 
    '\n' + answers.contributors + 
    '\n' + "## Tests" + 
    '\n' + "Use `" + answers.test + "` to test the application." + 
    '\n' + "## Questions?" + 
    '\n' + "https://github.com/" + answers.name + "<br />" + 
    '\n' + answers.email,
    
    function (err) {
    if (err) {
      console.log(err);
    }
  })

});

// fs.writeFile("log.txt", JSON.stringify(data, null, '\t'), function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
