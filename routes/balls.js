var express = require('express');
var router = express.Router();

/* GET home page. */
const balls_controllers = require('../controllers/balls');
router.get('/', balls_controllers.balls_view_all_Page);

//ss6
router.get('/detail', balls_controllers.balls_view_one_Page);

//ss7
/* GET create costume page */
router.get('/create', balls_controllers.balls_create_Page);

//ss8
/* GET create update page */
router.get('/update', balls_controllers.balls_update_Page);

//ss9
/* GET delete costume page */
router.get('/delete', balls_controllers.balls_delete_Page);

module.exports = router;