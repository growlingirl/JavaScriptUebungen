const express = require('express');
const router = express.Router();
const quiz = require('../services/quiz');

/* GET quiz. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await quiz.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quiz `, err.message);
    next(err);
  }
});

/* POST QandA */
router.post('/', async function(req, res, next) {
  try {
    res.json(await quiz.create(req.body));
  } catch (err) {
    console.error(`Error while creating Quiz`, err.message);
    next(err);
  }
});

module.exports = router;

