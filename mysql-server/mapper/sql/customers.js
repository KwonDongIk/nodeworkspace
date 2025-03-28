const selectAll = `SELECT id
                          ,name
                          ,email
                          ,phone
                          ,address
                          FROM customers
                          ORDER BY id`;

const selectById = `SELECT id
                          ,name
                          ,email
                          ,phone
                          ,address
                          FROM customers
                          WHERE id = ?`;

const insertInfo = `INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)`;
// {name : 'H', address : 'daegu'};
// SET name = 'H', address = 'daegu'
/*
  1) ? 갯수
  1-1) 1개 : 단일 값
  1-2) 2개 이상 : 배열

  2) ? 앞에 컬럼의 유무
  2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
  2-2) 컬럼이 없는 경우 객체
*/
const updateInfo = `UPDATE customers SET ? WHERE id = ?`; // 배열[객체, 단일 값]

const deleteInfo = `DELETE FROM customers WHERE id = ?`;

module.exports = {
  selectAll, selectById, insertInfo, updateInfo, deleteInfo
}