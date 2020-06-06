const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
//process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log('timer 1 is finished'), 0);
setImmediate(() => console.log('immediate 1 is finished'));

fs.readFile('test-file.txt', 'utf-8', () => {
    console.log('I/O is finshed~');
    console.log('-------------------------------------');

    setTimeout(() => console.log('timer 2 is finished'), 0);
    setTimeout(() => console.log('timer 3 is finished'), 3000);
    setImmediate(() => console.log('immediate 2 is finished'));

    process.nextTick(() => console.log('process.nexttick.....'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted!');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted!');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted!');
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted!');
    });
});

console.log('hello from the top level code');