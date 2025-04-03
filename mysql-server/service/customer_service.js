const mariaDB = require('../mapper/mapper.js');

// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};

// 단건조회
const findById = async (custId) => {
  let info = (await mariaDB.query ('selectById', custId))[0];
  return info;
};

// 등록
const addCustomer = async (custInfo) => { // 객체로 받아요 근데 우린 배열이 필요해요
  let columnlist = ['name', 'email', 'phone', 'address'];
  let addInfo = convertArray(custInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo)
  return result;
};

// 배열로 변환
const convertArray = (target, list) => {
  let ary = [];
  for(let field of list) {
    let val = target[field];
    ary.push(val);
  }
  return ary;
}

// 수정
const modifyCustomerInfo = async (custInfo, custId) => {
  let updateInfo = [custInfo, custId];
  let result = await mariaDB.query('updateInfo', updateInfo);
  return result;
};

// 삭제
const removeCustomerInfo = async (custId) => {
  let result = (await mariaDB.query ('deleteInfo', custId));
  console.log(result);
  return result;
};

module.exports = {
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo
}