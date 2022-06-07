const express = require('express');
const router = express.Router();
const signout = require('../controller/auth')

router.get('/signout',signout)
module.exports = router