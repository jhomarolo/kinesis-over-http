var express = require('express');
var router = express.Router();

router.get('/health', (req, res) => {
  return res.status(200).json({OK: "OK"});
});

module.exports = router; 