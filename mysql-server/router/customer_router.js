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
router.get('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custInfo = await customerService.findById(custId);
  res.send(custInfo);
});

// 등록 : POST + '/customers' + JSON
router.post('/customers', async (req, res) => {
  let addCust = req.body;
  let result = await customerService.addCustomer(addCust);
  res.send(result);
  
});

// 수정 : PUT + '/customers/:id' + JSON
router.put('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custUpInfo = req.body;
  let result = await customerService.modifyCustomerInfo(custUpInfo, custId);
  res.send(result);
  
});

// 삭제 : DELETE + '/customers/:id'
router.delete('/customers/:id', (req, res) => {
  let custId = req.params.id;
  let result = customerService.removeCustomerInfo(custId);
  res.send(result);
  
});


module.exports = router;

