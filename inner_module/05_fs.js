const fs = require('fs');

const data = 'Hello, World!';

fs.writeFile('./sample.txt', data, 'latin1', (err) => {
    if (err) {
      throw err;
    }
    console.log('파일쓰는 것 완료하였어요.');
});




fs.readFile('./sample.txt', 'utf8', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
})