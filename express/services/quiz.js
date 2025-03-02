//GET
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query( //Abfrage für Quizfragen
    `SELECT * FROM quiz.QandA 
    WHERE Id = 
    LIMIT ${offset},${config.listPerPage}`
  );
  const texts = await db.query( //Abfrage für Texte
    `SELECT * FROM quiz.QuizText 
    LIMIT ${offset},${config.listPerPage}`
  );
  const data_q = helper.emptyOrRows(rows); // kreiert ein Array mit Quizfragen
  const data_t = helper.emptyOrRows(texts); // kreiert ein Array mit Texten
  const data = {questions: data_q, text: data_t[0] }; //kreiert ein Objekt mit den Quizfragen und dem ersten Text
  const meta = {page};

  return {
    data,
    meta
  }
}

//POST 
async function create(QandA){
  const result = await db.query(
    `INSERT INTO QandA 
    (question, answer,  multiple_joice1,  multiple_joice2,  multiple_joice3,  multiple_joice4, 
    range_start, range_end, dependence) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [QandA.question, QandA.answer,  
      QandA.multiple_joice1, QandA.multiple_joice2, QandA.multiple_joice3, QandA.multiple_joice4,  
      QandA.range_start, QandA.range_end, QandA.dependence]
  );

  let message = 'Error in creating Question';

  if (result.affectedRows) {
    message = 'Question created successfully';
  }

  return {message};
}

async function createQuiz(quizText){
  const result = await db.query(
    `INSERT INTO quizText 
    (title, quiz_text) 
    VALUES 
    (?, ?)`, [quizText.title, quizText.quiz_text]
  );

  const data = result.insertId;

  let message = 'Error in creating Question';

  if (result.affectedRows) {
    message = 'Quiz created successfully';
  }

  return {message, data};
}

module.exports = {
  getMultiple,
  create,
  createQuiz,
}


