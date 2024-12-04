const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM quiz.QandA 
    LIMIT ${offset},${config.listPerPage}`
  );
  const texts = await db.query(
    `SELECT * FROM quiz.QuizText 
    LIMIT ${offset},${config.listPerPage}`
  );
  const data_q = helper.emptyOrRows(rows);
  const data_t =
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(QandA){
  const result = await db.query(
    `INSERT INTO quiz 
    (question, answer, range_start, range_end, dependence) 
    VALUES 
    ('${QandA.question}', '${QandA.answer}', ${QandA.range_start}, ${QandA.range_end}, ${QandA.dependence})`
  );

  let message = 'Error in creating Question';

  if (result.affectedRows) {
    message = 'Question created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}


