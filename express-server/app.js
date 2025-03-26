const express = require('express');
const app = express();
const { query } = require('./mapper/emp-map');

app.listen(5000, () => {
  console.log('서버 포트 5000번');
  console.log('http://localhost:5000');
});
// REST API 기반 작업
// 전체조회 : GET + '/emps'
app.get('/emps', (req, res) => {
  let list = query('SELECT'); // 서비스
  res.send(list); // 응답
});

// 등록 : POST + '/emps'
app.post();

// 수정 : PUT + '/emps/100'
app.put();

// 삭제 : DELETE + '/emps/100' << 숨기는거..
app.delete();


// 100이 데이터라면..