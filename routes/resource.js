var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var balls_controller = require('../controllers/balls');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// balls ROUTES ///
// POST request for creating a balls.
router.post('/balls', balls_controller.balls_create_post);
// DELETE request to delete balls.
router.delete('/balls/:id', balls_controller.balls_delete);
// PUT request to update balls.
router.put('/balls/:id', balls_controller.balls_update_put);
// GET request for one Costume.
router.get('/balls/:id', balls_controller.balls_detail);
// GET request for list of all balls items.
router.get('/balls', balls_controller.balls_list);
module.exports = router;