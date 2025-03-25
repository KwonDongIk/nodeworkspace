const express = require('express');
const app = express();

// 서버가 제공하는 서비스
app.get('/', (req, res) => {
  res.send('Server connect');
});

// 서버 실행
app.listen(3000, () => {
  console.log('서버가 실행될거에요.');
  console.log('http://localhost:3000');
})