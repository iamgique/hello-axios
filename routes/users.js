const express = require('express');
const router = express.Router();
const users = require('../controller/users.controller')

router.get('/', async (req, res) => {
  try {
    const response = await users.get_user()
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response.data));
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(error.message));
  }
})

module.exports = router;
