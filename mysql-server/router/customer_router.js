const express = require('express');
const router = express.Router();
const customerService = require('../service/customer_service.js');

// customer
// 전체조회 : GET + '/customers'
router.get('/customers', async (req, res) => {
  let custList = await customerService.findAll();
  res.send(custList);
});

// 단건조회 : GET + '/customers/:id'
router.get('/customers:id', (req, res) => {
  
});

// 등록 : POST + '/customers' + JSON
router.post('/customers', (req, res) => {
  
});

// 수정 : PUT + '/customers/:id' + JSON
router.put('/customers:id', (req, res) => {
  
});

// 삭제 : DELETE + '/customers/:id'
router.delete('/customers:id', (req, res) => {
  
});


module.exports = router;

