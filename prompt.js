const inquirer = require('inquirer');

const ask = () =>{
    const questions = [
        {
          name: 'mood',
          type: 'input',
          message: 'Please tell us how you are feeling',
          validate: function( value ) {
            if (value) {
              return true;
            } else {
              return 'Please describe your mood';
            }
          }
        },
        {
          name: 'preferred-outcome',
          type: 'checkbox',
          message: 'Do you want to feel the opposite or stay the same?',
          choices: ["same", "different"],
          validate: function(value) {
            if (value.length>0) {
              return true;
            } else {
              return 'Just pick one.';
            }
          }
        }
      ];
      return inquirer.prompt(questions);  
}

module.exports = {
    ask,
}