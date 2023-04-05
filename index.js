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
      choices: ['Apache', 'ISC','MIT']
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

    const licenseTypes = [
      {
        "name": "Apache",
        "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      }
    ]

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
    //console.log(vTitle);
    //console.log(json);
    fs.writeFile('ChallengeREADME.md',
      `# ${vTitle};
  ## Table of Contents

  ***
  ## Description
  ${vDesc}
  ***
  ## Installation
  ${vInstructions}
  ***
  ## Usage
  ${vUsage}
  ***
  ## License
  This application is utilizing the ${vLicense} license.
  ***
  ## Contributing
  ${vContributing}
  ***
  ## Tests
  ${vTests}
  ***
  ## Questions
  ${vQuestions}

    `)
  }
  );




  //Project's Title
  //Project Description
  //Table of Contents (Optional)
  //How to Install and Run the Project
  //How to Use the Project
  //Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions