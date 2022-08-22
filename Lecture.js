// Пример 1
// setTimeout(() => {
//     console.log("timeout 1 works");
//     // while (true) {}
// }, 2000);

// console.log("Between timers");

// setTimeout(() => {
//     console.log("timout 2 works");
// }, 1990);

// console.log("main progrem works");


// Пример 2 call-back

const readFile = (fname, cb) => {
    setTimeout(() => {
        console.log('file', fname, 'read');
        cb();
    }, 500);
};

const dbSelect = (query, cb) => {
    setTimeout(() => {
        console.log('file', query, 'done');
        cb();
    }, 1000);
};

const sleep = (msec, cb) => {
    setTimeout(() => {
        console.log('slept', msec, 'msec');
        cb();
    }, msec);
};


readFile('data.txt', () => {
    sleep(2000, () => {
        dbSelect('SELECT', () => {
            sleep(3000, () => {
                console.log("All work done");
            })
        })
    })
})

setInterval(() => console.log("!"), 1000);