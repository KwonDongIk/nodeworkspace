const crypto = require('crypto');
const data = 'pw1234';
const salt = crypto.randomBytes(16).toString('base64');

let encData = crypto.createHash('sha512') // 알고리즘
.update(data + salt)
.digest('base64');
console.log(encData);





// let secret = 'agggggggggggkkeekekekdd';
// let encData = crypto.createHmac('sha512', secret)
// .updata(data)
// .digest('base64');
// console.log(encData);