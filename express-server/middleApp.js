const express = require('express');
const app = express();

// 미들웨어 등록
const session = require('express-session');

app.listen(3000, () => {
  console.log('http://localhost:3000');
});