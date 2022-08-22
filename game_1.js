const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// rl.setPrompt("PROOF");

// rl.on('line', (line) => {
//     if (line == "111") {
//         console.log('Замечательно! Вы угадали!');
//         rl.close();
//     } else if (line > "111") {
//         console.log('Загаданное число больше!');
//     } else if (line < "111") {
//         console.log('Загаданное число меньше!')
//     }
//         rl.pause();
//         rl.resume();
//         rl.prompt();
//         rl.setPrompt('Подсказки нет:   ');


// });

// rl.on('close', () => {
//     // console.log (history.history);
//     console.log ("Заходите еще!");
// })

// const history = rl.on('history',(history) => {
   
// } )

// rl.on('resume', () => {
//     console.log('Readline resumed.');
// })

// rl.question('Попробуйте угадать число! ', (answer) => {
//     if (answer == "111") {
//     console.log('Замечательно! Вы угадали!');
//     rl.close();
//     } else if (answer > "111") {
//         console.log('Загаданное число больше!');
//     } else if (answer < "111") {
//         console.log('Загаданное число меньше!')
//     }
//   console.log(`Привет: ${answer}`);


  
//   rl.close();
// });

let num = Math.floor(Math.random() * 1000);
console.log(num);

function getNumberCheck(numToFind) {
    // let checkPass = passRight;
    return function checkNumber(numCheck) {
        const num = numToFind;
        result = num == numCheck;
        return result;      
    }   
} 

const checkNum = getNumberCheck(num);


const numAnswer = (questionNum, cb) => {
    rl.question(questionNum, function(answer) {
        console.log(answer);
    return answer;
    cb();
    
});
}

const checkAndDo = (nnn, cb) => {
    if (checkNum) {
        console.log("Угадали");
    };
    cb();
} 

numAnswer("Угадайте!", () => {
    checkAndDo(answer, () => {
        console.log('NO');
    });
    rl.close();
})

// rl.close();
