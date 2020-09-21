const inquirer = require('inquirer');

const ask = () =>{
    const questions = [
        {
          name: 'mood',
          type: 'input',
          message: 'Please tell us how you are feeling',
          validate: function( value ) {
            if (value.length) {
              return true;
            } else {
              return 'Just a word to describe your current mood';
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
              return 'Just answer the question, buddy.';
            }
          }
        }
      ];
      return inquirer.prompt(questions);  
}

module.exports = {
    ask,
}