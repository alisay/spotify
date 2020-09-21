const prompt  = require('./prompt.js');

const run = async () =>{
    const request = await prompt.ask();
    console.log(request);
}

run();