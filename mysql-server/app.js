const express = require('express');
const app = express();

// 미들웨어 등록
// application/x-www-urlencoded
app.use(express.urlencoded({ extended : false}));
// application/json
app.use(express.json());

app.listen(3000, () => {
  console.log('server start');
  console.log('http://localhost:3000');
});

// 라우팅
app.get('/', (req, res) => {
  res.send('welcome');
});