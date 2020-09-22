const prompt  = require('./prompt.js');
const controller = require('./controller.js')
const { tokeniser, spellChecker, antonymFinder } = require('./dictionary.js')

const run = async () =>{
    const request = await prompt.ask();
    if(request['preferred-outcome'][0]==='same'){
        controller.getSongQuery(request.mood);
    }
    else if (request['preferred-outcome'][0]==='different'){
        const emotion = tokeniser(request.mood);
        const validEmotion = spellChecker(emotion);
        const oppositeEmotion = antonymFinder(validEmotion)
        controller.getSongQuery(oppositeEmotion);
    }
    else console.log("you fucked up somehow")
}

run();