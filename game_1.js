const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// rl.setPrompt("PROOF");

rl.on('line', (line) => {
    if (line == "111") {
        console.log('OK');
        rl.close();
    } else {
    console.log('Readline paused.');
        rl.pause();
        rl.resume();

  }
});

rl.on('close', () => {
    console.log (history.history);
    console.log ("Final");
})

const history = rl.on('history',(history) => {
   
} )

rl.on('resume', () => {
    console.log('Readline resumed.');
})

// rl.question('Как тебя зовут? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Привет: ${answer}`);


  
//   rl.close();
// });