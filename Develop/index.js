// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (title, description, purpose, usage, credits, license) => {
    const md = `
    README
    
   # <${title}>
   
   ## Description
    ${description}
   
   ## Purpose of the Applicaition
    ${purpose}
   
   ## Instruction
    ${usage}
   
   ## Credits
    ${credits}
    
   ## License
    ${license}`
    
    return md;
}

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please briefly explain about your application?',
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'What is the purpose of the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instruction of your application?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborator(If any)',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License your project',
    },
  ])
// TODO: Create a function to write README file
.then((data) => {
    const README = generateREADME(data.title, data.description, data.purpose, data.usage, data.credits, data.license);

    fs.writeFile('README.md', README, (err) =>
err ? console.log(err) : console.log('Sucess!')
);
});