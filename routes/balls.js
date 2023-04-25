var express = require('express');
var router = express.Router();

//new code for Assignment13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */
const balls_controllers = require('../controllers/balls');
router.get('/', balls_controllers.balls_view_all_Page);

//ss6
router.get('/detail',secured, balls_controllers.balls_view_one_Page);

//ss7
/* GET create costume page */
router.get('/create',secured, balls_controllers.balls_create_Page);

//ss8
/* GET create update page */
router.get('/update',secured, balls_controllers.balls_update_Page);

//ss9
/* GET delete costume page */
router.get('/delete', secured, balls_controllers.balls_delete_Page);

module.exports = router;