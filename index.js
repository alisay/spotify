const prompt  = require('./prompt.js');
const controller = require('./controller.js')

const run = async () =>{
    const request = await prompt.ask();
    console.log(request)
    controller.getSongQuery(request.mood);
}

run();