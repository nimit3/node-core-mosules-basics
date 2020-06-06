const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //solution 1
    /*
    fs.readFile('test-file.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });
    */
    //uper solution is not good because, it takes lot of time and plus, it will try to load all the content in just one go. not like loading everythingpiece by piece(youtube buffering video); plus this will try to save all the date into memory and then load from that memory which is not good at all.

    //solution 2: streams
    /*
    const readable = fs.createReadStream('test-file.txt');
    readable.on('data', chunk => {
        res.write(chunk);
    });
    readable.on('end', () => {
        res.end();
    });
    readable.on('error', err => {
        console.log(err);
        res.statusCode = 500;
        res.end('<h1>File not found</h1>');
    });
    */

    //solution 3 - final best one
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readablesource.pipe(writableDest);


});

server.listen(8000, () => {
    console.log('server has started!');
});