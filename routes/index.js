const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send('Hello');
})

module.exports = router;
