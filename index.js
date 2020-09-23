const prompt  = require('./prompt.js');
const controller = require('./controller.js')
const { tokeniser, spellChecker, antonymFinder, continuedAntonymFinder } = require('./dictionary.js')
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();

console.log(
    chalk.magenta(
      figlet.textSync('A&B Rulz Get Stufd', { horizontalLayout: 'full' })
    )
  );
  
const run = async () =>{
    while(true){
        const request = await prompt.ask();
        if(request['preferred-outcome']==='same'){
            controller.getSongQuery(request.mood);
        }
        else if (request['preferred-outcome']==='different'){
            const emotion = tokeniser(request.mood);
            const validEmotion = spellChecker(emotion);
            const oppositeEmotion = await antonymFinder(validEmotion)
            const reallyOppositeEmotion = await continuedAntonymFinder(oppositeEmotion)
            oppositeEmotion === request.mood ? console.log(`Your opposite emotion is ${reallyOppositeEmotion}`) : console.log(`Your opposite emotion is ${oppositeEmotion}`)
            oppositeEmotion === request.mood ? controller.getSongQuery(reallyOppositeEmotion) : controller.getSongQuery(oppositeEmotion)
        }
        else console.log("you fucked up somehow")    
    }
}

run();