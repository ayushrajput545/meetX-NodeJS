const express = require('express');
const router = express.Router();

const{bookActivity, getMyBooking} = require('../controllers/bookingController')
const {auth} = require('../middlewares/auth')
 
router.post('/book-activity' ,auth, bookActivity)
router.get('/get-my-booking' , auth , getMyBooking)

module.exports = router