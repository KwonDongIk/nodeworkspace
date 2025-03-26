const express = require('express');
const app = express();
const { query } = require('./mapper/emp-map.js');


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

/*
   content-type | express
   Get + QueryString | request.query
   Post + QueryString | request.query
   JSON | request.body
   경로에 값을 전달 | requset.params
*/

// 미들웨어 등록
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false}));
// application/json
app.use(express.json());

const empRouter = require('./router/emp_router.js');
app.use('/', empRouter);

app.use(function(err, req, res, next){
  //res.status(500).json({statusCode : res.statusCode, errMessage : err.errmessage});

});

app.get('/error', (req, res, next) => {
  next(new Error('Process Fail, check data'));
});

// 정적파일(css, html, js, image 등) 처리
//app.use(express.static('./soccerplayer'));

app.use('/img', express.static('./soccerplayer'));