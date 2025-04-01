const empDB = require('../mapper/mapper.js');

// 전체 직원 조회
const findAll = async () => {
  let result = await empDB.query('selectAll');
  return result;
};

// ID로 직원 조회
const findById = async (empId) => {
  let result = (await empDB.query('selectById', empId))[0];
  return result; // 단일 객체 반환
};

// 새 직원 등록
const addEmployee = async (empInfo) => {
  let values = [
    'first_name',
    'last_name',
    'email',
    'gender',
    'ip_address'
  ];
  let addinfo = convertArray(empInfo, values);
  let result = await empDB.query('insertInfo', addinfo);
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

// 직원 정보 수정
const modifyEmployeeInfo = async (empInfo, empId) => {
  let updateInfo = [empInfo, empId];
  // 객체와 ID를 배열로 전달
  let result = await empDB.query('updateInfo', updateInfo);
  return result;
};

// 직원 정보 삭제
const removeEmployeeInfo = async (empId) => {
  let result = (await empDB.query('deleteInfo', empId))[0];
  return result;
};

module.exports = {
  findAll,
  findById,
  addEmployee,
  modifyEmployeeInfo,
  removeEmployeeInfo
};