var express = require('express');
var router = express.Router();

/* GET home page. */
const balls_controllers = require('../controllers/balls');
router.get('/', balls_controllers.balls_view_all_Page);
 

module.exports = router;