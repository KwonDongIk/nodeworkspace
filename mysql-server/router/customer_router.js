const express = require('express');
const router = express.Router();

// customer
// 전체조회 : GET + '/customers'
router.get('/customers', (req, res) => {

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

