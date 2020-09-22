const prompt  = require('./prompt.js');
const controller = require('./controller.js')
const { tokeniser, spellChecker, antonymFinder } = require('./dictionary.js')
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();

console.log(
    chalk.magenta(
      figlet.textSync('The Name', { horizontalLayout: 'full' })
    )
  );
  
const run = async () =>{
    const request = await prompt.ask();
    if(request['preferred-outcome']==='same'){
        controller.getSongQuery(request.mood);
    }
    else if (request['preferred-outcome']==='different'){
        const emotion = tokeniser(request.mood);
        const validEmotion = spellChecker(emotion);
        const oppositeEmotion = await antonymFinder(validEmotion)
        console.log(`Your alternative mood is ${oppositeEmotion}`)
        controller.getSongQuery(oppositeEmotion);
    }
    else console.log("you fucked up somehow")
}

run();