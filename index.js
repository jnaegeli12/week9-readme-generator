var fs = require("fs");
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const validateAnswer = async (input) => {
  if (!input) {
     return "Please enter a response.";
  }
  return true;
};

inquirer.prompt([
  {
    type: "input",
    message: "What is your Github profile name?",
    name: "name",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "description",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "What command should be used to run tests on this application?",
    name: "test",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "How do you use this application?",
    name: "usage",
    validate: validateAnswer
  },
  {
    type: "input",
    message: "How can someone contribute to your project?",
    name: "contributors",
    validate: validateAnswer
  },
  {
    type: "list",
    message: "What license is your project under?",
    name: "license",
    choices: [
      "Apache",
      "Boost",
      "Eclipse",
      "GNU",
      "IBM",
      "MIT",
      "Mozilla",
      "Unlicense"
    ],
    validate: validateAnswer
  }
  
]).then(data => {

  fs.writeFile("README.md", generateMarkdown(data), function (err) {
    if (err) {
      console.log(err);
    }
  })

});
