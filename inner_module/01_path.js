console.log(__filename);
console.log(__dirname); // directory name

const path = require('path');

console.log('폴더정보 : %s', path.dirname(__filename));
console.log('파일정보 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));