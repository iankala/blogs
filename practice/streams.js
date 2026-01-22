const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/file2.txt', {encoding: 'utf8'})


// readStream.on('data', (chunk) => {
//     console.log("___NEW CHUNK ____" );
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)