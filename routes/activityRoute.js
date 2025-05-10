const express = require('express');
const { activity, listActivity } = require('../controllers/activityController');
const router = express.Router();

 
router.post('/createactivity' , activity)
router.get('/listActivities' , listActivity)

module.exports = router