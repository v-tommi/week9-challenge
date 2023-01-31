const inquirer = require('inquirer');
const fs = require('fs').promises;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project Title:',
      name: 'title',
    },
    /*{
      type: 'input',
      message: 'Project Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions:',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'usage',
    },*/
    {
      type: 'list',
      message: 'License Type:',
      name: 'license',
    },
    /*{
      type: 'input',
      message: 'Contributing:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Tests:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Questions:',
      name: 'questions',
    },*/
  ])
  .then((response) => {
    let jsonString = JSON.stringify(response);
    let json = response;
    const {
      title: vTitle, 
      description: vDesc, 
      instructions: vInstructions, 
      usage: vUsage, 
      license: vLicense, 
      contributing: vContributing,
      tests: vTests,
      questions: vQuestions
    } = response
    console.log(vTitle);
    console.log(json)
    fs.writeFile('ChallengeREADME.md', 
    `# ${vTitle}
  ## Table of Contents

  ***
  ## Description
  ${vDesc}
  ***
  ## Installation
  ${vInstructions}
  ***
  ## Usage
  ${vUse}
  ***
  ## License
  ***
  ## Contributing
  ***
  ## Tests
  ***
  ## Questions

    `)
  }
    
  

  );
  



  //Project's Title
  //Project Description
  //Table of Contents (Optional)
  //How to Install and Run the Project
  //How to Use the Project
  //Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions