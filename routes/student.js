const express = require('express')
const router = express.Router();
const ctrl = require('../controllers/student')

router.post('/student',ctrl.postStudent)

router.post('/student/detail',ctrl.getStudent)


module.exports = router