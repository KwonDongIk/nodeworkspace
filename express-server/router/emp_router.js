const express = require('express');
const router = express.Router();
const { query } = require('../mapper/emp-map.js');


// REST API 기반 작업
// 단건조회 : GET + '/emps/100'
router.get('/emps/:empId',(req,res) => {
  let searchId = req.params.empId;
  let info = query('SELECT', null, {id : searchId});
  res.send(info[0]); // 배열이 아니라 객체형태
});

// 등록 : POST + '/emps'
router.post('/emps', (req, res) => {
  let addInfo = req.body;
  query('INSERT', addInfo);
  res.send({'result' : 'success'});
});

// 수정 : PUT + '/emps/100' + JSON
router.put('/emps/:eId', (req, res) => {
  let searchId = req.params.eId;
  let updateInfo = req.body;
  query('UPDATE', updateInfo, {id : searchId});
  res.send({'result' : 'success'});
});

// 삭제 : DELETE + '/emps/100' << 숨기는거..
router.delete('/emps/:empId',(req,res) => {
  let searchId = req.params.empId;
  query('DELETE', null, {id : searchId});
  res.status(204).send('Completed');
  //res.send(info[0]);
});

module.exports = router; // 외부에서 사용할 수 있도록